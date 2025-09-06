const loadLessons=()=>{
 fetch("https://openapi.programming-hero.com/api/levels/all")  // Promise of response
 .then((res) => res.json()) // Promise of json data
 .then((json) => displayLesson(json.data))
} 

const removeActive=()=>{
  const lessonButton=document.querySelectorAll(".lesson_btn") 
  lessonButton.forEach(btn=> btn.classList.remove("active")); 
};

const loadLevelWord=(id)=>{
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then((res) => res.json())
  .then((data)=> {
    removeActive(); // remove all active class
    const clickBtn = document.getElementById(`lesson_btn_${id}`)
    // console.log(clickBtn)
    clickBtn.classList.add("active") // add active class
    displayLevelWord(data.data)
  })
};



const displayLevelWord=(words)=>{
  const wordContainer =document.getElementById("word_container");
  wordContainer.innerHTML = "";

if(words.length == 0){
   wordContainer.innerHTML = `
   <div class="text-center col-span-full font_bangla">
   <img class="mx-auto" src="./assets/alert-error.png"/>
    <p class="text-xl font-medium text-gray-400 rounded-xl py-10 space-y-6">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
</div>
   `;
  return
}
// {
//     "id": 79,
//     "level": 1,
//     "word": "Jump",
//     "meaning": "লাফানো",
//     "pronunciation": "জাম্প"
// }


  words.forEach(word => {
    console.log(word)
    const card=document.createElement("div");
    card.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-15 px-5 space-y-4">
    <h2 class="font-bold text-2xl">${word.word ? word.word: "শব্দ পাওয়া যাইনি"}</h2>
    <p class="font-semibold">Meaning /pronunciation </p>

    <div class="text-2xl font-medium font_bangla">"${word.meaning ? word.meaning : "অর্থ পাওয়া যাইনি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যাইনি" }"</div>
   <div class="flex justify-between items-center">
<button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
<button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
   </div>
</div>
    `;
    wordContainer.append(card)
  })

}

const displayLesson=(lessons)=>{
//    1. Get the container & empty

const levelContainer = document.getElementById("level_container")
levelContainer.innerHTML = ""


//    2. Get Into Every lessons
for(let lesson of lessons){

           // 3. Create Element
          //  console.log(lesson)
const btnDiv = document.createElement("div");
btnDiv.innerHTML= `
    <button id="lesson_btn_${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson_btn">
    <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
`;
  // 4. Append into container

  levelContainer.append(btnDiv)

}

}




loadLessons();