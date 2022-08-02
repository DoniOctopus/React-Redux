import {Component} from 'react'
import { connect } from 'react-redux'
import CalculatorOutput from "./CalculatorOutput";
import CalculatorControl from "./CalculatorControl";
import ActionType from "./state/CalculatorAction";

class Calculator extends Component {
    render() {
        return (
            <div>
                <CalculatorOutput value={this.props.ctr} />
                <CalculatorControl onAddition={this.props.onAddition} onSubstraction={this.props.onSubstraction} onMultiply={this.props.onMultiply} onDivision={this.props.onDivision} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ctr: state.result }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddition: (num1, num2) => dispatch({ type: ActionType.ADDITION, num1: num1, num2: num2 }),
        onSubstraction: (num1, num2) => dispatch({ type: ActionType.SUBSTRACTION, num1: num1, num2: num2 }),
        onMultiply: (num1, num2) => dispatch({ type: ActionType.MULTIPY, num1: num1, num2: num2 }),
        onDivision: (num1, num2) => dispatch({ type: ActionType.DIVISION, num1: num1, num2: num2 }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)