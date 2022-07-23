import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://www.gannett-cdn.com/-mm-/a8a3ef5517b43be355184f51dbaa7b5768d28597/c=0-25-700-419/local/-/media/2020/12/14/USATODAY/usatsports/MotleyFool-TMOT-59fa3c1f-instagram-reels.jpg?width=1200&disable=upscale&format=pjpg&auto=webp',
        user: USERS[0].user,
        likes: 9090,
        caption: 'An apple a day will keep anyone away if you throw it hard enough.',
        profile_picture: USERS[0].image,
        comments: [
            // {
            //     user: 'sameed',
            //     comment: 'Wow! this is good. Looking forward to see more like this'
            // },
            // {
            //     user: 'user123',
            //     comment: 'Wow! this is good. Looking forward to see more like this'
            // }
        ]
    },
    {
        imageUrl: 'https://www.online-tech-tips.com/wp-content/uploads/2022/05/instagram-1.jpeg',
        user: USERS[1].user,
        likes: 9090,
        caption: 'An apple a day will keep anyone away if you throw it hard enough.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'sameed',
                comment: 'Wow! this is good. Looking forward to see more like this'
            },
            // {
            //     user: 'user123',
            //     comment: 'Wow! this is good. Looking forward to see more like this'
            // }
        ]
    },
    {
        imageUrl: 'https://www.online-tech-tips.com/wp-content/uploads/2022/05/instagram-1.jpeg',
        user: USERS[1].user,
        likes: 9090,
        caption: 'An apple a day will keep anyone away if you throw it hard enough.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'sameed',
                comment: 'Wow! this is good. Looking forward to see more like this'
            },
            {
                user: 'user123',
                comment: 'Wow! this is good. Looking forward to see more like this'
            }
        ]
    }


]