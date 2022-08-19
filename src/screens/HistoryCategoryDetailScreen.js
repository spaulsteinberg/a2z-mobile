import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import HistoryDetailTile from "../components/history/HistoryDetailTile";
import Colors from "../styles/Colors";
import globalStyles from "../styles/global";

const HistoryCategoryDetailScreen = ({ route, navigation }) => {
  const { category, data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${category} Tickets`,
    });
  }, [navigation, category]);

  const color = category === "Open" ? Colors.primary600 : category === "In Progress" ? "blue" : category === "Completed" ? "green" : category === "Rejected" ? "red" : category === "Cancelled" ? "orange" : Colors.secondary600;

  return (
    <View style={[globalStyles.screenContainer, styles.container, data.length === 0 && { justifyContent: 'center', alignItems: 'center' }]}>
      {
        data.length > 0 ? (
          <FlatList
            ListHeaderComponent={<Text style={{textAlign: 'center', marginBottom: 12}}>{data.length} results.</Text>}
            numColumns={1}
            data={data}
            renderItem={
              ({ item }) => (
                <HistoryDetailTile 
                  id={item.ticketId} 
                  date={item.ticketDate} 
                  total={item.ticketTotal} 
                  distance={item.ticketDistance} 
                  color={color} 
                />
              )
            }
            keyExtractor={item => item.ticketId}
            showsVerticalScrollIndicator={false}
          />
        ) : <Text style={styles.noDataText}>No data to display.</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  noDataText: {
    fontSize: 22
  }
})

export default HistoryCategoryDetailScreen;
