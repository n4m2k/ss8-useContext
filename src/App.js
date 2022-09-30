import React, { createContext, useState } from "react";
import Page from "./Page/Page";
export const CtxUsername = createContext();

const App = () => {
  const [user, setUser] = useState("");
  return (
    <div>
      <CtxUsername.Provider value={{ user: user, setUser: setUser }}>
        <Page></Page>
      </CtxUsername.Provider>
    </div>
  );
};

export default App;
