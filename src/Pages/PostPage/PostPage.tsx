import { useNavigate, useParams } from "react-router-dom"
import './PostPage.scss'
import { useFetchPostByIdQuery } from "../../app/postApi"
import { Loader } from "../../Widgets/Loader"

const PostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { isLoading, data: post } = useFetchPostByIdQuery({ id: `${id}` })

    return <>
        {isLoading && <Loader />}
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