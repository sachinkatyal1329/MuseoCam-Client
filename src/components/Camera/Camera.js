import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
export default Cam = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  state = {
    photo: null
  }


  setInterval(async () => {
    let photo = await cameraRef.takePictureAsync();
    console.log("GOT PHOTO")
    console.log(photo)
  }, 1000);

  const renderPhoto = () => {
    if (!this.state.photo) return <></>
    
    console.log("HI MOTHER FUCKER")
    console.log(this.state.photo['uri'])
    return (
      <Image
        source={{
          uri: this.state.photo['uri'],
        }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {this.state.photo && renderPhoto()}
      {!this.state.photo && <Camera style={{ flex: 2 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>

        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          {/* <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync();
              console.log("HUH?")
              this.setState({photo})
            }
          }}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:"50%",
               borderColor: 'white',
               height: 50,
               width:50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:"50%",
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>}
    </View>
  );
}