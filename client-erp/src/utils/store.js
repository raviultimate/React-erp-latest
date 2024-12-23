import { RiDashboardFill } from "react-icons/ri";
import { MdManageAccounts, MdInventory2 } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { FaShop, FaShopLock } from "react-icons/fa6";

export const sideMenuItems = [
  {
    id: 0,
    title: "Dashboard",
    submenu: false,
    page: "/",
    icon: <RiDashboardFill />,
  },
  {
    id: 1,
    title: "Accounts",
    page: "accounts",
    submenu: false,
    icon: <MdManageAccounts />,
  },
  {
    id: 2,
    title: "Reports",
    submenu: true,
    icon: <BiSolidReport />,
    submenuItems: [
      { id: 0, page: "report1", title: "report", icon: <BiSolidReport /> },
      { id: 1, page: "report2", title: "report2", icon: <BiSolidReport /> },
    ],
  },
  {
    id: 3,
    title: "Create",
    submenu: true,
    icon: <IoIosCreate />,
    submenuItems: [
      { id: 0, page: "createbill", title: "Billing", icon: <IoIosCreate /> },
      { id: 1, page: "createAccount", title: "Account", icon: <IoIosCreate /> },
    ],
  },
  {
    id: 4,
    title: "Inventory",
    submenu: true,
    icon: <MdInventory2 />,
    page: "inventory",
    submenuItems: [
      { id: 0, page: "godown", title: "Godown", icon: <FaShopLock /> },
      { id: 1, page: "shop", title: "Shop", icon: <FaShop /> },
    ],
  },
];

export const tableItems = [
  {
    account_id: 42838,
    account_name: "Terri",
    account_type: "customer",
    amount: "₹9,992.00",
    pending_balance: "₹259,419.00",
    email: "twhitelock0@mac.com",
    phone_number: "7167639949",
    address: "Buffalo",
  },
  {
    account_id: 46703,
    account_name: "Kane",
    account_type: "expense",
    amount: "₹82,047.00",
    pending_balance: "₹0,762.00",
    email: "ktows1@wordpress.org",
    phone_number: "6643706289",
    address: "Sherpur",
  },
  {
    account_id: 74988,
    account_name: "Pete",
    account_type: "customer",
    amount: "₹75,951.00",
    pending_balance: "₹62,187.00",
    email: "pneilly2@over-blog.com",
    phone_number: "7218663779",
    address: "Huanfeng",
  },
  {
    account_id: 43281,
    account_name: "Babara",
    account_type: "customer",
    amount: "₹7,229.00",
    pending_balance: "₹8,052.00",
    email: "bstile3@princeton.edu",
    phone_number: "2354048012",
    address: "Bintuni",
  },
  {
    account_id: 27039,
    account_name: "Ruy",
    account_type: "customer",
    amount: "₹89,866.00",
    pending_balance: "₹265,820.00",
    email: "rparbrook4@archive.org",
    phone_number: "9989120404",
    address: "Badajoz",
  },
  {
    account_id: 30021,
    account_name: "Pepita",
    account_type: "customer",
    amount: "₹04,833.00",
    pending_balance: "₹241,933.00",
    email: "pkohring5@amazon.co.uk",
    phone_number: "7946433913",
    address: "Lokosovo",
  },
  {
    account_id: 31192,
    account_name: "Mallissa",
    account_type: "provider",
    amount: "₹587,415.00",
    pending_balance: "₹421,230.00",
    email: "mkivlin6@devhub.com",
    phone_number: "8455184435",
    address: "Ōnojō",
  },
  {
    account_id: 84499,
    account_name: "Alair",
    account_type: "customer",
    amount: "₹219,097.00",
    pending_balance: "₹77,100.00",
    email: "acuppitt7@shinystat.com",
    phone_number: "9009330905",
    address: "Aganan",
  },
  {
    account_id: 20032,
    account_name: "Bertha",
    account_type: "customer",
    amount: "₹10,174.00",
    pending_balance: "₹2,132.00",
    email: "bdiloway8@tripadvisor.com",
    phone_number: "4192196480",
    address: "Lazaro Cardenas",
  },
  {
    account_id: 95461,
    account_name: "Marijn",
    account_type: "customer",
    amount: "₹821,144.00",
    pending_balance: "₹2,277.00",
    email: "madame9@digg.com",
    phone_number: "9502272890",
    address: "Requena",
  },
  {
    account_id: 38457,
    account_name: "Rollin",
    account_type: "provider",
    amount: "₹32,887.00",
    pending_balance: "₹587,096.00",
    email: "rclayfielda@who.int",
    phone_number: "4805501049",
    address: "Jinqiao",
  },
  {
    account_id: 10516,
    account_name: "Sela",
    account_type: "customer",
    amount: "₹72,160.00",
    pending_balance: "₹35,890.00",
    email: "smaccagueb@answers.com",
    phone_number: "8096708279",
    address: "Cijoho",
  },
  {
    account_id: 51171,
    account_name: "Guillaume",
    account_type: "provider",
    amount: "₹402,713.00",
    pending_balance: "₹855,073.00",
    email: "ggundreyc@sphinn.com",
    phone_number: "7915328217",
    address: "Cigaluh",
  },
  {
    account_id: 76026,
    account_name: "Bendix",
    account_type: "provider",
    amount: "₹6,947.00",
    pending_balance: "₹01,545.00",
    email: "byglesiad@gov.uk",
    phone_number: "4714123951",
    address: "Francos",
  },
  {
    account_id: 55206,
    account_name: "Galvin",
    account_type: "customer",
    amount: "₹40,407.00",
    pending_balance: "₹1,468.00",
    email: "ghoutene@bigcartel.com",
    phone_number: "2431447315",
    address: "Jicomé",
  },
  {
    account_id: 61933,
    account_name: "Cash",
    account_type: "cash",
    amount: "₹74,710.00",
    pending_balance: "₹11,502.00",
    email: "chemsteadf@indiegogo.com",
    phone_number: "9458665583",
    address: "Taroudant",
  },
  {
    account_id: 22404,
    account_name: "Roseanne",
    account_type: "customer",
    amount: "₹0,275.00",
    pending_balance: "₹20,156.00",
    email: "rcowoppeg@archive.org",
    phone_number: "9781974243",
    address: "Pasaco",
  },
  {
    account_id: 77177,
    account_name: "Niccolo",
    account_type: "customer",
    amount: "₹51,802.00",
    pending_balance: "₹23,777.00",
    email: "ngeorgeoth@irs.gov",
    phone_number: "5569456156",
    address: "Stenungsund",
  },
  {
    account_id: 18906,
    account_name: "Lorain",
    account_type: "customer",
    amount: "₹83,502.00",
    pending_balance: "₹9,196.00",
    email: "lmullani@hatena.ne.jp",
    phone_number: "2626861673",
    address: "Madrid",
  },
  {
    account_id: 40827,
    account_name: "Lorant",
    account_type: "customer",
    amount: "₹7,678.00",
    pending_balance: "₹462,560.00",
    email: "lgyllej@fda.gov",
    phone_number: "2412451685",
    address: "Longnawang",
  },
  {
    account_id: 80631,
    account_name: "Etta",
    account_type: "customer",
    amount: "₹87,855.00",
    pending_balance: "₹81,113.00",
    email: "edellek@netscape.com",
    phone_number: "4163353567",
    address: "Sarvaš",
  },
  {
    account_id: 89077,
    account_name: "Pierce",
    account_type: "customer",
    amount: "₹24,034.00",
    pending_balance: "₹4,231.00",
    email: "prunseyl@privacy.gov.au",
    phone_number: "8626610435",
    address: "New Yekepa",
  },
  {
    account_id: 82961,
    account_name: "Caitlin",
    account_type: "customer",
    amount: "₹06,091.00",
    pending_balance: "₹6,983.00",
    email: "ccaronm@blog.com",
    phone_number: "9698189152",
    address: "Duque de Caxias",
  },
  {
    account_id: 91672,
    account_name: "Doreen",
    account_type: "customer",
    amount: "₹80,595.00",
    pending_balance: "₹955,588.00",
    email: "dgerwoodn@toplist.cz",
    phone_number: "1491122956",
    address: "Dalarik",
  },
  {
    account_id: 82719,
    account_name: "Skipp",
    account_type: "provider",
    amount: "₹45,997.00",
    pending_balance: "₹384,651.00",
    email: "sfairlawo@latimes.com",
    phone_number: "9228063618",
    address: "Jampang Tengah",
  },
  {
    account_id: 77201,
    account_name: "Barr",
    account_type: "provider",
    amount: "₹6,762.00",
    pending_balance: "₹8,848.00",
    email: "bchurchingp@tinyurl.com",
    phone_number: "7292914753",
    address: "Samut Songkhram",
  },
  {
    account_id: 71354,
    account_name: "Abbot",
    account_type: "provider",
    amount: "₹67,762.00",
    pending_balance: "₹057,212.00",
    email: "agreensteadq@360.cn",
    phone_number: "2311424383",
    address: "Cikupa",
  },
  {
    account_id: 35366,
    account_name: "Haze",
    account_type: "customer",
    amount: "₹18,034.00",
    pending_balance: "₹839,825.00",
    email: "hcroisierr@webs.com",
    phone_number: "6709000909",
    address: "Saint Helier",
  },
  {
    account_id: 81588,
    account_name: "Daveta",
    account_type: "customer",
    amount: "₹18,996.00",
    pending_balance: "₹888,341.00",
    email: "dbernadots@cdc.gov",
    phone_number: "5048320934",
    address: "Sishilichengzi",
  },
  {
    account_id: 94621,
    account_name: "Felice",
    account_type: "customer",
    amount: "₹7,485.00",
    pending_balance: "₹470,054.00",
    email: "fpattyt@yellowpages.com",
    phone_number: "9933259938",
    address: "Sumberrojokrajan",
  },
  {
    account_id: 94199,
    account_name: "Dyan",
    account_type: "customer",
    amount: "₹631,348.00",
    pending_balance: "₹70,924.00",
    email: "dlambotu@washington.edu",
    phone_number: "7012779099",
    address: "Miramar",
  },
  {
    account_id: 42642,
    account_name: "Poul",
    account_type: "provider",
    amount: "₹060,438.00",
    pending_balance: "₹62,165.00",
    email: "phewv@apple.com",
    phone_number: "4314281903",
    address: "Vidin",
  },
  {
    account_id: 38356,
    account_name: "Vasily",
    account_type: "customer",
    amount: "₹8,050.00",
    pending_balance: "₹6,010.00",
    email: "vcodemanw@washingtonpost.com",
    phone_number: "9938933435",
    address: "Cibuah",
  },
  {
    account_id: 67278,
    account_name: "Eugenio",
    account_type: "customer",
    amount: "₹00,501.00",
    pending_balance: "₹714,885.00",
    email: "edavauxx@phpbb.com",
    phone_number: "2438751894",
    address: "Samphanthawong",
  },
  {
    account_id: 70060,
    account_name: "Avivah",
    account_type: "customer",
    amount: "₹405,124.00",
    pending_balance: "₹2,599.00",
    email: "ahalligany@merriam-webster.com",
    phone_number: "1278448733",
    address: "Kizema",
  },
  {
    account_id: 87848,
    account_name: "Gerardo",
    account_type: "customer",
    amount: "₹8,592.00",
    pending_balance: "₹00,409.00",
    email: "gchristalz@uol.com.br",
    phone_number: "6195553399",
    address: "Zhongguanyi",
  },
  {
    account_id: 79787,
    account_name: "Patience",
    account_type: "provider",
    amount: "₹2,323.00",
    pending_balance: "₹42,873.00",
    email: "pmico10@sourceforge.net",
    phone_number: "1655347502",
    address: "Chicacao",
  },
  {
    account_id: 81118,
    account_name: "Yolanthe",
    account_type: "customer",
    amount: "₹85,693.00",
    pending_balance: "₹5,210.00",
    email: "ycragell11@instagram.com",
    phone_number: "8288588445",
    address: "Sekartaji",
  },
  {
    account_id: 73471,
    account_name: "Marina",
    account_type: "customer",
    amount: "₹5,326.00",
    pending_balance: "₹14,178.00",
    email: "mcarah12@si.edu",
    phone_number: "5284048186",
    address: "Sindanghayu",
  },
  {
    account_id: 45896,
    account_name: "Marj",
    account_type: "customer",
    amount: "₹010,206.00",
    pending_balance: "₹0,222.00",
    email: "mscoffham13@fema.gov",
    phone_number: "5445768454",
    address: "Solnechnyy",
  },
  {
    account_id: 44872,
    account_name: "Paulie",
    account_type: "customer",
    amount: "₹415,380.00",
    pending_balance: "₹861,730.00",
    email: "ptempest14@techcrunch.com",
    phone_number: "1117279597",
    address: "Malikisi",
  },
  {
    account_id: 84278,
    account_name: "Roxanne",
    account_type: "customer",
    amount: "₹091,297.00",
    pending_balance: "₹3,180.00",
    email: "rpusill15@hostgator.com",
    phone_number: "1733047020",
    address: "Luboń",
  },
  {
    account_id: 98393,
    account_name: "Torre",
    account_type: "customer",
    amount: "₹28,916.00",
    pending_balance: "₹21,155.00",
    email: "ttrye16@storify.com",
    phone_number: "8862834945",
    address: "Gagarin",
  },
  {
    account_id: 43058,
    account_name: "Berenice",
    account_type: "customer",
    amount: "₹39,007.00",
    pending_balance: "₹732,050.00",
    email: "bcurton17@shareasale.com",
    phone_number: "5898671707",
    address: "Kosino",
  },
  {
    account_id: 62028,
    account_name: "Morry",
    account_type: "customer",
    amount: "₹800,561.00",
    pending_balance: "₹68,590.00",
    email: "mronald18@weibo.com",
    phone_number: "6852848266",
    address: "Holoriang",
  },
  {
    account_id: 77503,
    account_name: "Jeffry",
    account_type: "customer",
    amount: "₹014,674.00",
    pending_balance: "₹4,983.00",
    email: "jbonsall19@census.gov",
    phone_number: "7205801107",
    address: "Rudy",
  },
  {
    account_id: 50075,
    account_name: "Langsdon",
    account_type: "customer",
    amount: "₹80,129.00",
    pending_balance: "₹09,708.00",
    email: "lpennini1a@blogspot.com",
    phone_number: "1367855055",
    address: "Thành phố Bạc Liêu",
  },
  {
    account_id: 33953,
    account_name: "Natale",
    account_type: "customer",
    amount: "₹366,747.00",
    pending_balance: "₹919,814.00",
    email: "ndunmore1b@blogger.com",
    phone_number: "5915020907",
    address: "5 de Mayo",
  },
  {
    account_id: 44525,
    account_name: "Jenelle",
    account_type: "customer",
    amount: "₹0,003.00",
    pending_balance: "₹1,681.00",
    email: "jmcgoogan1c@mac.com",
    phone_number: "1179232957",
    address: "Toupopu",
  },
  {
    account_id: 20666,
    account_name: "Arline",
    account_type: "customer",
    amount: "₹074,659.00",
    pending_balance: "₹817,569.00",
    email: "agino1d@hatena.ne.jp",
    phone_number: "6988205532",
    address: "Góra",
  },
];

export const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const billInitialData = [
  {
    slno: 0,
    item_name: "",
    qty: 0,
    rate: 0,
    amount: 0,
  },
];

export const itemData = [
  {
    item_id: 1,
    item_name: "Cheese - Pont Couvert",
    location: "shop",
    rate: 411442,
    total_price: 59257213,
    qty: 578,
    total_qty_bought: 509,
  },
  {
    item_id: 2,
    item_name: "Lettuce - Iceberg",
    location: "shop",
    rate: 522709,
    total_price: 58067898,
    qty: 928,
    total_qty_bought: 944,
  },
  {
    item_id: 3,
    item_name: "Sugar - Brown",
    location: "shop",
    rate: 711158,
    total_price: 34338491,
    qty: 669,
    total_qty_bought: 457,
  },
  {
    item_id: 4,
    item_name: "Bar Energy Chocchip",
    location: "shop",
    rate: 572977,
    total_price: 11028840,
    qty: 789,
    total_qty_bought: 870,
  },
  {
    item_id: 5,
    item_name: "Table Cloth 120 Round White",
    location: "godown",
    rate: 792295,
    total_price: 31779638,
    qty: 266,
    total_qty_bought: 946,
  },
  {
    item_id: 6,
    item_name: "Soup V8 Roasted Red Pepper",
    location: "godown",
    rate: 412263,
    total_price: 88372557,
    qty: 403,
    total_qty_bought: 949,
  },
  {
    item_id: 7,
    item_name: "Plate Pie Foil",
    location: "godown",
    rate: 428284,
    total_price: 25301115,
    qty: 526,
    total_qty_bought: 85,
  },
  {
    item_id: 8,
    item_name: "Cheese - Cheddar With Claret",
    location: "godown",
    rate: 385544,
    total_price: 68759068,
    qty: 2,
    total_qty_bought: 865,
  },
  {
    item_id: 9,
    item_name: "Veal - Provimi Inside",
    location: "godown",
    rate: 587531,
    total_price: 83503390,
    qty: 405,
    total_qty_bought: 124,
  },
  {
    item_id: 10,
    item_name: "Table Cloth 120 Round White",
    location: "shop",
    rate: 377924,
    total_price: 52298604,
    qty: 353,
    total_qty_bought: 189,
  },
  {
    item_id: 11,
    item_name: "Wine - Wyndham Estate Bin 777",
    location: "shop",
    rate: 594579,
    total_price: 155211,
    qty: 757,
    total_qty_bought: 799,
  },
  {
    item_id: 12,
    item_name: "Ecolab - Medallion",
    location: "godown",
    rate: 716482,
    total_price: 65826879,
    qty: 827,
    total_qty_bought: 49,
  },
  {
    item_id: 13,
    item_name: "Bread - Ciabatta Buns",
    location: "godown",
    rate: 240980,
    total_price: 78369477,
    qty: 781,
    total_qty_bought: 522,
  },
  {
    item_id: 14,
    item_name: "Garbage Bags - Black",
    location: "shop",
    rate: 579587,
    total_price: 48869530,
    qty: 637,
    total_qty_bought: 506,
  },
  {
    item_id: 15,
    item_name: "Cheese - Mozzarella, Shredded",
    location: "shop",
    rate: 707445,
    total_price: 39957462,
    qty: 191,
    total_qty_bought: 421,
  },
  {
    item_id: 16,
    item_name: "Sauce - Sesame Thai Dressing",
    location: "godown",
    rate: 49244,
    total_price: 86840887,
    qty: 745,
    total_qty_bought: 903,
  },
  {
    item_id: 17,
    item_name: "Pepper - Green Thai",
    location: "godown",
    rate: 809166,
    total_price: 82849165,
    qty: 757,
    total_qty_bought: 779,
  },
  {
    item_id: 18,
    item_name: "Beer - Alexander Kieths, Pale Ale",
    location: "shop",
    rate: 405194,
    total_price: 80863399,
    qty: 230,
    total_qty_bought: 310,
  },
  {
    item_id: 19,
    item_name: "Cheese - Sheep Milk",
    location: "shop",
    rate: 173466,
    total_price: 51644286,
    qty: 613,
    total_qty_bought: 32,
  },
  {
    item_id: 20,
    item_name: "Vermouth - White, Cinzano",
    location: "shop",
    rate: 448282,
    total_price: 19169870,
    qty: 368,
    total_qty_bought: 413,
  },
  {
    item_id: 21,
    item_name: "Pepper - Red Thai",
    location: "godown",
    rate: 616633,
    total_price: 41112890,
    qty: 843,
    total_qty_bought: 995,
  },
  {
    item_id: 22,
    item_name: "Broom Handle",
    location: "shop",
    rate: 639762,
    total_price: 90214969,
    qty: 197,
    total_qty_bought: 381,
  },
  {
    item_id: 23,
    item_name: "Sugar - Brown, Individual",
    location: "godown",
    rate: 967047,
    total_price: 37037434,
    qty: 148,
    total_qty_bought: 623,
  },
  {
    item_id: 24,
    item_name: "Bar Bran Honey Nut",
    location: "shop",
    rate: 84668,
    total_price: 38845867,
    qty: 759,
    total_qty_bought: 360,
  },
  {
    item_id: 25,
    item_name: "Vodka - Hot, Lnferno",
    location: "godown",
    rate: 242772,
    total_price: 65816568,
    qty: 460,
    total_qty_bought: 473,
  },
  {
    item_id: 26,
    item_name: "Mushroom - Crimini",
    location: "godown",
    rate: 121699,
    total_price: 71334666,
    qty: 292,
    total_qty_bought: 97,
  },
  {
    item_id: 27,
    item_name: "Tart Shells - Savory, 4",
    location: "godown",
    rate: 160742,
    total_price: 21858128,
    qty: 98,
    total_qty_bought: 526,
  },
  {
    item_id: 28,
    item_name: "Bread - Multigrain, Loaf",
    location: "godown",
    rate: 542422,
    total_price: 89301681,
    qty: 659,
    total_qty_bought: 217,
  },
  {
    item_id: 29,
    item_name: "Table Cloth 91x91 Colour",
    location: "godown",
    rate: 929696,
    total_price: 53925378,
    qty: 381,
    total_qty_bought: 993,
  },
  {
    item_id: 30,
    item_name: "Hinge W Undercut",
    location: "godown",
    rate: 937603,
    total_price: 6237940,
    qty: 113,
    total_qty_bought: 894,
  },
  {
    item_id: 31,
    item_name: "Nut - Peanut, Roasted",
    location: "godown",
    rate: 988650,
    total_price: 82213845,
    qty: 358,
    total_qty_bought: 657,
  },
  {
    item_id: 32,
    item_name: "Wine - Muscadet Sur Lie",
    location: "shop",
    rate: 289183,
    total_price: 57710638,
    qty: 337,
    total_qty_bought: 554,
  },
  {
    item_id: 33,
    item_name: "Boogies",
    location: "godown",
    rate: 254316,
    total_price: 70164675,
    qty: 206,
    total_qty_bought: 815,
  },
  {
    item_id: 34,
    item_name: "Tuna - Salad Premix",
    location: "shop",
    rate: 105243,
    total_price: 32976490,
    qty: 852,
    total_qty_bought: 123,
  },
  {
    item_id: 35,
    item_name: "Sprouts - Corn",
    location: "godown",
    rate: 179881,
    total_price: 16297596,
    qty: 486,
    total_qty_bought: 961,
  },
  {
    item_id: 36,
    item_name: "Cornflakes",
    location: "shop",
    rate: 566507,
    total_price: 50840229,
    qty: 5,
    total_qty_bought: 686,
  },
  {
    item_id: 37,
    item_name: "Filter - Coffee",
    location: "godown",
    rate: 176862,
    total_price: 54898180,
    qty: 638,
    total_qty_bought: 846,
  },
  {
    item_id: 38,
    item_name: "Foie Gras",
    location: "godown",
    rate: 83714,
    total_price: 36008326,
    qty: 633,
    total_qty_bought: 540,
  },
  {
    item_id: 39,
    item_name: "Tumeric",
    location: "godown",
    rate: 413553,
    total_price: 63937291,
    qty: 79,
    total_qty_bought: 998,
  },
  {
    item_id: 40,
    item_name: "Chocolate - Dark",
    location: "shop",
    rate: 324319,
    total_price: 62560842,
    qty: 969,
    total_qty_bought: 380,
  },
  {
    item_id: 41,
    item_name: "Chickhen - Chicken Phyllo",
    location: "shop",
    rate: 241451,
    total_price: 63566869,
    qty: 581,
    total_qty_bought: 150,
  },
  {
    item_id: 42,
    item_name: "Lychee - Canned",
    location: "godown",
    rate: 277362,
    total_price: 20174678,
    qty: 980,
    total_qty_bought: 322,
  },
  {
    item_id: 43,
    item_name: "Soup Campbells Beef With Veg",
    location: "shop",
    rate: 522419,
    total_price: 42640626,
    qty: 125,
    total_qty_bought: 906,
  },
  {
    item_id: 44,
    item_name: "Venison - Racks Frenched",
    location: "shop",
    rate: 468849,
    total_price: 45615799,
    qty: 258,
    total_qty_bought: 359,
  },
  {
    item_id: 45,
    item_name: "Sea Bass - Fillets",
    location: "shop",
    rate: 465904,
    total_price: 86754592,
    qty: 278,
    total_qty_bought: 326,
  },
  {
    item_id: 46,
    item_name: "Cheese - Parmesan Grated",
    location: "shop",
    rate: 350628,
    total_price: 128059,
    qty: 62,
    total_qty_bought: 728,
  },
  {
    item_id: 47,
    item_name: "Tea - Decaf Lipton",
    location: "shop",
    rate: 220601,
    total_price: 16449247,
    qty: 45,
    total_qty_bought: 906,
  },
  {
    item_id: 48,
    item_name: "The Pop Shoppe - Black Cherry",
    location: "shop",
    rate: 350307,
    total_price: 807770,
    qty: 570,
    total_qty_bought: 750,
  },
  {
    item_id: 49,
    item_name: "Soup - Knorr, Chicken Gumbo",
    location: "godown",
    rate: 440556,
    total_price: 12574855,
    qty: 196,
    total_qty_bought: 733,
  },
  {
    item_id: 50,
    item_name: "Celery",
    location: "shop",
    rate: 659571,
    total_price: 68520128,
    qty: 852,
    total_qty_bought: 821,
  },
  {
    item_id: 51,
    item_name: "Mop Head - Cotton, 24 Oz",
    location: "godown",
    rate: 123066,
    total_price: 86039647,
    qty: 694,
    total_qty_bought: 331,
  },
  {
    item_id: 52,
    item_name: "Energy Drink - Redbull 355ml",
    location: "godown",
    rate: 211356,
    total_price: 79475866,
    qty: 474,
    total_qty_bought: 410,
  },
  {
    item_id: 53,
    item_name: "Wanton Wrap",
    location: "shop",
    rate: 67955,
    total_price: 5601561,
    qty: 268,
    total_qty_bought: 213,
  },
  {
    item_id: 54,
    item_name: "Alize Sunset",
    location: "godown",
    rate: 405433,
    total_price: 63467386,
    qty: 592,
    total_qty_bought: 506,
  },
  {
    item_id: 55,
    item_name: "Wine - Masi Valpolocell",
    location: "godown",
    rate: 619011,
    total_price: 76814623,
    qty: 139,
    total_qty_bought: 196,
  },
  {
    item_id: 56,
    item_name: "Sauce - Sesame Thai Dressing",
    location: "godown",
    rate: 941849,
    total_price: 5105724,
    qty: 44,
    total_qty_bought: 867,
  },
  {
    item_id: 57,
    item_name: "Beans - Fava, Canned",
    location: "godown",
    rate: 43682,
    total_price: 27190949,
    qty: 366,
    total_qty_bought: 159,
  },
  {
    item_id: 58,
    item_name: "Miso - Soy Bean Paste",
    location: "shop",
    rate: 754545,
    total_price: 69572368,
    qty: 818,
    total_qty_bought: 750,
  },
  {
    item_id: 59,
    item_name: "Pastry - Banana Tea Loaf",
    location: "shop",
    rate: 132223,
    total_price: 16216944,
    qty: 628,
    total_qty_bought: 438,
  },
  {
    item_id: 60,
    item_name: "Mushroom - Chanterelle, Dry",
    location: "godown",
    rate: 623086,
    total_price: 45179481,
    qty: 28,
    total_qty_bought: 529,
  },
  {
    item_id: 61,
    item_name: "Otomegusa Dashi Konbu",
    location: "godown",
    rate: 849394,
    total_price: 58985587,
    qty: 377,
    total_qty_bought: 831,
  },
  {
    item_id: 62,
    item_name: "Wine - Placido Pinot Grigo",
    location: "shop",
    rate: 705779,
    total_price: 21013712,
    qty: 961,
    total_qty_bought: 373,
  },
  {
    item_id: 63,
    item_name: "Pail - 4l White, With Handle",
    location: "godown",
    rate: 631557,
    total_price: 86329693,
    qty: 206,
    total_qty_bought: 787,
  },
  {
    item_id: 64,
    item_name: "Wine - White Cab Sauv.on",
    location: "shop",
    rate: 347045,
    total_price: 75922321,
    qty: 369,
    total_qty_bought: 156,
  },
  {
    item_id: 65,
    item_name: "Puree - Kiwi",
    location: "godown",
    rate: 177216,
    total_price: 52467868,
    qty: 379,
    total_qty_bought: 372,
  },
  {
    item_id: 66,
    item_name: "Tamarind Paste",
    location: "godown",
    rate: 651277,
    total_price: 93348768,
    qty: 601,
    total_qty_bought: 652,
  },
];
