import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native'

let { width, height } = Dimensions.get("window")
height = height * 0.75

class Carousel extends Component<any, any> {
    
    render() {
        const { images } = this.props
        if (images && images.length) {

            return(
                <View
                style = {{
                    position: "relative",
                    top: "20%"
                }}
                >
                    <ScrollView 
                        pagingEnabled
                        showsVerticalScrollIndicator = {false}
                        >
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator = {false}
                        >
                            {images.map(image => (
                                <View key = {"123"} style = {styles.image} >
                                    <Text>HI</Text>
                                    </View>
                            ))}
                        </ScrollView>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator = {false}
                        >
                            {images.map(image => (
                                <View key = {"123"} style = {styles.image2} >
                                    </View>
                            ))}
                        </ScrollView>
                    </ScrollView>
                </View>
            )
        }

        console.log("no")
        return null;
    }
}

export default Carousel


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollContainer: {
      height,
    },
    image: {
      width: width * 0.9,
      margin: width * 0.05,
      height,
      borderRadius: 10
    },
    image2: {
        width: width * 0.9,
        margin: width * 0.05,
        height,
        backgroundColor: "lightgray",
        borderRadius: 10
      },
  });