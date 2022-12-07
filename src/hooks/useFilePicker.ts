import FilePickerManager from 'react-native-file-picker';

type Props = {
  onSelect: (data: any) => void;
};

const useFilePicker = ({onSelect}: Props) => {
  const openFilePicker = () => {
    FilePickerManager.showFilePicker(null, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
        onSelect(response);
      }
    });
  };

  return {openFilePicker};
};

export default useFilePicker;
