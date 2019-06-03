class intro extends React.Component {
   render() {
        let acf = this.props.modules;
        // console.log(acf);
        return (
            
               <div id="introduction">
				  <div className="row">
				    <div className="">
				    {acf.header_text.length > 0 &&
				    	<h2>{acf.header_text}</h2>
				    }
				    {acf.sub_heading.length > 0 &&
				    	<h3 className="sub">{acf.sub_heading}</h3>
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

export default intro;