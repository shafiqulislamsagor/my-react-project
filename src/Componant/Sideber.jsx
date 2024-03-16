import PropTypes from 'prop-types';
import SingleLine from './SingleLine';

const Sideber = ({ recipies,preparingButton}) => {
    
    return (
        <>
            <div className='grid grid-cols-12 mb-5 fira font-medium text-base text-[#878787]'>
                <h2 className='col-span-1'></h2>
                <h2 className='col-span-3 lg:col-span-4'>Name</h2>
                <h2 className='col-span-2'>Time</h2>
                <h2 className='col-span-2'>Calories</h2>
                <h2 className='col-span-3'></h2>
            </div>
            {
                recipies.map((product,idx)=> <SingleLine product={product} preparingButton={preparingButton} idx={idx} key={idx}></SingleLine>)
            }
        </>
    );
};

Sideber.propTypes = {
    recipies:PropTypes.array.isRequired,
    preparingButton:PropTypes.func.isRequired,
};

export default Sideber;