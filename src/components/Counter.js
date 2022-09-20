import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/";

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    const increaseCounter = () => {
        dispatch(counterActions.increment());
    };
    const increaseCounterBy10 = () => {
        dispatch(counterActions.increase(10));
    };
    const decreaseCounter = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <button onClick={increaseCounter}>increase By one </button>
            <button onClick={increaseCounterBy10}>increase By 10 </button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <button onClick={decreaseCounter}>decrease By one</button>
        </main>
    );
};

export default Counter;
