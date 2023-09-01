import React from 'react'
import { ActivityIndicator, StyleSheet, Text, ViewProps, StyleProp, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants';

type Props ={
    label: string;
    onPress: ()=>void;
    loading?: boolean;
    style?: StyleProp<ViewStyle>;
} & ViewProps

function Button(props: Props){
    const { label, onPress, loading, style, ...others} = props
    const containerStyle = [styles.container, style];
    return <TouchableOpacity onPress={onPress} testID='button'>
                <LinearGradient {...others} colors={[Colors.LIGHT_GRAY,Colors.GRAY]} style={containerStyle}>
                    {loading ? (
                        <ActivityIndicator testID='button-loading' size={24}/>
                    ): <Text style={styles.label}>{label}</Text>}
                </LinearGradient>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        paddingHorizontal:15,
        paddingVertical:8,
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        fontSize:19,
        color:'white'
    }
})

export default Button