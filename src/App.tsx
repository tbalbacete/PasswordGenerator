import * as React from "react";
import { Home } from "./Pages";
import { SnackbarProvider } from "notistack";

export const App: React.FC = () => {
  return (
    <>
      <SnackbarProvider>
        <Home />
      </SnackbarProvider>
    </>
  );
};

export default App;
