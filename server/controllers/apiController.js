let Redis = require('ioredis');
let apiController = {};


apiController.addChannel = (req,res,next) => {
  let channel = req.body.channel
  if(req.body.channel === ''){
      return res.status(400).send('invalid channel name');
  }

  let redis = new Redis();
  //use subscribe to sudo create channel by subscribing to channel
  redis.subscribe(req.body.channel, (error, count)=>{
      //if error attach error as res locals and continue
      if(error){
          return res.status(400).send('failed to addChannel');
      }
      //if no error add message added channel
      return res.status(200).send('added Channel')
  })

}

//router for client to publish on redis server
//need message and channel in req body
apiController.publish = (req, res, next) => {
  const channel = req.body.channel
  const message = req.body.message
  //if clientID match client DB
    //publish to redis using redis commands 

  //return server message to frontend
  if(channel === undefined || message === undefined) return res.status(400).send('undefined input');
  let redis = new Redis()
  redis.publish( channel, message, (error, count) => {
    if(error) {
      // console.log(1)
      return res.status(400).send('failed to publish!')
    } 
    // console.log(3)
    return res.status(200).send('message published to ' + channel + '. message published to ' + count + 'channel');
  })
  
};



module.exports = apiController;