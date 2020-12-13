import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortDown} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {deleteRequest, changeStatus} from "../../redux/action-creators/request";
import PropTypes from "prop-types";

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

const Dropdown = ({id, onDeleteRequest, onChangeStatus}) => {
    return (
        <DropdownWrapper>
            <DropdownBtn>Действие <IconWrapper><Arrow icon={faSortDown}/></IconWrapper></DropdownBtn>
            <DropdownContent>
                <Link onClick={()=>onChangeStatus(id, 'в работу')}>В работу</Link>
                <Link onClick={()=>onChangeStatus(id, 'выполнена')}>Выполнена</Link>
                <Link onClick={()=>onChangeStatus(id, 'оплачено')}>Оплачено</Link>
                <Link onClick={()=>onChangeStatus(id, 'возврат')}>Возврат</Link>
                <Link onClick={()=>onDeleteRequest(id)}>Закрыть</Link>
            </DropdownContent>
        </DropdownWrapper>
    )
};

Dropdown.propTypes = {
    onDeleteRequest: PropTypes.func,
    onChangeStatus: PropTypes.func,
    id: PropTypes.number
};

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => ({
    onDeleteRequest: (id) => dispatch(deleteRequest(id)),
    onChangeStatus: (id,status)=> dispatch(changeStatus(id,status))
});


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)

