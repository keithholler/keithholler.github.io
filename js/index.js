// Particle Effect

function line(particle, particle2) {
    context.beginPath();
    context.moveTo(particle.x, particle.y);
    context.lineTo(particle2.x, particle2.y);
    context.stroke();
    context2.beginPath();
    context2.moveTo(particle.x, particle.y);
    context2.lineTo(particle2.x, particle2.y);
    context2.stroke();
    context3.beginPath();
    context3.moveTo(particle.x, particle.y);
    context3.lineTo(particle2.x, particle2.y);
    context3.stroke();
    context4.beginPath();
    context4.moveTo(particle.x, particle.y);
    context4.lineTo(particle2.x, particle2.y);
    context4.stroke();
    
  }
 
  
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < maxParticles; i++) {
      let particle = particles[i];
      context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
      for (let j = 0; j < maxParticles; j++) {
        if (i != j) {
          let particle2 = particles[j];
          let distanceX = Math.abs(particle.x - particle2.x);
          let distanceY = Math.abs(particle.y - particle2.y);
          if (distanceX < threshold && distanceY < threshold) {
            context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
            let color = 200 - Math.floor(distanceX + distanceY);
            context.strokeStyle = '#FFFFFF';
            line(particle, particle2);
          }
        }
      }
      particle.x = particle.x + -particle.vx;
      particle.y = particle.y + -particle.vy;
      if (particle.x > canvas.width - particleSize || particle.x < particleSize)
        particle.vx = -particle.vx;
      if (particle.y > canvas.height - particleSize || particle.y < particleSize)
        particle.vy = -particle.vy;
    }
    window.requestAnimationFrame(animate);
  }
  

  function animate2() {
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    for (let i = 0; i < maxParticles; i++) {
      let particle = particles[i];
      context2.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
      for (let j = 0; j < maxParticles; j++) {
        if (i != j) {
          let particle2 = particles[j];
          let distanceX = Math.abs(particle.x - particle2.x);
          let distanceY = Math.abs(particle.y - particle2.y);
          if (distanceX < threshold && distanceY < threshold) {
            context2.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
            let color = 200 - Math.floor(distanceX + distanceY);
            context2.strokeStyle = '#FFFFFF';
            line(particle, particle2);
          }
        }
      }
      particle.x = particle.x + -particle.vx;
      particle.y = particle.y + -particle.vy;
      if (particle.x > canvas2.width - particleSize || particle.x < particleSize)
        particle.vx = -particle.vx;
      if (particle.y > canvas2.height - particleSize || particle.y < particleSize)
        particle.vy = -particle.vy;
    }
    window.requestAnimationFrame(animate2);
  }

  function animate3() {
    context3.clearRect(0, 0, canvas3.width, canvas3.height);
    for (let i = 0; i < maxParticles; i++) {
      let particle = particles[i];
      context3.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
      for (let j = 0; j < maxParticles; j++) {
        if (i != j) {
          let particle2 = particles[j];
          let distanceX = Math.abs(particle.x - particle2.x);
          let distanceY = Math.abs(particle.y - particle2.y);
          if (distanceX < threshold && distanceY < threshold) {
            context3.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
            let color = 200 - Math.floor(distanceX + distanceY);
            context3.strokeStyle = '#FFFFFF';
            line(particle, particle2);
          }
        }
      }
      particle.x = particle.x + -particle.vx;
      particle.y = particle.y + -particle.vy;
      if (particle.x > canvas3.width - particleSize || particle.x < particleSize)
        particle.vx = -particle.vx;
      if (particle.y > canvas3.height - particleSize || particle.y < particleSize)
        particle.vy = -particle.vy;
    }
    window.requestAnimationFrame(animate3);
  }

  function animate4() {
    context4.clearRect(0, 0, canvas4.width, canvas4.height);
    for (let i = 0; i < maxParticles; i++) {
      let particle = particles[i];
      context4.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
      for (let j = 0; j < maxParticles; j++) {
        if (i != j) {
          let particle2 = particles[j];
          let distanceX = Math.abs(particle.x - particle2.x);
          let distanceY = Math.abs(particle.y - particle2.y);
          if (distanceX < threshold && distanceY < threshold) {
            context4.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
            let color = 200 - Math.floor(distanceX + distanceY);
            context4.strokeStyle = '#FFFFFF';
            line(particle, particle2);
          }
        }
      }
      particle.x = particle.x + -particle.vx;
      particle.y = particle.y + -particle.vy;
      if (particle.x > canvas4.width - particleSize || particle.x < particleSize)
        particle.vx = -particle.vx;
      if (particle.y > canvas4.height - particleSize || particle.y < particleSize)
        particle.vy = -particle.vy;
    }
    window.requestAnimationFrame(animate4);
  }
   
  var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
  let canvas = document.getElementsByClassName('myCanvas')[0];
  let canvas2 = document.getElementsByClassName('myCanvas')[1];
  let canvas3 = document.getElementsByClassName('myCanvas')[2];
  let canvas4 = document.getElementsByClassName('myCanvas')[3];


 
  var context = canvas.getContext('2d');
  var context2 = canvas2.getContext('2d');
  var context3 = canvas3.getContext('2d');
  var context4 = canvas4.getContext('2d');
// Set display size (css pixels).
var size = 400;
canvas.style.width = size + "px";
canvas.style.height = size + "px";
canvas2.style.width = size + "px";
canvas2.style.height = size + "px";
canvas3.style.width = size + "px";
canvas3.style.height = size + "px";
canvas4.style.width = size + "px";
canvas4.style.height = size + "px";

// Set actual size in memory (scaled to account for extra pixel density).

canvas.width = Math.floor(size);
canvas.height = Math.floor(size);
canvas2.width = Math.floor(size);
canvas2.height = Math.floor(size);
canvas3.width = Math.floor(size);
canvas3.height = Math.floor(size);
canvas4.width = Math.floor(size);
canvas4.height = Math.floor(size);
context.scale(1, 1);

  let particles = [];
  let particleSize = 5;
  let maxParticles = 20;
  let threshold = 70;
  for (let i = 0; i < maxParticles; i++) {
    let particle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random()/3 ,
      vy: Math.random()/3
    }
    particles.push(particle);
  }
  context.fillStyle = 'white';
  context2.fillStyle = 'white';
  context3.fillStyle = 'white';
  context4.fillStyle = 'white';
  animate()
  animate2();
  animate3();
  animate4();

//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // Glowing mouse pointer
//   $(document).mousemove(function(event) {
//     $('.dot').css({left:event.pageX, top:event.pageY -50});
//   });


  // $(document).mousemove(function(event) {
  //   windowWidth = $(window).width();
  //   windowHeight = $(window).height();
    
  //   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  //   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
  //   $('.dot').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #FFFFFF 1%, #000000 100%)','filter:','blur(at ' + mouseXpercentage + '% ' + mouseYpercentage +'1px)');
  // });

 


