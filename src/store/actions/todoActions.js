// khoi tao action creator boc ben trong la creater la cai se noi chuyen voi ca reducer
// dispatch de noi chuyen duoc voi reducer
// export const markComplete = ()=>{
//   const markCompleteAction = dispatch =>{
//     dispatch({
//       type:'MARK_COMPLETE',
//       payload: 'my payload'
//     })
//   }

//   return markComplete;
// }

// cach viet ngan gon hon
export const markComplete =(id)=> dispatch=>{
  dispatch({
    type:'MARK_COMPLETE',
    payload:id
  })
}

export const addTodo = newTodo => dispatch =>{
  dispatch(
    {

      type:'ADD_TODO',
      payload:newTodo,
    }
  )
}
