import { createStore } from 'redux';
import CalculatorReducer from "../component/calculator/state/CalculatorReducer";
import GlobalReducer from "../component/number/state/GlobalReducer";

const Store = createStore(
    CalculatorReducer,
    // GlobalReducer,
);

export {Store}