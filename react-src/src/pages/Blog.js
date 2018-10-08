import React from 'react';
import Head from '../components/Head';
import { Wrapper, LoaderWrapper } from '../components/pageExport';
import fetch from 'isomorphic-fetch';
import PacmanLoader from 'react-spinners/PacmanLoader';

class Blog extends React.Component {
    
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

            fetch(`/wp-json/freddie/v2/post/?slug=${slug}`)
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

        fetch(`/wp-json/freddie/v2/post/?slug=${slug}`)
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
                <Head/>
                <h2>{page.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{__html: page.content.rendered}} />
            </Wrapper>
        )
    }
}

export default Blog;