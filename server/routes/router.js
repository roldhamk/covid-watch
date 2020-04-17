const router = require('express').Router();

const UserSchema = require('../models/user');
const JobSchema = require('../models/job');

router.get('/', (req, res) => {
    res.send({greeting: 'Hello world!'})
})

router.post('/Signup', async (req, res) => {
    let {name, email, password, volunteer, notvolunteer, addressl1, addressl2, city, postcode} = req.body;

    let existingUser = await UserSchema.findUser(email);

    if (existingUser) {
        res.send({err: 'user already exists'})
        return;
    }

    let user = new UserSchema({
        name: name,
        email: email,
        password: password,
        volunteer: volunteer,
        notvolunteer: notvolunteer,
        addressl1: addressl1,
        addressl2: addressl2,
        city: city,
        postcode: postcode
      });

    user.save().catch(err => console.log(err));


    res.send({success: 'user successfully created'});
})

router.post('/Postings', async (req, res) => {
    let {selectedOption, title, description, postcode} = req.body;

    
  let job = new JobSchema({
    title : title,
    selectedOption: selectedOption,
    description : description,
    postcode: postcode,   
  });
  job.save();

  res.send({success: 'job successfully created'});
})

router.get('/Listings', async(req, res) => {
  let listings = await JobSchema.find({})
  console.log(listings);
  
  
  res.send(listings);

 // res.send({success: 'Found the job'});
  
})



module.exports = router;