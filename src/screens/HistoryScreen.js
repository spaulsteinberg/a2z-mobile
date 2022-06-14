import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import HistoryCategoryTile from '../components/history/HistoryCategoryTile'
import HistoryDashHeader from '../components/history/HistoryDashHeader'
import { HistorySection } from '../models'
import Colors from '../styles/Colors'
import globalStyles from '../styles/global'

const HistoryScreen = () => {
  const SECTIONS = [new HistorySection("Open", 4, Colors.primary600), new HistorySection("In Progress", 1, "blue"), new HistorySection("Completed", 100, "green"), new HistorySection("Cancelled", 1, "red")]

  return (
    <View style={[styles.container, globalStyles.screenContainer]}>
      <View style={styles.listContainer}>
        <FlatList
          data={SECTIONS}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          ListHeaderComponent={<HistoryDashHeader earned={10500} miles={36000} trips={100} />}
          renderItem={({ item }) => <HistoryCategoryTile title={item.name} number={item.number} color={item.color} />}
          numColumns={2}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default HistoryScreen