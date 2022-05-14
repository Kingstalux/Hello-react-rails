import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST"

function getGreetings () {
  console.log("getGreetings() Action!!")
  return {
    type: GET_GREETINGS_REQUEST
  };
};

class Greeting extends React.Component {
  render () {
    const {greetings} = this.props;
    console.log(greetings);
    const greetingList = greetings.map((greeting) => {
      return <li>{greeting.name}</li>
    })

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="btn" onClick={() => this.props.getGreetings()}>Get Greetings</button>
        <br />
        <ul>{greetingList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
})

const mapDispatchToProps = {getGreetings};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);

