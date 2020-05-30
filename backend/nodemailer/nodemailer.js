"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
            user: process.env.EMAIL, // sfsu email
            pass: process.env.PASS // sfsu email pass
            },
    tls:{
        rejectUnauthorized: false
    }
});

module.exports = {transporter: transporter}