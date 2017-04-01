/**
 * Created by rorlig on 4/1/17.
 */
/**
 * Created by rorlig on 4/1/17.
 */
'use strict';

const dynamodb = require('../lib/dynamodb');

module.exports.get = (event, context, callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_RIDES,
        Key: {
            id: event.pathParameters.id,
        },
    };

    // fetch todo from the database
    dynamodb.get(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t fetch the todo rides.'));
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
        callback(null, response);
    });
};
