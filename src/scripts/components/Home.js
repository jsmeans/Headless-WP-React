import DataStore 			      from 'scripts/flux/stores/DataStore.js';
import Modular              from './Modular';

class Home extends React.Component {
    render() {

    	let pageData = DataStore.getPageBySlug('home');
        let acf = pageData.acf.modules;
    
        return (
        	<div className="main">
	            <div id="hero">
              
	                <h1>Hello!</h1>
	                
	            </div>
	            <Modular modules={acf}/>
	        </div>
        );
    }
}

export default Home;