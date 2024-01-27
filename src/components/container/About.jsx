import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import videoSource from "../../assets/video.mp4";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="bv-container" id="about">
      <div className="relative flex items-center justify-center overflow-visible container mx-auto">
        {/* Video */}
        <motion.video
          ref={ref}
          className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 rounded-lg overflow-hidden"
          loop
          muted
          autoPlay
          controls=""
          style={{ scale }}
        >
          <source src={videoSource} type="video/mp4" />
        </motion.video>

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to [Your Company Name]
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            Your trusted partner in business location analysis and decision-making.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            Explore potential business locations with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


// // import React, { useRef } from "react";
// // // import About from "../../assets/video.mp4";
// // import { motion, useScroll, useTransform } from "framer-motion";


// // Import necessary dependencies
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // Import your video file
// import videoSource from "../../assets/video.mp4";

// const About = () => {
//   const ref = useRef(null);

//   // Set up scroll animations using Framer Motion
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end end"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <div className="bv-container">
//       <div className="flex items-center justify-center overflow-visible container">
//         <motion.video
//           ref={ref}
//           className="w-95 border-4 border-rounded-lg mt-minus-5 z-1"
//           loop
//           muted
//           autoPlay
//           controls=""
//           style={{ scale }}
//         >
//           {/* Use the imported video source */}
//           <source src={videoSource} type="video/mp4" />
//         </motion.video>
//       </div>
//     </div>
//   );
// };

// export default About;

// const About = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end end"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <div className="bv-container">
//       <div className="flex items-center justify-center overflow-visible container">
//         <motion.video
//           ref={ref}
//           className="w-95 border-4 border-rounded-lg mt-minus-5 z-1"
//           loop
//           muted
//           autoPlay
//           controls=""
//           style={{ scale }}
//         >
//           <source src="../../assets/video.mp4" type="video/mp4" />
//         </motion.video>
//       </div>
//     </div>
//   );
// };

// export default About;


// const About = () => {
//   return (
//     <div className="section" id="about">
//       <div className="grid md:grid-cols-2 gap-8 place-items-center">
//         <div className="border-[3px] border-solid border-Teal rounded-lg">
//           <video src="../../assets/video.mp4"/>
//         </div>
//         <div>
//           <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
//             We provide the <br /> best{" "}
//             <span className="text-Teal">online courses</span>
//           </div>
//           <p className="text-sm text-gray leading-7 mb-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
//             eum, explicabo quos eos magni vel corporis voluptatibus, inventore
//             doloremque aliquam pariatur recusandae.
//           </p>
//           <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
