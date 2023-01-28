const nodeMailer = require('nodemailer');
exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '8b6c0b3a5364e0',
      pass: 'fa6d03e2e2764c',
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
