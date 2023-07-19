import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from './MessageBox';

const GetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching Data');
      const addData = await axios.get('/');
      console.log(addData.data.data.data);
      setData(addData.data.data.data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {data.map((data) => (
        <MessageBox
          key={data._id}
          mobile={data.mobile}
          message={data.message}
        />
      ))}
    </React.Fragment>
  );
};

export default GetData;
