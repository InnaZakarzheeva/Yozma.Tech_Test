import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    marginLeft: 15,
    marginTop: 15,
    color: '#00d5ff',
  },
  description: {
    fontSize: 16,
    lineHeight: 18,
    marginHorizontal: 15,
    marginTop: 15,
    fontWeight: '500',
  },
});

export default styles;
