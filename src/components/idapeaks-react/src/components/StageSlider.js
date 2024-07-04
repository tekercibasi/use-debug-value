import React from 'react';

/**
 * StageSlider component for displaying a full-width stage slider image.
 */
const StageSlider = () => (
  <div id="stage" className="carousel" data-ride="carousel">
    <div className="img-container">
      <img src="/assets/images/stage/stage3.webp" className="d-block w-100" alt="Slide 3" />
    </div>
  </div>
);

export default StageSlider;
