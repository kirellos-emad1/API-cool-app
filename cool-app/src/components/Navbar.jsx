import React, {useState, useEffect} from 'react'
import Logo from '../images/tinder.png'


export default function Navbar ({allData}) {
    const [query, setQuery] = useState('')
    const updateQuery = (query)=>{
        setQuery(query.trim());
    };
    const showingAPI = query === '' ? allData : allData.filter((n)=>
        n.API.toLowerCase().includes(query.toLowerCase())
    )
    
    return(
        <nav>
            <div className='navbar--container'>
                <img src={Logo} alt="logo" className='logo--img' />
                <div className='search--index'>
                    <label  className='search--label'><i className="fa-solid fa-magnifying-glass"></i></label>
                    <input
                        type="search"
                        placeholder='Search by API name'
                        className='search--input'
                        value={query}
                        onChange={(e)=> updateQuery(e.target.value)}
                    />
                </div>
            </div>
            {showingAPI.length !== allData.length && showingAPI.length !== 0 &&(
                <div className="data-list">
                    {showingAPI.map((data) => (
                    <div key={data.id} >
                        <div className="data-details">
                            <p>{data.description}</p>
                            <a href={data.link} target="_blank">{data.link}</a>
                            <p>{data.category}</p>
                            {showingAPI.length > 1 ?<hr className='break'/>:<></>}
                            
                        </div>
                    </div>
                ))}
            </div>)}
        </nav>
    )
}