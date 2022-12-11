import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { addMediaFile, deleteDocByPath } from "./data-processing";
import { storage } from "./firebase-config";
import { DbMediaType } from "./types";

// const storageRef = ref(storage);
// const mediaRef = ref(storage, "media/");
const logoRef = ref(storage, "settings/logo.svg");

export const getLogoUrl = async () => {
  try {
    return await getDownloadURL(logoRef);
  } catch (error) {
    console.log(error);
  }
};

export const uploadLogoImage = async (file: any) => {
  try {
    await uploadBytes(logoRef, file);
  } catch (error) {
    console.log(error);
  }
};

export const getMediaURL = async (path: string) => {
  try {
    const mediaRef = ref(storage, path);
    return await getDownloadURL(mediaRef);
  } catch (error) {
    console.log(error);
  }
};

export const uploadMediaFiles = async (files: any) => {
  try {
    let savedFiles: DbMediaType[] = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const imgRef = ref(storage, `media/${file.name}`);
      const response: any = await uploadBytes(imgRef, file);
      const url = await getDownloadURL(response.ref);

      let request = {
        name: file.name,
        bucketPath: response.metadata.fullPath,
        url,
        size: file.size,
        type: file.type,
      };
      const savedToDb = await addMediaFile(request);
      if (savedToDb && savedToDb.id) savedFiles.push(savedToDb);
    }
    return savedFiles;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMediaFile = async (bucketPath: string, id: string) => {
  try {
    const bucketRef = ref(storage, bucketPath);
    await deleteObject(bucketRef);
    await deleteDocByPath(`media/${id}`);
    return "success";
  } catch (error) {
    console.log(error);
  }
};
