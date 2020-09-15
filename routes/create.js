//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routers
router.post('/', (request, response) => {
    const input = request.body;

    const newDocument = new invoiceModel({
        tailorName: input.tailorName,
        tailorAddress: input.tailorAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.item,
        invoiceDescription: input.invoiceDescription
    });

    //Saving the information inside the databse
    newDocument.save((err, doc) => {
        if (err) {
            //something went wrong
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Problems when saving the information' });
        }
        else {
            // everything is ok
            console.log('The Invoice was created Sucessfully');
            response.status(200).json({ message: 'The Invoice was created Sucessfully' });

        }
    });

    // response.send('<h1> Hello from router create.js </h1>')
})



//exporting the content of this file
module.exports = router;
