import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from './pageExport';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Instagram } from 'styled-icons/feather/Instagram';
import { Github } from 'styled-icons/feather/Github';

const iconWidth = '22px';

const FB = styled(Facebook)`
    width: ${iconWidth};
`;

const Tweet = styled(Twitter)`
    width: ${iconWidth};
`;

const Insta = styled(Instagram)`
    width: ${iconWidth};
`;

const Git = styled(Github)`
    width: ${iconWidth};
`;

const StyledFooter = styled.section`
    background: #f7f7f7;
`;

const FooterInner = styled.div`
    display: flex;
    flex-flow: column;
`;

const FooterMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
        a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 400;
            color: #54AF30;
            cursor: pointer;
            margin: 0 10px;
            &:hover {
                color: #22A6DD;
            }
        }
    }
    li:first-child a {
        margin: 0;
    }
`;

const CopyRight = styled.div`
    
    p {
        font-size: 85%;
        font-weight: 300;
        .heart:before {
            content: '\\2665';
            color: red;
            font-size: 16px!important;
          }
    }
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                <Wrapper>
                    <FooterInner>
                        <FooterMenu>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/components">Components</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <a href="https://facebook.com">
                                <FB/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/freddiemixell">
                                <Tweet/>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <Insta/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/freddiemixell">
                                <Git/>
                            </a>
                        </li>
                        </FooterMenu>
                        <CopyRight>
                            <p>Made with <span className='heart'></span> by Freddie Mixell.</p>
                        </CopyRight>
                    </FooterInner>
                </Wrapper>
            </StyledFooter>
        );
    }
}

export default Footer;