import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
padding: 8px 26px;
font-size: 1rem;
font-weight: 600;
line-height: 1.5;
color: #fff;
border: none;
background : ${(p)=>p.background};
margin: ${(p)=>p.margin};`

function Button ({ children, ...props }) {
    return (
       <StyledButton {...props}>{children}</StyledButton> 
    );
};

export default Button;