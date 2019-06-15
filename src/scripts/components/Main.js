import {render}                 from 'react-dom';
import DataActions              from 'flux/actions/DataActions.js';
import DataStore                from 'scripts/flux/stores/DataStore.js';
import ReactGA                  from 'react-ga';
import Home                     from 'components/Home.js';
import About                    from 'components/About.js';
import Work                     from 'components/Work.js';
import Contact                  from 'components/Contact.js';
import Header                   from 'components/Header.js';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Redirect,
    Switch
}                               from 'react-router-dom';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class Main extends React.Component {

  constructor(props) {
    super(props);
   
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);

    this.state = {
     
      isHovering: false,
     
    };       
  }

  templates = {
    'about': About,
    'contact': Contact,
    'work': Work,
  }
      
  _handleMouseEnter(){
    this.setState({
      isHovering: true,
    });    
  }

  _handleMouseLeave(){
    this.setState({
      isHovering: false,
    });    
  }

  buildRoutes(data){
          
    return data.map((page, i) => {
      return(
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        /> 
      )
    });    
  }
 
  render() {
      
    let response = DataStore.getAllPages();
    
    return (

      <Router history={history}>
        <div>
          <Header  
            handleMouseEnter={this._handleMouseEnter.bind(this)} 
            handleMouseLeave={this._handleMouseLeave.bind(this)} 
          />
          <div style={{ display: (this.state.isHovering ? 'none' : 'block') }}>
            <Switch>
              <Route path="/" component={ Home } exact />
              {this.buildRoutes(response)}
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
          </div> 
        </div>
      </Router>
    );
  }
}


export default Main;