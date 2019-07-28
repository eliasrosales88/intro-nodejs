'use strict';

const axios = require('axios');

axios.get('http://localhost:3000/apiv1/agentes/').then( httpResponse => {
    // if (httpResponse) {
        
    // }

    console.log(httpResponse.data.results[0]);
    
}).catch(err => {
    // console.log('Error:', err);
    
});