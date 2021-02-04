import { Component, Fragment } from "react";
import styles from "../allShaba/style.module.css";
import logo from "../../img/ogo.jpg";
import Navbars from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';



class AllSefat extends Component{
    state={
        allSefat:[
            {id: 1, name: "الصدق"},
            {id: 2, name: "الأمانة"},
            {id: 3, name: "الإخلاص"},
            {id: 4, name: "الصدق"},
            {id: 5, name: "البر"},
            {id: 6, name: "الإنفاق"},
            {id: 7, name: "الصدق"},
            {id: 8, name: "الصدق"},
            {id: 9, name: "الصدق"},
            {id: 10, name: "الصدق"},
        ]
    }

    getAllSefat= ()=>{
        this.setState({

        })

        
    }


    render(){
        return(
            <Fragment>
                <Navbars bg="transparent"/>
                
                <div className="header position-relative">
                    <img className="w-100" style={{height: "400px"}} src={logo} alt=""/>
                    <div className={styles.title}>
                        <h2>الصفات</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                    {this.state.allSefat.map((value, index)=>{
                        return (
                            <div key={index} className="col-md-3">
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                        Tooltip on <strong>{placement}</strong>.
                                        </Tooltip>
                                    }
                                    >
                                    <Link to={location => `/oneSefa/id=${value.id}`} className="text-decoration-none">
                                    <div className={`${styles.item} d-flex justify-content-center align-items-center`} >
                                        {value.name}
                                    </div>
                                    </Link>
                                    </OverlayTrigger>
                                ))}
                                
                            </div>
                            )
                    })} 
                    </div>
                </div>
                </div>
                
            </Fragment>
        )
    }
}

export default AllSefat