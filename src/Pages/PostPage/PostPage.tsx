import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IPost } from "../../shared/lib/Post"
import './PostPage.scss'

const PostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/" + id)
            .then((response) => {
                setPost(response.data)
            })
    }, [id])

    return <>
        {post &&
            <div key={post?.id} className="card">
                <div className="title">{post?.id}. Title: {post?.title}</div>
                <div className="body">Body: {post?.body}</div>
                <button onClick={() => navigate(-1)} className="back">Go back</button>
            </div>
        }
    </>
}

export default PostPage