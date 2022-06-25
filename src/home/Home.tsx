import React from 'react';
import NavBar from '../components/navBar/NavBar';
import { Post, Comment, User } from '../data/Interfaces';
import axios, { AxiosResponse } from 'axios';
import Posts from '../components/posts/Posts';

const { REACT_APP_POSTS_API, REACT_APP_COMMENTS_API, REACT_APP_USERS_API } = process.env;

let pages: { link: string; text: string }[] = [
    { link: '', text: 'Home' },
    { link: 'signin', text: 'Sign In' }
];

const Home: React.FC = function () {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [comments, setComments] = React.useState<Comment[]>([]);
    // getting aditional data for improve UX
    const [users, setUsers] = React.useState<User[]>([]);
    // axios get
    const getPosts = async () => {
        axios.get<Post[]>(`${REACT_APP_POSTS_API}`).then((res: AxiosResponse) => {
            setPosts(res.data);
        });
    };
    const getComments = async () => {
        axios.get<Comment[]>(`${REACT_APP_COMMENTS_API}`).then((res: AxiosResponse) => {
            setComments(res.data);
        });
    };
    const getUsers = async () => {
        axios.get<User[]>(`${REACT_APP_USERS_API}`).then((res: AxiosResponse) => {
            setUsers(res.data);
        });
    };
    // get data
    React.useEffect(() => {
        getPosts();
        getComments();
        getUsers();
    }, []);

    return (
        <div>
            <NavBar pages={pages} />
            <div>
                <h1>Home</h1>
                <Posts posts={posts} comments={comments} users={users} />
            </div>
        </div>
    );
};

export default Home;
