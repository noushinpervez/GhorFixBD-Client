import PropTypes from "prop-types";

const FormInput = ({ label, value, onChange, name, type = "text", required = true, placeholder = "" }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500">{ label }</label>
            <input
                type={ type }
                value={ value }
                onChange={ onChange }
                name={ name }
                required={ required }
                placeholder={ placeholder }
                className="mt-1 block w-full border border-gray-500 rounded shadow focus:border-0 focus:outline-0 focus:ring focus:ring-secondary-700 p-2 bg-secondary-50 text-sm"
            />
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string
};

export default FormInput;