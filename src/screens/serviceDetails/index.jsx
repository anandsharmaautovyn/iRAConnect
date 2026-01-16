import { Text, TouchableOpacity, View } from "react-native"
import Avani from '../../assets/images/Avani'
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { fs, vh, vw, Fonts, Colors } from '@utils'


const ServiceDetails = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: vw(10), backgroundColor: '#081528' }}>
            <Text>Hello</Text>
            <View style={{ flexDirection: 'row', marginTop: vh(30), alignItems: 'center' }} >
                <View style={{ overflow: 'hidden', height: vh(120), width: vw(120), borderRadius: vh(15) }}>
                    <Avani width={vw(120)} height={vh(190)} />
                </View>
                <View style={{ paddingLeft: vw(10) }}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: fs(18) }}>Service Status</Text>
                    <Text style={{ color: '#17AA9C', fontWeight: '600', fontSize: fs(16) }}>Your Vehicle is ready for delivery</Text>
                </View>
            </View>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: fs(24), paddingVertical: vh(20) }}>Service Details</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#17AA9C', fontWeight: '600', fontSize: fs(18) }}>Stage</Text>
                <Text style={{ color: '#17AA9C', fontWeight: '600', fontSize: fs(18) }}>Status</Text>
            </View>
            <View style={{ paddingVertical: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: fs(16) }}>Vehicle Gate In</Text>
                    <View
                        style={{
                            width: vw(30),
                            height: vw(30),
                            borderWidth: vw(1),
                            borderColor: '#1b263c',
                            borderRadius: vw(15),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1b263c',
                        }}
                    >
                        <MaterialIcons name="check" size={vw(18)} color="white" />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingRight: vw(15) }}>
                    <View />
                    <View style={{ backgroundColor: '#1b263c', height: vh(40), width: vw(1), }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: fs(16) }}>Vehicle Estimation Cost</Text>
                    <View
                        style={{
                            width: vw(30),
                            height: vw(30),
                            borderWidth: vw(1),
                            borderColor: '#1b263c',
                            borderRadius: vw(15),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1b263c',
                        }}
                    >
                        <MaterialIcons name="check" size={vw(18)} color="white" />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingRight: vw(15) }}>
                    <View />
                    <View style={{ backgroundColor: '#1b263c', height: vh(40), width: vw(1), }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: fs(16) }}>Vehicle Under Service</Text>
                    <View
                        style={{
                            width: vw(30),
                            height: vw(30),
                            borderWidth: vw(1),
                            borderColor: '#1b263c',
                            borderRadius: vw(15),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1b263c',
                        }}
                    >
                        <MaterialIcons name="check" size={vw(18)} color="white" />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingRight: vw(15) }}>
                    <View />
                    <View style={{ backgroundColor: '#1b263c', height: vh(40), width: vw(1), }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#17AA9C', fontWeight: '500', fontSize: fs(16) }}>Vehicle Gate Out</Text>
                    <View
                        style={{
                            width: vw(30),
                            height: vw(30),
                            borderWidth: vw(1),
                            borderColor: '#1b263c',
                            borderRadius: vw(15),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#17AA9C',
                        }}
                    >
                        <MaterialIcons name="check" size={vw(18)} color="white" />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#17AA9C', paddingVertical: 10, alignItems: 'center', borderRadius: vh(5) }}>
                <Text style={{ color: Colors.white, fontSize: fs(16), fontWeight: '600' }}>Feedback</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ServiceDetails;