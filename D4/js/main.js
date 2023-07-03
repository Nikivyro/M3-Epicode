window.onload = (event) => {
    // Funzione che conta tutte le card della pagina
    let allCards = document.querySelectorAll(".card");
    console.log(allCards.length);
    alert(`Nella pagina sono presenti ${allCards.length} viaggi`);
    
    // Funzione per rimuovere le card della pagina
    function removeCard (){
        for (const card of allCards) {
            card.remove()
        }
    }
};
