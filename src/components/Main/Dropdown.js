import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortDown} from '@fortawesome/free-solid-svg-icons'

const Arrow = styled(FontAwesomeIcon)`
    font-size: 14px;
    color: #73bbed;
    margin-top: -10px;
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const DropdownBtn = styled.button`
    padding: 5px;
    border: none;
    background-color: transparent;
    font-size: 14px;
`;

const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
    
    :hover ${DropdownBtn} {
        color: 
    }
    
    :hover ${DropdownContent} {
      display: block;
     }
`;

const Link = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 14px;
  
 :hover {
    background-color:#ddd;
    cursor: pointer;
  }
`;

const IconWrapper = styled.span`
    position: relative;
    top: -2px;
`;

export const Dropdown = (id) => {
    const test = () => {
        console.log(id)
    };

    return (
        <DropdownWrapper>
            <DropdownBtn>Действие <IconWrapper><Arrow icon={faSortDown}/></IconWrapper></DropdownBtn>
            <DropdownContent>
                <Link onClick={test}>Оплачено</Link>
                <Link onClick={test}>В работу</Link>
                <Link onClick={test}>Закрыть</Link>
            </DropdownContent>
        </DropdownWrapper>
    )
};