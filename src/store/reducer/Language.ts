const CHANGE_LANGUAGE = 'Language/CHANGE_LANGUAGE' as const;

export function dispatchChangeLanguage(lang: 'ko' | 'en') {
    return {
        type: CHANGE_LANGUAGE,
        lang
    }
}
type ActionType = ReturnType<typeof dispatchChangeLanguage>;

export interface LanguageType {
    lang: 'ko' | 'en'
};

const initialState: LanguageType = {
    lang: 'ko'
};

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                lang: action.lang
            }
        default:
            return state;
    }
}