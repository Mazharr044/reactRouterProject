import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then((finalData) => {
    //         console.log(data);
    //         setData(finalData)
    //     })
    // },[])
    const data = useLoaderData()
    return (
        <div className=' bg-gray-600 text-white mb-4 text-3xl p-4'>Github Followers : {data.followers}
        <img src={data.avatar_url } alt="Github picture" width={300} />
        </div>
    )
}

export default Github
export const GithubInfoLoader = async () => {
       const response= await fetch('https://api.github.com/users/hiteshchoudhary')
        return response.json()
}
