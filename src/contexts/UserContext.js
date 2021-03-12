import React, { Component } from "react"

const { Provider, Consumer } = React.createContext();
// Context.Consumer, Context.Provider

class UserProvider extends Component {
  state = {
    currentUser: 'Jason'
  }

  changeCurrentUser = () => {
    this.setState({currentUser: 'Bob'})
  }

  testInsideComponent = () => {
    console.log('using within func in component')
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {

    return (
      <Provider value={{
        user: this.state.currentUser,
        changeCurrentUser: this.changeCurrentUser,
        testInsideComponent: this.testInsideComponent,
        logOutTheState: this.logOutTheState
        }
      }>{this.props.children}
      </Provider>
    )
  }
}

export { UserProvider, Consumer as UserConsumer} ;