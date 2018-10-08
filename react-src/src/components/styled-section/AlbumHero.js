import React from 'react';
import styled from 'styled-components';

const Jumbotron = styled.section`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: .3rem;
    ${props => props.textCenter && 'text-align: center!important;'}
`;

const JumbotronHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    line-height: 1.2;
    color: inherit;
`;

const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    p {
        font-size: 1.25rem;
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 1rem;
        color: #6c757d!important;
    }
`;

class AlbumHero extends React.Component {
    render() {
        return (
            <Jumbotron textCenter>
                <Container>
                    <JumbotronHeading>Blog Component</JumbotronHeading>
                    <p>This is a WordPress Blog but theres no PHP on the frontend! This entire experience is built with React and the WordPress REST API. If you look at the 'Default Headlines' below, these are coming from whats called Default Props. I'm using this exact component on the homepage as well but here I didn't pass props intentially to show how Default Props work!</p>
                </Container>
            </Jumbotron>
        );
    }
}

export default AlbumHero;