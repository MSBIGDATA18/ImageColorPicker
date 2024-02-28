const imgInput = document.querySelector("#img-select");
const imgPreview = document.querySelector(".preview-img");

imgInput.addEventListener('change', function(){
    const file = this.files[0];
    if (!file) return
    const reader = new FileReader()

    reader.addEventListener('load', function(){
        imgPreview.src = this.result
    })

    reader.readAsDataURL(file)
})