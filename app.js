import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';

import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import LinearGradient from 'react-native-linear-gradient';

const palette = [
  '#FFFFFF', // 0
  '#000000', // 1
  '#1AC9BB', // 2
  '#646B77', // 3
  '#E9E9EF', // 4
  '#B6BAC2', // 5
  '#D50000', // 6
  '#FFAC1A' // 7
];

class App extends Component {
  constructor() {
    super();

    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = {
      cca2: 'US',
    };

    this.gradient = {
      colors: ["#0B5A8C", `#0C72AC`, `#0DA9F5`],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.6, 0.9]
    };

    this.gradientOrange = {
      colors: ["#FF613A", `#FF882F`, `#FFDD15`],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.6, 0.9]
    };

    this.gradientBlue = {
      colors: ["#4B6EFF", `#3684FF`, `#0DB0FE`],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.6, 0.9]
    };

    this.gradientVoilet = {
      colors: ["#517AEE", `#625DEF`, `#8423F0`],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.6, 0.9]
    };

    this.gradientSky = {
      colors: ["#00A9F5", `#05BDEB`, `#00E5D9`],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.6, 0.9]
    };

    this.gradientHeader = {
      colors: ["#6947D5", `#5283E5`, `#34CFF8`, `#34CFF8`],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.4, 0.7, 0.9]

    };

    this.gradientShadow={
      colors: ["#E0DDED", `#CED0EA`, `#CBD8EC`, `#C8DCEC`],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
      locations: [0.1, 0.4, 0.7, 0.9]
    }







  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }

  onPressFlag() {
    this.countryPicker.openModal();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  }

  render() {
    return (
      <View style={styles.container}>
        <PhoneInput
          ref={(ref) => {
            this.phone = ref;
          }}
          onPressFlag={this.onPressFlag}
        />

        <CountryPicker
          ref={(ref) => {
            this.countryPicker = ref;
          }}
          onChange={value => this.selectCountry(value)}
          translation="eng"
          cca2={this.state.cca2}
        >
          <View />
        </CountryPicker>

        <View style={styles.containerV}>

          <View style={styles.topLeft}>

          <LinearGradient {...this.gradientHeader} style={{
          marginTop: 0, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
        <View style={{ height: 180, width: 300, }}></View>
            </LinearGradient>
          </View>
          <LinearGradient {...this.gradientShadow} style={styles.bottomRight}>
          
          </LinearGradient>
          <LinearGradient {...this.gradientShadow} style={styles.bottomLeft}></LinearGradient>
          
        </View>


        <LinearGradient {...this.gradientHeader} style={{
          marginTop: 20, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
          <View style={{ height: 200, width: 300, }}></View>
        </LinearGradient>

        <LinearGradient {...this.gradient} style={{
          marginTop: 20, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
          <View style={{ height: 65, width: 300 }}></View>
        </LinearGradient>

        <LinearGradient {...this.gradientOrange} style={{
          marginTop: 20, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
          <View style={{ height: 65, width: 300, }}></View>
        </LinearGradient>

        <LinearGradient {...this.gradientBlue} style={{
          marginTop: 20, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
          <View style={{ height: 65, width: 300, }}></View>
        </LinearGradient>

        <LinearGradient {...this.gradientVoilet} style={{
          marginTop: 20, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
          <View style={{ height: 65, width: 300, }}></View>
        </LinearGradient>

        <LinearGradient {...this.gradientSky} style={{
          marginTop: 20, borderRadius: 6,
          borderWidth: 0,
          borderColor: '#fff'
        }} >
          <View style={{ height: 65, width: 300, }}></View>
        </LinearGradient>

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  containerV: {
    
    width:300,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 24
  },
  topLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    height:180,
    width:300,
    alignItems:'center',
    
    
    
    backgroundColor:'transparent'
  },
  topRight: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  bottomLeft: {
    position: 'absolute',
    left: 10,
    width:280,
    height:5,
    backgroundColor:'#CDD9ED',
    bottom: 15,
    opacity:0.5,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  bottomRight: {
    position: 'absolute',
    left: 20,
    width:260,
    height:10,
    bottom:10,
    opacity:0.5,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    backgroundColor:'#CDD9ED',
  }
});

module.exports = App;
