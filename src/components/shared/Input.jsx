import { Text, View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Input({ title ,icon}) {


    return (

        <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative' >
            <View className='absolute left-[10px] top-[12px]'>{icon}</View>
            <TextInput className='h-full px-[37px] text-[13px]'
                placeholder={title}
            />
            <Text className='text-[11px]text-primary absolute -top-[8px] left-[10px]bg-white 
            px-[10px] border-1-[1px] border-r-[1px]border-border'>{title}</Text>
        </View>


    )
}