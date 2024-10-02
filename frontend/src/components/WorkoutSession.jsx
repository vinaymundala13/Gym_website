import React from 'react';

const WorkoutSession = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>Elevate your fitness with our expertly designed workout sessions, tailored for all fitness levels.</p>
        <img src='/img5.jpg' alt='workout'></img>
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Join our high-intensity bootcamps led by certified trainers to push your limits and achieve maximum results in minimal time. </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>Build muscle and improve overall fitness with a combination of weight training and cardio exercises.</p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>Burn calories fast and improve cardiovascular health with high-intensity interval training (HIIT).</p>
          </div>
          <div>
            <h4>Core Strength Bootcamp</h4>
            <p>Strengthen your core muscles and improve posture with targeted exercises focusing on abs and back.</p>
          </div>
          <div>
            <h4>Flexibility & Mobility Bootcamp</h4>
            <p>Increase your range of motion and reduce the risk of injury with guided stretching and mobility exercises.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutSession;
