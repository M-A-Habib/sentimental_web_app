import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const BarChart = (props) => {
    return <div>
      <Bar
        const data = {{
            labels: props.labels,
            datasets: [{
              label: props.graphLabel,
              data: props.data,
              backgroundColor: props.backgroundColor,
              borderColor: props.borderColor,
              borderWidth: 1
            }]
          }}
        height = {30}
        width = {50}>
        options = {{
          responsive: true,
          maintainAspectRatio: false
        }};
      </Bar>
    </div>;
}
 
export default BarChart;