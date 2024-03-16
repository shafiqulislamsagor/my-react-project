
const Banner = () => {
    return (
        <div className="imged rounded-3xl mb-24">
            <div className="w-[95%] lg:w-4/5 mx-auto py-20 lg:py-32 space-y-6">
                <h1 className="lexend font-bold text-3xl lg:text-5xl text-center text-white">Experience Culinary Bliss at Food Village!</h1>
                <p className="lexend lg:w-4/5 mx-auto text-white text-base lg:text-lg font-normal text-center">Embark on a gastronomic journey through Food Village, where every bite tells a story. From savory street eats to exquisite gourmet creations, our vibrant marketplace offers a world of flavors waiting to be explored</p>
                <div className="flex justify-center gap-7">
                    <button className="btn rounded-[50px] lexend font-semibold text-sm lg:text-lg bg-green-400 text-black border-none hover:bg-green-400">Explore Now</button>
                    <button className="btn rounded-[50px] lexend font-semibold text-sm lg:text-lg bg-transparent text-white hover:bg-transparent">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;