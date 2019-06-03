import {Link} from 'react-router-dom';
import DataStore from 'scripts/flux/stores/DataStore.js';
import Home      from 'scripts/components/Home.js';
import About      from 'scripts/components/About.js';
import Work      from 'scripts/components/Work.js';
import Contact      from 'scripts/components/Contact.js';

class Nav extends React.Component {
    constructor(props) {
    super(props);
    
    console.log(props);
  }




 

  
  render() {
    let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); 
    return (
        
            <div id="nav-container">
                <nav>
                    <Link to="/"  onMouseEnter={() => {this.props.showHome(); this.props.handleMouseEnter();}} onMouseLeave={() => {this.props.showHome(); this.props.handleMouseLeave();}} onClick={() => {this.props.handler(); this.props.showHome(); this.props.handleMouseLeave();}} style={{marginRight: '10px'}} >Home</Link>
                    <Link to="/About"  onMouseEnter={() => {this.props.showAbout(); this.props.handleMouseEnter();}} onMouseLeave={() => {this.props.showAbout(); this.props.handleMouseLeave();}} onClick={() => {this.props.handler(); this.props.showAbout(); this.props.handleMouseLeave();}} style={{marginRight: '10px'}} >About</Link>
                    <Link to="/Work"  onMouseEnter={() => {this.props.showWork(); this.props.handleMouseEnter();}} onMouseLeave={() => {this.props.showWork(); this.props.handleMouseLeave();}} onClick={() => {this.props.handler(); this.props.showWork(); this.props.handleMouseLeave();}} style={{marginRight: '10px'}} >Work</Link>
                    <Link to="/Contact"  onMouseEnter={() => {this.props.showContact(); this.props.handleMouseEnter();}} onMouseLeave={() => {this.props.showContact(); this.props.handleMouseLeave();}} onClick={() => {this.props.handler(); this.props.showContact(); this.props.handleMouseLeave();}} style={{marginRight: '10px'}} >Contact</Link>
                </nav>

               
            </div>
        
      
    );
  }  
}
export default Nav;