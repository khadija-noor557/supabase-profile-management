const supabaseUrl = "https://xmexfecjjalkhqtrlzzj.supabase.co";
const supabaseKey = "sb_publishable_MscDQGxX8gej_btcdCaQjA_6qODt-W8";

const { createClient } = supabase;

const client = createClient(supabaseUrl, supabaseKey)

console.log(client);




// const emptyState = document.querySelector("#emptyState");
// const filledState = document.querySelector("#filledState");

// const profileInput = document.querySelector("#profileInput");
// const profileInput2 = document.querySelector("#profileInput2");

// const profilePreview = document.querySelector("#profilePreview");


// Show filled UI
// function showFilledState() {

//     emptyState.classList.add("d-none");
//     filledState.classList.remove("d-none");

// }


// When user clicks any input
// document.querySelectorAll(".profile-input").forEach(input => {

//     input.addEventListener("focus", () => {

//         showFilledState();

//     });

// });


// When user selects profile image
// profileInput.addEventListener("change", function () {

//     if (this.files && this.files[0]) {

//         const imageURL = URL.createObjectURL(this.files[0]);

//         profilePreview.src = imageURL;

//         showFilledState();

//     }

// });


// Change image again from filled state
// profileInput2.addEventListener("change", function () {

//     if (this.files && this.files[0]) {

//         const imageURL = URL.createObjectURL(this.files[0]);

//         profilePreview.src = imageURL;

//     }

// });