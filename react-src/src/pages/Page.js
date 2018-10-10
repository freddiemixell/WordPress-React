import React from 'react';
import { withRouter } from 'react-router-dom';
import Head from '../components/Head';
import { Wrapper, LoaderWrapper } from '../components/pageExport';
import fetch from 'isomorphic-fetch';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Blog from './Blog.js';

class Page extends React.Component {
    
    constructor(props) {
        super(props);
        this.timeIncrementMs = 50;
        this.showSpinnerIfReturnGreaterThanMs = 200;
        this.state = {
            page: {},
            isLoading: true,
			msElapsed: 0
        }
    }

    componentWillUnmount() {
        clearInterval(this.incrementer);
    }

    componentDidUpdate(prevProps) {
        const { slug } = this.props.match.params;
        const prevPage = prevProps.match.params.slug;
        if (prevPage !== slug) {
            this.incrementer = setInterval(() =>
            this.setState({
                msElapsed: this.state.msElapsed + this.timeIncrementMs,
                isLoading: true
                })
            , this.timeIncrementMs);

            fetch(`/wp-json/freddie/v2/page/?slug=${slug}`)
            .then(res => {
                return res.json();
            }).then(value => {
                this.setState({
                    page: value,
                    isLoading: false
                });
                clearInterval(this.incrementer);
            });
        }
    }

    componentDidMount() {
        const { slug } = this.props.match.params;

        this.incrementer = setInterval(() =>
        this.setState({
            msElapsed: this.state.msElapsed + this.timeIncrementMs
            })
        , this.timeIncrementMs);

        fetch(`/wp-json/freddie/v2/page/?slug=${slug}`)
        .then(res => {
            return res.json();
        }).then(value => {
            this.setState({
                page: value,
                isLoading: false
            });
            clearInterval(this.incrementer);
        });
    }
    
    render() {
        const { page } = this.state;
        const { pathname } = this.props.location;
        if (pathname === '/blog/') return <Blog/>;
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
        if ( typeof page.title === 'undefined') {
            return (
                <Wrapper>
                    <Head/>
                    <h2>404 Page Not Found.</h2>
                </Wrapper>
            );
        }
        return (
            <Wrapper>
                <Head/>
                <h2>{page.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{__html: page.content.rendered}} />
            </Wrapper>
        )
    }
}

export default withRouter(Page);