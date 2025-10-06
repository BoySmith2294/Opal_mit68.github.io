/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime

const { chars: chars1 } = text.split('.home__profession-1', {chars: true})
const { chars: chars2 } = text.split('.home__profession-2', {chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed:600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  }
});

// Skills Animation for Mixed Design - FIXED
function animateMixedSkills() {
    // Animate circular progress
    const circularProgresses = document.querySelectorAll('.circular__progress');
    
    circularProgresses.forEach(progress => {
        const circle = progress.querySelector('.circular__fill');
        const percentage = parseFloat(progress.getAttribute('data-percentage'));
        const circumference = 282.6; // 2 * π * 45
        
        // คำนวณ stroke-dashoffset ที่ถูกต้อง
        const offset = circumference - (percentage / 100) * circumference;
        
        // ตั้งค่า animation
        circle.style.strokeDashoffset = offset;
    });
    
    // Animate progress bars
    const progressBars = document.querySelectorAll('.skill-card__progress');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });
}

// Intersection Observer for animation trigger
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateMixedSkills, 300);
        }
    });
}, { threshold: 0.3 });

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});


const macarons = document.querySelectorAll('.macaron');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  macarons.forEach((macaron, index) => {
    let xMove = 0;
    let opacity = 1;

    if (index === 0) { 
      xMove = -scrollY * 0.5; 
      opacity = 1 - scrollY / 500;
    } else if (index === 1) {
      xMove = scrollY * 0.6;
      opacity = 1 - scrollY / 400;
    } else if (index === 2) {
      xMove = -scrollY * 0.8;
      opacity = 1 - scrollY / 450;
    }

    // รวม floating animation + scroll X + opacity
    macaron.style.transform = `translateX(${xMove}px)`;
    macaron.style.opacity = Math.max(opacity, 0);
  });
});