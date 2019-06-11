class ImageLinks extends React.Component {

  render() {
    let acf = this.props.modules;
    // console.log(acf);
    let imgBlocks = acf.image_blocks;
    // console.log(imgBlocks);
    return (
        
      <div className="contain">
        
        {acf.section_title.length > 0 &&
          <h2>{acf.section_title}</h2>
        }
        {acf.section_description.length > 0 &&
          <p className="description">{acf.section_description}</p>
        }
        <div className="block-grid">

          {imgBlocks.map(function(blocks, index) {

            // console.log(blocks.linkImage);
            var bg;

            if (blocks.linkImage.length > 0) {
              bg = blocks.linkImage;
            } else {
              bg = null;
            }

            var link;

            if (blocks.link.length > 0) {
              link = blocks.link;
            } else {
              link = null;
            }

            var content;
            
            if (blocks.content.length > 0) {
              content = blocks.content;
            } else {
              content = null;
            }

            var title;
            
            if (blocks.title.length > 0) {
              title = blocks.title;
            } else {
              title = null;
            }
                  
            return(

              <section className="block"   key={index}>

                <div className="img" style={{backgroundImage: "url('" +  bg  +"')"}}>
                    
                  

                </div>
                <div className="content-block">
                  <h3>{ title }</h3>
                  <p>{content}</p>
                  <a className="text" href={link}>

                    {blocks.link_title.length > 0 &&
                      <p>{blocks.link_title}</p>
                    }

                  </a>
                </div>

              </section>

            );                
          
          })}
     
        </div>

      </div>
             
    );
  }
}

export default ImageLinks;