/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppHome from "./screens/AppHome";
import PokemonDetail from "./screens/PokemonDetailScreen";
import PokemonList from "./screens/PokemonListScreen";
import PokemonWhosThat from "./screens/PokemonWhosThat";

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
						name="PokemonListScreen"
						component={PokemonList}
						options={{ title: "Pokemons" }}></Stack.Screen>
					<Stack.Screen
						name="PokemonWhosThat"
						component={PokemonWhosThat}
						options={{ title: "Who's That Pokemon?" }}></Stack.Screen>

					<Stack.Screen
						name="PokemonDetailScreen"
						component={PokemonDetail}
						options={{ title: "Detail" }}></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
