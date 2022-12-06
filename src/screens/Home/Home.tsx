import React from 'react';
import {ScrollView, View} from 'react-native';
import useGetAlbum from 'src/hooks/useGetAlbum';
import {ComponentProps} from 'src/routes/types/navigation';
import Folder from './Folder';
import homeStyle from './home.style';
// import {FlatGrid} from 'react-native-super-grid';

const Home = ({navigation}: ComponentProps) => {
  const {album} = useGetAlbum();

  return (
    <View style={homeStyle.container}>
      <ScrollView contentContainerStyle={homeStyle.contentContainerStyle}>
        {album.map((el, index) => (
          <Folder
            el={el}
            onPress={() => navigation.navigate('Album', el)}
            key={index}
          />
        ))}
      </ScrollView>
      {/* <FlatGrid /> */}
    </View>
  );
};

export default Home;
