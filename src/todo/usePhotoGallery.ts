import { useCamera } from '@ionic/react-hooks/camera';
import { CameraPhoto, CameraResultType, CameraSource, FilesystemDirectory } from '@capacitor/core';
import { useEffect, useState } from 'react';
import { base64FromPath, useFilesystem } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';

export interface Photo {
  idItem: string | null;
  filepath: string;
  webviewPath?: string;
}

const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
  const { getPhoto } = useCamera();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [tempPhotos, setTempPhotos] = useState<Photo[]>([]);

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(cameraPhoto, fileName);
    const newPhotos = [savedFileImage, ...tempPhotos];
    setTempPhotos(newPhotos);
    //here
    //set(PHOTO_STORAGE, JSON.stringify(newPhotos));
  };

  const setPhotosForItem = (id: any)=> {
    let nP: { idItem: any; filepath: string; webviewPath: string | undefined; }[]=[];
    tempPhotos.map(photo=>{
      let tP={idItem: id, filepath: photo.filepath, webviewPath:photo.webviewPath}
      nP.push(tP);
    })
    const newPhotos = [...nP, ...photos];
    set(PHOTO_STORAGE, JSON.stringify(newPhotos));
    setTempPhotos([]);
    setPhotos(newPhotos);
  }

  const { deleteFile,readFile, writeFile } = useFilesystem();
  const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
    const base64Data = await base64FromPath(photo.webPath!);
    await writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    return {
      idItem: '',
      filepath: fileName,
      webviewPath: photo.webPath
    };
  };

  const { get, set } = useStorage();
  useEffect(() => {
    const loadSaved = async () => {
      const photosString = await get(PHOTO_STORAGE);
      const photos = (photosString ? JSON.parse(photosString) : []) as Photo[];
      for (let photo of photos) {
        const file = await readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
        });
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
      setPhotos(photos);
      console.log(photos);
    };
    loadSaved();
  }, [get, readFile]);

  const deletePhoto = async (photo: Photo) => {
    const newPhotos = photos.filter(p => p.filepath !== photo.filepath);
    set(PHOTO_STORAGE, JSON.stringify(newPhotos));
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await deleteFile({
      path: filename,
      directory: FilesystemDirectory.Data
    });
    setPhotos(newPhotos);
  };

  return {
    deletePhoto,
    tempPhotos,
    photos,
    takePhoto,
    setPhotosForItem
  };
}
