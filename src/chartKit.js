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

import {LineChart} from 'react-native-chart-kit';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const lineData = {
    labels: ['F', 'S', 'S', 'M', 'T', 'W', 'T'],
    datasets: [
      {
        data: [ 30 ],

        strokeWidth: 2, // optional
        color: (opacity = 1) => '#000',
      },
    ],
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LineChart

        data={lineData}
        width={Dimensions.get('window').width} // from react-native
        height={Dimensions.get('window').height}
        fromZero={true}
        withInnerLines={true}
        withVerticalLines={true}
        withHorizontalLines={true}
        withShadow={false}
        withOuterLines={true}
        segments={10}
        renderDotContent={(dot) => {
          debugger;
          //alert(JSON.stringify(dot));
          dot.x = 10;
        }}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#F9D8D9',
          backgroundGradientTo: '#F9D8D9',
          decimalPlaces: 0, // optional, defaults to 2dp
          useShadowColorFromDataset: false,
          strokeWidth: 22,
          color: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
          style: {
            borderRadius: 26,
          },
        }}
        style={{
          borderRadius: 12,
        }}
      />
    </>
  );
};

export default App;
