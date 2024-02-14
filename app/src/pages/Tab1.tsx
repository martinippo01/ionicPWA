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
import './Tab1.css';
import {useEffect, useState} from "react";
import useUsers, {User} from "../hooks/useUsers";

const Tab1: React.FC = () => {
    // @ts-ignore
    const {handleGetAllUsers} = useUsers()

    const emptyUserList: User[] = []
    const [data, setData] = useState(emptyUserList)

    const fetchData = async () => {
        const res: User[] = await handleGetAllUsers()
        if(res !== null && res !== undefined) {
            setData(res);
        }
        console.log(res)
    }

    useEffect(() => {
        fetchData().then()
    }, [])

    // @ts-ignore
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>

            {
                data.map((user, key)=> (
                    <IonCard key={key}>
                        <IonCardHeader>
                            <IonCardTitle>{user.userName}</IonCardTitle>
                            {/*<IonCardSubtitle>Card Subtitle</IonCardSubtitle>*/}
                        </IonCardHeader>

                        {/*<IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>*/}
                    </IonCard>
                ))
            }

        </IonContent>
    </IonPage>
    );
};

export default Tab1;
