import React, {useState, createContext} from 'react'

export const HeaderContext = createContext();

export const HeaderProvider = props => {
    const [ header, setHeader ] = useState('Position Clustering based on Geartypes')
    return (
        <HeaderContext.Provider value={[header,setHeader]}>
            {props.children}   
        </HeaderContext.Provider>
    )
}
