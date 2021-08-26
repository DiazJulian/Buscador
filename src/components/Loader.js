import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => {

    return (
        <div>
            <ContentLoader
                speed={2}
                width={350}
                height={300}
                viewBox="0 0 400 460"
                backgroundColor="#002879"
                foregroundColor="#fff"
            >
                <circle cx="200" cy="95" r="90" />
                <rect x="20" y="250" rx="2" ry="2" width="350" height="30" />
                <rect x="20" y="300" rx="2" ry="2" width="350" height="30" />
                <rect x="20" y="350" rx="2" ry="2" width="350" height="30" />
                <rect x="20" y="400" rx="2" ry="2" width="350" height="30" />
            </ContentLoader>
        </div>
    )
}