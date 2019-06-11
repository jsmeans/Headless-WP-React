class Contact extends React.Component {
   render() {
        let acf = this.props.modules;
        
        let ContactBlocks = acf.contact_block
       
        return (
            <div className="page-container">

            	<div className="question">
            	<p>Interested?</p>
            	</div>

               <div className="contact-container">
           		{acf.section_title.length > 0 &&
		    		<h2>{acf.section_title}</h2>
			    }

              <div className="block-grid">
              	{ContactBlocks.map(function(ContactBlocks, index) {

                    // console.log(ContactBlocks.linkImage);
                    var bg;
					// if (ContactBlocks.linkImage.length > 0) {
					//   bg = ContactBlocks.linkImage;
					// } else {
					//   bg = null;
					// }
					// var link;
					// if (ContactBlocks.link.length > 0) {
					// 	link = ContactBlocks.link;
					// } else {
					// 	link = null;
					// }
                    
                    return(

                        <section className="contact_block"   key={index}>
	                       <div className="info">
                                                
	                            

				                   

				                      	{ContactBlocks.block_title.length > 0 &&
								    		<h3>{ContactBlocks.block_title}</h3>
									    }
									    {ContactBlocks.block_info.length > 0 &&
								    		<p>{ContactBlocks.block_info}</p>
									    }

				                   

				               
			                </div>
                        </section>

                    );                
            
                })}

                
              </div>
              </div>
              </div>
               

              
            
        );
    }
}

export default Contact;