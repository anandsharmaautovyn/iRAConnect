import { useState } from "react"
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { fs, vh, Fonts, Colors } from '@utils'

const Login = () => {
    const [state, setState] = useState({
        mobileNumber: "",
        password: ''
    })

    const handleMobileNum = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "")
        setState(prev => ({ ...prev, mobileNumber: numericValue }))
    };

    const handlePassword = (text) => {
        setState(prev => ({ ...prev, password: text }))
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>TATA MOTORS</Text>
                <Text style={styles.subHeader}>Dealer Vehicle Pickup</Text>
            </View>
            <View style={styles.pH15}>
                <Text style={styles.text}>Mobile Number</Text>
                <TextInput
                    style={styles.otpTextInputStyle}
                    placeholder="Enter your 10-digit mobile number"
                    placeholderTextColor={"grey"}
                    keyboardType='numeric'
                    value={state?.mobileNumber}
                    onChangeText={handleMobileNum}
                />
            </View>
            <View style={styles.pH15}>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.otpTextInputStyle}
                    placeholder="Enter your Password"
                    placeholderTextColor={"grey"}
                    value={state?.password}
                    onChangeText={handlePassword}
                />
            </View>
            <View style={styles.p15}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        // </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexGrow: 1,
        justifyContent: 'center'
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: vh(10)
    },
    otpTextInputStyle: {
        fontSize: fs(17),
        color: Colors.grey,
        backgroundColor: Colors.darkGrey,
        borderRadius: vh(7),
        paddingLeft: vh(10),
    },
    text: {
        color: Colors.grey,
        paddingVertical: vh(7),
    },
    headerText: {
        color: Colors.lightBlue,
        fontSize: fs(40),
        fontFamily: Fonts.themeFontBold
    },
    subHeader: {
        color: Colors.grey,
        fontSize: fs(20)
    },
    button: {
        backgroundColor: Colors.lightGrey,
        borderRadius: vh(7),
        padding: vh(10),
        alignItems: 'center'
    },
    pH15: {
        paddingHorizontal: vh(15)
    },
    p15: {
        padding: vh(15)
    },
    loginText: {
        color: Colors.grey
    }
})

export default Login