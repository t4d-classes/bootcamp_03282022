import PropTypes from 'prop-types';

export const ToolHeader = props => {

    return (
        <header>
            <h3>{props.headerText}</h3>
        </header>
    );

};

ToolHeader.defaultProps = {
    headerText: 'The Tool',
};

ToolHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
};

