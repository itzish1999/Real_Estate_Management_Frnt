import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropertyCard from './components/PropertyCard';
import './App.css';

function App() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1000/dummydata')
      .then(res => {
        setDummyData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {dummyData.map(properties => (
        <PropertyCard
          key={properties.id} property={properties}
        />
      ))}
    </div>
  );
}

export default App;
