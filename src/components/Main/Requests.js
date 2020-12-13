import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Menu} from "../Main/Menu";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {loadRequests} from "../../redux/action-creators/request";
import Items from "./Items";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0 0 20px 30px;
    text-align: left;
`;

const Requests = ({onLoadRequests, isLoad, requests}) => {
    useEffect(() => {
        onLoadRequests();
    }, [isLoad]);
    return (
        <Wrapper>
            <Menu/>
            <Title>Все заявки</Title>
            {isLoad && <Items items={requests}/>}
        </Wrapper>
    )
};

Requests.propTypes = {
    onLoadRequests: PropTypes.func,
    isLoad: PropTypes.bool,
    requests: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        customer: PropTypes.string,
        status: PropTypes.string,
        create: PropTypes.number,
    })),
};

const mapStateToProps = (state) => {
    return {
        requests: state.request.requests,
        isLoad: state.request.isLoad
    }
};

const mapDispatchToProps = dispatch => ({
    onLoadRequests: () => dispatch(loadRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests)