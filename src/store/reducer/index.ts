import { combineReducers } from 'redux';
import Language, { LanguageType } from './Language';

export interface RootState {
    Language: LanguageType
}
const reducer = combineReducers<RootState>({
    Language
});

export default reducer;