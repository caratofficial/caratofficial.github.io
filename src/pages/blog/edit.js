import * as React from 'react'
import { Link } from 'gatsby'
import { Form, Card, Container, Button, Row } from 'react-bootstrap'
import { doc } from 'prettier';

export default function EditPage(props) {
    console.log(props.location)
    const params = new URLSearchParams(props.location.search);
    console.log(params.get("id"))

    const apiUrl = 'https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs'

    const formRef = React.useRef({})
    const [blogs, setBlogs] = React.useState([])
    const [blogList, setBlogList] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useState(() => {
        fetch(apiUrl + '/' + params.get("id"))
            .then(res => res.json())
            .then(doc => {
                console.log(doc)
                formRef.current.topic.value = doc.topic
                formRef.current.content.value = doc.content
                formRef.current.author.value = doc.author
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(formRef.current.topic.value)
        // console.log(formRef.current.content.value)
        // console.log(formRef.current.author.value)
        const blog = {
            _id: params.get("id"),
            topic: formRef.current.topic.value,
            content: formRef.current.content.value,
            author: formRef.current.author.value
        }
        console.log(blog)

        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(doc => {
                console.log("Updated", doc)
                alert("Updated")
                // getBlogs()
            })
    }

    return <Container>
        <h1>Edit Blog</h1>
        <Link to="/blog">Blog Home</Link>
        <Row>
            <Form ref={formRef}>
                <Form.Group controlId="topic">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control type="text" placeholder="Enter topic" />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author" />
                </Form.Group>
                <Button variant="dark" onClick={handleSubmit}>Save</Button>
            </Form>
        </Row>
    </Container>
}