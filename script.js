document.addEventListener('DOMContentLoaded',()=>{
  const {name,bio,projects} = window.siteContent || {};
  document.getElementById('name').textContent = name || 'Anas';
  document.getElementById('bio').textContent = bio || '';
  document.getElementById('year').textContent = new Date().getFullYear();

  const list = document.getElementById('projects-list');
  if(Array.isArray(projects)){
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `<h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="meta">${(p.tech||[]).join(' • ')}</div>`;
      if(p.link){
        const a = document.createElement('a');
        a.href = p.link; a.textContent = 'Open'; a.className = 'btn'; a.style.marginTop = '0.6rem';
        card.appendChild(a);
      }
      list.appendChild(card);
    });
  }

  // Theme toggle
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('light');
    btn.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
  });
});

function escapeHtml(s){ if(!s) return ''; return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }