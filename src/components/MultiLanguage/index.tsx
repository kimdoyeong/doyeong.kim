import React from 'react'

import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

interface MultiLanguageProps {
    ko: string,
    en: string
}
function MultiLanguage({ ko, en }: MultiLanguageProps) {
    const { lang } = useSelector((state: RootState) => state.Language);

    switch (lang) {
        case 'ko':
            return <>{ko}</>;
        case 'en':
            return <>{en}</>;
        default:
            return <>{ko}</>;
    }
}

export default MultiLanguage;