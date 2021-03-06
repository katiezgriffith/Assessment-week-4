const express = require("express");
const cors = require("cors");

const app = express();

 



app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});



app.get("/api/fortune", (req, res) => {
  const fortunes =[" A fresh start will put you on your way.",
  "A good time to finish up old tasks." ,
  "A smile is your personal welcome mat.",
  "Adventure can be real happiness.",
  "New ideas could be profitable.",

  ];

 
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/tip", (req, res) => {
  const tips =["You don’t have to pay your dues",
  "Don’t be realistic, alter your reality instead",
  "Pick a mentor over higher pay",

  ];

 
  let randomIndex = Math.floor(Math.random() * tips.length);
  let randomTip = tips[randomIndex];

  res.status(200).send(randomTip);
  
});

const {
  getJobs, 
  deleteJobs, 
  createJobs, 
  updateJobs,
 } = require('./controller.js');



app.get(`/api/jobs`, getJobs)
app.delete(`/api/jobs/:id`, deleteJobs)
app.post(`/api/jobs/`, createJobs)
app.put(`/api/jobs/:id`, updateJobs)






app.listen(4000, () => console.log("Server running on 4000"));








