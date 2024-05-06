const Contact = () =>{
    return(
        <div className="m-3 p-5">
            <h1 className="text-3xl font-bold m-2">Contact Us</h1> 
            <div>
                <form>
                    <input className="border border-black block p-2 m-2" type="text" placeholder="name"></input>
                    <input className="border border-black block p-2 m-2" type="email" placeholder="email"></input>
                    <textarea className="border border-black block p-2 m-2" rows={4} cols={50} placeholder="Type you message here"></textarea>
                    <button type="submit" className="bg-gray-200 p-2 m-2 rounded-md block">Submit</button>
                    
                </form>
            </div>

        </div>
    );
}


export default Contact;