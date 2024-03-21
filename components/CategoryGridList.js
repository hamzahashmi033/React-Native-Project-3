import { View, Text, Pressable, StyleSheet,Platform } from "react-native";

const CategoryGridList = ({ title, color, onPress }) => {
  return (
    <View style={[styles.rootContainer, {backgroundColor:color}]}>
      <Pressable android_ripple={{color:"#ccc"}} style={styles.button} onPress={onPress}>
        <View style={styles.childContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridList;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin:10,
    height: 160,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "lightgrey",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow:Platform.OS== "android" ? "hidden" : "visible"
  },
  button: {
    flex: 1,
  },
  childContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize:18,
    fontWeight:"bold"
  }
});
