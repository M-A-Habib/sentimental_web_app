import React, { Component } from 'react';
import BarChart from "../common/BarChart";

class DailyReport extends React.Component {
    state = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        graphLabel: 'Daily Report',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 205, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(201, 203, 207, 0.9)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
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