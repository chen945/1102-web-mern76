import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu_76 = () => {

  const{isSubmenuOpen,page:{page,links},location}=useGlobalContext();
  const container = useRef(null);
  const[columns,setColumns]=useState('col-2');
  //console.log('page',page)
  //console.log('location',location)

  useEffect(()=>{
    const submenu=container.current;
    console.log('submenu',submenu);
    const {center,bottom}=location;
    submenu.style.left =`${center}px`
    submenu.style.top =`${bottom}px`
    if(links.length === 3){
      setColumns('col-3');
    }
    if(links.length>3){
      setColumns('col-4')
    }
  },[page,location]);
  return(
    <aside className={`${isSubmenuOpen ? 'submenu show':'submenu'}`} ref={container}>
      <section>
        <h4>{page}_76</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link,index)=>{
            const{label,icon,url}=link;
            return(
              <a key={index} href={url}>
                {icon}
                {label}
                </a>
            )
          })}
          </div>
      </section>
    </aside>
  )
}

export default Submenu_76
