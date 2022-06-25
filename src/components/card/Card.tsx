import React from 'react';

type Props = {
    title: string;
    body: string;
    userId: number;
    id: number;
};

const Card = ({ title, body, userId, id }: Props) => {
    return (
        <div>
            {/* buil a card with text an their comments below */}
            <div className="card">
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
                <div className="card-footer">
                    <p>UserId: {userId}</p>
                    <p>Id: {id}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
