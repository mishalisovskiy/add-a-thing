/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import CreateDashboard from './components/MainView/CreateDashboard/CreateDashboard';
import ListOfDashboards from './components/MainView/ListOfDashboards/ListOfDashboards';
import firebase from './fire';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashboards: [],
    };

    // this.addDashboard = this.addDashboard.bind(this);
    this.deleteDashboard = this.deleteDashboard.bind(this);
  }

  componentDidMount() {
    const dashboardsRef = firebase.database().ref('dashboards');
    dashboardsRef.on('value', (snapshot) => {
      const dashboardsSnap = snapshot.val();
      const newState = [];
      for (const dashboard in dashboardsSnap) {
        newState.push({
          id: dashboard,
          name: dashboardsSnap[dashboard].name,
          description: dashboardsSnap[dashboard].description,
          key: dashboard,
        });
      }
      this.setState({
        dashboards: newState,
      });
    });
  }

  addDashboard = (data) => {
    this.setState(prevState => ({
      dashboards: [...prevState.dashboards, data],
    }));
  }

  deleteDashboard = (data) => {
    this.setState(prevState => ({
      dashboards: prevState.dashboards.filter(dash => dash.innerId !== data.innerId),
    }));
  }

  render() {
    const { dashboards } = this.state;
    return (
      <Container className="App">
        <CreateDashboard
          handleAddDashboard={this.addDashboard}
        />
        <ListOfDashboards
          dashboardArray={dashboards}
          deleteDashboard={this.deleteDashboard}
        />
      </Container>
    );
  }
}
