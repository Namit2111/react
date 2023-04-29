import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        className="pizza__item"
        speed={2}
        width={400}
        height={550}
        viewBox="0 0 375 550"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="180" cy="165" r="165" />
        <rect x="195" y="368" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="350" rx="10" ry="10" width="375" height="23" />
        <rect x="0" y="395" rx="10" ry="10" width="375" height="85" />
        <rect x="0" y="505" rx="10" ry="10" width="155" height="24" />
        <rect x="190" y="490" rx="25" ry="25" width="180" height="44" />
    </ContentLoader>
);

export default Skeleton;
