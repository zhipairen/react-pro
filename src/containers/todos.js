import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class Todos extends React.PureComponent {
  constructor (props) {
    super(props);
  }
  render () {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(t => <li>{t}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: id => {
      dispatch(addTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
