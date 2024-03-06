import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'

const Album = () => {
    const [album, setAlbum] = useState([])
    const [page,] = useState(1)
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        const fetchAlbum = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15_page=${page}`)
            const data = await response.json()
            setAlbum(data)
        }
        fetchAlbum()
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            if (scrollTop === 0) {
                setScrollDirection('down');
            } else if (scrollTop + clientHeight >= scrollHeight) {
                setScrollDirection('up');
            }
        };

        const scrollToBottom = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        if (scrollDirection === 'down') {
            scrollToBottom();
        } else if (scrollDirection === 'up') {
            scrollToTop();
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <h1 className="text-center">Posts</h1>
            <Row gutter={[16, 16]}>
                {album.map((item, index) => {
                    return <Col md={8} key={index}>
                        <Card style={{ backgroundColor: "black", color: "white", height: "50vh" }}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </Card>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default Album