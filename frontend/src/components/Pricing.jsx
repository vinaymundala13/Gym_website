import React from 'react';
import { Check } from 'lucide-react'; // Ensure 'lucide-react' is imported correctly
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingPlans = [
    {
      imgUrl: '/pricing.jpg',
      title: 'QUARTERLY',
      price: '$19.99',
      length: 3,
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'HALFYEARLY',
      price: '$29.99',
      length: 6,
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'YEARLY',
      price: '$39.99',
      length: 9,
    },
  ];

  return (
    <section className='pricing'>
      <h1>CHOOSE A PLAN TO GET FIT</h1>
      <div className="wrapper">
        {pricingPlans.map((plan) => (
          <div className="card" key={plan.title}>
            <img src={plan.imgUrl} alt={plan.title} />
            <div className="title">
              <h2>{plan.title}</h2>
              <h3>{plan.price}</h3>
              <p>For {plan.length} Months</p>
            </div>
            <div className="description">
              <p>
                <Check /> Equipment
              </p>
              <p>
                <Check /> All day Free Training
              </p>
              <p>
                <Check /> Free Restroom
              </p>
              <p>
                <Check /> 24/7 Skilled Support
              </p>
              <p>
                <Check /> 20 Days Freezing option
              </p>
              <Link to="/">Join Here</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
