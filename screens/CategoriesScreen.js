import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridList from "../components/CategoryGridList";

const CategoriesScreen = ({ navigation }) => {
  const renderCategories = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id
      });
    };
    return (
      <CategoryGridList
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={renderCategories}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
