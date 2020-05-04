function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js')
        .then(() => console.log('Registered service worker'))
        .catch((error) => console.log('Error register service worker ', error));
    }
}

registerServiceWorker();