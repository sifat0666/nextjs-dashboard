//@ts-ignore

import { initial } from 'lodash';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { any } from 'zod';

type ContextProviderProps = {
  children: React.ReactNode
}

type ContextType = {
  activeMenu: boolean,
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>> ,
  screenSize: any,
  setScreenSize: React.Dispatch<React.SetStateAction<any>> ,
  isClicked: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  }
  setIsClicked: React.Dispatch<React.SetStateAction<{
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  }>>
  handleClick:(clicked: string) => void
}


const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext<ContextType>({
  activeMenu: true, 
  setActiveMenu: (): any =>{}, 
  screenSize: any,
  setScreenSize: ()=>{},
  isClicked: initialState, 
  setIsClicked: ()=>{},
  handleClick: ()=>{}
});

export const ContextProvider = ({ children }: ContextProviderProps) => {


  const [activeMenu, setActiveMenu] = useState<boolean>(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState<any>()

  const handleClick = (clicked: string) => {
    setIsClicked({...initialState, [clicked]: true})
  }


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
  
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
    
  }, [])
  
  useEffect(() => {
   if(screenSize <= 900){
    setActiveMenu(false)
   }else{
    setActiveMenu(true)
   }
  
  }, [screenSize])
  




  return(
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      setIsClicked,
      handleClick,
      screenSize,
      setScreenSize
     }}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);