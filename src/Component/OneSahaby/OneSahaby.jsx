import { Component, Fragment } from "react";
import Navbars from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import styles from "./style.module.css";


class OneSahaby extends Component{
    state = {
        Alsahaba:[
            {id: 1, name: "أبو بكر الصديق"},
            {id: 2, name: "عمر بن الخطاب"},
            {id: 3, name: "عثمان بن عفان"},
            {id: 4, name: "علي بن أبي طالب"},
            {id: 5, name: "أبو بكر الصديق"},
            {id: 6, name: "أبو بكر الصديق"},
            {id: 7, name: "أبو بكر الصديق"},
            {id: 8, name: "أبو بكر الصديق"},
            {id: 9, name: "أبو بكر الصديق"},
            {id: 10, name: "أبو بكر الصديق"},
            {id: 1, name: "أبو بكر الصديق"},
            {id: 2, name: "عمر بن الخطاب"},
            {id: 3, name: "عثمان بن عفان"},
            {id: 4, name: "علي بن أبي طالب"},
            {id: 5, name: "أبو بكر الصديق"},
            {id: 6, name: "أبو بكر الصديق"},
            {id: 7, name: "أبو بكر الصديق"},
            {id: 8, name: "أبو بكر الصديق"},
            {id: 9, name: "أبو بكر الصديق"},
            {id: 10, name: "أبو بكر الصديق"},
            {id: 1, name: "أبو بكر الصديق"},
            {id: 2, name: "عمر بن الخطاب"},
            {id: 3, name: "عثمان بن عفان"},
            {id: 4, name: "علي بن أبي طالب"},
            {id: 5, name: "أبو بكر الصديق"},
            {id: 6, name: "أبو بكر الصديق"},
            {id: 7, name: "أبو بكر الصديق"},
            {id: 8, name: "أبو بكر الصديق"},
            {id: 9, name: "أبو بكر الصديق"},
            {id: 10, name: "أبو بكر الصديق"}
        ]
    }

    // data = ()=>{
    //     this.setState({
            
    //     })
    // }

    
    
    render(){
        
        let data;
        this.state.Alsahaba.map((value, index)=>{
            if (value.id == this.props.match.params.id) {
                 data = value
                }
            })

        return(
            <Fragment>
                <Navbars  />
                <div className="" style={{height:"96px"}}></div>
                <SideBar data ={this.state.Alsahaba} />

                <div className="nameSahaby">
                    <h2 className="text-center mt-2 mb-4">{data.name + "   " + data.id} </h2>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-4">
                            <div className={`${styles.story} overflow-auto`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fuga rem quasi placeat, dolores soluta aliquam esse quis nesciunt, totam delectus unde ab consequatur aspernatur, laboriosam in? A eaque velit adipisci dolorum quasi tempora saepe quidem temporibus corrupti facilis impedit voluptatum veniam deserunt iure magni cum, alias reiciendis. Ex eius quia optio corporis quas enim nesciunt? Asperiores iusto alias mollitia modi cum velit veniam minima natus ad neque aut, vel, debitis voluptatum nisi ratione pariatur quod esse, possimus amet obcaecati. Perspiciatis, obcaecati. Eius possimus fugiat vel itaque aspernatur suscipit magni reprehenderit eaque! Beatae nisi consectetur doloremque sequi hic totam consequuntur.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fuga rem quasi placeat, dolores soluta aliquam esse quis nesciunt, totam delectus unde ab consequatur aspernatur, laboriosam in? A eaque velit adipisci dolorum quasi tempora saepe quidem temporibus corrupti facilis impedit voluptatum veniam deserunt iure magni cum, alias reiciendis. Ex eius quia optio corporis quas enim nesciunt? Asperiores iusto alias mollitia modi cum velit veniam minima natus ad neque aut, vel, debitis voluptatum nisi ratione pariatur quod esse, possimus amet obcaecati. Perspiciatis, obcaecati. Eius possimus fugiat vel itaque aspernatur suscipit magni reprehenderit eaque! Beatae nisi consectetur doloremque sequi hic totam consequuntur.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fuga rem quasi placeat, dolores soluta aliquam esse quis nesciunt, totam delectus unde ab consequatur aspernatur, laboriosam in? A eaque velit adipisci dolorum quasi tempora saepe quidem temporibus corrupti facilis impedit voluptatum veniam deserunt iure magni cum, alias reiciendis. Ex eius quia optio corporis quas enim nesciunt? Asperiores iusto alias mollitia modi cum velit veniam minima natus ad neque aut, vel, debitis voluptatum nisi ratione pariatur quod esse, possimus amet obcaecati. Perspiciatis, obcaecati. Eius possimus fugiat vel itaque aspernatur suscipit magni reprehenderit eaque! Beatae nisi consectetur doloremque sequi hic totam consequuntur.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fuga rem quasi placeat, dolores soluta aliquam esse quis nesciunt, totam delectus unde ab consequatur aspernatur, laboriosam in? A eaque velit adipisci dolorum quasi tempora saepe quidem temporibus corrupti facilis impedit voluptatum veniam deserunt iure magni cum, alias reiciendis. Ex eius quia optio corporis quas enim nesciunt? Asperiores iusto alias mollitia modi cum velit veniam minima natus ad neque aut, vel, debitis voluptatum nisi ratione pariatur quod esse, possimus amet obcaecati. Perspiciatis, obcaecati. Eius possimus fugiat vel itaque aspernatur suscipit magni reprehenderit eaque! Beatae nisi consectetur doloremque sequi hic totam consequuntur.</div>  
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default OneSahaby