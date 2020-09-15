//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routers
router.put('/:invoiceId', (request, response) => {

    const input = request.body;

    invoiceModel.updateOne({
        _id: request.params.invoiceId
    }, {
        tailorName: input.tailorName,
        tailorAddress: input.tailorAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.item,
        invoiceDescription: input.invoiceDescription
    },
        (err, result) => {
            if (err) {
                //Problems when updating the invoice
                console.log('ERROR' + err);
                response.status(500).json({ message: 'Problem when updating the information' });
            } else {
                console.log('everyhing it working fine');
                response.status('200').json({ message: 'The Invoice was updated successfully' });
            }
        });
})

//exporting the content of this file
module.exports = router;