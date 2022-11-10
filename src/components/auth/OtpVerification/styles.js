import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    cellView: {
        paddingVertical: 1,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: "center",
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: "center",
        fontSize: 22
    },

    textTile: {
        marginVertical: 50,
        fontSize: 23,
        textAlign: "center",
        fontWeight: "600",
        color: "black"
    },

    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    bottomView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 50,
        alignItems: "center"
    },
    btnChangeNumber: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    textChange: {
        alignItems: "center"
    },
    btnResend: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    textResend: {
        alignItems: "center"
    }

})