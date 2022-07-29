import { useState } from "react";

function ReviewForm() { 
    const[name,setName]=useState("");
    const[review,setReview]=useState("");
    const[list,setList]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,review)
        const data={name,review}
        if(name&&review){
            setList((ls)=>[...ls,data])
            setName("")
            setReview("")
        }

    }

    return (        

        <div className="form">
            <div className="card-header bg-primary w-125">
                <h4>Leave a Review</h4>
            </div>
            <div className="card-body bg-secondary w-125">
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input name="name" value={name} onChange={(e)=>setName(e.target.value)} className="text-black"
                type="text"
                required
                ></input>
                <label>Review:</label>
                <textarea name="review" value={review} onChange={(e)=>setReview(e.target.value)} className="text-black" rows={3} cols={3}>
                    

                </textarea><br></br>
                <button className="button btn-primary">Submit</button>
            </form>

            {
                list.map((a)=><div className="review">
                    <b id="review">{a.name}</b><br></br><br></br>
                    <a>{a.review}</a>
                   </div>)
            }          
            

        </div>
        </div>

    );
}

export default ReviewForm;