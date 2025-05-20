const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const applyBtn = document.getElementById('applyFilter');
const resetBtn = document.getElementById('resetFilter');

// When the user uploads an image
imageInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      preview.setAttribute('src', this.result);
      preview.style.display = 'block';      // ✅ show the image
      preview.style.filter = 'none';        // ✅ clear any filters
    });

    reader.readAsDataURL(file);
  }
});

// When the user clicks "Apply Filter"
applyBtn.addEventListener('click', () => {
  if (preview.style.display !== 'none') {
    preview.style.filter = 'invert(100%)';  // 🎨 or use any other effect here
  } else {
    alert('Please upload an image first!');
  }
});

// When the user clicks "Reset Image"
resetBtn.addEventListener('click', () => {
  if (preview.style.display !== 'none') {
    preview.style.filter = 'none';  // 🧼 remove filter
  }
});