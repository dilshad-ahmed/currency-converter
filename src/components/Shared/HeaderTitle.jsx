import React from "react";

const HeaderTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center py-10 max-w-[500px] mx-auto space-y-3">
      <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
};

export default HeaderTitle;
