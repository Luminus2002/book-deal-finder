// 🔹 Load environment variables from .env
require('dotenv').config();

// 🔹 Import required modules
const express = require('express');
const path = require('path');
const sellers = require('./data/sellers.json'); // Static mock seller data

// 🔹 Import utility functions
const { getTopDeals } = require('./utils/compareOffers');
const { sendTopDealsEmail } = require('./utils/emailSender');

// 🔹 Initialize Express app
const app = express();
app.use(express.json()); // Enable JSON body parsing
app.use(express.static(path.join(__dirname, 'public'))); // Serve UI from /public

// =======================
// 🌐 Route 1: Web UI Request
// =======================
app.post('/get-deals', async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).send({ error: 'Email is required' });
  }

  const topDeals = getTopDeals(sellers); // Use mock data

  try {
    await sendTopDealsEmail(email, topDeals);
    res.status(200).send({ message: 'Top 3 deals sent!', topDeals });
  } catch (err) {
    console.error('❌ Email error:', err);
    res.status(500).send({ error: 'Failed to send email' });
  }
});

// =======================
// 🔗 Route 2: OmniDimension Webhook
// =======================
app.post('/omnidimension-hook', async (req, res) => {
  const { book, email, sellers } = req.body;

  // Optional debug log
  console.log("📥 Received from OmniDimension:", req.body);

  if (!book || !email || !Array.isArray(sellers)) {
    return res.status(400).json({ error: "Missing book, email, or sellers data." });
  }

  const topDeals = getTopDeals(sellers); // Use dynamic seller list from Omni

  try {
    await sendTopDealsEmail(email, topDeals);
    res.status(200).json({ message: "Deals emailed successfully!", topDeals });
  } catch (err) {
    console.error('❌ OmniDimension email error:', err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// =======================
// ✅ Start Server
// =======================
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
