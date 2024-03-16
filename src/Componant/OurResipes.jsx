import CardsAll from "./CardsAll";
import Currently from "./Currently";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const OurResipes = () => {
    const successToast = () => toast.success("Item added Successfully!");
    const successToasts = () => toast.error("Item Already selected !!");
    const [recipies, setRecipies] = useState([])
    const cookButton = (product) => {
        if (!recipies.includes(product) && !preparing.includes(product) ) {
            const newRecipies = [...recipies, product];
            setRecipies(newRecipies)
            successToast()
        }
        else {
            successToasts()
        }
    }
    const [preparing, setPreparing] = useState([]);
    const preparingButton = (product) => {
        // console.log(product);
        if (!preparing.includes(product)) {
            const newPreparing = [...preparing, product];
            setPreparing(newPreparing)
            const newRecipes = recipies.filter(recipies => recipies !== product);
            setRecipies(newRecipes)
            
        }
    }
    return (
        <>
            <div className='lg:w-3/4 mx-auto mb-12'>
                <h2 className='text-center lexend text-4xl font-semibold text-indigo-950'>Our Recipes</h2>
                <p className='text-center lexend text-[#150B2B99] text-base mt-6'>Explore our collection of handcrafted recipes curated by our passionate chefs. From traditional favorites to innovative creations, each recipe is a testament to our love for good food and culinary expertise.</p>
            </div>
            <div className="flex gap-6 flex-col lg:flex-row mb-16">
                <ToastContainer />
                <CardsAll cookButton={cookButton} successToast={successToast}></CardsAll>
                <Currently recipies={recipies} preparingButton={preparingButton} preparing={preparing}></Currently>
            </div>
        </>
    );
};

export default OurResipes;