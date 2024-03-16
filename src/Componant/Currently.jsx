import PropTypes from 'prop-types';
import Sideber from './Sideber';
import AddCurrently from './AddCurrently';

const Currently = ({ recipies,preparingButton,preparing}) => {
    
    // console.log(recipies);
    return (
        <div className="lg:w-[35%] px-3 lg:px-0 h-max border rounded-2xl border-[#28282833]">
            <div className='py-8'>
                <h2 className='lexend text-2xl font-semibold text-center'>Want to Cook: {recipies.length
                }</h2>
                <div className='border-b w-3/4 mx-auto my-5'></div>
                
                <Sideber recipies={recipies} preparingButton={preparingButton}></Sideber>
            </div>
            <div className='py-8'>
                <h2 className='lexend text-2xl font-semibold text-center'>Currently cooking: {preparing.length}</h2>
                <div className='border-b w-3/4 mx-auto my-5'></div>
                <div>
                    <AddCurrently preparing={preparing}></AddCurrently>
                </div>
            </div>
        </div>
    );
};

Currently.propTypes = {
    recipies: PropTypes.array.isRequired,
    preparingButton: PropTypes.func.isRequired,
    preparing: PropTypes.array.isRequired,
};

export default Currently;