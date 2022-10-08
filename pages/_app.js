import '../styles/globals.css'

import { Provider } from 'react-redux';
import { store , wrapper} from '../redux/store';
import { logoutManager } from '../redux/actions/loginManager';
import { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }){

  return(
    <Provider store={store}>      
        <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
  