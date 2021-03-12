import React, { Component } from "react"
import axios from "axios"
import UserContext from "../../UserContext"

class TestTwo extends Component {
  state = {
    bookList: [],
    currentUser: 'James',
    version: null
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {

    try {
      // fetch data from a url endpoint
      const response = await axios.get("https://randomuser.me/api/?results=1");
      console.log(response);
      console.log(this.state)
      this.setState({version: response.data.info.version})
    } catch (error) {
      console.log(error); // catches both errors
    }
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
    setTimeout(() => {
      this.setState({currentUser: "bob"})
    }, 2000);
  }

  render() {
    const { version } = this.state
    // const queryResults = searchQuery === "" ? bookList : searchResults
    return (
      <UserContext.Consumer>
        {(user) => 
        <div>
          {user}here is test two {version} {user}
        </div>
        }
      </UserContext.Consumer>
    )
  }
}
export default TestTwo