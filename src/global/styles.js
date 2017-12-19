import fonts from './fonts';
import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default styles = {

//Containers and Views
  container: {
    backgroundColor: '#F7F8F9',
    paddingTop: 10,
  },
  searchContainer: {
    backgroundColor: '#DEDEDE',
    paddingTop: Platform.OS == 'ios' ? 25 : 10,
  },
  view: {
    margin: 5,
    padding: 5,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
  },
  whiteBGView: {
    backgroundColor: 'white',
    marginTop: 10,
    margin: 5,
    padding: 5,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
    width: deviceWidth - 32,
    paddingBottom: 25
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 10,
  },
  rowView: {
    flexDirection: 'row',
    width: deviceWidth - 32,
    paddingLeft: 10,
    paddingRight: 12,
    alignItems: 'center',
  },
  columnView: {
    flexDirection: 'column',
    alignItems: 'center',
  },

// Text
  boldText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999999',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
    textAlign: 'center',
  },
  title: {
    marginLeft: 16,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
  },
  subtitle: {
    marginLeft: 16,
    marginTop: 5,
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
  },

// Buttons
  button: {
    margin: 5,
    width: 300,
    height: 40,
    backgroundColor: '#D7D8D9',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#999999',
    fontSize: 11,
  },
  buttonTextOnly: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999999',
  },
  buttonView: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },

// Logo
  logo: {
    backgroundColor: '#D7D8D9',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },

// Form and Inputs
  form: {
    width: deviceWidth - 32,
    marginTop: 25
  },
  item: {
    margin: 10,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999999',
    marginLeft: 16,
  },
  input: {
    padding: 5,
    fontSize: 12,
    fontWeight: '100',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#999999',
    borderWidth: 1,
    height: 40,
  },
  checkBox: {
    borderColor: '#F7F8F9',
    height: 40,
  },

// Searchbar
  searchBarContainer: {
    width: deviceWidth - 40,
    padding: 5,
    margin: 5,
    backgroundColor: '#DEDEDE',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 30,
  },
  searchBarInput: {
    backgroundColor: '#FFFFFF',
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
    paddingLeft: 20,
  },
  searchBarIcon: {
    paddingRight: 30,
    paddingLeft: 40,
  },

// Cards
  card: {
    width: deviceWidth - 32,
    padding: 5,
    margin: 10,
  },
  cardItem: {

  },

// Tab tabBar
  addIcon: {
    marginBottom: Platform.OS == 'ios' ? 50 : 0,
  }
};
