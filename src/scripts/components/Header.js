import {Link} from 'react-router-dom';
import DataStore from 'scripts/flux/stores/DataStore.js';
import Home      from 'scripts/components/Home.js';
import About      from 'scripts/components/About.js';
import Work      from 'scripts/components/Work.js';
import Contact      from 'scripts/components/Contact.js';
import Nav          from 'scripts/components/Nav.js'



class Header extends React.Component {   
   constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      isHovering: false,
      isHome: false,
      isAbout: false,
      isWork: false,
      isContact: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this._handleMouseEnter = this.props.handleMouseEnter.bind(this);
    this._handleMouseLeave = this.props.handleMouseLeave.bind(this);
    this._showHome = this._showHome.bind(this);
    this._showAbout = this._showAbout.bind(this);
    this._showWork = this._showWork.bind(this);
    this._showContact = this._showContact.bind(this);
  }

_onButtonClick() {
    this.setState({
        isHidden: !this.state.isHidden,
    });
console.log(this.props)
}

_showHome() {
    this.setState({        
        isHome: !this.state.isHome,
    });
}

_showAbout() {
    this.setState({      
        isAbout: !this.state.isAbout,
    });
}

_showWork() {
    this.setState({      
        isWork: !this.state.isWork,
    });
}

_showContact() {
    this.setState({    
        isContact: !this.state.isContact,
    });
}
  
    render() {
    // Sort pages by order

        return (
            <header>
            <div className="Navbar">
            <img className="logo" onClick={this._onButtonClick.bind(this)} src={'./img/logo-black.png'} />
                {!this.state.isHidden && 

                    <Nav 
                    handler={this._onButtonClick}
                    showHome={this._showHome}
                    showAbout={this._showAbout}
                    showWork={this._showWork}
                    showContact={this._showContact}
                    handleMouseEnter={this._handleMouseEnter}
                    handleMouseLeave={this._handleMouseLeave}
                     />}
            
            </div>
            <div className='preview'>
                {
                  this.state.isHome &&
                 
                    <Home />
                  
                }
                {
                  this.state.isAbout &&
                 
                    <About />
                 
                }

                {
                  this.state.isWork &&
                  
                    <Work />
                  
                }
                {
                  this.state.isContact &&
                  
                    <Contact />
                  
                }
            </div> 
        </header>
        );
    }
}



export default Header;
