import React, { useState, useContext} from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const[isSidebarOpen,setIsSidebarOpen]=useState(false);
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(true);
    const[page,setPage]=useState({page:'',links:[]});
    const[location,setLocation]=useState({});
    //show Sidebar
    const openSidebar =()=>{
        setIsSidebarOpen(true);
    }
    //block Sidebar
    const closeSidebar =()=>{
        setIsSidebarOpen(false);
    }
    //show Submenu
    const openSubmenu =(text,cordinate)=>{
        const page = sublinks.find((link) => link.page === text)
        setPage(page);
        setLocation(cordinate);
        setIsSubmenuOpen(true);
    }
    //block Submenu
    const closeSubmenu =()=>{
        setIsSubmenuOpen(false);
    }

    return(
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            page,
            location
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}