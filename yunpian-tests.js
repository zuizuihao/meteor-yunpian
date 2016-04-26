// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by yunpian.js.
import YunPianAPI from "./yunpian.js";

var yunpian = new YunPianAPI('8b49a7c23fdb66741a41ecb9f03b8a72');

Tinytest.add('yunpian - SendTplSMS', function (test) {
  var mobile = ['15361602336'];
  var tpl_id = 1238089;
  var tpl_value = { '#code#': '1234' };

  yunpian.SendTplSMS(mobile, tpl_id, tpl_value, (error, mapData) => {
    if (error) {
      console.log('error', error);
      return;
    }
    console.log('send template message success');
  });
});
