import { createContext } from "react";


const LasfmContext = createContext();

const  LasfmProvider = ({ children }) => {

    return (
        <LasfmContext.Provider
         value={{

         }}
        >
            {children}
        </LasfmContext.Provider>
    )

}

export {
    LasfmProvider
}
export default LasfmContext