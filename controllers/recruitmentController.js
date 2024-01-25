const Recruitment = require("../models/recruitmentModel");

// get all recruitment

const getAllRecruitment = async(req, res) =>{
  const result = await Recruitment.find();
  res.json(result);
}


// post the recruitment api
const postRecruitment = async (req, res) => {
  const {
      position,
      department,
      responsibilities,
      requirements,
      applicationDeadline,
    } = req.body;

    const newRecruitment = new Recruitment({
      position,
      department,
      responsibilities,
      requirements,
      applicationDeadline,
    });
    
  try {
    const savedRecruitment = await newRecruitment.save();
    res.status(201).json(savedRecruitment);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports = {
  postRecruitment,
  getAllRecruitment
};
