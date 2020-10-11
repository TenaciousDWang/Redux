//import React, { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props)=>{

        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={props.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        value={props.inputValue}
                        onChange={props.changeInputValue}
                    />
                    <Button
                        type="primary"
                        onClick={props.clickBtn}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={
                            (item, index) => (
                                <List.Item
                                    onClick={() => { props.deleteItem(index) }}
                                >
                                    {item}
                                </List.Item>
                            )
                        }
                    />
                </div>
            </div>
        );

}

//UI部分使用无状态组件，如上，性能更好

// class TodoListUI extends Component {

//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '250px', marginRight: '10px' }}
//                         value={this.props.inputValue}
//                         onChange={this.props.changeInputValue}
//                     />
//                     <Button
//                         type="primary"
//                         onClick={this.props.clickBtn}
//                     >增加</Button>
//                 </div>
//                 <div style={{ margin: '10px', width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={
//                             (item, index) => (
//                                 <List.Item
//                                     onClick={() => { this.props.deleteItem(index) }}
//                                 >
//                                     {item}
//                                 </List.Item>
//                             )
//                         }
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUI;