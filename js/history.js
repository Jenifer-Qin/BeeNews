document.getElementById('loadHist').onclick = () => {
  const s = document.getElementById('startDate').value;
  const e = document.getElementById('endDate').value;
  fetch(`/history?start=${s}&end=${e}`)
    .then(r=>r.json()).then(rows=>{
      const tb = document.querySelector('#historyTable tbody');
      tb.innerHTML = '';
      rows.forEach(r=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${r.date}</td><td>${r.activity}</td>`;
        tb.appendChild(tr);
      });
    }).catch(console.error);
};
