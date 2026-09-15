let currentBalance = 2.00;

function rechargeBalance() {
  const amount = prompt("Digite o valor para recarga (R$):", "10.00");
  if (amount && !isNaN(parseFloat(amount))) {
    currentBalance += parseFloat(amount);
    updateDisplay();
    alert("Recarga realizada com sucesso!");
  }
}

function updateDisplay() {
  const formatted = "R$ " + currentBalance.toFixed(2).replace(".", ",");
  document.getElementById("user-balance").innerText = formatted;
  document.getElementById("card-balance-display").innerText = formatted;
}

function showQRCode() {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  modalTitle.innerText = "Apresente no Leitor do RU";
  modalBody.innerHTML = `
    <div style="background:#fff; padding:15px; border-radius:12px; display:inline-block; border: 2px dashed #cbd5e0;">
      <i class="fa-solid fa-qrcode" style="font-size:140px; color:#1a202c;"></i>
    </div>
    <p style="margin-top:12px; font-size:12px; color:#718096;">Matrícula: 20241234567</p>
  `;
  modal.style.display = "flex";
}

function showNFC() {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  modalTitle.innerText = "Aproxime seu Celular";
  modalBody.innerHTML = `
    <div style="padding:20px; color:#3182ce;">
      <i class="fa-solid fa-wifi" style="font-size:80px; transform: rotate(90deg);"></i>
    </div>
    <p style="font-size:14px; font-weight:600; color:#2d3748;">Aproximação NFC Ativa...</p>
  `;
  modal.style.display = "flex";
}

function closeModal(event) {
  if (event.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
}

function closeModalDirect() {
  document.getElementById("modal").style.display = "none";
}

function switchTab(tabName) {
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => item.classList.remove('active'));
  
  event.currentTarget.classList.add('active');
}
