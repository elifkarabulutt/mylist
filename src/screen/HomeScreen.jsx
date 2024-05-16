import React from 'react'
import Header from '../components/home/Header';
import List from '../components/home/List';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaView className='flex-1'>
          <Header/>
          <List/>
      
        </SafeAreaView>
    )
}


