import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import usePortfolioList from '../../../lib/query/usePortfolioList';
import { mobile } from '../../../lib/style/media';
import PortfolioModal from './Modal';
import Button from '../../Form/Button';

const Wrap = styled.div`
    .portfolios {
        display: flex;
        flex-wrap: wrap;
        
    }
    .actions {
        max-width: 1280px;
        margin: 0 auto;
        padding: 1em;
        .wrapButtons {
            position: relative;
            .next {
                position: absolute;
                right:0;
            }
            .prev {
                position: absolute;
                left:0;
            }
        }
    }
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

function Portfolio({ date, description, excerpt, slug, title, image, html, en }: any) {
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
    const [page, setPage] = useState(1);
    const amount = 5;
    const plist = list.slice((page - 1) * amount, page * amount);
    return (
        <Wrap>
            <div className="portfolios">
                {plist.map((data: any) => <Portfolio key={data.slug} {...data} />)}
            </div>
            <div className="actions">
                <div className="wrapButtons">
                    {page !== 1 && <Button className="prev" primary onClick={() => setPage(page - 1)}>이전으로</Button>}
                    {list.length - page * amount >= amount && (
                        <Button className="next" primary onClick={() => setPage(page + 1)}>
                            다음으로
                        </Button>
                    )}
                </div>
            </div>
        </Wrap>
    );
}

export default PortfolioList;