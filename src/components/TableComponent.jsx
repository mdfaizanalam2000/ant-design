import { Table, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import dataSource from '../users.json';

const TableComponent = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const columns = [
        {
            title: 'SNo',
            render: (text, record, index) => index + 1
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Branch',
            dataIndex: 'branch',
            key: 'branch',
            sorter: (a, b) => a.branch.localeCompare(b.branch)
        },
        {
            title: 'Domain',
            dataIndex: 'domain',
            key: 'domain',
            sorter: (a, b) => a.domain.localeCompare(b.domain)
        },
    ];

    useEffect(() => {
        const filtered = dataSource.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.branch.toLowerCase().includes(searchTerm.toLowerCase()) || item.domain.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredData(filtered)
    }, [searchTerm])

    return (
        <>
            <h1 className='text-center'>Registered users</h1>
            <div className='text-center'>
                <Input onChange={(e) => setSearchTerm(e.target.value)} placeholder="Type anything here to
                filter..." style={{ width: "70%", margin: "1rem 0" }} />
            </div>
            <Table dataSource={filteredData} columns={columns} pagination={false} />
        </>
    )
}

export default TableComponent