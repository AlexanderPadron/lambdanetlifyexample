const axios = require('axios')

exports.handler = function(event, context, callback) {

    const URL = 'http://httpbin.org/ip';

    const send = body => {
        callback(null,{
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(body)
        })
    }

    const getUsers = () => {
        axios.get(URL)
            .then(res=> send(res.data))
            .catch(err=>send(err));
    }

    if(event.httpMethod == 'GET'){
        console.log('Callme')
        getUsers()
    }

};