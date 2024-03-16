import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from './Card';

const CardsAll = ({cookButton}) => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
        const fackData = async() =>{
            const url = 'data.json';
            const fec = await fetch(url);
            const jsonData = await fec.json();
            const data  = jsonData;
            setProduct(data)
        }
        fackData()
    },[])
    return (
        <div className='flex-1 grid grid-cols-1 gap-5 lg:grid-cols-2'>
            {
                product.map((product,idx) => <Card key={idx} cookButton={cookButton} product={product}></Card>)
            }
        </div>
    );
};

CardsAll.propTypes = {
    cookButton: PropTypes.func.isRequired,
};

export default CardsAll;