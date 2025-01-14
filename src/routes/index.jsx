import { memo } from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/Splash";
import Home from "../screens/Home";
import Search from "../screens/Search";
import ReturnButton from "../components/ReturnButton";
import RecipeDetails from "../screens/RecipeDetails";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const Routes = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          component={Splash}
          name="Splash"
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerLeft: null, gestureEnabled: false }}
        />
        <Stack.Screen
          options={{ headerLeft: (props) => <ReturnButton {...props} /> }}
          component={Search}
          name="Search"
        />

        <Stack.Screen
          options={{
            headerLeft: (props) => <ReturnButton {...props} />,
            title: "",
          }}
          component={RecipeDetails}
          name="RecipeDetails"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(Routes);
