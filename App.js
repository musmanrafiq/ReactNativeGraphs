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
  StatusBar,
  Alert,
} from 'react-native';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {Circle, G, Line, Rect, Text} from 'react-native-svg';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const deviceWidth = Dimensions.get('window').width;
  const chartWidth = deviceWidth - deviceWidth / 10;

  const Decorator = ({x, y, data}) => {
    //Alert.alert(JSON.stringify(data));
    const allPoints = [...data[0].data, ...data[1].data, ...data[2].data];

    return allPoints.map((value, index) => (
      <Circle
        onPress={(item) => {
          Alert.alert('pressed' + JSON.stringify(value));
        }}
        xMin={0}
        yMin={0}
        key={index}
        cx={x(value.x)}
        cy={y(value.y)}
        value={value}
        r={4}
        stroke={'rgb(0, 0, 0)'}
        fill={'black'}
      />
    ));
  };
  const data = [
    {x: 4, y: 10},
    {x: 4, y: 20}
  ];
  const data1 = [
    {x: 3, y: 80},
    {x: 3, y: 80}
  ];

  const data3 = [
    {x: 2, y: 30},
    {x: 2, y: 80}
  ];

  const xdata = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const ydata = [7, 80, null, 10];
  return (
    <View>
      <View
        style={{ backgroundColor: '#F9D8D9', height: 330, flexDirection: 'row'}}>
        <YAxis
          style={{marginLeft: 20, marginBottom: 40}}
          width={deviceWidth / 10}
          min={0}
          max={100}
          data={ydata}
          contentInset={{top: 20, bottom: 4}}
          svg={{
            fill: 'black',
            fontSize: 15,
          }}
          // numberOfTicks={3}
          formatLabel={(value) => value}
        />
        <View
          style={{
            height: 300,
            width: chartWidth,

            backgroundColor: '#F9D8D9',
          }}>
          <LineChart
            yMax={100}
            yMin={0}
            xMin={0}
            xMax={6}
            yAccessor={({item}) => item.y}
            xAccessor={({item}) => item.x}
            style={{height: 300}}
            data={[
              {
                data: data,
                svg: {stroke: 'black'},
              },
              {
                data: data1,
                svg: {stroke: 'black'},
              },
              {
                data: data3,
                svg: {stroke: 'black'},
              },
            ]}
            svg={{
              stroke: 'rgb(0, 0, 0)',
              onPress: () => {
                Alert.alert('dd');
              },
            }}
            contentInset={{top: 20, bottom: 20}}>
            <Decorator />
          </LineChart>
          <View style={{backgroundColor: '#F9D8D9', flexDirection: 'column'}}>
            <View
              style={{
                backgroundColor: '#F9D8D9',
                borderBottomColor: 'black',
                borderBottomWidth: 2,
              }}
            />
            <XAxis
              style={{marginHorizontal: 10}}
              data={xdata}
              formatLabel={(value, index) => xdata[index]}
              contentInset={{top: 10, left: 10, right: 10}}
              svg={{fontSize: 15, fill: 'black'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
