import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title, Text } = Typography;

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ name, description });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '0 20px' }}>
      <Title level={2}>Форма с использованием Ant Design</Title>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Имя">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Описание">
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: '20px' }}>
          <Title level={4}>Отправленные данные:</Title>
          <p>
            <Text strong>Имя:</Text> {submittedData.name}
          </p>
          <p>
            <Text strong>Описание:</Text> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;