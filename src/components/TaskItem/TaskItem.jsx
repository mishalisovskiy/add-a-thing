import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class TaskItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { taskName } = this.props;

    const taskItemStyle = {
      width: '92%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '7px',
      margin: '18px auto',
      textAlign: 'left',
      color: 'rgb(117, 116, 119)',
      fontSize: '1rem',
      borderRadius: '2px',
      background: 'linear-gradient(to right, #ececec, #f6f6f6)',
      cursor: 'pointer',
    };

    return (
      <Container className="taskItem" style={taskItemStyle} onClick={this.modalWindow}>
        {taskName}
      </Container>
    );
  }
}
