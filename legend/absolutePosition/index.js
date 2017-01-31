var legend, chart, legendTitle;

anychart.onDocumentLoad(function() {
  var governmentTypes = [
    'Single-party state',
    'Absolute monarchy',
    'Constitutional monarchy',
    'Presidential republic',
    'Parliamentary republic',
    'Presidential constitutional republic',
    'Parliamentary constitutional republic',
    'Semi-presidential republic',
    'Other'
  ];
  var dataSet = anychart.data.set([
    {id: "AD", name: "Andorra", value: "Constitutional monarchy"},
    {id: "AE", name: "United Arab Emirates", value: "Absolute monarchy"},
    {id: "AF", name: "Afghanistan", value: "Presidential republic"},
    {id: "AG", name: "Antigua and Barbuda", value: "Constitutional monarchy"},
    {id: "AI", name: "Anguilla", value: "Constitutional monarchy"},
    {id: "AL", name: "Albania", value: "Parliamentary constitutional republic"},
    {id: "AM", name: "Armenia", value: "Semi-presidential republic"},
    {id: "AO", name: "Angola", value: "Presidential republic"},
    {id: "AQ", name: "Antarctica", value: ""},
    {id: "AR", name: "Argentina", value: "Presidential constitutional republic"},
    {id: "AS", name: "American Samoa", value: "Presidential constitutional republic"},
    {id: "AT", name: "Austria", value: "Parliamentary republic"},
    {id: "AU", name: "Australia", value: "Constitutional monarchy"},
    {id: "AW", name: "Aruba", value: "Constitutional monarchy"},
    {id: "AX", name: "Aland Islands", value: "Parliamentary republic"},
    {id: "AZ", name: "Azerbaijan", value: "Presidential republic"},
    {id: "BA", name: "Bosnia and Herzegovina", value: "Parliamentary republic"},
    {id: "BB", name: "Barbados", value: "Constitutional monarchy"},
    {id: "BD", name: "Bangladesh", value: "Constitutional republic"},
    {id: "BE", name: "Belgium", value: "Constitutional monarchy"},
    {id: "BF", name: "Burkina Faso", value: "Semi-presidential republic"},
    {id: "BG", name: "Bulgaria", value: "Parliamentary republic"},
    {id: "BH", name: "Bahrain", value: "Constitutional monarchy"},
    {id: "BI", name: "Burundi", value: "Presidential republic"},
    {id: "BJ", name: "Benin", value: "Presidential republic"},
    {id: "BL", name: "Saint Barthélemy", value: "Semi-presidential republic"},
    {id: "BM", name: "Bermuda", value: "Constitutional monarchy"},
    {id: "BN", name: "Brunei", value: "Absolute monarchy"},
    {id: "BO", name: "Bolivia", value: "Presidential constitutional republic"},
    {id: "BQ", name: "Bonaire, Sint Eustatius and Saba", value: "Constitutional monarchy"},
    {id: "BR", name: "Brazil", value: "Presidential constitutional republic"},
    {id: "BS", name: "Bahamas", value: "Constitutional monarchy"},
    {id: "BT", name: "Bhutan", value: "Constitutional monarchy"},
    {id: "BV", name: "Bouvet Island", value: "Constitutional monarchy"},
    {id: "BW", name: "Botswana", value: "Parliamentary republic"},
    {id: "BY", name: "Belarus", value: "Presidential republic"},
    {id: "BZ", name: "Belize", value: "Constitutional monarchy"},
    {id: "CA", name: "Canada", value: "Constitutional monarchy"},
    {id: "CC", name: "Cocos (Keeling) Islands", value: "Constitutional monarchy"},
    {id: "CD", name: "Congo, the Democratic Republic of the", value: "Semi-presidential republic"},
    {id: "CF", name: "Central African Republic", value: "Provisional republic"},
    {id: "CG", name: "Congo", value: "Presidential republic"},
    {id: "CH", name: "Switzerland", value: "Presidential parliamentary republic"},
    {id: "CI", name: "Cote d'Ivoire", value: "Semi-presidential republic"},
    {id: "CK", name: "Cook Islands", value: "Constitutional monarchy"},
    {id: "CL", name: "Chile", value: "Presidential constitutional republic"},
    {id: "CM", name: "Cameroon", value: "Presidential republic"},
    {id: "CN", name: "China", value: "Single-party state"},
    {id: "CO", name: "Colombia", value: "Presidential constitutional republic"},
    {id: "CR", name: "Costa Rica", value: "Presidential constitutional republic"},
    {id: "CU", name: "Cuba", value: "Single-party state"},
    {id: "CV", name: "Cabo Verde", value: "Semi-presidential republic"},
    {id: "CW", name: "Curaçao", value: "Constitutional monarchy"},
    {id: "CX", name: "Christmas Island", value: "Constitutional monarchy"},
    {id: "CY", name: "Cyprus", value: "Presidential constitutional republic"},
    {id: "CZ", name: "Czech Republic", value: "Parliamentary constitutional republic"},
    {id: "DE", name: "Germany", value: "Parliamentary constitutional republic"},
    {id: "DJ", name: "Djibouti", value: "Single-party state"},
    {id: "DK", name: "Denmark", value: "Constitutional monarchy"},
    {id: "DM", name: "Dominica", value: "Parliamentary republic"},
    {id: "DO", name: "Dominican Republic", value: "Presidential republic"},
    {id: "DZ", name: "Algeria", value: "Semi-presidential republic"},
    {id: "EC", name: "Ecuador", value: "Presidential constitutional republic"},
    {id: "EE", name: "Estonia", value: "Parliamentary republic"},
    {id: "EG", name: "Egypt", value: "Semi-presidential republic"},
    {id: "EH", name: "Western Sahara", value: "Semi-presidential republic"},
    {id: "ER", name: "Eritrea", value: "Single-party state"},
    {id: "ES", name: "Spain", value: "Constitutional monarchy"},
    {id: "ET", name: "Ethiopia", value: "Parliamentary republic"},
    {id: "FI", name: "Finland", value: "Parliamentary republic"},
    {id: "FJ", name: "Fiji", value: "Parliamentary republic"},
    {id: "FK", name: "Falkland Islands", value: "Constitutional monarchy"},
    {id: "FM", name: "Micronesia, Federated States of", value: "Parliamentary republic"},
    {id: "FO", name: "Faroe Islands", value: "Constitutional monarchy"},
    {id: "FR", name: "France", value: "Semi-presidential republic"},
    {id: "GA", name: "Gabon", value: "Presidential republic"},
    {id: "GB", name: "United Kingdom of Great Britain and Northern Ireland", value: "Constitutional monarchy"},
    {id: "GD", name: "Grenada", value: "Constitutional monarchy"},
    {id: "GE", name: "Georgia", value: "Semi-presidential republic"},
    {id: "GF", name: "French Guiana", value: "Semi-presidential republic"},
    {id: "GG", name: "Guernsey", value: "Constitutional monarchy"},
    {id: "GH", name: "Ghana", value: "Presidential constitutional republic"},
    {id: "GI", name: "Gibraltar", value: "Constitutional monarchy"},
    {id: "GL", name: "Greenland", value: "Constitutional monarchy"},
    {id: "GM", name: "Gambia", value: "Presidential republic"},
    {id: "GN", name: "Guinea", value: "Presidential republic"},
    {id: "GP", name: "Guadeloupe", value: "Semi-presidential republic"},
    {id: "GQ", name: "Equatorial Guinea", value: "Presidential republic"},
    {id: "GR", name: "Greece", value: "Parliamentary constitutional republic"},
    {id: "GS", name: "South Georgia and the South Sandwich Islands", value: "Constitutional monarchy"},
    {id: "GT", name: "Guatemala", value: "Presidential republic"},
    {id: "GU", name: "Guam", value: "Presidential constitutional republic"},
    {id: "GW", name: "Guinea-Bissau", value: "Semi-presidential republic"},
    {id: "GY", name: "Guyana", value: "Semi-presidential republic"},
    {id: "HK", name: "Hong Kong", value: "Single-party state"},
    {id: "HM", name: "Heard Island and McDonald Islands", value: "Constitutional monarchy"},
    {id: "HN", name: "Honduras", value: "Presidential republic"},
    {id: "HR", name: "Croatia", value: "Parliamentary constitutional republic"},
    {id: "HT", name: "Haiti", value: "Semi-presidential republic"},
    {id: "HU", name: "Hungary", value: "Parliamentary constitutional republic"},
    {id: "ID", name: "Indonesia", value: "Presidential constitutional republic"},
    {id: "IE", name: "Ireland", value: "Parliamentary constitutional republic"},
    {id: "IL", name: "Israel", value: "Parliamentary republic"},
    {id: "IM", name: "Isle of Man", value: "Constitutional monarchy"},
    {id: "IN", name: "India", value: "Parliamentary constitutional republic"},
    {id: "IO", name: "British Indian Ocean Territory", value: "Constitutional monarchy"},
    {id: "IQ", name: "Iraq", value: "Parliamentary republic"},
    {id: "IR", name: "Iran, Islamic Republic of", value: "Presidential republic"},
    {id: "IS", name: "Iceland", value: "Parliamentary constitutional republic"},
    {id: "IT", name: "Italy", value: "Parliamentary constitutional republic"},
    {id: "JE", name: "Jersey", value: "Semi-presidential republic"},
    {id: "JM", name: "Jamaica", value: "Constitutional monarchy"},
    {id: "JO", name: "Jordan", value: "Constitutional monarchy"},
    {id: "JP", name: "Japan", value: "Constitutional monarchy"},
    {id: "KE", name: "Kenya", value: "Presidential republic"},
    {id: "KG", name: "Kyrgyzstan", value: "Parliamentary republic"},
    {id: "KH", name: "Cambodia", value: "Constitutional monarchy"},
    {id: "KI", name: "Kiribati", value: "Parliamentary republic"},
    {id: "KM", name: "Comoros", value: "Presidential republic"},
    {id: "KN", name: "Saint Kitts and Nevis", value: "Constitutional monarchy"},
    {id: "KP", name: "North Korea", value: "Single-party state"},
    {id: "KR", name: "South Korea", value: "Presidential constitutional republic"},
    {id: "KW", name: "Kuwait", value: "Constitutional monarchy"},
    {id: "KY", name: "Cayman Islands", value: "Constitutional monarchy"},
    {id: "KZ", name: "Kazakhstan", value: "Presidential republic"},
    {id: "LA", name: "Laos", value: "Single-party state"},
    {id: "LB", name: "Lebanon", value: "Parliamentary republic"},
    {id: "LC", name: "Saint Lucia", value: "Constitutional monarchy"},
    {id: "LI", name: "Liechtenstein", value: "Constitutional monarchy"},
    {id: "LK", name: "Sri Lanka", value: "Semi-presidential republic"},
    {id: "LR", name: "Liberia", value: "Presidential constitutional republic"},
    {id: "LS", name: "Lesotho", value: "Parliamentary constitutional monarchy"},
    {id: "LT", name: "Lithuania", value: "Parliamentary republic"},
    {id: "LU", name: "Luxembourg", value: "Constitutional monarchy"},
    {id: "LV", name: "Latvia", value: "Parliamentary republic"},
    {id: "LY", name: "Libya", value: "Parliamentary republic"},
    {id: "MA", name: "Morocco", value: "Constitutional monarchy"},
    {id: "MC", name: "Monaco", value: "Constitutional monarchy"},
    {id: "MD", name: "Moldova", value: "Parliamentary republic"},
    {id: "ME", name: "Montenegro", value: "Parliamentary republic"},
    {id: "MF", name: "Saint Martin", value: "Semi-presidential republic"},
    {id: "MG", name: "Madagascar", value: "Semi-presidential republic"},
    {id: "MH", name: "Marshall Islands", value: "Parliamentary republic"},
    {id: "MK", name: "Macedonia", value: "Parliamentary republic"},
    {id: "ML", name: "Mali", value: "Semi-presidential republic"},
    {id: "MM", name: "Myanmar", value: "Presidential republic"},
    {id: "MN", name: "Mongolia", value: "Parliamentary constitutional republic"},
    {id: "MO", name: "Macao", value: "Single-party state"},
    {id: "MP", name: "Northern Mariana Islands", value: "Presidential constitutional republic"},
    {id: "MQ", name: "Martinique", value: "Semi-presidential republic"},
    {id: "MR", name: "Mauritania", value: "Semi-presidential republic"},
    {id: "MS", name: "Montserrat", value: "Constitutional monarchy"},
    {id: "MT", name: "Malta", value: "Parliamentary republic"},
    {id: "MU", name: "Mauritius", value: "Parliamentary republic"},
    {id: "MV", name: "Maldives", value: "Presidential constitutional republic"},
    {id: "MW", name: "Malawi", value: "Presidential republic"},
    {id: "MX", name: "Mexico", value: "Presidential constitutional republic"},
    {id: "MY", name: "Malaysia", value: "Constitutional monarchy"},
    {id: "MZ", name: "Mozambique", value: "Presidential republic"},
    {id: "NA", name: "Namibia", value: "Presidential constitutional republic"},
    {id: "NC", name: "New Caledonia", value: "Semi-presidential republic"},
    {id: "NE", name: "Niger", value: "Semi-presidential republic"},
    {id: "NF", name: "Norfolk Island", value: "Constitutional monarchy"},
    {id: "NG", name: "Nigeria", value: "Presidential republic"},
    {id: "NI", name: "Nicaragua", value: "Presidential constitutional republic"},
    {id: "NL", name: "Netherlands", value: "Constitutional monarchy"},
    {id: "NO", name: "Norway", value: "Constitutional monarchy"},
    {id: "NP", name: "Nepal", value: "Parliamentary republic"},
    {id: "NR", name: "Nauru", value: "Parliamentary republic"},
    {id: "NU", name: "Niue", value: "Constitutional monarchy"},
    {id: "NZ", name: "New Zealand", value: "Constitutional monarchy"},
    {id: "OM", name: "Oman", value: "Absolute monarchy"},
    {id: "PA", name: "Panama", value: "Presidential constitutional republic"},
    {id: "PE", name: "Peru", value: "Presidential constitutional republic"},
    {id: "PF", name: "Polynesia", value: "Semi-presidential republic"},
    {id: "PG", name: "Papua New Guinea", value: "Constitutional monarchy"},
    {id: "PH", name: "Philippines", value: "Presidential constitutional republic"},
    {id: "PK", name: "Pakistan", value: "Parliamentary republic"},
    {id: "PL", name: "Poland", value: "Parliamentary republic"},
    {id: "PM", name: "Saint Pierre and Miquelon", value: "Overseas collectivity"},
    {id: "PN", name: "Pitcairn", value: "Constitutional monarchy"},
    {id: "PR", name: "Puerto Rico", value: "Presidential constitutional republic"},
    {id: "PS", name: "Palestine", value: "Semi-presidential republic["},
    {id: "PT", name: "Portugal", value: "Semi-presidential republic"},
    {id: "PW", name: "Palau", value: "Presidential constitutional republic"},
    {id: "PY", name: "Paraguay", value: "Presidential constitutional republic"},
    {id: "QA", name: "Qatar", value: "Absolute monarchy"},
    {id: "RE", name: "Reunion", value: "Semi-presidential republic"},
    {id: "RO", name: "Romania", value: "Semi-presidential republic"},
    {id: "RS", name: "Serbia", value: "Parliamentary republic"},
    {id: "RU", name: "Russian Federation", value: "Semi-presidential republic"},
    {id: "RW", name: "Rwanda", value: "Semi-presidential republic"},
    {id: "SA", name: "Saudi Arabia", value: "Absolute monarchy"},
    {id: "SB", name: "Solomon Islands", value: "Constitutional monarchy"},
    {id: "SC", name: "Seychelles", value: "Presidential republic"},
    {id: "SD", name: "Sudan", value: "Presidential republic"},
    {id: "SE", name: "Sweden", value: "Constitutional monarchy"},
    {id: "SG", name: "Singapore", value: "Parliamentary constitutional republic"},
    {id: "SH", name: "Saint Helena, Ascension and Tristan da Cunha", value: "Constitutional monarchy"},
    {id: "SI", name: "Slovenia", value: "Parliamentary constitutional republic"},
    {id: "SJ", name: "Svalbard and Jan Mayen", value: "Constitutional monarchy"},
    {id: "SK", name: "Slovakia", value: "Parliamentary republic"},
    {id: "SL", name: "Sierra Leone", value: "Presidential constitutional republic"},
    {id: "SM", name: "San Marino", value: "Parliamentary constitutional republic"},
    {id: "SN", name: "Senegal", value: "Semi-presidential republic"},
    {id: "SO", name: "Somalia", value: "Parliamentary republic"},
    {id: "SR", name: "Suriname", value: "Parliamentary constitutional republic"},
    {id: "SS", name: "South Sudan", value: "Presidential republic"},
    {id: "ST", name: "Sao Tome and Principe", value: "Semi-presidential republic"},
    {id: "SV", name: "El Salvador", value: "Presidential constitutional republic"},
    {id: "SX", name: "Sint Maarten", value: "Constitutional monarchy"},
    {id: "SY", name: "Syria", value: "Semi-presidential republic"},
    {id: "SZ", name: "Swaziland", value: "Absolute monarchy"},
    {id: "TC", name: "Turks and Caicos Islands", value: "Constitutional monarchy"},
    {id: "TD", name: "Chad", value: "Presidential republic"},
    {id: "TF", name: "French Southern Territories", value: "Semi-presidential republic"},
    {id: "TG", name: "Togo", value: "Presidential republic"},
    {id: "TH", name: "Thailand", value: "Military dictatorship"},
    {id: "TJ", name: "Tajikistan", value: "Semi-presidential republic"},
    {id: "TK", name: "Tokelau", value: "Constitutional monarchy"},
    {id: "TL", name: "Timor-Leste", value: "Semi-presidential republic"},
    {id: "TM", name: "Turkmenistan", value: "Presidential republic"},
    {id: "TN", name: "Tunisia", value: "Parliamentary republic"},
    {id: "TO", name: "Tonga", value: "Constitutional monarchy"},
    {id: "TR", name: "Turkey", value: "Parliamentary constitutional republic"},
    {id: "TT", name: "Trinidad and Tobago", value: "Parliamentary constitutional republic"},
    {id: "TV", name: "Tuvalu", value: "Constitutional monarchy"},
    {id: "TW", name: "Taiwan, Province of China", value: "Single-party state"},
    {id: "TZ", name: "Tanzania, United Republic of", value: "Presidential constitutional republic"},
    {id: "UA", name: "Ukraine", value: "Semi-presidential republic"},
    {id: "UG", name: "Uganda", value: "Semi-presidential republic"},
    {id: "UM", name: "United States Minor Outlying Islands", value: "Presidential constitutional republic"},
    {id: "US", name: "United States of America", value: "Presidential constitutional republic"},
    {id: "UY", name: "Uruguay", value: "Presidential constitutional republic"},
    {id: "UZ", name: "Uzbekistan", value: "Presidential republic"},
    {id: "VA", name: "Vatican City", value: "Absolute monarchy"},
    {id: "VC", name: "Saint Vincent and the Grenadines", value: "Constitutional monarchy"},
    {id: "VE", name: "Venezuela", value: "Presidential constitutional republic"},
    {id: "VG", name: "Virgin Islands, British", value: "Constitutional monarchy"},
    {id: "VI", name: "Virgin Islands, U.S.", value: "Presidential constitutional republic"},
    {id: "VN", name: "Viet Nam", value: "Single-party state"},
    {id: "VU", name: "Vanuatu", value: "Parliamentary republic"},
    {id: "WF", name: "Wallis and Futuna", value: "Semi-presidential republic"},
    {id: "WS", name: "Samoa", value: "Parliamentary republic"},
    {id: "YE", name: "Yemen", value: "Disputed"},
    {id: "YT", name: "Mayotte", value: "Overseas collectivity"},
    {id: "ZA", name: "South Africa", value: "Parliamentary constitutional republic"},
    {id: "ZM", name: "Zambia", value: "Presidential republic"},
    {id: "ZW", name: "Zimbabwe", value: "Presidential republic"}
  ]);

  var country_government_data = dataSet.mapAs();

  var filterConstructor = function(target) {
    return function(val) {
      if (target.toString() == 'Other') {
        return (governmentTypes.indexOf(val) < 0);
      }
      return val == target;
    }
  };

  var stage = anychart.graphics.create('container', '100%', '100%');
  chart = anychart.map();
  chart.geoData('anychart.maps.world_source')

  var seriesCount = governmentTypes.length;
  for (var i = 0; i < seriesCount; i++) {
    var data = country_government_data.filter('value', filterConstructor(governmentTypes[i]));
    var series = chart.choropleth(data);
    series.name(governmentTypes[i]);
  }







  legend = chart.legend()
      .enabled(true)
      .position('top')
      // .align('center')
      .iconTextSpacing(5)
      .itemsLayout('horizontal')
      .itemsSpacing('10')
      .margin(10)
      // .width(300)
      // .height(200)
      // .margin(20, 0)
      // .padding(5, 15)
      .padding(10);

  legendTitle = legend.title()
      .enabled(true)
      .text('Legend')
      .padding(5, 10, 5, 5)
      .rotation(0)
      .orientation('left');

  legend.titleSeparator()
      .orientation(anychart.enums.Orientation.RIGHT);

  legend.background()
      .enabled(true)
      .fill({keys: ['yellow .7', 'green .5'], angle: -90})
      .cornerType('roundinner')
      .corners(20)
      .stroke('4 pink');










  chart.container(stage).draw();
});


function t_flip90() {
  legendTitle.rotation((legendTitle.rotation() || 0) + 90);
}

function t_orientation(value) {
  legendTitle.orientation(value);
}

function t_align(value) {
  legendTitle.align(value);
}

function positionMode(value) {
  legend.positionMode(value);
}

function pos(value) {
  legend.position(value);
}

function ali(value) {
  legend.align(value);
}

function lay(value) {
  legend.itemsLayout(value);
}
