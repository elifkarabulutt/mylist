import React, { useState } from 'react'
import Header from '../components/home/Header';
import List from '../components/home/List';
import PremiumBanner from '../components/shared/PremiumBanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import Completed from '../components/home/Completed';
import {
  ScrollView
} from 'react-native';

import Notification from '../components/home/Notification';
import Modal from '../components/shared/Modal';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header setModalVisible={setModalVisible} />
        <List />
        <PremiumBanner />
        <Completed />
      </ScrollView>

      <Modal setmodalVisible={setModalVisible} modalVisible={modalVisible} animation={'fade'} >
        <Notification setmodalVisible={setModalVisible} />
      </Modal>

    </SafeAreaView>
  )
}


