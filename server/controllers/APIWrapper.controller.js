/**
 * Created by georgehu on 1/3/17.
 */

const fetch = require( 'isomorphic-fetch');
const serverConfig = require( '../config');
//var PythonSerivceHost_LCL="http://127.0.0.1:8000";

var PythonSerivceHost= serverConfig.APIWrapperURL[serverConfig.env]// PythonSerivceHost_LCL;


module.exports= function pyhtonServiceAPICallWrapper(req, res) {
  //var url='http://127.0.0.1:8000/graphql';

  // console.log(" saveProblemAnswer req.params",req.params,"   | ",req.body,"  |  ",req.query);
  console.log(" req.get(headerName)", req.get('authentication'),req.get('Authorization'),req.get('PythonServiceAPI'));

  var url=PythonSerivceHost+"/"+req.get('PythonServiceAPI');
 var HTTP_METHOD=req.get('HTTP_METHOD');//'POST'

  if (!HTTP_METHOD){
    HTTP_METHOD='POST';

  }

  console.log("  =====API wrapper URL: +++++++++++", url, req.body);


  fetch(url,

    {
      method: HTTP_METHOD,//'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':req.get('Authorization'),
        'authentication':req.get('authentication')
      },
      body:JSON.stringify(req.body),

      credentials: 'same-origin'
    }
  ).then(function(response) {
    //console.log('response', response)
    //console.log('header', response.headers.get('Content-Type'))
    return response.json();//text()
    //res.json('Admin Homepage');
  }).then(function(json) {

    console.log('====pyhtonServiceAPICallWrapper success  got text', json)
    //res.setHeader('Content-Type', 'application/json');
    //res.json(json)
    res.json(JSON.parse(json));
    //res.send(json);
  }).catch(function(ex) {
    console.log('===pyhtonServiceAPICallWrapper  Server failed', ex)
    res.json(ex);
  })



}
