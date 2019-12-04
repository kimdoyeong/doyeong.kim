import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout';

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    box-sizing: border-box;
    h1 {
        margin-top: 0;
        font-size: 3em;
        margin-bottom: 1rem;
    }
    p {
        margin-top: 0;
    }
`;

function PageNotFound() {
    return (
        <Layout>
            <Wrap>
                <h1>404</h1>
                <p>Page Not Found.</p>
            </Wrap>
        </Layout>
    )
}

export default PageNotFound;