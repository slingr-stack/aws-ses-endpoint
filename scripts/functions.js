/***************************************************************************
**                                                                        **
**             This file was generated with "slingr-helpgen"              **
**                                                                        **
**               For more info, check the following links:                **
**             https://www.npmjs.com/package/slingr-helpgen               **
**           https://github.com/slingr-stack/slingr-helpgen               **
**                                                                        **
***************************************************************************/

endpoint.email = {};

endpoint.email.metrics = {};

endpoint.email.metrics.batch = {};

endpoint.email.configurationSets = {};

endpoint.email.configurationSets.eventDestinations = {};

endpoint.email.contactLists = {};

endpoint.email.contactLists.contacts = {};

endpoint.email.customVerificationEmailTemplates = {};

endpoint.email.dedicatedIpPools = {};

endpoint.email.deliverabilityDashboard = {};

endpoint.email.deliverabilityDashboard.test = {};

endpoint.email.identities = {};

endpoint.email.identities.policies = {};

endpoint.email.templates = {};

endpoint.email.importJobs = {};

endpoint.email.configurationSets.eventdestinations = {};

endpoint.email.suppression = {};

endpoint.email.suppression.addresses = {};

endpoint.email.account = {};

endpoint.email.deliverabilityDashboard.blacklistReport = {};

endpoint.email.configurationSets.ConfigurationSetName = {};

endpoint.email.dedicatedIps = {};

endpoint.email.deliverabilityDashboard.testReports = {};

endpoint.email.deliverabilityDashboard.campaigns = {};

endpoint.email.deliverabilityDashboard.statisticsReport = {};

endpoint.email.deliverabilityDashboard.domains = {};

endpoint.email.deliverabilityDashboard.domains.campaigns = {};

endpoint.email.vdm = {};

endpoint.email.vdm.recommendations = {};

endpoint.email.tags = {};

endpoint.email.account.dedicatedIps = {};

endpoint.email.account.dedicatedIps.warmup = {};

endpoint.email.account.details = {};

endpoint.email.account.sending = {};

endpoint.email.account.suppression = {};

endpoint.email.account.vdm = {};

endpoint.email.configurationSets.deliveryOptions = {};

endpoint.email.configurationSets.reputationOptions = {};

endpoint.email.configurationSets.sending = {};

endpoint.email.configurationSets.suppressionOptions = {};

endpoint.email.configurationSets.trackingOptions = {};

endpoint.email.configurationSets.vdmOptions = {};

endpoint.email.dedicatedIps.pool = {};

endpoint.email.dedicatedIps.warmup = {};

endpoint.email.identities.configurationSet = {};

endpoint.email.identities.dkim = {};

endpoint.email.identities.EmailIdentity = {};

endpoint.email.identities.EmailIdentity.dkim = {};

endpoint.email.identities.EmailIdentity.dkim.signing = {};

endpoint.email.identities.feedback = {};

endpoint.email.identities.mailFrom = {};

endpoint.email.outboundBulkEmails = {};

endpoint.email.outboundCustomVerificationEmails = {};

endpoint.email.outboundEmails = {};

endpoint.email.templates.render = {};

endpoint.email.metrics.batch.post = function(httpOptions) {
    var url = parse('/v2/email/metrics/batch');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.configurationSets.post = function(httpOptions) {
    var url = parse('/v2/email/configuration-sets');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.configurationSets.eventDestinations.post = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/event-destinations', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.contactLists.contacts.post = function(ContactListName, httpOptions) {
    if (!ContactListName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ContactListName].');
        return;
    }
    var url = parse('/v2/email/contact-lists/:ContactListName/contacts', [ContactListName]);
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.contactLists.post = function(httpOptions) {
    var url = parse('/v2/email/contact-lists');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.customVerificationEmailTemplates.post = function(httpOptions) {
    var url = parse('/v2/email/custom-verification-email-templates');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.dedicatedIpPools.post = function(httpOptions) {
    var url = parse('/v2/email/dedicated-ip-pools');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.deliverabilityDashboard.test.post = function(httpOptions) {
    var url = parse('/v2/email/deliverability-dashboard/test');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.identities.post = function(httpOptions) {
    var url = parse('/v2/email/identities');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.identities.policies.post = function(EmailIdentity, PolicyName, httpOptions) {
    if (!EmailIdentity || !PolicyName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity,PolicyName].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/policies/:PolicyName', [EmailIdentity, PolicyName]);
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.templates.post = function(httpOptions) {
    var url = parse('/v2/email/templates');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.importJobs.post = function(httpOptions) {
    var url = parse('/v2/email/import-jobs');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.configurationSets.delete = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.configurationSets.eventdestinations.delete = function(ConfigurationSetName, EventDestinationName, httpOptions) {
    if (!ConfigurationSetName || !EventDestinationName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName,EventDestinationName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/eventdestinations/:EventDestinationName', [ConfigurationSetName, EventDestinationName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.contactLists.contacts.delete = function(ContactListName, EmailAddress, httpOptions) {
    if (!ContactListName || !EmailAddress) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ContactListName,EmailAddress].');
        return;
    }
    var url = parse('/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', [ContactListName, EmailAddress]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.contactLists.delete = function(ContactListName, httpOptions) {
    if (!ContactListName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ContactListName].');
        return;
    }
    var url = parse('/v2/email/contact-lists/:ContactListName', [ContactListName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.customVerificationEmailTemplates.delete = function(TemplateName, httpOptions) {
    if (!TemplateName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [TemplateName].');
        return;
    }
    var url = parse('/v2/email/custom-verification-email-templates/:TemplateName', [TemplateName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.dedicatedIpPools.delete = function(PoolName, httpOptions) {
    if (!PoolName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [PoolName].');
        return;
    }
    var url = parse('/v2/email/dedicated-ip-pools/:PoolName', [PoolName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.identities.delete = function(EmailIdentity, httpOptions) {
    if (!EmailIdentity) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity', [EmailIdentity]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.identities.policies.delete = function(EmailIdentity, PolicyName, httpOptions) {
    if (!EmailIdentity || !PolicyName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity,PolicyName].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/policies/:PolicyName', [EmailIdentity, PolicyName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.templates.delete = function(TemplateName, httpOptions) {
    if (!TemplateName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [TemplateName].');
        return;
    }
    var url = parse('/v2/email/templates/:TemplateName', [TemplateName]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.suppression.addresses.delete = function(EmailAddress, httpOptions) {
    if (!EmailAddress) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailAddress].');
        return;
    }
    var url = parse('/v2/email/suppression/addresses/:EmailAddress', [EmailAddress]);
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.account.get = function(httpOptions) {
    var url = parse('/v2/email/account');
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.deliverabilityDashboard.blacklistReport.get = function(httpOptions) {
    var url = parse('/v2/email/deliverability-dashboard/blacklist-report');
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.configurationSets.ConfigurationSetName.get = function(httpOptions) {
    var url = parse('/v2/email/configuration-sets/ConfigurationSetName');
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.configurationSets.eventDestinations.get = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/event-destinations', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.contactLists.contacts.get = function(ContactListName, EmailAddress, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', [ContactListName, EmailAddress]);
			break;
		case 1:
			url = parse('/v2/email/contact-lists/:ContactListName/contacts', [ContactListName]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.contactLists.get = function(ContactListName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/contact-lists/:ContactListName', [ContactListName]);
			break;
		case 0:
			url = parse('/v2/email/contact-lists');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.customVerificationEmailTemplates.get = function(TemplateName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/custom-verification-email-templates/:TemplateName', [TemplateName]);
			break;
		case 0:
			url = parse('/v2/email/custom-verification-email-templates');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.dedicatedIps.get = function(IP, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/dedicated-ips/:IP', [IP]);
			break;
		case 0:
			url = parse('/v2/email/dedicated-ips');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.dedicatedIpPools.get = function(PoolName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/dedicated-ip-pools/:PoolName', [PoolName]);
			break;
		case 0:
			url = parse('/v2/email/dedicated-ip-pools');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.deliverabilityDashboard.get = function(httpOptions) {
    var url = parse('/v2/email/deliverability-dashboard');
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.deliverabilityDashboard.testReports.get = function(ReportId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/deliverability-dashboard/test-reports/:ReportId', [ReportId]);
			break;
		case 0:
			url = parse('/v2/email/deliverability-dashboard/test-reports');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.deliverabilityDashboard.campaigns.get = function(CampaignId, httpOptions) {
    if (!CampaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [CampaignId].');
        return;
    }
    var url = parse('/v2/email/deliverability-dashboard/campaigns/:CampaignId', [CampaignId]);
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.deliverabilityDashboard.statisticsReport.get = function(Domain, httpOptions) {
    if (!Domain) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [Domain].');
        return;
    }
    var url = parse('/v2/email/deliverability-dashboard/statistics-report/:Domain', [Domain]);
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.identities.get = function(EmailIdentity, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/identities/:EmailIdentity', [EmailIdentity]);
			break;
		case 0:
			url = parse('/v2/email/identities');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.identities.policies.get = function(EmailIdentity, httpOptions) {
    if (!EmailIdentity) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/policies', [EmailIdentity]);
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.templates.get = function(TemplateName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/templates/:TemplateName', [TemplateName]);
			break;
		case 0:
			url = parse('/v2/email/templates');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.importJobs.get = function(JobId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/import-jobs/:JobId', [JobId]);
			break;
		case 0:
			url = parse('/v2/email/import-jobs');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.suppression.addresses.get = function(EmailAddress, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/v2/email/suppression/addresses/:EmailAddress', [EmailAddress]);
			break;
		case 0:
			url = parse('/v2/email/suppression/addresses');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsSes] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.email.configurationSets.get = function(httpOptions) {
    var url = parse('/v2/email/configuration-sets');
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.deliverabilityDashboard.domains.campaigns.get = function(SubscribedDomain, httpOptions) {
    if (!SubscribedDomain) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [SubscribedDomain].');
        return;
    }
    var url = parse('/v2/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns', [SubscribedDomain]);
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.vdm.recommendations.post = function(httpOptions) {
    var url = parse('/v2/email/vdm/recommendations');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.tags.get = function(httpOptions) {
    var url = parse('/v2/email/tags');
    sys.logs.debug('[awsSes] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.email.account.dedicatedIps.warmup.put = function(httpOptions) {
    var url = parse('/v2/email/account/dedicated-ips/warmup');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.account.details.post = function(httpOptions) {
    var url = parse('/v2/email/account/details');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.account.sending.put = function(httpOptions) {
    var url = parse('/v2/email/account/sending');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.account.suppression.put = function(httpOptions) {
    var url = parse('/v2/email/account/suppression');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.account.vdm.put = function(httpOptions) {
    var url = parse('/v2/email/account/vdm');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.configurationSets.deliveryOptions.put = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/delivery-options', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.configurationSets.reputationOptions.put = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/reputation-options', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.configurationSets.sending.put = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/sending', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.configurationSets.suppressionOptions.put = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/suppression-options', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.configurationSets.trackingOptions.put = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/tracking-options', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.configurationSets.vdmOptions.put = function(ConfigurationSetName, httpOptions) {
    if (!ConfigurationSetName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/vdm-options', [ConfigurationSetName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.dedicatedIps.pool.put = function(IP, httpOptions) {
    if (!IP) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [IP].');
        return;
    }
    var url = parse('/v2/email/dedicated-ips/:IP/pool', [IP]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.dedicatedIps.warmup.put = function(IP, httpOptions) {
    if (!IP) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [IP].');
        return;
    }
    var url = parse('/v2/email/dedicated-ips/:IP/warmup', [IP]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.deliverabilityDashboard.put = function(httpOptions) {
    var url = parse('/v2/email/deliverability-dashboard');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.identities.configurationSet.put = function(EmailIdentity, httpOptions) {
    if (!EmailIdentity) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/configuration-set', [EmailIdentity]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.identities.dkim.put = function(EmailIdentity, httpOptions) {
    if (!EmailIdentity) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/dkim', [EmailIdentity]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.identities.EmailIdentity.dkim.signing.put = function(httpOptions) {
    var url = parse('/v1/email/identities/EmailIdentity/dkim/signing');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.identities.feedback.put = function(EmailIdentity, httpOptions) {
    if (!EmailIdentity) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/feedback', [EmailIdentity]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.identities.mailFrom.put = function(EmailIdentity, httpOptions) {
    if (!EmailIdentity) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/mail-from', [EmailIdentity]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.suppression.addresses.put = function(httpOptions) {
    var url = parse('/v2/email/suppression/addresses');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.outboundBulkEmails.put = function(httpOptions) {
    var url = parse('/v2/email/outbound-bulk-emails');
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.outboundCustomVerificationEmails.post = function(httpOptions) {
    var url = parse('/v2/email/outbound-custom-verification-emails');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.outboundEmails.post = function(httpOptions) {
    var url = parse('/v2/email/outbound-emails');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.tags.post = function(httpOptions) {
    var url = parse('/v2/email/tags');
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.templates.render.post = function(TemplateName, httpOptions) {
    if (!TemplateName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [TemplateName].');
        return;
    }
    var url = parse('/v2/email/templates/:TemplateName/render', [TemplateName]);
    sys.logs.debug('[awsSes] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.email.tags.delete = function(httpOptions) {
    var url = parse('/v2/email/tags');
    sys.logs.debug('[awsSes] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.email.configurationSets.eventdestinations.put = function(ConfigurationSetName, EventDestinationName, httpOptions) {
    if (!ConfigurationSetName || !EventDestinationName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ConfigurationSetName,EventDestinationName].');
        return;
    }
    var url = parse('/v2/email/configuration-sets/:ConfigurationSetName/eventdestinations/:EventDestinationName', [ConfigurationSetName, EventDestinationName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.contactLists.contacts.put = function(ContactListName, EmailAddress, httpOptions) {
    if (!ContactListName || !EmailAddress) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ContactListName,EmailAddress].');
        return;
    }
    var url = parse('/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', [ContactListName, EmailAddress]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.contactLists.put = function(ContactListName, httpOptions) {
    if (!ContactListName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ContactListName].');
        return;
    }
    var url = parse('/v2/email/contact-lists/:ContactListName', [ContactListName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.customVerificationEmailTemplates.put = function(TemplateName, httpOptions) {
    if (!TemplateName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [TemplateName].');
        return;
    }
    var url = parse('/v2/email/custom-verification-email-templates/:TemplateName', [TemplateName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.identities.policies.put = function(EmailIdentity, PolicyName, httpOptions) {
    if (!EmailIdentity || !PolicyName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [EmailIdentity,PolicyName].');
        return;
    }
    var url = parse('/v2/email/identities/:EmailIdentity/policies/:PolicyName', [EmailIdentity, PolicyName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.email.templates.put = function(TemplateName, httpOptions) {
    if (!TemplateName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [TemplateName].');
        return;
    }
    var url = parse('/v2/email/templates/:TemplateName', [TemplateName]);
    sys.logs.debug('[awsSes] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

/***********************************
** Public API - Generic Functions **
***********************************/

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
}


endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
}

/**********************
**  Private helpers  **
**********************/

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}