* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: #f4f6f9;
  color: #1a202c;
  display: flex;
  justify-content: center;
}

.app-container {
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  background-color: #f7fafc;
  position: relative;
  padding-bottom: 80px;
}

.app-header {
  background: linear-gradient(135deg, #0d2040 0%, #1a365d 100%);
  color: #ffffff;
  padding: 24px 20px 40px 20px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.user-greeting h1 { font-size: 24px; font-weight: 700; }
.user-greeting p { font-size: 14px; color: #cbd5e0; margin-top: 2px; }

.balance-card {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.balance-label { font-size: 11px; color: #a0aec0; font-weight: 600; }
.balance-value { font-size: 28px; font-weight: 800; color: #ffffff; display: block; }

.btn-recharge {
  background-color: #ed8936;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}

.main-content {
  padding: 0 16px;
  margin-top: -25px;
}

.digital-card {
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
  border-radius: 20px;
  padding: 20px;
  color: #ffffff;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.3);
}

.card-top { display: flex; justify-content: space-between; align-items: center; }
.card-title { font-size: 11px; color: #93c5fd; font-weight: 700; }
.card-icon { font-size: 18px; color: #93c5fd; }
.card-user-info { margin: 16px 0 20px 0; }
.card-user-info h2 { font-size: 22px; }
.card-user-info p { font-size: 13px; color: #94a3b8; }
.card-balance { display: inline-block; margin-top: 10px; font-size: 20px; font-weight: 800; color: #38bdf8; }

.card-actions { display: flex; gap: 10px; }
.btn-card-action {
  flex: 1; background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff; padding: 10px; border-radius: 12px;
  font-weight: 600; font-size: 14px; cursor: pointer;
}

.queue-card, .meal-card, .info-card {
  background: #ffffff; border-radius: 18px;
  padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 16px;
}

.queue-header, .meal-header { display: flex; align-items: center; gap: 12px; }
.queue-icon-wrapper, .meal-icon-wrapper {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; font-size: 20px;
}
.queue-icon-wrapper { background-color: #feebc8; color: #c05621; }
.meal-icon-wrapper { background-color: #c6f6d5; color: #22543d; }

.queue-text { flex: 1; }
.queue-label, .meal-label { font-size: 11px; font-weight: 700; color: #718096; }
.queue-number { font-size: 22px; font-weight: 800; color: #1a202c; }
.queue-unit { font-size: 14px; color: #4a5568; margin-left: 4px; }
.queue-time { font-size: 12px; color: #718096; display: block; }

.btn-view-queue {
  background-color: #3182ce; color: #ffffff; border: none;
  padding: 8px 14px; border-radius: 10px; font-weight: 600; font-size: 13px; cursor: pointer;
}

.queue-bar-container {
  width: 100%; height: 8px; background-color: #edf2f7;
  border-radius: 4px; margin-top: 12px; overflow: hidden;
}
.queue-bar { height: 100%; background-color: #dd6b20; }
.queue-status-text { font-size: 12px; color: #dd6b20; font-weight: 600; display: block; margin-top: 6px; text-align: right; }

.meal-menu-preview { font-size: 13px; color: #4a5568; margin-top: 10px; border-top: 1px solid #edf2f7; padding-top: 10px; }

.bottom-nav {
  position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 100%; max-width: 430px; height: 65px;
  background: #ffffff; border-top: 1px solid #e2e8f0;
  display: flex; justify-content: space-around; align-items: center; z-index: 100;
}

.nav-item {
  background: none; border: none; display: flex; flex-direction: column;
  align-items: center; gap: 4px; color: #a0aec0; font-size: 11px; font-weight: 600; cursor: pointer;
}
.nav-item.active { color: #dd6b20; }

.modal-overlay {
  display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6); z-index: 200; align-items: center; justify-content: center;
}
.modal-content { background: #ffffff; padding: 24px; border-radius: 20px; width: 80%; max-width: 320px; text-align: center; }
.btn-close-modal { margin-top: 20px; background: #edf2f7; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600; cursor: pointer; }
