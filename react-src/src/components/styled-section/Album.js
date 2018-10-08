import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title, Paragraph, PostSection, Post, LoaderWrapper } from '../pageExport';
import fetch from 'isomorphic-fetch';
import PacmanLoader from 'react-spinners/PacmanLoader';

class Album extends React.Component {

    constructor(props) {
        super(props);
        this.timeIncrementMs = 50;
        this.showSpinnerIfReturnGreaterThanMs = 200;
        this.state = {
            posts: [],
            isLoading: true,
			msElapsed: 0
        }
    }

    componentWillUnmount() {
        clearInterval(this.incrementer);
    }

    componentDidMount() {

        this.incrementer = setInterval(() =>
        this.setState({
            msElapsed: this.state.msElapsed + this.timeIncrementMs
            })
        , this.timeIncrementMs);

        fetch(`/wp-json/wp/v2/posts?_embed`)
        .then(res => {
            return res.json();
        }).then(value => {
            this.setState({
                posts: value,
                isLoading: false
            });
            clearInterval(this.incrementer);
        });
    }

    render() {

        const {
            title = 'Default Headline',
            subTitle = 'Default Subheadline'
        } = this.props;

        const { posts } = this.state;

        const PostArray = posts.map(post => {
            return (
                <Post key={post.id}>
                    <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered} />
                    <Link to={`/blog/${post.slug}`}><h4>{post.title.rendered}</h4></Link>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </Post>
            );
        });

        if (this.state.isLoading &&
            this.state.msElapsed > this.showSpinnerIfReturnGreaterThanMs) {
            return (
                <LoaderWrapper>
                    <PacmanLoader color="#CDDC39"/>
                </LoaderWrapper>
            );
        } else if (this.state.isLoading &&
            this.state.msElapsed <= this.showSpinnerIfReturnGreaterThanMs) {
            return (null);
        }

        return (
            <Wrapper>
                <Title size='2rem' bold>{title}</Title>
                <Paragraph>{subTitle}</Paragraph>
                <PostSection>
                    {PostArray}
                </PostSection>
            </Wrapper>
        );
    }
}

export default Album;