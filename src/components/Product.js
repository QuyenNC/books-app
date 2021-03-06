import React , {Component} from 'react';


import { cartContext } from '../context/cartContext';

import 'antd/dist/antd.css';
import './style/Products.css';
import { Card } from 'antd';
import { EditOutlined, ShoppingCartOutlined, HeartTwoTone } from '@ant-design/icons';
const { Meta } = Card;

class Product extends Component {
    render(){
        let { products } = this.props;
        return (
                <div className="Product">
                    {
                        <Card
                            
                            style={{ width: 250 }}
                            cover={
                            <img
                                alt="example"
                                src={products.image}
                            />
                            }
                            actions={[
                                <HeartTwoTone twoToneColor="#eb2f96" />,
                                <EditOutlined key="edit" />,
                                    <cartContext.Consumer>
                                        {
                                            ({addItem}) => (
                                                <ShoppingCartOutlined onClick={() => addItem(products)} />
                                            )
                                        }
                                    </cartContext.Consumer>
                            ]}
                        >
                            <Meta
                                title={"Name : " + products.name}
                                description={"Price : " + products.price }
                            />
                            <Meta
                                description={"Category : " + products.category}
                            />
                        </Card>
                    }
                    
            </div>
        );
    }
}
export default Product;