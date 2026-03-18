async function sharePage() {
    try {
        await navigator.share({
            title: document.title,
            url: window.location.href
        });
    } catch (err) {
        console.error("Error sharing:", err);
    }
}