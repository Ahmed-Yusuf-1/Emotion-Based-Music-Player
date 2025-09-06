import { Text, View, TouchableOpacity, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {

  const router = useRouter();

  const HandleAnalyzeMood = () =>{
    router.push('/capture');
  };
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Welcome to Emotion Music Player User!</Text>
      <Text style={styles.desc}>This app detects your mood and recommends you music based of that.</Text>
      <TouchableOpacity style={styles.touchable} onPress={HandleAnalyzeMood} >
        <Text style={styles.button}>
          Analyze My Mood
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#211e1e',
    gap: 300,
    
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
  desc: {
    fontSize: 15,
    color: 'white',
  },
  button: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
  touchable: {
    backgroundColor: '#2b9bcf',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
});
