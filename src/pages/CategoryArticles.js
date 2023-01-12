import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryArticles() {

    const { catName } = useParams()

    return (
        <div>
            {catName}
        </div>
    )
}

export default CategoryArticles