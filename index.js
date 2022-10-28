const port = 3000;
const http = require('http');
 
const requestListener = (req, res)=>{
  console.log("Request is Incoming");
     
  const responseData = {
     internData:{
        slackUsername:"wamwithamuita",
        backend:true,
        age:25,
        bio:"I am a curious Javascript Developer or what i like to call 'an outlier always learning'"
    },
  }
   
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};

const server = http.createServer(requestListener);
 
server.listen(port,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});