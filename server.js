const express = require('express'),
app = express(), //APP type
port = process.env.PORT || 3000; //The port that the application will listen on.

app.listen(port); //the app starts and it listens on the designated Port

console.log('server started');