import React, { useState } from 'react';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add functionality to save the new post
        console.log({ title, description, content, tags });
    };

    return (
        <div className="new-post">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Article Title" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="What's this article about?" value={description} onChange={e => setDescription(e.target.value)} />
                <textarea placeholder="Write your article (in markdown)" value={content} onChange={e => setContent(e.target.value)} />
                <input type="text" placeholder="Enter tags" value={tags} onChange={e => setTags(e.target.value)} />
                <button type="submit">Publish Article</button>
            </form>
        </div>
    );
};

export default NewPost;
