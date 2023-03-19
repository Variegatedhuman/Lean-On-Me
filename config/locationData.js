const hmList = [{
  name: "Team Humanity USA",
  address: "155 N Michigan Ave Suite #714, Chicago, IL 60601",
  type: "hm",
  lat: 41.884800,
  lng: -87.624140,
}, {
  name: "Humanitarian Relief Foundation",
  address: "6450 W College Dr, Palos Heights, IL 60463",
  type: "hm",
  lat: 41.684404,
  lng: -87.791902,
}, {
  name: "Heartland Alliance International",
  address: "208 S LaSalle St #1300, Chicago, IL 60604",
  type: "hm",
  lat: 41.879545,
  lng: -87.631191,
}, {
  name: "RefugeeOne",
  address: "4753 N Broadway Suite 401, Chicago, IL 60640",
  type: "hm",
  lat: 41.969869,
  lng: -87.660804,
}, {
  name: "Greater Chicago Food Depository",
  address: "4100 W Ann Lurie Pl, Chicago, IL 60632",
  type: "hm",
  lat: 41.812929,
  lng: -87.705737,
}, {
  name: "Catholic Charities of the Archdiocese of Chicago",
  address: "721 N LaSalle Dr, Chicago, IL 60654",
  type: "hm",
  lat: 41.894118,
  lng: -87.632196,
}];




const animalList = [{
  name: "Harvester Veterinary Hospital of Burr Ridge",
  address: "807 Village Center Dr, Burr Ridge, IL 60527",
  type: "animal",
  lat: 41.8939,
  lng: -87.6228,
}, {
  name: "West Loop Veterinary Care",
  address: "815 W Randolph St, Chicago, IL 60607",
  type: "animal",
  lat: 41.866741,
  lng: -87.683922,
}, {
  name: "PAWS Chicago",
  address: "1997 N Clybourn Ave, Chicago, IL 60614",
  type: "animal",
  lat: 41.9179,
  lng: -87.6586,
}, {
  name: "The Anti-Cruelty Society",
  address: "510 N LaSalle Dr, Chicago, IL 60654",
  type: "animal",
  lat: 41.8911,
  lng: -87.6329,
}, {
  name: "One Tail at a Time",
  address: "2144 N Wood St, Chicago, IL 60614",
  type: "animal",
  lat: 41.9202,
  lng: -87.6724,
}, {
  name: "Red Door Animal Shelter",
  address: "2410 W Lunt Ave, Chicago, IL 60645",
  type: "animal",
  lat: 42.0085,
  lng: -87.6994,
}, {
  name: "Tree House Humane Society",
  address: "7225 N Western Ave, Chicago, IL 60645",
  type: "animal",
  lat: 42.0131,
  lng: -87.6909,
}, {
  name: "Chicago Animal Care and Control",
  address: "2741 S Western Ave, Chicago, IL 60608",
  type: "animal",
  lat: 41.8423,
  lng: -87.6868,
}, {
  name: "Animal Welfare League",
  address: "6224 S Wabash Ave, Chicago, IL 60637",
  type: "animal",
  lat: 41.7803,
  lng: -87.6245,
}
];

const hospitalList = [{
  name: "Northwestern Memorial Hospital",
  address: "251 E Huron St, Chicago, IL 60611",
  type: "hospital",
  lat: 41.8939,
  lng: -87.6228,
}, {
  name: "John H. Stroger, Jr. Hospital of Cook",
  address: "1969 W Ogden Ave, Chicago, IL 60612",
  type: "hospital",
  lat: 41.866741,
  lng: -87.683922,
}, {
  name: "University of Illinois Hospital",
  address: "1740 W Taylor St, Chicago, IL 60612",
  type: "hospital",
  lat: 41.869317,
  lng: -87.671671
},
{
  name: "Mercy Hospital & Medical Center",
  address: "2525 S Michigan Ave, Chicago, IL 60616",
  type: "hospital",
  lat: 41.846775,
  lng: -87.622546
},
{
  name: "Ann & Robert H. Lurie Children's Hospital",
  address: "225 E Chicago Ave, Chicago, IL 60611",
  type: "hospital",
  lat: 41.896614,
  lng: -87.621903
},
{
  name: "Swedish Hospital",
  address: "5140 N California Ave, Chicago, IL 60625",
  type: "hospital",
  lat: 41.974333,
  lng: -87.699940
},
{
  name: "Shirley Ryan AbilityLab",
  address: "355 E Erie St, Chicago, IL 60611",
  type: "hospital",
  lat: 41.894849,
  lng: -87.619381
},
{
  name: "Advocate Illinois Masonic Medical Center",
  address: "836 W Wellington Ave, Chicago, IL 60657",
  type: "hospital",
  lat: 41.936982,
  lng: -87.651116
},];

const educationList = [{
  name: "Fusion Academy Lincoln Park",
  address: "1440 N Dayton St Suite 104, Chicago, IL 60642",
  type: "education",
  lat: 41.907619,
  lng: -87.649544,
}, {
  name: "University of Illinois at Chicago",
  address: "1200 W Harrison St, Chicago, IL 60607",
  type: "education",
  lat: 41.874916,
  lng: -87.649794,
},
{
  name: "DePaul University",
  address: "1 E Jackson Blvd, Chicago, IL 60604",
  type: "education",
  lat: 41.878566,
  lng: -87.627131,
},
{
  name: "Northwestern University",
  address: "633 Clark St, Evanston, IL 60208",
  type: "education",
  lat: 42.056459,
  lng: -87.675267,
},
{
  name: "Loyola University Chicago",
  address: "1032 W Sheridan Rd, Chicago, IL 60660",
  type: "education",
  lat: 41.999437,
  lng: -87.658576,
},
{
  name: "Illinois Institute of Technology",
  address: "3300 S Federal St, Chicago, IL 60616",
  type: "education",
  lat: 41.835773,
  lng: -87.629030,
},
{
  name: "University of Chicago",
  address: "5801 S Ellis Ave, Chicago, IL 60637",
  type: "education",
  lat: 41.789485,
  lng: -87.597840,
},
{
  name: "Columbia College Chicago",
  address: "600 S Michigan Ave, Chicago, IL 60605",
  type: "education",
  lat: 41.875398,
  lng: -87.624195,
},
{
  name: "Chicago State University",
  address: "9501 S King Dr, Chicago, IL 60628",
  type: "education",
  lat: 41.718850,
  lng: -87.610935,
}]

const environmentalList = [{
  name: "Friends of the Parks",
  address: "17 N State St #1450, Chicago, IL 60602",
  type: "environmental",
  lat: 41.882220,
  lng: -87.627870,
},{
  name: "The Nature Conservancy",
  address: "8 S Michigan Ave #900, Chicago, IL 60603",
  type: "environmental",
  lat: 41.881105,
  lng: -87.624300,
},{
  name: "Chicago Botanic Garden",
  address: "1000 Lake Cook Rd, Glencoe, IL 60022",
  type: "environmental",
  lat: 42.148800,
  lng: -87.791700,
},{
  name: "The Field Museum",
  address: "1400 S Lake Shore Dr, Chicago, IL 60605",
  type: "environmental",
  lat: 41.866270,
  lng: -87.617320,
},{
  name: "Chicago Zoological Society",
  address: "3300 Golf Rd, Brookfield, IL 60513",
  type: "environmental",
  lat: 41.840050,
  lng: -87.836990,
},{
  name: "Chicago Wilderness",
  address: "8 S Michigan Ave #900, Chicago, IL 60603",
  type: "environmental",
  lat: 41.881105,
  lng: -87.624300,
},{
  name: "Openlands",
  address: "25 E Washington St #1650, Chicago, IL 60602",
  type: "environmental",
  lat: 41.883600,
  lng: -87.627220,
},{
  name: "Audubon Great Lakes",
  address: "17 N State St #1650, Chicago, IL 60602",
  type: "environmental",
  lat: 41.882220,
  lng: -87.627870,
}];
const elderlyCareList = [{
  name: "Oak Street Health",
  address: "4323 W Madison St, Chicago, IL 60624",
  type: "elderly care",
  lat: 41.880820,
  lng: -87.734860,
},{
  name: "Lutheran Life Communities",
  address: "255 E Butterfield Rd, Elmhurst, IL 60126",
  type: "elderly care",
  lat: 41.839580,
  lng: -87.964130,
},{
  name: "Artis Senior Living of Lakeview",
  address: "3535 N Ashland Ave, Chicago, IL 60657",
  type: "elderly care",
  lat: 41.945640,
  lng: -87.668010,
},{
  name: "The Admiral at the Lake",
  address: "929 W Foster Ave, Chicago, IL 60640",
  type: "elderly care",
  lat: 41.976740,
  lng: -87.654680,
},{
  name: "Belmont Village Senior Living",
  address: "700 W Fullerton Ave, Chicago, IL 60614",
  type: "elderly care",
  lat: 41.925710,
  lng: -87.645690,
},
{
  name: "Brookdale Lake View",
  address: "3121 N Sheridan Rd, Chicago, IL 60657",
  type: "elderly care",
  lat: 41.940130,
  lng: -87.654830,
},{
  name: "Norwood Crossing",
  address: "6016 N Nina Ave, Chicago, IL 60631",
  type: "elderly care",
  lat: 41.990360,
  lng: -87.798460,
}];
module.exports = { hmList, animalList, educationList, hospitalList, environmentalList, elderlyCareList };