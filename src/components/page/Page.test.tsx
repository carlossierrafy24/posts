import React from 'react';
import { render } from '@testing-library/react';
import { Comment, Post, User } from '../../data/Interfaces';
import Page from './Page';

type Props = {
    post: Post[];
    comment: Comment[];
    users: User[];
};

const props: Props = {
    post: [
        {
            id: 1,
            title: 'Post title',
            body: 'Post body',
            userId: 1
        }
    ],
    comment: [
        {
            postId: 1,
            id: 1,
            name: 'Comment name',
            email: 'Comment email',
            body: 'Comment body'
        },
        {
            postId: 1,
            id: 1,
            name: 'Comment name',
            email: 'Comment email',
            body: 'Comment body'
        }
    ],
    users: [
        {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            email: 'johndoe@gmail.com',
            address: {
                street: 'street',
                suite: 'place 2',
                city: 'city',
                zipcode: '000000',
                geo: {
                    lat: '000000000',
                    lng: '000000000'
                }
            },
            phone: '0000000000',
            website: 'john.doe.web',
            company: {
                name: 'loren ipsum',
                catchPhrase: 'lorem ipsum',
                bs: 'lorem ipsum'
            }
        }
    ]
};

test('should render page', () => {
    expect(render(<Page {...props} />)).toMatchSnapshot();
});
