import React from "react";
import supportGIF from "../../assets/support.png";
const CustomerSupport = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* Image section */}
          <div>
            <img src={supportGIF} alt="" className="max-w-[200px] " />
          </div>
          {/* Text section */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Get Customer Support 24*7
            </h1>
            <p className="text-gray-400 line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              exercitationem nobis veniam esse labore. Quibusdam quasi numquam
              cupiditate suscipit dignissimos repellendus possimus quos. Ab
              distinctio debitis numquam odit repudiandae fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
