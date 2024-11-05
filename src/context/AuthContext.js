import { createContext, useState, useEffect } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

const AuthContext = createContext(undefined);

export default AuthContext;

export const AuthProvider = ({children}) => {
    const [img, setIMG ] = usePersistedState("img", undefined);
    const [bio, setBIO] = usePersistedState("bio", {fio: "", iin: "", birth: "", docnum: "", viddata: ""})
    const [loading, setLoading] = useState(true);

    const contextData = {
        img, setIMG,
        bio, setBIO
    }

    useEffect(() => {
        setLoading(false);
    }, [loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
}

