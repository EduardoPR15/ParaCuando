
import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import LikeButton from '../../components/LikeButton'
import NextArrow from '../../components/NextArrow'
import NextButton from '../../components/NextButton'
import SearchBar from '../../components/SearchBar'
import ProfileIcon from '../../components/ProfileIcon'
import Searcher from '../../components/Searcher'
import EventCard from '../../components/EventCard'

const index = () => {
  return (
    <div>
    <h1> EventCard :</h1>
 <EventCard/>
    <h1>Footer:</h1>
    <Footer/>
    <h1>Header:</h1>
    <Header/>
    <h1>Layout:</h1>
    <Layout/>
    <h1>Like button:</h1>
   
    <h1>Next arrow button: </h1>
    <NextArrow/>
    <h1>Next button:</h1>
    <NextButton/>
    <h1>Profile icon</h1>
    <ProfileIcon/>
    <h1>Search bar:</h1>
    <SearchBar/>
    <h1>Searcher:</h1>
    <Searcher/>

</div>
  )
}

export default index