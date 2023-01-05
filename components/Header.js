import React from "react";
import { useRouter } from "next/router";
import { useState } from "../contexts/Context";

const Header = () => {
  const router = useRouter();
  const { state, dispatch } = useState();
  if (state.header) {
    return (
      <div className="bg-gray-300 h-[50px] w-full flex items-center justify-center">
        <input type="text" className="border" />
      </div>
    );
  } else {
    return (
      <div className="absolute left-0 top-0">
        <i
          className="fa-solid fa-chevron-left text-lg p-3"
          onClick={() => {
            dispatch({
              type: "CHANGE_STATE",
              data: {
                header: true,
              },
            });
            router.back();
          }}
        />
      </div>
    );
  }
};

export default React.memo(Header);
