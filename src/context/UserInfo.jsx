import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
    const [userInfo, setUserInfo] = useState({
        username: "cmutama",
        nama_lengkap: "Hasri Afra Annisa Athahirah",
        role: 2,
    });

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    )
}

UserInfoProvider.propTypes = {
    children: PropTypes.node.isRequired,
}