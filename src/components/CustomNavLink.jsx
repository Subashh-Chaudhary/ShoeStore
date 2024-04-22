import { NavLink, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.hash === to;
    console.log(location)
    return (
        <NavLink
            to={to}
            className={`font-montserrat font-semibold leading-normal text-lg ${
                isActive ? 'text-coral-red' : 'hover:text-slate-gray text-gray-750'
            }`}
        >
            {label}
        </NavLink>
    );
};

export default CustomNavLink;