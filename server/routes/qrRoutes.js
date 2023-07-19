const express = require('express');
const route = express();

const UserData = require('../models/qrModels');

//Handling Get Request
const getData = async (req, res) => {
  const allData = await UserData.find({});

  res.status(201).json({
    status: 'successs',
    data: {
      data: allData,
    },
  });
};

//Handling POST Requests
const AddData = async (req, res) => {
  const response = await req.body;

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
};

route.get('/', getData).post('/send-response', AddData);

module.exports = route;
