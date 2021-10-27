import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { heartOutline, homeOutline, pencilOutline, searchOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

import Explore from './pages/Explore'
import Search from './pages/Search'
import Plan from './pages/Plan'
import Review from './pages/Review'

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <Redirect exact from="/" to="/explore" />

      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/explore" component={Explore} />
          <Route path='/search' component={Search} />
          <Route path='/plan' component={Plan} />
          <Route path='/review' component={Review} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" >
          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={homeOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>

          <IonTabButton tab="plan" href="/plan">
            <IonIcon icon={heartOutline} />
            <IonLabel>Plan</IonLabel>
          </IonTabButton>

          <IonTabButton tab="review" href="/review">
            <IonIcon icon={pencilOutline} />
            <IonLabel>Review</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>


  </IonApp>
);

export default App;
