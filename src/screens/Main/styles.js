import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  logoImage: {
    width: 20,
    height: 20,
    marginRight: 3,
    marginBottom: 7,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32,
  },
  introductionImage: {
    width: '100%',
    height: 150,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    marginLeft: 15,
    marginTop: 15,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    lineHeight: 18,
    marginHorizontal: 15,
    marginTop: 15,
    color: '#fff',
    fontWeight: '500',
  },
  backgroundImage: {
    width: '100%',
    height: Dimensions.get('screen').height - 150 - 100,
  },
});

export default styles;
