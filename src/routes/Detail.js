import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionCreators } from '../store';

function Detail({ toDo, onBtnClick }) {
  let history = useHistory();
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button
        onClick={() => {
          onBtnClick();
          history.goBack();
        }}
      >
        DEL
      </button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
