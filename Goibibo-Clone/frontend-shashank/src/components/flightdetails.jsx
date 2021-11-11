import { useEffect, useState } from 'react';
import "./flightdetails.css";


const axios = require('axios').default;




function Flight()
{
    const [data,setData]=useState([])
    const [count,setCount]=useState(0)

    const [ticketType,setTickettype]=useState("")

    const [show_ticket,setShow_ticket]=useState(false);

    const [from,setForm]=useState("pune");


    useEffect(()=>{

        axios.get('http://localhost:3004/flights_details')
        .then(function (response) {
         
          setData(response.data);
          console.log(response.data)
        })
        
    },[from])

    const [adult,setAdult]=useState(0)
    const [children,setChildren]=useState(0)
    const [infant,setInfant]=useState(0)

    const [curr_data,setCurrdata]=useState({
        from:"",
        destination:"",
        departure:"",
        return:"",
        tickettype:{ticketType},
        tickets:{count}

    })

const handleCount=(value)=>{
    if(adult+value!==-1)
    {
        setAdult(adult+value)
        setCount(count+value)

    }
    else{
        return;
    }}


    const handleForm=(e)=>{
        e.preventDefault()
        console.log("curr _data",curr_data)
        setForm(curr_data.from)
        

    }


    const handlechange=(e)=>{

    

        const {name,value,checked,type} =e.target;
        // console.log(e.target.value,e.target.name)
        //console.log(e.target.type)
        setCurrdata({
            ...curr_data,
            [name]:type === 'checkbox' ? checked :value
        })


        
    }


    


    const handlebook=async (e)=>{
        const data =await axios.post('http://localhost:3004/bookmarks', e)
        console.log("bookmarked",data.data)
    }
    
    return(
        <div >


            {/* searchbox */}
            
            <div className="input_data">

            <div style={{display:"flex",justifyContent:"left",margin:"0 130px "}}>
            <input type="radio" value="one way"></input>one way
            <input type="radio" value=""></input>round trip
            </div>
            
            <form className="form_input" onSubmit={handleForm}>
                <input placeholder="From" name="from" onChange={handlechange}></input>
                <input placeholder="Destination" name="destination" onChange={handlechange}></input>
                <input  type="text"   onFocus={(e) => e.target.type = 'date'} placeholder="Departure" name="departure" onChange={handlechange}></input>
                <input type="text"   onFocus={(e) => e.target.type = 'date'}  placeholder="Return" name="return" onChange={handlechange}></input>
                <div onClick={()=>setShow_ticket(!show_ticket)} style={{width:"200px",border:"1px solid black"}} >{count} travellers,{ticketType}</div>

               
               <input type="submit" value="UPDATE SEARCH"></input>

            </form>

            <div style={{display:"flex",justifyContent:"left" ,margin:"0px 130px"}} >
         <input type="radio"></input>    Student Fare 
                <input type="radio"></input>Defence Fare
                <input type="radio" ></input>Senior Citizen Fare
                <input type="radio"></input>Show extra Seat Option
            </div>

             {/* travelling class selection */}
             { show_ticket && <div className="travelling_class">
            <div style={{display:"flex",justifyContent:"center"}}>
            <div>
                    <label>Adults</label>   <h1>{adult}</h1>
                    <button onClick={()=>{handleCount(-1)}}>-</button>
                 
                    <button  onClick={()=>{handleCount(1)}}>+</button>
            </div>

            <div>
                    <label>Children</label>   <h1>{children}</h1>
                    <button onClick={()=>{
                        if(children-1 !==-1)
                        {
                        setChildren(children-1);
                        setCount(count-1);
                        }
                        }}>-</button>
                 
                    <button  onClick={()=>{setChildren(children+1); setCount(count+1);}}>+</button>
            </div>

            <div>
                    <label>Infants</label>   <h1>{infant}</h1>
                    <button onClick={()=>{
                        if(infant-1 !==-1)
                        {
                            setInfant(infant-1);
                        setCount(count-1);
                        }
                        }}>-</button>
                 
                    <button  onClick={()=>{setInfant(infant+1); setCount(count+1);}}>+</button>
                        <br></br>
                   
            </div>

            </div>

            <div>
            Travel class: <select onChange={(e)=>{
               
                setTickettype(e.target.value)
            }}>
                        <option>First Class</option>
                        <option>Econmony</option>
                        <option>Business</option>
                        <option>Premium Econmony</option>
            </select>
            </div>
            </div>}


            </div>


            
            {/* tickets display section */}
            <div className="body">
            <div className="filters" >
            <h3>Filters</h3>

            {/*  filter departure div */}
            <div >
                <h4>Departures</h4>

                <div className="departures">
                <div onClick={
                    ()=>{
                        setData(data.filter((e)=>e.fromTime >11.00))
                    }
                } >Before 11 am</div>
                <div> 11 am -5 pm</div>
                </div>
                
                <div  className="departures">
                <div>5pm-9pm</div>
                <div>After 9pm</div>
                </div>
               
            </div>
                
            </div>

            <div className="details_flight">
            {data.filter((e)=>(e.from===`${from}` && e.date==="2021-11-11") ).map((e)=>(
                <div className="particular_flight">
                    <div className="curr_flight">
                        
                         <div><img src={e.img}></img>{e.company}</div>
                         <div>{e.from}</div>
                         <div>{e.fromTime}</div>
                    </div>
                
                  <div>{e.duration}</div>
                <div>
                <div>{e.to}</div>
                <div>{e.toTime}</div>
                 </div>

                 <div>${e.price}</div>   
                
           
                <button onClick={()=>{
                    console.log(e)
                    handlebook(e)

                    
                }}>BOOK</button>
                <br></br>
                </div>
                
                
            ))}

            </div>

            </div>
            
           
            
        </div>
    )
}

export {Flight}