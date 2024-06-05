let nodemailer = require("nodemailer");

//from
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "rw3.garvit.rd@gmail.com",
    pass: "enoypkvuzdyvbesy",
  },
});

let sendEmail = (to, subject, data) => {
  return transporter.sendMail({
    from: '"test mail 👻" <rw3.garvit.rd@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: data, // plain text body
    html: data,
  });
};

module.exports = sendEmail;
