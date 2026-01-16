import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Avani from '../../assets/images/Avani'
import Map from '../../assets/images/Maps'
import Fontawesome from '@react-native-vector-icons/fontawesome';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { fs, vh, vw, Fonts, Colors } from '@utils'
import { useState } from "react";
import moment from 'moment';
import SingleDatePicker from '../../components/singleDateCalendar/index'
import TimePickerModal from '../../components/timePickerModal/index'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const DoorStep = () => {
    const [state, setState] = useState({
        mobileNumber: "",
        password: '',
        isCalendarShow: false,
        isTimeModalVisible: false
    })

    const handleMobileNum = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "")
        setState(prev => ({ ...prev, mobileNumber: numericValue }))
    };

    const handleDateSelection = (date) => {
        setState(prev => ({ ...prev, selectedDate: moment(date).format('DD-MM-YYYY'), isCalendarShow: false }))
    }

    const handleCalendarPress = () => {
        setState(prev => ({ ...prev, isCalendarShow: !prev.isCalendarShow }))
    }

    const handleTimeModalPress = () => {
        setState((prev) => ({ ...prev, isTimeModalVisible: !prev.isTimeModalVisible }));
    };

    const handleSetTime = (time) => {
        setState((prev) => ({
            ...prev,
            selectedTime: time,
        }));
    };

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, paddingHorizontal: vw(10),paddingVertical:vh(10), backgroundColor: '#081528' }}>\
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{ overflow: 'hidden', height: vh(120), width: vw(120), borderRadius: vh(15), width: '30%' }}>
                        <Avani width={vw(120)} height={vh(190)} />
                    </View>
                    <View style={{ paddingLeft: vw(15), width: '65%' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: fs(18) }}>Booking Details</Text>
                        <Text style={{ color: '#93A2B9', fontWeight: '400', fontSize: fs(14), paddingVertical: vh(8) }}>Your booking is confirmed.16 Jan 2026 | 10:00 AM</Text>
                        <Text style={{ color: Colors.white, fontWeight: '600', fontSize: fs(16) }}>You will receive the driver details one day before.</Text>
                    </View>
                </View>
                <Text style={{ color: 'white', fontWeight: '600', fontSize: fs(24), paddingVertical: vh(20) }}>Would you like to book at your convenience?</Text>
                <View style={styles.pH15}>
                    <Text style={styles.text}>Location</Text>
                    <TextInput
                        style={styles.otpTextInputStyle}
                        placeholder="Select a location"
                        placeholderTextColor={"white"}
                        value={state?.mobileNumber}
                        onChangeText={handleMobileNum}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={styles.text}>Date for pick</Text>
                        <TouchableOpacity onPress={handleCalendarPress} style={{ backgroundColor: '#0e1d34', borderRadius: vh(5), paddingVertical: vh(10), paddingHorizontal: vw(5), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: Colors.white }}>{state?.selectedDate || "Select a date"}</Text>
                            <Fontawesome name="calendar-o" size={vw(18)} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '48%' }}>
                        <Text style={styles.text}>Time</Text>
                        <TouchableOpacity onPress={handleTimeModalPress} style={{ backgroundColor: '#0e1d34', borderRadius: vh(5), paddingVertical: vh(10), paddingHorizontal: vw(5), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: Colors.white }}>{state?.selectedTime || "Select a time"}</Text>
                            <MaterialIcons name="access-time" size={vw(18)} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{ marginVertical: vh(20), backgroundColor: '#17AA9C', paddingVertical: 10, alignItems: 'center', borderRadius: vh(5) }}>
                    <Text style={{ color: Colors.white, fontSize: fs(16), fontWeight: '600' }}>Booking Appointment</Text>
                </TouchableOpacity>

                <View style={{ overflow: 'hidden', height: vh(160), width: '100%', borderRadius: vh(15), }}>
                    <Map width={'100%'} height={vh(220)} />
                </View>

                <TouchableOpacity style={{ marginVertical: vh(20), backgroundColor: '#17AA9C', paddingVertical: 10, alignItems: 'center', borderRadius: vh(5) }}>
                    <Text style={{ color: Colors.white, fontSize: fs(16), fontWeight: '600' }}>Customer Feedback</Text>
                </TouchableOpacity>

            </View>
            {state.isCalendarShow && (
                <SingleDatePicker
                    selectedDate={state?.selectedDate}
                    setSelectedDate={handleDateSelection}
                    handleCalendarPress={handleCalendarPress}
                    futureDate={true}
                    isPastDateActive={true}
                />
            )}

            {state?.isTimeModalVisible && (
                <TimePickerModal
                    mode="time"
                    calendarShow={state.isTimeModalVisible}
                    setCalendarShow={handleTimeModalPress}
                    setValue={handleSetTime}
                />
            )}
        </SafeAreaProvider>
    )
}

export default DoorStep;

const styles = StyleSheet.create({
    otpTextInputStyle: {
        fontSize: fs(13),
        color: Colors.grey,
        backgroundColor: '#0e1d34',
        borderRadius: vh(7),
        paddingLeft: vw(15),
    },
    text: {
        color: Colors.grey,
        paddingVertical: vh(7),
    },
})