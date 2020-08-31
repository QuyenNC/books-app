import React , {Component} from 'react';
import axios from 'axios';

import 'antd/dist/antd.css';
import '../components/style/Content.css';
import { Layout,Menu } from 'antd';
import { FilterOutlined} from '@ant-design/icons';


import Product from '../components/Product';

const { SubMenu } = Menu;
const {  Content, Sider} = Layout;
class Products extends Component{
    constructor(){
        super();
        this.state={
            products : [],
            filter:[]
        }
        this.filterItem = this.filterItem.bind(this);
    }
    componentDidMount(){
        axios.get(`https://bye4m.sse.codesandbox.io/Products`)
            .then(res => {
            const products = res.data;
            this.setState({ products : products });
            })
            .catch(error => console.log(error));
    }
    filterItem(category){
        const products = this.state.products;
        let filter = products;
        if(category !== ''){
            filter = products.filter((item) =>
                item.category === category 
            )
        }
        this.setState({
            filter
        })
    }
    render(){
        let { filter , products } = this.state;
        let pro = filter
        if(filter.length === 0){
            pro = products
        }
        return (
        <div className="Contents">
                <Content style={{ padding: '0 50px' }}>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<FilterOutlined />} title="Filter">
                                <Menu.Item key="1" onClick={() => (this.filterItem(""))}>All</Menu.Item>
                                <Menu.Item key="2" onClick={() => (this.filterItem("Drama"))}>Drama</Menu.Item>
                                <Menu.Item key="3" onClick={() => (this.filterItem("Action"))}>Action</Menu.Item>
                                <Menu.Item key="4" onClick={() => (this.filterItem("Adventure"))}>Adventure</Menu.Item>
                                </SubMenu>
                            </Menu>
                            </Sider>
                            <div className="site-layout-content">
                                {pro.map((item, index) => (
                                    <Product key={index} products={item} />
                                ))}
                                
                            </div>

                        </Layout>
                   
                </Content>
        </div>
        );
    }
}
export default Products;