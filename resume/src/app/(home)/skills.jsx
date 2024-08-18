import React from "react";

const Skills = () => {
  return (
    <section className="bg-white shadow-md p-6 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-gray-700">
          <h4 className="font-semibold">Languages</h4>
          <p>JavaScript, TypeScript, PHP, C#</p>
        </div>
        <div className="text-gray-700">
          <h4 className="font-semibold">Frameworks</h4>
          <p>React, Next.js, Node.js, Express</p>
        </div>
        <div className="text-gray-700">
          <h4 className="font-semibold">Databases</h4>
          <p>MongoDB, MSSQL, Redis, PostgreSQL</p>
        </div>
        <div className="text-gray-700">
          <h4 className="font-semibold">Tools</h4>
          <p>AWS, Vercel, Stripe, Cloudinary</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
