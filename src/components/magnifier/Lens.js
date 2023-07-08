import React, { Component } from "react";
import objectAssign from "object-assign";
import clamp from "clamp";
import dataUri from "./assets/lens";

export const PositiveSpaceLens = (props) => {
	const dimensions = () => {
		const {
			cursorOffset: { x: cursorOffsetX, y: cursorOffsetY },
		} = props;

		return {
			width: cursorOffsetX * 2,
			height: cursorOffsetY * 2,
		};
	};

	const positionOffset = () => {
		const {
			cursorOffset: { x: cursorOffsetX, y: cursorOffsetY },
			position: { x: positionX, y: positionY },
			smallImage: { height: imageHeight, width: imageWidth },
		} = props;

		const { width, height } = dimensions;

		const top = positionY - cursorOffsetY;
		const left = positionX - cursorOffsetX;
		const maxTop = imageHeight - height;
		const maxLeft = imageWidth - width;
		const minOffset = 0;

		return {
			top: clamp(top, minOffset, maxTop),
			left: clamp(left, minOffset, maxLeft),
		};
	};

	const defaultStyle = () => {
		const { fadeDurationInMs } = props;

		return {
			transition: `opacity ${fadeDurationInMs}ms ease-in`,
			backgroundImage: `url(${dataUri})`,
		};
	};

	const userSpecifiedStyle = () => {
		const { style } = props;

		return style;
	};

	const isVisible = () => {
		const { isActive, isPositionOutside } = props;

		return isActive && !isPositionOutside;
	};

	const priorityStyle = () => {
		const { width, height } = dimensions;

		const { top, left } = positionOffset;

		return {
			position: "absolute",
			top: `${top}px`,
			left: `${left}px`,
			width: `${width}px`,
			height: `${height}px`,
			opacity: isVisible ? 1 : 0,
		};
	};

	const compositStyle = () => {
		return objectAssign(defaultStyle, userSpecifiedStyle, priorityStyle);
	};

	return <div style={compositStyle} />;
};
export default PositiveSpaceLens;
