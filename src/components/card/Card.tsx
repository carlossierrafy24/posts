import React from 'react';
import { User, Post, Comment } from '../../data/Interfaces';
import Swal from 'sweetalert2';

interface Props {
    post: Post;
    comments: Comment[];
    user: User | undefined;
}

const Card = (props: Props) => {
    const { post, comments, user } = props;

    const generateRandomDate = () => {
        // random date between 1/1/2019 and today with hours minutes
        const date = new Date();
        const randomDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - Math.floor(Math.random() * date.getDate()), Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
        return `On ${randomDate.toLocaleDateString()} at ${randomDate.toLocaleTimeString().substr(0, 5)}`;
    };

    const commentsList = comments
        .map((comment) => {
            return `
                        <div class="comment-container">
                            <div class="comment-body">"${comment.body}"</div>
                            <div class="comment-date">${generateRandomDate()}</div>
                            <div class="comment-author">
                                <div class=""><img class="comment-author-photo" src="https://i.pravatar.cc/50" alt="comment-user" /></div>
                                <div class="comment-author-data">
                                    <div class="comment-author-name">${comment.name}</div>
                                    <div class="comment-author-email">${comment.email}</div>
                                </div>
                            </div>
                        </div>
                    `;
        })
        .join('-');

    const handleViewComments = () => {
        Swal.fire({
            title: `${comments.length} comments`,
            text: '',
            heightAuto: false,
            html: `<div style="height: 300px">${commentsList}</div>`,
            showCloseButton: true,
            showConfirmButton: false,
            showCancelButton: false,
            focusConfirm: false,
            allowEnterKey: false,
            preConfirm: () => {
                return comments;
            }
        });
    };

    return (
        <div className="post-container row-auto h-auto bg-blue-200">
            <div className="">
                <div className="flex items-center place-content-between">
                    <div className="flex-row flex items-center p-2">
                        <div className="post-avatar ml-1 mr-3">
                            <img src="https://i.pravatar.cc/50" className="rounded-full" alt="user_img" />
                        </div>
                        <div className="">
                            <p>{user?.name}</p>
                        </div>
                    </div>
                    <div className="text-end pb-0">
                        <button className="comment-user-btn" onClick={handleViewComments}>
                            View {comments.length} comments
                        </button>
                    </div>
                </div>
                <div className="text-lg text-center mb-3 font-bold">
                    <h2>{post.title}</h2>
                </div>
                <div className="post-body-text italic px-10">
                    <p>"{post.body}"</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
