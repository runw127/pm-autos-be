// Index controller 
exports.show = (req, res) => { 
// Show index content 
    res.send((car))
};

//this is car object
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