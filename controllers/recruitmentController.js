const Recruitment = require("../models/recruitmentModel");

const postRecruitment = async (req, res) => {
  try {
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

    const savedRecruitment = await newRecruitment.save();
    res.status(201).json(savedRecruitment);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  postRecruitment,
};
