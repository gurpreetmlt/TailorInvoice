//dependencies
const express = require('express');
const invoice = require('../models/invoice');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routers
router.delete('/:invoiceId', (request, response) => {

    invoiceModel.deleteOne({
        _id: request.params.invoiceId
    }, (err) => {
        if (err) {
            // Problems when removing the invoice
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Problems when creating the invoice' });
        }
        else {
            console.log('everting is working fine');
            response.status(200).json({ message: 'The invoice delected sucessfully' })
        }

    });
});

//exporting the content of this file
module.exports = router;