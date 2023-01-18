import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { getDocs, collection, query, limit } from 'firebase/firestore'

function Banner() {
    const [mainArticle, setMainArticle] = useState('')
    const [otherArticles, setOtherArticles] = useState('')

    useEffect(() => {
        const articleRef = collection(db, "articles")


        getDocs(articleRef)
            .then(res => {
                console?.log(res)
            })
            .catch(err => console.log(err))

    })


    return (
        <div>Banner</div>
    )
}

export default Banner