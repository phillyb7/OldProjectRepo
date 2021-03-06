//Code for defining Property Objects
var Properties = [{Name:"Mediterranean Ave.",
                   Type:"Normal",
                   Position:2,
                   Price:60,
                   Colour:"brown",
                   Rent:2,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Baltic Ave.",
                   Type:"Normal",
                   Position:4,
                   Price:60,
                   Colour:"brown",
                   Rent:4,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Oriental Ave.",
                   Type:"Normal",
                   Position:6,
                   Price:100,
                   Colour:"light-blue",
                   Rent:6,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Vermont Ave.",
                   Type:"Normal",
                   Position:9,
                   Price:100,
                   Colour:"light-blue",
                   Rent:6,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Connecticut Ave.",
                   Type:"Normal",
                   Position:10,
                   Price:120,
                   Colour:"light-blue",
                   Rent:8,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"St.Charles Place",
                   Type:"Normal",
                   Position:12,
                   Price:140,
                   Colour:"pink",
                   Rent:10,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"States Ave.",
                   Type:"Normal",
                   Position:14,
                   Price:140,
                   Colour:"pink",
                   Rent:10,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Virgina Ave.",
                   Type:"Normal",
                   Position:14,
                   Price:160,
                   Colour:"pink",
                   Rent:12,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"St.James Place",
                   Type:"Normal",
                   Position:17,
                   Price:180,
                   Colour:"orange",
                   Rent:14,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Tennessee Ave.",
                   Type:"Normal",
                   Position:19,
                   Price:180,
                   Colour:"orange",
                   Rent:14,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"New York Ave.",
                   Type:"Normal",
                   Position:20,
                   Price:200,
                   Colour:"orange",
                   Rent:16,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Kentucky Ave.",
                   Type:"Normal",
                   Position:22,
                   Price:220,
                   Colour:"red",
                   Rent:18,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Indiana Ave.",
                   Type:"Normal",
                   Position:24,
                   Price:220,
                   Colour:"red",
                   Rent:18,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Illinois Ave.",
                   Type:"Normal",
                   Position:25,
                   Price:240,
                   Colour:"red",
                   Rent:20,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Atlantic Ave.",
                   Type:"Normal",
                   Position:27,
                   Price:260,
                   Colour:"yellow",
                   Rent:22,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Ventor Ave.",
                   Type:"Normal",
                   Position:28,
                   Price:260,
                   Colour:"yellow",
                   Rent:22,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Marvin Gardens",
                   Type:"Normal",
                   Position:30,
                   Price:280,
                   Colour:"yellow",
                   Rent:24,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Pacific Ave.",
                   Type:"Normal",
                   Position:32,
                   Price:300,
                   Colour:"green",
                   Rent:26,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"North Carolina Ave.",
                   Type:"Normal",
                   Position:33,
                   Price:300,
                   Colour:"green",
                   Rent:26,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Pennsylvania Ave.",
                   Type:"Normal",
                   Position:35,
                   Price:320,
                   Colour:"green",
                   Rent:28,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Park Place",
                   Type:"Normal",
                   Position:38,
                   Price:350,
                   Colour:"dark-blue",
                   Rent:35,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Boardwalk",
                   Type:"Normal",
                   Position:40,
                   Price:400,
                   Colour:"dark-blue",
                   Rent:50,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Electric Company",
                   Type:"Utility",
                   Position:13,
                   Price:150,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Waterwork",
                   Type:"Utility",
                   Position:29,
                   Price:150,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Reading Railroad",
                   Type:"Railroad",
                   Position:6,
                   Price:200,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Pennsylvania Railroad",
                   Type:"Railroad",
                   Position:16,
                   Price:200,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"B&O Railroad",
                   Type:"Railroad",
                   Position:26,
                   Price:200,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                  {Name:"Short Line Railroad",
                   Type:"Railroad",
                   Position:36,
                   Price:200,
                   Events: ["buy", "trade"],
                   Rent_Due: false,
                   Owner:null},

                   {Name:"Go",
                   Type:"Other",
                   Position:1,
                   Events: ["collect"],
                   First_Move : true;
                   },

                   {Name:"Income Tax",
                   Type:"Other",
                   Position:5,
                   Events: ["fine"],
                   },

                   {Name:"Luxury Tax",
                   Type:"Other",
                   Position:39,
                   Events: ["fine"],
                   },

                   {Name:"Community Chest1",
                   Type:"Community Chest",
                   Position:3,
                   Events: ["drawCard"],
                   },

                   {Name:"Community Chest2",
                   Type:"Community Chest",
                   Position:18,
                   Events: ["drawCard"],
                   },

                   {Name:"Community Chest3",
                   Type:"Community Chest",
                   Position:34,
                   Events: ["drawCard"],
                   },

                   {Name:"Chance1",
                   Type:"Chance",
                   Position:8,
                   Events: ["drawCard"],
                   },

                   {Name:"Chance2",
                   Type:"Chance",
                   Position:23,
                   Events: ["drawCard"],
                   },

                   {Name:"Chance3",
                   Type:"Chance",
                   Position:37,
                   Events: ["drawCard"],
                   },

                  {Name:"Go to Jail",
                   Type:"Jail",
                   Position:31,
                   Events: ["jail"],
                   },

                   //two tiles in one
                   {Name:"Just Visiting/Jail",
                   Type:"Jail",
                   Position:11,
                   Events: ["jail", "visit"],
                   }

                 ]

function buy(){
  //This function checks if user has enough capital and if the property that
  // the user has landed on is available for purchase
  if (Properties.Owner != null && userObj.capital >= Properties.Price){
    var colourtype = Properties.Colour;
    userObj.assets = Properties.Name; // adding property to user assets
    userObj.capital = userObj.capital = Properties.Price; // deducting user capital
    usrObject.colour[colourtype] += 1; // **** Dont know if you can do this // incrementing the colour count
    Properties.Owner = userObj.player_id;
    Properties.Rent_Due = true; //  setting rent due to true for future players

  }
  else if(Propertier.Rent_Due == true;){
    var rent_due = Properties.Rent;
    var player = Properties.Owner;
    userObj.capital = userObj.capital - Properties.Rent; // paying player rent
    player.captial = player.capital + rent_due;
    
   
  }
}
  
  function collectGo(){ // not complete
    if(Properties.First_Move != true // need a way of detecting user has passed go){
       userObj.capital += 200;
  }
