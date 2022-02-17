const fs = require('fs');
const http = require('http');
const request = require('request')
const URL = process.argv[2]
const destination = process.argv[3]

const fileReadMessage = function(size, destination) {
  console.log(`Downloaded and saved ${size} bytes to ${destination}.`);
}


request(URL, function (error, response, body) {
  if(error) {
    console.error(error);
  }
  if (response.statusCode !== 200) {
    console.log(`Things did not go smoothly, ${response} was the result.`)
  }
  const size = body.length;
  fs.writeFile(destination, body, err => {
    if (err) {
      console.error(err);
    }
    fileReadMessage(size, destination);
  });
});