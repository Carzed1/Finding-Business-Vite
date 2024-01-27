import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contentMap = {
    1: "To join our community, simply register on our website and follow the on-screen instructions. Once registered, you'll have access to all community features and resources.",
    2: "No, joining the [Your Project Name] Business Community is completely free. We believe in providing accessible resources and networking opportunities to all businesses.",
    3: "We welcome businesses to share their success stories! To be featured in our Business Spotlights, reach out to our community moderators or submit your story through our online submission form.",
    4: "Our community fosters various collaboration opportunities, including partnerships, joint ventures, and collaborative projects. Explore our Collaboration Opportunities section to connect with potential collaborators.",
    5: "If you have valuable tools, guides, or resources for business growth, we encourage you to share them with the community. Contact our moderators or submit your resource through our online submission form.",
    6: "No, there's no limit to the number of networking events you can attend. Feel free to join as many webinars, virtual meetups, and networking sessions as you'd like. Check our Events calendar for upcoming opportunities.",
    7: "Engaging in the Q&A Section is easy! Ask your business-related questions, and our experienced community members will provide insights and guidance. Similarly, contribute by sharing your expertise to help others succeed.",
    8: "Absolutely! We encourage businesses to share their achievements. Connect with our moderators or submit your success story through our online submission form to inspire and motivate fellow entrepreneurs.",
  };

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">{contentMap[id]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
