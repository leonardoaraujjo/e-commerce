import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/router';
import { useFonts } from '@expo-google-fonts/anton';


export default function App() {

  const [fontsLoaded] = useFonts({
    Anton: require('@expo-google-fonts/anton')
  });
 

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true}/>
      <Routes />
    </>
  );
}

