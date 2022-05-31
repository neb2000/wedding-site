import "core-js/stable";
import "regenerator-runtime/runtime";
import "whatwg-fetch";

import './RSVPForm';

const resizeWindow = () => {
  if (('ontouchstart' in window) && ((navigator.userAgent.match(/iPad|iPhone|iPod|Macintosh/i) != null) || (navigator.platform.match(/i(Phone|Pod)/i) != null))) {
    document.body.style.minHeight = `${window.innerHeight}px`;
  }
}

document.addEventListener('DOMContentLoaded', resizeWindow);
window.addEventListener('resize', resizeWindow);