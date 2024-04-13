import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsGlobe } from 'react-icons/bs'; // If you want to use an icon for the dropdown

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <BsGlobe /> {/* Icon indicating global/language settings */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>
          🇺🇸 English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('de')}>
          🇩🇪 Deutsch
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
