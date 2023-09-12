import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  listAll,
} from 'firebase/storage';
import { storage } from '../../firebaseConfig';
import { Linking } from 'react-native';

export const UploadFile = (blobFile: Blob, fileName: string) => {
  if (!blobFile) return;
  const sotrageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(sotrageRef, blobFile);
  uploadTask.on(
    'state_changed',
    null,
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        return downloadURL;
      });
    },
  );
};

export interface File {
  name: string;
  url: string;
}

export const listAllFiles = async () => {
  const listRef = ref(storage, '/');
  const files: File[] = [];
  try {
    const res = await listAll(listRef);
    await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        files.push({ name: itemRef.name, url });
      }),
    );
    return files;
  } catch (error) {
    console.log(error);
  }
};

export const DownloadFile = async (file: File) => {
  Linking.openURL(file.url);
};
