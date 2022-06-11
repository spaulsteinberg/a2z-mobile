import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { AZTile } from '../components/ui'
import { HistorySection } from '../models'
import Colors from '../styles/Colors'
import globalStyles from '../styles/global'

const HistoryScreen = () => {
  const SECTIONS = [new HistorySection("Open", Colors.primary600), new HistorySection("In Progress", "blue"), new HistorySection("Completed", "green"), new HistorySection("Cancelled", "red")]

  return (
    <View style={[styles.container, globalStyles.screenContainer]}>
      <Text>Hello history</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={SECTIONS}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <AZTile title={item.name} color={item.color} />}
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
    alignItems: 'center',
  }
})

export default HistoryScreen