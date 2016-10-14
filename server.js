var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    'article-one': {
    title:'Article-one',
    heading:'article-one!',
    content:`<p>This is my first ever content and I am so excited about it! Or maybe I'm just lying.</p>
            <p> In fact I have two blogs of my own so talk about it.</p>
            <p>I dont want to fill the page.</p>`
        },
        'article-two':{
         title:'Article-two',
    heading:'article-two!',
    content:`<p>This is my second ever content and I am so excited about it! Or maybe I'm just lying.</p>
            <p> In fact I have two blogs of my own so talk about it.</p>
            <p>I dont want to fill the page.</p>`
        },
        'article-three':{
             title:'Article-three',
    heading:'article-three!',
    content:`<p>This is my third ever content and I am so excited about it! Or maybe I'm just lying.</p>
            <p> In fact I have two blogs of my own so talk about it.</p>
            <p>I dont want to fill the page.</p>`
        },
};
                
        
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =`
    <html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
            ${heading}
        </title>
    </head>
    <body>
       <div class="container"> 
       <div>
          <a href="/">HOME</a>  
        </div>
        <div>
            <h3>CONTENT </h3>
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    </html>
`;
 return htmlTemplate;
}
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res) {
    var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('\counter', function(res,req) {
    counter=counter+1;
    res.send(counter.toString());
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
