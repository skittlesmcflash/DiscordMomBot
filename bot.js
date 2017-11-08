var Discordie = require("discordie");
var Events = Discordie.Events;
var nagCheck = Math.random();
var client = new Discordie();

client.connect({ token: "Mzc1MTYyMjg3NTAzMTc5Nzc5.DNr9NA.yfcEIo_RIjtzoqjzu1t4PWPSPwk" });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
console.log("Connected as: " + client.User.username);
});


  client.Dispatcher.on(Events.MESSAGE_CREATE, e => {

  if (e.message.content.substring(0,2) == "Hi" && nagCheck <= 0.25){
  e.message.channel.sendMessage("Im so sick of this marriage, Steve. The jokes end here. We are getting a divorce.");
  nagCheck = Math.random();
}else if(e.message.content.substring(0,2) == "Hi"){
  nagCheck = Math.random();
}

  if (e.message.content.substring(0,12).toLowerCase() == "engagecowboy" || e.message.content.includes("bigenough")){
  e.message.channel.sendMessage("https://i.ytimg.com/vi/WMgAdutPzyI/maxresdefault.jpg");
  console.log(e.message.content);
  }
  });

  if (e.message.content.substring(0,2) == "im sick" && nagCheck <= 1.00){
  e.message.channel.sendMessage("Its because you are always on that phone.");
  nagCheck = Math.random();
}else if(e.message.content.substring(0,2) == "Hi"){
  nagCheck = Math.random();
}
