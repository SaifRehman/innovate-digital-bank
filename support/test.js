const fs = require('fs');
const ConversationV1 = require('watson-developer-cloud/conversation/v1');
var assistant = new ConversationV1({
  version: ConversationV1.VERSION_DATE_2017_05_26,
  iam_apikey: 'mfVR6iF4cqS-XIxAR1X99TDz_tdugFtTJz35o-oUWa6d',
  url: 'https://gateway-syd.watsonplatform.net/assistant/api'
});