import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

export const FavoritesContextProvider = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorites = (id) => {
    setFavoriteMealIds((currrentFavIds) => [...currrentFavIds, id]);
  };
  const removeFavorites = (id) => {
    setFavoriteMealIds((currrentFavIds) =>
      currrentFavIds.filter((mealsId) => mealsId !== id)
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
