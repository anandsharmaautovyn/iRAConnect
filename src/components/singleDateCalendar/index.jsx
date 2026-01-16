import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Ionicons from '@react-native-vector-icons/ionicons';
import { vw, Colors, fs } from '@utils';
import moment from 'moment';

const SingleDatePicker = ({ selectedDate, setSelectedDate, handleCalendarPress, isPastDateActive, futureDate }) => {
    const today = moment().format('YYYY-MM-DD');

    const handleDayPress = (day) => {
        const selectedDay = day.dateString;

        if (futureDate === false && moment(selectedDay).isAfter(moment(), 'day')) {
            return;
        }
        if (!isPastDateActive && moment(selectedDay).isBefore(today, 'day')) {
            return;
        }

        setSelectedDate(selectedDay);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{padding: vw(5), backgroundColor: Colors.white }}
                onPress={handleCalendarPress}
            >
                <Ionicons name="close" size={fs(18)} color={'blue'} />
            </TouchableOpacity>

            <Calendar
                onDayPress={handleDayPress}
                maxDate={futureDate ? undefined : today}
                minDate={isPastDateActive ? undefined : today}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        selectedColor: '#00adf5',
                    },
                }}
                style={styles.calendar}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#00adf5',
                    monthTextColor: '#00adf5',
                    textDayFontFamily: 'System',
                    textMonthFontFamily: 'System',
                    textDayHeaderFontFamily: 'System',
                    textDayFontSize: fs(11),
                    textMonthFontSize: fs(14),
                    textDayHeaderFontSize: fs(10),
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // padding: vw(6),
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: vw(3),
        marginHorizontal: vw(10),
        borderRadius: vw(10)
    },
    calendar: {
        elevation: 3,
        padding: vw(3),
    },
});

export default SingleDatePicker;