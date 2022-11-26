import React,{useState} from "react";

export default function Main(props) {
    const apiElement = props.allData.map(data=>(
            <div className="apis-list">
                <p>{data.API}</p>
                <p>{data.description}</p>
                <p>{data.link}</p>
                <p>{data.category}</p>
            </div>
    ))
    const cateElement = props.categories.map(data=>(
            <div className="category-list">
                <p>{data}</p>
            </div>
    ))
    const [apiClick, setApiClick] = useState(false)
    const [categoryClick, setCategoryClick] = useState(false)
    function handelApiClick(){
        setApiClick(prevClicked=>{
          return !prevClicked
        })
      }
    function handelCateClick(){
        setCategoryClick(prevClicked=>{
          return !prevClicked
        })
      }
    return(
        <main>
            <h1>Welcome to our API collection APP </h1>
            <p>get your API from {props.allData.length} API in our collection</p>
            <p>use the search to find the API you want</p>
            <div className="APIs">
                <h2>Show all APIs from</h2>
                <button className="btn" onClick={handelApiClick}>Here!</button>
            </div>
            {apiClick? 
                <div>
                        {apiElement}
                </div>
                :<></>
            }
            <div className="APIs">
                <h2>Show all Categories from</h2>
                <button className="btn" onClick={handelCateClick}>Here!</button>
            </div>
                {categoryClick? 
                    <div>
                            {cateElement}
                    </div>
                    :<></>
                }
        </main>
    )
}