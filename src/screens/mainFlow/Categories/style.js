import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';
import {HP, WP} from '../../../services/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centeredText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingVertical: HP(3),
    alignItems: 'center',
    paddingHorizontal: WP(5),
  },
});
