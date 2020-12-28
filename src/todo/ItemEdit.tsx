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
import {Photo} from "./usePhotoGallery";
const log = getLogger('ItemEdit');


interface ItemEditProps extends RouteComponentProps<{
  id?: string,
  photos?: any,
}> {}

const ItemEdit: React.FC<ItemEditProps> = ({ history, match }) => {
  const { items, saving, savingError, saveItem,tempPhotos,photos, saveTempPhotos, takePhoto, deletePhoto } = useContext(ItemContext);
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
    if(item){
      console.log({item, tempPhotos});
      const copyItem = {...item};
      if(item.photos){
        copyItem.photos = [...item.photos,...tempPhotos];
        console.log('yes copyItem.photos');
        console.log(copyItem.photos);
      }
      else{
        console.log('copyItem.photos');
        console.log(copyItem.photos);
        copyItem.photos =tempPhotos;
      }
      copyItem.text=text;
      copyItem.breed = breed;
      console.log({copyItem});
      saveItem && saveItem(copyItem).then(() => {saveTempPhotos(); history.push('/items')});
    }
    else{
      const copyItem = {text, breed, photos:tempPhotos};
      saveItem && saveItem(copyItem).then(() => {saveTempPhotos(); history.push('/items')});
    }
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
            {item?.photos&&item?.photos.map((photo: any, index: any) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo.webviewPath}/>
                </IonCol>
            ))}
            {tempPhotos.map((photo: any, index: any) => (
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
