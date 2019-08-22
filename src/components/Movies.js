import React, { Component } from "react"
import axios from "axios"
// build a small webpage that showcases some of the most popular movies of 1989.
//
class Movies extends Component {
  state = {
    searchResults: []
    // movieName: this.state.searchResults.map
  }

  makeApiCall = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=60f58f18f96b65a50bd5cc31bafb3aac"
    )
    this.setState({
      searchResults: resp.data.results
      //this setState of searchResults = api_response data results
    })
    console.log(this.state.searchResults)
  }

  componentDidMount() {
    //componentDidMount =means whenever the page loads
    this.makeApiCall()
  }

  // randomMovie = () ={

  // }

  render() {
    //has multi tags and component content
    // console.log(results)
    return (
      <section>
        <h1>Movies to look forward to! => From a Time Traveler</h1>
        <h4>
          Hope you brought your towel, this one's gonna be wet more then likely.
        </h4>
        <section>
          <h2>Coming Soon!</h2>
          <section>
            {this.state.searchResults.map(result => {
              // console.log(result)
              return (
                <ul>
                  <li
                    key={result.id} //I'm doing something incorrect with the keys. Will need to resolve tomorrow.
                    className='li-movie-image'
                  >
                    <h2 className='movie-titles'>{result.title}</h2>
                    <img
                      key={result.id}
                      className='movie-posters'
                      alt='Movies of the 90s'
                      src={`
                      https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                        result["poster_path"]
                      }`}
                    />
                    <p>{result.overview}</p>
                  </li>
                </ul>
              )
            })}
          </section>
        </section>
      </section>
    )
  }
}

export default Movies
