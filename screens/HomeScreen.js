/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import Card from '../components/Card';

let url = 'https://itunes.apple.com/search?term=Michael+jackson';

export default function HomeScreen(props) {
  const [songsList, setSongsList] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  function handleOnCardPress(item) {
    console.log({item});
    props.navigation.navigate('Details', {item});
  }

  function handleRefresh() {
    setIsRefreshing(true);
    setSongsList([]);
    fetchSongs();
  }

  function fetchSongs() {
    let config = {
      method: 'get',
      url: 'https://itunes.apple.com/search?term=Michael+jackson',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setSongsList(response.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      });

    setIsRefreshing(false);
  }
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'iTunes'} />
      {songsList.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={songsList}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                enabled={true}
              />
            }
            renderItem={({item}) => (
              <Card data={item} onCardPress={() => handleOnCardPress(item)} />
            )}
            initialNumToRender={8}
            maxToRenderPerBatch={4}
            numColumns={2}
            contentContainerStyle={styles.list}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
            keyExtractor={(_, index) => index}
          />
        </View>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}

const Loading = () => {
  return (
    <>
      <LottieView
        source={require('../assets/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
      <Text style={{color: 'black'}}>Fetching your songs</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  loader: {
    width: 150,
    height: 100,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
