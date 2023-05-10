step.sendEmailAwsSes = function (inputs) {

    var inputsLogic = {
        Simple: {
            Body: {
                Text: {
                    Data: inputs.message || ""
                }
            },
            Subject: {
                Data: inputs.subject || ""
            }
        },
        Destination: {
            BccAddresses: inputs.bccAddresses || [],
            CcAddresses:inputs.ccAddresses || [],
            ToAddresses: inputs.toAddresses || []
        },
        FromEmailAddress: inputs.fromEmailAddress || ""
    }

    var options = {
        path: "/v2/email/outbound-emails",
        body: inputsLogic
    }

    return endpoint._post(options);

}