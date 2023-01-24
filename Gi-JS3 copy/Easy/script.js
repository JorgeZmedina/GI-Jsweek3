function exerciseOfTheDay() {
    let exercise;
  
    function setExercise(name) {
      exercise = name;
    }
  
    function getExercise() {
      console.log(`Today's exercise: ${exercise}`);
    }
  
    return {
      setExercise,
      getExercise
    };
  }
  
  const ex = exerciseOfTheDay();
  ex.setExercise('running');
  ex.getExercise();
  