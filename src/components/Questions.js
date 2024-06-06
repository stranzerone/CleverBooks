// src/pages/QuestionsPage.js
import React from 'react';
import task from "../Assessts/order.svg"
import bag from "../Assessts/bag.svg"
import self from "../Assessts/self.svg"
import home from "../Assessts/homesvg.svg"
const questions = [
  {
    imgSrc: task,
    heading: "What to order",
    paragraph: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle."
  },
  {
    imgSrc: bag,
    heading: "When to order",
    paragraph: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing."
  },
  {
    imgSrc: self,
    heading: "How much to stock",
    paragraph: "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes."
  },
  {
    imgSrc: home,
    heading: "When to stock",
    paragraph: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities."
  },
];

const QuestionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto  py-16">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-8 text-black">Four Key Questions Answered by Crest</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {questions.map((question, index) => (
            <div key={index} className="bg-pink-200 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-22">
              <img src={question.imgSrc} alt={question.heading} className="h-16 w-16 mb-4" />
              <h2 className="text-2xl font-semibold text-center mb-2">{question.heading}</h2>
              <p className="text-start text-gray-700">{question.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
