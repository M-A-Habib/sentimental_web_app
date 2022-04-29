import React, { Component } from 'react';
import BarChart from "../common/BarChart";
import retArray from '../common/dateEnumerator';

class DailyReport extends React.Component {
    state = {
        labels: retArray(),
        graphLabel: 'Daily Report',
        data: [-7, 9, 3, 4, 3 ,-1, 4, 0, 3, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7, 0],
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