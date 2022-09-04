import React from "react";

const Footer = () => {
  return (
    <nav className="fixed bottom-0 bg-indigo-500 w-full flex justify-center p-2 text-white">
      <p>
        Hecho por{" "}
        <a
          href="https://www.linkedin.com/in/brayan-yepesc/"
          className="text-amber-500 font-bold"
        >
          Brayan Yepes
        </a>
      </p>
    </nav>
  );
};

export default Footer;
