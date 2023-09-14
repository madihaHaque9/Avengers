
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
    const[allActors,setAllactors]=useState([])
    const[selectedActors,setSelectedActors]=useState([])
    const [remaining,setRemaining]=useState(0);
    const [totalCost,setTotalCost]=useState(0)

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setAllactors(data))
    },[])
    const handleSelect=(actors)=>{
        const isExist=selectedActors.find((item)=>item.id==actors.id)
        let count=actors.salary;
       if(isExist){
       return alert('already booked')
       }
        else{
            selectedActors.forEach(item=>{
                count=count+item.salary
            })
            const totalRemaing=20000-count;
            
            if(totalCost>20000){
              return alert('money finish')
            }
           else{
            setTotalCost(count);
            setRemaining(totalRemaing)
            setSelectedActors([...selectedActors,actors])
           }
        }

    }
    
    return (
        <div className='container'>
            <div className='home-container'>
            <div className="card-container">
            {
                // eslint-disable-next-line no-unused-vars
                allActors.map(actors=>(
                    <div key={actors.id} className="card">
            <div className="photo">
            <img src={actors.image} alt="" />
            <h2>Name:{actors.name}</h2>
            <small>ectetur at enim tenetur cumque deleniti rerum id, autem aspernatur aliquam.</small>
            </div>

                   <div className="info">
                    <p className="salary">
                        Salary:{actors.salary}
                    </p>
                    <p className='writer'>Writer:{actors.role}</p>
                   </div>
                   <button onClick={()=>handleSelect(actors)} className='card-btn'>Select</button>
                </div>
                ))}
            
            </div>
             <div className="cart">
           <Cart selectedActors={selectedActors}remaining={remaining}totalCost={totalCost}></Cart>
             </div>

            </div>
        </div>
    );
};

export default Home;