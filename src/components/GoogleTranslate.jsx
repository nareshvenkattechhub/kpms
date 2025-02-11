import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: "en", 
          includedLanguages: "as,bn,gu,kn,ks,kok,ml,mr,ne,or,pa,sa,ta,te,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 
        "google_translate_element"
      );

      // Restore selected language from localStorage
      const selectedLang = localStorage.getItem("selectedLanguage");
      if (selectedLang) {
        setTimeout(() => {
          const langSelect = document.querySelector(".goog-te-combo");
          if (langSelect) {
            langSelect.value = selectedLang;
            langSelect.dispatchEvent(new Event("change"));
          }
        }, 1000);
      }
    };

    // Store selected language in localStorage
    document.addEventListener("change", (event) => {
      if (event.target.classList.contains("goog-te-combo")) {
        localStorage.setItem("selectedLanguage", event.target.value);
      }
    });

  }, []);

  return <div id="google_translate_element" style={{ position: "absolute", top: 10, right: 10 }}></div>;
};

export default GoogleTranslate;
