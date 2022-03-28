import React, { useEffect, useState }  from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from './components/LineChart';
import SliderYear from './components/SliderYear';
import DoughnutGenre from './components/DoughnutGenre';
import WorldMap from './components/WorldMap';
import Loading from './components/Loading';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import movies from './data/movies.csv';
import { csv } from 'd3';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#2b3141'
  },
  box : {
    backgroundColor: '#2b3141'
  }
});

const App = () => {

  const [data, setData] = useState();
  const [years, setYears] = useState([1894, 2020]);
  
  useEffect(() => {
    csv(movies).then(data => {
      setData(data);
    });
  },[]);

  const classes = useStyles();
  let lineChart;
  let doughnutGenre;
  let worldMap;
  let sliderYear;

  if(data){

    data.sort((a, b) => (a.year > b.year) ? 1 : -1);
    let movies = [];

    for (let d = 0; d < data.length; d++){
      if (data[d].year >= years[0] && data[d].year <= years[1]){
        movies.push(data[d]);
      }
    }
    
    lineChart = <LineChart movies={movies} years={years}/>
    doughnutGenre = <DoughnutGenre movies={movies} years={years}/>
    worldMap = <WorldMap movies={movies} years={years}/>
    sliderYear = <SliderYear changeYears={years => setYears(years)}/>
  } else {
    lineChart = <Loading/>
    doughnutGenre = <Loading/>
    worldMap = <Loading/>
    sliderYear = <Loading/>
  }

  return(
    <div className="container">
    <Grid container spacing={5}>
      <Grid item sm={2} xs={12}>
        <Card className={classes.card}>
          {sliderYear}
        </Card>
      </Grid>
      <Grid item sm={9} xs={12}>
        <Card className={classes.card}>
          {lineChart}
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card className={classes.card}>
          {doughnutGenre}
        </Card>
      </Grid>  
      <Grid item sm={7} xs={12}>
        <Card className={classes.card}>
          {worldMap}
        </Card>
      </Grid>
    </Grid>
    </div>
  )
  



}

export default App;