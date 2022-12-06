import React, { Component, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {Categories, FeaturePlaylist, NewRelease} from '../../../api/browse'
import {authToken} from '../../../api/auth'


export default class Discover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }


 render() {
    const { newReleases, playlists, categories } = this.state;
    return (
      <div className="discover">
      
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }

 async componentWillMount(){
    await authToken().then((result)=> {

      NewRelease(result.access_token).then((response)=>{
        this.setState({
          newReleases: response.items
        })
      })


        FeaturePlaylist(result.access_token).then((result)=>{
          console.log(result)
          this.setState({
            playlists: result.items
          })
        })

        Categories(result.access_token).then((response)=>{
          this.setState({
            categories: response.items
          })
        })
    })

  }

  

}
