const quizData = [
    {
        question : "quiz question",
        option : ["forhad", "mehedi", "hasan","md"],
        correct:0,
    },
    {
        question : "quiz ",
        option : ["a", "b", "c","d"],
        correct:2,
    }
]

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);
const submitBtn = document.querySelector("#submit");
const currentQuiz = 0;
const score = 0;


const loadQuiz = ()=>{
    const {question, option} = quizData[currentQuiz];
    console.log(option);
    console.log(question);

    questionElm.innerText = question;
    option.forEach(
        (curOption,index) => (window[`option_${index+1}`].innerText = curOption)
    );
}
loadQuiz()



// const getSelectedOption =()=>{
//     let ans_index;
//     answerElm.forEach((curOption,index)=>{
//         if(curOption.checked){
//             ans_index = index;
//         }
//     });
//     return ans_index;
// }
// submitBtn.addEventListener('click',()=>{
//     const selectedOptionIndex = getSelectedOption();
//     console.log(selectedOptionIndex);
// });

