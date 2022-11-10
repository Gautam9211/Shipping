import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    },
    textContainer: {
        marginLeft: 15
    },
    description: {
        width: 360,
        fontSize: 17,
        fontWeight: "400",
        color: "grey",
    },
    footerContainer: {
        marginHorizontal: 25,
        marginBottom: 80
    },
    signupButton: {
        width: 340,
        paddingHorizontal: 120,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: "#5800FF",
    },
    signupButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    signInButton: {
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1.2,
        borderColor: "#5800FF",
        width: 340,
        paddingHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 5,
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#5800FF",
        margin: 10,
    }

})