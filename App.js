/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppHome from "./screens/AppHome";
import PokemonTypes from "./screens/PokemonTypeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#272727" },
						headerTintColor: "#ffffff",
						contentStyle: { backgroundColor: "#272727" },
					}}>
					<Stack.Screen
						name="AppHome"
						component={AppHome}
						options={{ title: "Home" }}></Stack.Screen>
					<Stack.Screen
						name="PokemonTypeScreen"
						component={PokemonTypes}
						options={{ title: "Types" }}></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
