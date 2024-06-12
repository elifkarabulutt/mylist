import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Section from '../shared/Section';
import ListItem from '../shared/ListItem';
import Modal from '../shared/Modal';
import Goal from './Goal';
import { getTasks } from '../../taskProcess/taskProcess';


export default function List() {
    const [modalVisible, setModalVisible] = useState(false);

    const[taskList,setTaskList]=useState([]);
    
    useEffect(()=>{
        getTaskList();
        }, [])

    const getTaskList=async ()=>{
        const tasks =await getTasks();
        tasks.forEach(doc=>{
            setTaskList(prevList=>[...prevList,doc.data()])
        })
    }

    return (
        <Section>

            <View className='flex-row justify-between'>
                <Text className='text-[16px] text-primary font-medium'>Yapılacaklar Listesi </Text>
                <TouchableOpacity className='flex-row gap-[7px] items-center '>
                    <Feather name="plus-circle" size={16} color="#3B5BDB" />
                    <Text className='text-main text-[13px]' >Task Ekle</Text>
                </TouchableOpacity>
            </View>

            <View className='mt-[10px]'> 

          {taskList.map((item,index)=>(
            <View key ={index}>
                <ListItem item={item}/>
            </View>
          ))}
            </View>
            <TouchableOpacity className='mt-[10px]' onPress={()=>setModalVisible(true)}>
                <Text className='text-center text-secondary text-[11px] underline'>Hedefini Gör</Text>
            </TouchableOpacity>

            <Modal setModalVisible={setModalVisible}modalVisible={modalVisible}>
                <Goal setModalVisible={setModalVisible}/>

            </Modal>
        </Section>
    )
}