---
title: AWS Simple Email Service endpoint
keywords: 
last_updated: April 4, 2019
tags: []
summary: "Detailed description of the API of the AWS Simple Email Service endpoint."
---

## Overview

The AWS Simple Email Service endpoint has the following features:
 
- Authentication
- Automatic signing of request
- Helpers to use the REST API

Please make sure you take a look at the documentation from AWS Simple Email Service as features are based on its API:

- [API Reference](https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html)

## Quick start

First of all you will need to create an instance for AWS Connect. Once you have created it and the
endpoint is configured, you can start making calls to the API.

After you configure the key and secret you can use the helpers to send an email. 

```js
// Sending email using helper
var res = app.endpoints.awsSes.SendEmail({
  'Destination.ToAddresses.member.1': 'demo@domain.com',
  'Message.Subject.Data': 'Test message',
  'Message.Body.Text.Data': 'Hello. I hope you are having a good day!',
  'Source': 'from@domain.com'
});
log(JSON.stringify(res));
```

```js
var res = app.endpoints.awsSes.SendEmail({
  'Destination': {
    'ToAddresses': {
      'member': ['demo@domain.com', 'demo2@domain.com']
    }
  },
  'Message': {
    'Subject':{
      'Data': 'Test Message'
    },
    'Body': {
      'Text': {
        'Data': 'Hello. I hope you are having a good day!'
      }
    }
  },
  'Source': 'from@domain.com'
});
log(JSON.stringify(res));
```

Or you can retrieve the identities list:

```js
var res = app.endpoints.awsSes.ListIdentities();
log(JSON.stringify(res));
```

## Configuration

In order to configure the endpoint, you previously need to have an AWS account and an instance
created for AWS Connect.

### AWS Access Key

The access key for the user making the calls. Make sure the user has access to your AWS Connect instance.

### AWS Secret Access Key

The secret access key for the user making the calls. Make sure the user has access to your AWS Connect instance.

### Region

The region where your AWS Connect instance was created. For example `us-east-1`.


## Javascript API

### REST API shortcuts

The endpoint provides methods to access all methods in the [REST API](https://docs.aws.amazon.com/ses/latest/APIReference/Welcome.html).
Here is a list of the available methods in the API, but you should check AWS Simple Email Service documentation for more information:

```js
endpoint.awsses.CloneReceiptRuleSet(requestParameters);
endpoint.awsses.CreateConfigurationSet(requestParameters);
endpoint.awsses.CreateConfigurationSetEventDestination(requestParameters);
endpoint.awsses.CreateConfigurationSetTrackingOptions(requestParameters);
endpoint.awsses.CreateCustomVerificationEmailTemplate(requestParameters);
endpoint.awsses.CreateReceiptFilter(requestParameters);
endpoint.awsses.CreateReceiptRule(requestParameters);
endpoint.awsses.CreateReceiptRuleSet(requestParameters);
endpoint.awsses.CreateTemplate(requestParameters);
endpoint.awsses.DeleteConfigurationSet(requestParameters);
endpoint.awsses.DeleteConfigurationSetEventDestination(requestParameters);
endpoint.awsses.DeleteConfigurationSetTrackingOptions(requestParameters);
endpoint.awsses.DeleteCustomVerificationEmailTemplate(requestParameters);
endpoint.awsses.DeleteIdentity(requestParameters);
endpoint.awsses.DeleteIdentityPolicy(requestParameters);
endpoint.awsses.DeleteReceiptFilter(requestParameters);
endpoint.awsses.DeleteReceiptRule(requestParameters);
endpoint.awsses.DeleteReceiptRuleSet(requestParameters);
endpoint.awsses.DeleteTemplate(requestParameters);
endpoint.awsses.DeleteVerifiedEmailAddress(requestParameters);
endpoint.awsses.DescribeActiveReceiptRuleSet(requestParameters);
endpoint.awsses.DescribeConfigurationSet(requestParameters);
endpoint.awsses.DescribeReceiptRule(requestParameters);
endpoint.awsses.DescribeReceiptRuleSet(requestParameters);
endpoint.awsses.GetAccountSendingEnabled(requestParameters);
endpoint.awsses.GetCustomVerificationEmailTemplate(requestParameters);
endpoint.awsses.GetIdentityDkimAttributes(requestParameters);
endpoint.awsses.GetIdentityMailFromDomainAttributes(requestParameters);
endpoint.awsses.GetIdentityNotificationAttributes(requestParameters);
endpoint.awsses.GetIdentityPolicies(requestParameters);
endpoint.awsses.GetIdentityVerificationAttributes(requestParameters);
endpoint.awsses.GetSendQuota(requestParameters);
endpoint.awsses.GetSendStatistics(requestParameters);
endpoint.awsses.GetTemplate(requestParameters);
endpoint.awsses.ListConfigurationSets(requestParameters);
endpoint.awsses.ListCustomVerificationEmailTemplates(requestParameters);
endpoint.awsses.ListIdentities(requestParameters);
endpoint.awsses.ListIdentityPolicies(requestParameters);
endpoint.awsses.ListReceiptFilters(requestParameters);
endpoint.awsses.ListReceiptRuleSets(requestParameters);
endpoint.awsses.ListTemplates(requestParameters);
endpoint.awsses.ListVerifiedEmailAddresses(requestParameters);
endpoint.awsses.PutIdentityPolicy(requestParameters);
endpoint.awsses.ReorderReceiptRuleSet(requestParameters);
endpoint.awsses.SendBounce(requestParameters);
endpoint.awsses.SendBulkTemplatedEmail(requestParameters);
endpoint.awsses.SendCustomVerificationEmail(requestParameters);
endpoint.awsses.SendEmail(requestParameters);
endpoint.awsses.SendRawEmail(requestParameters);
endpoint.awsses.SendTemplatedEmail(requestParameters);
endpoint.awsses.SetActiveReceiptRuleSet(requestParameters);
endpoint.awsses.SetIdentityDkimEnabled(requestParameters);
endpoint.awsses.SetIdentityFeedbackForwardingEnabled(requestParameters);
endpoint.awsses.SetIdentityHeadersInNotificationsEnabled(requestParameters);
endpoint.awsses.SetIdentityMailFromDomain(requestParameters);
endpoint.awsses.SetIdentityNotificationTopic(requestParameters);
endpoint.awsses.SetReceiptRulePosition(requestParameters);
endpoint.awsses.TestRenderTemplate(requestParameters);
endpoint.awsses.UpdateAccountSendingEnabled(requestParameters);
endpoint.awsses.UpdateConfigurationSetEventDestination(requestParameters);
endpoint.awsses.UpdateConfigurationSetReputationMetricsEnabled(requestParameters);
endpoint.awsses.UpdateConfigurationSetSendingEnabled(requestParameters);
endpoint.awsses.UpdateConfigurationSetTrackingOptions(requestParameters);
endpoint.awsses.UpdateCustomVerificationEmailTemplate(requestParameters);
endpoint.awsses.UpdateReceiptRule(requestParameters);
endpoint.awsses.UpdateTemplate(requestParameters);
endpoint.awsses.VerifyDomainDkim(requestParameters);
endpoint.awsses.VerifyDomainIdentity(requestParameters);
endpoint.awsses.VerifyEmailAddress(requestParameters);
endpoint.awsses.VerifyEmailIdentity(requestParameters);
```

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
