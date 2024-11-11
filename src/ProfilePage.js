import React,{useState,useEffect } from "react";
function ProfilePage(){
    const[Username,setUsername]=useState('john')

    useEffect(()=>{
        document.title='welcome ${Username}';
        return ()=>{
            document.title='to my website';

        }
    },[Username])

    return(
        <div><h1>welcome {Username}</h1>
        <button onClick={()=>{setUsername('alice')}}>change name</button>
        </div>
    );
}
export default ProfilePage;