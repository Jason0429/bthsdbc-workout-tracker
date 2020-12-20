import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
	/* height: 100vh; */
	max-height: calc(100vh - 100px);
	width: 100%;
	top: 100px;
	position: fixed;
	display: grid;
	/* padding: 10px; */
	/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
	/* gap: 5px; */
	grid-template-columns: auto auto auto auto;
	justify-items: center;
	align-content: center;
`;

const Item = styled.div`
	border-radius: 15px;
	width: 250px;
	height: 250px;
	box-shadow: 0 0 15px 3px #00000020;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px;
	cursor: pointer;
	margin: 10px;
	transition: 0.1s ease-in-out;

	&:hover,
	&.selected {
		box-shadow: 0 0 15px 5px #78c5ef;
	}

	img {
		height: 125px;
		width: 125px;
		padding: 10px;
		object-fit: contain;
		border: 2px solid white;
		border-radius: 100%;
		box-shadow: 0 0 15px 3px #00000020;
	}
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 1.2em;
`;

function ExerciseItem({ img, title, isSelected, handleSelection }) {
	return (
		<Item
			className={isSelected ? "selected" : ""}
			onClick={() => handleSelection(title)}
		>
			<img src={img} />
			<Title>{title}</Title>
		</Item>
	);
}

export default ExerciseItem;
