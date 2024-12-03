import Button from "./Button"

// const list=["All", "Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentines","JavaScript","Mixes","ACP Pradyuman","News","Nadeem-Shravan", "Movie musicals", "Indian pop music", "Gulshan kumar songs","Recently uploaded", "Watched", "Kumar sanu","New to you","T-series", "Harkirat Sings", "Akshay saini"];
const list=["All", "Gaming","Songs","Live","Soccer","Cricket","Cooking"];
const ButtonList = ()=>{
    return (
        <div className="flex">

            {
                list.map((names)=><Button key={names} name={names}/>)
            }

            
        </div>
    )
}

export default ButtonList;