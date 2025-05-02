document.addEventListener('DOMContentLoaded', function() {
  
    const cars = [
      {
        image: "images/BMW.webp",
        title: "BMW M5 F90",
        price: "48 000 000 ₸",
        details: [
          { label: "Двигатель", value: "4.4L V8" },
          { label: "Мощность", value: "625 л.с." },
          { label: "Привод", value: "Полный" },
          { label: "Владельцев", value: "1" },
          { label: "Пробег", value: "55 000 км" },
          { label: "Год выпуска", value: "2021" }
        ]
      },
      {
        image: "images/MANSROY.png",
        title: "Audi RS7",
        price: "98 000 000 ₸",
        details: [
          { label: "Двигатель", value: "4.0L V8" },
          { label: "Мощность", value: "600 л.с." },
          { label: "Привод", value: "Полный" },
          { label: "Владельцев", value: "2" },
          { label: "Пробег", value: "79 000 км" },
          { label: "Год выпуска", value: "2020" }
        ]
      },
      {
        image: "images/570.webp",
        title: "Lexus LX570",
        price: "56 000 000 ₸",
        details: [
          { label: "Двигатель", value: "5.7L V8" },
          { label: "Мощность", value: "367 л.с." },
          { label: "Привод", value: "Полный" },
          { label: "Владельцев", value: "2" },
          { label: "Пробег", value: "157 000 км" },
          { label: "Год выпуска", value: "2020" }
        ]
      },
      {
        image: "images/GELIK.webp",
        title: "Mercedes-Benz G-Class",
        price: "48 550 000 ₸",
        details: [
          { label: "Двигатель", value: "4.0L V8" },
          { label: "Мощность", value: "416 л.с." },
          { label: "Привод", value: "Полный" },
          { label: "Владельцев", value: "6" },
          { label: "Пробег", value: "351 000 км" },
          { label: "Год выпуска", value: "2019" }
        ]
      },
      {
        image: "images/nissan.webp",
        title: "Nissan GT-R",
        price: "23 200 000 ₸",
        details: [
          { label: "Двигатель", value: "3.8L V6" },
          { label: "Мощность", value: "565 л.с." },
          { label: "Привод", value: "Задний" },
          { label: "Владельцев", value: "2" },
          { label: "Пробег", value: "140 000 км" },
          { label: "Год выпуска", value: "2020" }
        ]
      },
      {
        image: "images/KON1.webp",
        title: "Koenigsegg Gemera",
        price: "1 600 490 000 ₸",
        details: [
          { label: "Двигатель", value: "Электрический" },
          { label: "Мощность", value: "2300 л.с." },
          { label: "Привод", value: "Полный" },
          { label: "Владельцев", value: "0" },
          { label: "Пробег", value: "7 500 км" },
          { label: "Год выпуска", value: "2024" }
        ]
      },
      {
        image: "images/supra.webp",
        title: "Toyota Supra",
        price: "28 000 000 ₸",
        details: [
          { label: "Двигатель", value: "3.0L V6" },
          { label: "Мощность", value: "590 л.с." },
          { label: "Привод", value: "Задний" },
          { label: "Владельцев", value: "4" },
          { label: "Пробег", value: "687 000 км" },
          { label: "Год выпуска", value: "1996" }
        ]
      },
      {
        image: "images/100audi.jpg",
        title: "Audi-100 ",
        price: "20 000 000 ₸",
        details: [
          { label: "Двигатель", value: "1.8L 4-целинра" },
          { label: "Мощность", value: "80 л.с." },
          { label: "Привод", value: "Передний" },
          { label: "Владельцев", value: "7" },
          { label: "Пробег", value: "28 000 км" },
          { label: "Год выпуска", value: "1970" }
        ]
      },
     
    ];
  

    const carGrid = document.querySelector('.car-grid');
    
    cars.forEach(car => {
      const detailsHTML = car.details.map(detail => `
        <div class="detail-item">
          <span class="detail-label">${detail.label}:</span>
          <span class="detail-value">${detail.value}</span>
        </div>
      `).join('');
      
      const carHTML = `
        <div class="car-card">
          <img src="${car.image}" alt="${car.title}" class="car-image">
          <div class="car-info">
            <h3 class="car-title">${car.title}</h3>
            <p class="car-price">${car.price}</p>
            <div class="car-details">
              ${detailsHTML}
            </div>
          </div>
        </div>
      `;
      
      carGrid.insertAdjacentHTML('beforeend', carHTML);
    });
  });