import {  useState } from "react"

import "./inputbar.css"

function Inputbar()
{
    const [adult,setAdult]=useState(0)
    const [children,setChildren]=useState(0)
    const [infant,setInfant]=useState(0)

    const [count,setCount]=useState(0)

    const [ticketType,setTickettype]=useState("")

    const [show_ticket,setShow_ticket]=useState(false)

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


    return(
        <div className={"parent"}>
          <h2 style={{textAlign:"left",margin:"0px 130px",color:"white"}}>Domestic and international flights</h2>
            

        <div className="roundSection">
            <div>
            ONE WAY
            </div>
            <div>
                ROUND TRIP
            </div>
            <div>
                MULTICITY
            </div>
        </div>

            <form className="form_input" onSubmit={handleForm}>
                <input placeholder="From" name="from" onChange={handlechange}></input>
                <input placeholder="Destination" name="destination" onChange={handlechange}></input>
                <input  type="text"   onFocus={(e) => e.target.type = 'date'} placeholder="Departure" name="departure" onChange={handlechange}></input>
                <input type="text"   onFocus={(e) => e.target.type = 'date'}  placeholder="Return" name="return" onChange={handlechange}></input>
                <div onClick={()=>setShow_ticket(!show_ticket)} style={{width:"200px",border:"1px solid black"}} >{count} travellers,{ticketType}</div>

               
               <input type="submit" value="SEARCH"></input>

            </form>

            <div style={{display:"flex",justifyContent:"left" ,margin:"0px 130px"}} >
         <input type="checkbox"></input>    Student Fare 
                <input type="checkbox"></input>Defence Fare
                <input type="checkbox" ></input>Senior Citizen Fare
                <input type="checkbox"></input>Show extra Seat Option
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

    )
}

export {Inputbar}