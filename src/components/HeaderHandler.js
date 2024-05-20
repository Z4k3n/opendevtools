import { useState } from 'react';

const categoryHeaders = {
  "Web Elements": "Explore a variety of web elements to enhance your projects.",
  "APIs": "Discover APIs to integrate various functionalities into your projects.",
  "IDEs & Editors": "Find the right Integrated Development Environments and Editors for your coding needs.",
  "Courses": "Access a wide range of courses to enhance your skills and knowledge.",
  "Databases": "Explore databases to store and manage your data effectively.",
  "Design Tools": "Discover tools to create stunning designs and visuals for your projects.",
  "Hosting": "Find reliable hosting solutions to deploy and manage your applications.",
  "Forums": "Connect with like-minded individuals and experts to discuss and troubleshoot."
};

function HeaderHandler() {
  const [headerText, setHeaderText] = useState("Empowering Developers Everywhere");
  const [headerSubtext, setHeaderSubtext] = useState("Discover a vast collection of free, open-source resources designed to elevate your projects. Start building better, faster, and smarter today!");

  const updateHeaderText = (text, subtext) => {
    setHeaderText(text);
    setHeaderSubtext(subtext);
  };

  return {
    headerText,
    headerSubtext,
    updateHeaderText,
    categoryHeaders
  };
}

export default HeaderHandler;