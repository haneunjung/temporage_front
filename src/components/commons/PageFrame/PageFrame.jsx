import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => (
		<main>{children}</main>
);

PageWrapper.propTypes = {
	children: PropTypes.node,
};

PageWrapper.defaultProps = {
	children: null,
};

export default PageWrapper;