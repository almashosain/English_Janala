const loadLessons=()=>{
 fetch("https://openapi.programming-hero.com/api/levels/all")  // Promise of response
 .then((res) => res.json()) // Promise of json data
 .then((json) => displayLesson(json.data))
} 

const displayLesson=(lessons)=>{
//    1. Get the container & empty

const levelContainer = document.getElementById("level_container")
levelContainer.innerHTML = ""


//    2. Get Into Every lessons
for(let lesson of lessons){

           // 3. Create Element
           console.log(lesson)
const btnDiv = document.createElement("div");
btnDiv.innerHTML= `
    <button class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
`
  // 4. Append into container

  levelContainer.append(btnDiv)

}

}
loadLessons();