import React, { createContext, useState } from 'react';


export const InteractionContext =createContext()

const InteractionProvider = ({children}) => {
    const [interactions,setInteraction] = useState([]);
    // console.log("Provider");

    const addInteraction = (friend,type)=>{
        const newInteraction = {
            id : Date.now(),
            friendId: friend.id,
            type:type,
            name :friend.name,
            date : friend.next_due_date,
            time : new Date()
        };
        setInteraction(prev => [newInteraction, ...prev])
    }
    return (
        <InteractionContext.Provider value={{interactions,addInteraction}}>
            {children}
        </InteractionContext.Provider>
    );
};

export default InteractionProvider;