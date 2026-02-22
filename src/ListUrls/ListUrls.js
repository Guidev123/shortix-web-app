import "./ListUrls.css"
import React from "react";

const baseUrl = process.env.REACT_APP_REDIRECT_API_ENDPOINT

function ListUrls({ urls, responseContinuationToken, onLoadMore }) {
    return (
        <div className="url-list">
            {urls && urls.map((url) => (
                <div key={url.shortUrlId} className="url-item">
                    <a href={`${baseUrl}/r/${url.shortUrlId}`} className="short-url" target="_blank" rel="noreferrer">
                        {url.shortUrlId}
                    </a>
                    {" → "}
                    <a href={url.longUrl} className="long-url">
                        {url.longUrl}
                    </a>
                </div>
            ))}
            {responseContinuationToken && (
                <button onClick={onLoadMore}>Load more</button>
            )}
        </div>
    );
}

export default ListUrls