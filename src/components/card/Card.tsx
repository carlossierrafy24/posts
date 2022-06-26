import React from 'react';
import { User, Post, Comment } from '../../data/Interfaces';

interface Props {
    post: Post;
    comments: Comment[];
    user: User | undefined;
}

const Card = (props: Props) => {
    const { post, comments, user } = props;

    const handleViewComments = () => {
        console.log('View comments');
    };

    return (
        <React.Fragment>
            <div className="post-container row-auto h-auto bg-blue-200">
                <div className="col-">
                    <div className="flex-row flex items-center p-2">
                        <div className="post-avatar ml-1 mr-3">
                            <img src="https://i.pravatar.cc/50" className="rounded-full" alt="user_img" />
                        </div>
                        <div className="">
                            <p>{user?.name}</p>
                        </div>
                    </div>
                    <div className="text-lg text-center mb-3 font-bold">
                        <h2>{post.title}</h2>
                    </div>
                    <div className="post-body-text">
                        <p>"{post.body}"</p>
                    </div>
                    <div className="">
                        <button className="comment-user-btn" onClick={handleViewComments}>
                            View {comments.length} comments
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;
