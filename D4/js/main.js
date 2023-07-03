window.onload = (event) => {
    // Funzione che conta tutte le card della pagina
    let allCards = document.querySelectorAll(".card");
    // console.log(allCards.length);
    alert(`Nella pagina sono presenti ${allCards.length} viaggi`);
};

// Funzione per rimuovere le card della pagina
const removeCards = function () {
    let allCards = document.querySelectorAll(".card");
    for (let i = 0; i < allCards.length; i++) {
        const card = allCards[i];
        card.remove();
    }
};
