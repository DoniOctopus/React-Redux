import {Component} from "react";
import {connect} from "react-redux";
import ActionType from "./state/GlobalActionType";

class Number extends Component{
    render() {
        return (
            <div>
                {this.props.numb}
                <button onClick={this.props.handlePlus}>Plus</button>
                <button onClick={this.props.handleMinus}>Minus</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        numb : state.globalNumber
    }
}

const mapDIspatchToProps = (dispatch) =>{
    return{
        handlePlus : () => dispatch({type : ActionType.PLUS}),
        handleMinus : () => dispatch({type : ActionType.MINUS})
    }
}

export default connect(mapStateToProps,mapDIspatchToProps) (Number);