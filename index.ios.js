import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
var ProgressTracker = require('./ProgressTracker')
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0
      }
    }
  render() {
    var Labels = ['Shipped','Transit','Transit','Transit','Delivered']
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{height:50,width:200}}>
          <ProgressTracker fillUpToLabelIndex = {this.state.count} fillColor = 'green' Labels = {Labels}/>
        </View>
        <TouchableHighlight onPress={()=>{this.setState({count:this.state.count+1})}} style={{height:50,width:100,backgroundColor:'tan',marginTop:50}}>
          <View style={{height:50,width:100,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white'}}>Progress</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ProgressTracker', () => App);
