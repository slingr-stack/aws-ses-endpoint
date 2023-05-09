---
title: AWS Simple Email Service endpoint
keywords: 
last_updated: May 9, 2023
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

# Javascript API

The Javascript API of the awsSes endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`DELETE`,`GET`,`PUT` requests to the [awsSes API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.awsSes.post('/v2/email/outbound-emails', body)
var response = app.endpoints.awsSes.post('/v2/email/outbound-emails')
var response = app.endpoints.awsSes.delete('/v2/email/templates/:TemplateName')
var response = app.endpoints.awsSes.get('/v2/email/deliverability-dashboard')
var response = app.endpoints.awsSes.put('/v2/email/configuration-sets/:ConfigurationSetName/tracking-options', body)
var response = app.endpoints.awsSes.put('/v2/email/configuration-sets/:ConfigurationSetName/tracking-options')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v2/email/metrics/batch'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.metrics.batch.post(body)
```
---
* API URL: '/v2/email/configuration-sets'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.configurationSets.post(body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.configurationSets.eventDestinations.post(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName/contacts'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.contactLists.contacts.post(ContactListName, body)
```
---
* API URL: '/v2/email/contact-lists'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.contactLists.post(body)
```
---
* API URL: '/v2/email/custom-verification-email-templates'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.customVerificationEmailTemplates.post(body)
```
---
* API URL: '/v2/email/dedicated-ip-pools'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.dedicatedIpPools.post(body)
```
---
* API URL: '/v2/email/deliverability-dashboard/test'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.test.post(body)
```
---
* API URL: '/v2/email/identities'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.identities.post(body)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/policies/:PolicyName'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.identities.policies.post(EmailIdentity, PolicyName, body)
```
---
* API URL: '/v2/email/templates'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.templates.post(body)
```
---
* API URL: '/v2/email/import-jobs'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.importJobs.post(body)
```
---
* API URL: '/v2/email/vdm/recommendations'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.vdm.recommendations.post(body)
```
---
* API URL: '/v2/email/account/details'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.account.details.post(body)
```
---
* API URL: '/v2/email/outbound-custom-verification-emails'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.outboundCustomVerificationEmails.post(body)
```
---
* API URL: '/v2/email/outbound-emails'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.outboundEmails.post(body)
```
---
* API URL: '/v2/email/tags'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.tags.post(body)
```
---
* API URL: '/v2/email/templates/:TemplateName/render'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsSes.email.templates.render.post(TemplateName, body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.configurationSets.delete(ConfigurationSetName)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/eventdestinations/:EventDestinationName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.configurationSets.eventdestinations.delete(ConfigurationSetName, EventDestinationName)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.contactLists.contacts.delete(ContactListName, EmailAddress)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.contactLists.delete(ContactListName)
```
---
* API URL: '/v2/email/custom-verification-email-templates/:TemplateName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.customVerificationEmailTemplates.delete(TemplateName)
```
---
* API URL: '/v2/email/dedicated-ip-pools/:PoolName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.dedicatedIpPools.delete(PoolName)
```
---
* API URL: '/v2/email/identities/:EmailIdentity'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.identities.delete(EmailIdentity)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/policies/:PolicyName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.identities.policies.delete(EmailIdentity, PolicyName)
```
---
* API URL: '/v2/email/templates/:TemplateName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.templates.delete(TemplateName)
```
---
* API URL: '/v2/email/suppression/addresses/:EmailAddress'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.suppression.addresses.delete(EmailAddress)
```
---
* API URL: '/v2/email/tags'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsSes.email.tags.delete()
```
---
* API URL: '/v2/email/account'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.account.get()
```
---
* API URL: '/v2/email/deliverability-dashboard/blacklist-report'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.blacklistReport.get()
```
---
* API URL: '/v2/email/configuration-sets/ConfigurationSetName'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.configurationSets.ConfigurationSetName.get()
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.configurationSets.eventDestinations.get(ConfigurationSetName)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.contactLists.contacts.get(ContactListName)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName/contacts'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.contactLists.contacts.get()
```
---
* API URL: '/v2/email/contact-lists/:ContactListName'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.contactLists.get()
```
---
* API URL: '/v2/email/contact-lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.contactLists.get()
```
---
* API URL: '/v2/email/custom-verification-email-templates/:TemplateName'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.customVerificationEmailTemplates.get()
```
---
* API URL: '/v2/email/custom-verification-email-templates'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.customVerificationEmailTemplates.get()
```
---
* API URL: '/v2/email/dedicated-ips/:IP'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.dedicatedIps.get()
```
---
* API URL: '/v2/email/dedicated-ips'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.dedicatedIps.get()
```
---
* API URL: '/v2/email/dedicated-ip-pools/:PoolName'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.dedicatedIpPools.get()
```
---
* API URL: '/v2/email/dedicated-ip-pools'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.dedicatedIpPools.get()
```
---
* API URL: '/v2/email/deliverability-dashboard'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.get()
```
---
* API URL: '/v2/email/deliverability-dashboard/test-reports/:ReportId'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.testReports.get()
```
---
* API URL: '/v2/email/deliverability-dashboard/test-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.testReports.get()
```
---
* API URL: '/v2/email/deliverability-dashboard/campaigns/:CampaignId'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.campaigns.get(CampaignId)
```
---
* API URL: '/v2/email/deliverability-dashboard/statistics-report/:Domain'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.statisticsReport.get(Domain)
```
---
* API URL: '/v2/email/identities/:EmailIdentity'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.identities.get()
```
---
* API URL: '/v2/email/identities'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.identities.get()
```
---
* API URL: '/v2/email/identities/:EmailIdentity/policies'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.identities.policies.get(EmailIdentity)
```
---
* API URL: '/v2/email/templates/:TemplateName'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.templates.get()
```
---
* API URL: '/v2/email/templates'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.templates.get()
```
---
* API URL: '/v2/email/import-jobs/:JobId'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.importJobs.get()
```
---
* API URL: '/v2/email/import-jobs'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.importJobs.get()
```
---
* API URL: '/v2/email/suppression/addresses/:EmailAddress'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.suppression.addresses.get()
```
---
* API URL: '/v2/email/suppression/addresses'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.suppression.addresses.get()
```
---
* API URL: '/v2/email/configuration-sets'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.configurationSets.get()
```
---
* API URL: '/v2/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.domains.campaigns.get(SubscribedDomain)
```
---
* API URL: '/v2/email/tags'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsSes.email.tags.get()
```
---
* API URL: '/v2/email/account/dedicated-ips/warmup'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.account.dedicatedIps.warmup.put(body)
```
---
* API URL: '/v2/email/account/sending'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.account.sending.put(body)
```
---
* API URL: '/v2/email/account/suppression'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.account.suppression.put(body)
```
---
* API URL: '/v2/email/account/vdm'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.account.vdm.put(body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/delivery-options'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.deliveryOptions.put(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/reputation-options'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.reputationOptions.put(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/sending'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.sending.put(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/suppression-options'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.suppressionOptions.put(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/tracking-options'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.trackingOptions.put(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/vdm-options'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.vdmOptions.put(ConfigurationSetName, body)
```
---
* API URL: '/v2/email/dedicated-ips/:IP/pool'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.dedicatedIps.pool.put(IP, body)
```
---
* API URL: '/v2/email/dedicated-ips/:IP/warmup'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.dedicatedIps.warmup.put(IP, body)
```
---
* API URL: '/v2/email/deliverability-dashboard'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.deliverabilityDashboard.put(body)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/configuration-set'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.identities.configurationSet.put(EmailIdentity, body)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/dkim'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.identities.dkim.put(EmailIdentity, body)
```
---
* API URL: '/v1/email/identities/EmailIdentity/dkim/signing'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.identities.EmailIdentity.dkim.signing.put(body)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/feedback'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.identities.feedback.put(EmailIdentity, body)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/mail-from'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.identities.mailFrom.put(EmailIdentity, body)
```
---
* API URL: '/v2/email/suppression/addresses'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.suppression.addresses.put(body)
```
---
* API URL: '/v2/email/outbound-bulk-emails'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.outboundBulkEmails.put(body)
```
---
* API URL: '/v2/email/configuration-sets/:ConfigurationSetName/eventdestinations/:EventDestinationName'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.configurationSets.eventdestinations.put(ConfigurationSetName, EventDestinationName, body)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.contactLists.contacts.put(ContactListName, EmailAddress, body)
```
---
* API URL: '/v2/email/contact-lists/:ContactListName'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.contactLists.put(ContactListName, body)
```
---
* API URL: '/v2/email/custom-verification-email-templates/:TemplateName'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.customVerificationEmailTemplates.put(TemplateName, body)
```
---
* API URL: '/v2/email/identities/:EmailIdentity/policies/:PolicyName'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.identities.policies.put(EmailIdentity, PolicyName, body)
```
---
* API URL: '/v2/email/templates/:TemplateName'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsSes.email.templates.put(TemplateName, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,DELETE,GET,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/v2/email/metrics/batch<br>/v2/email/configuration-sets<br>/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations<br>/v2/email/contact-lists/{ContactListName}/contacts<br>/v2/email/contact-lists<br>/v2/email/custom-verification-email-templates<br>/v2/email/dedicated-ip-pools<br>/v2/email/deliverability-dashboard/test<br>/v2/email/identities<br>/v2/email/identities/{EmailIdentity}/policies/{PolicyName}<br>/v2/email/templates<br>/v2/email/import-jobs<br>/v2/email/vdm/recommendations<br>/v2/email/account/details<br>/v2/email/outbound-custom-verification-emails<br>/v2/email/outbound-emails<br>/v2/email/tags<br>/v2/email/templates/{TemplateName}/render<br>/v2/email/configuration-sets/{ConfigurationSetName}<br>/v2/email/configuration-sets/{ConfigurationSetName}/eventdestinations/{EventDestinationName}<br>/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}<br>/v2/email/contact-lists/{ContactListName}<br>/v2/email/custom-verification-email-templates/{TemplateName}<br>/v2/email/dedicated-ip-pools/{PoolName}<br>/v2/email/identities/{EmailIdentity}<br>/v2/email/identities/{EmailIdentity}/policies/{PolicyName}<br>/v2/email/templates/{TemplateName}<br>/v2/email/suppression/addresses/{EmailAddress}<br>/v2/email/tags<br>/v2/email/account<br>/v2/email/deliverability-dashboard/blacklist-report<br>/v2/email/configuration-sets/ConfigurationSetName<br>/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations<br>/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}<br>/v2/email/contact-lists/{ContactListName}/contacts<br>/v2/email/contact-lists/{ContactListName}<br>/v2/email/contact-lists<br>/v2/email/custom-verification-email-templates/{TemplateName}<br>/v2/email/custom-verification-email-templates<br>/v2/email/dedicated-ips/{IP}<br>/v2/email/dedicated-ips<br>/v2/email/dedicated-ip-pools/{PoolName}<br>/v2/email/dedicated-ip-pools<br>/v2/email/deliverability-dashboard<br>/v2/email/deliverability-dashboard/test-reports/{ReportId}<br>/v2/email/deliverability-dashboard/test-reports<br>/v2/email/deliverability-dashboard/campaigns/{CampaignId}<br>/v2/email/deliverability-dashboard/statistics-report/{Domain}<br>/v2/email/identities/{EmailIdentity}<br>/v2/email/identities<br>/v2/email/identities/{EmailIdentity}/policies<br>/v2/email/templates/{TemplateName}<br>/v2/email/templates<br>/v2/email/import-jobs/{JobId}<br>/v2/email/import-jobs<br>/v2/email/suppression/addresses/{EmailAddress}<br>/v2/email/suppression/addresses<br>/v2/email/configuration-sets<br>/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns<br>/v2/email/tags<br>/v2/email/account/dedicated-ips/warmup<br>/v2/email/account/sending<br>/v2/email/account/suppression<br>/v2/email/account/vdm<br>/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options<br>/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options<br>/v2/email/configuration-sets/{ConfigurationSetName}/sending<br>/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options<br>/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options<br>/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options<br>/v2/email/dedicated-ips/{IP}/pool<br>/v2/email/dedicated-ips/{IP}/warmup<br>/v2/email/deliverability-dashboard<br>/v2/email/identities/{EmailIdentity}/configuration-set<br>/v2/email/identities/{EmailIdentity}/dkim<br>/v1/email/identities/EmailIdentity/dkim/signing<br>/v2/email/identities/{EmailIdentity}/feedback<br>/v2/email/identities/{EmailIdentity}/mail-from<br>/v2/email/suppression/addresses<br>/v2/email/outbound-bulk-emails<br>/v2/email/configuration-sets/{ConfigurationSetName}/eventdestinations/{EventDestinationName}<br>/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}<br>/v2/email/contact-lists/{ContactListName}<br>/v2/email/custom-verification-email-templates/{TemplateName}<br>/v2/email/identities/{EmailIdentity}/policies/{PolicyName}<br>/v2/email/templates/{TemplateName}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

### Send Email

Sends an email message.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>To Addresses</td>
        <td>email</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            An array that contains the email addresses of the "To" recipients for the email.
        </td>
    </tr>
    <tr>
        <td>Bcc Addresses</td>
        <td>email</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            An array that contains the email addresses of the "BCC" (blind carbon copy) recipients for the email.
        </td>
    </tr>
    <tr>
        <td>Cc Addresses</td>
        <td>email</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            An array that contains the email addresses of the "CC" (carbon copy) recipients for the email
        </td>
    </tr>
    <tr>
        <td>From Email Address</td>
        <td>email</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The email address to use as the "From" address for the email. The address that you specify has to be verified.
        </td>
    </tr>
    <tr>
        <td>Message</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The body of the message.
        </td>
    </tr>
    <tr>
        <td>Subject</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The subject line of the email. The subject line can only contain 7-bit ASCII characters. However, you can specify non-ASCII characters in the subject line by using encoded-word syntax, as described in RFC 2047.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*


## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
