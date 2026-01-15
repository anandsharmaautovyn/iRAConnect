import { useState } from "react"
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

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
        // <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center' }}>
            <KeyboardAvoidingView style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center' }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                    <Text style={{ color: '#00c0fa', fontSize: 40, fontWeight: 'bold' }}>TATA MOTORS</Text>
                    <Text style={{ color: '#848484', fontSize: 20 }}>Dealer Vehicle Pickup</Text>
                </View>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={{ color: '#848484', paddingVertical: 7 }}>Mobile Number</Text>
                    <TextInput
                        style={styles.otpTextInputStyle}
                        placeholder="Enter your 10-digit mobile number"
                        placeholderTextColor={"grey"}
                        keyboardType='numeric'
                        value={state?.mobileNumber}
                        onChangeText={handleMobileNum}
                    />
                </View>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={{ color: '#848484', paddingVertical: 7 }}>Password</Text>
                    <TextInput
                        style={styles.otpTextInputStyle}
                        placeholder="Enter your Password"
                        placeholderTextColor={"grey"}
                        value={state?.password}
                        onChangeText={handlePassword}
                    // onSubmitEditing={handlePress}
                    />
                </View>
                <View style={{ paddingHorizontal: 25, paddingVertical: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#252525', borderRadius: 7, padding: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#848484', }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        // </View>
    )
}


const styles = StyleSheet.create({
    otpTextInputStyle: {
        fontSize: 17,
        color: '#848484',
        backgroundColor: '#1a1a1a',
        borderRadius: 7
    },
})

export default Login