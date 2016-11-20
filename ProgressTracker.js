import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  NavigationExperimental,
  Dimensions
} from 'react-native'

const {width,height} = Dimensions.get('window')

class ProgressTracker extends Component {
  render() {
    var circleHeight = height/30
    var circleWidth = circleHeight
    var barHeight = height/130
    var barWidth = width/8
    var cicleColor = 'lightgrey'
    var barColor = 'lightgrey'
    var fillCicleColor = this.props.fillColor
    var fillBarColor = this.props.fillColor
    var Labels = this.props.Labels
    var fillUpToLabelIndex = this.props.fillUpToLabelIndex
    ////////////////
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <View style={{height:circleHeight,width:circleHeight,flexDirection:'row',zIndex:1}}>
                  <View>
                    <View style={{height:circleHeight,width:circleHeight,alignItems:'center',}}>
                      <View style={{height:circleHeight,width:circleHeight,backgroundColor:fillCicleColor,borderRadius:50,zIndex:1}}/>
                    </View>
                    <View style={{height:circleHeight/2,justifyContent:'center',width:circleWidth+10}}>
                      <Text style={{fontSize:8,marginTop:5}} numberOfLines= {1}>{Labels[0]}</Text>
                    </View>
                  </View>
             </View>
            {Labels.slice(1).map((label,index) => {
                  return (
                    <View style={{height:circleHeight,width:circleHeight+barWidth}} key = {index}>
                        <View>
                          <View style={{height:circleHeight,width:circleHeight,alignItems:'center',flexDirection:'row'}}>
                            <View style={{height:circleHeight/4,width:barWidth+10,backgroundColor:(index < fillUpToLabelIndex)?fillCicleColor:cicleColor,marginLeft:-3,marginRight:-10,zIndex:0}}/>
                            <View style={{height:circleHeight,width:circleHeight,backgroundColor:(index < fillUpToLabelIndex)?fillBarColor:barColor,borderRadius:50,zIndex:1}}/>
                          </View>
                          <View style={{height:circleHeight/2,alignItems:'flex-end'}}>
                            <Text style={{fontSize:8,marginTop:5}} numberOfLines= {1}>{label}</Text>
                          </View>
                        </View>
                   </View>
                  );
              })
          }
      </View>
    )
  }
}
module.exports = ProgressTracker
