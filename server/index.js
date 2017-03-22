/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
var bodyParser = require('body-parser')
// const apiServiceWrapper =require('./routes/APIWrapper.router')
const APIServiceWrapperController=require('./controllers/APIWrapper.controller');
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
// create application/json parser
var jsonParser = bodyParser.json()
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',





});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// app.use('/graphqlapi',apiServiceWrapper);

// app.get('/graphqlapi', function (req, res) {
//     res.send('GET request to the homepage')
// })

// POST method route
app.post('/graphql', jsonParser, function (req, res) {
    // APIServiceWrapperController.pyhtonServiceAPICallWrapper(req, res);
    pyhtonServiceAPICallWrapper(req, res)
    //res.send('POST request to the homepage')
})


console.log("@@@  connect to mork mode in dev:  ", ngrok)
// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});



function pyhtonServiceAPICallWrapper(req, res) {
    //var url='http://127.0.0.1:8000/graphql';
    var PythonSerivceHost="http://127.0.0.1:5000";
    console.log("req.headers",JSON.stringify(req.headers));
    console.log(" ####body",req.body.params);
    // console.log(" pyhtonServiceAPICallWrapper req: ",req)

    // console.log(" saveProblemAnswer req.params",req.params,"   | ",req.body,"  |  ",req.query);
    console.log(" req.get(headerName)", req.get('authentication'),req.get('authorization'),req.get('pythonserviceapi'));

    var url=PythonSerivceHost+"/"+req.get('pythonserviceapi');
    var HTTP_METHOD=req.get('HTTP_METHOD');//'POST'

    if (!HTTP_METHOD){
        HTTP_METHOD='POST';

    }

    console.log("  =====API wrapper URL: +++++++++++", url,req)//, req.body);


    fetch(url,

        {
            method: HTTP_METHOD,//'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':req.get('authorization'),
                'authentication':req.get('authentication')
            },
            body:req.body.params,//JSON.stringify(req.body.params),

            credentials: 'same-origin'
        }
    ).then(function(response) {
        console.log('%%%%%%final response', response)
        console.log('header', response.headers.get('Content-Type'))
        return response.json();

    }).then(function(json) {

        console.log('====pyhtonServiceAPICallWrapper success  got text', json)
        //res.setHeader('Content-Type', 'application/json');
        //res.json(json)
        res.json(json);
        //res.send(json);
    }).catch(function(ex) {
        console.log('===pyhtonServiceAPICallWrapper  Server failed', ex)
        res.json(ex);
    })



}
