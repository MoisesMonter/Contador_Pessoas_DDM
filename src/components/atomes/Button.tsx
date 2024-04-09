import { StyleSheet,TouchableOpacity,View,Text } from "react-native";

type props ={
    type_text: string
    onPress:()=>void

}

export function Button(props: props){
    return(<>
        <TouchableOpacity onPress={props.onPress} >
            <View style={[style.container]}>
                <Text style={[style.text_button]}>{props.type_text}</Text>
            </View>
        </TouchableOpacity>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        margin:20,
        padding:20,
        width:200,
        backgroundColor:'#2E2252',
        alignItems:'center',
        borderRadius:10,

    },
    text_button:{
        fontSize:20,
        color:'white',
    }
})