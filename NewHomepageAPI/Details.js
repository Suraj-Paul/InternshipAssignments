import React,{Component} from 'react';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import axios from 'axios';
import {Carousel} from 'react-responsive-carousel';
const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClint = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let coll_name = "project"






class Details extends Component{
    constructor(){
        super();
        this.state = {
            restDetails: null
        }
    }
    render(){
        const{ restDetails} = this.state;
        return(
            <div>
                {restDetails && <div>
                    <Carrousal showThumbs = {false}>
                        {restDetails.thumb.map((item,index) => {
                            return <div>
                                <img src={item}/>
                        <p className = "legend">{`Image${index}`}</p>
                            </div>
                        })}

                    </Carrousal>
                    <div className ="heading">{restDetails.name}</div>
                    <Tabs>
                        <TabList>
                            <Tab><span className ="overview">Overview</span></Tab>
                            <Tab><span className ="overview">Contacts</span></Tab>
                        </TabList>
                        <TabPanel>
                            <div>
                                <div className = "about">About this Place</div>
                                <br/>
                                <div className = "cuisine">Cuisine</div>
                                <div className = "mealtype">{restDetails.cuisine}</div>
                                <br/>
                                <div className = "cuisine">Average Cost</div>
                                <div className = "mealtype">{`₹${restDetails.min_price} for two people (Approx).`}</div> 
                            </div>    
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <div className = "Contact">Phone Number</div>
                                <div className = "num">{restDetails.contact_number}</div>
                                <br/>
                                <div className = "header">{restDetails.name}</div>
                                <div className = "address">{restDetails.address}</div>
                            </div>     
                        </TabPanel>
                    </Tabs>
                    </div>}     
            </div>
        )
    }
}