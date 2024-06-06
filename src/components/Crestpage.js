import React from 'react';
import p1 from "../Assessts/p1.png"
import p2 from "../Assessts/p2.jpg"
import p3 from "../Assessts/p3.png"
const CrestBlogPage = () => {
  const blogPosts = [
    {
      image: p1, // replace with actual image path
      text: 'Creating an Impact with inventory Planning:The QSR Edition',
      date: 'August 28 2023'
    },
    {
      image: p2, // replace with actual image path
      text: 'Ultimate Recipe for Inventory Success',
      date: 'August 4 2023'
    },
    {
      image: p3, // replace with actual image path
      text: 'Stock Strategy and Ultimate Guide',
      date: 'Jul 3 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        {/* Heading and Paragraph */}
        <div className='h-[100vh] w-full md:w-1/3 p-4'>
        <div className="mb-8">
          <h1 className="text-2xl  md:text-4xl font-bold text-start mb-4">Delivered:The Crest blog</h1>
          <p className="text-lg text-left">
            Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
          </p>
        </div>

        {/* Arrow Buttons */}
        <div className="flex gap-10 mb-8">
          <button className="bg-transparen border border-purple-300 border-4 text-gradient px-3 py-1 rounded-3xl">{"<"}</button>
          <button className="bg-transparent border border-purple-300 border-4  text-gradient px-3 py-1 rounded-3xl">{">"}</button>
        </div>

        {/* View Blog Button */}
        <div className="flex justify-start mb-8">
          <button className="bg-transparent  text-gradient  border border-4 text-bold border-purple-300 text-red-300 px-6 py-3 rounded-3xl">View All Blog</button>
        </div>
</div>
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col justify-between h-full">
              <div>
                <img
                  src={post.image}
                  alt={post.text}
                  className="w-full h-1/2 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">{post.text}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrestBlogPage;
