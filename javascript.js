

var effect = window.VANTA.BIRDS({
  el: "#vanta-canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x567daf
})


function themeSelect() {
  var theme = document.getElementById("theme").value;
  effect.destroy()
  if (theme == "Birds"){
    effect = window.VANTA.BIRDS({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x567daf
    })
  }
  else if(theme == "Fog"){
    effect = window.VANTA.FOG({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    })
  }
  else if(theme == "Waves"){
    effect = window.VANTA.WAVES({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
  else if(theme == "Clouds"){
    effect = window.VANTA.CLOUDS({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    })
  }
  else if(theme == "Net"){
    effect = window.VANTA.NET({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
  else if(theme == "Cells"){
    effect = window.VANTA.CELLS({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00
    })
  }
  else if(theme == "Trunk"){
    effect = window.VANTA.TRUNK({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe14bcf,
      spacing: 2.50,
      chaos: 4.50
    })
  }
  else if(theme == "Topology"){
    effect = window.VANTA.TOPOLOGY({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
  else if(theme == "Dots"){
    effect = window.VANTA.DOTS({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
  else if(theme == "Ring"){
    effect = window.VANTA.RINGS({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
  else if(theme == "Halo"){
    effect = window.VANTA.HALO({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    })
  }
  else if(theme == "Globe"){
    effect = window.VANTA.GLOBE({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
}

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

var i = 0;
var greeting;
var time = new Date().getHours();
if (time < 10) {
  greeting = "Selamat Pagi Cintaww 🥱🥰  Jangan Lupa Sarapan ❤";
} else if (time < 15) {
  greeting = "Selamat Siang Sayang 😘 Semangattt ❤";
} else if (time < 20) {
  greeting = "Selamat Sore Cintaww 😘";
} else {
  greeting = "Selamat Malam Sayang 😴 Sleep Tight 🥰";
}

var speed = 100;

window.onload = function typeWriter() {
  if (i < greeting.length) {
    document.getElementById("greetTag").innerHTML += greeting.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById('search')
  .addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      document.querySelector('form').action = "http://www.google.com/search"
      document.querySelector('form').method = "GET"
      document.querySelector('form').submit()
    }
  });