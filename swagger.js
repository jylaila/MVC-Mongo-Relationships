const { version } = require('mongoose');

const swaggerAutogen = require('swagger-autogen')({ openapi: '3.1.0' });
const doc = {
        openapi: '3.1.0',
        info: {
            version: '1.0.0',
            title: 'Mongo relationships',
            description: 'creating crud using mongo database'
        },
        servers: [
            {
                url: "http://localhost:3000"
            }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        }, 

};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => { require('./') });