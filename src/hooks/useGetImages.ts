import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';

type Props = {
  title: string;
  first?: number;
};

const useGetImages = ({title, first = 50}: Props) => {
  const [photos, setPhotos] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);

  const onEndReached = () => {
    pageInfo.has_next_page &&
      CameraRoll.getPhotos({
        groupName: title,
        first,
        groupTypes: 'All',
        after: pageInfo.end_cursor,
      }).then(res => {
        setPhotos(prev => [...prev, ...res.edges]);
        setPageInfo(res.page_info);
      });
  };

  useEffect(() => {
    CameraRoll.getPhotos({
      groupName: title,
      first: 50,
      groupTypes: 'All',
    }).then(res => {
      setPhotos(res.edges);
      setPageInfo(res.page_info);
    });
  }, [title]);

  return {photos, pageInfo, onEndReached};
};

export default useGetImages;
