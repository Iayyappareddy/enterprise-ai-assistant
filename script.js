
var DOWNLOAD_URL = 'https://github.com/Iayyappareddy/enterprise-ai-assistant/releases/download/v1.0/EnterpriceAI.zip';


function triggerDownload() {
  window.location.href = DOWNLOAD_URL;
}

/* ── Copy demo credential ────────────────── */
function copyDemo(id, btn) {
  var text = document.getElementById(id).textContent.trim();
  navigator.clipboard.writeText(text).then(function () {
    var orig = btn.textContent;
    btn.textContent = '✓';
    btn.style.color = 'var(--green)';
    setTimeout(function () {
      btn.textContent = orig;
      btn.style.color  = '';
    }, 1500);
  });
}

/* ── Fade-in on scroll ───────────────────── */
function runFade() {
  var els = document.querySelectorAll('.fade');
  var io  = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
}

/* ── Install page — scroll to section ───── */
function scrollToSection(id, linkEl) {
  document.querySelectorAll('.toc-link').forEach(function (l) {
    l.classList.remove('active');
  });
  if (linkEl) linkEl.classList.add('active');

  var target = document.getElementById(id);
  if (target) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 76,
      behavior: 'smooth'
    });
  }
}

/* ── Run on page load ────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  runFade();
});
