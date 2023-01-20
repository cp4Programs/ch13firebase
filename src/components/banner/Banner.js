import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { getDocs, collection, query, limit } from 'firebase/firestore'
import './banner.css'

function Banner() {
    const [mainArticle, setMainArticle] = useState('')
    const [otherArticles, setOtherArticles] = useState('')


    useEffect(() => {
        const articleRef = collection(db, "articles")
        const q = query(articleRef, limit(5))

        getDocs(q, articleRef)
            .then(res => {

                const articles = res.docs.map(item => ({
                    idKey: item.id,
                    ...item.data()
                }))
                setMainArticle(articles[0])
                setOtherArticles(articles.splice(1))
                console.log(otherArticles)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="banner-container">
            <div className="main-article-container" style={{ backgroundImage: `url(${mainArticle?.image})` }}>

            </div>
            <div className="other-articles-container">
                {
                    otherArticles?.map(item => {
                        return <div style={{ backgroundImage: `url(${item?.image})` }} >
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Banner