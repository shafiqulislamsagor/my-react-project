
import { IoIosSearch } from 'react-icons/io';

const Nav = () => {
    return (
        <div className="navbar justify-between bg-base-100 mt-5 mb-12">
            <div className="">
                <a className="btn lexend text-lg lg:text-3xl font-bold text-indigo-950 bg-white border-none">Food Village</a>
            </div>
            <div className="hidden lg:block">
                <ul className="flex gap-3">
                    <button className="btn  lexend font-normal text-base text-[#150B2BB3] bg-white border-none hover:bg-slate-200"><li>Home</li></button>
                    <button className="btn lexend font-normal text-base text-[#150B2BB3] bg-white border-none hover:bg-slate-200"><li>Recipes</li></button>
                    <button className="btn lexend font-normal text-base text-[#150B2BB3] bg-white border-none hover:bg-slate-200"><li>About</li></button>
                    <button className="btn lexend font-normal text-base text-[#150B2BB3] bg-white border-none hover:bg-slate-200"><li>Search</li></button>
                </ul>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-3 border rounded-[50px] py-2 px-3 lg:py-3 lg:px-6 w-24 md:w-auto text-[#150B2BB3] bg-[#150B2B0D]">
                    <IoIosSearch />
                    <input type="text" placeholder="Search" className="border-none outline-none bg-transparent w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 border bg-rose-300 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/wCwRrMF/sagor-White.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;