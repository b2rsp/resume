import * as React from "react";
import Sidebar from "./sidebar";
import Content from "./content";

export default function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col max-w-[596px]">
      <div className="flex relative flex-col w-full min-h-[842px] max-md:max-w-full">
        <div className="relative py-0.5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
