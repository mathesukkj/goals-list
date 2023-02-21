import React, { useState } from "react";
import GoalList from "./components/Goals/GoalList/GoalList";
import Input from "./components/Goals/Input/Input";
import "./App.css";

function App() {
    const [courseGoals, setCourseGoals] = useState([
        { text: "Do all exercises!", id: "g1" },
        { text: "Finish the course!", id: "g2" },
    ]);

    function addGoalHandler(enteredText) {
        setCourseGoals((prevGoals) => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({
                text: enteredText,
                id: Math.random().toString(),
            });
            return updatedGoals;
        });
    }

    function deleteItemHandler(goalId) {
        setCourseGoals((prevGoals) => {
            const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
            return updatedGoals;
        });
    }

    let content = (
        <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <GoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
        );
    }

    return (
        <div>
            <section id="goal-form">
                <Input onAddGoal={addGoalHandler} />
            </section>
            <section id="goals">{content}</section>
        </div>
    );
}

export default App;
