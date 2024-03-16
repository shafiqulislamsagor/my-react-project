import PropTypes from 'prop-types';

const AddedPreparing = ({product,idx}) => {
    const {recipe_name,preparing_time,calories }= product;
    return (
        <div>
            <div className='grid grid-cols-12  fira font-medium text-base text-[#878787] py-5 bg-[#28282808]'>
                <h2 className='col-span-4 text-center flex gap-2 ml-3 '><span>{idx+1}</span>{recipe_name}</h2>
                <h2 className='col-span-4 text-center'>{preparing_time}</h2>
                <h2 className='col-span-4 text-center'>{calories}</h2>
            </div>
        </div>
    );
};

AddedPreparing.propTypes = {
    product: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
};

export default AddedPreparing;