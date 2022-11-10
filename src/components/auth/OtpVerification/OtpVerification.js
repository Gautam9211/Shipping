import React, { useState, useRef } from "react"
import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler"
import { styles } from "./styles"

export default OtpVerification = () => {
    const [otp, setOtp] = useState("")
    const [resendTime, setResendTime] = useState(30)
    let textInput = React.createRef(null);
    const lengthInput = 6;
    let clockCall = null;

    const onChangeText = (val) => {
        setOtp(val)
    }


    useEffect(() => {
        setTimeout(() => textInput.focus(), 250);
    }, [])

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock()
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    }, [resendTime])

    const decrementClock = () => {
        if (resendTime > 0) {
            setResendTime(resendTime - 1)
        }
    }


    useEffect(() => {
        console.log(otp)
    }, [otp])

    return (
        <View>
            <Text style={styles.textTile}>Enter your OTP code sent via SMS</Text>
            <View>
                <TextInput
                    autoFocus={true}
                    ref={(input) => { textInput = input }}
                    onChangeText={onChangeText}
                    style={{ width: 0, height: 0 }}
                    value={otp}
                    maxLength={lengthInput}
                    returnKeyType="done"
                    keyboardType="numeric"
                />
                <View style={styles.containerInput}>
                    {
                        Array(lengthInput).fill().map((data, index) => {
                            return (
                                <View key={index} style={styles.cellView}>
                                    <Text onPress={() => textInput.focus()}
                                        style={styles.cellText}>

                                        {otp && otp.length > 0 ? otp[index] : ''}
                                    </Text>
                                </View>)
                        })
                    }
                </View>


                <TouchableOpacity style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                    marginRight: 50,
                    marginVertical: 10
                }} disabled={resendTime === 0 ? false : true} onPress={() => {
                    console.log("resendapi")
                    setResendTime(30)
                }}>
                    <Text style={resendTime === 0 ? { color: "black", fontWeight: "500" } : {}}>Resend OTP {resendTime > 0 ? <Text>({resendTime})</Text> : null}</Text>
                </TouchableOpacity>

                <View style={{
                    width: 340,
                    paddingVertical: 2,
                    borderRadius: 5,
                    backgroundColor: "#5800FF",
                    marginTop: 30,
                    marginLeft: 29,
                    alignItems: "center"

                }}>
                    <Button labelStyle={{ color: "white", fontSize: 16 }}>Verify</Button>
                </View>



                {/* <View style={styles.bottomView}>
                    <TouchableOpacity>
                        <View style={styles.btnChangeNumber}>
                            <Text style={styles.textChange}>change number</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.btnResend}>
                            <Text style={styles.textResend}>Resend OTP </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
}