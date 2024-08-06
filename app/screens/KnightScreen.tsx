import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text
} from 'react-native'

export default function WelcomeScreen () {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://pics.craiyon.com/2023-10-14/f02065f529ed41ba8b1d80ac2c43c405.webp'
        }}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXd5Xxot_xisru5Sh6fH0cQwVaJttUz391Q&s'
            }}
          />
          <Text style={styles.title}>Will you brave the dragon fire ?</Text>

          
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'tomato'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'black'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20
  }
})
