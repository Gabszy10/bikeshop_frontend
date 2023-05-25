import React, { useEffect } from "react";

function redirect() {
  useEffect(() => {
    window.close();
  }, []);

  return <div></div>;
}

export default redirect;
