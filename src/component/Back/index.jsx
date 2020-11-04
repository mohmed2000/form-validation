import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Back(props) {
    return (
    <div className="bIcon">
        <span > <FontAwesomeIcon icon={faAngleLeft}/> </span>
        <button className="bBtn" onClick={() => props.history.goBack()}> Back </button>
    </div>
    )
}
// export default Back;
 export default withRouter(Back);



