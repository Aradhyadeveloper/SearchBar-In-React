import React,{useState} from 'react';

function Search(){

    const[arrData,setArrData] = useState([
        {
            "id":1,
            "name":"ram",
            "rollNo":2,
            "phoneNo":"7835353356"
        },
        {
            "id": 2,
            "name": "shyam",
            "rollNo": 2,
            "phoneNo": "783535356"
        },
        {
            "id": 3,
            "name": "mohan",
            "rollNo": 3,
            "phoneNo": "6835353386"
        },
        {
            "id": 4,
            "name": "seeta",
            "rollNo": 4,
            "phoneNo": "68353539884"
        },
        {
            "id": 5,
            "name": "seeta",
            "rollNo": 4,
            "phoneNo": "98353359884"
        },
        {
            "id": 6,
            "name": "ram",
            "rollNo": 4,
            "phoneNo": "98353536884"
        },
        {
            "id": 7,
            "name": "mohan",
            "rollNo": 4,
            "phoneNo": "88353939884"
        },
    ])

    const onChangeHandle=(e)=>{

        if(e.target.value == ""){
            window.location.reload(true);
            const tempArr = arrData
            setArrData(tempArr)
            return
        }

        const searchResult = arrData.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setArrData(searchResult)
    }
    return(
        <div>
            {
                console.log("arrData",arrData)
            }
            <input style={{"width":"280px","height":"30px","border":"2px solid red","borderRadius":"20px"}} onChange={onChangeHandle} placeholder="Enter the name"/><br/><br/>

            <table border="2px" style={{"border":"5px solid red"}}>
           <tr style={{"color":"blue","fontFamily":"sans-serif"}}>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Roll Number</th>
           </tr>
                    {arrData.map(item=>{
                        return(
                            <tr style={{ "color": "indigo", "fontFamily": "sans-serif" }}>
                            <td>{item.name}</td>
                            <td>{item.phoneNo}</td>
                            <td>{item.rollNo}</td>
                            </tr>
                        )
                    })}
                
            </table>
        </div>
    )
}
export default Search;
