import PropTypes from 'prop-types';

const Test = ({ title }) => {
  return <div>Test component {title}</div>;
};

Test.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Test;
