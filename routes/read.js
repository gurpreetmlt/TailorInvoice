//dependencies
const express = require('express');
const invoice = require('../models/invoice.js');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routers
router.get('/all', (request, response) => {

    invoiceModel.find((err, docs) => {
        if (err) {
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Problems when reading the invoice' });
        } else {
            //everything is working fine
            console.log('All the invoices were found');
            response.status(200).json(docs);
        }
    });
});

router.get('/:invoiceId', (request, response) => {
    invoiceModel.findOne({
        _id: request.params.invoiceId
    }, (err, invoice) => {
        if (err) {
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Invoice data not found' });
        } else {
            console.log('everything is working fine');
            response.status(200).json(invoice);
        }
    });
});

//exporting the content of this file
module.exports = router;