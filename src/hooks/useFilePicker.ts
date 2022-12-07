import FilePickerManager from 'react-native-file-picker';

type Props = {
  onSelect: (data: any) => void;
};

const useFilePicker = ({onSelect}: Props) => {
  const openFilePicker = () => {
    FilePickerManager.showFilePicker(null, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        onSelect(response);
      }
    });
  };

  return {openFilePicker};
};

export default useFilePicker;
