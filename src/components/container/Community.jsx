// CommunityPage.jsx

import React from "react";
import { motion } from "framer-motion";
import QuestionForm from "./QuesForm";

const CommunityPage = () => {
  return (
    <div className="container mx-auto mt-8 p-8" id="community">
      {/* Section 1: Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to [Your Project Name] Business Community!
        </h1>
        <p className="text-lg">
          We're thrilled to have you join a network of dynamic businesses and
          entrepreneurs. Our community is dedicated to fostering collaboration,
          sharing valuable insights, and connecting businesses for mutual
          growth.
        </p>
      </motion.div>

      {/* Section 2: Community Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>Be respectful and supportive in your interactions.</li>
          <li>Encourage collaboration and knowledge-sharing.</li>
          <li>Avoid spam and irrelevant promotions.</li>
          <li>
            Report any inappropriate behavior to the community moderators.
          </li>
        </ul>
      </motion.div>

      {/* Section 3: Business Spotlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Business Spotlights</h2>
        <p className="text-lg">
          Discover the stories of businesses that have thrived within our
          community. In our Business Spotlights, we showcase the successes,
          challenges overcome, and lessons learned by fellow entrepreneurs. Your
          story could be next!
        </p>
      </motion.div>

      {/* Section 4: Collaboration Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Collaboration Opportunities</h2>
        <p className="text-lg">
          Explore collaboration opportunities within the community. Whether
          you're looking for potential partners, collaborators, or joint
          ventures, this space is designed to facilitate meaningful connections
          that drive business growth.
        </p>
      </motion.div>

      {/* Section 5: Industry Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Industry Insights</h2>
        <p className="text-lg">
          Stay informed about industry trends and opportunities. Our Industry
          Insights section features articles, reports, and studies relevant to
          your business. Knowledge is power, and we're here to empower your
          business journey.
        </p>
      </motion.div>

      {/* Section 6: Networking Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Networking Events</h2>
        <p className="text-lg">
          Mark your calendars for our upcoming networking events! Join webinars,
          virtual meetups, and networking sessions to connect with other
          businesses, exchange ideas, and forge valuable partnerships. Don't
          miss out on the chance to expand your network.
        </p>
      </motion.div>

      {/* Section 7: Resource Hub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Resource Hub</h2>
        <p className="text-lg">
          Navigate through our Resource Hub to access tools and guides essential
          for business growth. From marketing strategies to financial
          management, find resources that equip you with the knowledge needed to
          succeed.
        </p>
      </motion.div>

      {/* Section 8: Q&A Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Q&A Section</h2>
        <p className="text-lg">
          Have questions about your business journey? Our Q&A section is the
          perfect place to seek advice and guidance from experienced
          entrepreneurs within the community. Contribute by sharing your
          insights and helping others succeed.
        </p>
      </motion.div>

      {/* Section 9: Business Success Stories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Business Success Stories</h2>
        <p className="text-lg">
          Explore real success stories from businesses that have flourished with
          the support of [Your Project Name]. Testimonials, case studies, and
          achievements are shared to inspire and motivate your entrepreneurial
          spirit.
        </p>
      </motion.div>

      {/* Section 10: Feedback and Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Feedback and Suggestions</h2>
        <p className="text-lg">
          Your feedback matters! Share your thoughts on how we can improve [Your
          Project Name]. We welcome suggestions for new features, enhancements,
          and any other ideas that will enhance your experience.
        </p>
      </motion.div>

      {/* Section 11: Business Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Business Challenges</h2>
        <p className="text-lg">
          Challenge yourself and your business with our themed contests.
          Participate in business challenges that encourage innovation,
          creativity, and problem-solving. Showcase your solutions and learn
          from fellow participants.
        </p>
      </motion.div>

      {/* Section 12: Community Polls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Community Polls</h2>
        <p className="text-lg">
          Make your voice heard through our community polls. We regularly seek
          your opinions on platform improvements, upcoming features, and other
          matters that impact your experience. Your feedback shapes the future
          of our community.
        </p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        className="mb-8 "
      >
        <h2 className="text-4xl font-bold mb-4 text-center mt-20">Ask Your Question</h2>
        <QuestionForm onSubmit={(question) => console.log(question)} />
      </motion.div>
      
    </div>
  );
};

export default CommunityPage;
