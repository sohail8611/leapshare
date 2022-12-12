import React from 'react'
import styles from './outdoor.module.css'
// import MapExample from '../../components/map/Map'
import Map from "../../components/map/Map";
import { Button } from '@mui/material';

function outdoor() {
    return (
       //maindiv
        <div className={ styles.container }> 

            <div className={styles.heading}>
                <h1>OutDoor</h1>
            </div>
            <div className={styles.body}>
                    <div className={styles.mapContainer}>
                        
                    <Map/>
                    {/* <h1>hello world</h1> */}
                    </div>

                    <div className={styles.sideInfoBar}>
                        <h5>HeatMap Catagories</h5>
                        <Button variant="text" onMouseEnter={()=>console.log("mouse hovered on trees")}>Trees</Button>
                        <Button variant="text" onMouseEnter={()=>console.log("mouse hovered on cracks")}>cracks</Button>
                        <Button variant="text" onMouseEnter={()=>console.log("mouse hovered on lights")}>lights</Button>
                        <Button variant="text" onMouseEnter={()=>console.log("mouse hovered on sky")}>sky</Button>
                        <Button variant="text" onMouseEnter={()=>console.log("mouse hovered on evnirment")}>envirnment</Button>
                    </div>
            </div>

            

        </div>
        //maindiv end
        
    
            
    )
}

export default outdoor;