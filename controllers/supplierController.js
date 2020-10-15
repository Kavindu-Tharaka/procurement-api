const Supplier = require('../models/Supplier');
const nodemailer = require('nodemailer');

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

exports.sendEmail = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kavindutharaka999@gmail.com', // username
                pass: 'FaBook2013I$', // password
            },
        });

        const htmlBody = `
            <h3 style="color:grey;">Site : ${req.body.site}</h3>
            <h3 style="color:grey;">Inquiries : ${req.body.siteContact}</h3>
            <h3 style="color:crimson;">Need to be delivered before: ${req.body.deliverDate}</h3>
            
            <table style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">
                                <thead>
                                    <tr>
                                        <th style="border: 1px solid black; border-collapse: collapse; text-align: left; padding: 10px;" scope="col">Material</th>
                                        <th  style="border: 1px solid black; border-collapse: collapse;text-align: left;  padding: 10px;" scope="col">Unit</th>
                                        <th  style="border: 1px solid black; border-collapse: collapse;text-align: left;  padding: 10px;" scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">Bricks</td>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">Count</td>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">90</td>

                                    </tr>
                                    <tr>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">Sand</td>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">Cubic Meters</td>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">3</td>

                                    </tr>
                                    <tr>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">Cement</td>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">Count</td>
                                        <td  style="border: 1px solid black; border-collapse: collapse;  padding: 10px;">35</td>

                                    </tr>
                                </tbody>
                            </table>

                

        `;

        const mailOptions = {
            from: '"Alpha Procurement Company" <kavindutharaka999@gmail.com>', // sender address
            to: req.body.recipient, // list of receivers
            subject: 'Order From Alpha Procurement Company', // Subject line
            html: htmlBody, // email body
        };

        // const mailOptions = {
        //     from: '"Alpha Procurement Company" <kavindutharaka999@gmail.com>', // sender address
        //     to: 'kavindu.ktm@gmail.com', // list of receivers
        //     subject: 'This is the Subject', // Subject line
        //     html: '<b>This is the HTML boday</b>', // email body
        // };

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
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};
