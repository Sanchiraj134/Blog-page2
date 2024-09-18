import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import NewPost from './components/NewPost';
import Settings from './components/Settings';
import './App.css'; // Import your CSS file

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/new-post" element={<NewPost />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;