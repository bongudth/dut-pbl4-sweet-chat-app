import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  row: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  message: {
    width: 220,
    fontSize: 14,
  },
  noti: {
    backgroundColor: 'indianred',
    width: 20,
    height: 20,
    textAlign: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  count: {
    color: 'white',
    fontSize: 12,
    marginTop: 1,
  }
})

export default styles;
