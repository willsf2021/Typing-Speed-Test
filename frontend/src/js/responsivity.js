const DOMResponsivity = {
  logo: document.querySelector("#logo-img"),
  personalDesktop: document.querySelector("#personal-best-span"),
};

const breakpoints = {
  mobile: '(max-width: 768px)',
  desktop: '(min-width: 769px)',
};

function setLogo(isMobile) {
  const size = isMobile ? 'small' : 'large';

  DOMResponsivity.logo.setAttribute(
    'src',
    `../assets/images/logo-${size}.svg`
  );
}

function setHeader(isMobile) {
  const type = isMobile ? 'Best' : 'Personal best';
  DOMResponsivity.personalDesktop.textContent = `${type}:`;
}

function initResponsivity() {
  const mobileMedia = window.matchMedia(breakpoints.mobile);

  setLogo(mobileMedia.matches);
  setHeader(mobileMedia.matches);

  mobileMedia.addEventListener('change', (e) => {
    setLogo(e.matches);
    setHeader(e.matches);
  });
}

initResponsivity();
