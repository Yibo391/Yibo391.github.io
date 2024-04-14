import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home-page mt-4">
            <h1>{t('welcomeTitle')}</h1>
            <p>{t('introText')}</p>
            <p>{t('exploreFeatures')}</p>
            <div><strong>{t('weather')}</strong>: {t('weatherWidgetDescription')}</div>
            <div><strong>{t('photos')}</strong>: {t('photoCarouselDescription')}</div>
            <div><strong>{t('todoList')}</strong>: {t('todoListDescription')}</div>
            <div><strong>{t('calculator')}</strong>: {t('calculatorDescription')}</div>
            <br/>
            <p>{t('projectConclusion')}</p>
        </div>
    );
}

export default Home;
