import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="loadingSpinner absolute top-1/2 left-1/2">
      <ImSpinner9 className="animate-spin" color="white" size={50} />
    </div>
  );
};

export default Spinner;
