// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/HelloWorldJobNodeSDKTest?api-version=2016-02-01.3.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:52:24 GMT',
  etag: '0x8D359F1CCB61F3D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e5f24243-50c7-4a31-92b9-2621768f603a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest',
  date: 'Fri, 01 Apr 2016 05:52:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/HelloWorldJobNodeSDKTest?api-version=2016-02-01.3.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:52:24 GMT',
  etag: '0x8D359F1CCB61F3D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e5f24243-50c7-4a31-92b9-2621768f603a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest',
  date: 'Fri, 01 Apr 2016 05:52:24 GMT',
  connection: 'close' });
 return result; }]];