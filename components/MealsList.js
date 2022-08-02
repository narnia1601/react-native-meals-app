import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "./MealItem";

function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
}

function MealList(props){
    return (
        <View style={styles.container}>
            <FlatList
                data={props.items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  