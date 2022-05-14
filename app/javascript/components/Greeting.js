import React from "react"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

const GET_RANDOM_GREETINGS = "GET_RANDOM_GREETINGS"

function getGreetings () {
  console.log("getGreetings() Action!!")
  return {
    type: GET_RANDOM_GREETINGS
  };
};

class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="btn" onClick={() => this.props.getGreetings()}>Get Greetings</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greeting,
})

const mapDispatchToProps = {getGreetings};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);

