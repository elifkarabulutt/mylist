import { Image, Text, View } from 'react-native'
import React from 'react' 


export default function Header() {
  return (
    <View className='bg-main h-[260px] flex justify-center px-5'>
      <View className='justify-center items-center -rotate-12 bg-primary w-1/2 rounded-t-[6px] rounded-br-[6px]'>
        <Text className='text-white text-[16px]'>TodoTrack</Text>
      </View>
      <View className='mt-8 w-4/5'>
        <Text className='text-white text-[20px] font-bold tracking-[2px]'>Premium Avantajlarını Doyasıya Yaşa</Text>
      </View>
      <View className='absolute right-0 -z-10 '>
        <Image 
          source={require('../../../assets/images/premium-banner.png')}
          style={{ width: 180, height: 180 }} 
         />
      </View>
    </View>
  )
}
