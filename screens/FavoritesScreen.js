import { Text, View, StyleSheet,FlatList } from "react-native";
import { useContext,useEffect } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealItems from "../components/MealItems";
const FavoritesScreen = () => {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
      favoriteMealsCtx.ids.includes(meal.id)
    );
   
    if (favoriteMeals.length === 0) {
      return (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
      );
    }
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItems {...mealItemProps} />;
  };
  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
};

export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
