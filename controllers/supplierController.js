//import libraries
const nodemailer = require('nodemailer');
const axios = require('axios');

//import other related model files
const Supplier = require('../models/Supplier');


/**
 * this method is map with create one supplier POST request
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with inserted Supplier document
 */
exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = await Supplier.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                supplier: newSupplier,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * this method is map with get all suppliers GET request
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with fetched Supplier documents
 */
exports.getAllSuppliers = async (req, res) => {
    try {
        const query = Supplier.find(req.query);

        const suppliers = await query;

        res.status(200).json({
            status: 'success',
            results: suppliers.length,
            data: {
                suppliers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * this method is map with get one supplier GET request
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with fetched Supplier document
 */
exports.getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                supplier,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * this method is map with update one supplier PATCH request
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with updated Supplier document
 */
exports.updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            status: 'success',
            data: {
                supplier,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * this method is map with delete one supplier DELETE request
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response as success or failed
 */
exports.deleteSupplier = async (req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * this method is map with send email to supplier POST request
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response as success or failed
 */
exports.sendEmail = async (req, res) => {
    let recipientEmail = '';

    await axios
            .get(`https://procurement-system.herokuapp.com/api/v1/supplier/${req.body.recipientID}`)
            .then(function (response) {
                recipientEmail = response.data.data.supplier.email;
            })
            .catch(function (error) {
                console.log(error);
            });

    try{   
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kavindutharaka999@gmail.com', // username of sender
                pass: 'FaBook2013I$', // password of sender
            },
        });

        const htmlBody = 
        `<h3 style="color:grey;">Site : ${req.body.site}</h3>
        <h3 style="color:grey;">Inquiries : ${req.body.siteContact}</h3>
        <h3 style="color:crimson;">Need to be delivered before: ${req.body.deliverDate} </h3>

        <table style="padding: 10px;">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Material</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
            ${req.body.orderItems.map((item, index) => {
            return `<tr>
                        <th style="text-align: left; padding: 10px;" scope="col">${index + 1}</th>
                        <td style="padding: 15px;">${item.material}</td>
                        <td style="padding: 15px;">${item.unit}</td>
                        <td style="padding: 15px;">${item.quantity}</td>
                    </tr>`;
            })}
            </tbody>
        </table>`;

        const mailOptions = {
            from: '"Alpha Procurement Company" <kavindutharaka999@gmail.com>', // sender address
            to: recipientEmail, // list of receivers email addresses
            subject: 'Order From Alpha Procurement Company', // Subject line
            html: htmlBody, // email body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Email was sent to the supplier',
        });
    } 
    catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};