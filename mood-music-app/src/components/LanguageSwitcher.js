import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageSwitcher = () => {
  const { setLang } = useLanguage();

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select onChange={handleLanguageChange} className="language-dropdown">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="hi">हिंदी</option>
        <option value="te">తెలుగు</option>
        <option value="de">Deutsch</option>
        <option value="ta">தமிழ்</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="pt">Português</option>
        <option value="ja">日本語</option>
        <option value="zh">中文</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
