import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

const Album = () => {
    const [album, setAlbum] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchAlbum = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9_page=${page}`)
            const data = await response.json()
            setAlbum(data)
        }
        fetchAlbum()
        //eslint-disable-next-line
    }, [])

    const fetchData = async () => {
        setPage(prev => prev + 1)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        const data = await response.json()
        setTimeout(() => {
            setAlbum(prev => [...prev, ...data])
        }, 1000);
    }

    return (
        <div>
            <h1 className="text-center">Posts</h1>
            <InfiniteScroll
                dataLength={album.length}
                next={fetchData}
                hasMore={album.length <= 100}
                loader={<h4 className='text-center'>Loading...</h4>}
                endMessage={
                    <p className='text-center'>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className='container'
            >
                <Row gutter={[16, 16]}>
                    {album.map((item, index) => {
                        return <Col md={8} key={index}>
                            <Card hoverable style={{ backgroundColor: "black", color: "white", height: "50vh" }}>
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                            </Card>
                        </Col>
                    })}
                </Row>
            </InfiniteScroll>
        </div>
    )
}

export default Album