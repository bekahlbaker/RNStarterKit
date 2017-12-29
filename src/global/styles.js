import { Platform, Dimensions } from 'react-native';
import t from 'tcomb-form-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const DARK_COLOR = '#999999';
const LIGHT_COLOR = '#DEDEDE';
const BLACK = '#000000';
const WHITE = '#FFFFFF';
const BACKGROUND_COLOR = '#F7F8F9';
const ERROR_COLOR = '#B1011B';
const SPLASH_SCREEN_BLUE = '#144A8A';

export default styles = {
  splashScreen: {
    backgroundColor: SPLASH_SCREEN_BLUE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashScreenText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },

  // Form Styles
  formStyles: {
    ...t.form.Form.stylesheet,
    formGroup: {
      normal: {
        width: deviceWidth - 64,
        marginTop: 10,
      },
      error: {
        width: deviceWidth - 64,
        marginTop: 10,
      },
    },
    controlLabel: {
      normal: {
        fontSize: 13,
        fontWeight: 'bold',
        color: DARK_COLOR,
        marginLeft: 5,
        marginBottom: 5,
      },
      error: {
        color: ERROR_COLOR,
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 5,
      },
    },
    textbox: {
      normal: {
        fontSize: 12,
        fontWeight: '100',
        backgroundColor: WHITE,
        borderRadius: 5,
        borderColor: DARK_COLOR,
        borderWidth: 1,
        height: 40,
        color: DARK_COLOR,
        paddingLeft: 8,
      },
      // the style applied when a validation error occours
      error: {
        fontSize: 12,
        fontWeight: '100',
        backgroundColor: WHITE,
        borderRadius: 5,
        borderColor: ERROR_COLOR,
        borderWidth: 1,
        height: 40,
        color: DARK_COLOR,
        paddingLeft: 8,
      },
    },
    errorBlock: {
      fontSize: 12,
      fontWeight: '100',
      marginBottom: 2,
      color: ERROR_COLOR,
      paddingLeft: 8,
    },
  },
  // Containers and Views
  container: {
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 0,
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
    paddingBottom: 25,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 10,
  },
  rowView: {
    flexDirection: 'row',
    width: deviceWidth - 32,
    paddingRight: 20,
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
    color: DARK_COLOR,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 13,
    fontWeight: '100',
    color: DARK_COLOR,
    textAlign: 'center',
  },
  title: {
    marginLeft: 16,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_COLOR,
  },
  subtitle: {
    marginLeft: 16,
    marginTop: 5,
    fontSize: 13,
    fontWeight: '100',
    color: DARK_COLOR,
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
    color: DARK_COLOR,
    fontSize: 11,
  },
  buttonTextOnly: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: DARK_COLOR,
  },
  buttonView: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },

  // Logo
  logo: {
    backgroundColor: 'transparent',
    width: 250,
    height: 75,
    borderRadius: 10,
    marginTop: 50,
  },

  // Form and Inputs
  item: {
    margin: 10,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: DARK_COLOR,
    marginLeft: 16,
  },
  input: {
    padding: 5,
    fontSize: 12,
    fontWeight: '100',
    backgroundColor: WHITE,
    borderRadius: 5,
    borderColor: DARK_COLOR,
    borderWidth: 1,
    height: 40,
  },
  checkBox: {
    borderColor: BACKGROUND_COLOR,
    height: 40,
  },

  // Searchbar
  searchContainer: {
    backgroundColor: LIGHT_COLOR,
    paddingTop: Platform.OS === 'ios' ? 25 : 10,
  },
  searchBarContainer: {
    width: deviceWidth - 40,
    padding: 5,
    margin: 5,
    backgroundColor: LIGHT_COLOR,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 30,
  },
  searchBarInput: {
    backgroundColor: WHITE,
    fontSize: 13,
    fontWeight: '100',
    color: DARK_COLOR,
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
};
