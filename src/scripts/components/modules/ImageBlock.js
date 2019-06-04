class ImageBlock extends React.Component {

  render() {
    let acf = this.props.modules;
    // console.log(acf);
    let imgBlocks = acf.image_blocks;
    // console.log(imgBlocks);
    return (
        
      <div className="flex-box contain">
        {acf.section_title.length > 0 &&
            <h3>{acf.section_title}</h3>
          }
        <div className="block">
          
          {imgBlocks.map(function(blocks, index) {
            
            // console.log(blocks.linkImage);
            var bg;

            if (blocks.linkImage.length > 0) {
              bg = blocks.linkImage;
            } else {
              bg = null;
            }

            var title;
            
            if (blocks.title.length > 0) {
              title = blocks.title;
            } else {
              title = null;
            }
                  
            return(

              <section className="img-block" key={index}>

                <div className="img" style={{backgroundImage: "url('" +  bg  +"')"}}> </div>
                
                <h4>{ title }</h4>
  
              </section>

            );                
          
          })}
     
        </div>

      </div>
             
    );
  }
}

export default ImageBlock;