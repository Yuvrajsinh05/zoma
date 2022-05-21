import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay'

const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            restaurants:''
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filters</h3> 
                            </center>
                        </div>
                    </div>
                    <ListingDisplay listData={this.state.restaurants}/>
                </div>
            </>
        )
    }
    //page load call api 
    componentDidMount(){
        let mealId = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${restUrl}${mealId}`)
        .then((res) => {this.setState({restaurants:res.data})})
    }
}

export default Listing