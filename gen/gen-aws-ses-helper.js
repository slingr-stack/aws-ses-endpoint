var fs = require('fs');

var FILE_NAME = "ses-helpers.js";
var CODE = '';
var SRC_USR = '';

var API = [
    { name: "CloneReceiptRuleSet" },
    { name: "CreateConfigurationSet" },
    { name: "CreateConfigurationSetEventDestination" },
    { name: "CreateConfigurationSetTrackingOptions" },
    { name: "CreateCustomVerificationEmailTemplate" },
    { name: "CreateReceiptFilter" },
    { name: "CreateReceiptRule" },
    { name: "CreateReceiptRuleSet" },
    { name: "CreateTemplate" },
    { name: "DeleteConfigurationSet" },
    { name: "DeleteConfigurationSetEventDestination" },
    { name: "DeleteConfigurationSetTrackingOptions" },
    { name: "DeleteCustomVerificationEmailTemplate" },
    { name: "DeleteIdentity" },
    { name: "DeleteIdentityPolicy" },
    { name: "DeleteReceiptFilter" },
    { name: "DeleteReceiptRule" },
    { name: "DeleteReceiptRuleSet" },
    { name: "DeleteTemplate" },
    { name: "DeleteVerifiedEmailAddress" },
    { name: "DescribeActiveReceiptRuleSet" },
    { name: "DescribeConfigurationSet" },
    { name: "DescribeReceiptRule" },
    { name: "DescribeReceiptRuleSet" },
    { name: "GetAccountSendingEnabled" },
    { name: "GetCustomVerificationEmailTemplate" },
    { name: "GetIdentityDkimAttributes" },
    { name: "GetIdentityMailFromDomainAttributes" },
    { name: "GetIdentityNotificationAttributes" },
    { name: "GetIdentityPolicies" },
    { name: "GetIdentityVerificationAttributes" },
    { name: "GetSendQuota" },
    { name: "GetSendStatistics" },
    { name: "GetTemplate" },
    { name: "ListConfigurationSets" },
    { name: "ListCustomVerificationEmailTemplates" },
    { name: "ListIdentities" },
    { name: "ListIdentityPolicies" },
    { name: "ListReceiptFilters" },
    { name: "ListReceiptRuleSets" },
    { name: "ListTemplates" },
    { name: "ListVerifiedEmailAddresses" },
    { name: "PutIdentityPolicy" },
    { name: "ReorderReceiptRuleSet" },
    { name: "SendBounce" },
    { name: "SendBulkTemplatedEmail" },
    { name: "SendCustomVerificationEmail" },
    { name: "SendEmail" },
    { name: "SendRawEmail" },
    { name: "SendTemplatedEmail" },
    { name: "SetActiveReceiptRuleSet" },
    { name: "SetIdentityDkimEnabled" },
    { name: "SetIdentityFeedbackForwardingEnabled" },
    { name: "SetIdentityHeadersInNotificationsEnabled" },
    { name: "SetIdentityMailFromDomain" },
    { name: "SetIdentityNotificationTopic" },
    { name: "SetReceiptRulePosition" },
    { name: "TestRenderTemplate" },
    { name: "UpdateAccountSendingEnabled" },
    { name: "UpdateConfigurationSetEventDestination" },
    { name: "UpdateConfigurationSetReputationMetricsEnabled" },
    { name: "UpdateConfigurationSetSendingEnabled" },
    { name: "UpdateConfigurationSetTrackingOptions" },
    { name: "UpdateCustomVerificationEmailTemplate" },
    { name: "UpdateReceiptRule" },
    { name: "UpdateTemplate" },
    { name: "VerifyDomainDkim" },
    { name: "VerifyDomainIdentity" },
    { name: "VerifyEmailAddress" },
    { name: "VerifyEmailIdentity" },

];

var makeEndpointsHelpers = function () {

    for (var i in API) {
        var apiInfo = API[i];
        var method = apiInfo.name;

        var functionName = `endpoint.${method} = function(requestParameters) {\n\n`;
        functionName += `\trequestParameters = requestParameters || {};\n`;
        functionName += `\trequestParameters.Action = '${method}';\n\n`;
        functionName += `\treturn endpoint._requestAwsSdk({\n`;
        functionName += `\t\tpath: '/',\n`;
        functionName += `\t\tparams: requestParameters\n`;
        functionName += `\t});\n`;
        functionName += `};\n\n`;

        CODE += functionName;

    }


    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//  This file is generated with aws-ses/gen/gen-aws-ses-helpers.js      //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\n' + CODE + '\n' + SRC_USR;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
