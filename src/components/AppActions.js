import React from 'react';
import PropTypes from 'prop-types';

const AppActions = ({ children }) => {
    return (
            <div className="app-actions">
                <div>{children}</div>
            </div>
    );
};

AppActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppActions;