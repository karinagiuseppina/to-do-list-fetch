import React from "react";
import PropTypes from "prop-types";

//create your first component
const TitleHeader = props => {
	return <h1 className="text-center mt-5">{props.title}</h1>;
};

TitleHeader.propTypes = {
	title: PropTypes.string
};

export default TitleHeader;
