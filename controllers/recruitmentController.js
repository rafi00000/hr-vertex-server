const Recruitment = require("../models/recruitmentModel");

// get all recruitment

const getAllRecruitment = async (req, res) => {
  const result = await Recruitment.find();
  res.json(result);
}


// post the recruitment api
const postRecruitment = async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const savedRecruitment = await Recruitment.create(data);
    res.status(201).json({message: "Recruitment created successfully", success: true});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update recruitment
const updateRecruitment = async (req, res) => {
  try {
    const {
      position,
      department,
      responsibilities,
      requirements,
      applicationDeadline
    } = req.body;

    const recruitment = await Recruitment.findById(req.params.id)

    if (!recruitment) {
      return res.status(404).json({ error: "Recruitment not found" })
    }

    recruitment.position = position;
    recruitment.department = department;
    recruitment.responsibilities = responsibilities;
    recruitment.requirements = requirements;
    recruitment.applicationDeadline = applicationDeadline;

    const updatedRecruitment = await recruitment.save()

    res.json(updatedRecruitment)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports = {
  postRecruitment,
  getAllRecruitment,
  updateRecruitment
};
