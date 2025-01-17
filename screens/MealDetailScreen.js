import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import List from "../components/Layout/List";
import Subtitle from "../components/Layout/Subtitle";
import MealDetail from "../components/MealDetail";
import IconButton from "../components/Layout/IconButton";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeToFavorotes } from "../store/redux/Favorites";
const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = useSelector((state) => state.favoritesReducer.ids);
  const dispatch = useDispatch();
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMeals.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const changeFavoritesStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorites(mealId)
      dispatch(removeToFavorotes({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorites(mealId)
      dispatch(addToFavorites({ id: mealId }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
