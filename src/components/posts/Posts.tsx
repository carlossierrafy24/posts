import { Post, Comment, User } from '../../data/Interfaces';

interface AppProps {
    posts: Post[];
    comments: Comment[];
    users: User[];
}

type postComment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

type completedPost = {
    title: string;
    name: string;
    username: string;
    body: string;
    comments: postComment[];
};

const Posts: React.FC<AppProps> = (props): JSX.Element => {
    const postsData = props.posts;
    const commentsData = props.comments;
    const usersData = props.users;

    const Final = () => {
        const posts: completedPost[] = [];
        for (let indexPost = 0; indexPost < postsData.length; indexPost++) {
            const post = postsData[indexPost];
            const cmmts = commentsData.filter((comment) => comment.postId === post.id);
            const completed: completedPost = {
                title: postsData[indexPost].title,
                name: usersData.filter((user) => user.id === post.userId)[0].name,
                username: usersData.filter((user) => user.id === post.userId)[0].username,
                body: postsData[indexPost].body,
                comments: cmmts
            };
            // console.log(completed);
            posts.push(completed);
        }
        console.log(posts[0]);

        return posts;
    };

    Final();

    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
};
export default Posts;
