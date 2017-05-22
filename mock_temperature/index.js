var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:8080');


client.on('connect', function () {
   console.log('>>> connected')
   // client.subscribe('/tips')
   setInterval(
   		//()=>{client.publish('/temperature', '70');},
   		// change in range [-40, 70)
   		()=>{client.publish('/temperature', String(Math.ceil(-40 + 110 * Math.random())));},
   		5000
   	);
   
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})

// client.end();