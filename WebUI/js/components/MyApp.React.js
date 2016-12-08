var MetaStore = require('../stores/MetaStore');
import Greeting from './Greeting.React'

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Greeting name="Hello"/>
            </div>
        )
    }
}

export default MyApp;