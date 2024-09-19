import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react"

export default function Sidebar({ navList }) {

    const btnSidebarStyle = "flex min-h-11 text-sm items-center p-[10px] font-medium gap-2 transition duration-200";
    const navActive = ({ isActive }) => {
        return isActive ? "bg-primary-3 text-white " + btnSidebarStyle : "text-gray-500 hover:bg-stroke " + btnSidebarStyle;
    }

    return (
        <>
            <aside className="bg-white fixed h-svh min-w-[256px] border-r border-stroke p-6 box-border flex flex-col">
                <div id="sidebar-logo" className="flex flex-col gap-1">
                    <h1 className="text-primary-3 font-semibold text-4xl">SQUARE</h1>
                    <p className="text-primary-3 text-[8px]">(Stroke Quality Assurance and Care)</p>
                </div>
                <nav id="sidebar-nav" className="flex gap-2 flex-col mt-8">
                    {
                        navList?.map((nav, index) => (
                            <NavLink
                                key={index}
                                to={nav.path}
                                className={({ isActive }) => navActive({ isActive })}
                            >
                                <Icon icon={nav.iconify} width={20} />
                                <p>{nav.title}</p>
                            </NavLink>
                        ))
                    }
                </nav>
            </aside>
            <div className='h-svh min-w-[256px]'></div>
        </>
    )
}

Sidebar.propTypes = {
    navList: PropTypes.arrayOf(PropTypes.object)
};