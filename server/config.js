const config = {
  env:'LCL',


  port: process.env.PORT || 3000,


  APIWrapperURL:{

     'LCL':'http://127.0.0.1:5000',
     'DEV':'http://127.0.0.1:5000',
     'QAS':'http://127.0.0.1:5000',
     'PRD':'http://127.0.0.1:5000',
  },



};

module.exports= config;
