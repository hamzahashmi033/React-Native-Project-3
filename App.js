import { StyleSheet, Text, View,StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
    <StatusBar barStyle={"light-content"} backgroundColor={"#ccc"}/>
    <CategoriesScreen />
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
});
