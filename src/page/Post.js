import React,{Component} from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import '../components/style/Post.css';
import { Form, Input, Button, Select } from 'antd';
import { Layout, Breadcrumb } from 'antd';
const {  Content} = Layout;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Post extends Component {
    constructor(){
        super();
        this.state={
            isPost : false
        }
        this.onFinish=this.onFinish.bind(this);
    }
  formRef = React.createRef();
  onFinish = values => {
    values.image = "http://dummyimage.com/230x180.jpg/ff4444/ffffff";
    axios.post(`https://bye4m.sse.codesandbox.io/Products`,values)
            .then(res => {
                const isPost = this.state.isPost;
                this.setState({
                    isPost : !isPost
                })
            })
            .catch(error => console.log(error));
  };
  render() {
      if(this.state.isPost){
        return <Redirect to="/" />
      }
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Cart</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                        <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input type="number" />
                        </Form.Item>
                        <Form.Item
                        name="decription"
                        label="Decription"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        name="category"
                        label="Category"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Select
                            placeholder="Select a option"
                            allowClear
                        >
                            <Option value="Drama">Drama</Option>
                            <Option value="Action">Action</Option>
                            <Option value="Adventure">Adventure</Option>
                        </Select>
                        </Form.Item>
                        <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                        >
                        {({ getFieldValue }) =>
                            getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                {
                                    required: true,
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            ) : null
                        }
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
      </div>
    );
  }
}

export default Post;