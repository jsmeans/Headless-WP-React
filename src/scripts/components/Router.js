import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';
import DataStore from 'scripts/flux/stores/DataStore.js';
import './style.scss';
import Home                 from 'components/Home.js';
import About                from 'components/About.js';
import Work                 from 'components/Work.js';
import Contact              from 'components/Contact.js';
import Header               from 'components/Header.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

class Router extends React.Component {
    constructor(props, state) {
    super(props);   
    this._handleMouseHover = this._handleMouseHover.bind(this);
    this.state = {
     
      isHovering: false,
     
    };
     console.log(this);
    
    
  }

    templates = {
        'about': About,
        'contact': Contact,
        'work': Work
    }
    
    _handleMouseHover(){
    this.setState({
        isHovering: !this.state.isHovering,
    });
    
}


     buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }
    
    run() {
        

        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header  handleMouseHover={this._handleMouseHover}/>
                        <div style={{ display: (this.state.isHovering ? 'none' : 'block') }}>
                        <Switch>
                            <Route path="/" component={ Home } exact />
                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch>
                        </div> 
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}


export default Router;