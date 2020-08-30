import React , {Component} from 'react';

import axios from 'axios';

import { cartContext } from '../context/cartContext';

import 'antd/dist/antd.css';
import './style/Products.css';
import { Card } from 'antd';
import { EditOutlined, ShoppingCartOutlined, HeartTwoTone } from '@ant-design/icons';
const { Meta } = Card;

class Product extends Component {
    constructor(){
        super();
        this.state={
            products : []
        }
    }
    componentDidMount(){
        axios.get(`https://bye4m.sse.codesandbox.io/Products`)
            .then(res => {
            const products = res.data;
            this.setState({ products : products });
            })
            .catch(error => console.log(error));
    }
    render(){
        let { products } = this.state;
        return (
                <div className="Product">
                    {
                        products.map((item , index) => 
                        <Card
                            key={index}
                            style={{ width: 250 }}
                            cover={
                            <img
                                alt="example"
                                src={item.image}
                            />
                            }
                            actions={[
                                <HeartTwoTone twoToneColor="#eb2f96" />,
                                <EditOutlined key="edit" />,
                                    <cartContext.Consumer>
                                        {
                                            ({addItem}) => (
                                                <ShoppingCartOutlined onClick={() => addItem(item)} />
                                            )
                                        }
                                    </cartContext.Consumer>
                            ]}
                        >
                            <Meta
                            title={item.name}
                            description={item.price}
                            />
                        </Card>
                        )
                    }
                    
            </div>
        );
    }
}
export default Product;