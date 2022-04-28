export const uploadService = {
    readURL,
}

let gUploadedImageSrc

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            gUploadedImageSrc = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
    return gUploadedImageSrc
}

