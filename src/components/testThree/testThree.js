import React, { Component } from "react"
import axios from "axios"

class TestTwo extends Component {
  state = {
    bookList: [],
    version: null
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {

    console.log('testThree')
    // axios.get("https://randomuser.me/api/?results=1")
    //   .then(result => {
    //     console.log(result)
    //     // const bookData = result.data
    //     // this.setState({ bookList: bookData.books })
    //     // this.rebuildIndex()
    //   })
    //   .catch(err => {
    //     // this.setState({ isError: true })
    //     console.log("====================================")
    //     console.log(`Something bad happened while fetching the data\n${err}`)
    //     console.log("====================================")
    //   })
  }

  render() {
    const { version } = this.state
    // const queryResults = searchQuery === "" ? bookList : searchResults
    return (
      <div>
        here is test three {version}
      </div>
    )
  }
}
export default TestTwo