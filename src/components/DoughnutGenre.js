import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Box from '@mui/material/Box';
import {countOccurrences} from '../util/util.js';
import Chart from 'chart.js/auto';

const DoughnutGenre = (props) => {
    let movies = props.movies;
    let genres = [];

  const state = {
    labels: ['Drama', 'History', 'Fantasy', 'Adventure', 'Comedy', 'Crime', 'Romance', 'Family', 'Western', 'Horror', 'Thriller', 'Mystery', 'War', 'Action', 'Music', 'Musical', 'Film-Noir', 'Biography', 'Sci-Fi', 'Sport', 'Animation', 'Adult', 'Reality-TV', 'News', 'Documentary'],
    datasets: [
      {
        backgroundColor: [
          '#646dc8',
          '#49a298',
          '#ebb647',
          '#9EEAF7',
          '#05515E',
          '#FA8C63'
        ],
        borderWidth: 0,
        data: []
      }
    ]
  }

  for (let p = 0; p < movies.length; p++) {
    genres.push(movies[p].genre);
  }

  

  for (let k = 0; k < genres.length; k++) {
    if (genres[k].includes(',')) {
			let genre = genres[k].split(',');
      for ( let l = 0; l < genre.length; l++ ) {
        genres.push(genre[l].trim());
      }
    }
  }

  for (let k = 0; k < state.labels.length; k++) {
    state.datasets[0].data.push(countOccurrences(genres, state.labels[k]));
  }

    return (
      <Box sx={{ height: 400, margin: 'auto', display: 'flex', justifyContent: 'center', padding: '25px' }}>
        <Doughnut
          data={state}
          options={{
            plugins:{
              legend:{
                display: false
              },
              title:{
                display:true,
                text:'Genres',
              }
            },
            maintainAspectRatio: false,
          }}
        />
    </Box>
    );
}

export default DoughnutGenre;