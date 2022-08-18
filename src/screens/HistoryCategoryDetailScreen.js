import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import globalStyles from "../styles/global";

const HistoryCategoryDetailScreen = ({ route, navigation }) => {
  const { category, data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${category} Tickets`,
    });
  }, [navigation, category]);

  console.log(data)
  return (
    <View style={[globalStyles.screenContainer, styles.container]}>
      {
        data.length > 0 ? <Text>Hello world</Text> : <Text style={styles.noDataText}>No data to display.</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDataText: {
    fontSize: 22
  }
})

export default HistoryCategoryDetailScreen;
