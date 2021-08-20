import React from "react";
import PropTypes from "prop-types";

//create your first component
const TitleHeader = props => {
	return (
		<div className="row">
			<div className="col">
				<h1 className="text-center mt-5 pink-color">{props.title}</h1>
			</div>
		</div>
	);
};

TitleHeader.propTypes = {
	title: PropTypes.string
};

export default TitleHeader;
