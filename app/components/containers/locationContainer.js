import {connect} from "react-redux";
import {getCurrentLocation} from '/home/david/new_tax/cab/app/actions/currentLocation';
import { MapContainer } from '../MapContainer';
import Home from "../../screens/Home";

const mapStateToProps=(state)=>({
    region:state.home.region
});

const mapActionCreators = {
    getCurrentLocation
};

export default connect(mapStateToProps,mapActionCreators)(Home);