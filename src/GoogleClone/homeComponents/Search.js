import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import '../styles/design.css';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { useHistory } from 'react-router-dom';

const Search = ({ hideButtons = false }) => {
    const [{}, dispatch] = useStateValue();
    const [term, setTerm] = useState('');
    const history = useHistory();

    const searchFunc = (e) => {
        e.preventDefault();
        console.log('search');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });

        history.push(`/search`)
    }

    return (
        <>
            <form className="search">
                <div className="search__input">
                    <SearchIcon />
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <MicIcon />
                </div>
                {!hideButtons ? (
                    <div className="search__buttons">
                    <button onClick={searchFunc} type="submit" variant="outlined">
                        Google Search
                    </button>
                    <button variant="outlined">I'm Feeling Lucky</button>
                    </div>
                ) : (
                    <div className="search__buttons">
                    <button
                        className="search__buttonsHidden"
                        onClick={searchFunc}
                        type="submit"
                        variant="outlined"
                    >
                        Google Search
                    </button>
                    <button className="search__buttonsHidden" variant="outlined">
                        I'm Feeling Lucky
                    </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Search;