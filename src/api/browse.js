import * as config from '../config'
import axios from 'axios'

const api = config.default.api;

export const NewRelease = async(accesToken) =>{
    const authString = { Authorization: 'Bearer' + ' '  + accesToken }

    const playlist = await axios.get(`${api.baseUrl}/browse/new-releases`,  { headers: authString })
    return playlist.data.albums
}

export const FeaturePlaylist = async(accesToken) =>{
    const authString = { Authorization: 'Bearer' + ' '  + accesToken }

    const playlist = await axios.get(`${api.baseUrl}/browse/featured-playlists`,  { headers: authString })
    return playlist.data.playlists
}

export const Categories = async(accesToken) =>{
    const authString = { Authorization: 'Bearer' + ' '  + accesToken }

    const playlist = await axios.get(`${api.baseUrl}/browse/categories`,  { headers: authString })
    return playlist.data.categories
}
