import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
padding: ${(p)=>p.padding || '10px 50px'};
font: ${(p)=>p.font};
font-weight: 600;
line-height: 1.5;
cursor: pointer;
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