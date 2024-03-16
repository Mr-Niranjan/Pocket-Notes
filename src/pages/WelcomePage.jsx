import HomeScreen from "../components/HomeScreen"
import GroupNotes from "../components/sidebar"
import { useDispatch } from 'react-redux'
import { close_updates } from '../app/FileSlice'
import {useEffect} from 'react'


export default function Welcome() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(close_updates())
    },[])

    return(
        <>

    <div style={{height:"100vh",width:"100vw",display:"flex",flexDirection:"row"}}>

        <div style={{flex:"1"}} >
            <GroupNotes/>
        </div>
        <div >
            <HomeScreen/>
        </div>


    </div>

        </>
    )
}