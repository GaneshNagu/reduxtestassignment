import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../Store/actionTypes';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl label="Increment" clicked={this.props.onClickIncrement} />
                    <CounterControl label="Decrement" clicked={this.props.onClickDecrement} />
                    <CounterControl label="Add 5" clicked={this.props.onClickAddition} />
                    <CounterControl label="Subtract 5" clicked={this.props.onClickSubtraction} />
                </div>
                <button onClick={()=>this.props.onstoreresult(this.props.ctr)}>STORE</button>
                <hr />
                <ul>
                     {this.props.result.map(strresul => {
                        return <li key={strresul.id} onClick={() => this.props.onDeleteHandler(strresul.id)}>{strresul.val}</li>
                    })}
                </ul>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        result: state.res.result
    }
}

const mapStatetoDispacth = dispatch => {
    return {
        onClickIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
        onClickDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
        onClickSubtraction: () => dispatch({ type: actionTypes.SUBTRACTION, value: 5 }),
        onClickAddition: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onstoreresult: (result) => dispatch({ type: actionTypes.STORE_RESULT,result:result }),
        onDeleteHandler: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultEid: id })
    }
}

export default connect(mapStateToProps, mapStatetoDispacth)(Counter);