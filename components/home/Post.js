import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={ 3 } orientation='vertical' />
            <PostHeader post={ post } />
            <PostImage post={ post } />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={ post } />
                <Caption post={ post } />
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

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={ styles.leftFooterIconsContainer }>
            <TouchableOpacity>
                <Image style={ styles.footerIcon } source={ require('../../assets/like-heart-icon.png') } />
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
        <Text style={{ color: 'white', fontWeight: '600' }}>{ post.likes.toLocaleString('en') } likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <Text style={{ color: 'white' }}>{ post.user }</Text>
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