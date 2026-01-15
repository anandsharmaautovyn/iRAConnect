import { StyleSheet, Text, TextInput, View } from "react-native"
import { Fonts } from '../../utills'
import { useState } from "react"


const Login = () => {
    const [state, setState] = useState({
        inputValue: ''
    });
    const handleChange =t=> {}
    const handlePress =t=> {}
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ color: '#00c0fa', fontSize: 40 }}>TATA MOTORS</Text>
                <Text style={{ color: 'white' }}>Dealer Vehicle Pickup</Text>
            </View>
            <View>
                <Text>Mobile Number</Text>
                <TextInput
                    style={styles.otpTextInputStyle}
                    placeholder="MSPIN"
                    placeholderTextColor={"grey"}
                    keyboardType='numeric'
                    value={state?.inputValue}
                    onChangeText={handleChange}
                    onSubmitEditing={handlePress}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    otpTextInputStyle: {
        fontSize: 17,
        flex: 1,
        color: 'black',
        fontFamily: Fonts.themeFontBold,
    },
})

export default Login
