import PropTypes from "prop-types";

// learn write prop types
const propTypes = {
    arrayItem: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
        })
    ).isRequired,
    onLogin: PropTypes.func,
};

const defaultProps = {
    onLogin: () => {},
};

const Login = () => {
    return <h1> Login</h1>;
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
