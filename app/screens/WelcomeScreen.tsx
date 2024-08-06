import {
  Button,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  Pressable
} from 'react-native'

export default function WelcomeScreen () {
  const start = () => {
    console.log('Let the games begin')
  }
  const pressedLogo = () => {
    console.log('Pressed Logo')
  }
  const pressedTitle = () => {
    console.log('Pressed Title')
  }
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3laXqYhmubh2LmeluebE9LTiPv4vfC_PhDg&s'
      }}
    >
      <View style={styles.logoContainer}>
        <Pressable onPress={()=>{pressedLogo()}}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXd5Xxot_xisru5Sh6fH0cQwVaJttUz391Q&s'
            }}
          />
        </Pressable>
        <Pressable onPress={()=>{pressedTitle()}}>
          <Text style={styles.title}>Quest Of the DragonLords</Text>
        </Pressable>
      </View>
      <Button onPress={start} title='Start' color={'tomato'} />
      <View style={styles.registerButton}></View>
    </ImageBackground>
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
