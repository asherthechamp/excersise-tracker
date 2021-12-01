const Exercise = require("../models/excercise.model");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({ username, description, duration, date });
  newExercise
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.put("/update/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration;
      exercise.date = req.body.date;
      exercise.save();
    })
    .then((exercise) => res.redirect("/"))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

module.exports = router;
