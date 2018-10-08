import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: #7952b3;
    position: sticky;
    top: 0;
    z-index: 1071;
`;

class Header extends React.Component {
    render() {
        return(
            <StyledHeader>
                <Menu/>
            </StyledHeader>
        );
    }
}

export default Header;