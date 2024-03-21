import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridList from "../components/CategoryGridList";

const CategoriesScreen = () => {
    const renderCategories =(itemData)=>{
        return <CategoryGridList title={itemData.item.title} color={itemData.item.color}/>
    }
  return <FlatList data={CATEGORIES} key={(item) => item.id} renderItem={renderCategories} numColumns={2}/>;
};

export default CategoriesScreen;
