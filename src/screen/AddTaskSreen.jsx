import { Text, View, Image,TouchableOpacity ,DropDown} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import TextArea from '../components/shared/TextArea';
import ErrorInfo from '../components/messageHandling/ErrorInfo';
import CustomTextInput from '../components/shared/CustomTextInput';
import { setErrorMessage } from '../redux/generalSlice';
import { inputReducer } from '../reducer/inputReducer'; 
import React, { useReducer } from 'react';
import Button from '../components/shared/Button';


export default function AddTaskScreen() {
    const reduxDispatch = useDispatch();
    const {errorMessage} = useSelector((state) => state.general);

    const initialState = {
        title: "",
        icon: "",
        description: ""
    }

    const [state, dispatch] = useReducer(inputReducer, initialState);

    const addTaskTemplate = () => {
        if (Boolean(state.title.trim()) && Boolean(state.description.trim())) {
            addTask(state);
            dispatch({ type: 'title', value: "" });
            dispatch({ type: 'description', value: '' });
        } else {
            reduxDispatch(setErrorMessage({ statusCode: true, message: "Lütfen alanları doldurunuz" }))
        }
    }

    return (
        <View className='flex-1 m-[18px] p-[10px] rounded-[6px] bg-white'>
            <View className='w-full items-center'>
            <Image source={require('../../assets/images/AddTaskScreen.png')}  style={{ width: 200, height: 200 }}  /> 
            </View>
            <View className='mt-5 w-full'>
                <CustomTextInput dispatch={dispatch} state={state} title="Başlık" type="title" />
            </View>
           <View>
            <DropDown type="icon" dispatch={dispatch} state={state}/>
           </View>
           <View className='mt-5 w-full'>
            <TextArea type ="description" dispatch={dispatch} state={state} title="Açıklama"/>
           </View>
           <TouchableOpacity className='w-1/2 mt-5' onPress={addTaskTemplate}>
            <Button title={"Ekle"}/>
           </TouchableOpacity>

           {
            errorMessage.statusCode && <ErrorInfo errorMessage={errorMessage}/>
           }
        </View>
    );
}





