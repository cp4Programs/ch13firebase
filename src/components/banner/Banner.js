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
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="banner-container">
            <div className="main-article-container" style={{ backgroundImage: `url(${mainArticle?.image})` }}>
                <div className="banner-info">
                    <h2>{mainArticle?.title}...</h2>
                    <small>{mainArticle?.createdAt?.toDate().toDateString()}</small>
                </div>
            </div>
            <div className="other-articles-container">
                {
                    otherArticles?.map(item => {
                        return <div className="other-article-item" style={{ backgroundImage: `url(${item?.image})` }} >
                            <div className="banner-info">
                                <h3>{item?.title.slice(0, 15)}...</h3>
                                <small>{item?.createdAt?.toDate().toDateString()}</small>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    )
}

export default Banner