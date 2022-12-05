import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useGetAlbum from 'src/hooks/useGetAlbum';
import {ComponentProps} from 'src/routes/types/navigation';
import homeStyle from './home.style';

const Home = ({navigation}: ComponentProps) => {
  const {album} = useGetAlbum();

  return (
    <View style={homeStyle.container}>
      <ScrollView contentContainerStyle={homeStyle.contentContainerStyle}>
        {album.map((el, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Album', el)}
            key={index}
            style={homeStyle.item}>
            <Text style={homeStyle.text}>{el.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
