import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
export default function Header( {setModalVisible}) {
    return (
        <View className='bg-white flex-row justify-between p-[10px] items center'>
            <View className='flex-row gap-[7px] items center'>
                <View>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../../../assets/images/user.jpg')}
                    />
                </View>
                <View>
                    <Text className='text-primary font-medium mb-[3px]'>Hoşgeldin Elif</Text>
                    <Text className='text-secondary'>Üye</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <View>
                    <View className='relative w-[36px] h-[36px] bg-[#F8F9FA] justify-center items-center rounded-full'>
                        <Feather name="bell" size={20} color="#343A40" />
                        <View className='absolute right-1 top-1 bg-[#ff3200] justify-center items-center rounded-full w-[10px] h-[10px] text-[7px] text-white '>
                            <Text className='text-[10px] text-white'> 1 </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

}