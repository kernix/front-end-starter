// Wrap function
export function wrap(el, wrapper, className) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
  if (className) {
    wrapper.classList.add(className);
  }
}

// Fade Out function
export function fadeOut(element, toValue = 0, duration = 500) {
  const fromValue = parseFloat(element.style.opacity) || 1;
  const startTime = Date.now();
  const framerate = 1000 / 60; // 60fps
  
  let interval = setInterval(() => {
      const currentTime = Date.now();
      const timeDiff = (currentTime - startTime) / duration;
      const value = fromValue - (fromValue - toValue) * timeDiff;
      
      if (timeDiff >= 1) {
          clearInterval(interval);
          interval = 0;
      }
      
      element.style.opacity = value.toString();
      element.style.display = value > 0 ? 'block' : 'none';
  }, framerate)
}


// Slide Toggle 
HTMLElement.prototype.slideToggle = function(duration, callback) {
  if (this.clientHeight === 0) {
    _s(this, duration, callback, true);
  } else {
    _s(this, duration, callback);
  }
};

HTMLElement.prototype.slideUp = function(duration, callback) {
  _s(this, duration, callback);
};

HTMLElement.prototype.slideDown = function (duration, callback) {
  _s(this, duration, callback, true);
};

function _s(el, duration, callback, isDown) {

  if (typeof duration === 'undefined') duration = 300;
  if (typeof isDown === 'undefined') isDown = false;

  el.style.overflow = "hidden";
  if (isDown) el.style.display = "block";

  var elStyles        = window.getComputedStyle(el);

  var elHeight        = parseFloat(elStyles.getPropertyValue('height'));
  var elPaddingTop    = parseFloat(elStyles.getPropertyValue('padding-top'));
  var elPaddingBottom = parseFloat(elStyles.getPropertyValue('padding-bottom'));
  var elMarginTop     = parseFloat(elStyles.getPropertyValue('margin-top'));
  var elMarginBottom  = parseFloat(elStyles.getPropertyValue('margin-bottom'));

  var stepHeight        = elHeight        / duration;
  var stepPaddingTop    = elPaddingTop    / duration;
  var stepPaddingBottom = elPaddingBottom / duration;
  var stepMarginTop     = elMarginTop     / duration;
  var stepMarginBottom  = elMarginBottom  / duration;

  var start;

  function step(timestamp) {

    if (start === undefined) start = timestamp;

    var elapsed = timestamp - start;

    if (isDown) {
      el.style.height        = (stepHeight        * elapsed) + "px";
      el.style.paddingTop    = (stepPaddingTop    * elapsed) + "px";
      el.style.paddingBottom = (stepPaddingBottom * elapsed) + "px";
      el.style.marginTop     = (stepMarginTop     * elapsed) + "px";
      el.style.marginBottom  = (stepMarginBottom  * elapsed) + "px";
    } else {
      el.style.height        = elHeight        - (stepHeight        * elapsed) + "px";
      el.style.paddingTop    = elPaddingTop    - (stepPaddingTop    * elapsed) + "px";
      el.style.paddingBottom = elPaddingBottom - (stepPaddingBottom * elapsed) + "px";
      el.style.marginTop     = elMarginTop     - (stepMarginTop     * elapsed) + "px";
      el.style.marginBottom  = elMarginBottom  - (stepMarginBottom  * elapsed) + "px";
    }

    if (elapsed >= duration) {
      el.style.height        = "";
      el.style.paddingTop    = "";
      el.style.paddingBottom = "";
      el.style.marginTop     = "";
      el.style.marginBottom  = "";
      el.style.overflow      = "";
      if (!isDown) el.style.display = "none";
      if (typeof callback === 'function') callback();
    } else {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}