import React from 'react';

function SearchMesseges({ searchMsg, setSearchMsg }) {
    return (
        <div className="search-chat-container d-flex justify-content-between">
            <input
                type="text"
                className="form-control me-2"
                placeholder="Search messages..."
                value={searchMsg}
                onChange={(e) => setSearchMsg(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="button">
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default SearchMesseges;