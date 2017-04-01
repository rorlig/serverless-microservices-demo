/**
 * Created by rorlig on 4/1/17.
 */
'use strict';

const dynamodb = require('../lib/dynamodb');

module.exports.list = (event, context, callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_RIDES,
    };

    // fetch all todos from the database
    dynamodb.scan(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t fetch the rides.'));
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        callback(null, response);
    });
};
