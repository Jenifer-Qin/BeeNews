const win = document.getElementById('chatWindow'),
      input = document.getElementById('chatInput'),
      btn = document.getElementById('sendBtn');

btn.onclick = async () => {
  const msg = input.value.trim();
  if(!msg) return;
  win.innerHTML += `<div class="text-end"><b>You:</b> ${msg}</div>`;
  input.value = '';
  const res = await fetch('/intervention', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ question: msg })
  });
  const {answer} = await res.json();
  win.innerHTML += `<div><b>Bot:</b> ${answer}</div>`;
  win.scrollTop = win.scrollHeight;
};
