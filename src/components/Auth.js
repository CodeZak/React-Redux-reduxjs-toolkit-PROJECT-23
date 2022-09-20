import classes from "./Auth.module.css";
import { authActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Auth = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const [enteredInfo, setEnteredInfo] = useState({
        entredEmail: "",
        enteredPass: "",
    });

    const formHandler = (e) => {
        e.preventDefault();
        if (
            enteredInfo.entredEmail.includes("@") &&
            enteredInfo.enteredPass !== ""
        ) {
            dispatch(authActions.login());
            setEnteredInfo({entredEmail:"",enteredPass:""});
        }
    };

    const inputHandler = (e) => {
        setEnteredInfo((prev) => {
            if (e.target.type === "email") {
                return { ...prev, entredEmail: e.target.value };
            }
            if (e.target.type === "password") {
                return { ...prev, enteredPass: e.target.value };
            }
        });
    };

    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={formHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input
                            value={enteredInfo.entredEmail}
                            type="email"
                            id="email"
                            onChange={inputHandler}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input
                            value={enteredInfo.enteredPass}
                            type="password"
                            id="password"
                            onChange={inputHandler}
                        />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
