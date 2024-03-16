// import {createSlice} from "@reduxjs/toolkit"
// //const group = JSON.parse(localStorage.getItem("GroupName"));
// //const color = JSON.parse(localStorage.getItem("colorId"));
// // const initialState = {
// //     fileSave:[GroupName , colorId]
// // }
// // console.log(initialState)
// // const group = JSON.parse(localStorage.getItem("GroupName"));
// // const color = JSON.parse(localStorage.getItem("colorId"));
// export const FileSlice = createSlice({
//     name:"fileSave",
//     //initialState:{fileName:"",color:""},
//    initialState:{GroupName:"",colorId:""},
// //    initialState:{GroupName:{group},colorId:{color}},
//     reducers:{
//         update:(state) => {

//             // const fileYouChoice = JSON.parse(localStorage.getItem("yourChoice")) || []
//             // state.fileName = fileYouChoice[0]
//             // state.color = fileYouChoice[1]
//             // const group = JSON.parse(localStorage.getItem("GroupName")); 
//             // const color = JSON.parse(localStorage.getItem("colorId"));

//             const file_you_choice=JSON.parse(localStorage.getItem("my_choice"))|| []
//             state.GroupName = file_you_choice[0]
//             state.colorId = file_you_choice[1]
//             console.log(state.GroupName)
//             // const group1 =JSON.parse(localStorage.getItem("my_choice"))|| []            
//            // state.GroupName = group[0];
//            // state.colorId = color[1];
//         },
//         closeUpdate:(state)=>{
//             // state.fileName=""
//             // state.color = ""
//             state.GroupName=""
//             state.colorId=""
//         }
//     }
// })

// // eslint-disable-next-line react-refresh/only-export-components
// export const {update , closeUpdate} = FileSlice.actions
// export default FileSlice.reducer



import { createSlice } from '@reduxjs/toolkit'

export const FileSlice = createSlice({
  name: 'File_save',
  initialState:{filename:"",colour:""},
  reducers: {
    update: (state) => {
      const file_you_choice=JSON.parse(localStorage.getItem("your_choice"))|| []
      state.filename=file_you_choice[0]
      state.colour=file_you_choice[1]
      console.log(state.filename)
    },
    close_updates:(state)=>{
      state.filename=""
      state.colour=""
    }
    
    
    
  },
})
export const { update,close_updates } = FileSlice.actions

export default FileSlice.reducer