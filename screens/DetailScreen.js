/** @format */
import { Text, View, StyleSheet } from "react-native";

export default function DetailScreen({route}) {

  const catId = route.params.categoryId
  return <View style={styles.container}>
    <Text>Detail Screen ... {catId}</Text>
  </View>
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
  }
})