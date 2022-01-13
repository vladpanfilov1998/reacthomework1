import './App.css';

import Comments from "./hw/Comments";
import Users from "./hw/Users";
import Posts from "./hw/Posts";


function App() {

    return (
        <div id = "wraper">
            <div id = "header">
            <Users/>
            <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;













