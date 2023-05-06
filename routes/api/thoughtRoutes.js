const router = require('express').Router();
const { User, thought } = require('../../models');


// git all User
router.get('/', async (req, res) => {
  
  try {
    const thoughtData = await thought.find().select('-__v');
    res.status(200).json(thoughtData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

// const ThoughtController = {
//   // get all pizzas
//   getAllThought(req, res) {
//       Thought.find({})
//        // .populate({
//        //   path: 'username',   this is what broke it but why does archigas not have his break?
//         //  select: '-__v'
//        // })
//         .select('-__v')
//         .sort({ _id: -1 })
//         .then(dbUserData => res.json(dbUserData))
//         .catch(err => {
//           console.log(err);
//           res.status(400).json(err);
//         });
//     },
//   }
// git a User with id
router.get('/:id', async (req, res) => {
console.log("bob")
  try {
    const thoughtData = await thought.findOne({_id: req.params.id})
    .select('-__v');
    res.status(200).json(thoughtData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});


//creates
router.post ('/', async (req, res) => {
  try {
    const thoughtData = await thought.create(req.body);
    res.json(thoughtData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  };

})



router.put ('/:id', async (req, res) => {
  try {
    const thoughtData = await thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!thoughtData) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
})

//this delete the User
router.delete('/:id', async (req, res) =>{
  try {
    const thoughtData = await thought.findOneAndDelete({ _id: req.params.id });

    if (!thoughtData) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }
    res.json({ message: 'thought deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
