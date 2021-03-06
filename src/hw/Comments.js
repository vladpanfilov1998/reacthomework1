import {useEffect, useState} from "react";

import Comment from "./Comment";
export default function Comments () {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, []);

    return (
        <div id = "comment">
            <ul>
                {
                    comments.map(value => <li key={value.id}><Comment item={value}/></li>)
                }
            </ul>
        </div>
    );
}