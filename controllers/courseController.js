const Course = require('../models/courseModel');

// Create course
const createCourse = async (req, res) => {
    const { name, description, duration } = req.body;

    try {
        const newCourse = new Course({ name, description, duration });
        const savedCourse = await newCourse.save();
        return res.status(201).json(savedCourse); // Respond with the saved course
    } catch (error) {
        console.error('Error saving course:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get All Courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        return res.status(200).json(courses);
    } catch (error) {
        console.error('Error retrieving courses:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Single Course
const getCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        return res.status(200).json(course);
    } catch (error) {
        console.error('Error retrieving course:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update course
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { name, description, duration } = req.body;

    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { $set: { name, description, duration } },
            { new: true }
        );
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        return res.status(200).json(updatedCourse);
    } catch (error) {
        console.error('Error updating course:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete course
const deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        return res.status(201).json({ message: "Deleted Successfully", success: true });
    } catch (error) {
        console.error('Error deleting course:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
};
