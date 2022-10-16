import {Text, View,Image, TouchableOpacity,Dimensions, Animated} from "react-native";
import React ,{useEffect}from "react";
import {styles} from "./styles";
import SignUpButton from "../auth/signupButton/SignUpButton";
const {width} = Dimensions.get('window');

const slides = [{
    id: 1,
    src: require('../../utilities/images/onboarding1.jpg'),
    title: "Smooth Order Processing",
    description:"Sync, or create your orders in 30 seconds, and process them based on shipping rates, and estimated pick up and delivery time"
}, 
{
    id: 2,
    src:require('../../utilities/images/onboarding2.jpg'),
    title: "Wider Coverage",
    description: "Ship your orders to over 27,000+ pin codes through 20+ couriers at lowest shipping rates"
},
{
    id: 3,
    src:require('../../utilities/images/onboarding3.webp'),
    title: "Get On Time",
    description: "Ship your orders to over 27,000+ pin codes through 20+ couriers at lowest shipping rates"
}
]


const Indicator = ({scrollX})=>{
    return <View style={{position:"absolute",bottom:150,flexDirection:'row',left:150}}>
        {slides.map((_,i)=>{
         const inputRange =[(i-1) *width ,i *width,(i+1)*width]
         const scale = scrollX.interpolate({
            inputRange,
            outputRange:[0.8,1.4,0.8] 
         })

            return <Animated.View 
            key= {`indicator-${i}`}
            style ={{...styles.indicator,transform:[{
                scale,
            }]}}/>
        })}
    </View>
}

const Onboarding = (props) => {
    useEffect(()=>{
        console.log(props),[]
    })
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <Animated.FlatList
             data={slides}
             horizontal
             decelerationRate="fast"
             bounces={false}
             pagingEnabled
             scrollEventThrottle={32}
             onScroll ={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}],
                {useNativeDriver:false}
             )}
             showsHorizontalScrollIndicator={false}
             renderItem={({ item}) => (
                 <View style={{  flex:1,
                    flexGrow: 1}}>
                    <Image 
                     resizeMode={'contain'}
                     style={{ width, height: 400 }}
                    source ={item.src} />
                    <View style={styles.textContainer}>
                   <Text style={styles.title}>{item.title}</Text>
                   <Text style={styles.description}>{item.description}</Text>
                   </View>
                 </View>
             )}
            />
             <Indicator scrollX ={scrollX} />
         
            <View style={styles.footerContainer}>
            <SignUpButton navigation={props.navigation} />
            
            
            <TouchableOpacity
            onPress={()=>{
                props.navigation.push("SignIn")
            }}
            style={styles.signInButton}>
                 <Text style={{...styles.signupButtonText,color:"#5800FF"}}>Sign In</Text>
            </TouchableOpacity>
            </View>
            </View>
     )
}

export default Onboarding;