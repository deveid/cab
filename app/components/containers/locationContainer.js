import {connect} from "react-redux";
import {
        getCurrentLocation,
        getInputData,
        toggleSearchResultModal,
} from '../../actions/currentLocation';
import { MapContainer } from '../MapContainer';
import Home from "../../screens/Home";

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        region:state.region,
        inputData:state.inputData || {},
        resultTypes:state.resultTypes || {},
    }

};

const mapActionCreators = {
    getCurrentLocation,
    getInputData,
    toggleSearchResultModal
};

export default connect(mapStateToProps,mapActionCreators)(MapContainer);