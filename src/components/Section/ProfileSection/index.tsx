import React from 'react'
import Section from '..'
import styled, { css } from 'styled-components';
import { mobile } from '../../../lib/style/media';
import MultiLanguage from '../../MultiLanguage';

const IdList = styled.div`
    display: flex;
    flex-direction: column;

    .id-col {
        font-size: 1.25em;
        padding: 1em 2em;
        .value {
            color: #DADADA;
        }

        ${mobile(css`
            padding: 1em;
        `)}
    }
`;

function Id({ name, children }: { name: string | React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="id-col">
            <h3 className="key">
                {name}
            </h3>
            <div className="value">
                {children}
            </div>
        </div>
    )
}
function ProfileSection() {
    const birthday = new Date('2003-03-08');
    const now = new Date();
    const dday = Math.ceil((now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24));
    const old = now.getFullYear() - birthday.getFullYear() - (new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()).getTime() > now.getTime() ? 1 : 0);
    return (
        <Section>
            <h1 className="title">Profile</h1>
            <IdList>
                <Id name={<>📛 <MultiLanguage ko="이름" en="Name" /></>}>
                    <MultiLanguage ko="김도영 (Doyeong Kim)" en="Doyeong Kim (김도영)" />
                </Id>
                <Id name={<>🗓️ <MultiLanguage ko="생년월일" en="Birthday" /></>}>
                    <MultiLanguage
                        ko={`2003년 3월 8일 (D+ ${dday}, 만 ${old}세)`}
                        en={`March 8, 2003 (D+ ${dday}, ${old} Years Old)`}
                    />
                </Id>
                <Id name={<>🎓 <MultiLanguage ko="학력" en="Education" /></>}>
                    <MultiLanguage ko="선린인터넷고등학교 소프트웨어과 재학중" en="Attending Sunrin Internet High School Software Division" />
                </Id>
                <Id name={<MultiLanguage ko="💻 기술 스킬" en="💻 Skills" />}>
                    Node.js, React, Express, Koa, MongoDB, MySQL, HTML, CSS, Python
                </Id>
            </IdList>
        </Section >
    )
}

export default ProfileSection;