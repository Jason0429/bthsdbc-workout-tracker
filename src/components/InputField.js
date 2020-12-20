import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 100px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	box-shadow: 0 0 15px 3px #00000020;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	.exercise {
		flex: 0.5;
		height: 80%;
		border: none;
		outline: none;
		border-radius: 15px;
		box-shadow: 0 0 15px 3px #00000020;
		font-size: 1.2em;
		padding: 0 20px;
	}

	.reps {
		flex: 0.2;
		height: 80%;
		border: none;
		outline: none;
		border-radius: 15px;
		box-shadow: 0 0 15px 3px #00000020;
		font-size: 1.2em;
		padding: 0 20px;
	}

	.submit {
		flex: 0.2;
		height: 80%;
		border: none;
		outline: none;
		border-radius: 15px;
		box-shadow: 0 0 15px 3px #00000020;
		background-color: #fff;
		font-size: 1.2em;
		padding: 0 10px;
		cursor: pointer;
	}
`;

function InputField({
	selectedExercise,
	handleTitle,
	handleReps,
	startWorkout
}) {
	// const [title, setTitle] = useState(
	// 	selectedExercise.title === "Custom" ? "" : selectedExercise.title
	// );
	// const [reps, setReps] = useState(0);

	// function handleTitle(e) {
	// 	setTitle(e.target.value);
	// }

	// function handleReps(e) {
	// 	setReps(e.target.value);
	// }

	return (
		<Container>
			<input
				className="exercise"
				type="text"
				placeholder="Name of Exercise"
				value={
					selectedExercise.title === "Custom"
						? ""
						: selectedExercise.title
				}
				//=== "Custom" ? title : selectedExercise.title
				onChange={
					handleTitle
					// selectedExercise.title
					// === "Custom" ? handleTitle : null
				}
				// readOnly={selectedExercise.title !== "Custom"}
			/>
			<input
				className="reps"
				type="number"
				placeholder="Reps"
				value={selectedExercise.reps}
				onChange={handleReps}
			/>
			<button className="submit" onClick={startWorkout}>
				Start
			</button>
		</Container>
	);
}

export default InputField;
