# Memory Game Web App

## Description
The Memory Game Web App is a fun and engaging memory board game where players match pairs of cards. After creating an account and signing in, users can choose their preferred difficulty level and card theme. The objective is to find all the matching pairs of cards. Your score will be updated after each game based on your performance.

## Screenshot
![screenshot](https://live.staticflickr.com/65535/50996655401_49ed9fbc3e_n.jpg)

## Tech Used
- **Frontend:** HTML, CSS, MaterializeCSS, JavaScript, React
- **Backend:** MongoDB, Express, Node, Mongoose
- **State Management:** Context API
- **Development Tools:** Nodemon, Concurrently
- **Authentication & Security:** JWT, Bcrypt
- **Card Images:** Robohash
- **API Requests:** Axios
- **Deployment:** Railway





## How to Run Locally


1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/memory-game-app.git
   cd memory-game-app


2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install

3. **Install Frontend Dependencies**
cd ../client
npm install
 
4. **Set Up Environment Variables**
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

5. **Start the Development Servers**
cd server
npm start

In another terminal
cd client
npm start

6. **Open Your Browser**
 Navigate to http://localhost:3000 to access the web app.