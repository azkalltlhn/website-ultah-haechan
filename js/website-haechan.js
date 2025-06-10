  let score = 0;

  function checkAnswer(questionNumber, correctAnswer) {
    const options = document.getElementsByName('q' + questionNumber);
    let selected = null;
    for (const option of options) {
      if (option.checked) {
        selected = option.value;
        break;
      }
    }

    const resultEl = document.getElementById('quizResult');
    if (!selected) {
      alert('Pilih jawaban dulu ya!');
      return;
    }

    if (selected === correctAnswer) {
      score++;
      resultEl.textContent = "Selamat, jawaban kamu benar!";
      event.target.disabled = true;

      setTimeout(() => {
        document.getElementById('q' + questionNumber).classList.add('hidden');
        const nextQuestion = document.getElementById('q' + (questionNumber + 1));
        if (nextQuestion) {
          nextQuestion.classList.remove('hidden');
          resultEl.textContent = '';
        } else {
          resultEl.textContent = `Kuis selesai! Skor kamu: ${score} dari 5.`;
        }
      }, 1500);
    } else {
      resultEl.textContent = "Jawaban kamu salah, coba lagi.";
    }
  }

  const galleryButtons = document.querySelectorAll('.gallery-btn');
  const gallerySections = document.querySelectorAll('.gallery-section');

  function showGallery(targetId) {
    gallerySections.forEach(section => {
      section.classList.add('hidden');
      if (section.id === targetId) {
        section.classList.remove('hidden');
      }
    });

    galleryButtons.forEach(btn => {
      btn.classList.remove('bg-gray-300');
      btn.classList.add('bg-gray-100');
      if (btn.dataset.target === targetId) {
        btn.classList.add('bg-gray-300');
        btn.classList.remove('bg-gray-100');
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    showGallery('childhood');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  galleryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      showGallery(targetId);
    });
  });

  const today = new Date();
  const currentYear = today.getFullYear();
  let birthday = new Date(currentYear, 5, 6); // 6 Juni

  if (
    today.getMonth() > 5 || 
    (today.getMonth() === 5 && today.getDate() > 6)
  ) {
    birthday = new Date(currentYear + 1, 5, 6);
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.ceil((birthday - today) / oneDay);
  const countdownSpan = document.getElementById('countdown');

  if (today.getDate() === 6 && today.getMonth() === 5) {
    countdownSpan.textContent = "Today its Haechan's Birthday! 🎂🎉";
  } else {
    countdownSpan.textContent = `${diffDays} hari lagi menuju Haechan's Birthday 🎉🎊`;
  }