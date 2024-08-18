import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-8 text-center">
      <p className="text-gray-700">Connect with me on:</p>
      <div className="mt-2">
        <a
          href="https://github.com/b2rsp"
          className="text-blue-500 hover:underline mx-2"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/vitor-gon%C3%A7alves-202a0637"
          className="text-blue-500 hover:underline mx-2"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
