import { useEffect, useState } from 'react'
import './ItemPage.scss'
import axios from 'axios'

interface Post {
    title: string;
    body: string;
    id: number;
}

const ItemPage = () => {

    const [posts, updatePosts] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL)
            .then((response) => {
                updatePosts(response.data)
            })
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = () => {
        console.log('scroll')
    }
    return <>
        <div>
            {posts.map((post : Post) =>
                <div className='post'>
                    <div className="title">{post.id}. Title: {post.title}</div>
                    <div className="body">Body: {post.body}</div>
                </div>
            )}
        </div>
    </>
}

export default ItemPage