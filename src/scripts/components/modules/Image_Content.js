class ImageContent extends React.Component {

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

        <div className="block-grid contain">

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
            
            if (blocks.block_content.length > 0) {
              content = blocks.block_content;
            } else {
              content = null;
            }
                  
            return(

              <section className="block"   key={index}>
                <div className="img-block">
                  <div className="img" style={{backgroundImage: "url('" +  bg  +"')"}}>
                    
                    

                  </div>
                  {blocks.link_title.length > 0 &&
                    <p>{blocks.link_title}</p>
                  }
                </div>
                <div className="content-block">
                  <p>{content}</p>
                  
                </div>

              </section>

            );                
          
          })}
     
        </div>

      </div>
             
    );
  }
}

export default ImageContent;