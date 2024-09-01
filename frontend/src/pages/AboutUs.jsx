import React from "react";

const AboutUs = () => {
  const photos = [
    {
      id: 1,
      name: "Kush",
    },
    {
      id: 2,
      name: "Shreay",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-32">
      <div className="w-11/12 flex flex-col items-center justify-center">
        
        <div className="text-center w-11/12 font-serif h-auto text-6xl font-extrabold overflow-hidden">
          Meet The Developers
        </div>

        
        <div className="md:w-6/12 sm:w-full sm:mt-4 text-lg font-Roborto opacity-80 text-center">
          {`"At GMCA, we are a dedicated team of aspiring programers pursuing 
          our mca. With a passion for technology
           and innovation, we embarked on our journey to create cutting-edge solutions.
            Leveraging the power of the MERN stack (MongoDB, Express.js, React, and Node.js),
             we've developed applications that push boundaries and redefine user experiences.
              Our mission is to continually learn, grow, and contribute to the ever-evolving 
              field of technology while striving for excellence in every project we undertake."`}
        </div>

        

       
      </div>
    </div>
  );
};

export default AboutUs;
