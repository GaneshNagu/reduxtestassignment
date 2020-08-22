import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { connect } from 'react-redux';


class App extends Component {
  state = {
    UserName: "",
    Age: 0

  }
  onChangeUsername = (event) => {
    // console.log(event.target.value)
    const upusrnam = event.target.value;
    this.setState({ UserName: upusrnam })
  }

  onChangeAge = (event) => {
    // console.log(event.target.value);
    const upAge = event.target.value;
    this.setState({ Age: upAge })
  }

  render() {
    return (

      <div>
        <div className="Person">
          <input type="text" value={this.state.UserName} onChange={(event) => this.onChangeUsername(event)} placeholder="enter username" />
          <input type="number" value={this.state.Age} onChange={(event) => this.onChangeAge(event)} placeholder="Enter Age" />
          <button onClick={() => this.props.onAddPerson(this.state.UserName, this.state.Age)}>Submit</button>
        </div>
        <div>
          {this.props.userDetails.map(person => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              deleteHandler={() => this.props.onDeleteHandler(person.id)} />
          })}

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails
  }
}

const mapStatetoDispacth = dispatch => {
  return {
    onAddPerson: (name, age) => dispatch({ type: "STORE_DETAILS", name: name, age: age }),
    onDeleteHandler: (id) => dispatch({ type: "DELETE_DETAILS", personId: id })

  }
}

export default connect(mapStateToProps, mapStatetoDispacth)(App);
