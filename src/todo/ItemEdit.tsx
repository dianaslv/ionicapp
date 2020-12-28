import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent, IonFab,
  IonHeader,
  IonInput, IonLabel,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg
} from '@ionic/react';
import { getLogger } from '../core';
import { ItemContext } from './ItemProvider';
import { RouteComponentProps } from 'react-router';
import { ItemProps } from './ItemProps';
import {useNetwork} from "../useNetwork";
import {useBackgroundTask} from "../useBackgroundTask";
import {usePhotoGallery} from "./usePhotoGallery";
import {camera} from "ionicons/icons";

const log = getLogger('ItemEdit');

interface ItemEditProps extends RouteComponentProps<{
  id?: string;
}> {}

const ItemEdit: React.FC<ItemEditProps> = ({ history, match }) => {
  const { items, saving, savingError, saveItem,photos, takePhoto, deletePhoto } = useContext(ItemContext);
  const [text, setText] = useState('');
  const [breed, setBreed] = useState('');
  const [item, setItem] = useState<ItemProps>();
  useBackgroundTask(() => new Promise(resolve => {
    console.log('My Background Task');
    resolve();
  }));
  useEffect(() => {
    log('useEffect');
    const routeId = match.params.id || '';
    const item = items?.find(it => it._id === routeId);
    setItem(item);
    if (item) {
      setText(item.text);
      setBreed(item.breed);
    }
  }, [match.params.id, items]);
  const handleSave = () => {
    const editedItem = item ? { ...item, text, breed, photos } : { text, breed, photos };
    saveItem && saveItem(editedItem).then(() => history.push('/items'));
  };
  log('render');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleSave}>
              Save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>description</IonLabel>
        <IonInput value={text} onIonChange={e => setText(e.detail.value || '')} />
        <IonLabel>breed</IonLabel>
        <IonInput value={breed} onIonChange={e => setBreed(e.detail.value || '')} />
        <IonGrid>
          <IonRow>
            {photos.map((photo: any, index: any) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo.webviewPath}/>
                </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}/>
          </IonFabButton>
        </IonFab>
        <IonLoading isOpen={saving} />
        {savingError && (
          <div>{savingError.message || 'Failed to save item'}</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ItemEdit;
