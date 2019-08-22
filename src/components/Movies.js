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
    //means whenever the page loads
    this.makeApiCall()
  }

  // randomMovie = () ={

  // }

  render() {
    //has multi tags and component content
    // console.log(this.state.searchResults)
    return (
      <section>
        <h1>Party Like it's 1989!</h1>
        <section>
          <h2>Movies!!!</h2>
          <section>
            {this.state.searchResults.map(result => {
              // console.log(result.title)
              return (
                <ul>
                  <li
                    key='li-movie-image'
                    //find out what the key needs to be
                    className='li-movie-image'
                  >
                    <img
                      className=''
                      alt='Movies of the 90s'
                      src={`
                      https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                        result["poster_path"]
                      }`}
                    />
                    {result.name}
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
