
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import "../style/EsEn.css"

const EsEn = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('language') || i18n.language);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleClickEs = () => {
    setLanguage('es');
  };

  const handleClickEn = () => {
    setLanguage('en');
  };

  const esStyle = language === 'es' ? { Color: '#fff', color: '#ffafaf' } : {};
  const enStyle = language === 'en' ? { Color: '#fff', color: '#ffafaf' } : {};

  return (
    <div className='language'>
      <button style={esStyle} onClick={handleClickEs}>ES</button>
      <button style={enStyle} onClick={handleClickEn}>EN</button>
    </div>
  );
};

export default EsEn;







// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

// import "../style/EsEn.css"

// const EsEn = () => {
//   const { i18n } = useTranslation();
//   const [language, setLanguage] = useState(localStorage.getItem('language') || i18n.language);

//   useEffect(() => {
//     localStorage.setItem('language', language);
//     i18n.changeLanguage(language);
//   }, [language, i18n]);

//   const handleClickEs = () => {
//     setLanguage('es');
//   };

//   const handleClickEn = () => {
//     setLanguage('en');
//   };

//   return (
//     <div className='language '>
//       <button onClick={handleClickEs}>ES</button>
//       <button onClick={handleClickEn}>EN</button>
//     </div>
//   );
// };

// export default EsEn;