import React, { useState, useEffect, Children } from "react";

const LevelContext = React.createContext({});

export const LevelContextProvider = (props) => {
  return <LevelContext.Provider>{props.children}</LevelContext.Provider>;
};

export default LevelContext;
