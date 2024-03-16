import NotesCollection from "../components/sidebar"
import AddNote from "../components/AddNote"
import "../stylesheet/CollectionPage.css"
export default function Collection() {
    return (
        <>
        {/* <h1>Collection Page</h1> */}
        <div style={{height:"100vh",width:"100vw",display:"flex",flexDirection:"row"}}>

            <div style={{flex:"1"}} >
                <NotesCollection/>
            </div>
            <div >
                <AddNote/>
            </div>

        </div>
        </>
    )
}