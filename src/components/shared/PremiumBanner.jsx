import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


export default function PremiumBanner() {
    return (


        <View className='mt-5 bg-main rounded-[6px] mx-[10px] h-[125px] px-[10px] items-center flex-row justify-between'>
            <View>
                <View>
                    <Text className='text-[14px] text-white font-medium mb-[3px]'>Premium'a Geçmeninn Tam Zamanı</Text>
                    <Text className='text-[12px] text-white '> Premium ile tariflerinizi ön plana çıkarın</Text>
                </View>
                <TouchableOpacity className='mt-[10px] bg-white justify-center items-center w-10/12 h-[32px] rounded-[24px]'>
                    <Text className='text-[13px] text-primary font-medium'>7 gün ücretsiz</Text>
                </TouchableOpacity>
            </View>
            <View className='mt-5'>
                <Image
                    style={{ width: 100, height: 100, alignSelf: 'flex-end' }}
                    className='w-full h-full'
                    source={require('../../../assets/images/premium-banner.png')}
                />
            </View>
        </View>
    )
}