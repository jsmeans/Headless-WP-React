import DataStore            from 'scripts/flux/stores/DataStore.js'
import Intro                from 'scripts/components/modules/Intro.js';
import ImageContent         from 'scripts/components/modules/Image_Content.js';
import ImageBackground      from 'scripts/components/modules/Image_Background.js';

class Work extends React.Component {
    
    render() {
        let pageData = DataStore.getPageBySlug('work');
        let acf = pageData.acf.modules;    
        
        console.log(acf);
        return (
            <div className="main">
                <div id="hero">
               
                    <h1>{pageData.title.rendered}</h1>

                    <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                    <img id="hero-img" src={pageData.acf.header_image.url}/>
                    
                </div>

                {acf.map(function(acf_objects, index) {

                    console.log(acf_objects.acf_fc_layout);
                    var block = acf_objects.acf_fc_layout;
                    var module;
                    if (block == 'intro') {
                      module = <Intro modules={acf_objects} />;
                    } else if (block == 'image_links'){
                      module = <ImageContent modules={acf_objects} />;
                    } else if (block == 'image_background'){
                      module = <ImageBackground modules={acf_objects} />;
                    }
                    return(

                        <section className={"module " + block}   key={index}>
                       
                           {module}                     
                            
                        </section>

                    );                
            
                })}
            </div>
        );
    }
}

export default Work;