import React , {Component} from 'react';


import { cartContext } from '../context/cartContext';

import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, HeartTwoTone } from '@ant-design/icons';
const { Meta } = Card;

class CartItem extends Component {
    render(){
        let { products } = this.props;
        return (
                <div className="CartItem">
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
                                            ({removeItem}) => (
                                                <DeleteOutlined onClick={() => removeItem(products)} />
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
export default CartItem;