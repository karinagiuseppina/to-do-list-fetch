import React from "react";
import PropTypes from "prop-types";

const itemsLeft = ({ number }) => {
	return (
		<li className="list-group-item gray-color items">
			<span>{number} item(s) left.</span>
		</li>
	);
};

itemsLeft.propTypes = {
	number: PropTypes.number
};

export default itemsLeft;
