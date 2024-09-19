import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function PageHeader({ title }) {
    const [isDropdownMenu, setIsDropdownMenu] = useState(false);

    const handleLogout = () => {
        console.log("Logout");
    }
    return (
        <header className="flex justify-between h-20 w-full items-center bg-white px-8 border-b border-stroke">
            <h1 className="font-semibold text-lg text-gray-950">{title}</h1>
            <div tabIndex={0} onBlur={() => setIsDropdownMenu(false)} className="relative mr-2 w-fit">
                <div onClick={() => setIsDropdownMenu(!isDropdownMenu)} className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2">
                    <img className="w-9 select-none aspect-square rounded-full bg-gray-300" src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" /> {/* Change this to the profile picture */}
                    <div>
                        <h4 className="font-medium text-sm text-gray-600">Username</h4>{/* Change this to the username */}
                        <p className="text-xs text-gray-500">Perawat</p>{/* Change this to the role */}
                    </div>
                </div>
                <div className={`left-0 top-[110%] bg-white py-2 shadow absolute border-stroke border w-full transition-all duration-100 ${isDropdownMenu ? "visible opacity-100 " : "invisible opacity-0 -translate-y-5"}`}>
                    <div onClick={() => handleLogout()} className="w-full text-red-600 text-sm py-2 cursor-pointer select-none flex items-center gap-2 px-4 hover:bg-gray-200 ">
                        <Icon icon="material-symbols:logout" width={18} />
                        <p>Logout</p>
                    </div>
                </div>


            </div>
        </header>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
