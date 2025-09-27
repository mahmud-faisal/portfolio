import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const StoreContext = createContext();

const StoreContextProvider = (props)=>{
    const backend_url = 'http://localhost:4002';

    const [projectList,setProjectList]=useState([]);
    
    const fetchProjectList = async()=>{
        const response = await axios.get(backend_url+"/api/project/all");

        if(response.data.success){
            setProjectList(response.data.projects);
        }
        else{
            console.log("Error!Projects are not fetching!");
        }
    }

    useEffect(()=>{
        fetchProjectList();
    },[])

    const contextValue={
        backend_url,
        projectList

    }

    return (
    <StoreContext.Provider value={contextValue}>
       {props.children} 
    </StoreContext.Provider>
    )
}



export default StoreContextProvider;