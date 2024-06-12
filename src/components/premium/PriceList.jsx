import { Text, View ,FlatList} from 'react-native'
import React from 'react'
import { premiuPackages } from '../../utils/const/PremiumPrice'
import PriceItem from  './PriceItem'

export default function PriceList() {
    return (

  <View>
        <FlatList
        data={premiuPackages}
        renderItem={({item}) => <PriceItem item={item}/>}
        keyExtractor={item=>item.id}
        />
</View>

    )
}