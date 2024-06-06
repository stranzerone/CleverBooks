import React, { useState, useEffect, useRef } from 'react';

const SpeedometerNumber = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(0);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when at least 50% of the component is visible
    );

    observer.current.observe(document.querySelector("#speedometer"));

    return () => observer.current.disconnect();
  }, []);

  useEffect(() => {
    let intervalId;

    if (isVisible) {
      intervalId = setInterval(() => {
        // Increment value up to 85
        if (value < 18) {
          setValue(value + 1);
        }
      }, 6);
    }

    return () => clearInterval(intervalId);
  }, [isVisible, value]);

  // Function to generate gradient color
  const generateGradientColor = () => {
    return `linear-gradient(135deg, #ff8a00 ${value}%, #ff00b8 ${value}%)`;
  };

  return (
    <div id="speedometer" className='max-h-1/3 md:min-h-[100vh]' style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
      <div style={{fontSize:"90px"}}  >
   
        <h1 className='text-gradient hidden  md:block  font-extrabold font-6xl'>
        {value}%

        </h1>
        <h1 className='md:hidden text-gradient font-extrabold font-6xl '>
18%
        </h1>
      </div>
      <h1 className='text-white text-lg font-bold'>Growth in revenue</h1>
    </div>
  );
};

export default SpeedometerNumber;
