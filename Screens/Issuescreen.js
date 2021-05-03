import React from 'react';
import { View,Text, TextInput ,TouchableOpacity, StyleSheet} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class Issuescreen extends React.Component {
  constructor(){
    super();
    this.state={
      hasCameraPermissions:null,
      Scanned:false,
      ScannedData:'',
      ButtonState:'normal',
    }
  }
  GetCameraPermissions= async ()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions:status==="granted",
      ButtonState:'clicked',
      Scanned:false,
    })
  }
  HandleBarCodeScanner=async ({type,data})=>{
    this.setState({
      Scanned:true,
      ScannedData:data,
      ButtonState:'normal',
    })
  }

  render() {
    const hasCameraPermissions=this.state.hasCameraPermissions;
    const Scanned=this.state.Scanned;
    const ButtonState=this.state.ButtonState;
    if (ButtonState==="clicked" && hasCameraPermissions===true) {
        return(
          <BarCodeScanner onBarCodeScanned={Scanned ? undefined : this.HandleBarCodeScanner}/>
        )      
    } else {
        return (
          <View styles={styles.Container} >
              <TextInput value={this.state.ScannedData}/>
              <TouchableOpacity onPress={this.GetCameraPermissions}> <Text>SCAN</Text></TouchableOpacity>
              <TextInput/>
              <TouchableOpacity onPress={this.GetCameraPermissions}> <Text>SCAN</Text></TouchableOpacity>
              <TouchableOpacity><Text>SUMBIT</Text></TouchableOpacity>
          </View>
        );
      }
  }
}

const styles=StyleSheet.create({
  Container:{
    justifyContent:'center',
    alignItems:'center',
  }
})