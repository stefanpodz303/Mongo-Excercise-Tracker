const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workout", (req, res) => {
    Workout.find()
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // GET request
  router.get("/api/workout/range", (req, res) => {
    Workout.find()
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // POST workout
  router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Update workout
  router.put("/api/workout/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(params.id, { $push: { exercises: body } })
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  

module.exports = router;