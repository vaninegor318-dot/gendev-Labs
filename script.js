const facts = [
    "JavaScript був створений всього за 10 днів у 1995 році.",
    "Перший комп'ютерний вірус з'явився у 1986 році і називався 'Brain'.",
    "Більшість коду у світі досі написана на мові C, якій вже понад 50 років.",
    "Слово 'баг' (bug) з'явилося через справжню міль, яка застрягла в реле комп'ютера Mark II у 1947 році."
];
const btn = document.getElementById("factBtn");
const display = document.getElementById("factDisplay");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    display.textContent = facts[randomIndex];
});