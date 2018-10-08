import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends React.Component {
    render() {
        return (
            <Helmet>
                <title>WordPress React</title>
                <meta name="description" content="The Best WordPress React Theme Boilerplate!" />
                <meta name="keywords" content="React, Javascript, Create React App" />
                <meta property="og:title" content="WordPress React Theme" />
                <meta property="og:image" content="/logo.png" />
            </Helmet>
        );
    }
}

export default Head;