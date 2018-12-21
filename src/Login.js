import React from 'react'
import { Button,Layout } from 'antd';
const {
  Header, Footer, Sider, Content,
} = Layout;

class Login extends React.Component {
    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <div style={{textAlign:'center',marginTop:'10px'}}>
                        <Button type="primary">登录</Button>
                    </div>
                </Content>
                <Footer />
            </Layout>
            
        )
    }
}

export default Login