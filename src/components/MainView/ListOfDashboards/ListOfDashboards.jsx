import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import DashboardPreview from './DashboardPreview/DashboardPreview';

export default class ListOfDashBoards extends Component {
  constructor() {
    super();
    this.deleteDashboard = this.deleteDashboard.bind(this);
  }

  deleteDashboard = (data) => {
    const { deleteDashboard } = this.props;
    deleteDashboard(data);
  }

  render() {
    const { dashes } = this.props;
    const updatedDashes = dashes.map(dashboard => (
      <DashboardPreview
        key={dashboard.id}
        id={dashboard.id}
        name={dashboard.dashName}
        description={dashboard.dashDescription}
        deleteDashboard={this.deleteDashboard}
      />
    ));
    const styles = {
      display: 'flex',
      justifyContent: 'center',
    };
    return (
      <Container style={styles}>
        {updatedDashes}
      </Container>
    );
  }
}