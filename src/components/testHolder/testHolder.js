import React, { Component } from "react"
import Test from "../test/test"
import TestTwo from "../testTwo/testTwo"
import TestThree from "../testThree/testThree"
import axios from "axios"
import UserContext from "../../UserContext"

class TestHolder extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {({user}) =>
          <div>
            <Test></Test>
            <TestTwo></TestTwo>
            <TestThree></TestThree>
            here is test holder where our state persists as name {user}
          </div>
        }
      </UserContext.Consumer>
    )
  }
}
export default TestHolder