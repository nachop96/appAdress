import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.black,
  },
  details: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    color: COLORS.primaryColor,
    fontSize: 18,
    marginBottom: 10,
  },
  address: {
    color: COLORS.textColor,
    fontSize: 14,
  },
});