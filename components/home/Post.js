import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { db, firebase } from '../../firebase'

import { icons } from '../../constants'

const Post = ({ post }) => {
    const handleLike = post => {
        const currentLikeStatus = !post.likes_by_users.includes(
            firebase.auth().currentUser.email
        )

        db.collection('users')
        .doc(post.owner_email)
        .collection('posts')
        .doc(post.id)
        .update({
            likes_by_users: currentLikeStatus
                ? firebase.firestore.FieldValue.arrayUnion(
                    firebase.auth().currentUser.email
                )
                : firebase.firestore.FieldValue.arrayRemove(
                    firebase.auth().currentUser.email
                )
        })
        .then(() => {
            console.log('Document successfully updated!')
        })
        .catch(error => {
            console.log('Error updating document: ', error)
        })
    }
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={ 3 } orientation='vertical' />
            <PostHeader post={ post } />
            <PostImage post={ post } />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} handleLike={handleLike} />
                <Likes post={ post } />
                <Caption post={ post } />
                { !!post.comments.length && (
                    <CommentsSection post={ post } />
                )}
                <Comments post={ post } />
            </View>
            
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center'
        }}
    >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_picture }} style={ styles.story } />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{ post.user }</Text>
        </View>

        <Text style={{ color: 'white', fontWeight: '900'}}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View
        style={{
            width: '100%',
            height: 450
        }}
    >
        <Image 
            source={{ uri: post.imageUrl }}
            style={{
                height: '100%',
                resizeMode: 'cover'
            }}
        />
    </View>
)

const PostFooter = ({ post , handleLike }) => (
    <View style={{ flexDirection: 'row' }}>
        <View style={ styles.leftFooterIconsContainer }>
            <TouchableOpacity onPress={() => handleLike(post)}>
                <Image 
                    style={ styles.footerIcon } 
                    source={ post.likes_by_users.includes(firebase.auth().currentUser.email) 
                            ? icons.like_red_icon
                            : icons.like_icon } 
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={ styles.footerIcon } source={ require('../../assets/comment-icon.png') } />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={ styles.footerIcon } source={ require('../../assets/share.png') } />
            </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity>
                <Image style={ styles.footerIcon } source={ require('../../assets/save-icon.png') } />
            </TouchableOpacity>
        </View>
    </View>
)

// const Icon = ({ imgStyle, imgUrl }) => (
//     <TouchableOpacity>
//         <Image style={ imgStyle } source={{ uri: imgUrl }} />
//     </TouchableOpacity>
// )

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{ post.likes_by_users.length.toLocaleString('en') } likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600'}}>{ post.user }</Text>
            <Text> { post.caption }</Text>
        </Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'grey' }}>
            View{ post.comments.length > 1 ? ' all' : '' } { post.comments.length }
            { post.comments.length > 1 ? ' comments' : ' comment' }
        </Text>
    </View>
)

const Comments = ({ post }) => (
    <View>
        { post.comments.map((comment, index) => (
            <View key={ index } style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600'}}>{ comment.user }</Text>
                    <Text> { comment.comment }</Text>
                </Text>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    story: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 6,
      borderWidth: 1.6,
      borderColor: '#ff8501'
  
    },
    footerIcon: {
        width: 25,
        height: 25
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '33%',
        justifyContent: 'space-between'
    }
})

export default Post