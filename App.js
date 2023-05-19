import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Content from './src/components/content';


export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
