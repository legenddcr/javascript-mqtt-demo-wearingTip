'use strict'

const Koa = require('koa');
const mqtt = require('mqtt');
const app = new Koa();


var msg = {temperature:"-",tips:""};
// response
app.use(ctx => {
  ctx.body = "当前温度:" + msg.temperature + "度" + "\n" +
             '穿衣提示:'+ msg.tips + "\n"  ;
});

// Replace original web server port 3000
// Client can access by: https://node-js-practrice-legenddcr.c9users.io:8082/
app.listen(8082);

//mqtt
var client  = mqtt.connect('mqtt://localhost:8080');

client.on('connect', function () {
   console.log('>>> connected');
   client.subscribe('/tips');
})

client.on('message', function (topic, message) {
  var data = JSON.parse(message.toString());
  console.log(message.toString()); 
  console.log(data.tips); 
  msg = data;
  
  // if (temperature+1) {}
  // message is Buffer
  // let str = message.toString();
  // let data = JSON.parse(message);
  // console.log(data.tips);
  // msg =  message.toString();
})