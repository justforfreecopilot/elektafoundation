import {timer, reload, updateCountdown} from './countdown-lib';

const registerForm = `<div class="mt-md-5">
    <form id="register-form" action="https://success.elekta.com/l/703323/2020-08-14/2wk29m">
        <div class="white-top-rounded">
            <div class="form-group">
                <input type="text" class="form-control" id="firstName" name="FirstName" placeholder="First name" required>
                <input type="text" class="form-control" id="lastName" name="LastName" placeholder="Last name" required>
                <input type="text" class="form-control" id="facility" name="Facility" placeholder="Facility or institute" required>
                <input type="email" class="form-control" id="email" name="Email" placeholder="Email" pattern="[^@\\s]+@[^@\\s]+\\.[^@\\s]+" required>
                <select id="jobFunction" class="form-control" name="JobFunction" required>
                  <option value="">Job function</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Cancer Registrar">Cancer Registrar</option>
                  <option value="CEO">CEO</option>
                  <option value="CFO">CFO</option>
                  <option value="Communications">Communications</option>
                  <option value="Consultant (Non-Clinical)">Consultant (Non-Clinical)</option>
                  <option value="COO">COO</option>
                  <option value="CTO">CTO</option>
                  <option value="Data Processing Officer">Data Processing Officer</option>
                  <option value="Director Dosimetrist">Director Dosimetrist</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Hermatologist">Hermatologist</option>
                  <option value="Head of Department">Head of Department</option>
                  <option value="Informatics Specialist">Informatics Specialist</option>
                  <option value="Installation Manager">Installation Manager</option>
                  <option value="Lecturer">Lecturer</option>
                  <option value="Logistic Manager">Logistic Manager</option>
                  <option value="Manager">Manager</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Medical Doctor">Medical Doctor</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Nurse Unit Manager">Nurse Unit Manager</option>
                  <option value="Oncologist">Oncologist</option>
                  <option value="Personal Assistant">Personal Assistant</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Physicist" selected="selected">Physicist</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Purchaser">Purchaser</option>
                  <option value="Purchasing Officer">Purchasing Officer</option>
                  <option value="Radiation Therapist">Radiation Therapist</option>
                  <option value="Radiographer/Technologist">Radiographer/Technologist</option>
                  <option value="Registry Manager">Registry Manager</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Sales">Sales</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Surgeon">Surgeon</option>
                  <option value="Technician">Technician</option>
                  <option value="Other">Other</option>
                </select>
                <select id="country" name="Country" class="form-control" required>
                    <option value="">Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong, China</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao, China</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena, Ascension</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                </select>
                <div id="form-message" class="alert alert-warning d-none">
                    Thank you for showing interest in Elekta and our solutions. 
                    Due to regulatory restrictions, this content is not intended for U.S. and Canadian audiences.
                </div>
                <select id="State" name="State" class="form-control d-none"></select>
                <p>By filling out this form we will only contact you regarding this event.</p>
                <label><input type="checkbox" name="emailExplicitConsentOptIn"> If you haven't already opted in to receive communications and marketing from Elekta, you can opt in here by accepting the <a href="https://www.elekta.com/privacy/" target="_blank">Elekta Privacy Policy</a>.</label>
                <input type="hidden" id="form-origin" name="origin">
                <input type="hidden" id="Source" name="Source">
            </div>
        </div>
        <div id="joinTheLaunch" class="join-the-launch text-center bg-secondary">
            <button id="join-submit" type="submit" class="btn btn-link">Register now</button>
        </div>
    </form>
</div>`;
const contentLeft = document.getElementById("content-left");
const contentRight = document.getElementById("content-right");
const animals = ['flamingo', 'penguin', 'bee'];

// Random number
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

const myAnimal = getRandomInt(animals.length);

const video = `<video id="animal" autoplay loop muted playsinline poster="/animations/${animals[myAnimal]}.png" class="img-fluid d-none d-md-inline-block" loading="lazy">
<source src="/animations/${animals[myAnimal]}.webm" type="video/webm">
</video>`;

const videoMobile = `<video id="animalMobile" autoplay loop muted playsinline poster="/animations/${animals[myAnimal]}_mobile.png" class="img-fluid d-inline-block d-md-none" loading="lazy">
<source src="/animations/${animals[myAnimal]}_mobile.webm" type="video/webm">
</video>`;

contentLeft.innerHTML = video + videoMobile;

window.onload = updateCountdown();

// fill the states
function fillStates(country: string) {

  let states: { name: string; abbreviation: string; }[];

  switch (country) {
      case "US":
          states = [
              {
                  "name": "Alabama",
                  "abbreviation": "AL"
              },
              {
                  "name": "Alaska",
                  "abbreviation": "AK"
              },
              {
                  "name": "American Samoa",
                  "abbreviation": "AS"
              },
              {
                  "name": "Arizona",
                  "abbreviation": "AZ"
              },
              {
                  "name": "Arkansas",
                  "abbreviation": "AR"
              },
              {
                  "name": "California",
                  "abbreviation": "CA"
              },
              {
                  "name": "Colorado",
                  "abbreviation": "CO"
              },
              {
                  "name": "Connecticut",
                  "abbreviation": "CT"
              },
              {
                  "name": "Delaware",
                  "abbreviation": "DE"
              },
              {
                  "name": "District Of Columbia",
                  "abbreviation": "DC"
              },
              {
                  "name": "Federated States Of Micronesia",
                  "abbreviation": "FM"
              },
              {
                  "name": "Florida",
                  "abbreviation": "FL"
              },
              {
                  "name": "Georgia",
                  "abbreviation": "GA"
              },
              {
                  "name": "Guam",
                  "abbreviation": "GU"
              },
              {
                  "name": "Hawaii",
                  "abbreviation": "HI"
              },
              {
                  "name": "Idaho",
                  "abbreviation": "ID"
              },
              {
                  "name": "Illinois",
                  "abbreviation": "IL"
              },
              {
                  "name": "Indiana",
                  "abbreviation": "IN"
              },
              {
                  "name": "Iowa",
                  "abbreviation": "IA"
              },
              {
                  "name": "Kansas",
                  "abbreviation": "KS"
              },
              {
                  "name": "Kentucky",
                  "abbreviation": "KY"
              },
              {
                  "name": "Louisiana",
                  "abbreviation": "LA"
              },
              {
                  "name": "Maine",
                  "abbreviation": "ME"
              },
              {
                  "name": "Marshall Islands",
                  "abbreviation": "MH"
              },
              {
                  "name": "Maryland",
                  "abbreviation": "MD"
              },
              {
                  "name": "Massachusetts",
                  "abbreviation": "MA"
              },
              {
                  "name": "Michigan",
                  "abbreviation": "MI"
              },
              {
                  "name": "Minnesota",
                  "abbreviation": "MN"
              },
              {
                  "name": "Mississippi",
                  "abbreviation": "MS"
              },
              {
                  "name": "Missouri",
                  "abbreviation": "MO"
              },
              {
                  "name": "Montana",
                  "abbreviation": "MT"
              },
              {
                  "name": "Nebraska",
                  "abbreviation": "NE"
              },
              {
                  "name": "Nevada",
                  "abbreviation": "NV"
              },
              {
                  "name": "New Hampshire",
                  "abbreviation": "NH"
              },
              {
                  "name": "New Jersey",
                  "abbreviation": "NJ"
              },
              {
                  "name": "New Mexico",
                  "abbreviation": "NM"
              },
              {
                  "name": "New York",
                  "abbreviation": "NY"
              },
              {
                  "name": "North Carolina",
                  "abbreviation": "NC"
              },
              {
                  "name": "North Dakota",
                  "abbreviation": "ND"
              },
              {
                  "name": "Northern Mariana Islands",
                  "abbreviation": "MP"
              },
              {
                  "name": "Ohio",
                  "abbreviation": "OH"
              },
              {
                  "name": "Oklahoma",
                  "abbreviation": "OK"
              },
              {
                  "name": "Oregon",
                  "abbreviation": "OR"
              },
              {
                  "name": "Palau",
                  "abbreviation": "PW"
              },
              {
                  "name": "Pennsylvania",
                  "abbreviation": "PA"
              },
              {
                  "name": "Puerto Rico",
                  "abbreviation": "PR"
              },
              {
                  "name": "Rhode Island",
                  "abbreviation": "RI"
              },
              {
                  "name": "South Carolina",
                  "abbreviation": "SC"
              },
              {
                  "name": "South Dakota",
                  "abbreviation": "SD"
              },
              {
                  "name": "Tennessee",
                  "abbreviation": "TN"
              },
              {
                  "name": "Texas",
                  "abbreviation": "TX"
              },
              {
                  "name": "Utah",
                  "abbreviation": "UT"
              },
              {
                  "name": "Vermont",
                  "abbreviation": "VT"
              },
              {
                  "name": "Virgin Islands",
                  "abbreviation": "VI"
              },
              {
                  "name": "Virginia",
                  "abbreviation": "VA"
              },
              {
                  "name": "Washington",
                  "abbreviation": "WA"
              },
              {
                  "name": "West Virginia",
                  "abbreviation": "WV"
              },
              {
                  "name": "Wisconsin",
                  "abbreviation": "WI"
              },
              {
                  "name": "Wyoming",
                  "abbreviation": "WY"
              }
          ]
          break;
      case "CA":
          states = [
              {
                  "name": "Alberta",
                  "abbreviation": "AB"
              },
              {
                  "name": "British Columbia",
                  "abbreviation": "BC"
              },
              {
                  "name": "Manitoba",
                  "abbreviation": "MB"
              },
              {
                  "name": "New Brunswick",
                  "abbreviation": "NB"
              },
              {
                  "name": "Newfoundland and Labrador",
                  "abbreviation": "NL"
              },
              {
                  "name": "Northwest Territories",
                  "abbreviation": "NT"
              },
              {
                  "name": "Nova Scotia",
                  "abbreviation": "NS"
              },
              {
                  "name": "Nunavut",
                  "abbreviation": "NU"
              },
              {
                  "name": "Ontario",
                  "abbreviation": "ON"
              },
              {
                  "name": "Prince Edward Island",
                  "abbreviation": "PE"
              },
              {
                  "name": "Quebec",
                  "abbreviation": "QC"
              },
              {
                  "name": "Saskatchewan",
                  "abbreviation": "SK"
              },
              {
                  "name": "Yukon Territory",
                  "abbreviation": "YT"
              }
          ]
          break;
      default:
          states = [];
  }

  let dropdown = <HTMLFormElement> document.getElementById('State');

  let defaultOption = document.createElement('option');
  defaultOption.text = 'State';
  defaultOption.value = '';

  // empty all options first
  dropdown.innerHTML = "";

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  let option: HTMLOptionElement;

  for (let i = 0; i < states.length; i++) {
      option = document.createElement('option');
      option.text = states[i].name;
      option.value = states[i].abbreviation;
      dropdown.add(option);
  }
}

// checkState
function formGeneralCheckState() {
  const stateField = document.getElementById('State') as HTMLFormElement;
  const countryEl = document.getElementById('country') as HTMLFormElement;
  const jointhelaunch = document.getElementById('joinTheLaunch') as HTMLFormElement;
  const joinsubmit = document.getElementById('join-submit') as HTMLFormElement;
  const country = countryEl.value;
  const countryMessage = document.getElementById('form-message');

  if (country == "US" || country == "CA") {
      countryMessage.classList.remove("d-none");
      stateField.classList.add("d-none");

      jointhelaunch.classList.remove("join-the-launch");
      jointhelaunch.classList.remove("bg-secondary");
      jointhelaunch.classList.add("white-bottom-rounded");
      joinsubmit.hidden = true;
  } else {
      countryMessage.classList.add("d-none");
      stateField.classList.add("d-none");
      stateField.removeAttribute('required');

      jointhelaunch.classList.add("join-the-launch");
      jointhelaunch.classList.add("bg-secondary");
      jointhelaunch.classList.remove("white-bottom-rounded");
      joinsubmit.hidden = false;
  }
}

// get parameter from URL
function getURLParameter(para: string): string | 0 {
    const results = new RegExp(`[?&]${para}=([^&#]*)`).exec(window.location.href);

    if (results != undefined) {
        return results[1] || 0;
    }
}

// show Thank You message and social icons
function showThankYou(): void {
  const thankYou = `<div class="mt-md-5">
    <h3 class="mb-4">Thank you for registering!</h3>
    <p class="lead">You can add this event to your calendar and share this exciting news using the options below.</p>
    <div class="white-rounded">
                <div class="row">
                    <div class="col text-center">
                        <a href="/downloads/event.ics"><img src="/img/icons/calendar.svg" width="50" height="50" alt="calendar icon"></a>
                    </div>
                    <div class="col text-center">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//findyourbalance.elekta.com" target="_blank"><img src="/img/icons/facebook.svg" width="50" height="50" alt="facebook icon"></a>
                    </div>
                    <div class="col text-center">
                        <a href="https://twitter.com/intent/tweet?text=Curious%20what%20the%20bee,%20flamingo%20and%20penguin%20have%20to%20do%20with%20our%20latest%20linear%20accelerator?%0A%0ARegister%20for%20our%20exclusive%20product%20launch%20on%20September%2015%20at%2010%3A00%20am%20CET!%0A%0Afindyourbalance.elekta.com%0A%0A%23radonc%20%23findyourbalance%20%23radiotherapy" 
                            target="_blank"><img src="/img/icons/twitter.svg" width="50" height="50" alt="twitter icon"></a>
                    </div>
                    <div class="col text-center">
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=findyourbalance.elekta.com&title=Exclusive%20Elekta%20Product%20Launch&summary=Curious%20what%20the%20bee,%20flamingo%20and%20penguin%20have%20to%20do%20with%20our%20latest%20linear%20accelerator?%0A%0ARegister%20for%20our%20exclusive%20product%20launch%20on%20September%2015%20at%2010%3A00%20am%20CET!%0A%0A%23radonc%20%23findyourbalance%20%23radiotherapy&source=" 
                            target="_blank"><img src="/img/icons/linkedin.svg" width="50" height="50" alt="linkedin icon"></a>
                    </div>
                </div>
            </div>
  </div>`;
  contentRight.innerHTML = thankYou;
}

// handle join the launch link on countdown page
document.getElementById("join-link").addEventListener("click", function (e) {
  e.preventDefault();

  // stop countdown
  clearInterval(timer);

  // stop automatic page reload
  clearTimeout(reload);

  contentRight.innerHTML = registerForm;

  const form = $("#register-form");

  // check State from the beginning
  formGeneralCheckState();
  document.getElementById('country').addEventListener('change', function () {
    formGeneralCheckState();
  });

  // populate Source field
  const sourceField = getURLParameter('pk_source');
  const sourceEl = document.getElementById('Source') as HTMLFormElement;
  sourceEl.value = sourceField;

  // populate form-origin field
  const formOrigin = document.getElementById('form-origin') as HTMLFormElement;
  formOrigin.value = document.location.href;

  // send form data via AJAX
  function sendData() {
    const url = form.attr("action");

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
    });
  }

  form.submit(function (event) {
    event.preventDefault();

    sendData();

    showThankYou();
  });
});
