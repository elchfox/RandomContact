
import React ,{createContext} from 'react';



const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  
    return (
      <StoreContext.Provider>{children}</StoreContext.Provider>
    );
  };

export default StoreProvider
