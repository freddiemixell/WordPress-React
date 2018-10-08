import React from 'react';
import Head from '../components/Head';
import Hero from '../components/styled-section/Hero';
import Album from '../components/styled-section/Album';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                <Hero 
                    title="Don't Compromise."
                    subTitle='React &amp; WordPress without the hassle of two websites. Use this theme and modify it while learning React.'
                />
                <Album
                    title='Custom components'
                    subTitle='React Styled Components Keep Your CSS Organized and Crisp.'
                />
            </div>
        )
    }
}

export default Home;