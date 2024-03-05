import './App.css';
import { Card, Col, Row } from 'antd';
import TableComponent from './components/TableComponent';
import Album from './components/Album';

function App() {
  return (
    <div className='container'>
      <Row gutter={[16, 16]}>
        <Col md={8} xs={24}>
          <Card title="Total users:" bordered={false}>
            100
          </Card>
        </Col>
        <Col md={8} xs={24}>
          <Card title="No of logged in users:" bordered={false}>
            49
          </Card>
        </Col>
        <Col md={8} xs={24}>
          <Card title="No of inactive users (in last 3 months):" bordered={false}>
            21
          </Card>
        </Col>
      </Row>
      <TableComponent />
      <Album />
    </div>
  );
}

export default App;
