import React, { useState, useEffect } from 'react';
import Spage1 from "./Spage1";
import Spage2 from "./Spage2";
import Spage3 from "./Spage3";

const VirtualScroller = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionHeight = windowHeight * 0.3; // Adjust this value as needed

    const section = Math.floor(scrollPosition / sectionHeight) + 1;
    setActiveSection(section);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let content;
  if (activeSection >= 8 && activeSection < 12) {
    content = <Spage1 />;
  } else if (activeSection >= 12 && activeSection < 16) {
    content = <Spage2 />;
  } else {
    content = <Spage3 />;
  }

  return (
    <div>
    <div className='hidden  lg:block bg-gradient-to-b from-black to-gray-900' style={{ height: '350vh', position: 'relative' }}>
      {activeSection >= 8 && activeSection < 18 && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999' }}>
          {content}
        </div>
      )}
      {activeSection >=8 && activeSection<=17 &&  <div style={{ position: 'fixed', top: '50%', left: '10px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', zIndex: '999' }}>
      <button onClick={() => setActiveSection(8)} className={`border text-start border-transparent text-gray-700 px-3 py-2 rounded-lg mb-2 rounded-lg bg-transparent ${activeSection > 7 && activeSection < 12 ? ' border border-2 border-purple-600 font-bold  text-gradient rounded-xl ' : ''}`}>STOCKOUTS</button>
      <button onClick={() => setActiveSection(12)} className={`border text-start border-transparent text-gray-700 px-3 py-2 rounded-lg mb-2 rounded-lg bg-transparent ${activeSection > 11 && activeSection <16 ? ' border border-2 border-purple-600 font-bold  text-gradient rounded-xl' : ''}`}>CASH RECOVERY CYCLE</button>
      <button onClick={() => setActiveSection(16)} className={`border text-start  border-transparent text-gray-700 px-3 py-2 rounded-lg mb-2 rounded-lg bg-transparent ${activeSection > 15 ? ' border border-2 border-purple-600 font-bold  text-gradient rounded-xl' : ''}`}>REVENUE</button>
      </div>}
    </div>
    <div className='lg:hidden   max-h-[200vh]  block bg-gradient-to-b from-black to-gray-900' style={{ height: '350vh', position: 'relative' }}>

<div className='flex align-center justify-center h-1/3'>
<Spage1 />
</div>
<div className='flex align-center justify-center h-1/3'>
<Spage2 />
</div>
<div className='flex align-center justify-center h-1/3'>
<Spage3 />
</div>


</div>
    </div>
  );
};

export default VirtualScroller;
