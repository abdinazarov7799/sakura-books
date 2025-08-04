import React, { useState, useEffect, useRef } from 'react';
import LogoDark from '../assets/logo-dark.svg';
import Search from '../assets/search.svg';
import ArrowDown from '../assets/arrow-down.svg';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";

const Header = ({ref, refs, onSearch}) => {
    const {t, i18n} = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchRef = useRef(null);
    const languageRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Qidirish takliflarini yaratish
    const suggestions = {
        uz: [
            'Alifbo O\'yinlari',
            'Qofiyali So\'zlar', 
            'Raqamlar O\'yini',
            'Ajoyib Labirintlar',
            'Ingliz alifbosi',
            'Yozish mashqlari',
            'Mayda motorika',
            '4-6 yosh',
            '7-9 yosh',
            'Interaktiv',
            'O\'quv materiallari'
        ],
        ru: [
            'Алфавитные игры',
            'Рифмованные слова',
            'Игры с числами',
            'Удивительные лабиринты',
            'Английский алфавит',
            'Упражнения по письму',
            'Мелкая моторика',
            '4-6 лет',
            '7-9 лет',
            'Интерактивные',
            'Учебные материалы'
        ],
        en: [
            'Alphabet Games',
            'Rhyming Words',
            'Number Games',
            'Amazing Labyrinths',
            'English Alphabet',
            'Writing Exercises',
            'Fine Motor Skills',
            '4-6 years',
            '7-9 years',
            'Interactive',
            'Educational Materials'
        ]
    };

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false); // Mobile menuni yopish
    };

    // Qidirish takliflarini filtrlash
    useEffect(() => {
        if (searchQuery.trim()) {
            const currentSuggestions = suggestions[i18n.language] || suggestions.uz;
            const filtered = currentSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setShowSuggestions(false);
            setFilteredSuggestions([]);
        }
    }, [searchQuery, i18n.language]);

    // Tashqi click ni aniqlash
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguageMenu(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguageMenu(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Kitoblar bo'limiga o'tish
            scrollToSection(refs.booksRef);
            // Qidiruv natijalarini ko'rsatish
            onSearch && onSearch(searchQuery);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        // Kitoblar bo'limiga o'tish
        scrollToSection(refs.booksRef);
        // Qidiruv natijalarini ko'rsatish
        onSearch && onSearch(suggestion);
    };

    return (
        <section
            ref={ref}
            style={{boxShadow: "0px 4px 6px -1px #0000001A"}}
            className={'py-[12px] sticky top-0 bg-white z-50'}
        >
            <Container>
                <div className={'flex items-center justify-between'}>
                    {/* Logo */}
                    <img src={LogoDark} alt="Logo" className="w-[100px] md:w-[130px]" />
                    
                    {/* Desktop Navigation */}
                    <div className={'hidden lg:flex space-x-[24px]'}>
                        <button onClick={() => scrollToSection(refs.homeRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Bosh Sahifa")}
                        </button>
                        <button onClick={() => scrollToSection(refs.aboutRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Biz Haqimizda")}
                        </button>
                        <button onClick={() => scrollToSection(refs.booksRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Kitoblar")}
                        </button>
                        <button onClick={() => scrollToSection(refs.newsRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Yangiliklar")}
                        </button>
                        <button onClick={() => scrollToSection(refs.contactRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Aloqa")}
                        </button>
                    </div>

                    {/* Desktop Search and Language */}
                    <div className={'hidden md:flex space-x-[16px] items-center'}>
                        <div ref={searchRef} className="relative">
                            <form onSubmit={handleSearch} className={'border-[2px] space-x-[11px] border-[#E5E7EB] rounded-full px-[14px] py-[10px] flex items-center h-[40px]'}>
                                <img src={Search} alt="Search"/>
                                <input 
                                    alt={'Search'} 
                                    className={'w-[175px] outline-none'} 
                                    type={'text'} 
                                    placeholder={t("Qidirish...")}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                                />
                            </form>
                            
                            {/* Qidirish takliflari */}
                            {showSuggestions && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                    {filteredSuggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div ref={languageRef} className="relative">
                            <div 
                                className={'flex items-center space-x-[4px] cursor-pointer'}
                                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                            >
                                <p className={'font-medium text-[14px] leading-[20px]'}>
                                    {i18n.language === 'uz' ? 'UZ' : i18n.language === 'ru' ? 'RU' : 'EN'}
                                </p>
                                <img src={ArrowDown} alt="ArrowDown"/>
                            </div>
                            
                            {/* Til tanlash menyusi */}
                            {showLanguageMenu && (
                                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[80px]">
                                    <div
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 border-b border-gray-100"
                                        onClick={() => changeLanguage('uz')}
                                    >
                                        O'zbekcha
                                    </div>
                                    <div
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 border-b border-gray-100"
                                        onClick={() => changeLanguage('ru')}
                                    >
                                        Русский
                                    </div>
                                    <div
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                                        onClick={() => changeLanguage('en')}
                                    >
                                        English
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-4">
                        {/* Mobile Search */}
                        <div ref={searchRef} className="relative">
                            <form onSubmit={handleSearch} className={'border-[2px] border-[#E5E7EB] rounded-full px-[10px] py-[8px] flex items-center h-[36px]'}>
                                <img src={Search} alt="Search" className="w-4 h-4"/>
                                <input 
                                    alt={'Search'} 
                                    className={'w-[120px] outline-none text-sm'} 
                                    type={'text'} 
                                    placeholder={t("Qidirish...")}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                                />
                            </form>
                            
                            {/* Mobile Qidirish takliflari */}
                            {showSuggestions && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-40 overflow-y-auto">
                                    {filteredSuggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs text-gray-700 border-b border-gray-100 last:border-b-0"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Language */}
                        <div ref={languageRef} className="relative">
                            <div 
                                className={'flex items-center space-x-[2px] cursor-pointer'}
                                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                            >
                                <p className={'font-medium text-[12px] leading-[16px]'}>
                                    {i18n.language === 'uz' ? 'UZ' : i18n.language === 'ru' ? 'RU' : 'EN'}
                                </p>
                                <img src={ArrowDown} alt="ArrowDown" className="w-3 h-3"/>
                            </div>
                            
                            {/* Mobile Til tanlash menyusi */}
                            {showLanguageMenu && (
                                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[70px]">
                                    <div
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs text-gray-700 border-b border-gray-100"
                                        onClick={() => changeLanguage('uz')}
                                    >
                                        O'zbekcha
                                    </div>
                                    <div
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs text-gray-700 border-b border-gray-100"
                                        onClick={() => changeLanguage('ru')}
                                    >
                                        Русский
                                    </div>
                                    <div
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs text-gray-700"
                                        onClick={() => changeLanguage('en')}
                                    >
                                        English
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Hamburger Menu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex flex-col space-y-1 p-2"
                        >
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div ref={mobileMenuRef} className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2 pt-4">
                            <button onClick={() => scrollToSection(refs.homeRef)} className={'text-left text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90] py-2'}>
                                {t("Bosh Sahifa")}
                            </button>
                            <button onClick={() => scrollToSection(refs.aboutRef)} className={'text-left text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90] py-2'}>
                                {t("Biz Haqimizda")}
                            </button>
                            <button onClick={() => scrollToSection(refs.booksRef)} className={'text-left text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90] py-2'}>
                                {t("Kitoblar")}
                            </button>
                            <button onClick={() => scrollToSection(refs.newsRef)} className={'text-left text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90] py-2'}>
                                {t("Yangiliklar")}
                            </button>
                            <button onClick={() => scrollToSection(refs.contactRef)} className={'text-left text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90] py-2'}>
                                {t("Aloqa")}
                            </button>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Header;
