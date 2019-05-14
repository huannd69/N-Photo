import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [
            {lable:'example 1',
            image : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-cat-cute-45201.jpg&fm=jpg'},
            { lable:'example 2',
            image : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-cat-cute-45201.jpg&fm=jpg'},
            { lable:'example 3',
            image : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-cat-cute-45201.jpg&fm=jpg'},
            { lable:'example 4',
            image : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-cat-cute-45201.jpg&fm=jpg'},
            { lable:'example 5',
            image : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-cat-cute-45201.jpg&fm=jpg'},
            { lable:'example 6',
            image : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-cat-cute-45201.jpg&fm=jpg'}
        ],
    };
  }
  componentDidMount(){
     
  }
  renderItem = ({item}) => {
      <View style = {StyleSheet.viewItem}>
        <Image style ={styles.image} source = {{uri:item.image}}></Image>
        <Text>{item.lable}</Text>
      </View>
  }
  render() {
    return (
      <View style ={styles.container}>
        <FlatList
        data = {this.state.data}
        extraData = {this.state}
        renderItem = {this.renderItem}
        keyExtractor={(item,index) => index.toString()}>
        </FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    viewItem:{
        flex:1/3,
        backgroundColor:'red',
        alignItems: 'center',
    },
    container:{
        flex:1,
        justifyContent:'center'
    },
    image:{
        width:100,
        height:100
    }
})