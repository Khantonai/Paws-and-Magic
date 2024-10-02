import { Image, StyleSheet, Platform,View,Text } from 'react-native';
import ManaPoint from '@/components/atoms/ManaPoint'
import ManaBar from '@/components/molecules/ManaBar';
export default function HomeScreen() {


  return (
    <View>
      <ManaBar count ={10} active ={6}/>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
