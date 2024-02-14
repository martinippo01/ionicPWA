import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import useBusiness, {Business} from "../hooks/useBusiness.tsx";
import {useEffect, useState} from "react";

const Tab2: React.FC = () => {

    const {handleGetAllBusiness} = useBusiness()
    const empty_businessList: Business[] = []
    const [businessList, setBusinessList] = useState(empty_businessList)

    const fetchData = async () => {
        const businessRes = await handleGetAllBusiness()
        if(businessRes !== null && businessRes !== undefined) {
            setBusinessList(businessRes);
        }
        console.log(businessRes)
    }

    useEffect(() => {
        fetchData().then()
    }, [])

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

          {
              businessList.map((business, key)=> (
                  <IonCard key={key}>
                      <IonCardHeader>
                          <IonCardTitle>{business.name}</IonCardTitle>
                          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                  </IonCard>
              ))
          }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
