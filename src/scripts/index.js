import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';
import DataStore            from 'scripts/flux/stores/DataStore.js';
import './style.scss';
import 'babel-polyfill'
import Main                 from 'components/Main.js';


class AppInitializer {
    
 
    
    run() {
        

        DataActions.getPages((response)=>{
            render(

                <Main />

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
