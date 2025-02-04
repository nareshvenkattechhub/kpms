
import React, { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);
  }, []);

  return (
    <div className="text-center my-3">
      <h5>Select Language:</h5>
      <div id="google_translate_element"></div>
    </div>
  );
}

export default GoogleTranslate;
