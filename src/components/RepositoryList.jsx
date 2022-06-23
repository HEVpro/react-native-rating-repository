import React from 'react'
import {Text, View, FlatList} from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorCompontent={() => <Text> </Text>}
            renderItem={({item: repo}) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
}
export default RepositoryList