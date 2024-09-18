import React, { useState } from 'react';

const Settings = () => {
    const [image, setImage] = useState('https://cdn.fakercloud.com/avatars/prrstn_128.jpg');
    const [username, setUsername] = useState('test-user-1');
    const [bio, setBio] = useState('Ut fuga consequatur.');
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        // Update user settings functionality
        console.log({ image, username, bio, email, password });
    };

    return (
        <div className="settings">
            <h2>Your Settings</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Profile Picture URL" value={image} onChange={e => setImage(e.target.value)} />
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <textarea placeholder="Short bio about you" value={bio} onChange={e => setBio(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Update Settings</button>
            </form>
            <button className="logout-button">Or click here to logout.</button>
        </div>
    );
};

export default Settings;
