import {Link} from 'react-router-dom'

const NotFound=()=>{
    return(
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <link to='/'>Back to the homePage...</link>
        </div>
    )
}
export default NotFound;