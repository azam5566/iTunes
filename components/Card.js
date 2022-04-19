import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

export default function Card({data, onCardPress}) {
  console.log({data});
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.8}
      onPress={onCardPress}>
      <FastImage
        source={{
          uri: data.artworkUrl100,
        }}
        style={styles.cardImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardTextContainer}>
        <Text style={styles.titleStyle} numberOfLines={1}>
          {data.trackName ?? 'No Title'}
        </Text>
        <Text style={styles.subTitleStyle} numberOfLines={1}>
          {data.artistName ?? 'No Artist'}
        </Text>
        {/* <Text style={styles.titleStyle}>{data.trackName}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%',
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // padding: 12,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  titleStyle: {
    color: '#444',
    fontSize: 16,
    paddingHorizontal: 12,
    fontWeight: 'bold',
  },
  cardTextContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 12,
  },
  subTitleStyle: {
    color: '#888',
    fontSize: 14,
    paddingHorizontal: 12,
  },
});
