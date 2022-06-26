import React from 'react';
import Page from '../page/Page';
import { Post, Comment, User } from '../../data/Interfaces';

const { REACT_APP_POSTS_API, REACT_APP_COMMENTS_API, REACT_APP_USERS_API } = process.env;

const Pagination: React.FC = (): JSX.Element => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [comments, setComments] = React.useState<Comment[]>([]);
    const [users, setUsers] = React.useState<User[]>([]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    // array of numbers from 1 to 10 for pages indicator
    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
    }

    React.useEffect(() => {
        fetch(`${REACT_APP_POSTS_API}`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log(err));
        fetch(`${REACT_APP_COMMENTS_API}`)
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.log(err));
        fetch(`${REACT_APP_USERS_API}`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err));
    }, []);

    const handleNextPage = () => {
        currentPage < 10 && setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <Page post={posts.slice(currentPage === 1 ? 0 : currentPage * 10 - 10, currentPage === 1 ? 10 : currentPage * 10)} comment={comments} users={users} />
            <div className="pagination">
                <button className="navigation-btn" onClick={handlePreviousPage}>
                    Prev
                </button>
                <div>
                    {pageNumbers.map((number) => (
                        <button key={number} onClick={() => setCurrentPage(number)} className={currentPage === number ? 'active-page' : 'inactive-page'}>
                            {number}
                        </button>
                    ))}
                </div>
                <button className="navigation-btn" onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};
export default Pagination;
