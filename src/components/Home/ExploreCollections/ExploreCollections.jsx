import React from 'react';
import './ExploreCollections.scss';

import image1 from '../../../assets/Home/ExploreCollections/exploreCollections-1.webp';
import image2 from '../../../assets/Home/ExploreCollections/exploreCollections-2.webp';
import image3 from '../../../assets/Home/ExploreCollections/exploreCollections-3.webp';
import image4 from '../../../assets/Home/ExploreCollections/exploreCollections-4.webp';

const ExploreCollections = () => {

    const ExploreCollectionsData = [
        {
            id: 1,
            title: "Beauty",
            imageExplore: image1
        },
        {
            id: 2,
            title: "Clothes",
            imageExplore: image2
        },
        {
            id: 3,
            title: "Sets",
            imageExplore: image3
        },
        {
            id: 4,
            title: "Accessories",
            imageExplore: image4
        }
    ];

    return (
        <div className='ExploreCollections'>
            <p className="with36SemiBold">
                Explore Collections
            </p>
            <div className="ExploreCollections__cards">
                {
                    [...ExploreCollectionsData, ...ExploreCollectionsData].map((item, index) => (
                        <div key={index} className="ExploreCollections__card"
                            style={{
                                backgroundImage: `url(${item.imageExplore})`
                            }}
                        >
                            <span className="with24SemiBold ExploreCollections__btn">
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ExploreCollections;
