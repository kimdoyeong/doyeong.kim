import React from 'react'
import Section from '..'
import useImageCode from '../../../lib/image/useImagePaper'
import PortfolioList from './List';

function PortfolioSection() {
    const image = useImageCode();
    return (
        <Section image={image.src}>
            <h1 className="title">Portfolio</h1>
            <PortfolioList />
        </Section>
    )
}

export default PortfolioSection;