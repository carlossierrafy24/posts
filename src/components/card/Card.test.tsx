import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import { Comment, Post, User } from '../../data/Interfaces';

type Props = {
    post: Post;
    comments: Comment[];
    user: User | undefined;
};

const props: Props = {
    post: {
        id: 1,
        title: 'Post title',
        body: 'Post body',
        userId: 1
    },
    comments: [
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
    user: {
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
};

test('should render card', () => {
    expect(render(<Card {...props} />)).toMatchSnapshot();
});
// expect values to be in the document
test('should render card title, number os comments and body', () => {
    render(<Card {...props} />);
    // title
    expect(screen.getByText(/Post title/i)).toBeInTheDocument();
    // number of comments
    expect(screen.getByText(/2 comments/i)).toBeInTheDocument();
    // body
    expect(screen.getByText(/Post body/i)).toBeInTheDocument();
});
