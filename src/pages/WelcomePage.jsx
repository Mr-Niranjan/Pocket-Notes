import HomeScreen from "../components/HomeScreen"
import GroupNotes from "../components/sidebar"


export default function Welcome() {

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