
 

const router = require('express').Router();
const { User, Thought } = require('../../models');




// git all User
router.get('/', async (req, res) => {
  
    try {
      const UserData = await User.find().select('-__v');
      res.status(200).json(UserData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
  
    }
  });
// git a User with id
router.get('/:id', async (req, res) => {
  console.log("bob")
    try {
      const UserData = await User.findOne({_id: req.params.id})
      .select('-__v');
      res.status(200).json(UserData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
  
    }
  });


//creates
router.post ('/', async (req, res) => {
    try {
      const UserData = await User.create(req.body);
      res.json(UserData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    };

  })


router.put ('/:id', async (req, res) => {
  try {
    const UserData = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!UserData) {
      return res.status(404).json({ message: 'No User with this id!' });
    }

    res.json(UserData);
  } catch (err) {
    res.status(500).json(err);
  }
})

//this delete the User
router.delete('/:id', async (req, res) =>{
  try {
    const UserData = await User.findOneAndDelete({ _id: req.params.id });

    if (!UserData) {
      return res.status(404).json({ message: 'No User with that ID' });
    }
    res.json({ message: 'User deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
