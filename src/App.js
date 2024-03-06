import './App.css';
import { Card, Col, Row } from 'antd';
import TableComponent from './components/TableComponent';
// import Rows from './components/Rows';
import Album from './components/Album';
import data from "./users.json"
import { useEffect, useState } from 'react';

function App() {
  const [loggedInCount, setLoggedInCount] = useState()
  const [inactiveCount, setInactiveCount] = useState()

  useEffect(() => {
    setLoggedInCount(0)
    setInactiveCount(0)
    for (const item in data) {
      if (data[item].loggedIn === true) {
        setLoggedInCount(prev => prev + 1)
      }
      if (data[item].inactiveInLast3Months === true) {
        setInactiveCount(prev => prev + 1)
      }
    }
  }, [])

  return (
    <div className='container'>
      <Row gutter={[16, 16]}>
        <Col md={8} xs={24}>
          <Card title="Total users:" bordered={false}>
            {data.length}
          </Card>
        </Col>
        <Col md={8} xs={24}>
          <Card title="No of logged in users:" bordered={false}>
            {loggedInCount}
          </Card>
        </Col>
        <Col md={8} xs={24}>
          <Card title="No of inactive users (in last 3 months):" bordered={false}>
            {inactiveCount}
          </Card>
        </Col>
      </Row>
      <TableComponent />
      <Album />
      {/* <Rows /> */}
    </div>
  );
}

export default App;
