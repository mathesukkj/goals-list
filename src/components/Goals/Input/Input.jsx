import React, { useState } from "react";
import Button from "../../Button/Button";
import "./Input.css";

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!enteredValue.trim().length) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label style={{ color: !isValid ? "red" : "inherit" }}>
                    Course Goal
                </label>
                <input
                    type="text"
                    style={{
                        "border-color": !isValid ? "red" : "",
                        "background-color": !isValid ? "salmon" : "",
                    }}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
