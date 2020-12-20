import React from "react";
import styled from "styled-components";
import Stopwatch from "react-stopwatch";

const Container = styled.div`
	position: fixed;
	background: #fff;
	height: 90vh;
	width: 90vw;
	border-radius: 15px;
	box-shadow: 0 0 15px 3px #00000020;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ExitButton = styled.button`
	border: none;
	position: absolute;
	border-radius: 100%;
	height: 50px;
	width: 50px;
	box-shadow: 0 0 15px 3px #00000020;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 15px;
	right: 15px;
	background: #fff;
	font-weight: 600;
	cursor: pointer;
`;

const Row = styled.div`
	width: 350px;
	height: 50px;
	border-radius: 15px;
	margin: 2px 0;
	box-shadow: 0 0 15px 3px #00000020;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	font-weight: 600;
	font-size: 1.2em;
`;

const StopWatchContainer = styled.div`
	height: 100px;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
`;

function Workout({ exercisesToDo, exitWorkout }) {
	return (
		<Container>
			<ExitButton onClick={exitWorkout}>x</ExitButton>
			{exercisesToDo.map((e) => (
				<Row>
					<div>{e.title}</div>
					<div>{e.reps}</div>
				</Row>
			))}
			<StopWatchContainer>
				<Stopwatch
					style={{
						position: "absolute",
						fontSize: "22px",
						bottom: 0,
						left: 0
						// height: "200px"
					}}
					seconds={0}
					minutes={0}
					hours={0}
					// custom={styles}
					// limit={"00:30:00"}
					withLoop={true}
					// onCallback={() => console.log("Finish")}
				/>
			</StopWatchContainer>
		</Container>
	);
}

export default Workout;
