import React from 'react'
import { Layout, Menu, Icon, Breadcrumb, Button } from 'antd';
import './home.less'

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class Home extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Header style={{ width: '100vw', padding:'0', position: 'fixed', left: 0, top: 0 }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px', maxWidth: '400px', overflow: 'hidden' }}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                        <Menu.Item key="4">nav 4</Menu.Item>
                        <Menu.Item key="5">nav 5</Menu.Item>
                        <Menu.Item key="6">nav 6</Menu.Item>
                        <Menu.Item key="7">nav 7</Menu.Item>
                        <Menu.Item key="8">nav 8</Menu.Item>
                        <Menu.Item key="9">nav 9</Menu.Item>
                        <Menu.Item key="10">nav 10</Menu.Item>
                        <Menu.Item key="11">nav 11</Menu.Item>
                        <Menu.Item key="12">nav 12</Menu.Item>
                        <Menu.Item key="13">nav 13</Menu.Item>
                        <Menu.Item key="14">nav 14</Menu.Item>
                        <Menu.Item key="15">nav 15</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{ position: 'fixed', left: 0, top: 64, width: '100%' }}>
                    <Sider collapsible onCollapse={this.onCollapse} collapsed={this.state.collapsed} breakpoint='lg'
                        style={{ overflowX: 'hidden', overflowY: 'auto', height: 'calc(100vh - 112px)' }}>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span className="nav-text">nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span className="nav-text">nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user" />
                                <span className="nav-text">nav 4</span>
                            </Menu.Item>
                            <Menu.Item key="13">nav 13</Menu.Item>
                            <Menu.Item key="5">nav 23</Menu.Item>
                            <Menu.Item key="6">nav 33</Menu.Item>
                            <Menu.Item key="15">nav 43</Menu.Item>
                            <Menu.Item key="16">nav 53</Menu.Item>
                            <Menu.Item key="17">nav 63</Menu.Item>
                            <Menu.Item key="18">nav 73</Menu.Item>
                            <Menu.Item key="19">nav 83</Menu.Item>
                            <Menu.Item key="20">nav 93</Menu.Item>
                            <Menu.Item key="21">nav 333</Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 30px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, overflow: 'auto', height: 'calc(100vh - 150px)' }}>
                            Content<br/>
                            <Button type="primary" onClick={this.onCollapse} style={{ margin: '16px 0' }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default Home