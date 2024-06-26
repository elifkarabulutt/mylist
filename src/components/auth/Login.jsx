import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useReducer } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { loginForm } from '../../utils/const/authForm';
import { setLoader, setErrorMessage } from '../../redux/generalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { inputReducer } from '../../reducer/inputReducer';
import { loginWithEmailAndPassword } from '../../auth';
import { errorMessages } from '../../utils/const/errorHandling';
import ErrorInfo from '../messageHandling/ErrorInfo';
import { validation } from '../../validation';

export default function Login({ navigation }) {

    const reduxDispatch = useDispatch();
    const { errorMessage } = useSelector((state) => state.general);

    const initialState = {
        email: '',
        password: '',
    }

    const [state, dispatch] = useReducer(inputReducer, initialState);

    const loginApp = async () => {
        try {

            const validationResponse = await validation(state);
             console.log("Validation Response:",validationResponse);

            if (validationResponse) {
                reduxDispatch(setLoader());
                await loginWithEmailAndPassword(state.email, state.password);
           
            
            }

            else {
                reduxDispatch(setErrorMessage({ statusCode: true,[validationResponse.message]:validationResponse.message}));
            }
        }

        catch (error) {
            reduxDispatch(setErrorMessage(errorMessages(error.code)));
        }
    }

    return (
        <View className='bg-white flex-1 items-center justify-center px-5'>

            <View>
                <Image
                    source={require('../../../assets/images/auth-logo.png')}
                />

            </View>
            <View className='w-full'>
                <FlatList
                    data={loginForm}
                    renderItem={({ item }) => (
                        <View className='mt-5 w-full'>
                            <Input item={item} dispatch={dispatch} state={state} />
                        </View>

                    )}
                    keyExtractor={item => item.id}
                />
            </View>


            <TouchableOpacity onPress={loginApp} className='mt-5 w-full'>
                <Button title={'Giriş Yap'} />
            </TouchableOpacity>

            <View className='w-full mt-5 flex-row'>
                <Text className='text-primary'>Hala bir hesabınız yok mu?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className='font-[600] ml-[7px] text-primary underline'>Kayıt Olun</Text>
                </TouchableOpacity>
            </View>

            {
                errorMessage.statusCode && <ErrorInfo errorMessage={errorMessage} />
            }


        </View>


    )
}