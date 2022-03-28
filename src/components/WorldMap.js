import React from 'react';
import { Chart } from "react-google-charts";
import Box from '@mui/material/Box';
import {countOccurrences} from '../util/util.js';

const WorldMap = (props) => {
  let movies = props.movies;

    let nCountries = [];
    let countries = [ 'Germany', 'France', 'United States', 'Japan', 'Soviet Union', 'Austria', 'Norway', 'United Kingdom', 'Hong Kong', 'Isle Of Man', 'India', 'Canada', 'Poland', 'Switzerland', 'Italy', 'Spain', 'Mexico', 'China', 'Australia', 'New Zealand', 'Cuba', 'Sweden', 'Denmark', 'Brazil', 'Finland', 'Ireland', 'South Korea', 'Yugoslavia', 'Greece', 'Philippines', 'Puerto Rico', 'Sri Lanka', 'Egypt', 'Romania', 'Israel', 'Africa', 'Argentina', 'Bermuda', 'Hungary', 'Korea', 'Liechtenstein', 'Lebanon', 'Chile', 'Algeria', 'Senegal', 'Netherlands', 'Iran', 'Belgium', 'Taiwan', 'Bulgaria', 'Monaco', 'Portugal', 'Libya', 'Morocco', 'Saudi Arabia', 'Suriname', 'Iceland', 'Indonesia', 'Botswana', 'Dominican Republic', 'Zealand', 'Thailand', 'Nicaragua', 'Costa Rica', 'Panama', 'Turkey', 'Burkina', 'Colombia', 'Gabon', 'Tunisia', 'Luxembourg', 'Venezuela', 'North Antilles', 'Faso', 'Mauritania', 'Gibraltar', 'Albania', 'Zaire', 'Peru', 'Russia', 'Zimbabwe', 'Namibia', 'Ukraine', 'Federal of Slovenia', 'Jamaica', 'Guinea-Bissau', 'Croatia', 'Czech Republic', 'Estonia', 'Haiti', 'Belarus', 'Ghana', 'Lithuania', 'Palestine', 'Kazakhstan', 'Vietnam', 'Mali', 'Bosnia and Herzegovina', 'Slovakia', 'Georgia', 'Herzegovina', 'Guinea', 'Cape Verde', 'Aruba', 'Svalbard And Jan', 'Mayen', 'Kuwait', 'Niger', 'Macedonia', 'Nigeria', 'Greenland', 'Latvia', 'Kyrgyzstan', 'The Democratic Congo', 'Uzbekistan', 'Malta', 'Slovenia', 'Faroe Islands', 'Nepal', 'Mozambique', 'Bangladesh', 'United Arab Emirates', 'Singapore', 'Trinidad', 'Uruguay', 'Jordan', 'Chad', 'Serbia', 'Pakistan', 'Bolivia', 'Bahrain', 'Armenia', 'Bahamas', 'Cyprus', 'Kenya', 'Fiji', 'Ecuador', 'Montenegro', 'Cameroon', 'Cambodia', 'Afghanistan', 'Iraq', 'Cayman', 'Malaysia', 'Tajikistan', 'Paraguay', 'Bhutan', 'Emirates', 'British', 'Virgin', 'Tobago', 'Arabia', 'Qatar', 'Azerbaijan', 'Angola', 'Uganda', 'Liberia', 'Mongolia', 'Mauritius', 'Caledonia', 'Ethiopia', 'Rwanda', 'Guatemala', 'Papua', 'Azerbaijan', 'Moldova', 'Samoa', 'Lesotho', 'Swaziland', 'Nepal', 'Equatorial Antilles', 'Yemen', 'Tanzania', 'Andorra', 'Brunei', 'Burma', 'El Salvador', 'Kosovo', 'Vanuatu', 'Honduras', 'Laos', 'Somalia', 'Sudan', 'Belize', 'Cook', 'Myanmar', 'Congo', 'Martinique', 'Maldives', 'Djibouti', 'Zambia', 'Macao', 'Guadeloupe', 'Malawi', 'Holy See (Vatican City State)', 'Oman', 'Syria'];
    const state = {
      data: [
        ["Country", "Films"]
      ]
    }

    for (let p = 0; p < movies.length; p++) {
      nCountries.push(movies[p].country);
    }

    for (let k = 0; k < nCountries.length; k++) {
      if (nCountries[k].includes(',')) {
        let country = nCountries[k].split(',');
        for ( let l = 0; l < country.length; l++ ) {
          nCountries.push(country[l].trim());
        }
      }
    }

    for (let i = 1; i < countries.length+1; i++) {
      state.data[i] = [];
      state.data[i][0] = countries[i-1];
      state.data[i][1] = countOccurrences(nCountries, countries[i-1]);
    }

    return (
    <Box sx={{ height: 400, display: 'flex', justifyContent: 'center', padding: '25px' }}>
      <Chart
      options = {{
        backgroundColor: '#2b3141',
        colorAxis: {colors: ['#FFEAF7', '#C900BF', '#4E86F7', '#7E00F7']}
        }}
      width={"500px"}
      height={"400px"}
      chartType="GeoChart"
      data={state.data}
      mapsApiKey="YOUR_KEY_HERE"
      rootProps={{ "data-testid": "1" }}
      />
    </Box>
    );
}

export default WorldMap;