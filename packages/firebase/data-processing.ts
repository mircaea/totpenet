import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  // onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "./firebase-config";
import { DbMediaType, SettingsType } from "./types";

export const ConsoleLog = (label: string, value: any) => {
  // if (!window || !window.location || window.location.hostname !== "localhost") {
  //   return;
  // }

  // got console. no access to window

  try {
    console.log(`%c${label}: %c${value}`, "color: green", "font-size: 1rem");
  } catch (error) {}
};

const SET_DOC_REF = doc(firestore, "settings/settings_document");
const PAGES_COLLECTION = collection(firestore, "pages");
const MEDIA_COLLECTION = collection(firestore, "media");

export const getDocsFromCollection = async (
  collection: CollectionReference,
  nmb?: number
) => {
  try {
    const collectionQuery = query(collection, limit(nmb ? nmb : 99));
    const snapShot = await getDocs(collectionQuery);
    let data: object[] = [];
    snapShot.forEach((snap) => {
      data.push({ id: snap.id, ...snap.data() });
    });
    return data;
  } catch (error) {
    ConsoleLog("getDocsFromCollection", error);
    return { err: error };
  }
};
export const createDocInCollection = async (
  collection: CollectionReference,
  request: object
) => {
  try {
    const docRef = await addDoc(collection, request);
    let docData;
    // read doc:
    const snapShot = await getDoc(docRef);
    if (snapShot.exists()) docData = { id: snapShot.id, ...snapShot.data() };
    return docData;
  } catch (error) {
    ConsoleLog("createDocInCollection", error);
    return { err: error };
  }
};
export const deleteDocByPath = async (path: string) => {
  try {
    const docRef = doc(firestore, path);
    return await deleteDoc(docRef);
  } catch (error) {
    ConsoleLog("deleteDocByPath", error);
  }
};

export const getSettings = async () => {
  try {
    const snapShot = await getDoc(SET_DOC_REF);
    let data;
    if (snapShot.exists()) {
      data = snapShot.data();
    }
    return data;
  } catch (error) {
    ConsoleLog("getSettings", error);
    return { err: error };
  }
};
export const saveSettings = async (reqObj: SettingsType) => {
  // first create doc & update only provided data fields with merge:true
  try {
    await setDoc(
      SET_DOC_REF,
      { ...reqObj, updatedAt: Date.now() },
      { merge: true }
    );
  } catch (error) {
    ConsoleLog("saveSettings", error);
    return { err: error };
  }
  // should not block the UI for this!
  // if works offline this will get stuck if waiting for the response!
  // recommended to update the interface / AppContext & carry on
};
export const addMediaFile = async (media: DbMediaType) => {
  try {
    const request = { ...media, createdAt: Date.now() };
    const dbRef = await addDoc(MEDIA_COLLECTION, request);
    const fileFromDb = await getDoc(dbRef);
    const saved = {
      id: fileFromDb.id,
      ...fileFromDb.data(),
    };
    return saved;
  } catch (error) {
    ConsoleLog("addMediaFile", error);
  }
};
export const getMediaURLs = async () => {
  try {
    const snapShot = await getDocs(MEDIA_COLLECTION);
    let data: DbMediaType[] = [];
    snapShot.forEach((snap) => {
      data.push({ id: snap.id, ...snap.data() });
    });

    return data;
  } catch (error) {
    ConsoleLog("", error);
  }
};

export const getPageByPath = async (path: string) => {
  try {
    const pageQuery = query(
      collection(firestore, "pages"),
      where("path", "==", path),
      limit(1)
    );
    const snapShot = await getDocs(pageQuery);
    let data;
    snapShot.forEach((snap) => {
      data = { id: snap.id, ...snap.data() };
    });
    return data;
  } catch (error) {
    ConsoleLog("getPageByPath", error);
    // return error;
  }
};
export const getPages = async (nmb?: number) => {
  return getDocsFromCollection(PAGES_COLLECTION);
};
export const createPage = async (pageObj: object) => {
  try {
    const docReference = await addDoc(PAGES_COLLECTION, pageObj);
    let docData;
    // read doc:
    const page = await getDoc(docReference);
    if (page.exists()) docData = { id: page.id, ...page.data() };
    return docData;
  } catch (error) {
    ConsoleLog("createPage", error);
    return { err: error };
  }
};
export const updatePage = async (pageObj: any) => {
  try {
    const page = doc(firestore, `pages/${pageObj.id}`);
    await updateDoc(page, pageObj);
  } catch (error) {
    ConsoleLog("updatePage", error);
    return { err: error };
  }
};

// needs testing / if needed:
// export const listenToSettingsDoc = () => {
//   onSnapshot(SET_DOC_REF, (docSnapShot) => {
//     if (docSnapShot.exists()) {
//       const data = docSnapShot.data();
//       console.log(`ON snap SHOT data CHANGED: ${JSON.stringify(data)}`);
//     }
//   });
// };
