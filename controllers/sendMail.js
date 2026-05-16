import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "ddollylamb.com",
  port: 465,
  secure: true,
  auth: {
    user: 'info@ddollylamb.com',
    pass: '@TB7ZxB+D?IZ^Vls',
  },
});

// TEMP: check karo kya load ho raha hai
// console.log("EMAIL_USER:", process.env.EMAIL_USER)
// console.log("EMAIL_PASS:", process.env.EMAIL_PASS)


async function sendMail(to, subject, text, html) {
  const info = await transporter.sendMail({
    from: '"DDolly Lamb" <info@ddollylamb.com>',
    to,
    subject,
    text,
    html
  });
  console.log("Message sent:", info.messageId);
}

export { sendMail }