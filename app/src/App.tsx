import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonModal,
  IonButton,
  IonContent,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBack, arrowForward } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

setupIonicReact();

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Manage modal state

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when button is clicked or backdrop is clicked
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={arrowForward} />
              <IonLabel>A Retiro</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={arrowBack} />
              <IonLabel>A Padilla</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        {/* Modal: Controlled by state */}
        <IonModal isOpen={isModalOpen} backdropDismiss={true} onDidDismiss={closeModal}>
          <IonContent className="ion-padding">
            <h2>Horarios no actualizados</h2>
            <p>Los horarios que se muestran no se encuentran actualizadoscon los actuales del tren Belgrano norte.</p>
            <IonButton onClick={closeModal}>Close</IonButton>
          </IonContent>
        </IonModal>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
