import PropTypes from 'prop-types';

const SingleLine = ({product,idx,preparingButton}) => {
    const {recipe_name,preparing_time,calories }= product;
    return (
        <div className='grid grid-cols-12 lg:gap-3 gap-7 fira font-medium text-base text-[#878787] py-5 bg-[#28282808]'>
            <h2 className='col-span-1 ml-2'>{idx+1}</h2>
            <h2 className='col-span-3 lg:col-span-4'>{recipe_name}</h2>
            <h2 className='col-span-2'>{preparing_time}</h2>
            <h2 className='col-span-2'>{calories}</h2>
            <div className='col-span-3'>
            
                <button onClick={()=> preparingButton(product)} className='btn text-[#150B2B] bg-[#0BE58A] hover:bg-[#00c070] rounded-3xl border-none h-auto min-h-max px-3 py-4 '>Preparing</button>
            </div>
        </div>
    );
};

SingleLine.propTypes = {
    product: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    preparingButton: PropTypes.func.isRequired,
};

export default SingleLine;