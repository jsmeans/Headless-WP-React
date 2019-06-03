import Intro                from './modules/Intro.js';
import ImageContent         from './modules/Image_Content.js';
import ImageLinks         from './modules/ImageLinks.js';
import ImageBackground      from './modules/Image_Background.js';
import ContactModule        from './modules/ContactModule.js';

class Modular extends React.Component {

  render(){
    let acf = this.props.modules;
    return(
      <div>
        {acf.map(function(acf_objects, index) {
        
          // console.log(acf_objects.acf_fc_layout);
          var block = acf_objects.acf_fc_layout;
          var module;
          if (block == 'intro') {
            module = <Intro modules={acf_objects} />;
          } else if (block == 'image_links'){
            module = <ImageLinks modules={acf_objects} />;
          } else if (block == 'image_background'){
            module = <ImageBackground modules={acf_objects} />;
          }else if (block == 'image_content'){
            module = <ImageContent modules={acf_objects} />;
          }else if (block == 'contact_me'){
            module = <ContactModule modules={acf_objects} />;
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

export default Modular;