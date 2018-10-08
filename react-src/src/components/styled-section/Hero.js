import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, SubTitle, Button } from '../pageExport';

const HeroStyled = styled.section`
    padding: 3rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: #f8f9fa;
`;

class Hero extends React.Component {
    render() {

        const {
            title = 'Default Headline',
            subTitle = 'Default Subheadline'
        } = this.props;

        return (
            <HeroStyled>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <a href="https://github.com/freddiemixell/WordPress-React"><Button>View Repo</Button></a>
            </HeroStyled>
        );
    }
}

Hero.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
};

export default Hero;