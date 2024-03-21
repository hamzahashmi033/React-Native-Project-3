import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItems from "../components/MealItems";
const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const renderMealItem = (itemData) => {
    return <MealItems title={itemData.item.title} />;
  };
  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealsOverViewScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
