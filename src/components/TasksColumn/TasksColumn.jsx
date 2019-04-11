import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';

export default class TasksColumn extends Component {
  render() {
    const parentProps = this.props;

    const taskColumnTitleStyle = {
      textAlign: 'center',
      margin: '25px auto 30px',
      fontSize: '1.8rem',
      borderBottom: '1px solid rgb(246, 246, 246)',
    };

    let taskColumnTitleText = '';
    let taskColumnTitleUnderline;

    switch (parentProps.columnType) {
      case '0':
        taskColumnTitleText = 'TO DO';
        taskColumnTitleStyle.color = 'rgb(103, 102, 106)';
        taskColumnTitleUnderline = { borderBottom: '3px solid rgb(103, 102, 106)' };
        break;
      case '1':
        taskColumnTitleText = 'IN PROGRESS';
        taskColumnTitleStyle.color = 'rgb(118, 183, 192)';
        taskColumnTitleUnderline = { borderBottom: '3px solid rgb(116, 154, 159)' };
        break;
      case '2':
        taskColumnTitleText = 'DONE';
        taskColumnTitleStyle.color = 'rgb(194, 105, 95)';
        taskColumnTitleUnderline = { borderBottom: '3px solid rgb(191, 134, 123)' };
        break;
      default:
        break;
    }

    const taskItem = parentProps.taskList.map(
      task => (task.status === +parentProps.columnType
        && <TaskItem key={task.id} taskName={task.name} />),
    );

    return (
      <div className="taskColumnContainer">
        <h1 className="taskColumnTitleStyle" style={taskColumnTitleStyle}>
          <span style={taskColumnTitleUnderline}>
            {taskColumnTitleText}
          </span>
        </h1>
        {taskItem}
      </div>
    );
  }
}
