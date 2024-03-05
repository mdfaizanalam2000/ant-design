import { Table } from 'antd';
import React from 'react'
import dataSource from '../users.json';

const TableComponent = () => {
    const columns = [
        {
            title: 'SNo',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Branch',
            dataIndex: 'branch',
            key: 'branch'
        },
        {
            title: 'Domain',
            dataIndex: 'domain',
            key: 'domain'
        },
    ];

    return (
        <>
            <h1 className='text-center'>Registered users</h1>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
        </>
    )
}

export default TableComponent