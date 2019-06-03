class ImageBackground extends React.Component {
    render() {
        let acf = this.props.modules;
        console.log(acf.image);
        var bg;
		if (acf.image.length > 0) {
		  bg = acf.image;
		} else {
		  bg = null;
		}


        return (

        	
            <div className="module-image-bg background-img bg-fixed text-light" style={{backgroundImage: "url('" +  bg  +"')"}}>

			  	<div className="text-wrap">

			   		<div className="row text-light">
			   			{acf.section_title.length > 0 &&
				    		<h2>{acf.section_title}</h2>
					    }					    
					    {acf.content.length > 0 &&
					    	<div className="content" dangerouslySetInnerHTML={{__html: acf.content}}/>
					    }      		

			    	</div>

			  	</div>

			</div>  
               
                 
              
            
        );
    }
}

export default ImageBackground;