import React from 'react';
import { Input,Button,List } from 'antd'


//无状态组件(没有state,生命周期等等状态)   不需要class类  大型项目中能使用状态组件就使用状态组件
const TodoListUi = (props)=>{
    return ( 
        <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={props.inputValue} 
                        style={{width:'250px',marginRight:'10px'}}
                        onChange = {props.changeInputVal}
                    />
                    <Button type="primary" onClick={props.clickBtn}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
            <List 
                bordered
                dataSource={props.list}
                renderItem={(item,index)=>(
                    <List.Item  
                        onClick = {()=>{props.delItem(index)}}>
                        {item}
                    </List.Item>
                )}
            />
                </div>
        </div>
     );
}


// class TodoListUi extends Component {
//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//                     <div>
//                         <Input 
//                             placeholder={this.props.inputValue} 
//                             style={{width:'250px',marginRight:'10px'}}
//                             onChange = {this.props.changeInputVal}
//                         />
//                         <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                     </div>
//                     <div style={{margin:'10px',width:'300px'}}>
//                 <List 
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index)=>(
//                         <List.Item  
//                             onClick = {()=>{this.props.delItem(index)}}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//                     </div>
//             </div>
//          );
//     }
// }
 
export default TodoListUi;