import { useContext } from "react";
import LasfmContext from "../context/LasfmProvider";

const useLastfmd =  () => {
    return useContext(LasfmContext)
}

export default useLastfmd;