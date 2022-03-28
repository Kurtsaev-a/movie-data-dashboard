import React from 'react';
import { Line } from "react-chartjs-2";
import Box from '@mui/material/Box';
import {countOccurrences} from '../util/util.js';

const LineChart = (props) => {
    let movies = props.movies;
    let years = [];

    const state = {
      labels: [],
      datasets: [
        {
          label: 'Number of Films',
          borderColor: '#49a298',
          borderWidth: 2,
          lineTension: 0.5,
          fill: true,
          data: []
        }
      ]
    }

    for (let i = 0; i < movies.length; i++) {
      years.push(movies[i].year);
      if (movies[i-1]){
        if (movies[i].year !== movies[i-1].year) {
          state.labels.push(movies[i].year);
        }
      }
    }

    for (let k = 0; k < state.labels.length; k++){
      state.datasets[0].data.push(countOccurrences(years, state.labels[k]));
    }

    return (
      <Box sx={{ height: 400, margin: 'auto', display: 'flex', justifyContent: 'center', padding: '25px' }}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio: false
          }}
        />
      </Box>
    );
}

export default LineChart;