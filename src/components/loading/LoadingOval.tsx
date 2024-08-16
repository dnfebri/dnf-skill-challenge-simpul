import React from "react";
import { Oval } from "react-loader-spinner";

export const LoadingOval = () => {
  return (
    <Oval
      visible={true}
      height="50"
      width="50"
      color="#4F4F4F"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
