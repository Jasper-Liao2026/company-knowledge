import {useState} from 'react';
import {
    Button,
    Card,
    Form,
    Input,
    message,
} from 'antd';
import {useNavigate} from 'react-router-dom'    
import  BrandLogo  from '../components/BrandLogo'
function LoginPage() {
    const [loading,setLoading] = useState(false);
  return (
    <div className="kh-login">
      <Card className="kh-login-card">
        <div className="kh-login-title">
            <BrandLogo size={40} />
            <h1>Knowledge Hub</h1>
            <p>Login to access the knowledge hub</p>
        </div>
        <Form
        layout="vertical"
        initialValues={{
          username: 'user', 
          password: '123456',
        }}
        onFinish={async ()=>{
            setLoading(true);
        }}
        >
        
            <Form.Item name="username" label="Username" 
            rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>
    
            <Form.Item name="password" label="Password" 
            rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit" >
                登录
            </Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage