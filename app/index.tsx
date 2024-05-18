import { Platform, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import LoginPage from "./screens/Login";
import NotFoundPage from "./screens/NotFound";
import SelectLead from "./screens/SelectLead";
import JobIntroduction from "./screens/JobIntroduction";
import AcceptAssignment from "./screens/AcceptAssignment";
import TeamList from "./screens/TeamList";
import CheckJobList from "./screens/CheckJobList";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();
const isLoggedIn = false;
export default function App() {
  return (
    <>
      {/* <StatusBar translucent={true} hidden={false} /> */}
      <Stack.Navigator initialRouteName="LogIn">
        {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Home" component={LoginPage} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LogIn" component={LoginPage} />
            <Stack.Screen name="SelectLead" component={SelectLead} />
            <Stack.Screen name="JobIntroduction" component={JobIntroduction} />
            <Stack.Screen
              name="AcceptAssignment"
              component={AcceptAssignment}
            />
            <Stack.Screen name="TeamList" component={TeamList} />
            <Stack.Screen name="CheckJobList" component={CheckJobList} />
            <Stack.Screen name="NotFound" component={NotFoundPage} />
          </Stack.Group>
        )}
        {/* Common modal screens */}
        {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Invite" component={Invite} />
        </Stack.Group> */}
      </Stack.Navigator>
    </>
  );
}
