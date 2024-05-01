let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    showAddToHomeScreenButton();
});

function showAddToHomeScreenButton() {
    const addToHomeScreenButton = document.getElementById('add-to-home-screen-button');
    addToHomeScreenButton.style.display = 'block';
    addToHomeScreenButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
}
