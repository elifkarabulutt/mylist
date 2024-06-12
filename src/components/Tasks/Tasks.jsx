import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Section from '../shared/Section'
import { Feather } from '@expo/vector-icons';
import ListItem from '../shared/ListItem';
import { getTasks } from '../../taskProcess/taskProcess';


export default function Tasks() {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        getTaskList();
    }, [])

    const getTaskList = async () => {
        const tasks = await getTasks();
        tasks.forEach(doc => {
            const segments = doc.key.path.segments;
            const length = segments.length;
            const taskId=segments[length-1];
            //console.log(segments[length - 1]);
            setTaskList(prevList => [...prevList, {id:taskId,...doc.data()}])
            console.log(taskList)

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
                <ListItem detail={true} />
                {taskList.map((item, index) => (
                    <View key={index}>
                        <ListItem item={item} />
                    </View>
                ))}
            </View>
        </Section>

    )

}