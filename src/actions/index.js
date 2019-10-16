// to be used later (start of redux)

/**
  I don't think we're using these anywhere? 🤔
  It might make things clearer to move this sort of thing to a "feature branch", so we don't have
  unused code laying around
 */
let nextExerciseId = 0;
export const addExercise = exercise => ({
  type: "ADD_EXERCISE",
  id: nextExerciseId++,
  exercise: { ...exercise }
});

export const setUser = user => ({
  type: "SET_USER",
  user
});

export const removeUser = user => ({
  type: "REMOVE_USER",
  user
});
