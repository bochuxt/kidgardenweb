/*
 *
 * GraphQladmin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectGraphQladmin from './selectors';
// import messages from './messages';

import { Row, Col } from 'antd';
import GraphiQL from 'graphiql';
import Form from "react-jsonschema-form";

var ql=`{
      allPoints(first:2){
          edges{
              node{
                  lrn
              }
          }
      }
  }`;

var mutation=`
mutation {
  createPerson(name:"gg"){
    person{
      name
    }
    ok
  }
  
}

`;

var filterQuery=`
{
 pointField(id:"UG9pbnQ6MQ=="){
  name
  lrn
  
}

}

`;

const jsonschema = {
    //"title": "GraphQL Input Query",
    type: "string"
};
const uiSchema = {
     "ui:widget": "textarea",
  //  "ui:help": "Hint: input graphQL here!",
    "ui:autofocus": true,
    "ui:options": {
        rows: 300
    }
}
const log = (type) => console.log.bind(console, type);

function graphQLFetcher(graphQLParams) {

    // console.log(" graphQLParams :",JSON.stringify( graphQLParams))
    // graphQLParams=ql;
    //
    // return fetch(window.location.origin + '/graphql', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(graphQLParams),
    // }).then(response => {
    //     console.log(" @@@@@ QL query data received from Graph QL server: ",response.json() )
    //     this.setState({requestReady:true,graphqlResult: response.json()});
    //
    //
    //     console.log("State :: ------> ", this.state);
    //     response.json()
    // });
}
export class GraphQladmin extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(prop) {
        super(prop);

        this.state = {
            query:ql,
            graphqlResult: [],
            requestReady:false
        }
    }

    componentDidMount()
        {
            var requestData =
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "authentication":1,// localStorage.getItem('token'),
                        "PythonServiceApi": 'graphql',
                        "http_method": "POST",
                        "Authorization": 1

                    },
                    credentials: 'same-origin',
                    body: JSON.stringify({
                        "function": "default",
                        "params": JSON.stringify(this.state.query)
                    })
                };

            var post_result = fetch("/graphql", requestData);///NodeAPIServiceWrapper

            post_result.then((response) => {

                return response.json();
            }).then((json) => {
                this.setState({requestReady:true,graphqlResult: json});


                console.log("State :: ------> ", this.state);
            }).catch((ex) => {
                console.log('Exception on get graphql results : ', ex)
            });
        }



// <GraphiQL fetcher={graphQLFetcher} />

    handleFormSubmit({formData}){
        console.log(" form submit data; ",formData);
        this.setState({query:formData,requestReady:false,graphqlResult: {}  });

        var requestData =
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "authentication":1,// localStorage.getItem('token'),
                    "PythonServiceApi": 'graphql',
                    "http_method": "POST",
                    "Authorization": 1

                },
                credentials: 'same-origin',
                body: JSON.stringify({
                    "function": "default",
                    "params": JSON.stringify(formData)
                })
            };

        var post_result = fetch("/graphql", requestData);///NodeAPIServiceWrapper

        post_result.then((response) => {

            return response.json();
        }).then((json) => {

            this.setState({requestReady:true,graphqlResult: json});
            console.log("State :: ------> ", this.state);
        }).catch((ex) => {
            console.log('Exception on get graphql results : ', ex)
        });
    }

  render() {


            return (


                    <div>
                        <Row style={{minHeight:20}}/>
                        <Row type="flex" justify="center" align="center">
                            <Col span={6}>

                            </Col>

                            <Col span={18}>

                                <Form schema={jsonschema}
                                      uiSchema={uiSchema}
                                      formData={ this.state.query }

                                      onChange={ ()=>{}  //this.handleFormSubmit.bind(this)
                                      }
                                      onSubmit={  this.handleFormSubmit.bind(this)
                                      }
                                      onError={log("errors")}

                                      style={{minHeight:20}}


                                />


                            </Col>

                        </Row>
                        <Row style={{minHeight:20}}/>
                        <Row>
                            <Col span={6}>

                            </Col>
                            <Col >

                                    {this.state.requestReady ? (
                                            <div>
                                                <div>

                                                    <Form schema={jsonschema}
                                                          uiSchema={uiSchema}
                                                          formData={JSON.stringify( this.state.graphqlResult)}

                                                          style={{minHeight:20}}

                                                    />
                                                </div>
                                                <div>
                                                    { //JSON.stringify(this.state.graphqlResult.allPoints.edges[0].node)
                                                    }
                                                </div>

                                                <div>
                                                    { JSON.stringify( this.state.graphqlResult) }
                                                </div>
                                            </div>

                                        ) : (
                                            <div> pending</div>
                                        )
                                    }
                            </Col>
                        </Row>

                    </div>


            );


  }
}

GraphQladmin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  GraphQLAdmin: makeSelectGraphQladmin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphQladmin);
