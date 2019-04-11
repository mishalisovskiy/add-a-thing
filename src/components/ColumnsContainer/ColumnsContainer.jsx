import React, { Component } from 'react';
import '../../App.scss';
import TasksColumn from '../TasksColumn/TasksColumn';
import Json from '../../data';

export default class ColumnsContainer extends Component {
  constructor() {
    super();
    this.state = {
      taskList: Json[0].tasks,
    };
    this.updateTaskList = this.updateTaskList.bind(this);
  }

  updateTaskList = (updatedTaskList) => {
    this.setState({
      taskList: [...updatedTaskList],
    });
  };

  render() {
    const ColumnsContainerStyle = {
      minHeight: '100vh',
      backgroundColor: 'rgb(247, 247, 247)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    };

    const taskColumnStyle = {
      width: '400px',
      minHeight: '450px',
      color: 'rgb(194, 105, 95)',
      background: '#FFFFFF',
    };

    const { taskList } = this.state;

    return (
      <div className="ColumnsContainer" style={ColumnsContainerStyle}>
        <div className="taskColumnContainer" style={taskColumnStyle}>
          <TasksColumn
            columnType="0" // columnType="to-do"
            taskList={taskList}
            updateTaskList={this.updateTaskList}
          />
        </div>
        <div className="taskColumnContainer" style={taskColumnStyle}>
          <TasksColumn
            columnType="1" // columnType="in-progress"
            taskList={taskList}
            updateTaskList={this.updateTaskList}
          />
        </div>
        <div className="taskColumnContainer" style={taskColumnStyle}>
          <TasksColumn
            columnType="2" // columnType="done"
            taskList={taskList}
            updateTaskList={this.updateTaskList}
          />
        </div>
      </div>
    );
  }
}
