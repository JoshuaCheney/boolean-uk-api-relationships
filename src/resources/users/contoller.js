const prisma = require("../../utils/database")

function getAll(req, res) {
    // console.log("working")
    prisma.user.findMany({
        include: {
            address: true,
            orders: true,
        }
    })
    .then((result) => 
    {console.log(result)
    res.json({data: result})})
    .catch(error => {
        console.error(error)
        res.status(500).json({error})
    })
}

module.exports = { getAll }