var fs = require('fs');
fs.readFile('1129.txt',function(err,data){
  if(err)
    console.log(err);

  var str = data.toString().split('\n');
  var temp = Math.ceil(Math.random()*199);
  console.log(str[temp]);
});
