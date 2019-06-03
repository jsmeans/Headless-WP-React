class ImageContent extends React.Component {

    render() {
        let acf = this.props.modules;
        console.log(acf);
        let imgBlocks = acf.image_blocks
        console.log(imgBlocks);
        return (
            
           	<div>
           		{acf.section_title.length > 0 &&
		    		<h2>{acf.section_title}</h2>
			    }

              <div className="block-grid">
              	{imgBlocks.map(function(blocks, index) {

                    console.log(blocks.linkImage);
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
                    
                    return(

                        <section className="block"   key={index}>
	                       <div className="img" style={{backgroundImage: "url('" +  bg  +"')"}}>
                                                
	                            

				                    <a className="text" href={link}>

				                      	{blocks.link_title.length > 0 &&
								    		<h3>{blocks.link_title}</h3>
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

export default ImageContent;