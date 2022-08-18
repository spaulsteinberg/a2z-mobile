import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import HistoryCategoryTile from '../components/history/HistoryCategoryTile'
import HistoryDashHeader from '../components/history/HistoryDashHeader'
import { getUserApplications, getUserToken } from '../firebase/api'
import { HistorySection } from '../models'
import Colors from '../styles/Colors'
import globalStyles from '../styles/global'
import { useDispatch, useSelector } from 'react-redux'
import { setHistory } from '../store/redux/slices/historySlice'
import { earningSelector, milesDrivenSelector } from '../store/redux/selectors/historySelectors'

const OPEN_TITLE = "Open"
const IN_PROGRESS_TITLE = "In Progress"
const COMPLETED_TITLE = "Completed"
const REJECTED_TITLE = "Rejected"
const CANCELLED_TITLE = "Cancelled"

const HistoryScreen = ({ route, navigation }) => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const history = useSelector(state => state.history.data)
  const earnings = useSelector(state => earningSelector(state))
  const miles = useSelector(state => milesDrivenSelector(state))

  const SECTIONS = [
    new HistorySection(OPEN_TITLE, history?.open?.length, Colors.primary600), 
    new HistorySection(IN_PROGRESS_TITLE, history?.inProgress?.length, "blue"), 
    new HistorySection(COMPLETED_TITLE, history?.completed?.length, "green"), 
    new HistorySection(REJECTED_TITLE, history?.rejected?.length, "orange"),
    new HistorySection(CANCELLED_TITLE, history?.cancelled?.length, "red"),
  ]

  useEffect(() => {
    const getApps = async () => {
      setLoading(true)
      const { data: { data } } = 
        await getUserApplications(await getUserToken())
              .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
              })
      console.log("SUCCESS", data)
      dispatch(setHistory(data))
      setLoading(false)
    }

    !history && getApps()
  }, [])

  const onRefresh = async () => {
    setLoading(true)
    const { data } = 
      await getUserApplications(await getUserToken())
        .catch(err => { 
          console.log(err); 
          setError(true)
          setLoading(false)
        })
    console.log(data)
    setLoading(false)
  }

  const handleCategoryTilePress = category => {
    let data;
    switch(category) {
      case OPEN_TITLE:
        data = history.open;
        break;
      case COMPLETED_TITLE:
        data = history.completed;
        break;
      case IN_PROGRESS_TITLE:
        data = history.inProgress;
        break;
      case REJECTED_TITLE:
        data = history.rejected;
        break;
      case CANCELLED_TITLE:
        data = history.cancelled;
        break;
      default: break
    }
    navigation.navigate("HistoryDetail", { category, data })
  }

  return (
    <View style={[styles.container, globalStyles.screenContainer]}>
      <View style={styles.listContainer}>
        <FlatList
          data={SECTIONS}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          ListHeaderComponent={<HistoryDashHeader loading={loading} earned={earnings} miles={miles} trips={history?.completed?.length} />}
          renderItem={({ item }) => <HistoryCategoryTile onPress={handleCategoryTilePress} loading={loading} title={item.name} number={item.number} color={item.color} />}
          numColumns={2}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
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