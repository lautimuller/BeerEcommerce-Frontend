import React from "react";
import RootNavigator from "./src/navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ProductsProvider } from "./src/context/ProductsContext";

const App: React.FC = () => {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ProductsProvider>
  );
};

export default App;
