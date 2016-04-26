YunPianAPI.prototype.SendTplSMS = function (mobile, tpl_id, tpl_value, callback) {
  var qs = require('querystring'), util = require('util');

  if (util.isArray(mobile)) {
    mobile = mobile.join();
  }

  var queryString = {
    'apikey': this.apikey,
    'mobile': mobile,
    'tpl_id': tpl_id,
    'tpl_value': qs.stringify(tpl_value),
  };

  HTTP.post('https://sms.yunpian.com/v2/sms/tpl_batch_send.json', { params: queryString }, function (error, result) {
    callback(error, result);
  });
}

export default function YunPianAPI(apikey) {
  this.apikey = apikey;
}

var setting = Meteor.settings.public.yunpian;
if (setting) {
  YunPianAPI = new YunPianAPI(setting.apikey);
} else {
  console.log('error', 'Please Add yunpian setting.');
}