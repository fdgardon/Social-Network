const router = require('express').Router();
const { User, Thought } = require('../../models');

router.get('/', async (req, res) => {
  
  try {
    const ThoughtData = await Thought.find().select('-__v');
    res.status(200).json(ThoughtData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

router.get('/:id', async (req, res) => {
console.log("bob")
  try {
    const ThoughtData = await Thought.findOne({_id: req.params.id})
    .select('-__v');
    res.status(200).json(ThoughtData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

router.post ('/', async (req, res) => {
  try {
    const ThoughtData = await Thought.create(req.body);
    res.json(ThoughtData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  };

})

router.put ('/:id', async (req, res) => {
  try {
    const ThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!ThoughtData) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(ThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.delete('/:id', async (req, res) =>{
  try {
    const ThoughtData = await Thought.findOneAndDelete({ _id: req.params.id });

    if (!ThoughtData) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }
    res.json({ message: 'thought deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
