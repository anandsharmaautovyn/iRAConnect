import { View } from "react-native";
import DatePicker from "react-native-date-picker";
import moment from "moment";

const TimePickerModal = ({
  mode = "time",
  calendarShow,
  setCalendarShow,
  setValue,
  fromDate,
  toDate,
}) => {
  const maxDate =
    toDate && moment(toDate).isValid()
      ? moment(toDate).toDate()
      : undefined;

  const minDate =
    fromDate && moment(fromDate).isValid()
      ? moment(fromDate).toDate()
      : undefined;

  return (
    <View>
      <DatePicker
        modal
        open={calendarShow}
        mode={mode}
        date={new Date()}
        maximumDate={maxDate}
        minimumDate={minDate}
        is24hourSource="device"
        textColor="#000"
        theme={'light'}
        buttonColor={'#008080'}
        onConfirm={(selectedDate) => {
          setCalendarShow(false);
          if (mode === "time") {
            const formattedTime = moment(selectedDate).format("hh:mm A");
            setValue(formattedTime);
          } else {
            setValue(selectedDate);
          }
        }}
        onCancel={() => {
          setCalendarShow(false);
        }}
      />
    </View>
  );
};

export default TimePickerModal;
