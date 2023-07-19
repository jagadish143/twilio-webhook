import React, { useState } from 'react';
import './AddDataForm.css';

const AddDataForm = () => {
  const [qrId, setQrId] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [qrMessage, setQrMessage] = useState('');

  const idChangeHandler = (e) => {
    setQrId(e.target.value);
  };
  const mobileChangeHandler = (e) => {
    setUserMobile(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setQrMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      qrId,
      userMobile,
      qrMessage,
    };
  };

  return (
    <form className="add_data_form" onSubmit={formSubmitHandler}>
      <div>
        <label id="qrCodeId">QR Code Id</label>
        <input
          htmlFor="qrCodeId"
          type="text"
          name="mobile"
          onChange={idChangeHandler}
          value={qrId}
        />
      </div>
      <div>
        <label id="userMobile">User Mobile</label>
        <input
          htmlFor="userMobile"
          type="text"
          name="mobile"
          onChange={mobileChangeHandler}
          value={userMobile}
        />
      </div>
      <div>
        <label id="qrMessage">Message</label>
        <input
          htmlFor="qrMessage"
          type="text"
          name="mobile"
          onChange={messageChangeHandler}
          value={qrMessage}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddDataForm;
