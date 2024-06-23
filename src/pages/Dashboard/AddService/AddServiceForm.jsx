import PropTypes from "prop-types";
import FormInput from "../../../components/FormInput";

const AddServiceForm = ({
    onSubmit,
    imgURL,
    serviceName,
    price,
    serviceArea,
    description,
    onChange,
}) => {
    return (
        <form className="md:grid md:grid-cols-2 gap-x-6" onSubmit={ onSubmit }>
            <FormInput
                label="Image URL of the Service"
                value={ imgURL }
                onChange={ onChange }
                name="imgURL"
            />
            <FormInput
                label="Service Name"
                value={ serviceName }
                onChange={ onChange }
                name="serviceName"
            />
            <FormInput
                label="Price"
                value={ price }
                onChange={ onChange }
                name="price"
                type="number"
            />
            <FormInput
                label="Service Area"
                value={ serviceArea }
                onChange={ onChange }
                name="serviceArea"
            />
            <div className="col-span-2">
                <FormInput
                    label="Description"
                    value={ description }
                    onChange={ onChange }
                    name="description"
                    type="textarea"
                />
            </div>
            <button type="submit" className="tracking-wide font-semibold bg-primary-950 text-text-50 px-8 py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none w-fit">
                Add Service
            </button>
        </form>
    );
};

AddServiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    imgURL: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    serviceArea: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AddServiceForm;