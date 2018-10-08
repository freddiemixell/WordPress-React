import React from 'react';
import AlbumHero from '../components/styled-section/AlbumHero';
import Album from '../components/styled-section/Album';

class Blog extends React.Component {
    render() {
        return (
            <div>
                <AlbumHero/>
                <Album/>
            </div>
        );
    }
}

export default Blog;