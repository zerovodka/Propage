
import React from "react"
import Header from "../components/Header";
import CardList from "./CardBox";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import {cardAxios} from "../redux/modules/card";




const Main = () => {

    return(
        <div>
            <Header />
            <CardList/>          
        </div>
            
        
            
    )
}



export default Main;