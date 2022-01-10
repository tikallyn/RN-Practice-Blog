import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const HomeScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen