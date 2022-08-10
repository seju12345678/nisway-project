import React,{useState} from 'react'

const News = (props) => {
  const [toogle, setToogle] = useState(false)
  function toogleFnc(){
    !toogle?setToogle(true):setToogle(false)
  }


  let date = new Date(props.data.date)
  date = date.toLocaleString()
  const p =  props.data.excerpt.rendered.replace("[" , "").replace("]","")
  
  return (
    <li key={props.data.id}  className="card container  mt-3 mb-5" style={{backgroundColor:"#e3f5f9"}} >
        <h3 className="card-title container  shadow p-3 mb-5  rounded" style={{borderBottom:"black solid 0.15rem", backgroundColor:"#e3f5f9", textAlign:"center" }} dangerouslySetInnerHTML={{__html : props.data.title.rendered}}/>
        <div style={{backgroundColor:"yellow"}}>
          {/* <h6 className="position-absolute top-6 end-0" >{props.data.parsely.meta.publisher.name} </h6> */}
        </div>
      {/* <div className="card-body " style={{ backgroundColor:"red"}}> */}
        <img src={props.data.parsely.meta.image.url} style={{width: "60vw", backgroundColor:"#b5d2fc"}}  className="card-img-top container" alt="..."/>
      {/* </div> */}
        <h5 className="card-title mt-3">Author  -  {props.data.parsely.meta.author[0].name}</h5>
        <hr />
        {!toogle?<div className="card-text" dangerouslySetInnerHTML={{__html:p}} /> : <div className="card-text" dangerouslySetInnerHTML={{__html:props.data.content.rendered}} />}
        <button type="button" onClick={toogleFnc} className="btn btn-sm btn-outline-warning mb-2" style={{backgroundColor:"  #f8ffa2", display:"flex", width:"8rem" }}>
          <p style={{margin:"0",padding:"0", marginRight:"0.50rem"}}>read</p>
          <p style={{margin:"0",padding:"0", marginLeft:"0.50rem"}}>more &hellip;</p>
        </button>
        <h6 style={{borderBottom:"#bbc4cd solid 0.1rem", width:"10rem"}}>{date}</h6>
        <hr />
        <div className='container' style={{ marginBottom:"1rem"}}>
          <a href={props.data.link} className="btn btn-primary btn-sm" >View More</a>
        </div>
    </li>
  )
}

export default News