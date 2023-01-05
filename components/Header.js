import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-300 h-[60px] w-full">
      Header
      <input type="text" className="border" />
    </div>
  );
};

export default React.memo(Header);
