import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../app/stateSlice';
import { RootState } from '../../app/store';
import { IPost } from '../../shared/lib/Post';
import { Link } from 'react-router-dom';

import './cardsModule.scss'

const ItemPage = () => {
    const posts = useSelector((state: RootState) => state.postsState.value)
    const dispatch = useDispatch()
    const [curP, upCur] = useState(1)
    const [pafeAct, upPageAct] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts" + `?_limit=10&_page=${curP}`)
            .then((response) => {
                dispatch(update(response.data))
                upCur(curP + 1);
            }).finally(() => {
                upPageAct(false);
            })
    }, [pafeAct])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const scrollHandler = (event : any ) => {
        (event.target.documentElement.scrollHeight - event.target.documentElement.scrollTop - window.innerHeight) < 100 && upPageAct(true);
    }

    return <>
        <div>
            {posts.map((post: IPost) =>
                <div className='post' key={post.id}>
                    <div className="title">{post.id}. Title: {post.title}</div>
                    <div className="body">Body: {post.body.length > 20 ? post.body.substring(0, 20) + '...' : post.body}</div>
                    <div className='link__cont'>
                        <Link to={`${post.id}`} className='link'>Просмотр</Link>
                    </div>
                </div>
            )}
        </div>
    </>
}

export default ItemPage