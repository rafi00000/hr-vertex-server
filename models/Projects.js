const { Schema, model } = require("mongoose");

const projectsSchema = new Schema({
    'title':{
        type : String,
        required: true,
    },
    'description':{
        type : String,
        required: true,
    },
    'team':{
        type :Schema.Types.ObjectId,
        ref: 'team'
    },
    'deadline':{
        type : Date,
        required: true,
    },
    'startData':{
        type : Date,
        required: true,
    },
})
const Projects = model('project',projectsSchema)
module.exports = Projects
