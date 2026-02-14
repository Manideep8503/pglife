const cardsData = [
    {
        title: "Iyer's Paying Guest",
        address: "H.No. 3958 Kaseru Walan, Pahar Ganj, chennai",
        price: 5000,
        interested: 3,
        gender: "male",
        img: "../pgphoto/img/properties/1/1d4f0757fdb86d5f.jpg",
        stars: 4
    },{
        title: "Sharma's PG",
        address: "H.No. 12, Lajpat Nagar, chennai",
        price: 6500,
        interested: 5,
        gender: "female",
        img: "../pgphoto/img/properties/1/1d4f0757fdb86d5f.jpg",
        stars: 4
    },
    {
        title: "Ayyapa's Hostel",
        address: "H.No. 78, Connaught Place, chennai",
        price: 7000,
        interested: 2,
        gender: "unisex",
        img: "../pgphoto/img/properties/1/1d4f0757fdb86d5f.jpg",
        stars: 3
    }
];

const container = document.getElementById("cards-container");

cardsData.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card-grid";

    cardDiv.innerHTML = `
        <img src="${card.img}" class="card-img" alt="PG Image">

        <div class="data">  
            <div class="top-row">
                <div class="stars">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(card.stars)}
                </div>

                <div class="wishlist">
                    <i class="fa-regular fa-heart"></i>
                    <span>${card.interested} interested</span>
                </div>        
            </div>

            <div class="middle-row">
                <h3>${card.title}</h3>
                <p class="address">${card.address}</p>

                <span class="gender">
                    <img src="../pgphoto/img/${card.gender}.png"
                         alt="Gender"
                         class="gender-icon">
                </span>
            </div>

            <div class="bottom-row">
                <div class="price">
                    <i class="fa-solid fa-person"></i>
                    <b> ₹ ${card.price} </b>
                    <span>per month</span>
                </div>

                <button class="view-btn">View</button>
            </div> 
        </div>
    `;
    const wish=cardDiv.querySelector('.wishlist i');
    wish.addEventListener('click',()=>{
        wish.classList.toggle('fa-solid');
    });

    container.appendChild(cardDiv);
});

