import {useEffect, useState} from "react";

const About = () =>{

    const [userInfo, setUserInfo] = useState(null);

    const fetchData = async() =>{
        const data = await fetch("https://api.github.com/users/manosmita1234");
        const json = await data.json();
        
        console.log(json);
        setUserInfo(json);
    }

    useEffect(()=>{
        fetchData();
    }, []);

       if (!userInfo) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
        <h1>About us</h1>

        <h3>{userInfo?.name} </h3>
        </div>
    )
}

export default About;