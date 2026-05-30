
function applySettings() {
    }
    
    window.currentCurrency = localStorage.getItem('currency') || '₽';
    window.reminderDays = parseInt(localStorage.getItem('reminderDays')) || 7;
}

function formatPrice(amount) {
    return amount + ' ' + (window.currentCurrency || '₽');
}
document.addEventListener('DOMContentLoaded', applySettings);