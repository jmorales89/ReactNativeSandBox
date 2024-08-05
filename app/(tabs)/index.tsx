import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity
  
} from 'react-native'

export default function HomeScreen () {
  console.log('hi')

  const handlePress = () => {
    console.log('Text clicked')
  }
  const handleImageTap = () => {
    console.log('Image clicked')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}> Home</Text>
      <TouchableOpacity onPress={handleImageTap}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://m.media-amazon.com/images/I/8126RXA1kiL._AC_SL1500_.jpg'
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
