import React from "react";

const Experience = () => {
  return (
    <section className="bg-white shadow-md p-6 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Professional Experience
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Lead Developer & CTO</h3>
        <p className="text-gray-600">
          Obby/Baluu | Feb 2018 - Aug 2024 | Remote
        </p>
        <p className="text-gray-700 mt-2">
          Led development of a SaaS platform for scheduling and booking.
          Architected a monorepo infrastructure, cutting infrastructure costs by
          60%. Managed a team of developers and implemented agile methodologies.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Web Developer</h3>
        <p className="text-gray-600">
          E-Borealis | April 2013 - April 2018 | Funchal, Portugal
        </p>
        <p className="text-gray-700 mt-2">
          Refactored a video distribution platform serving 5 million daily
          users. Improved front-end performance and reduced load times using
          React, Next.js, MongoDB, and Redis.
        </p>
      </div>
    </section>
  );
};

export default Experience;
