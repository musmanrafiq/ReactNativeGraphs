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
  Alert,
} from 'react-native';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const deviceWidth = Dimensions.get('window').width;
  const chartWidth = deviceWidth - (deviceWidth / 10);
  const data = [
    {x: 2, y: 30},
    {x: 3, y: 40},
    {x: 4, y: 130},
  ];
  const xdata = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const ydata = [30, 40, 130];
  return (
    <>
      <View style={{height: 200, flexDirection: 'row'}}>
        <YAxis
          width={deviceWidth / 10}
          min={0}
          max={200}
          data={ydata}
          contentInset={{top: 20, bottom: 40}}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          // numberOfTicks={3}
          formatLabel={(value) => value}
        />
        <View style={{height: 200, width: chartWidth, padding: 20, backgroundColor: '#F9D8D9'}}>
          <LineChart
            yMin={0}
            xMin={0}
            xMax={6}
            yAccessor={({item}) => item.y}
            xAccessor={({item}) => item.x}
            
            style={{height: 200}}
            data={data}
            
            svg={{stroke: 'rgb(0, 0, 0)'}}
            contentInset={{top: 20, bottom: 20}}
          />
          <View style={{flexDirection: 'column'}}>
            <XAxis
              style={{marginHorizontal: -10}}
              data={xdata}
              formatLabel={(value, index) => xdata[index]}
              contentInset={{left: 10, right: 10}}
              svg={{fontSize: 10, fill: 'black'}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
