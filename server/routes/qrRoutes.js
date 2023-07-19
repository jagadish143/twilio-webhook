const express = require('express');
const route = express();

const UserData = require('../models/qrModels');

//Handling Get Request
const getData = async (req, res) => {
  const allData = await UserData.find({});

  res.status(201).json({
    status: 'success',
    data: {
      data: allData,
    },
  });
};

//Handling POST Requests
const AddData = async (req, res) => {
  try {
    console.log('Post Request Made');
    console.log(req.body);
    const response = req.body;
    console.log(response);

    const qrID = response.sid;
    const userMobile = response.from;
    const receivedMessage = response.body;
    const saveData = {
      qrId: qrID,
      mobile: userMobile,
      message: receivedMessage,
    };
    const newData = await UserData.create(saveData);

    console.log(newData);
    res.status(201).json({
      status: 'Success',
      data: {
        data: saveData,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: {
        Error: error,
      },
    });
  }
};

route.get('/', getData).post('/send-response', AddData);

module.exports = route;
