import Item1 from '../../images/h1.jpg'
import Item2 from '../../images/h2.jpg'
import Item3 from '../../images/h3.jpg'
//import Item4 from '../../images/h4short.jpg'
//import Item5 from '../../images/h5short.jpg'
//import Item6 from '../../images/h6short.jpg'
import Item7 from '../../images/h7short.jpg'
import Item8 from '../../images/h8short.jpg'
import Item9 from '../../images/h9short.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Sony', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima", price:1500,img:Item1},
        {id:2,title:'Apple', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima", price:8000,img: Item2},
        {id:3,title:'Apple', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima",price:10000,img: Item3},
        //{id:4,title:'JBL', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima", price:2500,img:Item4},
        //{id:5,title:'Sony', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima", price:1600,img: Item5},
        //{id:6,title:'Sony', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima",price:9000,img: Item6},
        {id:7,title:'JBL', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima",price:1500,img: Item7},
        {id:8,title:'SkullCandy', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima",price:4500,img: Item8},
        {id:9,title:'Apple', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima",price:250,img: Item9}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
