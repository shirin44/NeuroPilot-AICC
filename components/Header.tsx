import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { LOCALIZED_CONTENT, NARRATORS } from '../constants';
import { Language, NarratorRole } from '../types';
import LogoIcon from './icons/LogoIcon';
import Tooltip from './Tooltip';

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useContext(AppContext);

    const toggleLanguage = () => {
        setLanguage(language === Language.EN ? Language.VN : Language.EN);
    };

    return (
        <Tooltip tip={language === Language.EN ? "Chuyển sang tiếng Việt" : "Switch to English"} position="bottom">
            <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 border border-border rounded-full text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                aria-label="Toggle language"
            >
                <span className={language === Language.EN ? 'font-bold text-primary' : ''}>EN</span>
                <span>/</span>
                <span className={language === Language.VN ? 'font-bold text-primary' : ''}>VN</span>
            </button>
        </Tooltip>
    );
};


const Header: React.FC = () => {
  const { language, setNarratorRole, setMode } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectRole = (role: NarratorRole) => {
    setNarratorRole(role);
    setMode(null);
    navigate('/mode-selection');
  };

  const navLinks = [
    { path: '/', label: LOCALIZED_CONTENT.home[language] },
    { path: '/about', label: LOCALIZED_CONTENT.about[language] },
    { path: '/contact', label: LOCALIZED_CONTENT.contact[language] },
    { path: '/OurStory', label: LOCALIZED_CONTENT.OurStory[language] }

  ];

  const roleNavLinks = [
      { role: NarratorRole.Jobseeker, theme: 'blue', colorClass: 'hover:text-brand-blue-400' },
      { role: NarratorRole.Employer, theme: 'purple', colorClass: 'hover:text-brand-purple-400' },
      { role: NarratorRole.Parent, theme: 'red', colorClass: 'hover:text-brand-red-300' },
      { role: NarratorRole.Volunteer, theme: 'green', colorClass: 'hover:text-brand-green-400' },
  ]

  return (
    <header className="force-light-theme bg-card/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="font-display font-bold text-2xl text-foreground">AICC</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-6 w-px bg-border"></div>
            {roleNavLinks.map(link => (
                <button
                    key={link.role}
                    onClick={() => handleSelectRole(link.role)}
                    aria-label={`Select ${link.role} role`}
                    className={`font-medium transition-colors text-muted-foreground ${link.colorClass}`}
                >
                    {link.role}
                </button>
            ))}
          </nav>
          <div className="flex items-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;