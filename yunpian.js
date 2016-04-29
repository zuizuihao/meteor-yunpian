
var setting = Meteor.settings.private.yunpian;
if (!setting) {
  console.log('error', 'Please Add yunpian setting.');
}

YunPianAPI = {};

YunPianAPI.SendTplSMS = function (mobile, tpl_id, tpl_value, callback) {
  var qs = require('querystring'), util = require('util');

  if (util.isArray(mobile)) {
    mobile = mobile.join();
  }

  var queryString = {
    'apikey': setting.apikey,
    'mobile': mobile,
    'tpl_id': tpl_id,
    'tpl_value': qs.stringify(tpl_value),
  };

  HTTP.post('https://sms.yunpian.com/v2/sms/tpl_batch_send.json', { params: queryString }, function (error, result) {
    callback(error, result);
  });
}

