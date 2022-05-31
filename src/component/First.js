import {useState} from "react";
import Second from "./Second";

const First =() =>{
    const[name, setName] = useState("Hello");
    return (
        <>
            <p>{`first: ${name}`}</p>
            <button onClick={() => {
                setName("world");
            }}>
                furst name set world
            </button>
            <Second name={name}></Second>
        </>
    );
};

export default First;