const express = require("express");
const Test = require("../Models/TestModel");
const router = express.Router();

//create routes
router.get('/', (request, response) => {
    response.send("test message homepage");
});

router.get('/post', (request, response) => {
    response.send("post");
});

router.post('/', (request, response) => {
    const test = new Test({
        title: request.body.title,
        description: request.body.description
    });

    test.save()
        .then(data => {
            request.json(data);
        })
        .catch(err => {
            response.json({message: err});
        });
});

module.exports = router;