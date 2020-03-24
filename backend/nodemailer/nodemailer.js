"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASS // generated ethereal password
            },
    tls:{
        rejectUnauthorized: false
    }
});

module.exports = {transporter: transporter}