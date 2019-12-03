import React from 'react'
import styled, { css } from 'styled-components';
import usePortfolioList from '../../../lib/query/usePortfolioList';
import { mobile } from '../../../lib/style/media';

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;

    .portfolio {
        width: 300px;
        margin: 1em;
        border-radius: 7px;
        box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.3);
        .image {
            height: 200px;
            background: #dadada;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
        }
        .contents {
            padding: .5em;
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
    }
`;

function Portfolio({ date, description, excerpt, slug, title, image }: any) {
    return (
        <div className="portfolio">
            <div className="image" style={image ? { background: `url(${image})` } : {}} />
            <div className="contents">
                <h3 className="title">{title}</h3>
                <p className="date">{date}</p>
                <p className="description">{description || excerpt}</p>
            </div>
        </div>
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