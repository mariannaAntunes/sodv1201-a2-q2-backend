const userData = require('../models/user')

//regConfirm get request with form data from frontend and send response back with fee calculated
const regConfirm = (req, res) => {
    userData[0].id = req.body.idInput
    userData[0].name = req.body.nameInput
    userData[0].address = req.body.addressInput
    userData[0].status = req.body.statusInput
    if(req.body.statusInput == "Student")
    {
        userData[0].fee = 10
    }
    else if(req.body.statusInput == "Staff")
    {
        userData[0].fee = 50
    }
    else if(req.body.statusInput == "Volunteer")
    {
        userData[0].fee = 0
    }
    res.json(userData);
    console.log(userData)
}

module.exports = {regConfirm};