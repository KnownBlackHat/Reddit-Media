import SearchIcon from "./SearchIcon";
import { useRef } from "react";
import SearchBar from './Searchbar'

export default function Navbar ({setquery,setspeed,setsubreddit,unsafe_filter,setunsafe_filter}) {
    const search = useRef()
    const speed = useRef()
    const subreddit_inp = useRef()
    const handleForm = (e) => {
        e?.preventDefault();
        setquery(search.current.value);
        setspeed(speed.current.value);
        subreddit_inp.current.value && setsubreddit(subreddit_inp.current.value) 
    };
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleMouse = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setunsafe_filter(unsafe_filter?false:true)
    };
    const handleInputEnter = (e) => {
        if (e.key === "Enter") {
            e?.preventDefault();
            handleForm();
        }
    }

    return (
        <>
            <form id="form" 
                onSubmit={handleForm}
                className="z-10 justify-between rounded bg-gradient-to-t from-black to-red-900 my-2 p-4 sticky top-0" 
            >
                <div id="query" className="flex md:items-center flex-col md:flex-row grow space-y-2 md:space-y-0 md:space-x-2">
                    <div class='flex justify-between space-x-2 grow'>
                    <input id="search" ref={search} onKeyPress={handleInputEnter} autoComplete="off" placeholder="Topic" type="search" className="text-center rounded p-2 bg-white/30 w-[100%]" />
                    <button  className={`text-center rounded p-1 h-10 bg-${unsafe_filter?'red':'green'}-600/70  text-xs`} 

                    onClick={handleClick}

                    onMouseDown={handleMouse}>
                    {unsafe_filter?'NSFW':'Non-NSFW'}
                    </button>
                </div>
                <SearchBar unsafe_filter={unsafe_filter} placeholder="Subreddit" subreddit_inp={subreddit_inp}/>

                <div class='flex items-center justify-between space-x-2'>
                <span>PlayBack Speed:</span> <input id="speed" ref={speed} className="w-10 text-center rounded bg-white/30" defaultValue="1" type="number" max="4" min="0.5" step="0.5" required />
                <button className="w-[5em]" type="submit">
                <SearchIcon  />
                </button>
                </div>
                </div>
            </form>
        </>
    )
}
