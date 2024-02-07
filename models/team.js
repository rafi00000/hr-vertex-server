teamname,
teamdepartment,
leader
const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
    'teamname':{
        type : String,
        required: true,
    },
    'teamdepartment':{
        type : String,
        required: true,
    },
    'leader':{
        type :Schema.Types.ObjectId,
        ref: 'user'
    },
})
const team = model('team',teamSchema)
module.exports = team
