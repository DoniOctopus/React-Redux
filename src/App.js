import './App.css';
import {Component} from "react";
import ActionType from "./component/number/state/GlobalActionType";
import {connect} from "react-redux";
import Number from "./component/number/Number";
import NumberTwo from "./component/number/NumberTwo";
import Calculator from "./component/calculator/Calculator";

class App extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                {/*<h1 id="hello">Hello</h1>*/}
                {/*<h1>{this.props.numb}</h1>*/}
                {/*<button onClick={this.props.handlePlus}>+</button>*/}
                {/*<button onClick={this.props.handleMinus}>-</button>*/}
                {/*<Number/>*/}
                {/*<NumberTwo/>*/}
                <Calculator/>
            </div>
        );
    }
}

// //cara mengirim status menggunakan mapStaeToProps
// const mapStateToProps = (state) => {
//     return{
//         numb : state.globalNumber
//     }
// }
//
// //cara mengirim action menggunakan mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//     return{
//         handlePlus : () => dispatch({type : ActionType.PLUS}),
//         handleMinus : () => dispatch({type : ActionType.MINUS})
//     }
// }
//
// //connect disini bertujuan untuk menggikat redux dan reactnya nya
// export default connect(mapStateToProps,mapDispatchToProps) (App);

export default App;