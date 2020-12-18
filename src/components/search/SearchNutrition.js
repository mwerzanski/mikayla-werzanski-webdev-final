import React from 'react'
import {Link} from 'react-router-dom'
import NavbarComponent from '../NavbarComponent';
import Axios from 'axios'
import SearchItemCard from './SearchItemCard'
import {store} from '../../store'
import {readUser} from '../../actions/userAction'

export default class SearchNutrition extends React.Component {
    constructor() {
        super()
        this.state = {
            foodName: '',
            searchItems: [],
            error: '',
            searchComplete: false
        }
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    componentDidMount() {
        Axios.get(`http://localhost:3000/api/final/users/${this.props.match.params.userID}`)
        .then((response) => {
            store.dispatch(readUser('READ_USER', response.data))
            this.setState({
                admin: response.data.admin
            })
        }).catch((error) => {
            this.setState({
                error: error
            })
        })
    }

    search() {
        let nutritionixHeaders = {
            headers: {
                'x-rapidapi-key': '1d2d160c46msha6a69b47a161a69p10ced2jsn81a16b4c0326',
                'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
                'useQueryString': true
            }        
        }
        Axios.get(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${this.state.foodName}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, nutritionixHeaders)
        .then((response) => {
            this.setState({
                searchItems: response.data.hits,
                searchComplete: true
            })
            return response.data.hits
        }).catch((error) => {
            this.setState({
                error: error
            })
        })
    }


    render() {
        return (
            <div className="text-center">
                <NavbarComponent/>
                <h3 className='pt-4'>Search Food Item Nutrition</h3>
                <div>
                    <label for="foodName">Search by recipe name or search an ingredient:</label>
                    <br/>
                    <input id="foodName" value={this.state.foodName} onChange={(e) => this.onChange('foodName', e)}></input>
                    <Link className="btn btn-outline-primary ml-4" to="/ViewNutritionInformation" onClick={() => this.search()}>Search</Link>
                </div>
                {
                    this.state.searchComplete && 
                    <div>
                        <h3 className="text-left">Top 10 search results:</h3>
                        {
                            this.state.searchItems.length > 0 && 
                            <div>
                                {
                                    this.state.searchItems.map((searchItem, index) =>
                                    <div className='card col-12 mb-2' key={index}>
                                        <SearchItemCard 
                                            title={searchItem.fields.item_name} 
                                            calories={searchItem.fields.nf_calories} 
                                            servingUnit={searchItem.fields.nf_serving_size_unit}
                                            brandName={searchItem.fields.brand_name}
                                            totalFat={searchItem.fields.nf_total_fat}
                                        />
                                    </div>)
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}