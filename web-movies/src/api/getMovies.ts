import React from 'react'
import { api } from './api'

const getMovies = () => {
  const data = api.get('/movie/').then(({ data }) => {
    console.log(data)
    const myArray = data.results
    for (const element of myArray) {
      // console.log(element)
    }
  })
  return data;
};
export { getMovies }



