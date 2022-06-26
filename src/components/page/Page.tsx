import React from 'react';
import { User, Post, Comment } from '../../data/Interfaces';
import Card from '../card/Card';

type Props = {
    post: Post[];
    comment: Comment[];
    users: User[];
};

const Page = (props: Props) => {
    const { post, comment, users } = props;

    const selectCurrentUser = (id: number) => {
        const user = users.find((user) => user.id === id);
        return user;
    };

    const selectCurrentPost = (id: number) => {
        const cm = comment.filter((comment) => comment.postId === id);
        return cm;
    };

    return (
        <React.Fragment>
            <div className="grid-post-container-scroll mt-5 scroll-m-2 overflow-y-auto">
                <div className="grid-post-container">
                    {post.map((post) => (
                        <Card key={post.id} post={post} comments={selectCurrentPost(post.id)} user={selectCurrentUser(post.userId)} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Page;
