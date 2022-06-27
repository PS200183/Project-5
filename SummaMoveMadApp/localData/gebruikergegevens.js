import React from "react";
const GebuikerContest = React.createContext();

const GebuikerProviders = ({ children }) => {
  const [Gebuiker, setGebuiker] = React.useState([]);
  return (
    <GebuikerContest.Provider value={{ Gebuiker, setGebuiker }}>
      {children}
    </GebuikerContest.Provider>
  );
};
export { GebuikerProviders, GebuikerContest };
