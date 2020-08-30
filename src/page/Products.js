import React , {Component} from 'react';

import 'antd/dist/antd.css';
import '../components/style/Content.css';
import { Layout, Breadcrumb } from 'antd';

import Product from '../components/Product';

const {  Content} = Layout;
class Products extends Component{
    render(){
        return (
        <div className="Contents">
                <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Products</Breadcrumb.Item>
                        </Breadcrumb>
                    <div className="site-layout-content">
                        <Product />
                    </div>
                </Content>
        </div>
        );
    }
}
export default Products;