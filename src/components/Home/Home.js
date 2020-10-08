import React from 'react';
import Header from '../Header/Header';
import Task from '../Task/Task';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import home from '../../components/Images/images/bg.jpg';
import './Home.css'


const tasks = [
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Refuge shelter',
        pic: 'refuseShelter.png'
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        name: 'Host a clothing swap',
        pic: 'clothSwap.png'
    },
    {
        name: 'Host a river clean-up',
        pic: 'riverClean.png'
    },
    {
        name: 'Clean water for children',
        pic: 'cleanWater.png'
    },
    {
        name: 'Good education',
        pic: 'goodEducation.png'
    },
    {
        name: 'New books for children',
        pic: 'newBooks.png'
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        name: 'Host a clothing swap',
        pic: 'clothSwap.png'
    },

];


const Home = () => {

    

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(255, 252, 252, 0.9), rgba(255, 252, 252, 0.9) ), url(${home})` }} className="home">
            <div>
                <Header></Header>
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                {/* <input type="text">Search</input> */}

                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            
            <Task></Task>

        </div>
    );
};

export default Home;