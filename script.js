let currentBalance = 2.00;

function rechargeBalance() {
  const amount = prompt("Digite o valor para recarga via PIX (R$):", "10.00");
  if (amount && !isNaN(parseFloat(amount))) {
    currentBalance += parseFloat(amount);
    updateDisplay();
    alert("Recarga efetuada com sucesso!");
  }
}

function updateDisplay() {
  const formatted = "R$ " + currentBalance.toFixed(2).replace(".", ",");
  document.getElementById("user-balance").innerText = formatted;
  document.getElementById("card-balance-display").innerText = formatted;
}

function showQRCode() {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").innerText = "Apresente no Leitor do RU";
  document.getElementById("modal-body").innerHTML = `
    <div style="background:#fff; padding:15px; border-radius:12px; display:inline-block; border: 2px dashed #cbd5e0;">
      <i class="fa-solid fa-qrcode" style="font-size:140px; color:#1a202c;"></i>
    </div>
    <p style="margin-top:12px; font-size:12px; color:#718096;">Acesso RU UERJ — Matrícula: 20241234567</p>
  `;
  modal.style.display = "flex";
}

function showNFC() {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").innerText = "Aproxime da Catraca";
  document.getElementById("modal-body").innerHTML = `
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

function switchTab(tabName, element) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');

  const selectedTab = document.getElementById('tab-' + tabName);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }

  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => item.classList.remove('active'));

  if (element) {
    element.classList.add('active');
  }
}
