import { useContext } from 'react';
import MealList from '../components/MealsList';
import { FavouritesContext } from '../store/context/favourites-context'
import { MEALS } from '../data/dummy-data'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

function FavoritesScreen() {
  // const favouriteMealsCtx = useContext(FavouritesContext)
  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)

  const favouriteMeals = MEALS.filter(meal => favouriteMealIds.includes(meal.id))

  if (favouriteMeals.length === 0){
    return (
      <View>
        <Text>You have no favourite meals yet</Text>
      </View>
    )
  }else{
    return <MealList items={favouriteMeals}></MealList>
  }
}

export default FavoritesScreen;
