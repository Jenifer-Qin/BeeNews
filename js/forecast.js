fetch('/forecast')
  .then(r=>r.json())
  .then(data=>{
    const tbody = document.querySelector('#forecastTable tbody');
    data.forEach(d=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${d.date}</td>
        <td>${d.tmax_c.toFixed(1)}</td>
        <td>${d.precip_mm.toFixed(1)}</td>
        <td>${d.wind_ms.toFixed(1)}</td>
        <td>${d.activity}</td>
      `;
      tbody.appendChild(tr);
    });
  }).catch(console.error);
