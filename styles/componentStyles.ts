import { StyleSheet } from "react-native";

export const monkeyDirectoryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#be3144",
    },
});

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#be3144",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    text: {
        color: "#303841",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        textAlign: "center",
        margin: 32,
        overflow: "hidden",
    },
    textSmall: {
        color: "red",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        textAlign: "center",
        margin: 40,
    },

    monkey: {
        marginBottom: 15,
    },
});

export const buttonStyles = StyleSheet.create({
    buttonContainer: {
        elevation: 12,
        backgroundColor: "#1d1716",
        borderRadius: 25,
        paddingVertical: 10,
        margin: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        color: "#fdf6f6",
        textTransform: "uppercase",
    },
});

export const profileStyles = StyleSheet.create({
    container: {
        backgroundColor: "#be3144",
        padding: 10,
        flex: 1,
    },
    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 10,
        position: "relative",
        borderRadius: 15,
    },
    infoContainer: {
        borderRadius: 15,
        padding: 10,
        flex: 1,
    },
    mainInformation: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        color: "black",
        fontFamily: "Poppins-Bold",
        fontSize: 32,
    },
    age: {
        fontFamily: "Poppins-Regular",
    },
    from: {
        fontFamily: "Poppins-Regular",
        fontSize: 25,
        alignSelf: "center",
    },
    bananas: {
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        color: "black",
        alignSelf: "center",
    },
});

export const profileCardStyles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 22,
        backgroundColor: "#d3d6db",
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        minWidth: 350,
        height: 350,
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    shadow: {
        shadowColor: "#202020",
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 5,
        elevation: 10,
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: "contain",
        marginTop: -20,
    },
    btnText: {
        fontSize: 28,
        fontFamily: "Poppins-Bold",
        color: "#2c2c2c",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 20,
    },
});
