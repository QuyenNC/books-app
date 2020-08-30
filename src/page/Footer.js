import React , {Component} from 'react';

import 'antd/dist/antd.css';
import { Layout} from 'antd';

const { Footer } = Layout;
class Footers extends Component{
    render(){
        return (
        <div className="Footers">
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </div>
        );
    }
}
export default Footers;