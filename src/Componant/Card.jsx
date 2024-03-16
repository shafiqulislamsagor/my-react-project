import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";

const Card = ({ product,cookButton}) => {
    
    // console.log(cookButton)
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = product;
    // console.log(product);
    return (
        <div className='p-4 border border-[#28282833] rounded-2xl'>
            <div className='mb-6'>
                <img className='rounded-2xl max-w-full' src={recipe_image} alt="" />
            </div>
            <h2 className='lexend mb-4 text-xl font-semibold text-[#282828]'>{recipe_name}</h2>
            <p className='fira mb-4 text-base text-[#878787]'>{short_description}</p>
            <div className='border-b mb-6'></div>
            <h4 className='mb-4 lexend text-lg font-medium text-[#282828]'>Ingredient : {ingredients.length}</h4>
            <ul className='list-disc mb-4'>
                {
                    ingredients.map((ingre, idx) => <li className='ml-7 fira text-lg text-[#878787]' key={idx}>{ingre}</li>)
                }
            </ul>
            <div className='border-b mb-7'></div>
            <div className='flex gap-6 mb-7'>
                <div className='flex items-center gap-1 '>
                    <IoMdTime />
                    <h2 className='fira text-[#282828CC]'>{preparing_time}</h2>
                </div>
                <div className='flex gap-1 items-center'>
                    <FaGripfire />
                    <h2 className='fira text-[#282828CC]'>{calories}</h2>
                </div>
            </div>
            <button onClick={()=> {cookButton(product)}} className='btn lexend text-lg font-medium bg-[#0BE58A] hover:bg-[#3ec58de8] text-[#150B2B] rounded-[50px]'>Want to Cook</button>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired,
    cookButton: PropTypes.func.isRequired,
};

export default Card;