import DataStore 			      from 'scripts/flux/stores/DataStore.js';
import Modular              from './Modular';

class About extends React.Component {
	
    render() {
        let pageData = DataStore.getPageBySlug('about');
        let acf = pageData.acf.modules;    
        
        console.log(acf);
        return (
            <div className="main">
            	<div id="hero">
               
	                <h1>{pageData.title.rendered}</h1>

	                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
	                <img id="hero-img" src={pageData.acf.header_image.url}/>
	                
	            </div>
              <Modular modules={acf}/>
	            
	        </div>
        );
    }
}

export default About;