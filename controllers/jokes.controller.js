const Joke = require("../models/jokes.models");

const findAllJokes = (req, res) => {
  Joke.find()
    .then((allDaJokes) => res.json({ jokes: allDaJokes }))
    .catch((err) => res.json({ errMessage: err }));
};

const findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then((oneSingleJoke) => res.json({ jokes: oneSingleJoke }))
		.catch((err) => res.json({ errMessage: err }));
};

const createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ jokes: newlyCreatedJoke }))
    .catch((err) => res.json({ errMessage: err }));
};

const updateExistingJokes = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ jokes: updatedJoke }))
    .catch((err) => res.json({ errMessage: err }));
};

  const deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports ={
    findAllJokes,
    findOneSingleJoke,
    createNewJoke,
    updateExistingJokes,
    deleteAnExistingJoke

};