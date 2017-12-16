const express = require('express');
const aws = require('aws-sdk');

let PORT = process.env.PORT || 8080;

const app = express();
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);

// require("./routes/awsRoutes")(app);

const S3_BUCKET = process.env.S3_BUCKET;


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
