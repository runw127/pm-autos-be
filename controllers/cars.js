const { Client } = require('pg');
const users = require('./users');

// Index controller 
exports.show = (req, res) => { 

    var car = { carObjects:
        [
            {
              key: 1,
              title: 'Low mileage 3 series',
              imgSrc: 'https://picsum.photos/600/300/?image=25',
              brand: 'BMW',
              model: '320d',
              price: 30500,
              tradeIn: true,
              merchant_id: 1
            },
            {
              key: 2,
              title: 'BMW 5 series Top Spec',
              imgSrc: 'https://picsum.photos/600/300/?image=25',
              brand: 'BMW',
              model: '520d',
              price: 42500,
              tradeIn: false,
              merchant_id: 2
            },
            {
              key: 3,
              title: 'Benz C class',
              imgSrc: 'https://picsum.photos/600/300/?image=25',
              brand: 'Mercedes Benz',
              model: 'C220W',
              price: 29950,
              tradeIn: true,
              merchant_id: 3
            },
            {
              key: 4,
              title: 'Benz E class',
              imgSrc: 'https://picsum.photos/600/300/?image=25',
              brand: 'Mercedes Benz',
              model: 'E250',
              price: 37000,
              tradeIn: false,
              merchant_id: 1
            },
            {
              key: 5,
              title: 'Honda Jazz',
              imgSrc: 'https://picsum.photos/600/300/?image=25',
              brand: 'Honda',
              model: 'Jazz',
              price: 21000,
              tradeIn: true,
              merchant_id: 2
            },
            {
              key: 6,
              title: 'Opel Corsa',
              imgSrc: 'https://picsum.photos/600/300/?image=25',
              brand: 'Opel',
              model: 'Corsa',
              price: 18000,
              tradeIn: true,
              merchant_id: 3
            }
        ]
    };
    
    var merchant = [
        {
            id: 1,
            co_brand: "PM Tyres and Autos Centre",
            co_name: "PM Autos",
            address: "6 Drive, Cork Road",
            town_city: "Waterford",
            county: "Waterford",
            zip_code: "T12 I234",
            opening_hour: 9,
            close_hour: 18,
            sale_number: "0105366901",
            contact_number: "0875324678",
            website: "https://business.google.com/website/pm-tyre-auto-centre",
            showroom_link: "https://carsireland.ie/car-dealers/county/waterford/pm-autos" 
        },
        {
            id: 2,
            co_brand: "Assured Autos",
            co_name: "Assured Autos",
            address: "Monahan Rd, Ballintemple",
            town_city: "Cork",
            county: "T12 D70F",
            zipcode: "T12 D70F",
            opening_hour: 8,
            close_hour: 18,
            sale_number: "+353214847473",
            contact_number: "+353214847473",
            website: "https://www.assuredautos.ie/used-cars-cork/",
            showroom_link: "https://www.assuredautos.ie/used-cars-cork/" 
        },
        {
            id: 3,
            co_brand: "Kearys BMW Eastgate",
            co_name: "Kearys Motor Group",
            address: "4 Eastgate Rd, Castleview, Little Island",
            town_city: "Cork",
            county: "Cork",
            zip_code: "T45 DX63",
            opening_hour: 9,
            close_hour: 17,
            sale_number: "+353215003600",
            contact_number: "0215003600",
            website: "https://www.kearys.ie/bmw/",
            showroom_link: "https://www.kearys.ie/bmw/?gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xbtUbdUo9qH3HxMkXb3DExT_OtnmAiKSmITYLFOIRF8lo-U4L1bqNkaAhdsEALw_wcB"
        }
    
    ]

  // Show index content 
  res.send(car)
};