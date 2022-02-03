var http= require(`http`);
var fs= require(`fs`);

function handleRequest(req,res){
    res.setHeader(`Content-Type`,`text/plain`);
    fs.createReadStream(`./readme.txt`).pipe(res);
};

http.createServer(handleRequest).listen(4000)