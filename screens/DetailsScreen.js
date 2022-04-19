/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import FastImage from 'react-native-fast-image';

export default function DetailsScreen(props) {
  const {width, height} = useWindowDimensions();
  const data = props.route.params.item;
  console.log({data});
  return (
    <View>
      <FastImage
        source={{
          uri: data.artworkUrl100,
        }}
        style={styles.imageStyle}>
        <TouchableOpacity
          style={styles.backContStyle}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <FastImage
            source={require('../assets/arrow-left-line.png')}
            style={styles.backStyle}
          />
        </TouchableOpacity>
        <Text numberOfLines={2} style={styles.subtitleStyle}>
          {data.artistName}
        </Text>
        <Text numberOfLines={2} style={styles.titleStyle}>
          {data.trackName}
        </Text>
      </FastImage>
      <FastImage
        source={require('../assets/backgrd.webp')}
        style={{width: '100%', height: height - width}}>
        <ScrollView contentContainerStyle={{padding: 16}}>
          <View
            style={{
              paddingVertical: 12,
              borderBottomColor: '#b8b8b8',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 14, color: '#444'}}>
              Collection Censored Name
            </Text>
            <Text style={{fontSize: 18, color: '#444', fontWeight: '600'}}>
              {data.collectionCensoredName}
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 12,
              borderBottomColor: '#b8b8b8',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 14, color: '#444'}}>Genre</Text>
            <Text style={{fontSize: 18, color: '#444', fontWeight: '600'}}>
              {data.primaryGenreName}
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 12,
            }}>
            <Text style={{fontSize: 14, color: '#444'}}>
              LYRICS (if available)
            </Text>
            <Text style={{fontSize: 18, color: '#444', fontWeight: '600'}}>
              {description}
            </Text>
          </View>
        </ScrollView>
      </FastImage>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    flexDirection: 'column-reverse',
    padding: 16,
  },
  titleStyle: {
    color: '#eaeaea',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitleStyle: {
    color: '#eaeaea',
    fontSize: 18,
    fontWeight: 'normal',
  },
  backContStyle: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    top: 16,
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  backStyle: {
    width: 32,
    height: 32,
  },
});

const description = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
