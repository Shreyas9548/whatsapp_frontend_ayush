import React from 'react';
import './Blogs.css'; // Importing CSS styles
import WhatsappChatbot from '../../assets/Chatbot.jpeg';
import WhatsappEngage from '../../assets/WhatsappEngage.jpeg';
import BusinessGrowth from '../../assets/BusinessGrowth.jpeg';
import Feedback from '../../assets/Feedback.png';
import MarketingSt from '../../assets/marketingStrat.jpeg';
import Segment from '../../assets/connection.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const blogs = [ 
  {
    id: 1,
    title: "Top 10 WhatsApp Marketing Strategies for Small Businesses ",
    imageUrl:  MarketingSt ,
    link: "/blogs/marketing-strategy"
  },
 
  {
    id: 2,
    title: "Using Technology to Boost Business Outreach & Revenue",
    imageUrl: BusinessGrowth,
    link: "/blogs/business-outreach"
  },
  {
    id: 3,
    title: "Maximize Customer Engagement with WhatsApp",
    imageUrl: WhatsappEngage,
    link: "/blogs/whatsapp-engagement"
  },
  {
    id: 4,
    title: "How to Handle Customer Feedback via WhatsApp: Best Practices ",
    imageUrl: Feedback,
    link: "/blogs/customer-feedback"
  },
  {
    id: 5,
    title: "AI Chatbots: The Future of Customer Engagement on WhatsApp",
    imageUrl: WhatsappChatbot,
    link: "/blogs/chatbot"
  },

  {
    id: 6,
    title: "Segmenting & Personalizing User Experience for Increased Revenue",
    imageUrl: Segment,
    link: "/blogs/segmentation"
  },
];

const Blogs = () => {
  const FloatingElement = ({ children, yOffset = 20, duration = 3 }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);
  
    return (
      <motion.div
        style={{ y }}
        animate={{ y: [0, yOffset, 0] }}
        transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div>
    <div className="blogs-page" style={{backgroundColor:'green'}}>
      <h1 className="blogs-title font-gliker text-black">Our Latest Blogs</h1>
      <div className="blogs-container">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card" onClick={() => window.location.href = blog.link}>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <h2 className="blog-header">{blog.title}</h2>
          </div>
        ))}
      </div>
      </div>
      <footer className="py-20 bg-black text-white relative overflow-hidden">
  <FloatingElement yOffset={30} duration={5}>
    <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full opacity-10" />
  </FloatingElement>
  <FloatingElement yOffset={-20} duration={4}>
    <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full opacity-10" />
  </FloatingElement>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-green-500">
      <div>
        <h3 className="text-2xl font-gliker mb-4">Nuren AI</h3>
        <p className="text-white">Revolutionizing WhatsApp business communication with AI-powered solutions.</p>
      </div>
      {[
        { title: "Product", links: ["Features", "Pricing", "Case Studies"] },
        { title: "Company", links: ["About Us", "Careers", "Contact"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "GDPR Compliance"] },
      ].map((column, index) => (
        <div key={index}>
          <h4 className="text-xl font-gliker mb-4 ">{column.title}</h4>
          <ul className="space-y-2 ">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className="text-white hover:text-green-400 transition duration-300 ">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-white font-gliker">
      <p>&copy; 2024 Nu Renaissance Fabrica Pvt Ltd. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Blogs;
