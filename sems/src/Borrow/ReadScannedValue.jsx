import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadScannedValue = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchTxtFile = async () => {
      try {
        const response = await axios.get('/example.txt');
        setFileContent(response.data);
        
      } catch (error) {
        console.error('Error fetching text file:', error);
      }
    };

    fetchTxtFile();
  }, []);

  
  return (
    <div>
        <h3>The roll number is {fileContent}</h3>
      {/* <pre>{fileContent}</pre> */}
    </div>
  );
};

export default ReadScannedValue;
