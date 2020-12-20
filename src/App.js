import React, { useState, useEffect } from "react";
import "./App.css";
import { data } from "./data/data";
import ExerciseItem from "./components/ExerciseItem";
import { Grid } from "./components/ExerciseItem";
import Banner from "./components/Banner";
import InputField from "./components/InputField";
import Workout from "./components/Workout";

function App() {
	var firstSelectionMade = false;
	const [exercises, setExercises] = useState(data.exercises);
	const [selectedExercise, setSelectedExercise] = useState({
		title: "",
		reps: 0
	});
	const [exercisesToDo, setExercisesToDo] = useState([]);
	const [isWorkout, setIsWorkout] = useState(false);

	function handleSelection(newTitle) {
		firstSelectionMade = true;

		setSelectedExercise((prevState) => ({
			...prevState,
			title: newTitle
		}));

		setExercises((prevState) =>
			prevState.map((e) =>
				e.title === newTitle
					? { ...e, isSelected: true }
					: { ...e, isSelected: false }
			)
		);
	}

	// Custom input title change
	function handleTitle(e) {
		setSelectedExercise((prevState) => ({
			...prevState,
			title: e.target.value
		}));
	}

	// Input rep change
	function handleReps(e) {
		setSelectedExercise((prevState) => ({
			...prevState,
			reps: e.target.value
		}));
	}

	function startWorkout() {
		setExercisesToDo((prevState) => [
			...prevState,
			{ title: selectedExercise.title, reps: selectedExercise.reps }
		]);

		// Toggle workout screen
		setIsWorkout((prevState) => !prevState);
	}

	function exitWorkout() {
		setIsWorkout((prevState) => !prevState);
	}

	// useEffect(() => {

	// }, [exercisesToDo]);

	return (
		<div className="App">
			<Banner />
			<Grid>
				{exercises.map((e) => (
					<ExerciseItem
						img={e.img}
						title={e.title}
						isSelected={e.isSelected}
						handleSelection={handleSelection}
					/>
				))}
			</Grid>
			{selectedExercise.title === "" && firstSelectionMade ? null : (
				<InputField
					selectedExercise={selectedExercise}
					handleTitle={handleTitle}
					handleReps={handleReps}
					startWorkout={startWorkout}
				/>
			)}
			{isWorkout && (
				<Workout
					exercisesToDo={exercisesToDo}
					exitWorkout={exitWorkout}
				/>
			)}
		</div>
	);
}

export default App;
