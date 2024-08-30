import { useEffect, useState } from "react";

function Notes(){
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const token = localStorage.getItem("token");
        try{
            const response = await fetch ("https://devnotesapp.onrender.com/note",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log("response data:", data);

        // Assuming data.notes is an array, log each note
        data.notes.forEach((note, index) => {
            console.log(`Note ${index + 1}:`, note);
        });
            setNotes(data.notes);            
        }
        catch(error){
            alert(`An error occured ${error}`);
        }
    }
    useEffect(() => {
        fetchNotes();
    }, [])

    const handleDelete = async (_id) => {
        const token = localStorage.getItem("token");
        try{
           
            await fetch(`https://devnotesapp.onrender.com/note/delete/${_id}`,{
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("zz")
            fetchNotes();
        }
        catch(error){
            console.log("Error", error)
            alert(`An error ocured ${error}`);
        }
    }
    const handleLogout = () =>{
        localStorage.removeItem("token");
        window.location.href ="/login";
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        <h1>Notes</h1>
        {notes.length > 0 ? (
            notes.map((note) => (
                <div key={note._id}>
                    <h2>{note.title}</h2>
                    <p>{note.description}</p>
                    <button onClick={() => handleDelete(note._id)}>Delete note</button>
                </div>
            ))
        ) : (
            <h2>No notes to display</h2>
        )}
    </div>
      );
  }
  export default Notes;