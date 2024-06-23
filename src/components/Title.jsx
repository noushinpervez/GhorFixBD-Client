import PropTypes from "prop-types";

const Title = ({ title }) => {
    return (
        <h2 className="text-center mb-12 px-6 text-3xl font-bold underline underline-offset-3 decoration-8 decoration-secondary-700">
            { title }
        </h2>
    );
};

Title.propTypes = {
    title: PropTypes.string,
};

export default Title;