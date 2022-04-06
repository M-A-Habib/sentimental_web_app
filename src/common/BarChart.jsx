import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const BarChart = () => {
    return <div>
        <Bar
        const data = {{
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
            datasets: [{
              label: 'Monthly Report',
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
              borderWidth: 1
            }]
          }}
        height = {400}
        width = {600}>
        options = {{
            maintainAspectRatio: false,
        }}
        </Bar>
    </div>;
}
 
export default BarChart;