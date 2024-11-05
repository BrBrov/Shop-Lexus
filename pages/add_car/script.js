function menuHandler() {
  const menu = document.querySelector('.header__navigator');
  menu.classList.add('open-menu');

  const closeMenuBTN = menu.querySelector('.header__close-img');
  closeMenuBTN.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    menu.classList.add('close-menu');
    setTimeout(() => {menu.classList.remove('close-menu')}, 500);
  });
}

function autoResize() {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight + 7) +'px';
}

async function fileLoader(){
  const optionsFilePicker = {
    types: [{
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg", ".webp"],
      },
    }],
    excludeAcceptAllOption: false
  };

  try {
    const filePicker = await window.showOpenFilePicker(optionsFilePicker);

    if (!filePicker[0].name.match(/\.(png|gif|jpeg|jpg|webp)$/i)) {
      const customErr = new Error();
      customErr.name = 'Wrong file type';
      customErr.message = 'Select valid file!';
      throw customErr;
    }

    const file = await filePicker[0].getFile();

    //TODO Here must be some logic to handle file

    const img = document.querySelector('.add_img-image');

    img.src = URL.createObjectURL(file);

    //Example file load
  } catch (err) {
    console.dir(err.message);
  }  
}

const textarea = document.querySelector('#car__desription');

window.onload = () => {
  const openMenuBtn = document.querySelector('.header__menu');
  openMenuBtn.addEventListener('click', menuHandler);
  
  const fileAdd = document.querySelector('.add_img');
  fileAdd.addEventListener('click', fileLoader);

  autoResize();

  ['input', 'cut', 'paste', 'drop'].forEach((event) => {
    textarea.addEventListener(event, autoResize);
  });
};

window.onresize = () => autoResize();

