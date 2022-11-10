import React, { useState, useRef } from "react"
import { View, Text, Dimensions, StyleSheet, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get('window');
import { Button } from "react-native-paper"
import PhoneInput from "react-native-phone-number-input";

export default OtpScreen = ({ navigation }) => {
    const [value, setValue] = useState("");
    const phoneInput = useRef(null)
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);

    const onNext = () => {
        const checkValid = phoneInput.current?.isValidNumber(value);
        if (!checkValid) {
            Alert.alert("Enter a valid Number")
            return;
        }

        if (value === "8077048783") {
            navigation.push("SignIn")
        }
        else {
            navigation.push("OtpVerification")
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
            <ScrollView style={{ backgroundColor: "#fff" }}>

                <View style={{ marginVertical: 20, marginHorizontal: 25 }}>
                    <Text style={{ fontSize: 30, color: "black", marginTop: 50 }}>
                        Enter your Phone number
                    </Text>
                    <Text style={{ fontSize: 15, color: "grey", marginTop: 10 }}>
                        You will receive SMS on this number
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
                        <PhoneInput
                            style={{ backgroundColor: "white" }}
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            containerStyle={{
                                borderRadius: 0,
                                width: '98%',
                                height: 50,
                                backgroundColor: "#fff"

                            }}
                            textInputStyle={{ height: 70, color: "black", marginTop: 5 }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            withDarkTheme
                            withShadow
                            autoFocus
                        />
                        {/* <Button onPress={() => setValue("")} style={{ marginRight: 10, marginVertical: 3 }}>✖</Button> */}
                    </View>
                    <View style={{
                        width: 340,
                        paddingHorizontal: 140,
                        paddingVertical: 3,
                        borderRadius: 5,
                        backgroundColor: "#5800FF",
                        marginTop: 30

                    }}>
                        <Button onPress={() => onNext()}
                            labelStyle={{ color: "white", fontSize: 18 }}>Next</Button>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}
