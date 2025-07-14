const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        // Create transporter (fixed variable name from 'transport' to 'transporter')
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
            port: process.env.SMTP_PORT || 2525,
            auth: {
                user: process.env.SMTP_USERNAME || "b4167570cc5e78",
                pass: process.env.SMTP_PASSWORD || "1e587216c52558"
            }
        });

        // Email message configuration
        const message = {
            from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
            to: options.email,
            subject: options.subject,
            html: options.message, // Removed redundant <p> tags since options.message might already contain HTML
            text: options.text || options.message.replace(/<[^>]*>/g, '') // Plain text fallback
        };

        // Send email
        const info = await transporter.sendMail(message);
        console.log('Message sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
};

module.exports = sendEmail;