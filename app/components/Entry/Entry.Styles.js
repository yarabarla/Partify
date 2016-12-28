import { StyleSheet } from 'react-native';

const backgroundColor = '#e8eff9'

const styles = StyleSheet.create({
  entryContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor
  },

  loginContainer: {
    flex: 1.5,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: backgroundColor
  },

  loginText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30
  }
});

styles.loginButton = (color) => ({
    height: 90,
    backgroundColor: color,
    justifyContent: 'space-around'
})

export default styles;
