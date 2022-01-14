import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-06-07T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Age',
    value: <Age />,
  },

  {
    key: 'location',
    label: 'City',
    value: 'Paris, France',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'English,  French,  Arabic',
  },
];

export default data;
