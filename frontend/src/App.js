import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let dataURL = "http://headless-wp.dev/wp-json/wp/v2/movies";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        })
      })
  }

  render(){
    let movies = this.state.movies.map((movie, index) => {
      return <div key={index}>
      <img src={movie.better_featured_image.media_details.sizes.medium_large.source_url} />
      <p><strong>Title:</strong> {movie.title.rendered}</p>
      <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
      <p><strong>Rating:</strong> {movie.acf.rating}</p>
      <div><strong>Description:</strong> {movie.acf.description}</div>
      </div>
    });

    return (
      <div>
        <h2>Star Wars Movies</h2>
        {movies}
      </div>
    )
  }
}

export default App;