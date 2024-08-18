import Contact from "./contact";
export default function Sidebar() {
  return (
    <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col items-start pt-40 pr-0.5 pb-4 pl-5 w-full text-sm text-white aspect-[0.245] max-md:pt-24 max-md:mt-3.5 bg-blue-950">
        <Contact />
        <div className="relative mt-4 text-lg font-bold">Skills</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b583e3acbeef19b8fa281aa6a9fac6040faf32e16f4b4245ba27988c85243d?placeholderIfAbsent=true&apiKey=5b3ece6e32054bd5a06ccde4010c7d2a"
          className="object-contain mt-1 aspect-[166.67] w-[170px]"
        />
        <div className="relative self-center mt-1.5 ml-5">: Javascript,</div>
        <div className="relative max-md:ml-1.5">Typescript, PHP, C#</div>
        <div className="flex relative self-center mt-2.5 max-w-full font-bold w-[149px]">
          <div>Tech</div>
          <div>&Lib</div>
          <div>: Nextjs, React,</div>
        </div>
        <div className="relative self-stretch max-md:mx-1.5">
          Mongo, Redis, PostegreSQL,
        </div>
        <div className="relative self-stretch mr-2.5 max-md:ml-1.5">
          MSSQL, Express.js, Hono.js,
        </div>
        <div className="relative self-end mt-2 mr-7 max-md:mr-2.5">
          : Monorepo Design
        </div>
        <div className="relative self-stretch mr-4 max-md:mr-2.5 max-md:ml-1.5">
          Turbore, Scalability, Cloud
        </div>
        <div className="relative max-md:ml-1.5">Infrastructure (AWS),</div>
        <div className="relative self-center">Serverless & Microservice,</div>
        <div className="relative max-md:ml-1.5">Durable execution</div>
        <div className="relative max-md:ml-1.5">(Temporal), Tailwind</div>
        <div className="relative mt-5 text-lg font-bold">Education</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2cddeebd926142c1ca663c7ab7c1ef7b2ed1af5a8ab1ac29e6d8a98d629a523?placeholderIfAbsent=true&apiKey=5b3ece6e32054bd5a06ccde4010c7d2a"
          className="object-contain mt-1 aspect-[166.67] w-[170px]"
        />
        <div className="relative mt-5 text-xs">2011-2013</div>
        <div className="relative text-xs">MSc Software Engineering</div>
        <div className="relative text-xs font-bold">University of Madeira</div>
        <div className="relative mt-3.5 text-xs">2007 - 2011</div>
        <div className="relative text-xs">BSc Software Engineering</div>
        <div className="relative text-xs font-bold">University/College</div>
        <div className="relative mt-1.5 text-lg font-bold">Language</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e5a8a738454fb95abc5e8af72e6eb939c92fb9e808efde69a61504ce3289d3?placeholderIfAbsent=true&apiKey=5b3ece6e32054bd5a06ccde4010c7d2a"
          className="object-contain ml-3.5 w-[170px] max-md:ml-2.5"
        />
        <div className="relative mt-4 text-xs">English (Fluent - C2)</div>
        <div className="relative mt-2 text-xs">Portuguese (Native)</div>
      </div>
    </div>
  );
}
