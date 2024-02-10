const { ObjectId } = require("mongodb");
const team = require("../models/team");
const userModel = require("../models/user");

const postteam = async (req, res) => {
    const data = req.body;
    const { leader, teamname } = data
    await team.create(data)
    await userModel.updateOne({ _id: new ObjectId(leader) }, {
        $set: {
            team: teamname
        }
    })
    res.send({ success: true, msg: "Posted Successfully" })
}
const getTeam = async (req, res) => {
    // console.log('get hitted')
    try {
        const result = await team.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'leader',
                    foreignField: '_id',
                    as: 'leader',
                },
            },
            {
                $unwind: {
                    path: '$leader',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'members',
                    foreignField: '_id',
                    as: 'members',
                },
            },
            {
                $unwind: {
                    path: '$members',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $group: {
                    _id: '$_id',
                    teamname: { $first: '$teamname' },
                    teamdepartment: { $first: '$teamdepartment' },
                    leader: { $first: { _id: '$leader._id', photo: '$leader.photo' } },
                    members: { $push: { _id: '$members._id', photo: '$members.photo' } },
                },
            },
        ]);
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
const updateTeam = async (req, res) => {
    console.log('update hitted')
    const data = req.body;
    const { memberId, _id ,teamname} = data
    try {
        await team.updateOne(
            { _id: new ObjectId(_id) },
            {
                $push: {
                    members: memberId
                }
            }
        );
        await userModel.updateOne({ _id: new ObjectId(memberId) }, {
            $set: {
                team: teamname
            }
        })
        res.send({ success: true, msg: "Posted Successfully" })
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = {
    postteam,
    getTeam,
    updateTeam
};