  import React,{useState,useEffect } from "react";
  import {styles} from './styles'
  import {Text,View,Image,ScrollView,Dimensions,StyleSheet, TouchableOpacity} from "react-native";
  import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
  const {width} = Dimensions.get('window');

  const cardData = [{
    title: "Seller",
    heading: "I am Seller",
    paragraph:"I sell my products online or offline and want to ship them using Shipping",
    img:"https://picsum.photos/700"
  },
  {
    title: "Buyer",
    heading: "I am Buyer",
    paragraph:"I am here to track an order I recently placed with an eCommerce store.",
    img:"https://picsum.photos/700"
  }]
  
  export default UserType = ({navigation}) =>{

    const [UserType,setUserType] = useState("Seller");
    return (
        <ScrollView>
          <View style={{backgroundColor:"white",paddingBottom:70}}>
            <Image 
               resizeMode={'cover'}
               style={{ width:width, height: 300 }}
               source ={require('../../../utilities/images/onboarding3.webp')} />
     <View style = {styles.mainContainer}>
      <View style = {styles.container}>
       <Text style={styles.heading}>Choose the Option That Best</Text>
       <Text style={{...styles.heading,marginHorizontal:50}}>Describes You</Text>
    </View>
    {cardData.map(item=>{
      return(
        <TouchableOpacity  activeOpacity={1.0} onPress ={()=> setUserType(item.title)}>
        <View 
    style={{
     borderWidth:2,
     borderColor:UserType===item.title?'#5800FF':'white',
     borderRadius:8,marginVertical:10,
     marginHorizontal:5
    }}>
        <Card >
        <Card.Content>
          <View style={{display:"flex",flexDirection:'row'}}>
          <View style={{flex:0.3}}>
             <Image 
               resizeMode={'cover'}
               style={{ width:100, height: 80 ,borderRadius:8}}
               source ={require('../../../utilities/images/onboarding3.webp')} />
            </View>
            <View style={{flex:0.7,paddingLeft:5}}>
            <Title>{item.heading}</Title>
           <Paragraph>{item.paragraph}</Paragraph>
            </View>
    
          </View>
        </Card.Content>
      </Card>
            </View> 
            </TouchableOpacity>
      )
    })}
    
<TouchableOpacity style={styles.proceedButton} onPress={()=>{
  navigation.push("SignUp")
}}> 
   <Text style={styles.proceedButtonText}>Proceed as {UserType}</Text>
 </TouchableOpacity>
 <View style={{display:"flex",flexDirection:"row",marginHorizontal:70,marginVertical:20}}>
  <Text style={{color:"black"}}>Already have an account?</Text><TouchableOpacity onPress={()=>{
      navigation.push("SignIn")
  }}> 
   <Text style={{color:"#5800FF",marginLeft:5}}>Sign in</Text>
 </TouchableOpacity></View>

</View>
</View>
  </ScrollView>
     
    )
  }
