import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Instagram } from 'styled-icons/feather/Instagram';
import { Github } from 'styled-icons/feather/Github';
import logo from '../static/images/logo.png';
import { device } from './styleUtil';
import { BurgerStyles } from './pageExport';

import { slide as Burger } from 'react-burger-menu';

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

const StylishMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
        a {
            text-decoration: none;
            font-size: 18px;
            font-weight: 400;
            color: #54AF30;
            cursor: pointer;
            margin: 0 10px;
            &:hover {
                color: #22A6DD;
            }
        }
    }
    li:last-child {
        margin-right: 3rem;
    }
`;

const MobileHide = styled.div`
    display: none;
    @media ${device.laptop} {
        display: flex;
    }
`;

const LaptopHide = styled.div`
    display: block;
    @media ${device.laptop} {
        display: none;
    }
`;

const Logo = styled.img`
width: 200px;
    @media ${device.laptop} {
        width: 300px;
    }
`;

const LogoWrap = styled.li`
    margin-left: 3rem;
    margin-right: auto;
    a {
        margin: 0!important;
    }
`;

const MobileMenu = styled.ul`
    display: flex;
    flex-flow: column;
`;

class Menu extends React.Component {
    render() {
        return (
            <StylishMenu>
                <LogoWrap>
                    <Link to="/"><Logo src={logo} /></Link>
                </LogoWrap>
                <MobileHide>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/components">Components</Link>
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
                </MobileHide>
                <LaptopHide>
                    <Burger right isOpen={false} styles={BurgerStyles}>
                        <MobileMenu>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/components">Components</Link>
                            </li>
                        </MobileMenu>
                    </Burger>
                </LaptopHide>
            </StylishMenu>
        );
    }
}

export default Menu;