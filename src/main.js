import './style.css'

// Initial Appliance Data (Pakistan Standard Wattages)
const initialAppliances = [
  { id: 1, name: 'Ceiling Fan (Standard)', watts: 80, quantity: 0, icon: '🌪️' },
  { id: 2, name: 'Ceiling Fan (Energy Saver)', watts: 60, quantity: 0, icon: '🍃' },
  { id: 3, name: 'LED Light', watts: 12, quantity: 0, icon: '💡' },
  { id: 4, name: 'Tube Light (LED)', watts: 20, quantity: 0, icon: '🔦' },
  { id: 5, name: 'AC (1.5 Ton Inverter)', watts: 1800, quantity: 0, icon: '❄️' },
  { id: 6, name: 'AC (1.0 Ton Inverter)', watts: 1200, quantity: 0, icon: '❄️' },
  { id: 7, name: 'Refrigerator (Medium)', watts: 350, quantity: 0, icon: '🧊' },
  { id: 8, name: 'Deep Freezer', watts: 400, quantity: 0, icon: '🥶' },
  { id: 9, name: 'Water Pump (1 HP)', watts: 750, quantity: 0, icon: '💧' },
  { id: 10, name: 'Washing Machine', watts: 500, quantity: 0, icon: '🧺' },
  { id: 11, name: 'Iron (Istari)', watts: 1000, quantity: 0, icon: '🔥' },
  { id: 12, name: 'TV (LED)', watts: 80, quantity: 0, icon: '📺' },
  { id: 13, name: 'Laptop / Mobile Charger', watts: 50, quantity: 0, icon: '💻' },
];

let appliances = [...initialAppliances];

// DOM Elements
const applianceList = document.getElementById('appliance-list');
const totalWattsEl = document.getElementById('total-watts');
const totalAmpsEl = document.getElementById('total-amps');
const recommendedKvaEl = document.getElementById('recommended-kva');
const inverterSuggestionEl = document.getElementById('inverter-suggestion');
const customNameInput = document.getElementById('custom-name');
const customWattsInput = document.getElementById('custom-watts');
const addCustomBtn = document.getElementById('add-custom-btn');

// Constants
const VOLTAGE = 230;
const POWER_FACTOR = 0.8;
const SAFETY_MARGIN = 1.25;

// Render Functions
function renderAppliances() {
  applianceList.innerHTML = '';
  appliances.forEach(app => {
    const card = document.createElement('div');
    card.className = 'appliance-card';
    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">${app.icon} ${app.name}</span>
        <span class="card-watts">${app.watts}W</span>
      </div>
      <div class="controls">
        <button class="btn-circle" onclick="updateQuantity(${app.id}, -1)">−</button>
        <span class="quantity">${app.quantity}</span>
        <button class="btn-circle" onclick="updateQuantity(${app.id}, 1)">+</button>
      </div>
    `;
    applianceList.appendChild(card);
  });
}

// Calculation Logic
function calculateLoad() {
  let totalWatts = 0;
  appliances.forEach(app => {
    totalWatts += app.watts * app.quantity;
  });

  // Calculate Amps (I = P / V) roughly for AC
  // Real Power (W) = V * I * PF -> I = W / (V * PF)
  const totalAmps = totalWatts / (VOLTAGE * POWER_FACTOR);

  // Inverter Sizing
  // KVA = (Watts / PF) / 1000
  // With Safety Margin
  const requiredKva = (totalWatts / POWER_FACTOR * SAFETY_MARGIN) / 1000;

  // Update UI
  totalWattsEl.textContent = `${totalWatts} W`;
  totalAmpsEl.textContent = `${totalAmps.toFixed(1)} A`;

  // Format KVA recommendation
  let recommendation = '';
  if (totalWatts === 0) {
    recommendedKvaEl.textContent = '0 KVA';
    recommendation = 'Add appliances to start.';
  } else {
    // Round up to nearest common inverter size roughly
    const marketSizes = [1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 8, 10]; // Common in PK
    const suggestedSize = marketSizes.find(size => size >= requiredKva) || '> ' + Math.ceil(requiredKva);

    recommendedKvaEl.textContent = `${requiredKva.toFixed(2)} KVA`;

    recommendation = `
      Based on your load of <strong>${totalWatts}W</strong>, you need at least a <strong>${requiredKva.toFixed(2)} KVA</strong> system.<br>
      Recommended Market Size: <strong>${suggestedSize} KW/KVA</strong> Inverter.
    `;
  }

  inverterSuggestionEl.innerHTML = recommendation;
}

// Event Handlers
window.updateQuantity = (id, change) => {
  const app = appliances.find(a => a.id === id);
  if (app) {
    app.quantity += change;
    if (app.quantity < 0) app.quantity = 0;
    renderAppliances();
    calculateLoad();
  }
};

addCustomBtn.addEventListener('click', () => {
  const name = customNameInput.value;
  const watts = parseInt(customWattsInput.value);

  if (name && watts > 0) {
    const newId = appliances.length > 0 ? Math.max(...appliances.map(a => a.id)) + 1 : 1;
    appliances.push({
      id: newId,
      name: name,
      watts: watts,
      quantity: 1,
      icon: '⚡'
    });
    customNameInput.value = '';
    customWattsInput.value = '';
    renderAppliances();
    calculateLoad();
  } else {
    alert('Please enter a valid name and wattage.');
  }
});

// Initial Render
renderAppliances();
calculateLoad();
