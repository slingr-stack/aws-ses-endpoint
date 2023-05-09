package io.slingr.endpoints.awsses;

import com.amazonaws.*;
import com.amazonaws.auth.AWS4Signer;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.http.*;
import com.amazonaws.services.simpleemail.model.AmazonSimpleEmailServiceException;
import com.amazonaws.util.IOUtils;
import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.eclipse.jetty.http.HttpHeader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;

/**
 * <p>AWS SES endpoint
 * <p>
 * API Reference: https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html
 *
 * <p>Created by hpacini on 04/03/19.
 */
@SlingrEndpoint(name = "aws-ses", functionPrefix = "_")
public class AwsSesEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(AwsSesEndpoint.class);

    // https://docs.aws.amazon.com/general/latest/gr/rande.html#ses_region
    private static final String SERVICE_NAME = "email";

    @EndpointProperty
    private String accessKey;

    @EndpointProperty
    private String secretAccessKey;

    @EndpointProperty
    private String region;

    public AwsSesEndpoint() {
    }
    final String SERVICE_URI = "https://" + SERVICE_NAME + "." + region + ".amazonaws.com";
    @Override
    public String getApiUri() {
        return  SERVICE_URI;
    }


    @EndpointFunction(name = "_requestAwsSdk")
    public Json requestAwsSdk(FunctionRequest functionRequest) {

        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretAccessKey);

        //Instantiate the request
        Request<Void> request = new DefaultRequest<>(SERVICE_NAME);
        request.setHttpMethod(HttpMethodName.GET);
        request.setEndpoint(URI.create(SERVICE_URI));

        Json functionParams = functionRequest.getJsonParams();
        Json requestParams = functionParams.json("params");

        Map<String, String> params = transformParams(requestParams, null, null);

        for (String key : params.keySet()) {
            request.withParameter(key, params.get(key));
        }

        //Sign it...
        AWS4Signer signer = new AWS4Signer();
        signer.setRegionName(region);
        signer.setServiceName(request.getServiceName());
        signer.sign(request, awsCredentials);

        ClientConfiguration configuration = new ClientConfiguration();
        configuration.addHeader(HttpHeader.CONTENT_TYPE.asString(), "application/json;charset=UTF-8");
        configuration.addHeader(HttpHeader.ACCEPT.asString(), "application/json");

        //Execute it and get the response...
        Response<AmazonWebServiceResponse<String>> response = new AmazonHttpClient(configuration)
                .requestExecutionBuilder()
                .executionContext(new ExecutionContext(true))
                .request(request)
                .errorResponseHandler(new ErrorResponseHandler())
                .execute(new StringResponseHandler());
        return Json.parse(response.getAwsResponse().getResult());

    }

    private Map<String, String> transformParams(Json requestParams, Map<String, String> sendingParams, String partialKey) {

        Map<String, String> params;
        if (sendingParams != null) {
            params = sendingParams;
        } else {
            params = new HashMap<>();
        }

        for (String key : requestParams.keys()) {
            Object val = requestParams.object(key);

            if (val != null) {
                String setKey = partialKey != null ? partialKey + "." + key : key;
                if (val instanceof String) {
                    params.put(setKey, (String) val);
                } else if (val instanceof Json) {
                    Json json = (Json) val;
                    if (json.isList()) {
                        int i = 1;
                        for (Object obj : json.toList()) {
                            if (obj instanceof String) {
                                sendingParams.put(setKey + "." + i, (String) obj);
                            } else if (obj instanceof Json) {
                                transformParams((Json) obj, sendingParams, setKey + "." + i);
                            }
                            i++;
                        }
                    } else {
                        transformParams(json, params, setKey);
                    }
                }
            }
        }

        return params;
    }


    public class StringResponseHandler implements HttpResponseHandler<AmazonWebServiceResponse<String>> {

        @Override
        public AmazonWebServiceResponse<String> handle(com.amazonaws.http.HttpResponse response) throws IOException {

            AmazonWebServiceResponse<String> awsResponse = new AmazonWebServiceResponse<>();

            //putting response string in the result, available outside the handler
            awsResponse.setResult(IOUtils.toString(response.getContent()));

            return awsResponse;
        }

        @Override
        public boolean needsConnectionLeftOpen() {
            return false;
        }

    }


    public class ErrorResponseHandler implements HttpResponseHandler<SdkBaseException> {


        @Override
        public SdkBaseException handle(HttpResponse response) throws Exception {

            SdkBaseException sdkBaseException = new AmazonSimpleEmailServiceException(IOUtils.toString(response.getContent()));
            ((AmazonSimpleEmailServiceException) sdkBaseException).setStatusCode(response.getStatusCode());

            return sdkBaseException;
        }

        @Override
        public boolean needsConnectionLeftOpen() {
            return false;
        }
    }

}
