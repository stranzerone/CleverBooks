import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import task from "../Assessts/s1.png";
import bag from "../Assessts/s2svg.svg";
import self from "../Assessts/s3.svg";
import home from "../Assessts/s4.svg";

const CarouselPage = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const pages = [
    { id: 1, img: task, title: 'Deep domain expertise', description: 'Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.' },
    { id: 2, img: bag, title: 'A focus on KPIs that matter', description: 'Our tools help ou make decisions to grow your buisness. Everything works towards improving cash flow and product availability.' },
    { id: 3, img: self, title: 'Purpose-built & ever  improving tech', description: 'Our demands forcasting engine has been meticuosly built, while our engine constantly trains on years of data and ever evolving' },
    { id: 4, img: home, title: 'Ease of use for everyone', description: 'With an intutuve interface and empathetic design, Crest requires only minimal training for beginner level knowledge of supply chain to use' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Get Crest and get...</h1>
      
      <div className="relative w-[85vw]  ">
        <Slider ref={slider => setSlider(slider)} {...settings}>
          {pages.map(page => (
            <div key={page.id} className="flex h-[60vh] md:h-[80vh] shadow-xl w-[90vw]   flex-col md:flex-row  p-2">
              <div className="w-full  flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
                <img src={page.img} alt={`Image ${page.id}`} className="w-1/2 h-auto object-cover " />
            
                <div className=" w-1/2 text-center  ">
                <h2 className="text-xl md:text-2xl  text-start font-bold mb-2">{page.title}</h2>
                <p className="text-sm md:text-lg text-start md:pe-4">{page.description}</p>
              </div>

              </div>
            
            </div>
          ))}
        </Slider>
        <div className='hidden md:block'>

        <button
          onClick={() => slider.slickPrev()}
          className="absolute  bg-transparen left-[-45px] bg-transparent border-red-300 border-4 left-0 top-1/2 transform -translate-y-1/2  text-red-300 px-4 py-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={() => slider.slickNext()}
          className="absolute right-[-45px] top-1/2 bg-transparent border-red-300 border-4 transform -translate-y-1/2 bg-blue-500 text-red-300 px-4 py-2 rounded-full"
        >
          &gt;
        </button>
        </div>
     
      </div>
    </div>
  );
};

export default CarouselPage;
