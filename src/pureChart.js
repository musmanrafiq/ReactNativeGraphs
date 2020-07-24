/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import PureChart from 'react-native-pure-chart';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const  sampleData = [
        {x: 'f', y: 30}, 
        {x: 's', y: 200}, 
        {x: 't', y: 170}
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <PureChart style={{margin:100, background: 'red'}}
        width={Dimensions.get('window').width} // from react-native
        height={Dimensions.get('window').height/2}
        data={sampleData} 
        
        customValueRenderer={(index, point) => {
          //if (index % 2 === 0) return null
          return (
            <Text style={{textAlign: 'center'}}>{point.y}</Text>
          )
        }}
        type="line" />
    </>
  );
};

export default App;
