
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
    constructor(){
        super();

        this.addFish= this.addFish.bind(this);
        this.loadSamples= this.loadSamples.bind(this);
        //get inicial state
        this.state={
           fishes: {},
           order: {}
        };
    }

    addFish(fish){
        //update our state
        const fishes = {...this.state.fishes};

        // add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish; //tem que usar acento grave - crase - para fazer interpolação de string 
        
        //set state
        this.setState({fishes})

    }

    loadSamples(){
        this.setState({
           fishes: sampleFishes
        });
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood Market"/>
                </div>
                 <Order/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;

 