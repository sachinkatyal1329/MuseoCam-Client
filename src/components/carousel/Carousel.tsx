import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get("window")
const height = width * 0.8

class Carousel extends Component<any, any> {
    
    render() {
        const { images } = this.props
        if (images && images.length) {

            return(
                <View
                >
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator = {false}
                    >
                        {images.map(image => (
                            <Image key = {"123"} style = {styles.image} source = {image.source} />
                        ))}
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
    },
  });