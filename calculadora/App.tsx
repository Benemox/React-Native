import React from 'react'
import { SafeAreaView, StatusBar} from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/app';
const App = () => {
return (
  <SafeAreaView style={styles.fnd}>
    <StatusBar
      backgroundColor="black"
      barStyle="light-content"
      
    />
    <CalculadoraScreen/>
  </SafeAreaView>
)}

export default App