import '../styles/modern.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/segment-one.css';
import '../styles/components/segment-two.css';
import '../styles/components/segment-three.css';
import '../styles/components/segment-four.css';
import '../styles/components/segment-five.css';
import '../styles/components/pricing-main.css';
import '../styles/components/about-main.css';
import '../styles/components/contact-main.css';
import '../styles/components/mobile-nav.css';
import '../styles/components/footer.css';
import '../styles/util.css';

// get elements
const mobileCloseButton = document.getElementById('button-close');
const mobileOpenButton = document.querySelector('.mobile-menu-button');
const mobileNavigation = document.querySelector('.mobile-nav');

const indexHeroButton = document.querySelector('.hero-button');

// submit buttons
const submitButton = document.getElementById('submit-button');
const emailScheduleButton = document.getElementById('email-schedule-button');
const emailScheduleButtonTwo = document.getElementById(
  'email-schedule-button-two'
);

// input fields
const invalidText = document.querySelector('.input-text-invalid');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input-1');
const companyInput = document.getElementById('company-input');
const titleInput = document.getElementById('title-input');
const messageInput = document.getElementById('message-input');
const checkboxInput = document.getElementById('checkbox-input');

// invalid fields
const nameInavlid = document.getElementById('name-invalid');
const emailInavlid = document.getElementById('email-invalid');
const invalidEmailText = document.getElementById('email-invalid-second');
const companyInavlid = document.getElementById('company-invalid');
const titleInavlid = document.getElementById('title-invalid');
const messageInavlid = document.getElementById('message-invalid');

// create elements
const validCharacters =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-';

// functions
function displayMobile() {
  mobileNavigation.style.display =
    mobileNavigation.style.display === 'block' ? 'none' : 'block';
}

function displayRemove() {
  mobileNavigation.style.display = 'none';
}

function checkEmptyFields() {
  let isEmpty = false;

  if (!nameInput.value) {
    nameInput.style.borderBottom = '1px solid red';
    nameInavlid.style.display = 'block';
    isEmpty = true;
  } else {
    nameInput.style.borderBottom = '';
    nameInavlid.style.display = 'none';
  }

  if (!emailInput.value) {
    emailInput.style.borderBottom = '1px solid red';
    emailInavlid.style.display = 'block';
    isEmpty = true;
  } else {
    emailInput.style.borderBottom = '';
    emailInavlid.style.display = 'none';
  }

  if (!companyInput.value) {
    companyInput.style.borderBottom = '1px solid red';
    companyInavlid.style.display = 'block';
    isEmpty = true;
  } else {
    companyInput.style.borderBottom = '';
    companyInavlid.style.display = 'none';
  }

  if (!titleInput.value) {
    titleInput.style.borderBottom = '1px solid red';
    titleInavlid.style.display = 'block';
    isEmpty = true;
  } else {
    titleInput.style.borderBottom = '';
    titleInavlid.style.display = 'none';
  }

  if (!messageInput.value) {
    messageInput.style.borderBottom = '1px solid red';
    messageInavlid.style.display = 'block';
    isEmpty = true;
  } else {
    messageInput.style.borderBottom = '';
    messageInavlid.style.display = 'none';
  }

  if (!checkboxInput.checked) {
    checkboxInput.style.borderBottom = '1px solid red';
    isEmpty = true;
  } else {
    checkboxInput.style.borderBottom = '';
  }

  return isEmpty;
}

function checkEmail() {
  const userEmail = emailInput.value.trim();
  const [localPart, domainPart] = userEmail.split('@');

  emailInput.style.borderBottom = '';
  emailInavlid.style.display = 'none';
  invalidEmailText.style.display = 'none';

  if (!userEmail.includes('@') || !localPart || !domainPart) {
    emailInput.style.borderBottom = '1px solid red';
    invalidEmailText.style.display = 'block';
    console.log('Invalid email: missing "@" or local/domain part');
    return false;
  }

  const atSymbolCount = userEmail.split('@').length - 1;
  if (atSymbolCount !== 1) {
    emailInput.style.borderBottom = '1px solid red';
    invalidEmailText.style.display = 'none';
    console.log('Invalid email: more than one "@" symbol');
    return false;
  }

  for (let i = 0; i < localPart.length; i++) {
    const char = localPart[i];
    if (!validCharacters.includes(char)) {
      emailInput.style.borderBottom = '1px solid red';
      emailInavlid.style.display = 'block';
      console.log('Invalid email: invalid characters in local part');
      return false;
    }
  }

  if (!isValidDomain(domainPart)) {
    emailInput.style.borderBottom = '1px solid red';
    emailInavlid.style.display = 'block';
    console.log('Invalid email: domain is not valid');
    return false;
  }

  console.log('Valid email');
  return true;
}

function isValidDomain(domain) {
  if (!domain.includes('.')) {
    console.log('invalid');
    return false;
  }
  const domainParts = domain.split('.');

  for (const part of domainParts) {
    if (part.length < 1) {
      return false;
    }

    if (part.startsWith('-') || part.endsWith('-')) {
      console.log('invalid email');
      return false;
    }
  }
  console.log('valid email yes');
  return true;
}

// event listeners
mobileOpenButton.addEventListener('click', displayMobile);
mobileCloseButton.addEventListener('click', displayRemove);

submitButton.addEventListener('click', () => {
  const emptyFields = checkEmptyFields();
  const validEmail = checkEmail();

  if (!emptyFields && validEmail) {
    console.log('Form submitted successfully!');
  }
});
