import welcomeImg from "../assets/welcomeImg.png"
import encryptedLogo from "../assets/encryptedLogo.png"
import "../stylesheet/HomeScreen.css"
export default function HomeScreen(){
    return(
        <>
        <div style={{height:"100vh",width:"74vw",backgroundColor:"#DAE5F5"}}>
        <div className="HomeScreen">
        <img src={welcomeImg}/>
        <p className="HomeScreenHeading">Pocket Notes</p>
        <p>Send and receive messages without keeping your phone online.</p>
        <p> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className="EncryptedSide">
            <img src={encryptedLogo} alt="encrypted logo"style={{height:"12px",marginRight:"7px"}}/>
            <span>end-to-end encrypted</span>
        </div>
        </div>
        </>
    )
}