import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import usePortfolioList from '../../../lib/query/usePortfolioList';
import { mobile } from '../../../lib/style/media';
import PortfolioModal from './Modal';

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;

    .portfolio {
        background: #333;
        width: 300px;
        margin: 1em;
        border-radius: 7px;
        box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.3);
        cursor: pointer;
        .image {
            height: 200px;
            background: #dadada;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
        }
        .contents {
            padding: .5em 1em;
            .title {
                margin-bottom: 5px;
            }
            .date {
                margin-top: 0;
                color: #CACACA;
            }
            .description {
                margin-top: 0;
            }
        }
        ${mobile(css`
            width: 100%;
        `)}
    }
`;

function Portfolio({ date, description, description_ko, description_en, excerpt, slug, title, image, html, en }: any) {
    const [show, setShow] = useState(false);
    return (
        <>
            <PortfolioModal en={en} title={title} image={image} slug={slug} contents={html} date={date} show={show} onClose={() => setShow(false)} />
            <div className="portfolio" onClick={() => setShow(true)} role="button">
                <div className="image" style={image ? { background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}} />
                <div className="contents">
                    <h3 className="title">{title}</h3>
                    <p className="date">{date}</p>
                    <p className="description">{description || excerpt}</p>
                </div>
            </div>
        </>
    )
}
function PortfolioList() {
    const list = usePortfolioList();
    return (
        <Wrap>
            {list.map((data: any) => <Portfolio key={data.slug} {...data} />)}
        </Wrap>
    );
}

export default PortfolioList;