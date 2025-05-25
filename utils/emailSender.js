const nodemailer = require('nodemailer');

async function sendTopDealsEmail(to, deals) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const html = deals.map(d => `
    <p><strong>${d.name}</strong> — $${d.price}, ${d.delivery}, ${d.condition}</p>
  `).join("");

  await transporter.sendMail({
    from: `"Book Finder AI" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Top 3 Book Deals",
    html,
  });
}

module.exports = { sendTopDealsEmail };
