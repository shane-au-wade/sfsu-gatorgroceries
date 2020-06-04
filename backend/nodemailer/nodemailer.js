
require('dotenv').config();
let nodemailer = require("nodemailer");
let aws = require('aws-sdk')
// now configure the aws object with correct region and SES credentials
// then we should be golden
aws.config.update({region: process.env.SMTP_REGION});

/**
 * Amazon Simple Email Service Transporter 
 */

let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

/**
 * Standard Gmail transported => Foodpantry email
 */

// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//             user: process.env.EMAIL, // sfsu email
//             pass: process.env.PASS // sfsu email pass
//             },
//     tls:{
//         rejectUnauthorized: false
//     }
// });

module.exports = {transporter: transporter}