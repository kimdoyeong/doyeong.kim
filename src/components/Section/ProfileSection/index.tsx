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
    return (
        <Section>
            <h1 className="title">Profile</h1>
            <IdList>
                <Id name={<>📛 <MultiLanguage ko="이름" en="Name" /></>}>
                    <MultiLanguage ko="김도영 (Doyeong Kim)" en="Doyeong Kim (김도영)" />
                </Id>
                <Id name={<>🗓️ <MultiLanguage ko="출생" en="Birth" /></>}>
                    <MultiLanguage
                        ko={`2003년 3월 8일, 대한민국`}
                        en={`March 8, 2003, South Korea`}
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