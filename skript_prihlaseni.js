// skript_prihlaseni.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Načtení všech potřebných HTML elementů
    const serverSelectRadio = document.getElementById('server-sitas');
    const loginSection = document.getElementById('login-section');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // 1. Logika pro výběr serveru
    // Přidáme "posluchače" na změnu stavu u výběru serveru
    serverSelectRadio.addEventListener('change', function() {
        // Pokud je vybrána správná možnost, zobrazíme přihlašovací formulář
        if (serverSelectRadio.checked) {
            loginSection.style.display = 'block';
        }
    });

    // 2. Logika pro odeslání přihlašovacího formuláře
    loginForm.addEventListener('submit', function(event) {
        // Zabráníme výchozímu chování formuláře (které by znovu načetlo stránku)
        event.preventDefault();

        // Skryjeme předchozí chybovou hlášku při každém novém pokusu
        errorMessage.style.display = 'none';

        // Získáme hodnoty z polí (a u jména odstraníme případné mezery na začátku/konci)
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // --- Ověřovací logika ---

        // A. Zkontrolujeme, zda nejsou pole prázdná
        if (username === '' || password === '') {
            errorMessage.textContent = 'Nějaké pole není vyplněno!';
            errorMessage.style.display = 'block';
            return; // Ukončíme funkci
        }

        // B. Zkontrolujeme přihlašovací údaje pro studenta
        if (username === 'rudolfsky.adam' && password === 'Ahgd59vS') {
            // Přesměrujeme na stránku studenta
            window.location.href = 'https://ssitas.github.io/adamr-student/';
            return;
        }

        // C. Zkontrolujeme přihlašovací údaje pro zákonného zástupce
        if (username === 'rudolfsky.adam.zz' && password === 'uhgJGUD5v59J') {
            // Přesměrujeme na stránku zástupce
            window.location.href = 'https://ssitas.github.io/zastupcez/';
            return;
        }

        // D. Pokud žádná z podmínek neprošla, zobrazíme obecnou chybu
        errorMessage.textContent = 'Nesprávné přihlašovací údaje!';
        errorMessage.style.display = 'block';
    });
});