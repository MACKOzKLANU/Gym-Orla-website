import { collection, query, where, getDocs, doc, deleteDoc, addDoc } from "firebase/firestore";
import { auth, db } from './firebaseConfig';

// Fetch Favorites
export const getFavorites = async () => {
  if (!auth.currentUser) {
    console.error("User is not authenticated.");
    return [];
  }

  const q = query(collection(db, "favouriteExercises"), where("uid", "==", auth.currentUser.uid));
  const allFavorites = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    allFavorites.push({ id: doc.id, ...doc.data() }); // Include the document ID for easy removal
  });

  return allFavorites;
};

// Remove from Favorites
export const handleRemoveFromFavorites = async (exercise, setFavorites, favorites) => {
  if (!auth.currentUser) {
    console.error("User is not authenticated.");
    return;
  }

  try {
    const q = query(
      collection(db, "favouriteExercises"),
      where("uid", "==", auth.currentUser.uid),
      where("name", "==", exercise.name)
    );

    const querySnapshot = await getDocs(q);

    for (const docSnapshot of querySnapshot.docs) {
      console.log(docSnapshot.id, " => ", docSnapshot.data());

      const docRef = doc(db, "favouriteExercises", docSnapshot.id);
      await deleteDoc(docRef);

      // Update state
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.name !== exercise.name)
      );
    }
  } catch (error) {
    console.error("Error removing favorite:", error);
  }
};

// Add to Favorites
export const handleAddToFavorites = async (exercise, setFavorites, navigate) => {
  if (!auth.currentUser) {
    console.warn("User is not authenticated. Redirecting to sign-in page.");
    navigate('/signin');
    return;
  }

  try {
    console.log("Adding to favorites:", exercise);

    // Add a new document to Firestore
    const docRef = await addDoc(collection(db, "favouriteExercises"), {
      uid: auth.currentUser.uid,
      name: exercise.name,
      target: exercise.target,
      secondaryMuscles: exercise.secondaryMuscles,
      bodyPart: exercise.bodyPart,
      equipment: exercise.equipment,
      gifUrl: exercise.gifUrl,
      instructions: exercise.instructions,
    });

    console.log("Document written with ID:", docRef.id);

    // Update state
    setFavorites((prevFavorites) => [...prevFavorites, { id: docRef.id, ...exercise }]);
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};
