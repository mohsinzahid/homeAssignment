import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';
import {HP, WP} from '../../../services/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: HP(2),
  },
  wrapper: {
    height: HP(25),
    width: WP(100),
  },
  centeredText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 15,
    top: HP(5),
    backgroundColor: Colors.blue,
    zIndex: 9999999,
  },
  backBtnText: {
    color: Colors.darkBlue,
    fontSize: 22,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: HP(3),
  },
  detailContainer: {
    alignItems: 'center',
    marginHorizontal: WP(5),
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.blue,
    marginTop: HP(5),
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: HP(2),
  },
  clock: {
    marginRight: WP(3),
    height: 20,
    width: 20,
  },
  ingredientBtn: {
    paddingVertical: HP(3),
    marginTop: HP(3),
    width: WP(80),
    borderRadius: WP(10),
    borderWidth: 1,
    borderColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginTop: HP(2),
  },
});
