import React from "react";
import { ImSpinner2 } from "react-icons/im";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ImSpinner2 className="animate-spin" />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
