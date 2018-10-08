import styled from 'styled-components';
import { device } from './styleUtil';

export const Title = styled.h2`
    ${props => props.size ? 'font-size:' + props.size + ';' : 'font-size: 2.5rem;line-height:1.2;'}
    ${props => props.bold ? 'font-weight: 500;' : 'font-weight: 300;'}
    margin: 0;
    margin-bottom: .5rem;
    @media ${device.laptop} {
        ${props => props.size ? 'font-size:' + props.size + ';' : 'font-size: 3rem;'}
    }
`;
export const SubTitle = styled.h3`
${props => props.size ? 'font-size:' + props.size + ';' : 'font-size: 1.125rem;'}
    max-width: 88%;
    font-weight: 300;
    margin: 0;
    margin-bottom: 1rem;
    @media ${device.laptop} {
        ${props => props.size ? 'font-size:' + props.size + ';' : 'font-size: 1.5rem;'}
    }
`;

export const Paragraph = styled.p`
    font-size: 1rem;
`;

export const Button = styled.button`
    width: 300px;
    font-weight: 500;
    color: #7952b3;
    background: transparent;
    border-color: #7952b3;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s;
    &:hover {
        border-color: #fff;
        color: #fff;
        background: #7952b3;
    }
`;

export const PostSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    grid-column-gap: 1em;
    @media ${device.mobileL} {
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    }
    @media ${device.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    }
`;

export const Post = styled.div`
    display: flex;
    flex-flow: column;
    img {
        margin-bottom: 1rem!important;
        padding: .25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: .25rem;
        max-width: 100%;
        height: auto;
    }
    h4 {
        margin: 0;
    }
`;

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`;

export const Wrapper = styled.div`
    padding: 3rem!important;
`;

export const BurgerStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '18px',
      top: '15px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMenuWrap: {
        top: '0'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }