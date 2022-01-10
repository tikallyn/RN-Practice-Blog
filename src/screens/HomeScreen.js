import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Show', { id: item.id })}
                    >
                        <View style={styles.row}>
                            <Text style={styles.postTitle}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <FontAwesome name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 5,
        borderColor: 'gray',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5
    },
    postTitle: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default HomeScreen