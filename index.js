// Thay đổi nội dung búc thư ở đây
var letterContent = `Chúc vợ yêu của anh sinh nhật thật vui vẻ, hạnh phúc và tràn đầy năng lượng nhé! Tuổi mới rồi, 
  anh mong em sẽ làm được tất cả những điều mình mong muốn, 
  và luôn giữ được nụ cười rạng rỡ trên môi. Cảm ơn em vì đã luôn ở bên anh,
   cùng anh đi qua những ngày tháng ngọt ngào và cả những lúc khó khăn. Anh hứa sẽ luôn bên em, 
   yêu thương, chăm sóc và bảo vệ em, vì em là người anh yêu nhất. Mãi bên nhau em nhé, bé iu của anh 💕`;

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector('.letterContent');
  letterContentSplited = letterContent.split('');

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.container').classList.add('active');
  }, 500);
});

var openBtn = document.querySelector('.openBtn');
openBtn.addEventListener('click', () => {
  document.querySelector('.cardValentine').classList.add('active');
  document.querySelector('.container').classList.add('close');
});

var cardValentine = document.querySelector('.cardValentine');

cardValentine.addEventListener('click', () => {
  cardValentine.classList.toggle('open');

  if (cardValentine.className.indexOf('open') != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector('.letterContent').innerHTML = '';
    }, 1000);
  }
});
