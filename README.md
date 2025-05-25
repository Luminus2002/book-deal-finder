# 📚 Book Deal Finder

An AI-powered voice and web assistant that helps you find the best deals on limited-edition books.  
Users can interact via a chat UI or voice assistant powered by [OmniDimension](https://omnidimension.xyz).  
Top deals are automatically ranked and delivered via email.

---

## 🚀 Features

- 🎙️ Voice-enabled AI Assistant (via OmniDimension)
- 💬 Chat UI with email-based deal requests
- 📩 Email delivery of top 3 book offers
- 🧠 Deal ranking logic (price → delivery → condition)
- 🌍 Live deployed on Render.com

---

## 🖼️ Demo

Try the live version:  
👉 https://book-deal-finder.onrender.com

Click the 💬 chat bubble or speak using the voice assistant to start.

---

## 🛠️ Tech Stack

- Frontend: Vanilla HTML + TailwindCSS
- Backend: Node.js + Express
- Email: Nodemailer + Gmail App Password
- Voice Assistant: OmniDimension
- Hosting: Render.com

---

## 🧰 Folder Structure

book-deal-finder/
├── server.js               # Main Express server
├── .env                    # Gmail credentials (not committed)
├── public/                 # Static web UI
│   └── index.html
├── data/
│   └── sellers.json        # Mock seller data
├── utils/
│   ├── compareOffers.js    # Ranks seller offers
│   └── emailSender.js      # Sends results via email

---

## 🔐 Environment Variables

Create a `.env` file with the following:

GMAIL_USER=yourgmail@gmail.com  
GMAIL_PASS=your_app_password

Use an App Password if 2FA is enabled on your Gmail account.

---

## 🔄 API Endpoints

### POST /get-deals
Used by the web UI.

Body:
{ "email": "user@example.com" }

---

### POST /omnidimension-hook
Used by OmniDimension voice assistant.

Body:
{
  "book": "The Silmarillion",
  "email": "user@example.com",
  "sellers": [
    { "name": "BookCollectorHQ", "price": 320, "delivery": "2 days", "condition": "Mint" }
  ]
}

---

## 🧪 Local Development

npm install  
node server.js

Then visit: http://localhost:3000

---

## 📦 Deployment

1. Push code to GitHub
2. Connect to Render
3. Add your .env variables
4. Set:
   - Build: npm install
   - Start: node server.js

---

## 🙋‍♂️ Author

Dibyendu  
GitHub: https://github.com/Luminus2002

