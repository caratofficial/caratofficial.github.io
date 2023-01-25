import * as React from 'react'
import {Link} from 'gatsby'
import { Card, Container, Button, Row } from 'react-bootstrap'

export default function BlogPage() {

    const apiUrl = 'https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs'

    const [blogs, setBlogs] = React.useState([])
    const [blogList, setBlogList] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const deleteBlog = (id) => {
        if (window.confirm("Are you sure?")) {
            fetch(apiUrl + '/' + id, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(doc => {
                console.log("Deleted", doc)
                getBlogs()
            })
        }
    }

    const getBlogs = () => {
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                console.table(data)
                setBlogs(data)
                setLoading(false)
                setBlogList(data.map((blog, index) => {
                    return (
                        <Card key={blog._id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{blog.topic}</Card.Title>
                                <Card.Subtitle>{blog.author}</Card.Subtitle>
                                <Card.Text>
                                    {blog.content}
                                </Card.Text>
                                <Button variant="dark">
                                <Link to={`/blog/edit?id=${blog._id}`}>Edit</Link></Button>
                                <Button variant="danger" onClick={() => deleteBlog(blog._id)}>Delete</Button>
                            </Card.Body>
                        </Card>)
                }))
            }).catch((err) => {
                console.error(err)
            })
    }

    React.useState(() => {
        getBlogs()
    }, [])


    return <Container>
    <h1>Blog</h1>
    <Link to='/blog/new'>Create New Blog</Link>
        <Row>
            {blogList}
        </Row>
    </Container>
}