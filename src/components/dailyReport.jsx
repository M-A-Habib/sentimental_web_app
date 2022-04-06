import React, { Component } from 'react';
import BarChart from "../common/BarChart";
import retArray from '../common/dateEnumerator';

class DailyReport extends React.Component {
    state = {
        labels: retArray(),
        graphLabel: 'Daily Report',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.9)'
          ],
          borderColor: [
            'rgb(255, 99, 132)'
          ],
    }

    render() { 
        return <BarChart labels = {this.state.labels} 
        graphLabel = {this.state.graphLabel}
        data = {this.state.data}
        backgroundColor = {this.state.backgroundColor}
        borderColor = {this.state.borderColor}></BarChart>;
    }
}
 
export default DailyReport;