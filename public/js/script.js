// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

if(profileBtn){

    profileBtn.addEventListener("click", () => {
        profileDropdown.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {

        if(
            !profileBtn.contains(e.target) &&
            !profileDropdown.contains(e.target)
        ){
            profileDropdown.classList.remove("show");
        }

    });

}