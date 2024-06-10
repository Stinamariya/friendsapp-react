import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewFriend = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get(" https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <h1><center>VIEW FRIEND</center></h1>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
    
      <th scope="col">NAME</th>
      <th scope="col">FRIEND NAME</th>
      <th scope="col">FRIEND NICKNAME</th>
      <th scope="col">DESCRIBE YOUR FRIEND</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value, index)=>{
            return <tr>
        
            <td>{value.name}</td>
            <td>{value.friendName}</td>
            <td>{value.friendNickName}</td>
            <td>{value.DescribeYourFriend}</td>
          </tr>
        }
    )}
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFriend