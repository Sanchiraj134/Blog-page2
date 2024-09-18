import React from 'react';

const Feed = () => {
    const posts = [
        { author: 'Alessandra43', date: 'Tue Jun 18 2024', title: 'Magni porro sed adipisci aperiam...', content: 'Dolore velit rerum facere...', tags: ['veritatis', 'autem', 'non', 'ipsam'], likes: 0 },
        { author: 'Maia_Bins71', date: 'Sun Jun 09 2024', title: 'Voluptatem enim expedita...', content: 'Ipsa vero tenetur expedita...', tags: ['sunt', 'autem', 'sapiente'], likes: 1 }
    ];

    return (
        <div className="feed">
            <h2>Your Feed</h2>
            {posts.map((post, index) => (
                <div key={index} className="post">
                    <h3>{post.title}</h3>
                    <p>by {post.author} on {post.date}</p>
                    <p>{post.content}</p>
                    <div className="tags">
                        {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <div className="like-button">❤️ {post.likes}</div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
