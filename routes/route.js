import express from "express";

const router = express.Router();

const greetings = [
  "Hello!",
  "Hi there!",
  "Greetings!",
  "Good day!",
  "Howdy!",
  "Hey!",
  "What's up?",
  "Salutations!",
  "Bonjour!",
  "Hola!"
];

router.get("/", (req, res) => {
  res.render("index", { title: "Greeting Web App" });
});

router.get("/api/picture", (req, res) => {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((response) => {
      if (!response.ok) {
        throw new Error('NASA API request failed');
      }
      return response.json();
    })
    .then((data) => {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      res.json({ data, greeting: randomGreeting });
    })
    .catch((error) => {
      console.error('Error fetching NASA APOD:', error);
      res.status(500).send('Error fetching NASA APOD');
    });
});

export default router;