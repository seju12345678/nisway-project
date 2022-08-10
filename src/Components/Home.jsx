import React, {useState, useEffect} from 'react'
import axios from 'axios'
import News from './News'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchdata(){
            const listOfData = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10")
            setData(listOfData.data)
        }
        fetchdata()
    },[])

    return (
        <ul className='container' style={{backgroundColor:"#ffa725"}}>
            
            {data.map((element,index)=> <News data={element} index={index}/> )}

        </ul>


    )
}

export default Home