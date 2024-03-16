import PropTypes from 'prop-types';
import AddedPreparing from './AddedPreparing';

const AddCurrently = ({preparing}) => {
    const totalTime = preparing.reduce((total, product) => parseInt(total) + parseInt(product.preparing_time), 0);
    const totalCalories = preparing.reduce((total, product) => parseInt(total) + parseInt(product.calories), 0);

    
    return (
        <div>
            <div className='grid grid-cols-12 mb-5 fira font-medium text-base text-[#878787]'>
                <h2 className='col-span-4 text-center'>Name</h2>
                <h2 className='col-span-4 text-center'>Time</h2>
                <h2 className='col-span-4 text-center'>Calories</h2>
            </div>
            {
                preparing.map((product,idx)=> <AddedPreparing product={product} key={idx} idx={idx}></AddedPreparing>)
            }
            <div className='grid grid-cols-12 mb-5 mt-8 fira font-medium text-base text-[#878787]'>
                <h2 className='col-span-3'></h2>
                <h2 className='col-span-4 text-center '>Total Time = {totalTime}</h2>
                <h2 className='col-span-5 text-center '>Total Calories = {totalCalories}</h2>
            </div>
        </div>
    );
};

AddCurrently.propTypes = {
    preparing:PropTypes.array.isRequired,
};

export default AddCurrently;