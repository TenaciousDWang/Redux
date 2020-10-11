import React, { Component } from 'react';
import store from './store'
import{changeInputAction,addItemAction,deleteItemValueAction,getMyListAction} from './store/actionCreateors'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        //redux订阅模式，用来更新视图,受控组件必须写
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    componentDidMount(){
        //const action = getTodoList()
        //store.dispatch(action)

        const action = getMyListAction()
        store.dispatch(action)
    }

    render() {
        console.log('render')
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        const action = deleteItemValueAction(index)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState)
    }
}

export default TodoList;