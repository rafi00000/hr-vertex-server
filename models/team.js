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
    'members':{
        type :[Schema.Types.ObjectId],
        ref: 'user',
        required: false,
    },
})
const team = model('team',teamSchema)
module.exports = team
