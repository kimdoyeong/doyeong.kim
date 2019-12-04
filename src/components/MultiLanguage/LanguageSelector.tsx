import React, { useCallback } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducer';
import { dispatchChangeLanguage } from '../../store/reducer/Language';

const Wrap = styled.div`
    display: flex;
    .selector {
        height: 28px;
        width: 56px;
        border-radius: 14px;
        background: #7a7a7a;
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        .button {
            width: 28px;
            height: 28px;
            background: #EAEAEA;
            border-radius: 14px;
            position: absolute;

            transition: left .25s;
            &.left {
                left : 0px;
            }
            &.right {
                left: 30px;
            }
        }
    }
    .label {
        align-self: center;
        margin: 0 6px;
    }
`;
function LanguageSelector() {
    const { lang } = useSelector((state: RootState) => state.Language);
    const dispatch = useDispatch();

    const toggle = useCallback(() => {
        if (lang === 'ko') {
            dispatch(dispatchChangeLanguage('en'));
        } else {
            dispatch(dispatchChangeLanguage('ko'));
        }
    }, [dispatch, lang]);

    return (
        <Wrap>
            <div className="label">KO</div>
            <div className="selector" onClick={toggle}>
                <div className={["button", lang === 'ko' && 'left', lang === 'en' && 'right'].filter(Boolean).join(' ')} />
            </div>
            <div className="label">EN</div>
        </Wrap>
    )
}

export default LanguageSelector;