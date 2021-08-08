import React from 'react';
import { useContext } from 'react';
import { GlobalCategory } from '../../../App';
const CategoryDetails = () => {
    const count = useContext(GlobalCategory)
    return (
        <div>
            This is Category Detailsssss {count}
        </div>
    );
};

export default CategoryDetails;