const imgInput = document.querySelector("#img-select");
const imgPreview = document.querySelector(".preview-img");

if(!window.EyeDropper){
   alert("Your browser does not support this feature") 
}

const pickerBtn = document.querySelector('.open-picker')
const EyeDropper = new EyeDropper()


imgInput.addEventListener('change', function(){
    const file = this.files[0];
    if (!file) return
    const reader = new FileReader()

    reader.addEventListener('load', function(){
        imgPreview.src = this.result
    })

    reader.readAsDataURL(file)
})

pickerBtn.addEventListener('click', function() {
    eyeDropper.open()
        .then(res => {
            document.querySelector('.res').innerHTML = `Picked Color: <b>${res.sRGBHex}</b>`


        })
        .catch(err => {
            console.log("User canceled the selection.");
        })
})
