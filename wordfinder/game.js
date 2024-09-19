/** The script for the entire word search game
 * 
 *
 * Some functions and handler engines are taken from MarketJS
 * Therefore some code may be unnessasary or unclear
 * 
 * Most code is encoded in hexidecimal system
 * 
 * Game and code copyright (c) Zane Wesley
 * 
 */

var _STRINGS = {
        'Ad': {
            'Mobile': {
                'Preroll': {
                    'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
                    'Loading': 'Your\x20game\x20is\x20loading...',
                    'Close': 'Close'
                },
                'Header': {
                    'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
                    'Loading': 'Your\x20game\x20is\x20loading...',
                    'Close': 'Close'
                },
                'End': {
                    'ReadyIn': 'Advertisement\x20ends\x20in\x20',
                    'Loading': 'Please\x20wait\x20...',
                    'Close': 'Close'
                }
            }
        },
        'Splash': {
            'Loading': 'Loading\x20...',
            'LogoLine1': 'Some\x20text\x20here',
            'LogoLine2': 'powered\x20by\x20MarketJS',
            'LogoLine3': 'none'
        },
        'Game': {
            'Win': 'You\x20win!',
            'Lose': 'You\x20lose!',
            'Score': 'Score:\x20',
            'BonusScore': 'Bonus\x20score:\x20',
            'FinalScore': 'Final\x20score:\x20',
            'Time': 'TIME',
            'BestTime': 'Best\x20Time',
            'ON': 'ON',
            'OFF': 'OFF',
            'BGM': 'BGM:\x20',
            'SFX': 'SFX:\x20',
            'Instructions': 'Find\x20all\x20the\x20words\x20in\x20the\x20list;\x20as\x20fast\x20as\x20you\x20can!;;\x20Words\x20can\x20be\x20found;\x20horizontally,\x20vertically;\x20and\x20backwards' ['split'](';'),
            'PuzzleSolvedIn': ['Puzzle\x20Solved\x20in'],
            'title': 'Painters\x20Bible\x20Internet\x20CardGames\x20Asia\x20Artists\x20Composers\x20Tribes\x20EuroCapitals\x20Occupations\x20Whales' ['split']('\x20'),
            'Painters': 'Painters',
            'Bible': 'Bible',
            'Internet': 'Internet',
            'CardGames': 'Card\x20Games',
            'French': 'Français',
            'German': 'Deutsch',
            'Portuguese': 'Português',
            'Asia': 'Countries\x20of\x20Asia',
            'Artists': 'Artists',
            'Composers': 'Composers',
            'Tribes': 'Tribes',
            'EuroCapitals': 'European\x20Capitals',
            'Occupations': 'Occupations',
            'Whales': 'Whales',
            'Difficulty': [null, '(Easy)', '(Medium)', '(Hard)'],
            'letterData': 'abcdefghijklmnopqrstuvwxyz',
            'dictionary': {
                'Painters': [null, 'homer\x20kahlo\x20munch\x20picasso\x20raphael\x20renoir\x20rubens\x20titan\x20vermeer\x20warhol' ['split']('\x20'), 'blake\x20cassatt\x20cezanne\x20davinci\x20dali\x20degas\x20durer\x20eakins\x20hopper\x20klmit\x20leger\x20mondrian\x20rembrandt\x20velazquez\x20vermeer' ['split']('\x20'), 'ability\x20abroad\x20abuse\x20access\x20accident\x20account\x20action\x20active\x20activity\x20actor\x20actress\x20addition\x20address\x20advance\x20advantage\x20advice\x20adviser\x20affair\x20affect\x20african\x20afternoon\x20agency\x20agent\x20agreement\x20airline\x20airport\x20alarm\x20albania\x20albatross\x20alcohol\x20algeria\x20alligator\x20ambition\x20america\x20amount\x20analysis\x20analyst\x20andorra\x20anger\x20angle\x20angola\x20animal\x20annual\x20answer\x20antelope\x20antigua\x20anvil\x20anxiety\x20anybody\x20anything\x20anywhere\x20apartment\x20appeal\x20appearance\x20apple\x20apricot\x20arab\x20arabia\x20architect\x20arctic\x20area\x20argentina\x20argument\x20armadillo\x20armenia\x20army\x20arrival\x20artichoke\x20article\x20aside\x20asparagus\x20aspect\x20assignment\x20assist\x20assistance\x20assistant\x20associate\x20assumption\x20astronaut\x20atmosphere\x20attack\x20attempt\x20attendant\x20attention\x20attitude\x20audience\x20australia\x20austria\x20author\x20average\x20avocado\x20award\x20awareness\x20azerbaijan\x20baboon\x20baby\x20back\x20background\x20badger\x20bahamas\x20bahrain\x20bake\x20baker\x20balance\x20ball\x20banana\x20band\x20bangladesh\x20bank\x20barbados\x20barber\x20barbuda\x20base\x20baseball\x20basil\x20basis\x20basket\x20bath\x20bathroom\x20battle\x20beach\x20beagle\x20bean\x20beans\x20bear\x20beat\x20beautician\x20beautiful\x20beaver\x20bedroom\x20beer\x20beet\x20beetroot\x20beginning\x20being\x20belarus\x20belgium\x20belize\x20bell\x20belt\x20bench\x20bend\x20benefit\x20benin\x20beyond\x20bhutan\x20bicycle\x20bike\x20bill\x20biologist\x20bird\x20birth\x20birthday\x20bison\x20bite\x20bitter\x20black\x20blame\x20blank\x20blind\x20block\x20blood\x20blow\x20blue\x20blueberry\x20boar\x20board\x20boat\x20body\x20bolivia\x20bolt\x20bone\x20bonus\x20book\x20boot\x20border\x20bosnia\x20boss\x20bother\x20botswana\x20bottle\x20bottom\x20bowl\x20boxer\x20boyfriend\x20bradawl\x20brain\x20branch\x20brave\x20brazil\x20bread\x20break\x20breakfast\x20breast\x20breath\x20brick\x20brickie\x20bricklayer\x20bridge\x20brief\x20brilliant\x20broad\x20broccoli\x20brother\x20brown\x20brunei\x20brush\x20brussels\x20buddy\x20budget\x20buffalo\x20builder\x20building\x20bulgaria\x20bull\x20bunch\x20burkina\x20burn\x20burundi\x20business\x20butcher\x20button\x20buyer\x20cabbage\x20cabinet\x20cable\x20cabo\x20cake\x20calendar\x20call\x20calm\x20cambodia\x20camel\x20camera\x20cameraman\x20cameroon\x20camp\x20campaign\x20canada\x20cancel\x20cancer\x20candidate\x20candle\x20candy\x20capital\x20carambola\x20card\x20care\x20career\x20caretaker\x20carpenter\x20carpet\x20carrot\x20carry\x20case\x20cash\x20catch\x20category\x20catholic\x20cause\x20celery\x20cell\x20central\x20chad\x20chain\x20chainsaw\x20chair\x20challenge\x20chameleon\x20champion\x20chance\x20change\x20channel\x20chapter\x20character\x20charge\x20charity\x20chart\x20check\x20cheek\x20cheetah\x20chef\x20chemical\x20chemist\x20chemistry\x20cherry\x20chest\x20chicken\x20chihuahua\x20child\x20childcare\x20childhood\x20chile\x20chilli\x20chimney\x20chimpanzee\x20china\x20chip\x20chisel\x20chives\x20chocolate\x20choice\x20church\x20cigarette\x20cilantro\x20circular\x20city\x20claim\x20clamp\x20class\x20classic\x20classroom\x20clerk\x20click\x20client\x20climate\x20clock\x20closet\x20clothes\x20cloud\x20clove\x20clown\x20club\x20clue\x20coach\x20coast\x20coat\x20cobra\x20coconut\x20code\x20coffee\x20cold\x20collar\x20collection\x20college\x20colombia\x20combine\x20comfort\x20command\x20comment\x20commercial\x20commission\x20committee\x20common\x20community\x20comoros\x20company\x20comparison\x20complaint\x20complex\x20computer\x20concept\x20concern\x20concert\x20conclusion\x20condition\x20conductor\x20conference\x20confidence\x20conflict\x20confusion\x20congo\x20connection\x20consist\x20constant\x20contact\x20contest\x20context\x20contract\x20control\x20convert\x20cook\x20cookie\x20coping\x20copy\x20coriander\x20corn\x20corner\x20cost\x20costa\x20count\x20counter\x20country\x20county\x20couple\x20courage\x20courgette\x20course\x20court\x20cousin\x20cover\x20crab\x20crack\x20craft\x20crash\x20crazy\x20cream\x20creative\x20credit\x20crew\x20criticism\x20croatia\x20crocodile\x20cross\x20crow\x20cuba\x20cucumber\x20culture\x20currency\x20current\x20curve\x20customer\x20cycle\x20cyprus\x20czechia\x20damage\x20dance\x20dare\x20dark\x20data\x20database\x20date\x20daughter\x20dead\x20deal\x20dealer\x20dear\x20death\x20debate\x20debt\x20decision\x20deep\x20deer\x20definition\x20degree\x20delay\x20delivery\x20demand\x20democratic\x20denmark\x20dentist\x20department\x20departure\x20dependent\x20deposit\x20depression\x20depth\x20design\x20designer\x20desire\x20desk\x20detail\x20detective\x20device\x20devil\x20diamond\x20diet\x20difference\x20difficulty\x20dimension\x20dinner\x20direction\x20director\x20dirt\x20disaster\x20discipline\x20discount\x20discussion\x20disease\x20dish\x20disk\x20display\x20distance\x20district\x20diver\x20divide\x20djibouti\x20doctor\x20document\x20dodo\x20dolphin\x20dominica\x20dominican\x20donkey\x20door\x20doorman\x20double\x20doubt\x20draft\x20drag\x20drama\x20draw\x20drawer\x20drawing\x20dream\x20dress\x20drill\x20drink\x20drive\x20driver\x20drop\x20drunk\x20duck\x20dump\x20dust\x20duty\x20eagle\x20earth\x20ease\x20east\x20economics\x20economy\x20ecuador\x20edge\x20editor\x20education\x20effect\x20effective\x20efficiency\x20effort\x20eggplant\x20egypt\x20election\x20electric\x20elephant\x20elevator\x20emergency\x20emirates\x20emotion\x20emphasis\x20employ\x20employee\x20employer\x20employment\x20energy\x20engine\x20engineer\x20enthusiasm\x20entrance\x20entry\x20equal\x20equatorial\x20equipment\x20equivalent\x20eritrea\x20error\x20escape\x20essay\x20estate\x20estimate\x20estonia\x20ethiopia\x20evening\x20event\x20evidence\x20exam\x20example\x20exchange\x20excitement\x20excuse\x20exercise\x20exit\x20experience\x20expert\x20explorer\x20expression\x20extension\x20extent\x20external\x20extreme\x20face\x20fact\x20factor\x20fail\x20failure\x20fall\x20familiar\x20family\x20farm\x20farmer\x20fashion\x20faso\x20father\x20fault\x20fear\x20feature\x20feed\x20feedback\x20feel\x20feeling\x20female\x20field\x20fight\x20figure\x20fiji\x20file\x20fill\x20film\x20final\x20finance\x20finding\x20finger\x20finish\x20finland\x20fire\x20fireman\x20fish\x20fishing\x20fitness\x20flamingo\x20flight\x20floor\x20florist\x20flow\x20flower\x20flying\x20focus\x20fold\x20following\x20food\x20foot\x20football\x20footballer\x20force\x20foreman\x20forest\x20forever\x20form\x20formal\x20fortune\x20foundation\x20frame\x20france\x20freedom\x20friend\x20friendship\x20frog\x20front\x20fruit\x20fuel\x20function\x20funeral\x20funny\x20future\x20gabon\x20gain\x20gambia\x20game\x20garage\x20garbage\x20garden\x20gardener\x20garlic\x20gate\x20gather\x20gear\x20geisha\x20gene\x20general\x20georgia\x20germany\x20ghana\x20giant\x20gift\x20ginger\x20giraffe\x20girl\x20girlfriend\x20give\x20glad\x20glass\x20glazier\x20glove\x20goal\x20goat\x20gold\x20golf\x20good\x20goose\x20gorilla\x20government\x20grab\x20grade\x20grand\x20grape\x20grapefruit\x20graphic\x20grass\x20great\x20greece\x20green\x20grenada\x20grenadines\x20grocery\x20ground\x20group\x20growth\x20guarantee\x20guard\x20guatemala\x20guess\x20guest\x20guidance\x20guide\x20guinea\x20guitar\x20guyana\x20habit\x20hacksaw\x20hair\x20haiti\x20half\x20hall\x20hammer\x20hammerhead\x20hamster\x20hand\x20handle\x20hang\x20hare\x20harm\x20hatchet\x20hate\x20hawk\x20head\x20health\x20hearing\x20heart\x20heat\x20heavy\x20hedgehog\x20height\x20hell\x20hello\x20help\x20hermit\x20hide\x20high\x20highlight\x20highway\x20hire\x20historian\x20history\x20hold\x20hole\x20holiday\x20home\x20homework\x20honduras\x20honey\x20hook\x20hope\x20horror\x20horse\x20hospital\x20host\x20hotel\x20hour\x20house\x20housewife\x20housing\x20human\x20hungary\x20hunt\x20hunter\x20huntsman\x20hurry\x20hurt\x20husband\x20ibex\x20iceland\x20idea\x20ideal\x20iguana\x20illegal\x20image\x20impact\x20implement\x20importance\x20impress\x20impression\x20incident\x20income\x20increase\x20india\x20indication\x20individual\x20indonesia\x20industry\x20inevitable\x20inflation\x20influence\x20initial\x20initiative\x20injury\x20insect\x20inside\x20inspection\x20inspector\x20instance\x20instructor\x20insurance\x20intention\x20interest\x20internal\x20internet\x20interview\x20investment\x20invite\x20iran\x20iraq\x20ireland\x20iron\x20island\x20israel\x20issue\x20italy\x20item\x20jackal\x20jacket\x20jackfruit\x20jaguar\x20jamaica\x20japan\x20jellyfish\x20join\x20joint\x20joke\x20jordan\x20jounalist\x20journalist\x20judge\x20judgment\x20juice\x20jump\x20junior\x20jury\x20kangaroo\x20kazakhstan\x20keep\x20kenya\x20kick\x20kill\x20kind\x20king\x20kingdom\x20kiribati\x20kiss\x20kitchen\x20kiwi\x20knee\x20knife\x20knowledge\x20koala\x20korea\x20kuwait\x20kyrgyzstan\x20lack\x20ladder\x20lady\x20lake\x20land\x20landscape\x20language\x20lanka\x20laos\x20latvia\x20laugh\x20lawnmower\x20lawyer\x20layer\x20lead\x20leader\x20leadership\x20leading\x20league\x20leather\x20leave\x20leaves\x20lebanon\x20lecture\x20lemon\x20lemongrass\x20lemur\x20length\x20leone\x20leopard\x20lesotho\x20lesson\x20letter\x20lettuce\x20level\x20liberia\x20librarian\x20library\x20libya\x20life\x20lifeguard\x20lift\x20light\x20lime\x20limit\x20line\x20link\x20lion\x20list\x20listen\x20literature\x20lithuania\x20living\x20lizard\x20llama\x20load\x20loan\x20local\x20location\x20lock\x20long\x20look\x20loss\x20love\x20lucia\x20luck\x20lunch\x20lunchroom\x20luxembourg\x20lynx\x20macedonia\x20machine\x20madagascar\x20magazine\x20magician\x20mail\x20main\x20major\x20make\x20malawi\x20malaysia\x20maldives\x20male\x20mali\x20mall\x20mallet\x20malta\x20mammoth\x20management\x20manager\x20mandarin\x20mango\x20manner\x20many\x20march\x20marino\x20mark\x20market\x20marketing\x20marriage\x20marshall\x20master\x20match\x20mate\x20material\x20math\x20matter\x20mauritania\x20mauritius\x20maximum\x20maybe\x20meal\x20meaning\x20measure\x20meat\x20mechanic\x20media\x20medicine\x20medium\x20meerkat\x20meet\x20meeting\x20melon\x20member\x20membership\x20memory\x20mention\x20menu\x20mess\x20message\x20metal\x20method\x20mexico\x20micronesia\x20middle\x20midnight\x20might\x20milk\x20mind\x20mine\x20miner\x20minimum\x20minor\x20mint\x20minute\x20mirror\x20miss\x20mission\x20mistake\x20mixture\x20mobile\x20mode\x20model\x20moldova\x20mole\x20moment\x20monaco\x20money\x20mongolia\x20monitor\x20monkey\x20montenegro\x20month\x20mood\x20morning\x20morocco\x20mortgage\x20most\x20mother\x20motor\x20mountain\x20mouse\x20mouth\x20move\x20movie\x20mozambique\x20mule\x20muscle\x20mushroom\x20music\x20nail\x20name\x20namibia\x20nasty\x20nation\x20national\x20native\x20natural\x20nature\x20nauru\x20neat\x20necessary\x20neck\x20nectarine\x20negative\x20nepal\x20nerve\x20network\x20nevis\x20news\x20newspaper\x20nicaragua\x20niger\x20nigeria\x20night\x20nobody\x20noise\x20normal\x20north\x20norway\x20nose\x20note\x20nothing\x20notice\x20novel\x20number\x20nurse\x20nursery\x20object\x20objective\x20obligation\x20occasion\x20offer\x20office\x20officer\x20official\x20olive\x20oman\x20onion\x20opening\x20operation\x20opinion\x20opposite\x20option\x20orange\x20orangutan\x20order\x20ordinary\x20original\x20ostrich\x20other\x20otter\x20outcome\x20outside\x20oven\x20owner\x20pace\x20pack\x20package\x20page\x20pain\x20paint\x20painter\x20painting\x20pair\x20pakistan\x20palau\x20palestine\x20panama\x20panda\x20panic\x20panther\x20papaya\x20paper\x20papua\x20paraguay\x20paramedic\x20parent\x20park\x20parking\x20part\x20particular\x20partner\x20party\x20pass\x20passage\x20passenger\x20passion\x20past\x20path\x20patience\x20patient\x20pattern\x20pause\x20payment\x20peace\x20peach\x20peacock\x20peak\x20pear\x20penalty\x20pension\x20people\x20pepper\x20percentage\x20perception\x20period\x20permission\x20permit\x20person\x20personal\x20peru\x20phase\x20phillips\x20philosophy\x20phone\x20photo\x20phrase\x20physical\x20physics\x20piano\x20pick\x20picture\x20piece\x20pigeon\x20pilot\x20pineapple\x20pipe\x20pirate\x20pitch\x20pizza\x20place\x20plan\x20plane\x20plant\x20plastic\x20plate\x20platform\x20play\x20player\x20pleasure\x20plenty\x20pliers\x20plum\x20plumber\x20poem\x20poet\x20poetry\x20point\x20poland\x20polar\x20police\x20policy\x20politics\x20pollution\x20pool\x20pope\x20population\x20porcupine\x20portugal\x20position\x20positive\x20possession\x20possible\x20possum\x20post\x20postman\x20potato\x20potential\x20pound\x20power\x20practice\x20preference\x20presence\x20present\x20president\x20press\x20pressure\x20price\x20pride\x20priest\x20primary\x20principe\x20principle\x20print\x20prior\x20priority\x20private\x20prize\x20problem\x20procedure\x20process\x20produce\x20product\x20profession\x20professor\x20profile\x20profit\x20program\x20progress\x20project\x20promise\x20promotion\x20prompt\x20proof\x20property\x20proposal\x20protection\x20pruning\x20psychology\x20public\x20pull\x20pumpkin\x20punch\x20purchase\x20purple\x20purpose\x20push\x20qatar\x20quality\x20quantity\x20quarter\x20queen\x20question\x20quiet\x20quit\x20quote\x20rabbit\x20race\x20racoon\x20radio\x20radish\x20rain\x20raise\x20range\x20ranger\x20raspberry\x20rate\x20ratio\x20reach\x20reaction\x20read\x20reading\x20reality\x20reason\x20reception\x20recipe\x20record\x20recording\x20recover\x20reference\x20reflection\x20refuse\x20region\x20register\x20regret\x20regular\x20relation\x20relative\x20release\x20relief\x20remote\x20remove\x20rent\x20repair\x20repairman\x20repeat\x20reply\x20report\x20reporter\x20republic\x20reputation\x20request\x20research\x20reserve\x20resident\x20resist\x20resolution\x20resolve\x20resort\x20resource\x20respect\x20respond\x20response\x20rest\x20restaurant\x20result\x20return\x20reveal\x20revenue\x20review\x20revolution\x20reward\x20rhinoceros\x20rica\x20rice\x20rich\x20ride\x20ring\x20rise\x20risk\x20river\x20road\x20rock\x20role\x20roll\x20romania\x20roof\x20roofer\x20room\x20rope\x20rosemary\x20rough\x20round\x20routine\x20royal\x20ruin\x20rule\x20rush\x20russia\x20rutabaga\x20rwanda\x20safe\x20safety\x20sail\x20saint\x20salad\x20salary\x20sale\x20salesman\x20salt\x20salvador\x20samoa\x20sample\x20sand\x20sandpaper\x20sandwich\x20saudi\x20save\x20savings\x20scale\x20scene\x20schedule\x20scheme\x20school\x20science\x20scientist\x20scissors\x20score\x20scraper\x20scratch\x20screen\x20screw\x20script\x20search\x20season\x20seat\x20second\x20secret\x20secretary\x20section\x20sector\x20security\x20selection\x20self\x20sell\x20senegal\x20senior\x20sense\x20sensitive\x20sentence\x20serbia\x20series\x20serve\x20service\x20session\x20setting\x20seychelles\x20shake\x20shallot\x20shame\x20shape\x20share\x20shark\x20sharpening\x20shears\x20sheep\x20shelter\x20shepherd\x20shift\x20shine\x20ship\x20shirt\x20shock\x20shoe\x20shoot\x20shop\x20shopping\x20shot\x20shoulder\x20shovel\x20show\x20shower\x20sick\x20side\x20sierra\x20sign\x20signal\x20signature\x20silly\x20silver\x20simple\x20sing\x20singapore\x20singer\x20single\x20sink\x20sister\x20site\x20situation\x20size\x20skill\x20skin\x20skirt\x20slater\x20sleep\x20slice\x20slide\x20slip\x20sloth\x20slovakia\x20slovenia\x20smell\x20smile\x20smoke\x20snake\x20snow\x20social\x20society\x20sock\x20soft\x20software\x20soil\x20soldering\x20soldier\x20solid\x20solomon\x20solution\x20somalia\x20somewhere\x20song\x20sort\x20sound\x20soup\x20source\x20south\x20space\x20spade\x20spain\x20spare\x20speaker\x20special\x20specialist\x20specific\x20speech\x20speed\x20spell\x20spend\x20spinach\x20spirit\x20spiritual\x20spite\x20split\x20sport\x20spot\x20spray\x20spread\x20spring\x20sprout\x20square\x20squirrel\x20stable\x20staff\x20stage\x20stand\x20standard\x20star\x20starfruit\x20start\x20state\x20statement\x20station\x20status\x20stay\x20steak\x20steal\x20step\x20stepladder\x20stick\x20still\x20stock\x20stomach\x20stone\x20stop\x20storage\x20store\x20storm\x20story\x20strain\x20stranger\x20strategy\x20strawberry\x20street\x20strength\x20stress\x20stretch\x20strike\x20string\x20strip\x20stroke\x20structure\x20struggle\x20student\x20studio\x20study\x20stuff\x20stupid\x20style\x20subject\x20substance\x20success\x20suck\x20sudan\x20sugar\x20suggestion\x20suit\x20summer\x20supervisor\x20support\x20surgeon\x20surgery\x20suriname\x20surprise\x20surround\x20survey\x20suspect\x20swan\x20swaziland\x20swede\x20sweden\x20sweep\x20sweet\x20swim\x20swimming\x20swing\x20switch\x20sympathy\x20syria\x20system\x20table\x20tackle\x20tajikistan\x20tale\x20talk\x20tank\x20tanzania\x20tape\x20target\x20task\x20taste\x20taxi\x20teach\x20teacher\x20teaching\x20team\x20tear\x20technology\x20telephone\x20television\x20tell\x20temporary\x20tennis\x20tension\x20term\x20test\x20text\x20thailand\x20thanks\x20thatcher\x20theme\x20theory\x20thing\x20thinner\x20thought\x20throat\x20ticket\x20tiger\x20tiler\x20till\x20time\x20title\x20tobago\x20today\x20togo\x20tomato\x20tomorrow\x20tone\x20tonga\x20tongue\x20tonight\x20tool\x20toolbox\x20tooth\x20topic\x20tortoise\x20total\x20touch\x20tough\x20tour\x20tourist\x20towel\x20tower\x20town\x20track\x20trade\x20tradition\x20traffic\x20train\x20trainer\x20training\x20transition\x20trash\x20travel\x20treat\x20tree\x20trick\x20trinidad\x20trip\x20trouble\x20trowel\x20truck\x20trust\x20truth\x20tune\x20tunisia\x20turkey\x20turmeric\x20turn\x20turnip\x20turtle\x20tuvalu\x20twist\x20type\x20uganda\x20ukraine\x20uncle\x20undertaker\x20union\x20unique\x20unit\x20united\x20university\x20upper\x20upstairs\x20uruguay\x20user\x20usual\x20uzbekistan\x20vacation\x20valuable\x20value\x20vanuatu\x20variation\x20variety\x20vast\x20vegetable\x20vehicle\x20venezuela\x20verde\x20version\x20video\x20vietnam\x20view\x20village\x20vincent\x20virus\x20vise\x20visit\x20visual\x20vocalist\x20voice\x20volume\x20vulture\x20wait\x20waiter\x20waitress\x20wake\x20walk\x20wall\x20warning\x20wash\x20washer\x20watch\x20water\x20watermelon\x20wave\x20weakness\x20wealth\x20wear\x20weather\x20wedding\x20week\x20weekend\x20weight\x20weird\x20welcome\x20west\x20western\x20whale\x20wheel\x20whereas\x20while\x20white\x20whole\x20wife\x20will\x20wind\x20window\x20wine\x20wing\x20winner\x20winter\x20wire\x20wish\x20witness\x20wolf\x20woman\x20wombat\x20wonder\x20wood\x20word\x20work\x20workbench\x20worker\x20working\x20world\x20worry\x20worth\x20wrap\x20wrench\x20writer\x20writing\x20yard\x20year\x20yellow\x20yemen\x20yesterday\x20young\x20youth\x20zambia\x20zealand\x20zebra\x20zimbabwe\x20zone\x20zoologist\x20zucchini' ['split']('\x20')]
            }
        },
        'Results': {
            'Title': 'High\x20score'
        }
    },
    _SETTINGS = {
        // Disable API
        'API': {
            'Enabled': !0x1,
            'Log': {
                'Events': {
                    'InitializeGame': !0x0,
                    'EndGame': !0x0,
                    'Level': {
                        'Begin': !0x0,
                        'End': !0x0,
                        'Win': !0x0,
                        'Lose': !0x0,
                        'Draw': !0x0
                    }
                }
            }
        },
        // No ads
        'Ad': {
            'Mobile': {
                'Preroll': {
                    'Enabled': !0x1,
                    'Duration': 0x5,
                    'Width': 0x12c,
                    'Height': 0xfa,
                    'Rotation': {
                        'Enabled': !0x1,
                        'Weight': {
                            'MobileAdInGamePreroll': 0x28,
                            'MobileAdInGamePreroll2': 0x28,
                            'MobileAdInGamePreroll3': 0x14
                        }
                    }
                },
                'Header': {
                    'Enabled': !0x1,
                    'Duration': 0x5,
                    'Width': 0x140,
                    'Height': 0x32,
                    'Rotation': {
                        'Enabled': !0x1,
                        'Weight': {
                            'MobileAdInGameHeader': 0x28,
                            'MobileAdInGameHeader2': 0x28,
                            'MobileAdInGameHeader3': 0x14
                        }
                    }
                },
                'Footer': {
                    'Enabled': !0x1,
                    'Duration': 0x5,
                    'Width': 0x140,
                    'Height': 0x32,
                    'Rotation': {
                        'Enabled': !0x1,
                        'Weight': {
                            'MobileAdInGameFooter': 0x28,
                            'MobileAdInGameFooter2': 0x28,
                            'MobileAdInGameFooter3': 0x14
                        }
                    }
                },
                'End': {
                    'Enabled': !0x1,
                    'Duration': 0x1,
                    'Width': 0x12c,
                    'Height': 0xfa,
                    'Rotation': {
                        'Enabled': !0x1,
                        'Weight': {
                            'MobileAdInGameEnd': 0x28,
                            'MobileAdInGameEnd2': 0x28,
                            'MobileAdInGameEnd3': 0x14
                        }
                    }
                }
            }
        },
        'Language': {
            'Default': 'en'
        },
        // Enable - 0x0, disable - 0x1
        // Disable MarketJS splash
        'DeveloperBranding': {
            'Splash': {
                'Enabled': !0x1
            },
            'Logo': {
                'Enabled': !0x1,
                'Link': 'http://marketjs.com',
                'LinkEnabled': !0x1,
                'NewWindow': !0x0,
                'Width': 0xa6,
                'Height': 0x3d
            }
        },
        // Disable Personalized splash
        'Branding': {
            'Splash': {
                'Enabled': !0x1
            },
            'Logo': {
                'Enabled': !0x1,
                'Link': 'http://google.com',
                'LinkEnabled': !0x1,
                'NewWindow': !0x0,
                'Width': 0x118,
                'Height': 0x22
            }
        },
        // Disable more games link from MarketJS
        'MoreGames': {
            'Enabled': !0x1,
            'Link': 'http://www.marketjs.com/game/links/mobile',
            'NewWindow': !0x0
        },
        'Gamecenter': {
            'Enabled': !0x1
        },
        'TapToStartAudioUnlock': {
            'Enabled': !0x1
        },
        // Disable verson display in left corner
        'Versioning': {
            'Version': '1.0.0',
            'Build': '4',
            'DisplayLog': !0x1,
            'DrawVersion': !0x1,
            'FontSize': '32px',
            'FontFamily': 'Arial',
            'FillStyle': '#000000'
        }
    };
'undefined' !== typeof _SETTINGS['Versioning'] && null !== _SETTINGS['Versioning'] && !0x0 === _SETTINGS['Versioning']['DisplayLog'] && console['log']('Release:\x20v' + _SETTINGS['Versioning']['Version'] + '+build.' + _SETTINGS['Versioning']['Build']);

! function(_0x48e36d, _0x2e2efd) {
    'object' == typeof module && 'object' == typeof module['exports'] ? module['exports'] = _0x48e36d['document'] ? _0x2e2efd(_0x48e36d, !0x0) : function(_0x360dff) {
        if (!_0x360dff['document']) throw Error('jQuery\x20requires\x20a\x20window\x20with\x20a\x20document');
        return _0x2e2efd(_0x360dff);
    } : _0x2e2efd(_0x48e36d);
}('undefined' != typeof window ? window : this, function(_0x27d1a6, _0x58c9aa) {
    function _0x3de900(_0x398bd2, _0x524b6d) {
        _0x524b6d = _0x524b6d || _0x45a45f;
        var _0x46ca59 = _0x524b6d['createElement']('script');
        _0x46ca59['text'] = _0x398bd2, _0x524b6d['head']['appendChild'](_0x46ca59)['parentNode']['removeChild'](_0x46ca59);
    }

    function _0x52e6a1(_0x191498) {
        var _0x3a045c = !!_0x191498 && 'length' in _0x191498 && _0x191498['length'],
            _0x49a05b = _0x3804bf['type'](_0x191498);
        return 'function' !== _0x49a05b && !_0x3804bf['isWindow'](_0x191498) && ('array' === _0x49a05b || 0x0 === _0x3a045c || 'number' == typeof _0x3a045c && 0x0 < _0x3a045c && _0x3a045c - 0x1 in _0x191498);
    }

    function _0x504a90(_0x3c0f7e, _0x5a35fa) {
        return _0x3c0f7e['nodeName'] && _0x3c0f7e['nodeName']['toLowerCase']() === _0x5a35fa['toLowerCase']();
    }

    function _0x24ca91(_0x58dea5, _0x4d7494, _0x4c32c3) {
        return _0x3804bf['isFunction'](_0x4d7494) ? _0x3804bf['grep'](_0x58dea5, function(_0x3de044, _0x4ab131) {
            return !!_0x4d7494['call'](_0x3de044, _0x4ab131, _0x3de044) !== _0x4c32c3;
        }) : _0x4d7494['nodeType'] ? _0x3804bf['grep'](_0x58dea5, function(_0x1635b3) {
            return _0x1635b3 === _0x4d7494 !== _0x4c32c3;
        }) : 'string' != typeof _0x4d7494 ? _0x3804bf['grep'](_0x58dea5, function(_0x3198bb) {
            return -0x1 < _0x20e096['call'](_0x4d7494, _0x3198bb) !== _0x4c32c3;
        }) : _0x3337fa['test'](_0x4d7494) ? _0x3804bf['filter'](_0x4d7494, _0x58dea5, _0x4c32c3) : (_0x4d7494 = _0x3804bf['filter'](_0x4d7494, _0x58dea5), _0x3804bf['grep'](_0x58dea5, function(_0x22afb8) {
            return -0x1 < _0x20e096['call'](_0x4d7494, _0x22afb8) !== _0x4c32c3 && 0x1 === _0x22afb8['nodeType'];
        }));
    }

    function _0x59fa4c(_0x17db03, _0x4e9d50) {
        for (;
            (_0x17db03 = _0x17db03[_0x4e9d50]) && 0x1 !== _0x17db03['nodeType'];);
        return _0x17db03;
    }

    function _0x42d622(_0x33d78d) {
        return _0x33d78d;
    }

    function _0x1b91b6(_0x233b64) {
        throw _0x233b64;
    }

    function _0x817ffe(_0x4bf4c5, _0x599b33, _0x28c9e7, _0x444de1) {
        var _0x2743a6;
        try {
            _0x4bf4c5 && _0x3804bf['isFunction'](_0x2743a6 = _0x4bf4c5['promise']) ? _0x2743a6['call'](_0x4bf4c5)['done'](_0x599b33)['fail'](_0x28c9e7) : _0x4bf4c5 && _0x3804bf['isFunction'](_0x2743a6 = _0x4bf4c5['then']) ? _0x2743a6['call'](_0x4bf4c5, _0x599b33, _0x28c9e7) : _0x599b33['apply'](void 0x0, [_0x4bf4c5]['slice'](_0x444de1));
        } catch (_0x31b61c) {
            _0x28c9e7['apply'](void 0x0, [_0x31b61c]);
        }
    }

    function _0x5edaf5() {
        _0x45a45f['removeEventListener']('DOMContentLoaded', _0x5edaf5), _0x27d1a6['removeEventListener']('load', _0x5edaf5), _0x3804bf['ready']();
    }

    function _0x351562() {
        this['expando'] = _0x3804bf['expando'] + _0x351562['uid']++;
    }

    function _0x1aae1e(_0x42adf9, _0x3db74a, _0x3debab) {
        var _0x47f276;
        if (void 0x0 === _0x3debab && 0x1 === _0x42adf9['nodeType']) {
            if (_0x47f276 = 'data-' + _0x3db74a['replace'](_0x1c1842, '-$&')['toLowerCase'](), _0x3debab = _0x42adf9['getAttribute'](_0x47f276), 'string' == typeof _0x3debab) {
                try {
                    _0x3debab = 'true' === _0x3debab || 'false' !== _0x3debab && ('null' === _0x3debab ? null : _0x3debab === +_0x3debab + '' ? +_0x3debab : _0x2852c1['test'](_0x3debab) ? JSON['parse'](_0x3debab) : _0x3debab);
                } catch (_0x71611e) {}
                _0x5dc0e2['set'](_0x42adf9, _0x3db74a, _0x3debab);
            } else _0x3debab = void 0x0;
        }
        return _0x3debab;
    }

    function _0x2967f4(_0x3c95cf, _0x3429bc, _0x399c75, _0x1371ba) {
        var _0x21fecb, _0x3dbb70 = 0x1,
            _0x404fcc = 0x14,
            _0x4be100 = _0x1371ba ? function() {
                return _0x1371ba['cur']();
            } : function() {
                return _0x3804bf['css'](_0x3c95cf, _0x3429bc, '');
            },
            _0x42e63c = _0x4be100(),
            _0x29416a = _0x399c75 && _0x399c75[0x3] || (_0x3804bf['cssNumber'][_0x3429bc] ? '' : 'px'),
            _0x4c1b9a = (_0x3804bf['cssNumber'][_0x3429bc] || 'px' !== _0x29416a && +_0x42e63c) && _0x142d0a['exec'](_0x3804bf['css'](_0x3c95cf, _0x3429bc));
        if (_0x4c1b9a && _0x4c1b9a[0x3] !== _0x29416a) {
            _0x29416a = _0x29416a || _0x4c1b9a[0x3], _0x399c75 = _0x399c75 || [], _0x4c1b9a = +_0x42e63c || 0x1;
            do _0x3dbb70 = _0x3dbb70 || '.5', _0x4c1b9a /= _0x3dbb70, _0x3804bf['style'](_0x3c95cf, _0x3429bc, _0x4c1b9a + _0x29416a); while (_0x3dbb70 !== (_0x3dbb70 = _0x4be100() / _0x42e63c) && 0x1 !== _0x3dbb70 && --_0x404fcc);
        }
        return _0x399c75 && (_0x4c1b9a = +_0x4c1b9a || +_0x42e63c || 0x0, _0x21fecb = _0x399c75[0x1] ? _0x4c1b9a + (_0x399c75[0x1] + 0x1) * _0x399c75[0x2] : +_0x399c75[0x2], _0x1371ba && (_0x1371ba['unit'] = _0x29416a, _0x1371ba['start'] = _0x4c1b9a, _0x1371ba['end'] = _0x21fecb)), _0x21fecb;
    }

    function _0x21eb52(_0x4fb5b0, _0x3485f5) {
        for (var _0x53d99d, _0x50f320, _0x26dc2d = [], _0x6ff282 = 0x0, _0x31cbac = _0x4fb5b0['length']; _0x6ff282 < _0x31cbac; _0x6ff282++)
            if (_0x50f320 = _0x4fb5b0[_0x6ff282], _0x50f320['style']) {
                if (_0x53d99d = _0x50f320['style']['display'], _0x3485f5) {
                    if ('none' === _0x53d99d && (_0x26dc2d[_0x6ff282] = _0x460f18['get'](_0x50f320, 'display') || null, _0x26dc2d[_0x6ff282] || (_0x50f320['style']['display'] = '')), '' === _0x50f320['style']['display'] && _0x293303(_0x50f320)) {
                        _0x53d99d = _0x26dc2d;
                        var _0x3b863d = _0x6ff282,
                            _0xc4db27, _0x5d9f87 = void 0x0;
                        _0xc4db27 = _0x50f320['ownerDocument'];
                        var _0x84855f = _0x50f320['nodeName'];
                        _0xc4db27 = (_0x50f320 = _0xb5577e[_0x84855f]) ? _0x50f320 : (_0x5d9f87 = _0xc4db27['body']['appendChild'](_0xc4db27['createElement'](_0x84855f)), _0x50f320 = _0x3804bf['css'](_0x5d9f87, 'display'), _0x5d9f87['parentNode']['removeChild'](_0x5d9f87), 'none' === _0x50f320 && (_0x50f320 = 'block'), _0xb5577e[_0x84855f] = _0x50f320, _0x50f320), _0x53d99d[_0x3b863d] = _0xc4db27;
                    }
                } else 'none' !== _0x53d99d && (_0x26dc2d[_0x6ff282] = 'none', _0x460f18['set'](_0x50f320, 'display', _0x53d99d));
            }
        for (_0x6ff282 = 0x0; _0x6ff282 < _0x31cbac; _0x6ff282++) null != _0x26dc2d[_0x6ff282] && (_0x4fb5b0[_0x6ff282]['style']['display'] = _0x26dc2d[_0x6ff282]);
        return _0x4fb5b0;
    }

    function _0x291148(_0x5416f9, _0x376637) {
        var _0x180db7;
        return _0x180db7 = 'undefined' != typeof _0x5416f9['getElementsByTagName'] ? _0x5416f9['getElementsByTagName'](_0x376637 || '*') : 'undefined' != typeof _0x5416f9['querySelectorAll'] ? _0x5416f9['querySelectorAll'](_0x376637 || '*') : [], void 0x0 === _0x376637 || _0x376637 && _0x504a90(_0x5416f9, _0x376637) ? _0x3804bf['merge']([_0x5416f9], _0x180db7) : _0x180db7;
    }

    function _0x3e6a13(_0x2d000f, _0x4659ad) {
        for (var _0x7758df = 0x0, _0x2e2f6b = _0x2d000f['length']; _0x7758df < _0x2e2f6b; _0x7758df++) _0x460f18['set'](_0x2d000f[_0x7758df], 'globalEval', !_0x4659ad || _0x460f18['get'](_0x4659ad[_0x7758df], 'globalEval'));
    }

    function _0x2225ae(_0x3461d3, _0x42839a, _0x4ffeb0, _0x42754e, _0x4e877b) {
        for (var _0x4388d2, _0x2f2ee8, _0x2343f7, _0x226150, _0x3eec02 = _0x42839a['createDocumentFragment'](), _0x34471c = [], _0x182ca0 = 0x0, _0x4c0d1a = _0x3461d3['length']; _0x182ca0 < _0x4c0d1a; _0x182ca0++)
            if (_0x4388d2 = _0x3461d3[_0x182ca0], _0x4388d2 || 0x0 === _0x4388d2) {
                if ('object' === _0x3804bf['type'](_0x4388d2)) _0x3804bf['merge'](_0x34471c, _0x4388d2['nodeType'] ? [_0x4388d2] : _0x4388d2);
                else {
                    if (_0xed755['test'](_0x4388d2)) {
                        _0x2f2ee8 = _0x2f2ee8 || _0x3eec02['appendChild'](_0x42839a['createElement']('div')), _0x2343f7 = (_0x5d23ed['exec'](_0x4388d2) || ['', ''])[0x1]['toLowerCase'](), _0x2343f7 = _0x10e023[_0x2343f7] || _0x10e023['_default'], _0x2f2ee8['innerHTML'] = _0x2343f7[0x1] + _0x3804bf['htmlPrefilter'](_0x4388d2) + _0x2343f7[0x2];
                        for (_0x2343f7 = _0x2343f7[0x0]; _0x2343f7--;) _0x2f2ee8 = _0x2f2ee8['lastChild'];
                        _0x3804bf['merge'](_0x34471c, _0x2f2ee8['childNodes']), _0x2f2ee8 = _0x3eec02['firstChild'], _0x2f2ee8['textContent'] = '';
                    } else _0x34471c['push'](_0x42839a['createTextNode'](_0x4388d2));
                }
            }
        _0x3eec02['textContent'] = '';
        for (_0x182ca0 = 0x0; _0x4388d2 = _0x34471c[_0x182ca0++];)
            if (_0x42754e && -0x1 < _0x3804bf['inArray'](_0x4388d2, _0x42754e)) _0x4e877b && _0x4e877b['push'](_0x4388d2);
            else {
                if (_0x226150 = _0x3804bf['contains'](_0x4388d2['ownerDocument'], _0x4388d2), _0x2f2ee8 = _0x291148(_0x3eec02['appendChild'](_0x4388d2), 'script'), _0x226150 && _0x3e6a13(_0x2f2ee8), _0x4ffeb0) {
                    for (_0x2343f7 = 0x0; _0x4388d2 = _0x2f2ee8[_0x2343f7++];) _0x571d99['test'](_0x4388d2['type'] || '') && _0x4ffeb0['push'](_0x4388d2);
                }
            }
        return _0x3eec02;
    }

    function _0x67eb3c() {
        return !0x0;
    }

    function _0x42cb03() {
        return !0x1;
    }

    function _0x5af9f8() {
        try {
            return _0x45a45f['activeElement'];
        } catch (_0x4a8b46) {}
    }

    function _0x484c58(_0x2cc01b, _0x1e4db9, _0x40a303, _0x5dc5bb, _0xe28e6e, _0x29a481) {
        var _0x2e1476, _0x1a7d74;
        if ('object' == typeof _0x1e4db9) {
            'string' != typeof _0x40a303 && (_0x5dc5bb = _0x5dc5bb || _0x40a303, _0x40a303 = void 0x0);
            for (_0x1a7d74 in _0x1e4db9) _0x484c58(_0x2cc01b, _0x1a7d74, _0x40a303, _0x5dc5bb, _0x1e4db9[_0x1a7d74], _0x29a481);
            return _0x2cc01b;
        }
        if (null == _0x5dc5bb && null == _0xe28e6e ? (_0xe28e6e = _0x40a303, _0x5dc5bb = _0x40a303 = void 0x0) : null == _0xe28e6e && ('string' == typeof _0x40a303 ? (_0xe28e6e = _0x5dc5bb, _0x5dc5bb = void 0x0) : (_0xe28e6e = _0x5dc5bb, _0x5dc5bb = _0x40a303, _0x40a303 = void 0x0)), !0x1 === _0xe28e6e) _0xe28e6e = _0x42cb03;
        else {
            if (!_0xe28e6e) return _0x2cc01b;
        }
        return 0x1 === _0x29a481 && (_0x2e1476 = _0xe28e6e, _0xe28e6e = function(_0x265dc5) {
            return _0x3804bf()['off'](_0x265dc5), _0x2e1476['apply'](this, arguments);
        }, _0xe28e6e['guid'] = _0x2e1476['guid'] || (_0x2e1476['guid'] = _0x3804bf['guid']++)), _0x2cc01b['each'](function() {
            _0x3804bf['event']['add'](this, _0x1e4db9, _0xe28e6e, _0x5dc5bb, _0x40a303);
        });
    }

    function _0x3bd48b(_0x39f6b1, _0x15c330) {
        return _0x504a90(_0x39f6b1, 'table') && _0x504a90(0xb !== _0x15c330['nodeType'] ? _0x15c330 : _0x15c330['firstChild'], 'tr') ? _0x3804bf('>tbody', _0x39f6b1)[0x0] || _0x39f6b1 : _0x39f6b1;
    }

    function _0x3e3b19(_0x1693f3) {
        return _0x1693f3['type'] = (null !== _0x1693f3['getAttribute']('type')) + '/' + _0x1693f3['type'], _0x1693f3;
    }

    function _0x3cc668(_0x2ed40f) {
        var _0x174e3f = _0x47d23f['exec'](_0x2ed40f['type']);
        return _0x174e3f ? _0x2ed40f['type'] = _0x174e3f[0x1] : _0x2ed40f['removeAttribute']('type'), _0x2ed40f;
    }

    function _0x4b1c70(_0x1f38c3, _0x15e35b) {
        var _0x37b169, _0x1ff1bd, _0x5b82ca, _0x1cc310, _0x1dc4a7, _0x5d2150;
        if (0x1 === _0x15e35b['nodeType']) {
            if (_0x460f18['hasData'](_0x1f38c3) && (_0x37b169 = _0x460f18['access'](_0x1f38c3), _0x1ff1bd = _0x460f18['set'](_0x15e35b, _0x37b169), _0x5d2150 = _0x37b169['events']))
                for (_0x5b82ca in (delete _0x1ff1bd['handle'], _0x1ff1bd['events'] = {}, _0x5d2150)) {
                    _0x37b169 = 0x0;
                    for (_0x1ff1bd = _0x5d2150[_0x5b82ca]['length']; _0x37b169 < _0x1ff1bd; _0x37b169++) _0x3804bf['event']['add'](_0x15e35b, _0x5b82ca, _0x5d2150[_0x5b82ca][_0x37b169]);
                }
            _0x5dc0e2['hasData'](_0x1f38c3) && (_0x1cc310 = _0x5dc0e2['access'](_0x1f38c3), _0x1dc4a7 = _0x3804bf['extend']({}, _0x1cc310), _0x5dc0e2['set'](_0x15e35b, _0x1dc4a7));
        }
    }

    function _0x398c3e(_0x11c5bc, _0x428ca0, _0x516f23, _0xc45457) {
        _0x428ca0 = _0x44bf01['apply']([], _0x428ca0);
        var _0x475bdf, _0x5c735f, _0x4bad35, _0x59f517, _0x587e03 = 0x0,
            _0x19758d = _0x11c5bc['length'],
            _0x1ca2ae = _0x19758d - 0x1,
            _0x3d07ec = _0x428ca0[0x0],
            _0x202842 = _0x3804bf['isFunction'](_0x3d07ec);
        if (_0x202842 || 0x1 < _0x19758d && 'string' == typeof _0x3d07ec && !_0x3c9eda['checkClone'] && _0x218b9b['test'](_0x3d07ec)) return _0x11c5bc['each'](function(_0x33775a) {
            var _0xd9804 = _0x11c5bc['eq'](_0x33775a);
            _0x202842 && (_0x428ca0[0x0] = _0x3d07ec['call'](this, _0x33775a, _0xd9804['html']())), _0x398c3e(_0xd9804, _0x428ca0, _0x516f23, _0xc45457);
        });
        if (_0x19758d && (_0x475bdf = _0x2225ae(_0x428ca0, _0x11c5bc[0x0]['ownerDocument'], !0x1, _0x11c5bc, _0xc45457), _0x5c735f = _0x475bdf['firstChild'], 0x1 === _0x475bdf['childNodes']['length'] && (_0x475bdf = _0x5c735f), _0x5c735f || _0xc45457)) {
            _0x5c735f = _0x3804bf['map'](_0x291148(_0x475bdf, 'script'), _0x3e3b19);
            for (_0x4bad35 = _0x5c735f['length']; _0x587e03 < _0x19758d; _0x587e03++) _0x59f517 = _0x475bdf, _0x587e03 !== _0x1ca2ae && (_0x59f517 = _0x3804bf['clone'](_0x59f517, !0x0, !0x0), _0x4bad35 && _0x3804bf['merge'](_0x5c735f, _0x291148(_0x59f517, 'script'))), _0x516f23['call'](_0x11c5bc[_0x587e03], _0x59f517, _0x587e03);
            if (_0x4bad35) {
                _0x475bdf = _0x5c735f[_0x5c735f['length'] - 0x1]['ownerDocument'], _0x3804bf['map'](_0x5c735f, _0x3cc668);
                for (_0x587e03 = 0x0; _0x587e03 < _0x4bad35; _0x587e03++) _0x59f517 = _0x5c735f[_0x587e03], _0x571d99['test'](_0x59f517['type'] || '') && !_0x460f18['access'](_0x59f517, 'globalEval') && _0x3804bf['contains'](_0x475bdf, _0x59f517) && (_0x59f517['src'] ? _0x3804bf['_evalUrl'] && _0x3804bf['_evalUrl'](_0x59f517['src']) : _0x3de900(_0x59f517['textContent']['replace'](_0x56e048, ''), _0x475bdf));
            }
        }
        return _0x11c5bc;
    }

    function _0x5a25c3(_0x323977, _0x2d818f, _0x4354c3) {
        for (var _0x1b4432 = _0x2d818f ? _0x3804bf['filter'](_0x2d818f, _0x323977) : _0x323977, _0x31027e = 0x0; null != (_0x2d818f = _0x1b4432[_0x31027e]); _0x31027e++) _0x4354c3 || 0x1 !== _0x2d818f['nodeType'] || _0x3804bf['cleanData'](_0x291148(_0x2d818f)), _0x2d818f['parentNode'] && (_0x4354c3 && _0x3804bf['contains'](_0x2d818f['ownerDocument'], _0x2d818f) && _0x3e6a13(_0x291148(_0x2d818f, 'script')), _0x2d818f['parentNode']['removeChild'](_0x2d818f));
        return _0x323977;
    }

    function _0x4d26b1(_0x4389ab, _0x49a036, _0x44782c) {
        var _0x3ff4d4, _0xd5885a, _0x4b12ae, _0x301eef, _0x7c91be = _0x4389ab['style'];
        return _0x44782c = _0x44782c || _0x10a82b(_0x4389ab), _0x44782c && (_0x301eef = _0x44782c['getPropertyValue'](_0x49a036) || _0x44782c[_0x49a036], '' !== _0x301eef || _0x3804bf['contains'](_0x4389ab['ownerDocument'], _0x4389ab) || (_0x301eef = _0x3804bf['style'](_0x4389ab, _0x49a036)), !_0x3c9eda['pixelMarginRight']() && _0x49c252['test'](_0x301eef) && _0x3cc2f5['test'](_0x49a036) && (_0x3ff4d4 = _0x7c91be['width'], _0xd5885a = _0x7c91be['minWidth'], _0x4b12ae = _0x7c91be['maxWidth'], _0x7c91be['minWidth'] = _0x7c91be['maxWidth'] = _0x7c91be['width'] = _0x301eef, _0x301eef = _0x44782c['width'], _0x7c91be['width'] = _0x3ff4d4, _0x7c91be['minWidth'] = _0xd5885a, _0x7c91be['maxWidth'] = _0x4b12ae)), void 0x0 !== _0x301eef ? _0x301eef + '' : _0x301eef;
    }

    function _0xdb814f(_0x3a372e, _0x347259) {
        return {
            'get': function() {
                return _0x3a372e() ? void delete this['get'] : (this['get'] = _0x347259)['apply'](this, arguments);
            }
        };
    }

    function _0x49fe9e(_0x6a8dac) {
        var _0x4b77de = _0x3804bf['cssProps'][_0x6a8dac];
        if (!_0x4b77de) {
            var _0x4b77de = _0x3804bf['cssProps'],
                _0x4e45f7;
            _0x434ee0: if (_0x4e45f7 = _0x6a8dac, !(_0x4e45f7 in _0x14181b)) {
                for (var _0x280ae4 = _0x4e45f7[0x0]['toUpperCase']() + _0x4e45f7['slice'](0x1), _0x1256b3 = _0x5c5b35['length']; _0x1256b3--;)
                    if (_0x4e45f7 = _0x5c5b35[_0x1256b3] + _0x280ae4, _0x4e45f7 in _0x14181b) break _0x434ee0;
                _0x4e45f7 = void 0x0;
            }
            _0x4b77de = _0x4b77de[_0x6a8dac] = _0x4e45f7 || _0x6a8dac;
        }
        return _0x4b77de;
    }

    function _0x240247(_0x2bfa70, _0x215fad, _0x4a5c19) {
        return (_0x2bfa70 = _0x142d0a['exec'](_0x215fad)) ? Math['max'](0x0, _0x2bfa70[0x2] - (_0x4a5c19 || 0x0)) + (_0x2bfa70[0x3] || 'px') : _0x215fad;
    }

    function _0x5953dd(_0x4279b1, _0x863877, _0x364f4a, _0x46e9b8, _0x3f4cd3) {
        var _0x34a901 = 0x0;
        for (_0x863877 = _0x364f4a === (_0x46e9b8 ? 'border' : 'content') ? 0x4 : 'width' === _0x863877 ? 0x1 : 0x0; 0x4 > _0x863877; _0x863877 += 0x2) 'margin' === _0x364f4a && (_0x34a901 += _0x3804bf['css'](_0x4279b1, _0x364f4a + _0x65c818[_0x863877], !0x0, _0x3f4cd3)), _0x46e9b8 ? ('content' === _0x364f4a && (_0x34a901 -= _0x3804bf['css'](_0x4279b1, 'padding' + _0x65c818[_0x863877], !0x0, _0x3f4cd3)), 'margin' !== _0x364f4a && (_0x34a901 -= _0x3804bf['css'](_0x4279b1, 'border' + _0x65c818[_0x863877] + 'Width', !0x0, _0x3f4cd3))) : (_0x34a901 += _0x3804bf['css'](_0x4279b1, 'padding' + _0x65c818[_0x863877], !0x0, _0x3f4cd3), 'padding' !== _0x364f4a && (_0x34a901 += _0x3804bf['css'](_0x4279b1, 'border' + _0x65c818[_0x863877] + 'Width', !0x0, _0x3f4cd3)));
        return _0x34a901;
    }

    function _0x1288ab(_0x174939, _0x429d60, _0x19c3d4) {
        var _0x18a7cb, _0x460903 = _0x10a82b(_0x174939),
            _0x2b2dd6 = _0x4d26b1(_0x174939, _0x429d60, _0x460903),
            _0x40f34c = 'border-box' === _0x3804bf['css'](_0x174939, 'boxSizing', !0x1, _0x460903);
        return _0x49c252['test'](_0x2b2dd6) ? _0x2b2dd6 : (_0x18a7cb = _0x40f34c && (_0x3c9eda['boxSizingReliable']() || _0x2b2dd6 === _0x174939['style'][_0x429d60]), 'auto' === _0x2b2dd6 && (_0x2b2dd6 = _0x174939['offset' + _0x429d60[0x0]['toUpperCase']() + _0x429d60['slice'](0x1)]), _0x2b2dd6 = parseFloat(_0x2b2dd6) || 0x0, _0x2b2dd6 + _0x5953dd(_0x174939, _0x429d60, _0x19c3d4 || (_0x40f34c ? 'border' : 'content'), _0x18a7cb, _0x460903) + 'px');
    }

    function _0x3e0ef9(_0x1fd151, _0x39010f, _0xfe70b8, _0x502bff, _0xf9bcb9) {
        return new _0x3e0ef9['prototype']['init'](_0x1fd151, _0x39010f, _0xfe70b8, _0x502bff, _0xf9bcb9);
    }

    function _0x2c888b() {
        _0x3f83b && (!0x1 === _0x45a45f['hidden'] && _0x27d1a6['requestAnimationFrame'] ? _0x27d1a6['requestAnimationFrame'](_0x2c888b) : _0x27d1a6['setTimeout'](_0x2c888b, _0x3804bf['fx']['interval']), _0x3804bf['fx']['tick']());
    }

    function _0x1008eb() {
        return _0x27d1a6['setTimeout'](function() {
            _0x28d216 = void 0x0;
        }), _0x28d216 = _0x3804bf['now']();
    }

    function _0x261257(_0x37a3b8, _0x56c605) {
        var _0x5cc2c9, _0x427736 = 0x0,
            _0x46d52b = {
                'height': _0x37a3b8
            };
        for (_0x56c605 = _0x56c605 ? 0x1 : 0x0; 0x4 > _0x427736; _0x427736 += 0x2 - _0x56c605) _0x5cc2c9 = _0x65c818[_0x427736], _0x46d52b['margin' + _0x5cc2c9] = _0x46d52b['padding' + _0x5cc2c9] = _0x37a3b8;
        return _0x56c605 && (_0x46d52b['opacity'] = _0x46d52b['width'] = _0x37a3b8), _0x46d52b;
    }

    function _0x2e4341(_0x56a7d2, _0x3404b1, _0x252e18) {
        for (var _0x4aaea2, _0x129eaf = (_0x56e01d['tweeners'][_0x3404b1] || [])['concat'](_0x56e01d['tweeners']['*']), _0x51a6b8 = 0x0, _0x11b3b7 = _0x129eaf['length']; _0x51a6b8 < _0x11b3b7; _0x51a6b8++)
            if (_0x4aaea2 = _0x129eaf[_0x51a6b8]['call'](_0x252e18, _0x3404b1, _0x56a7d2)) return _0x4aaea2;
    }

    function _0x56e01d(_0xf9c44d, _0x29abcb, _0x353a7c) {
        var _0x3ccd66, _0x51e575, _0x5a005e = 0x0,
            _0x514573 = _0x56e01d['prefilters']['length'],
            _0x2a4e8d = _0x3804bf['Deferred']()['always'](function() {
                delete _0x4945a7['elem'];
            }),
            _0x4945a7 = function() {
                if (_0x51e575) return !0x1;
                for (var _0x5e7e13 = _0x28d216 || _0x1008eb(), _0x5e7e13 = Math['max'](0x0, _0x3a6cc9['startTime'] + _0x3a6cc9['duration'] - _0x5e7e13), _0x5006ef = 0x1 - (_0x5e7e13 / _0x3a6cc9['duration'] || 0x0), _0x21b391 = 0x0, _0x26ef6d = _0x3a6cc9['tweens']['length']; _0x21b391 < _0x26ef6d; _0x21b391++) _0x3a6cc9['tweens'][_0x21b391]['run'](_0x5006ef);
                return _0x2a4e8d['notifyWith'](_0xf9c44d, [_0x3a6cc9, _0x5006ef, _0x5e7e13]), 0x1 > _0x5006ef && _0x26ef6d ? _0x5e7e13 : (_0x26ef6d || _0x2a4e8d['notifyWith'](_0xf9c44d, [_0x3a6cc9, 0x1, 0x0]), _0x2a4e8d['resolveWith'](_0xf9c44d, [_0x3a6cc9]), !0x1);
            },
            _0x3a6cc9 = _0x2a4e8d['promise']({
                'elem': _0xf9c44d,
                'props': _0x3804bf['extend']({}, _0x29abcb),
                'opts': _0x3804bf['extend'](!0x0, {
                    'specialEasing': {},
                    'easing': _0x3804bf['easing']['_default']
                }, _0x353a7c),
                'originalProperties': _0x29abcb,
                'originalOptions': _0x353a7c,
                'startTime': _0x28d216 || _0x1008eb(),
                'duration': _0x353a7c['duration'],
                'tweens': [],
                'createTween': function(_0x259816, _0x3c5b98) {
                    var _0x186915 = _0x3804bf['Tween'](_0xf9c44d, _0x3a6cc9['opts'], _0x259816, _0x3c5b98, _0x3a6cc9['opts']['specialEasing'][_0x259816] || _0x3a6cc9['opts']['easing']);
                    return _0x3a6cc9['tweens']['push'](_0x186915), _0x186915;
                },
                'stop': function(_0x3f5441) {
                    var _0x3fab45 = 0x0,
                        _0x4f847c = _0x3f5441 ? _0x3a6cc9['tweens']['length'] : 0x0;
                    if (_0x51e575) return this;
                    for (_0x51e575 = !0x0; _0x3fab45 < _0x4f847c; _0x3fab45++) _0x3a6cc9['tweens'][_0x3fab45]['run'](0x1);
                    return _0x3f5441 ? (_0x2a4e8d['notifyWith'](_0xf9c44d, [_0x3a6cc9, 0x1, 0x0]), _0x2a4e8d['resolveWith'](_0xf9c44d, [_0x3a6cc9, _0x3f5441])) : _0x2a4e8d['rejectWith'](_0xf9c44d, [_0x3a6cc9, _0x3f5441]), this;
                }
            });
        _0x29abcb = _0x3a6cc9['props'], _0x353a7c = _0x3a6cc9['opts']['specialEasing'];
        var _0x26ddb9, _0x560181, _0x240735, _0x40f859;
        for (_0x3ccd66 in _0x29abcb)
            if (_0x26ddb9 = _0x3804bf['camelCase'](_0x3ccd66), _0x560181 = _0x353a7c[_0x26ddb9], _0x240735 = _0x29abcb[_0x3ccd66], Array['isArray'](_0x240735) && (_0x560181 = _0x240735[0x1], _0x240735 = _0x29abcb[_0x3ccd66] = _0x240735[0x0]), _0x3ccd66 !== _0x26ddb9 && (_0x29abcb[_0x26ddb9] = _0x240735, delete _0x29abcb[_0x3ccd66]), _0x40f859 = _0x3804bf['cssHooks'][_0x26ddb9], _0x40f859 && 'expand' in _0x40f859) {
                for (_0x3ccd66 in (_0x240735 = _0x40f859['expand'](_0x240735), delete _0x29abcb[_0x26ddb9], _0x240735)) _0x3ccd66 in _0x29abcb || (_0x29abcb[_0x3ccd66] = _0x240735[_0x3ccd66], _0x353a7c[_0x3ccd66] = _0x560181);
            } else _0x353a7c[_0x26ddb9] = _0x560181;
        for (; _0x5a005e < _0x514573; _0x5a005e++)
            if (_0x3ccd66 = _0x56e01d['prefilters'][_0x5a005e]['call'](_0x3a6cc9, _0xf9c44d, _0x29abcb, _0x3a6cc9['opts'])) return _0x3804bf['isFunction'](_0x3ccd66['stop']) && (_0x3804bf['_queueHooks'](_0x3a6cc9['elem'], _0x3a6cc9['opts']['queue'])['stop'] = _0x3804bf['proxy'](_0x3ccd66['stop'], _0x3ccd66)), _0x3ccd66;
        return _0x3804bf['map'](_0x29abcb, _0x2e4341, _0x3a6cc9), _0x3804bf['isFunction'](_0x3a6cc9['opts']['start']) && _0x3a6cc9['opts']['start']['call'](_0xf9c44d, _0x3a6cc9), _0x3a6cc9['progress'](_0x3a6cc9['opts']['progress'])['done'](_0x3a6cc9['opts']['done'], _0x3a6cc9['opts']['complete'])['fail'](_0x3a6cc9['opts']['fail'])['always'](_0x3a6cc9['opts']['always']), _0x3804bf['fx']['timer'](_0x3804bf['extend'](_0x4945a7, {
            'elem': _0xf9c44d,
            'anim': _0x3a6cc9,
            'queue': _0x3a6cc9['opts']['queue']
        })), _0x3a6cc9;
    }

    function _0x4469bf(_0x3a2a9b) {
        return (_0x3a2a9b['match'](_0x3ac1b9) || [])['join']('\x20');
    }

    function _0x5e6346(_0x891527) {
        return _0x891527['getAttribute'] && _0x891527['getAttribute']('class') || '';
    }

    function _0x4ae4e2(_0xe2534a, _0x1aab79, _0x17d13e, _0x3136a0) {
        var _0x370a6f;
        if (Array['isArray'](_0x1aab79)) _0x3804bf['each'](_0x1aab79, function(_0x55e453, _0x444733) {
            _0x17d13e || _0x5db6ef['test'](_0xe2534a) ? _0x3136a0(_0xe2534a, _0x444733) : _0x4ae4e2(_0xe2534a + '[' + ('object' == typeof _0x444733 && null != _0x444733 ? _0x55e453 : '') + ']', _0x444733, _0x17d13e, _0x3136a0);
        });
        else {
            if (_0x17d13e || 'object' !== _0x3804bf['type'](_0x1aab79)) _0x3136a0(_0xe2534a, _0x1aab79);
            else {
                for (_0x370a6f in _0x1aab79) _0x4ae4e2(_0xe2534a + '[' + _0x370a6f + ']', _0x1aab79[_0x370a6f], _0x17d13e, _0x3136a0);
            }
        }
    }

    function _0x3102d5(_0x24a4f3) {
        return function(_0x217190, _0x3dd6cb) {
            'string' != typeof _0x217190 && (_0x3dd6cb = _0x217190, _0x217190 = '*');
            var _0x4db7c3, _0x477afa = 0x0,
                _0x43f90c = _0x217190['toLowerCase']()['match'](_0x3ac1b9) || [];
            if (_0x3804bf['isFunction'](_0x3dd6cb)) {
                for (; _0x4db7c3 = _0x43f90c[_0x477afa++];) '+' === _0x4db7c3[0x0] ? (_0x4db7c3 = _0x4db7c3['slice'](0x1) || '*', (_0x24a4f3[_0x4db7c3] = _0x24a4f3[_0x4db7c3] || [])['unshift'](_0x3dd6cb)) : (_0x24a4f3[_0x4db7c3] = _0x24a4f3[_0x4db7c3] || [])['push'](_0x3dd6cb);
            }
        };
    }

    function _0x3e50d6(_0x3b7664, _0x2b51bd, _0x1e4769, _0x12ab4d) {
        function _0x30c552(_0x2567cc) {
            var _0x1f9d29;
            return _0x3813cb[_0x2567cc] = !0x0, _0x3804bf['each'](_0x3b7664[_0x2567cc] || [], function(_0x3b2630, _0x20c1f1) {
                var _0x4f3385 = _0x20c1f1(_0x2b51bd, _0x1e4769, _0x12ab4d);
                return 'string' != typeof _0x4f3385 || _0x565c94 || _0x3813cb[_0x4f3385] ? _0x565c94 ? !(_0x1f9d29 = _0x4f3385) : void 0x0 : (_0x2b51bd['dataTypes']['unshift'](_0x4f3385), _0x30c552(_0x4f3385), !0x1);
            }), _0x1f9d29;
        }
        var _0x3813cb = {},
            _0x565c94 = _0x3b7664 === _0x12763a;
        return _0x30c552(_0x2b51bd['dataTypes'][0x0]) || !_0x3813cb['*'] && _0x30c552('*');
    }

    function _0x497ddf(_0x5afef4, _0x32522f) {
        var _0x32cffe, _0x1ec5bb, _0x1b8e69 = _0x3804bf['ajaxSettings']['flatOptions'] || {};
        for (_0x32cffe in _0x32522f) void 0x0 !== _0x32522f[_0x32cffe] && ((_0x1b8e69[_0x32cffe] ? _0x5afef4 : _0x1ec5bb || (_0x1ec5bb = {}))[_0x32cffe] = _0x32522f[_0x32cffe]);
        return _0x1ec5bb && _0x3804bf['extend'](!0x0, _0x5afef4, _0x1ec5bb), _0x5afef4;
    }
    var _0x32b0ae = [],
        _0x45a45f = _0x27d1a6['document'],
        _0x15f917 = Object['getPrototypeOf'],
        _0x600aa4 = _0x32b0ae['slice'],
        _0x44bf01 = _0x32b0ae['concat'],
        _0x54c40a = _0x32b0ae['push'],
        _0x20e096 = _0x32b0ae['indexOf'],
        _0x9d5de5 = {},
        _0x3406d0 = _0x9d5de5['toString'],
        _0x15e682 = _0x9d5de5['hasOwnProperty'],
        _0x22e2a7 = _0x15e682['toString'],
        _0x54da44 = _0x22e2a7['call'](Object),
        _0x3c9eda = {},
        _0x3804bf = function(_0x3b3a05, _0x3562e5) {
            return new _0x3804bf['fn']['init'](_0x3b3a05, _0x3562e5);
        },
        _0x1eb93d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        _0x4448d1 = /^-ms-/,
        _0x46b433 = /-([a-z])/g,
        _0x3bd0a1 = function(_0x23d874, _0x3382ec) {
            return _0x3382ec['toUpperCase']();
        };
    _0x3804bf['fn'] = _0x3804bf['prototype'] = {
        'jquery': '3.2.1',
        'constructor': _0x3804bf,
        'length': 0x0,
        'toArray': function() {
            return _0x600aa4['call'](this);
        },
        'get': function(_0x3f831f) {
            return null == _0x3f831f ? _0x600aa4['call'](this) : 0x0 > _0x3f831f ? this[_0x3f831f + this['length']] : this[_0x3f831f];
        },
        'pushStack': function(_0x1decd3) {
            return _0x1decd3 = _0x3804bf['merge'](this['constructor'](), _0x1decd3), (_0x1decd3['prevObject'] = this, _0x1decd3);
        },
        'each': function(_0x2d9efa) {
            return _0x3804bf['each'](this, _0x2d9efa);
        },
        'map': function(_0x461f0a) {
            return this['pushStack'](_0x3804bf['map'](this, function(_0x209f97, _0x4d7ff6) {
                return _0x461f0a['call'](_0x209f97, _0x4d7ff6, _0x209f97);
            }));
        },
        'slice': function() {
            return this['pushStack'](_0x600aa4['apply'](this, arguments));
        },
        'first': function() {
            return this['eq'](0x0);
        },
        'last': function() {
            return this['eq'](-0x1);
        },
        'eq': function(_0x324980) {
            var _0x1fab52 = this['length'];
            return _0x324980 = +_0x324980 + (0x0 > _0x324980 ? _0x1fab52 : 0x0), this['pushStack'](0x0 <= _0x324980 && _0x324980 < _0x1fab52 ? [this[_0x324980]] : []);
        },
        'end': function() {
            return this['prevObject'] || this['constructor']();
        },
        'push': _0x54c40a,
        'sort': _0x32b0ae['sort'],
        'splice': _0x32b0ae['splice']
    }, _0x3804bf['extend'] = _0x3804bf['fn']['extend'] = function() {
        var _0x4dd865, _0x305bab, _0x476bc2, _0x5eeb9c, _0x34ef45, _0x25cd1b, _0x176916 = arguments[0x0] || {},
            _0x2739b2 = 0x1,
            _0x1a0478 = arguments['length'],
            _0x1b5ee6 = !0x1;
        'boolean' == typeof _0x176916 && (_0x1b5ee6 = _0x176916, _0x176916 = arguments[_0x2739b2] || {}, _0x2739b2++), 'object' == typeof _0x176916 || _0x3804bf['isFunction'](_0x176916) || (_0x176916 = {});
        for (_0x2739b2 === _0x1a0478 && (_0x176916 = this, _0x2739b2--); _0x2739b2 < _0x1a0478; _0x2739b2++)
            if (null != (_0x4dd865 = arguments[_0x2739b2])) {
                for (_0x305bab in _0x4dd865) _0x476bc2 = _0x176916[_0x305bab], _0x5eeb9c = _0x4dd865[_0x305bab], _0x176916 !== _0x5eeb9c && (_0x1b5ee6 && _0x5eeb9c && (_0x3804bf['isPlainObject'](_0x5eeb9c) || (_0x34ef45 = Array['isArray'](_0x5eeb9c))) ? (_0x34ef45 ? (_0x34ef45 = !0x1, _0x25cd1b = _0x476bc2 && Array['isArray'](_0x476bc2) ? _0x476bc2 : []) : _0x25cd1b = _0x476bc2 && _0x3804bf['isPlainObject'](_0x476bc2) ? _0x476bc2 : {}, _0x176916[_0x305bab] = _0x3804bf['extend'](_0x1b5ee6, _0x25cd1b, _0x5eeb9c)) : void 0x0 !== _0x5eeb9c && (_0x176916[_0x305bab] = _0x5eeb9c));
            }
        return _0x176916;
    }, _0x3804bf['extend']({
        'expando': 'jQuery' + ('3.2.1' + Math['random']())['replace'](/\D/g, ''),
        'isReady': !0x0,
        'error': function(_0xb37112) {
            throw Error(_0xb37112);
        },
        'noop': function() {},
        'isFunction': function(_0x59ac8c) {
            return 'function' === _0x3804bf['type'](_0x59ac8c);
        },
        'isWindow': function(_0xf696e) {
            return null != _0xf696e && _0xf696e === _0xf696e['window'];
        },
        'isNumeric': function(_0xdedc97) {
            var _0x44021c = _0x3804bf['type'](_0xdedc97);
            return ('number' === _0x44021c || 'string' === _0x44021c) && !isNaN(_0xdedc97 - parseFloat(_0xdedc97));
        },
        'isPlainObject': function(_0x19cbd3) {
            var _0x58e72c, _0x2fb8d8;
            return !(!_0x19cbd3 || '[object\x20Object]' !== _0x3406d0['call'](_0x19cbd3)) && (!(_0x58e72c = _0x15f917(_0x19cbd3)) || (_0x2fb8d8 = _0x15e682['call'](_0x58e72c, 'constructor') && _0x58e72c['constructor'], 'function' == typeof _0x2fb8d8 && _0x22e2a7['call'](_0x2fb8d8) === _0x54da44));
        },
        'isEmptyObject': function(_0x258abb) {
            for (var _0x10c485 in _0x258abb) return !0x1;
            return !0x0;
        },
        'type': function(_0x31fcee) {
            return null == _0x31fcee ? _0x31fcee + '' : 'object' == typeof _0x31fcee || 'function' == typeof _0x31fcee ? _0x9d5de5[_0x3406d0['call'](_0x31fcee)] || 'object' : typeof _0x31fcee;
        },
        'globalEval': function(_0x2f97eb) {
            _0x3de900(_0x2f97eb);
        },
        'camelCase': function(_0x35e854) {
            return _0x35e854['replace'](_0x4448d1, 'ms-')['replace'](_0x46b433, _0x3bd0a1);
        },
        'each': function(_0x23ab95, _0x29de64) {
            var _0x3b0ffb, _0x418905 = 0x0;
            if (_0x52e6a1(_0x23ab95)) {
                for (_0x3b0ffb = _0x23ab95['length']; _0x418905 < _0x3b0ffb && !0x1 !== _0x29de64['call'](_0x23ab95[_0x418905], _0x418905, _0x23ab95[_0x418905]); _0x418905++);
            } else {
                for (_0x418905 in _0x23ab95)
                    if (!0x1 === _0x29de64['call'](_0x23ab95[_0x418905], _0x418905, _0x23ab95[_0x418905])) break;
            }
            return _0x23ab95;
        },
        'trim': function(_0x3760b9) {
            return null == _0x3760b9 ? '' : (_0x3760b9 + '')['replace'](_0x1eb93d, '');
        },
        'makeArray': function(_0x101589, _0x1d91a2) {
            var _0x445cd3 = _0x1d91a2 || [];
            return null != _0x101589 && (_0x52e6a1(Object(_0x101589)) ? _0x3804bf['merge'](_0x445cd3, 'string' == typeof _0x101589 ? [_0x101589] : _0x101589) : _0x54c40a['call'](_0x445cd3, _0x101589)), _0x445cd3;
        },
        'inArray': function(_0x255007, _0x295dee, _0x5d577b) {
            return null == _0x295dee ? -0x1 : _0x20e096['call'](_0x295dee, _0x255007, _0x5d577b);
        },
        'merge': function(_0x4e29f3, _0x1d4f44) {
            for (var _0x127e66 = +_0x1d4f44['length'], _0x117cc1 = 0x0, _0x10b7bb = _0x4e29f3['length']; _0x117cc1 < _0x127e66; _0x117cc1++) _0x4e29f3[_0x10b7bb++] = _0x1d4f44[_0x117cc1];
            return _0x4e29f3['length'] = _0x10b7bb, _0x4e29f3;
        },
        'grep': function(_0x403a78, _0x35e28d, _0x2d2904) {
            for (var _0x3e1240 = [], _0x424993 = 0x0, _0x4761ad = _0x403a78['length'], _0x3ca0e5 = !_0x2d2904; _0x424993 < _0x4761ad; _0x424993++) _0x2d2904 = !_0x35e28d(_0x403a78[_0x424993], _0x424993), _0x2d2904 !== _0x3ca0e5 && _0x3e1240['push'](_0x403a78[_0x424993]);
            return _0x3e1240;
        },
        'map': function(_0x5d649f, _0x2472dc, _0x3bcd72) {
            var _0x56800a, _0x4169a8, _0x4eadc4 = 0x0,
                _0x229147 = [];
            if (_0x52e6a1(_0x5d649f)) {
                for (_0x56800a = _0x5d649f['length']; _0x4eadc4 < _0x56800a; _0x4eadc4++) _0x4169a8 = _0x2472dc(_0x5d649f[_0x4eadc4], _0x4eadc4, _0x3bcd72), null != _0x4169a8 && _0x229147['push'](_0x4169a8);
            } else {
                for (_0x4eadc4 in _0x5d649f) _0x4169a8 = _0x2472dc(_0x5d649f[_0x4eadc4], _0x4eadc4, _0x3bcd72), null != _0x4169a8 && _0x229147['push'](_0x4169a8);
            }
            return _0x44bf01['apply']([], _0x229147);
        },
        'guid': 0x1,
        'proxy': function(_0x1c6508, _0x4c36f3) {
            var _0x3e6f94, _0x54ef6f, _0x25fe62;
            if ('string' == typeof _0x4c36f3 && (_0x3e6f94 = _0x1c6508[_0x4c36f3], _0x4c36f3 = _0x1c6508, _0x1c6508 = _0x3e6f94), _0x3804bf['isFunction'](_0x1c6508)) return _0x54ef6f = _0x600aa4['call'](arguments, 0x2), _0x25fe62 = function() {
                return _0x1c6508['apply'](_0x4c36f3 || this, _0x54ef6f['concat'](_0x600aa4['call'](arguments)));
            }, _0x25fe62['guid'] = _0x1c6508['guid'] = _0x1c6508['guid'] || _0x3804bf['guid']++, _0x25fe62;
        },
        'now': Date['now'],
        'support': _0x3c9eda
    }), 'function' == typeof Symbol && (_0x3804bf['fn'][Symbol['iterator']] = _0x32b0ae[Symbol['iterator']]), _0x3804bf['each']('Boolean\x20Number\x20String\x20Function\x20Array\x20Date\x20RegExp\x20Object\x20Error\x20Symbol' ['split']('\x20'), function(_0x4f742c, _0x12ec51) {
        _0x9d5de5['[object\x20' + _0x12ec51 + ']'] = _0x12ec51['toLowerCase']();
    });
    var _0x36534b, _0x204d1a = _0x27d1a6,
        _0x50f9d0 = function(_0x53540b, _0x7d4277, _0x2c5b72, _0x329c10) {
            var _0x588fe1, _0x26cd19, _0x5911f5, _0x6f28f9, _0x554b35, _0x201e96 = _0x7d4277 && _0x7d4277['ownerDocument'],
                _0x432ccc = _0x7d4277 ? _0x7d4277['nodeType'] : 0x9;
            if (_0x2c5b72 = _0x2c5b72 || [], 'string' != typeof _0x53540b || !_0x53540b || 0x1 !== _0x432ccc && 0x9 !== _0x432ccc && 0xb !== _0x432ccc) return _0x2c5b72;
            if (!_0x329c10 && ((_0x7d4277 ? _0x7d4277['ownerDocument'] || _0x7d4277 : _0xfdc3ae) !== _0x579ada && _0x36ab86(_0x7d4277), _0x7d4277 = _0x7d4277 || _0x579ada, _0x174b89)) {
                if (0xb !== _0x432ccc && (_0x6f28f9 = _0x73da7b['exec'](_0x53540b))) {
                    if (_0x588fe1 = _0x6f28f9[0x1]) {
                        if (0x9 === _0x432ccc) {
                            if (!(_0x26cd19 = _0x7d4277['getElementById'](_0x588fe1))) return _0x2c5b72;
                            if (_0x26cd19['id'] === _0x588fe1) return _0x2c5b72['push'](_0x26cd19), _0x2c5b72;
                        } else {
                            if (_0x201e96 && (_0x26cd19 = _0x201e96['getElementById'](_0x588fe1)) && _0x2d9cc7(_0x7d4277, _0x26cd19) && _0x26cd19['id'] === _0x588fe1) return _0x2c5b72['push'](_0x26cd19), _0x2c5b72;
                        }
                    } else {
                        if (_0x6f28f9[0x2]) return _0x4d253d['apply'](_0x2c5b72, _0x7d4277['getElementsByTagName'](_0x53540b)), _0x2c5b72;
                        if ((_0x588fe1 = _0x6f28f9[0x3]) && _0x52753c['getElementsByClassName'] && _0x7d4277['getElementsByClassName']) return _0x4d253d['apply'](_0x2c5b72, _0x7d4277['getElementsByClassName'](_0x588fe1)), _0x2c5b72;
                    }
                }
                if (_0x52753c['qsa'] && !_0x5a3c9c[_0x53540b + '\x20'] && (!_0x18bd6a || !_0x18bd6a['test'](_0x53540b))) {
                    if (0x1 !== _0x432ccc) _0x201e96 = _0x7d4277, _0x554b35 = _0x53540b;
                    else {
                        if ('object' !== _0x7d4277['nodeName']['toLowerCase']()) {
                            (_0x5911f5 = _0x7d4277['getAttribute']('id')) ? _0x5911f5 = _0x5911f5['replace'](_0x579819, _0x41702c): _0x7d4277['setAttribute']('id', _0x5911f5 = _0xccc272), _0x26cd19 = _0x55e1b9(_0x53540b);
                            for (_0x588fe1 = _0x26cd19['length']; _0x588fe1--;) _0x26cd19[_0x588fe1] = '#' + _0x5911f5 + '\x20' + _0x30bbec(_0x26cd19[_0x588fe1]);
                            _0x554b35 = _0x26cd19['join'](','), _0x201e96 = _0x557928['test'](_0x53540b) && _0x777ee7(_0x7d4277['parentNode']) || _0x7d4277;
                        }
                    }
                    if (_0x554b35) try {
                        return _0x4d253d['apply'](_0x2c5b72, _0x201e96['querySelectorAll'](_0x554b35)), _0x2c5b72;
                    } catch (_0x2bdf60) {} finally {
                        _0x5911f5 === _0xccc272 && _0x7d4277['removeAttribute']('id');
                    }
                }
            }
            return _0x55478e(_0x53540b['replace'](_0x307c4c, '$1'), _0x7d4277, _0x2c5b72, _0x329c10);
        },
        _0x4dd189 = function() {
            function _0x317a3e(_0x1ea624, _0x21ed46) {
                return _0x54fab0['push'](_0x1ea624 + '\x20') > _0xa4675b['cacheLength'] && delete _0x317a3e[_0x54fab0['shift']()], _0x317a3e[_0x1ea624 + '\x20'] = _0x21ed46;
            }
            var _0x54fab0 = [];
            return _0x317a3e;
        },
        _0x28dd72 = function(_0x4980fb) {
            return _0x4980fb[_0xccc272] = !0x0, _0x4980fb;
        },
        _0x1cd257 = function(_0x427520) {
            var _0x4331fb = _0x579ada['createElement']('fieldset');
            try {
                return !!_0x427520(_0x4331fb);
            } catch (_0x1956a9) {
                return !0x1;
            } finally {
                _0x4331fb['parentNode'] && _0x4331fb['parentNode']['removeChild'](_0x4331fb);
            }
        },
        _0x738a73 = function(_0x1c95c7, _0x5e1874) {
            for (var _0x5acd26 = _0x1c95c7['split']('|'), _0x36f067 = _0x5acd26['length']; _0x36f067--;) _0xa4675b['attrHandle'][_0x5acd26[_0x36f067]] = _0x5e1874;
        },
        _0x285001 = function(_0x5f411d, _0x31eac3) {
            var _0x43bc4b = _0x31eac3 && _0x5f411d,
                _0x56a403 = _0x43bc4b && 0x1 === _0x5f411d['nodeType'] && 0x1 === _0x31eac3['nodeType'] && _0x5f411d['sourceIndex'] - _0x31eac3['sourceIndex'];
            if (_0x56a403) return _0x56a403;
            if (_0x43bc4b) {
                for (; _0x43bc4b = _0x43bc4b['nextSibling'];)
                    if (_0x43bc4b === _0x31eac3) return -0x1;
            }
            return _0x5f411d ? 0x1 : -0x1;
        },
        _0x4ed270 = function(_0x88a590) {
            return function(_0x1e87e5) {
                return 'input' === _0x1e87e5['nodeName']['toLowerCase']() && _0x1e87e5['type'] === _0x88a590;
            };
        },
        _0xa1e3b7 = function(_0x200614) {
            return function(_0x55f1ab) {
                var _0x4a42da = _0x55f1ab['nodeName']['toLowerCase']();
                return ('input' === _0x4a42da || 'button' === _0x4a42da) && _0x55f1ab['type'] === _0x200614;
            };
        },
        _0x12870c = function(_0x1836a2) {
            return function(_0x1c2d2f) {
                return 'form' in _0x1c2d2f ? _0x1c2d2f['parentNode'] && !0x1 === _0x1c2d2f['disabled'] ? 'label' in _0x1c2d2f ? 'label' in _0x1c2d2f['parentNode'] ? _0x1c2d2f['parentNode']['disabled'] === _0x1836a2 : _0x1c2d2f['disabled'] === _0x1836a2 : _0x1c2d2f['isDisabled'] === _0x1836a2 || _0x1c2d2f['isDisabled'] !== !_0x1836a2 && _0xa6426e(_0x1c2d2f) === _0x1836a2 : _0x1c2d2f['disabled'] === _0x1836a2 : 'label' in _0x1c2d2f && _0x1c2d2f['disabled'] === _0x1836a2;
            };
        },
        _0x1ad509 = function(_0x52fed0) {
            return _0x28dd72(function(_0x2e718e) {
                return _0x2e718e = +_0x2e718e, _0x28dd72(function(_0x2116aa, _0x224735) {
                    for (var _0x25d7bd, _0x1b07f6 = _0x52fed0([], _0x2116aa['length'], _0x2e718e), _0x5c306e = _0x1b07f6['length']; _0x5c306e--;) _0x2116aa[_0x25d7bd = _0x1b07f6[_0x5c306e]] && (_0x2116aa[_0x25d7bd] = !(_0x224735[_0x25d7bd] = _0x2116aa[_0x25d7bd]));
                });
            });
        },
        _0x777ee7 = function(_0x1f1695) {
            return _0x1f1695 && 'undefined' != typeof _0x1f1695['getElementsByTagName'] && _0x1f1695;
        },
        _0x3732b6 = function() {},
        _0x30bbec = function(_0x46f9b4) {
            for (var _0x16dd61 = 0x0, _0x5690ee = _0x46f9b4['length'], _0x38df5e = ''; _0x16dd61 < _0x5690ee; _0x16dd61++) _0x38df5e += _0x46f9b4[_0x16dd61]['value'];
            return _0x38df5e;
        },
        _0x3b3d29 = function(_0x5417de, _0x33ecfe, _0x3fb891) {
            var _0x14c7bd = _0x33ecfe['dir'],
                _0x5ae383 = _0x33ecfe['next'],
                _0x58fad9 = _0x5ae383 || _0x14c7bd,
                _0x36ba25 = _0x3fb891 && 'parentNode' === _0x58fad9,
                _0x53c3f1 = _0x1f7d00++;
            return _0x33ecfe['first'] ? function(_0x5915f9, _0x424f32, _0x802935) {
                for (; _0x5915f9 = _0x5915f9[_0x14c7bd];)
                    if (0x1 === _0x5915f9['nodeType'] || _0x36ba25) return _0x5417de(_0x5915f9, _0x424f32, _0x802935);
                return !0x1;
            } : function(_0x33766e, _0x3a5643, _0x439bc3) {
                var _0x4f98d4, _0x450969, _0x3af0dd, _0x38874f = [_0x11bfef, _0x53c3f1];
                if (_0x439bc3)
                    for (; _0x33766e = _0x33766e[_0x14c7bd];) {
                        if ((0x1 === _0x33766e['nodeType'] || _0x36ba25) && _0x5417de(_0x33766e, _0x3a5643, _0x439bc3)) return !0x0;
                    } else {
                        for (; _0x33766e = _0x33766e[_0x14c7bd];)
                            if (0x1 === _0x33766e['nodeType'] || _0x36ba25) {
                                if (_0x3af0dd = _0x33766e[_0xccc272] || (_0x33766e[_0xccc272] = {}), _0x450969 = _0x3af0dd[_0x33766e['uniqueID']] || (_0x3af0dd[_0x33766e['uniqueID']] = {}), _0x5ae383 && _0x5ae383 === _0x33766e['nodeName']['toLowerCase']()) _0x33766e = _0x33766e[_0x14c7bd] || _0x33766e;
                                else {
                                    if ((_0x4f98d4 = _0x450969[_0x58fad9]) && _0x4f98d4[0x0] === _0x11bfef && _0x4f98d4[0x1] === _0x53c3f1) return _0x38874f[0x2] = _0x4f98d4[0x2];
                                    if (_0x450969[_0x58fad9] = _0x38874f, _0x38874f[0x2] = _0x5417de(_0x33766e, _0x3a5643, _0x439bc3)) return !0x0;
                                }
                            }
                    }
                return !0x1;
            };
        },
        _0x4a37ed = function(_0x1366e9) {
            return 0x1 < _0x1366e9['length'] ? function(_0x10ea7d, _0x3f17b9, _0x384bb7) {
                for (var _0x2406c7 = _0x1366e9['length']; _0x2406c7--;)
                    if (!_0x1366e9[_0x2406c7](_0x10ea7d, _0x3f17b9, _0x384bb7)) return !0x1;
                return !0x0;
            } : _0x1366e9[0x0];
        },
        _0x3463ec = function(_0x58c823, _0x169c2e, _0x1067bd, _0x2ef1a3, _0x4383a3) {
            for (var _0x40d932, _0x3fd61f = [], _0x1d8afc = 0x0, _0x17d3bb = _0x58c823['length'], _0x24284e = null != _0x169c2e; _0x1d8afc < _0x17d3bb; _0x1d8afc++)(_0x40d932 = _0x58c823[_0x1d8afc]) && (_0x1067bd && !_0x1067bd(_0x40d932, _0x2ef1a3, _0x4383a3) || (_0x3fd61f['push'](_0x40d932), _0x24284e && _0x169c2e['push'](_0x1d8afc)));
            return _0x3fd61f;
        },
        _0x49006f = function(_0x5f03d0, _0xbb6779, _0x1db0ea, _0x5d8a74, _0x3b561f, _0x257188) {
            return _0x5d8a74 && !_0x5d8a74[_0xccc272] && (_0x5d8a74 = _0x49006f(_0x5d8a74)), _0x3b561f && !_0x3b561f[_0xccc272] && (_0x3b561f = _0x49006f(_0x3b561f, _0x257188)), _0x28dd72(function(_0x1274bf, _0x26ca9a, _0x2ec842, _0x506eb5) {
                var _0x1535d6, _0x1b67dc, _0x12329d = [],
                    _0x3bacc0 = [],
                    _0x52baca = _0x26ca9a['length'],
                    _0x51be73;
                if (!(_0x51be73 = _0x1274bf)) {
                    _0x51be73 = _0xbb6779 || '*';
                    for (var _0x48cb4a = _0x2ec842['nodeType'] ? [_0x2ec842] : _0x2ec842, _0x559372 = [], _0x3cc212 = 0x0, _0x436b03 = _0x48cb4a['length']; _0x3cc212 < _0x436b03; _0x3cc212++) _0x50f9d0(_0x51be73, _0x48cb4a[_0x3cc212], _0x559372);
                    _0x51be73 = _0x559372;
                }
                _0x51be73 = !_0x5f03d0 || !_0x1274bf && _0xbb6779 ? _0x51be73 : _0x3463ec(_0x51be73, _0x12329d, _0x5f03d0, _0x2ec842, _0x506eb5), _0x48cb4a = _0x1db0ea ? _0x3b561f || (_0x1274bf ? _0x5f03d0 : _0x52baca || _0x5d8a74) ? [] : _0x26ca9a : _0x51be73;
                if (_0x1db0ea && _0x1db0ea(_0x51be73, _0x48cb4a, _0x2ec842, _0x506eb5), _0x5d8a74) {
                    _0x1535d6 = _0x3463ec(_0x48cb4a, _0x3bacc0), _0x5d8a74(_0x1535d6, [], _0x2ec842, _0x506eb5);
                    for (_0x2ec842 = _0x1535d6['length']; _0x2ec842--;)(_0x1b67dc = _0x1535d6[_0x2ec842]) && (_0x48cb4a[_0x3bacc0[_0x2ec842]] = !(_0x51be73[_0x3bacc0[_0x2ec842]] = _0x1b67dc));
                }
                if (_0x1274bf) {
                    if (_0x3b561f || _0x5f03d0) {
                        if (_0x3b561f) {
                            _0x1535d6 = [];
                            for (_0x2ec842 = _0x48cb4a['length']; _0x2ec842--;)(_0x1b67dc = _0x48cb4a[_0x2ec842]) && _0x1535d6['push'](_0x51be73[_0x2ec842] = _0x1b67dc);
                            _0x3b561f(null, _0x48cb4a = [], _0x1535d6, _0x506eb5);
                        }
                        for (_0x2ec842 = _0x48cb4a['length']; _0x2ec842--;)(_0x1b67dc = _0x48cb4a[_0x2ec842]) && -0x1 < (_0x1535d6 = _0x3b561f ? _0x4fce11(_0x1274bf, _0x1b67dc) : _0x12329d[_0x2ec842]) && (_0x1274bf[_0x1535d6] = !(_0x26ca9a[_0x1535d6] = _0x1b67dc));
                    }
                } else _0x48cb4a = _0x3463ec(_0x48cb4a === _0x26ca9a ? _0x48cb4a['splice'](_0x52baca, _0x48cb4a['length']) : _0x48cb4a), _0x3b561f ? _0x3b561f(null, _0x26ca9a, _0x48cb4a, _0x506eb5) : _0x4d253d['apply'](_0x26ca9a, _0x48cb4a);
            });
        },
        _0x448784 = function(_0x4570ab) {
            var _0x598a63, _0xffef, _0x43fb2f, _0xa5563f = _0x4570ab['length'],
                _0x419aaf = _0xa4675b['relative'][_0x4570ab[0x0]['type']];
            _0xffef = _0x419aaf || _0xa4675b['relative']['\x20'];
            for (var _0x3f90df = _0x419aaf ? 0x1 : 0x0, _0x475515 = _0x3b3d29(function(_0x41de4e) {
                    return _0x41de4e === _0x598a63;
                }, _0xffef, !0x0), _0x32a13b = _0x3b3d29(function(_0x56a1a9) {
                    return -0x1 < _0x4fce11(_0x598a63, _0x56a1a9);
                }, _0xffef, !0x0), _0x57ed3d = [function(_0x4bca4f, _0x5b04d1, _0x20abfd) {
                    return _0x4bca4f = !_0x419aaf && (_0x20abfd || _0x5b04d1 !== _0x48fe48) || ((_0x598a63 = _0x5b04d1)['nodeType'] ? _0x475515(_0x4bca4f, _0x5b04d1, _0x20abfd) : _0x32a13b(_0x4bca4f, _0x5b04d1, _0x20abfd)), (_0x598a63 = null, _0x4bca4f);
                }]; _0x3f90df < _0xa5563f; _0x3f90df++)
                if (_0xffef = _0xa4675b['relative'][_0x4570ab[_0x3f90df]['type']]) _0x57ed3d = [_0x3b3d29(_0x4a37ed(_0x57ed3d), _0xffef)];
                else {
                    if (_0xffef = _0xa4675b['filter'][_0x4570ab[_0x3f90df]['type']]['apply'](null, _0x4570ab[_0x3f90df]['matches']), _0xffef[_0xccc272]) {
                        for (_0x43fb2f = ++_0x3f90df; _0x43fb2f < _0xa5563f && !_0xa4675b['relative'][_0x4570ab[_0x43fb2f]['type']]; _0x43fb2f++);
                        return _0x49006f(0x1 < _0x3f90df && _0x4a37ed(_0x57ed3d), 0x1 < _0x3f90df && _0x30bbec(_0x4570ab['slice'](0x0, _0x3f90df - 0x1)['concat']({
                            'value': '\x20' === _0x4570ab[_0x3f90df - 0x2]['type'] ? '*' : ''
                        }))['replace'](_0x307c4c, '$1'), _0xffef, _0x3f90df < _0x43fb2f && _0x448784(_0x4570ab['slice'](_0x3f90df, _0x43fb2f)), _0x43fb2f < _0xa5563f && _0x448784(_0x4570ab = _0x4570ab['slice'](_0x43fb2f)), _0x43fb2f < _0xa5563f && _0x30bbec(_0x4570ab));
                    }
                    _0x57ed3d['push'](_0xffef);
                }
            return _0x4a37ed(_0x57ed3d);
        },
        _0x311fbb, _0x52753c, _0xa4675b, _0x414dba, _0x279fe5, _0x55e1b9, _0x4f50cf, _0x55478e, _0x48fe48, _0x1e25ec, _0x259f73, _0x36ab86, _0x579ada, _0x23a8d4, _0x174b89, _0x18bd6a, _0x1ce674, _0x3e70c9, _0x2d9cc7, _0xccc272 = 'sizzle' + 0x1 * new Date(),
        _0xfdc3ae = _0x204d1a['document'],
        _0x11bfef = 0x0,
        _0x1f7d00 = 0x0,
        _0x5ce224 = _0x4dd189(),
        _0x1b7ac3 = _0x4dd189(),
        _0x5a3c9c = _0x4dd189(),
        _0x155853 = function(_0x4984f6, _0x2ae7a7) {
            return _0x4984f6 === _0x2ae7a7 && (_0x259f73 = !0x0), 0x0;
        },
        _0x161da0 = {}['hasOwnProperty'],
        _0x3e1721 = [],
        _0x2ee743 = _0x3e1721['pop'],
        _0x2b3075 = _0x3e1721['push'],
        _0x4d253d = _0x3e1721['push'],
        _0x43f47f = _0x3e1721['slice'],
        _0x4fce11 = function(_0x118a22, _0x3fa4de) {
            for (var _0x2c948f = 0x0, _0xce8eea = _0x118a22['length']; _0x2c948f < _0xce8eea; _0x2c948f++)
                if (_0x118a22[_0x2c948f] === _0x3fa4de) return _0x2c948f;
            return -0x1;
        },
        _0x36f269 = /[\x20\t\r\n\f]+/g,
        _0x307c4c = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        _0xe6cadd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        _0x194b2b = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        _0x387785 = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        _0x5c9027 = RegExp(':((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
        _0x14dfd6 = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        _0x1772b3 = {
            'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            'ATTR': RegExp('^\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c]'),
            'PSEUDO': RegExp('^:((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
            'CHILD': RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*(even|odd|(([+-]|)(\x5cd*)n|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([+-]|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(\x5cd+)|))[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)', 'i'),
            'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
            'needsContext': RegExp('^[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:-\x5cd)?\x5cd*)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)(?=[^-]|$)', 'i')
        },
        _0x3fc704 = /^(?:input|select|textarea|button)$/i,
        _0x4f4e60 = /^h\d$/i,
        _0x456f2c = /^[^{]+\{\s*\[native \w/,
        _0x73da7b = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _0x557928 = /[+~]/,
        _0x2f9cb5 = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        _0x4a19c1 = function(_0x430be2, _0x31e67c, _0x2ac46c) {
            return _0x430be2 = '0x' + _0x31e67c - 0x10000, _0x430be2 !== _0x430be2 || _0x2ac46c ? _0x31e67c : 0x0 > _0x430be2 ? String['fromCharCode'](_0x430be2 + 0x10000) : String['fromCharCode'](_0x430be2 >> 0xa | 0xd800, 0x3ff & _0x430be2 | 0xdc00);
        },
        _0x579819 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        _0x41702c = function(_0x3ae671, _0x321557) {
            return _0x321557 ? '\x00' === _0x3ae671 ? '�' : _0x3ae671['slice'](0x0, -0x1) + '\x5c' + _0x3ae671['charCodeAt'](_0x3ae671['length'] - 0x1)['toString'](0x10) + '\x20' : '\x5c' + _0x3ae671;
        },
        _0x25bb6d = function() {
            _0x36ab86();
        },
        _0xa6426e = _0x3b3d29(function(_0x29b461) {
            return !0x0 === _0x29b461['disabled'] && ('form' in _0x29b461 || 'label' in _0x29b461);
        }, {
            'dir': 'parentNode',
            'next': 'legend'
        });
    try {
        _0x4d253d['apply'](_0x3e1721 = _0x43f47f['call'](_0xfdc3ae['childNodes']), _0xfdc3ae['childNodes']), _0x3e1721[_0xfdc3ae['childNodes']['length']]['nodeType'];
    } catch (_0x1950a9) {
        _0x4d253d = {
            'apply': _0x3e1721['length'] ? function(_0x168fd1, _0x2b18ac) {
                _0x2b3075['apply'](_0x168fd1, _0x43f47f['call'](_0x2b18ac));
            } : function(_0x259b85, _0x490df0) {
                for (var _0x40d710 = _0x259b85['length'], _0x507a70 = 0x0; _0x259b85[_0x40d710++] = _0x490df0[_0x507a70++];);
                _0x259b85['length'] = _0x40d710 - 0x1;
            }
        };
    }
    _0x52753c = _0x50f9d0['support'] = {}, _0x279fe5 = _0x50f9d0['isXML'] = function(_0x2e8007) {
        return _0x2e8007 = _0x2e8007 && (_0x2e8007['ownerDocument'] || _0x2e8007)['documentElement'], !!_0x2e8007 && 'HTML' !== _0x2e8007['nodeName'];
    }, _0x36ab86 = _0x50f9d0['setDocument'] = function(_0x3f5119) {
        var _0x53aa88, _0x46da7c;
        return _0x3f5119 = _0x3f5119 ? _0x3f5119['ownerDocument'] || _0x3f5119 : _0xfdc3ae, _0x3f5119 !== _0x579ada && 0x9 === _0x3f5119['nodeType'] && _0x3f5119['documentElement'] ? (_0x579ada = _0x3f5119, _0x23a8d4 = _0x579ada['documentElement'], _0x174b89 = !_0x279fe5(_0x579ada), _0xfdc3ae !== _0x579ada && (_0x46da7c = _0x579ada['defaultView']) && _0x46da7c['top'] !== _0x46da7c && (_0x46da7c['addEventListener'] ? _0x46da7c['addEventListener']('unload', _0x25bb6d, !0x1) : _0x46da7c['attachEvent'] && _0x46da7c['attachEvent']('onunload', _0x25bb6d)), _0x52753c['attributes'] = _0x1cd257(function(_0x4247e5) {
            return _0x4247e5['className'] = 'i', !_0x4247e5['getAttribute']('className');
        }), _0x52753c['getElementsByTagName'] = _0x1cd257(function(_0x48a448) {
            return _0x48a448['appendChild'](_0x579ada['createComment']('')), !_0x48a448['getElementsByTagName']('*')['length'];
        }), _0x52753c['getElementsByClassName'] = _0x456f2c['test'](_0x579ada['getElementsByClassName']), _0x52753c['getById'] = _0x1cd257(function(_0x3f4739) {
            return _0x23a8d4['appendChild'](_0x3f4739)['id'] = _0xccc272, !_0x579ada['getElementsByName'] || !_0x579ada['getElementsByName'](_0xccc272)['length'];
        }), _0x52753c['getById'] ? (_0xa4675b['filter']['ID'] = function(_0x236b09) {
            var _0x469ead = _0x236b09['replace'](_0x2f9cb5, _0x4a19c1);
            return function(_0xb8bcfc) {
                return _0xb8bcfc['getAttribute']('id') === _0x469ead;
            };
        }, _0xa4675b['find']['ID'] = function(_0x3c454, _0x3671c7) {
            if ('undefined' != typeof _0x3671c7['getElementById'] && _0x174b89) {
                var _0x487616 = _0x3671c7['getElementById'](_0x3c454);
                return _0x487616 ? [_0x487616] : [];
            }
        }) : (_0xa4675b['filter']['ID'] = function(_0x405b3b) {
            var _0x55aab0 = _0x405b3b['replace'](_0x2f9cb5, _0x4a19c1);
            return function(_0x13b968) {
                return (_0x13b968 = 'undefined' != typeof _0x13b968['getAttributeNode'] && _0x13b968['getAttributeNode']('id')) && _0x13b968['value'] === _0x55aab0;
            };
        }, _0xa4675b['find']['ID'] = function(_0x31f78f, _0x223b6a) {
            if ('undefined' != typeof _0x223b6a['getElementById'] && _0x174b89) {
                var _0x3f489a, _0x526ad1, _0x5269ea, _0x34c425 = _0x223b6a['getElementById'](_0x31f78f);
                if (_0x34c425) {
                    if (_0x3f489a = _0x34c425['getAttributeNode']('id'), _0x3f489a && _0x3f489a['value'] === _0x31f78f) return [_0x34c425];
                    _0x5269ea = _0x223b6a['getElementsByName'](_0x31f78f);
                    for (_0x526ad1 = 0x0; _0x34c425 = _0x5269ea[_0x526ad1++];)
                        if (_0x3f489a = _0x34c425['getAttributeNode']('id'), _0x3f489a && _0x3f489a['value'] === _0x31f78f) return [_0x34c425];
                }
                return [];
            }
        }), _0xa4675b['find']['TAG'] = _0x52753c['getElementsByTagName'] ? function(_0xe9a2b0, _0xa596e5) {
            return 'undefined' != typeof _0xa596e5['getElementsByTagName'] ? _0xa596e5['getElementsByTagName'](_0xe9a2b0) : _0x52753c['qsa'] ? _0xa596e5['querySelectorAll'](_0xe9a2b0) : void 0x0;
        } : function(_0x58765b, _0x39c54a) {
            var _0x5bca5c, _0x3684c7 = [],
                _0x2bd699 = 0x0,
                _0x41ca4c = _0x39c54a['getElementsByTagName'](_0x58765b);
            if ('*' === _0x58765b) {
                for (; _0x5bca5c = _0x41ca4c[_0x2bd699++];) 0x1 === _0x5bca5c['nodeType'] && _0x3684c7['push'](_0x5bca5c);
                return _0x3684c7;
            }
            return _0x41ca4c;
        }, _0xa4675b['find']['CLASS'] = _0x52753c['getElementsByClassName'] && function(_0x1e2b07, _0x3b6e9d) {
            if ('undefined' != typeof _0x3b6e9d['getElementsByClassName'] && _0x174b89) return _0x3b6e9d['getElementsByClassName'](_0x1e2b07);
        }, _0x1ce674 = [], _0x18bd6a = [], (_0x52753c['qsa'] = _0x456f2c['test'](_0x579ada['querySelectorAll'])) && (_0x1cd257(function(_0x34df2d) {
            _0x23a8d4['appendChild'](_0x34df2d)['innerHTML'] = '<a\x20id=\x27' + _0xccc272 + '\x27></a><select\x20id=\x27' + _0xccc272 + '-\x0d\x5c\x27\x20msallowcapture=\x27\x27><option\x20selected=\x27\x27></option></select>', _0x34df2d['querySelectorAll']('[msallowcapture^=\x27\x27]')['length'] && _0x18bd6a['push']('[*^$]=[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27\x27|\x22\x22)'), _0x34df2d['querySelectorAll']('[selected]')['length'] || _0x18bd6a['push']('\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)'), _0x34df2d['querySelectorAll']('[id~=' + _0xccc272 + '-]')['length'] || _0x18bd6a['push']('~='), _0x34df2d['querySelectorAll'](':checked')['length'] || _0x18bd6a['push'](':checked'), _0x34df2d['querySelectorAll']('a#' + _0xccc272 + '+*')['length'] || _0x18bd6a['push']('.#.+[+~]');
        }), _0x1cd257(function(_0xb25dca) {
            _0xb25dca['innerHTML'] = '<a\x20href=\x27\x27\x20disabled=\x27disabled\x27></a><select\x20disabled=\x27disabled\x27><option/></select>';
            var _0x829505 = _0x579ada['createElement']('input');
            _0x829505['setAttribute']('type', 'hidden'), _0xb25dca['appendChild'](_0x829505)['setAttribute']('name', 'D'), _0xb25dca['querySelectorAll']('[name=d]')['length'] && _0x18bd6a['push']('name[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[*^$|!~]?='), 0x2 !== _0xb25dca['querySelectorAll'](':enabled')['length'] && _0x18bd6a['push'](':enabled', ':disabled'), _0x23a8d4['appendChild'](_0xb25dca)['disabled'] = !0x0, 0x2 !== _0xb25dca['querySelectorAll'](':disabled')['length'] && _0x18bd6a['push'](':enabled', ':disabled'), _0xb25dca['querySelectorAll']('*,:x'), _0x18bd6a['push'](',.*:');
        })), (_0x52753c['matchesSelector'] = _0x456f2c['test'](_0x3e70c9 = _0x23a8d4['matches'] || _0x23a8d4['webkitMatchesSelector'] || _0x23a8d4['mozMatchesSelector'] || _0x23a8d4['oMatchesSelector'] || _0x23a8d4['msMatchesSelector'])) && _0x1cd257(function(_0x3c4731) {
            _0x52753c['disconnectedMatch'] = _0x3e70c9['call'](_0x3c4731, '*'), _0x3e70c9['call'](_0x3c4731, '[s!=\x27\x27]:x'), _0x1ce674['push']('!=', ':((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^\x00-\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)');
        }), _0x18bd6a = _0x18bd6a['length'] && RegExp(_0x18bd6a['join']('|')), _0x1ce674 = _0x1ce674['length'] && RegExp(_0x1ce674['join']('|')), _0x53aa88 = _0x456f2c['test'](_0x23a8d4['compareDocumentPosition']), _0x2d9cc7 = _0x53aa88 || _0x456f2c['test'](_0x23a8d4['contains']) ? function(_0x3dd069, _0x4965c1) {
            var _0x54f38c = 0x9 === _0x3dd069['nodeType'] ? _0x3dd069['documentElement'] : _0x3dd069,
                _0x233143 = _0x4965c1 && _0x4965c1['parentNode'];
            return _0x3dd069 === _0x233143 || !(!_0x233143 || 0x1 !== _0x233143['nodeType'] || !(_0x54f38c['contains'] ? _0x54f38c['contains'](_0x233143) : _0x3dd069['compareDocumentPosition'] && 0x10 & _0x3dd069['compareDocumentPosition'](_0x233143)));
        } : function(_0x164fc9, _0xb3e204) {
            if (_0xb3e204) {
                for (; _0xb3e204 = _0xb3e204['parentNode'];)
                    if (_0xb3e204 === _0x164fc9) return !0x0;
            }
            return !0x1;
        }, _0x155853 = _0x53aa88 ? function(_0xf35f13, _0xac50c8) {
            if (_0xf35f13 === _0xac50c8) return _0x259f73 = !0x0, 0x0;
            var _0x319faf = !_0xf35f13['compareDocumentPosition'] - !_0xac50c8['compareDocumentPosition'];
            return _0x319faf ? _0x319faf : (_0x319faf = (_0xf35f13['ownerDocument'] || _0xf35f13) === (_0xac50c8['ownerDocument'] || _0xac50c8) ? _0xf35f13['compareDocumentPosition'](_0xac50c8) : 0x1, 0x1 & _0x319faf || !_0x52753c['sortDetached'] && _0xac50c8['compareDocumentPosition'](_0xf35f13) === _0x319faf ? _0xf35f13 === _0x579ada || _0xf35f13['ownerDocument'] === _0xfdc3ae && _0x2d9cc7(_0xfdc3ae, _0xf35f13) ? -0x1 : _0xac50c8 === _0x579ada || _0xac50c8['ownerDocument'] === _0xfdc3ae && _0x2d9cc7(_0xfdc3ae, _0xac50c8) ? 0x1 : _0x1e25ec ? _0x4fce11(_0x1e25ec, _0xf35f13) - _0x4fce11(_0x1e25ec, _0xac50c8) : 0x0 : 0x4 & _0x319faf ? -0x1 : 0x1);
        } : function(_0x1971cb, _0x4d4983) {
            if (_0x1971cb === _0x4d4983) return _0x259f73 = !0x0, 0x0;
            var _0x1c0a78, _0x12b965 = 0x0;
            _0x1c0a78 = _0x1971cb['parentNode'];
            var _0x22c2c7 = _0x4d4983['parentNode'],
                _0x15bfe4 = [_0x1971cb],
                _0xd22ef6 = [_0x4d4983];
            if (!_0x1c0a78 || !_0x22c2c7) return _0x1971cb === _0x579ada ? -0x1 : _0x4d4983 === _0x579ada ? 0x1 : _0x1c0a78 ? -0x1 : _0x22c2c7 ? 0x1 : _0x1e25ec ? _0x4fce11(_0x1e25ec, _0x1971cb) - _0x4fce11(_0x1e25ec, _0x4d4983) : 0x0;
            if (_0x1c0a78 === _0x22c2c7) return _0x285001(_0x1971cb, _0x4d4983);
            for (_0x1c0a78 = _0x1971cb; _0x1c0a78 = _0x1c0a78['parentNode'];) _0x15bfe4['unshift'](_0x1c0a78);
            for (_0x1c0a78 = _0x4d4983; _0x1c0a78 = _0x1c0a78['parentNode'];) _0xd22ef6['unshift'](_0x1c0a78);
            for (; _0x15bfe4[_0x12b965] === _0xd22ef6[_0x12b965];) _0x12b965++;
            return _0x12b965 ? _0x285001(_0x15bfe4[_0x12b965], _0xd22ef6[_0x12b965]) : _0x15bfe4[_0x12b965] === _0xfdc3ae ? -0x1 : _0xd22ef6[_0x12b965] === _0xfdc3ae ? 0x1 : 0x0;
        }, _0x579ada) : _0x579ada;
    }, _0x50f9d0['matches'] = function(_0x4134b1, _0x2528c0) {
        return _0x50f9d0(_0x4134b1, null, null, _0x2528c0);
    }, _0x50f9d0['matchesSelector'] = function(_0x5c919f, _0x217042) {
        if ((_0x5c919f['ownerDocument'] || _0x5c919f) !== _0x579ada && _0x36ab86(_0x5c919f), _0x217042 = _0x217042['replace'](_0x387785, '=\x27$1\x27]'), _0x52753c['matchesSelector'] && _0x174b89 && !_0x5a3c9c[_0x217042 + '\x20'] && (!_0x1ce674 || !_0x1ce674['test'](_0x217042)) && (!_0x18bd6a || !_0x18bd6a['test'](_0x217042))) try {
            var _0x1cfe8d = _0x3e70c9['call'](_0x5c919f, _0x217042);
            if (_0x1cfe8d || _0x52753c['disconnectedMatch'] || _0x5c919f['document'] && 0xb !== _0x5c919f['document']['nodeType']) return _0x1cfe8d;
        } catch (_0x463f1b) {}
        return 0x0 < _0x50f9d0(_0x217042, _0x579ada, null, [_0x5c919f])['length'];
    }, _0x50f9d0['contains'] = function(_0xba01c1, _0x59c2af) {
        return (_0xba01c1['ownerDocument'] || _0xba01c1) !== _0x579ada && _0x36ab86(_0xba01c1), _0x2d9cc7(_0xba01c1, _0x59c2af);
    }, _0x50f9d0['attr'] = function(_0xca59fa, _0x1b30a9) {
        (_0xca59fa['ownerDocument'] || _0xca59fa) !== _0x579ada && _0x36ab86(_0xca59fa);
        var _0x409b02 = _0xa4675b['attrHandle'][_0x1b30a9['toLowerCase']()],
            _0x409b02 = _0x409b02 && _0x161da0['call'](_0xa4675b['attrHandle'], _0x1b30a9['toLowerCase']()) ? _0x409b02(_0xca59fa, _0x1b30a9, !_0x174b89) : void 0x0;
        return void 0x0 !== _0x409b02 ? _0x409b02 : _0x52753c['attributes'] || !_0x174b89 ? _0xca59fa['getAttribute'](_0x1b30a9) : (_0x409b02 = _0xca59fa['getAttributeNode'](_0x1b30a9)) && _0x409b02['specified'] ? _0x409b02['value'] : null;
    }, _0x50f9d0['escape'] = function(_0x2eee33) {
        return (_0x2eee33 + '')['replace'](_0x579819, _0x41702c);
    }, _0x50f9d0['error'] = function(_0x21915b) {
        throw Error('Syntax\x20error,\x20unrecognized\x20expression:\x20' + _0x21915b);
    }, _0x50f9d0['uniqueSort'] = function(_0x128754) {
        var _0x35367, _0x4b590d = [],
            _0x43ecdd = 0x0,
            _0x319251 = 0x0;
        if (_0x259f73 = !_0x52753c['detectDuplicates'], _0x1e25ec = !_0x52753c['sortStable'] && _0x128754['slice'](0x0), _0x128754['sort'](_0x155853), _0x259f73) {
            for (; _0x35367 = _0x128754[_0x319251++];) _0x35367 === _0x128754[_0x319251] && (_0x43ecdd = _0x4b590d['push'](_0x319251));
            for (; _0x43ecdd--;) _0x128754['splice'](_0x4b590d[_0x43ecdd], 0x1);
        }
        return _0x1e25ec = null, _0x128754;
    }, _0x414dba = _0x50f9d0['getText'] = function(_0x20f3f4) {
        var _0x15b20f, _0x7bfde8 = '',
            _0x5030d0 = 0x0;
        if (_0x15b20f = _0x20f3f4['nodeType']) {
            if (0x1 === _0x15b20f || 0x9 === _0x15b20f || 0xb === _0x15b20f) {
                if ('string' == typeof _0x20f3f4['textContent']) return _0x20f3f4['textContent'];
                for (_0x20f3f4 = _0x20f3f4['firstChild']; _0x20f3f4; _0x20f3f4 = _0x20f3f4['nextSibling']) _0x7bfde8 += _0x414dba(_0x20f3f4);
            } else {
                if (0x3 === _0x15b20f || 0x4 === _0x15b20f) return _0x20f3f4['nodeValue'];
            }
        } else {
            for (; _0x15b20f = _0x20f3f4[_0x5030d0++];) _0x7bfde8 += _0x414dba(_0x15b20f);
        }
        return _0x7bfde8;
    }, _0xa4675b = _0x50f9d0['selectors'] = {
        'cacheLength': 0x32,
        'createPseudo': _0x28dd72,
        'match': _0x1772b3,
        'attrHandle': {},
        'find': {},
        'relative': {
            '>': {
                'dir': 'parentNode',
                'first': !0x0
            },
            '\x20': {
                'dir': 'parentNode'
            },
            '+': {
                'dir': 'previousSibling',
                'first': !0x0
            },
            '~': {
                'dir': 'previousSibling'
            }
        },
        'preFilter': {
            'ATTR': function(_0x2ba7fa) {
                return _0x2ba7fa[0x1] = _0x2ba7fa[0x1]['replace'](_0x2f9cb5, _0x4a19c1), _0x2ba7fa[0x3] = (_0x2ba7fa[0x3] || _0x2ba7fa[0x4] || _0x2ba7fa[0x5] || '')['replace'](_0x2f9cb5, _0x4a19c1), '~=' === _0x2ba7fa[0x2] && (_0x2ba7fa[0x3] = '\x20' + _0x2ba7fa[0x3] + '\x20'), _0x2ba7fa['slice'](0x0, 0x4);
            },
            'CHILD': function(_0xce6454) {
                return _0xce6454[0x1] = _0xce6454[0x1]['toLowerCase'](), 'nth' === _0xce6454[0x1]['slice'](0x0, 0x3) ? (_0xce6454[0x3] || _0x50f9d0['error'](_0xce6454[0x0]), _0xce6454[0x4] = +(_0xce6454[0x4] ? _0xce6454[0x5] + (_0xce6454[0x6] || 0x1) : 0x2 * ('even' === _0xce6454[0x3] || 'odd' === _0xce6454[0x3])), _0xce6454[0x5] = +(_0xce6454[0x7] + _0xce6454[0x8] || 'odd' === _0xce6454[0x3])) : _0xce6454[0x3] && _0x50f9d0['error'](_0xce6454[0x0]), _0xce6454;
            },
            'PSEUDO': function(_0x526eb5) {
                var _0x4cc143, _0x17347d = !_0x526eb5[0x6] && _0x526eb5[0x2];
                return _0x1772b3['CHILD']['test'](_0x526eb5[0x0]) ? null : (_0x526eb5[0x3] ? _0x526eb5[0x2] = _0x526eb5[0x4] || _0x526eb5[0x5] || '' : _0x17347d && _0x5c9027['test'](_0x17347d) && (_0x4cc143 = _0x55e1b9(_0x17347d, !0x0)) && (_0x4cc143 = _0x17347d['indexOf'](')', _0x17347d['length'] - _0x4cc143) - _0x17347d['length']) && (_0x526eb5[0x0] = _0x526eb5[0x0]['slice'](0x0, _0x4cc143), _0x526eb5[0x2] = _0x17347d['slice'](0x0, _0x4cc143)), _0x526eb5['slice'](0x0, 0x3));
            }
        },
        'filter': {
            'TAG': function(_0x2c9e9d) {
                var _0x2018b5 = _0x2c9e9d['replace'](_0x2f9cb5, _0x4a19c1)['toLowerCase']();
                return '*' === _0x2c9e9d ? function() {
                    return !0x0;
                } : function(_0x1aa7a5) {
                    return _0x1aa7a5['nodeName'] && _0x1aa7a5['nodeName']['toLowerCase']() === _0x2018b5;
                };
            },
            'CLASS': function(_0x50d74d) {
                var _0x53fb36 = _0x5ce224[_0x50d74d + '\x20'];
                return _0x53fb36 || (_0x53fb36 = RegExp('(^|[\x5cx20\x5ct\x5cr\x5cn\x5cf])' + _0x50d74d + '([\x5cx20\x5ct\x5cr\x5cn\x5cf]|$)')) && _0x5ce224(_0x50d74d, function(_0x27bec8) {
                    return _0x53fb36['test']('string' == typeof _0x27bec8['className'] && _0x27bec8['className'] || 'undefined' != typeof _0x27bec8['getAttribute'] && _0x27bec8['getAttribute']('class') || '');
                });
            },
            'ATTR': function(_0x5d214f, _0x1927f8, _0x7ab0a5) {
                return function(_0x534dc7) {
                    return _0x534dc7 = _0x50f9d0['attr'](_0x534dc7, _0x5d214f), null == _0x534dc7 ? '!=' === _0x1927f8 : !_0x1927f8 || (_0x534dc7 += '', '=' === _0x1927f8 ? _0x534dc7 === _0x7ab0a5 : '!=' === _0x1927f8 ? _0x534dc7 !== _0x7ab0a5 : '^=' === _0x1927f8 ? _0x7ab0a5 && 0x0 === _0x534dc7['indexOf'](_0x7ab0a5) : '*=' === _0x1927f8 ? _0x7ab0a5 && -0x1 < _0x534dc7['indexOf'](_0x7ab0a5) : '$=' === _0x1927f8 ? _0x7ab0a5 && _0x534dc7['slice'](-_0x7ab0a5['length']) === _0x7ab0a5 : '~=' === _0x1927f8 ? -0x1 < ('\x20' + _0x534dc7['replace'](_0x36f269, '\x20') + '\x20')['indexOf'](_0x7ab0a5) : '|=' === _0x1927f8 && (_0x534dc7 === _0x7ab0a5 || _0x534dc7['slice'](0x0, _0x7ab0a5['length'] + 0x1) === _0x7ab0a5 + '-'));
                };
            },
            'CHILD': function(_0x149093, _0x1281b1, _0x556174, _0x506e5c, _0x27e866) {
                var _0x11f144 = 'nth' !== _0x149093['slice'](0x0, 0x3),
                    _0x8e015f = 'last' !== _0x149093['slice'](-0x4),
                    _0x1249e6 = 'of-type' === _0x1281b1;
                return 0x1 === _0x506e5c && 0x0 === _0x27e866 ? function(_0x2c1b18) {
                    return !!_0x2c1b18['parentNode'];
                } : function(_0x1b0951, _0x47d619, _0x1c6324) {
                    var _0x5507ad, _0x2da187, _0x493230, _0x587895, _0x2409f9, _0x296b63;
                    _0x47d619 = _0x11f144 !== _0x8e015f ? 'nextSibling' : 'previousSibling';
                    var _0x492f2a = _0x1b0951['parentNode'],
                        _0x52c484 = _0x1249e6 && _0x1b0951['nodeName']['toLowerCase']();
                    _0x1c6324 = !_0x1c6324 && !_0x1249e6;
                    var _0x289577 = !0x1;
                    if (_0x492f2a) {
                        if (_0x11f144) {
                            for (; _0x47d619;) {
                                for (_0x587895 = _0x1b0951; _0x587895 = _0x587895[_0x47d619];)
                                    if (_0x1249e6 ? _0x587895['nodeName']['toLowerCase']() === _0x52c484 : 0x1 === _0x587895['nodeType']) return !0x1;
                                _0x296b63 = _0x47d619 = 'only' === _0x149093 && !_0x296b63 && 'nextSibling';
                            }
                            return !0x0;
                        }
                        if (_0x296b63 = [_0x8e015f ? _0x492f2a['firstChild'] : _0x492f2a['lastChild']], _0x8e015f && _0x1c6324) {
                            _0x587895 = _0x492f2a, _0x493230 = _0x587895[_0xccc272] || (_0x587895[_0xccc272] = {}), _0x2da187 = _0x493230[_0x587895['uniqueID']] || (_0x493230[_0x587895['uniqueID']] = {}), _0x5507ad = _0x2da187[_0x149093] || [], _0x289577 = (_0x2409f9 = _0x5507ad[0x0] === _0x11bfef && _0x5507ad[0x1]) && _0x5507ad[0x2];
                            for (_0x587895 = _0x2409f9 && _0x492f2a['childNodes'][_0x2409f9]; _0x587895 = ++_0x2409f9 && _0x587895 && _0x587895[_0x47d619] || (_0x289577 = _0x2409f9 = 0x0) || _0x296b63['pop']();)
                                if (0x1 === _0x587895['nodeType'] && ++_0x289577 && _0x587895 === _0x1b0951) {
                                    _0x2da187[_0x149093] = [_0x11bfef, _0x2409f9, _0x289577];
                                    break;
                                }
                        } else {
                            if (_0x1c6324 && (_0x587895 = _0x1b0951, _0x493230 = _0x587895[_0xccc272] || (_0x587895[_0xccc272] = {}), _0x2da187 = _0x493230[_0x587895['uniqueID']] || (_0x493230[_0x587895['uniqueID']] = {}), _0x5507ad = _0x2da187[_0x149093] || [], _0x2409f9 = _0x5507ad[0x0] === _0x11bfef && _0x5507ad[0x1], _0x289577 = _0x2409f9), !0x1 === _0x289577) {
                                for (;
                                    (_0x587895 = ++_0x2409f9 && _0x587895 && _0x587895[_0x47d619] || (_0x289577 = _0x2409f9 = 0x0) || _0x296b63['pop']()) && (!(_0x1249e6 ? _0x587895['nodeName']['toLowerCase']() === _0x52c484 : 0x1 === _0x587895['nodeType']) || !++_0x289577 || !(_0x1c6324 && (_0x493230 = _0x587895[_0xccc272] || (_0x587895[_0xccc272] = {}), _0x2da187 = _0x493230[_0x587895['uniqueID']] || (_0x493230[_0x587895['uniqueID']] = {}), _0x2da187[_0x149093] = [_0x11bfef, _0x289577]), _0x587895 === _0x1b0951)););
                            }
                        }
                        return _0x289577 -= _0x27e866, _0x289577 === _0x506e5c || 0x0 === _0x289577 % _0x506e5c && 0x0 <= _0x289577 / _0x506e5c;
                    }
                };
            },
            'PSEUDO': function(_0x5d0a97, _0x354d91) {
                var _0x36ad40, _0x447610 = _0xa4675b['pseudos'][_0x5d0a97] || _0xa4675b['setFilters'][_0x5d0a97['toLowerCase']()] || _0x50f9d0['error']('unsupported\x20pseudo:\x20' + _0x5d0a97);
                return _0x447610[_0xccc272] ? _0x447610(_0x354d91) : 0x1 < _0x447610['length'] ? (_0x36ad40 = [_0x5d0a97, _0x5d0a97, '', _0x354d91], _0xa4675b['setFilters']['hasOwnProperty'](_0x5d0a97['toLowerCase']()) ? _0x28dd72(function(_0x1b22bc, _0x4872fa) {
                    for (var _0x3f03d0, _0x564c9f = _0x447610(_0x1b22bc, _0x354d91), _0x49f62d = _0x564c9f['length']; _0x49f62d--;) _0x3f03d0 = _0x4fce11(_0x1b22bc, _0x564c9f[_0x49f62d]), _0x1b22bc[_0x3f03d0] = !(_0x4872fa[_0x3f03d0] = _0x564c9f[_0x49f62d]);
                }) : function(_0x344a52) {
                    return _0x447610(_0x344a52, 0x0, _0x36ad40);
                }) : _0x447610;
            }
        },
        'pseudos': {
            'not': _0x28dd72(function(_0x295b74) {
                var _0x4f4ee8 = [],
                    _0x68cab = [],
                    _0x238440 = _0x4f50cf(_0x295b74['replace'](_0x307c4c, '$1'));
                return _0x238440[_0xccc272] ? _0x28dd72(function(_0x49ea78, _0x2547ea, _0x40aca2, _0x2145c1) {
                    var _0x105f4d;
                    _0x40aca2 = _0x238440(_0x49ea78, null, _0x2145c1, []);
                    for (_0x2145c1 = _0x49ea78['length']; _0x2145c1--;)(_0x105f4d = _0x40aca2[_0x2145c1]) && (_0x49ea78[_0x2145c1] = !(_0x2547ea[_0x2145c1] = _0x105f4d));
                }) : function(_0x11d278, _0x445c14, _0x3ff7bf) {
                    return _0x4f4ee8[0x0] = _0x11d278, _0x238440(_0x4f4ee8, null, _0x3ff7bf, _0x68cab), _0x4f4ee8[0x0] = null, !_0x68cab['pop']();
                };
            }),
            'has': _0x28dd72(function(_0x17a7d5) {
                return function(_0x4ecafa) {
                    return 0x0 < _0x50f9d0(_0x17a7d5, _0x4ecafa)['length'];
                };
            }),
            'contains': _0x28dd72(function(_0x2250cf) {
                return _0x2250cf = _0x2250cf['replace'](_0x2f9cb5, _0x4a19c1),
                    function(_0x159a46) {
                        return -0x1 < (_0x159a46['textContent'] || _0x159a46['innerText'] || _0x414dba(_0x159a46))['indexOf'](_0x2250cf);
                    };
            }),
            'lang': _0x28dd72(function(_0x35225e) {
                return _0x14dfd6['test'](_0x35225e || '') || _0x50f9d0['error']('unsupported\x20lang:\x20' + _0x35225e), _0x35225e = _0x35225e['replace'](_0x2f9cb5, _0x4a19c1)['toLowerCase'](),
                    function(_0x141543) {
                        var _0x2d75d5;
                        do
                            if (_0x2d75d5 = _0x174b89 ? _0x141543['lang'] : _0x141543['getAttribute']('xml:lang') || _0x141543['getAttribute']('lang')) return _0x2d75d5 = _0x2d75d5['toLowerCase'](), _0x2d75d5 === _0x35225e || 0x0 === _0x2d75d5['indexOf'](_0x35225e + '-'); while ((_0x141543 = _0x141543['parentNode']) && 0x1 === _0x141543['nodeType']);
                        return !0x1;
                    };
            }),
            'target': function(_0x575d23) {
                var _0x23efad = _0x204d1a['location'] && _0x204d1a['location']['hash'];
                return _0x23efad && _0x23efad['slice'](0x1) === _0x575d23['id'];
            },
            'root': function(_0xcb5eb4) {
                return _0xcb5eb4 === _0x23a8d4;
            },
            'focus': function(_0x20594f) {
                return _0x20594f === _0x579ada['activeElement'] && (!_0x579ada['hasFocus'] || _0x579ada['hasFocus']()) && !(!_0x20594f['type'] && !_0x20594f['href'] && !~_0x20594f['tabIndex']);
            },
            'enabled': _0x12870c(!0x1),
            'disabled': _0x12870c(!0x0),
            'checked': function(_0x26ec97) {
                var _0x460822 = _0x26ec97['nodeName']['toLowerCase']();
                return 'input' === _0x460822 && !!_0x26ec97['checked'] || 'option' === _0x460822 && !!_0x26ec97['selected'];
            },
            'selected': function(_0x3a91d8) {
                return _0x3a91d8['parentNode'] && _0x3a91d8['parentNode']['selectedIndex'], !0x0 === _0x3a91d8['selected'];
            },
            'empty': function(_0x4e978d) {
                for (_0x4e978d = _0x4e978d['firstChild']; _0x4e978d; _0x4e978d = _0x4e978d['nextSibling'])
                    if (0x6 > _0x4e978d['nodeType']) return !0x1;
                return !0x0;
            },
            'parent': function(_0x506da2) {
                return !_0xa4675b['pseudos']['empty'](_0x506da2);
            },
            'header': function(_0x2403b6) {
                return _0x4f4e60['test'](_0x2403b6['nodeName']);
            },
            'input': function(_0x5419ab) {
                return _0x3fc704['test'](_0x5419ab['nodeName']);
            },
            'button': function(_0x25002c) {
                var _0xa74641 = _0x25002c['nodeName']['toLowerCase']();
                return 'input' === _0xa74641 && 'button' === _0x25002c['type'] || 'button' === _0xa74641;
            },
            'text': function(_0x15866e) {
                var _0x3bc15c;
                return 'input' === _0x15866e['nodeName']['toLowerCase']() && 'text' === _0x15866e['type'] && (null == (_0x3bc15c = _0x15866e['getAttribute']('type')) || 'text' === _0x3bc15c['toLowerCase']());
            },
            'first': _0x1ad509(function() {
                return [0x0];
            }),
            'last': _0x1ad509(function(_0x5e1534, _0x2efdf6) {
                return [_0x2efdf6 - 0x1];
            }),
            'eq': _0x1ad509(function(_0x31bc9e, _0x44eb4f, _0x212879) {
                return [0x0 > _0x212879 ? _0x212879 + _0x44eb4f : _0x212879];
            }),
            'even': _0x1ad509(function(_0x5c1acc, _0xd1fa18) {
                for (var _0x437f8a = 0x0; _0x437f8a < _0xd1fa18; _0x437f8a += 0x2) _0x5c1acc['push'](_0x437f8a);
                return _0x5c1acc;
            }),
            'odd': _0x1ad509(function(_0x1587b5, _0x102b84) {
                for (var _0x42867b = 0x1; _0x42867b < _0x102b84; _0x42867b += 0x2) _0x1587b5['push'](_0x42867b);
                return _0x1587b5;
            }),
            'lt': _0x1ad509(function(_0x1eb298, _0x1545d1, _0x56f923) {
                for (_0x1545d1 = 0x0 > _0x56f923 ? _0x56f923 + _0x1545d1 : _0x56f923; 0x0 <= --_0x1545d1;) _0x1eb298['push'](_0x1545d1);
                return _0x1eb298;
            }),
            'gt': _0x1ad509(function(_0x2fa526, _0x393643, _0x3e05db) {
                for (_0x3e05db = 0x0 > _0x3e05db ? _0x3e05db + _0x393643 : _0x3e05db; ++_0x3e05db < _0x393643;) _0x2fa526['push'](_0x3e05db);
                return _0x2fa526;
            })
        }
    }, _0xa4675b['pseudos']['nth'] = _0xa4675b['pseudos']['eq'];
    for (_0x311fbb in {
            'radio': !0x0,
            'checkbox': !0x0,
            'file': !0x0,
            'password': !0x0,
            'image': !0x0
        }) _0xa4675b['pseudos'][_0x311fbb] = _0x4ed270(_0x311fbb);
    for (_0x311fbb in {
            'submit': !0x0,
            'reset': !0x0
        }) _0xa4675b['pseudos'][_0x311fbb] = _0xa1e3b7(_0x311fbb);
    _0x3732b6['prototype'] = _0xa4675b['filters'] = _0xa4675b['pseudos'], _0xa4675b['setFilters'] = new _0x3732b6(), _0x55e1b9 = _0x50f9d0['tokenize'] = function(_0x204c12, _0x1295b4) {
        var _0x59d87c, _0x484cdc, _0x51e55a, _0x12dad2, _0x1dcab5, _0x55c12a, _0x175247;
        if (_0x1dcab5 = _0x1b7ac3[_0x204c12 + '\x20']) return _0x1295b4 ? 0x0 : _0x1dcab5['slice'](0x0);
        _0x1dcab5 = _0x204c12, _0x55c12a = [];
        for (_0x175247 = _0xa4675b['preFilter']; _0x1dcab5;) {
            _0x59d87c && !(_0x484cdc = _0xe6cadd['exec'](_0x1dcab5)) || (_0x484cdc && (_0x1dcab5 = _0x1dcab5['slice'](_0x484cdc[0x0]['length']) || _0x1dcab5), _0x55c12a['push'](_0x51e55a = [])), _0x59d87c = !0x1, (_0x484cdc = _0x194b2b['exec'](_0x1dcab5)) && (_0x59d87c = _0x484cdc['shift'](), _0x51e55a['push']({
                'value': _0x59d87c,
                'type': _0x484cdc[0x0]['replace'](_0x307c4c, '\x20')
            }), _0x1dcab5 = _0x1dcab5['slice'](_0x59d87c['length']));
            for (_0x12dad2 in _0xa4675b['filter']) !(_0x484cdc = _0x1772b3[_0x12dad2]['exec'](_0x1dcab5)) || _0x175247[_0x12dad2] && !(_0x484cdc = _0x175247[_0x12dad2](_0x484cdc)) || (_0x59d87c = _0x484cdc['shift'](), _0x51e55a['push']({
                'value': _0x59d87c,
                'type': _0x12dad2,
                'matches': _0x484cdc
            }), _0x1dcab5 = _0x1dcab5['slice'](_0x59d87c['length']));
            if (!_0x59d87c) break;
        }
        return _0x1295b4 ? _0x1dcab5['length'] : _0x1dcab5 ? _0x50f9d0['error'](_0x204c12) : _0x1b7ac3(_0x204c12, _0x55c12a)['slice'](0x0);
    }, _0x36534b = (_0x4f50cf = _0x50f9d0['compile'] = function(_0x2f2592, _0x24fd76) {
        var _0x46ee56, _0x373e8a = [],
            _0x4a09a5 = [],
            _0x12802a = _0x5a3c9c[_0x2f2592 + '\x20'];
        if (!_0x12802a) {
            _0x24fd76 || (_0x24fd76 = _0x55e1b9(_0x2f2592));
            for (_0x46ee56 = _0x24fd76['length']; _0x46ee56--;) _0x12802a = _0x448784(_0x24fd76[_0x46ee56]), _0x12802a[_0xccc272] ? _0x373e8a['push'](_0x12802a) : _0x4a09a5['push'](_0x12802a);
            _0x46ee56 = _0x5a3c9c;
            var _0x5050bd = 0x0 < _0x373e8a['length'],
                _0x1359da = 0x0 < _0x4a09a5['length'],
                _0x12802a = function(_0x148d6c, _0x32a3b9, _0x29b782, _0xbfc43f, _0x343c6d) {
                    var _0x547f6b, _0x3b14e0, _0x214342, _0x4b49d5 = 0x0,
                        _0x42a74f = '0',
                        _0x5c68c1 = _0x148d6c && [],
                        _0x47e39a = [],
                        _0x4bcf39 = _0x48fe48,
                        _0x51953c = _0x148d6c || _0x1359da && _0xa4675b['find']['TAG']('*', _0x343c6d),
                        _0x439562 = _0x11bfef += null == _0x4bcf39 ? 0x1 : Math['random']() || 0.1,
                        _0xff3ec0 = _0x51953c['length'];
                    for (_0x343c6d && (_0x48fe48 = _0x32a3b9 === _0x579ada || _0x32a3b9 || _0x343c6d); _0x42a74f !== _0xff3ec0 && null != (_0x547f6b = _0x51953c[_0x42a74f]); _0x42a74f++) {
                        if (_0x1359da && _0x547f6b) {
                            _0x3b14e0 = 0x0;
                            for (_0x32a3b9 || _0x547f6b['ownerDocument'] === _0x579ada || (_0x36ab86(_0x547f6b), _0x29b782 = !_0x174b89); _0x214342 = _0x4a09a5[_0x3b14e0++];)
                                if (_0x214342(_0x547f6b, _0x32a3b9 || _0x579ada, _0x29b782)) {
                                    _0xbfc43f['push'](_0x547f6b);
                                    break;
                                }
                            _0x343c6d && (_0x11bfef = _0x439562);
                        }
                        _0x5050bd && ((_0x547f6b = !_0x214342 && _0x547f6b) && _0x4b49d5--, _0x148d6c && _0x5c68c1['push'](_0x547f6b));
                    }
                    if (_0x4b49d5 += _0x42a74f, _0x5050bd && _0x42a74f !== _0x4b49d5) {
                        for (_0x3b14e0 = 0x0; _0x214342 = _0x373e8a[_0x3b14e0++];) _0x214342(_0x5c68c1, _0x47e39a, _0x32a3b9, _0x29b782);
                        if (_0x148d6c) {
                            if (0x0 < _0x4b49d5) {
                                for (; _0x42a74f--;) _0x5c68c1[_0x42a74f] || _0x47e39a[_0x42a74f] || (_0x47e39a[_0x42a74f] = _0x2ee743['call'](_0xbfc43f));
                            }
                            _0x47e39a = _0x3463ec(_0x47e39a);
                        }
                        _0x4d253d['apply'](_0xbfc43f, _0x47e39a), _0x343c6d && !_0x148d6c && 0x0 < _0x47e39a['length'] && 0x1 < _0x4b49d5 + _0x373e8a['length'] && _0x50f9d0['uniqueSort'](_0xbfc43f);
                    }
                    return _0x343c6d && (_0x11bfef = _0x439562, _0x48fe48 = _0x4bcf39), _0x5c68c1;
                },
                _0x12802a = _0x5050bd ? _0x28dd72(_0x12802a) : _0x12802a,
                _0x12802a = _0x46ee56(_0x2f2592, _0x12802a);
            _0x12802a['selector'] = _0x2f2592;
        }
        return _0x12802a;
    }, _0x55478e = _0x50f9d0['select'] = function(_0x35c9f0, _0x5bf15f, _0x50828e, _0x18d061) {
        var _0x452771, _0x112b6f, _0x290373, _0x35eec0, _0x5ccf7c, _0x448095 = 'function' == typeof _0x35c9f0 && _0x35c9f0,
            _0x1669a9 = !_0x18d061 && _0x55e1b9(_0x35c9f0 = _0x448095['selector'] || _0x35c9f0);
        if (_0x50828e = _0x50828e || [], 0x1 === _0x1669a9['length']) {
            if (_0x112b6f = _0x1669a9[0x0] = _0x1669a9[0x0]['slice'](0x0), 0x2 < _0x112b6f['length'] && 'ID' === (_0x290373 = _0x112b6f[0x0])['type'] && 0x9 === _0x5bf15f['nodeType'] && _0x174b89 && _0xa4675b['relative'][_0x112b6f[0x1]['type']]) {
                if (_0x5bf15f = (_0xa4675b['find']['ID'](_0x290373['matches'][0x0]['replace'](_0x2f9cb5, _0x4a19c1), _0x5bf15f) || [])[0x0], !_0x5bf15f) return _0x50828e;
                _0x448095 && (_0x5bf15f = _0x5bf15f['parentNode']), _0x35c9f0 = _0x35c9f0['slice'](_0x112b6f['shift']()['value']['length']);
            }
            for (_0x452771 = _0x1772b3['needsContext']['test'](_0x35c9f0) ? 0x0 : _0x112b6f['length']; _0x452771-- && !(_0x290373 = _0x112b6f[_0x452771], _0xa4675b['relative'][_0x35eec0 = _0x290373['type']]);)
                if ((_0x5ccf7c = _0xa4675b['find'][_0x35eec0]) && (_0x18d061 = _0x5ccf7c(_0x290373['matches'][0x0]['replace'](_0x2f9cb5, _0x4a19c1), _0x557928['test'](_0x112b6f[0x0]['type']) && _0x777ee7(_0x5bf15f['parentNode']) || _0x5bf15f))) {
                    if (_0x112b6f['splice'](_0x452771, 0x1), _0x35c9f0 = _0x18d061['length'] && _0x30bbec(_0x112b6f), !_0x35c9f0) return _0x4d253d['apply'](_0x50828e, _0x18d061), _0x50828e;
                    break;
                }
        }
        return (_0x448095 || _0x4f50cf(_0x35c9f0, _0x1669a9))(_0x18d061, _0x5bf15f, !_0x174b89, _0x50828e, !_0x5bf15f || _0x557928['test'](_0x35c9f0) && _0x777ee7(_0x5bf15f['parentNode']) || _0x5bf15f), _0x50828e;
    }, _0x52753c['sortStable'] = _0xccc272['split']('')['sort'](_0x155853)['join']('') === _0xccc272, _0x52753c['detectDuplicates'] = !!_0x259f73, _0x36ab86(), _0x52753c['sortDetached'] = _0x1cd257(function(_0x345179) {
        return 0x1 & _0x345179['compareDocumentPosition'](_0x579ada['createElement']('fieldset'));
    }), _0x1cd257(function(_0x4520b1) {
        return _0x4520b1['innerHTML'] = '<a\x20href=\x27#\x27></a>', '#' === _0x4520b1['firstChild']['getAttribute']('href');
    }) || _0x738a73('type|href|height|width', function(_0x19bb2a, _0x5030ef, _0xe7c48e) {
        if (!_0xe7c48e) return _0x19bb2a['getAttribute'](_0x5030ef, 'type' === _0x5030ef['toLowerCase']() ? 0x1 : 0x2);
    }), _0x52753c['attributes'] && _0x1cd257(function(_0x3c373) {
        return _0x3c373['innerHTML'] = '<input/>', _0x3c373['firstChild']['setAttribute']('value', ''), '' === _0x3c373['firstChild']['getAttribute']('value');
    }) || _0x738a73('value', function(_0x48e5cd, _0x42ead0, _0x269e7c) {
        if (!_0x269e7c && 'input' === _0x48e5cd['nodeName']['toLowerCase']()) return _0x48e5cd['defaultValue'];
    }), _0x1cd257(function(_0xf5aa33) {
        return null == _0xf5aa33['getAttribute']('disabled');
    }) || _0x738a73('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function(_0x2f5690, _0x428996, _0x352be9) {
        var _0x2d7eb5;
        if (!_0x352be9) return !0x0 === _0x2f5690[_0x428996] ? _0x428996['toLowerCase']() : (_0x2d7eb5 = _0x2f5690['getAttributeNode'](_0x428996)) && _0x2d7eb5['specified'] ? _0x2d7eb5['value'] : null;
    }), _0x50f9d0), _0x3804bf['find'] = _0x36534b, _0x3804bf['expr'] = _0x36534b['selectors'], _0x3804bf['expr'][':'] = _0x3804bf['expr']['pseudos'], _0x3804bf['uniqueSort'] = _0x3804bf['unique'] = _0x36534b['uniqueSort'], _0x3804bf['text'] = _0x36534b['getText'], _0x3804bf['isXMLDoc'] = _0x36534b['isXML'], _0x3804bf['contains'] = _0x36534b['contains'], _0x3804bf['escapeSelector'] = _0x36534b['escape'];
    var _0x40c94d = function(_0x57e970, _0x313e76, _0x3ff9c7) {
            for (var _0x473107 = [], _0x4e3530 = void 0x0 !== _0x3ff9c7;
                (_0x57e970 = _0x57e970[_0x313e76]) && 0x9 !== _0x57e970['nodeType'];)
                if (0x1 === _0x57e970['nodeType']) {
                    if (_0x4e3530 && _0x3804bf(_0x57e970)['is'](_0x3ff9c7)) break;
                    _0x473107['push'](_0x57e970);
                }
            return _0x473107;
        },
        _0x5fd229 = function(_0x536392, _0x5a8f0f) {
            for (var _0x388dcc = []; _0x536392; _0x536392 = _0x536392['nextSibling']) 0x1 === _0x536392['nodeType'] && _0x536392 !== _0x5a8f0f && _0x388dcc['push'](_0x536392);
            return _0x388dcc;
        },
        _0x35332b = _0x3804bf['expr']['match']['needsContext'],
        _0x3e5a45 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        _0x3337fa = /^.[^:#\[\.,]*$/;
    _0x3804bf['filter'] = function(_0x4af413, _0x3b13f9, _0x417c80) {
        var _0x4ace36 = _0x3b13f9[0x0];
        return _0x417c80 && (_0x4af413 = ':not(' + _0x4af413 + ')'), 0x1 === _0x3b13f9['length'] && 0x1 === _0x4ace36['nodeType'] ? _0x3804bf['find']['matchesSelector'](_0x4ace36, _0x4af413) ? [_0x4ace36] : [] : _0x3804bf['find']['matches'](_0x4af413, _0x3804bf['grep'](_0x3b13f9, function(_0x1eb0f7) {
            return 0x1 === _0x1eb0f7['nodeType'];
        }));
    }, _0x3804bf['fn']['extend']({
        'find': function(_0x7cb86b) {
            var _0x6c5c45, _0x5c57ac, _0x3073af = this['length'],
                _0x46c829 = this;
            if ('string' != typeof _0x7cb86b) return this['pushStack'](_0x3804bf(_0x7cb86b)['filter'](function() {
                for (_0x6c5c45 = 0x0; _0x6c5c45 < _0x3073af; _0x6c5c45++)
                    if (_0x3804bf['contains'](_0x46c829[_0x6c5c45], this)) return !0x0;
            }));
            _0x5c57ac = this['pushStack']([]);
            for (_0x6c5c45 = 0x0; _0x6c5c45 < _0x3073af; _0x6c5c45++) _0x3804bf['find'](_0x7cb86b, _0x46c829[_0x6c5c45], _0x5c57ac);
            return 0x1 < _0x3073af ? _0x3804bf['uniqueSort'](_0x5c57ac) : _0x5c57ac;
        },
        'filter': function(_0x340935) {
            return this['pushStack'](_0x24ca91(this, _0x340935 || [], !0x1));
        },
        'not': function(_0x1024b1) {
            return this['pushStack'](_0x24ca91(this, _0x1024b1 || [], !0x0));
        },
        'is': function(_0x2efdcf) {
            return !!_0x24ca91(this, 'string' == typeof _0x2efdcf && _0x35332b['test'](_0x2efdcf) ? _0x3804bf(_0x2efdcf) : _0x2efdcf || [], !0x1)['length'];
        }
    });
    var _0x2c245e, _0x29b26c = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_0x3804bf['fn']['init'] = function(_0x675ad3, _0xad0a20, _0x2d8020) {
        var _0x1330fa, _0x150870;
        if (!_0x675ad3) return this;
        if (_0x2d8020 = _0x2d8020 || _0x2c245e, 'string' == typeof _0x675ad3) {
            if (_0x1330fa = '<' === _0x675ad3[0x0] && '>' === _0x675ad3[_0x675ad3['length'] - 0x1] && 0x3 <= _0x675ad3['length'] ? [null, _0x675ad3, null] : _0x29b26c['exec'](_0x675ad3), !_0x1330fa || !_0x1330fa[0x1] && _0xad0a20) return !_0xad0a20 || _0xad0a20['jquery'] ? (_0xad0a20 || _0x2d8020)['find'](_0x675ad3) : this['constructor'](_0xad0a20)['find'](_0x675ad3);
            if (_0x1330fa[0x1]) {
                if (_0xad0a20 = _0xad0a20 instanceof _0x3804bf ? _0xad0a20[0x0] : _0xad0a20, _0x3804bf['merge'](this, _0x3804bf['parseHTML'](_0x1330fa[0x1], _0xad0a20 && _0xad0a20['nodeType'] ? _0xad0a20['ownerDocument'] || _0xad0a20 : _0x45a45f, !0x0)), _0x3e5a45['test'](_0x1330fa[0x1]) && _0x3804bf['isPlainObject'](_0xad0a20)) {
                    for (_0x1330fa in _0xad0a20) _0x3804bf['isFunction'](this[_0x1330fa]) ? this[_0x1330fa](_0xad0a20[_0x1330fa]) : this['attr'](_0x1330fa, _0xad0a20[_0x1330fa]);
                }
                return this;
            }
            return _0x150870 = _0x45a45f['getElementById'](_0x1330fa[0x2]), _0x150870 && (this[0x0] = _0x150870, this['length'] = 0x1), this;
        }
        return _0x675ad3['nodeType'] ? (this[0x0] = _0x675ad3, this['length'] = 0x1, this) : _0x3804bf['isFunction'](_0x675ad3) ? void 0x0 !== _0x2d8020['ready'] ? _0x2d8020['ready'](_0x675ad3) : _0x675ad3(_0x3804bf) : _0x3804bf['makeArray'](_0x675ad3, this);
    })['prototype'] = _0x3804bf['fn'], _0x2c245e = _0x3804bf(_0x45a45f);
    var _0x4d5618 = /^(?:parents|prev(?:Until|All))/,
        _0x501baf = {
            'children': !0x0,
            'contents': !0x0,
            'next': !0x0,
            'prev': !0x0
        };
    _0x3804bf['fn']['extend']({
        'has': function(_0x5ea888) {
            var _0x12232c = _0x3804bf(_0x5ea888, this),
                _0x4bd502 = _0x12232c['length'];
            return this['filter'](function() {
                for (var _0x427a13 = 0x0; _0x427a13 < _0x4bd502; _0x427a13++)
                    if (_0x3804bf['contains'](this, _0x12232c[_0x427a13])) return !0x0;
            });
        },
        'closest': function(_0x8d89a2, _0x1596d2) {
            var _0x4933e3, _0x15f623 = 0x0,
                _0x43d609 = this['length'],
                _0x4e2335 = [],
                _0x53511b = 'string' != typeof _0x8d89a2 && _0x3804bf(_0x8d89a2);
            if (!_0x35332b['test'](_0x8d89a2)) {
                for (; _0x15f623 < _0x43d609; _0x15f623++)
                    for (_0x4933e3 = this[_0x15f623]; _0x4933e3 && _0x4933e3 !== _0x1596d2; _0x4933e3 = _0x4933e3['parentNode'])
                        if (0xb > _0x4933e3['nodeType'] && (_0x53511b ? -0x1 < _0x53511b['index'](_0x4933e3) : 0x1 === _0x4933e3['nodeType'] && _0x3804bf['find']['matchesSelector'](_0x4933e3, _0x8d89a2))) {
                            _0x4e2335['push'](_0x4933e3);
                            break;
                        }
            }
            return this['pushStack'](0x1 < _0x4e2335['length'] ? _0x3804bf['uniqueSort'](_0x4e2335) : _0x4e2335);
        },
        'index': function(_0x53657c) {
            return _0x53657c ? 'string' == typeof _0x53657c ? _0x20e096['call'](_0x3804bf(_0x53657c), this[0x0]) : _0x20e096['call'](this, _0x53657c['jquery'] ? _0x53657c[0x0] : _0x53657c) : this[0x0] && this[0x0]['parentNode'] ? this['first']()['prevAll']()['length'] : -0x1;
        },
        'add': function(_0x579de7, _0x247e95) {
            return this['pushStack'](_0x3804bf['uniqueSort'](_0x3804bf['merge'](this['get'](), _0x3804bf(_0x579de7, _0x247e95))));
        },
        'addBack': function(_0x208af0) {
            return this['add'](null == _0x208af0 ? this['prevObject'] : this['prevObject']['filter'](_0x208af0));
        }
    }), _0x3804bf['each']({
        'parent': function(_0xfb4dca) {
            return (_0xfb4dca = _0xfb4dca['parentNode']) && 0xb !== _0xfb4dca['nodeType'] ? _0xfb4dca : null;
        },
        'parents': function(_0x45f82f) {
            return _0x40c94d(_0x45f82f, 'parentNode');
        },
        'parentsUntil': function(_0x4a4943, _0x2a6521, _0x29fad5) {
            return _0x40c94d(_0x4a4943, 'parentNode', _0x29fad5);
        },
        'next': function(_0x3d9a0a) {
            return _0x59fa4c(_0x3d9a0a, 'nextSibling');
        },
        'prev': function(_0x4ea61d) {
            return _0x59fa4c(_0x4ea61d, 'previousSibling');
        },
        'nextAll': function(_0x483497) {
            return _0x40c94d(_0x483497, 'nextSibling');
        },
        'prevAll': function(_0x4b4d14) {
            return _0x40c94d(_0x4b4d14, 'previousSibling');
        },
        'nextUntil': function(_0x525db2, _0x2e06e3, _0x16b18b) {
            return _0x40c94d(_0x525db2, 'nextSibling', _0x16b18b);
        },
        'prevUntil': function(_0x2d6020, _0x4beee1, _0x3ce56c) {
            return _0x40c94d(_0x2d6020, 'previousSibling', _0x3ce56c);
        },
        'siblings': function(_0x49a89d) {
            return _0x5fd229((_0x49a89d['parentNode'] || {})['firstChild'], _0x49a89d);
        },
        'children': function(_0x1df87f) {
            return _0x5fd229(_0x1df87f['firstChild']);
        },
        'contents': function(_0x7737a0) {
            return _0x504a90(_0x7737a0, 'iframe') ? _0x7737a0['contentDocument'] : (_0x504a90(_0x7737a0, 'template') && (_0x7737a0 = _0x7737a0['content'] || _0x7737a0), _0x3804bf['merge']([], _0x7737a0['childNodes']));
        }
    }, function(_0x29f7fb, _0x37b6c9) {
        _0x3804bf['fn'][_0x29f7fb] = function(_0x59c65f, _0x3f58ea) {
            var _0x2b360e = _0x3804bf['map'](this, _0x37b6c9, _0x59c65f);
            return 'Until' !== _0x29f7fb['slice'](-0x5) && (_0x3f58ea = _0x59c65f), _0x3f58ea && 'string' == typeof _0x3f58ea && (_0x2b360e = _0x3804bf['filter'](_0x3f58ea, _0x2b360e)), 0x1 < this['length'] && (_0x501baf[_0x29f7fb] || _0x3804bf['uniqueSort'](_0x2b360e), _0x4d5618['test'](_0x29f7fb) && _0x2b360e['reverse']()), this['pushStack'](_0x2b360e);
        };
    });
    var _0x3ac1b9 = /[^\x20\t\r\n\f]+/g;
    _0x3804bf['Callbacks'] = function(_0x428afa) {
        var _0x151bf1;
        if ('string' == typeof _0x428afa) {
            var _0x3a41a4 = {};
            _0x151bf1 = (_0x3804bf['each'](_0x428afa['match'](_0x3ac1b9) || [], function(_0x561cf4, _0x539e52) {
                _0x3a41a4[_0x539e52] = !0x0;
            }), _0x3a41a4);
        } else _0x151bf1 = _0x3804bf['extend']({}, _0x428afa);
        _0x428afa = _0x151bf1;
        var _0x404b32, _0x511e4d, _0x575ba7, _0x41b485, _0x3ced5c = [],
            _0x190cf8 = [],
            _0x5ae528 = -0x1,
            _0x3f4d8b = function() {
                _0x41b485 = _0x41b485 || _0x428afa['once'];
                for (_0x575ba7 = _0x404b32 = !0x0; _0x190cf8['length']; _0x5ae528 = -0x1)
                    for (_0x511e4d = _0x190cf8['shift'](); ++_0x5ae528 < _0x3ced5c['length'];) !0x1 === _0x3ced5c[_0x5ae528]['apply'](_0x511e4d[0x0], _0x511e4d[0x1]) && _0x428afa['stopOnFalse'] && (_0x5ae528 = _0x3ced5c['length'], _0x511e4d = !0x1);
                _0x428afa['memory'] || (_0x511e4d = !0x1), _0x404b32 = !0x1, _0x41b485 && (_0x3ced5c = _0x511e4d ? [] : '');
            },
            _0x23f5a6 = {
                'add': function() {
                    return _0x3ced5c && (_0x511e4d && !_0x404b32 && (_0x5ae528 = _0x3ced5c['length'] - 0x1, _0x190cf8['push'](_0x511e4d)), function _0x8b7404(_0xd6dad4) {
                        _0x3804bf['each'](_0xd6dad4, function(_0x1975ab, _0x423ce7) {
                            _0x3804bf['isFunction'](_0x423ce7) ? _0x428afa['unique'] && _0x23f5a6['has'](_0x423ce7) || _0x3ced5c['push'](_0x423ce7) : _0x423ce7 && _0x423ce7['length'] && 'string' !== _0x3804bf['type'](_0x423ce7) && _0x8b7404(_0x423ce7);
                        });
                    }(arguments), _0x511e4d && !_0x404b32 && _0x3f4d8b()), this;
                },
                'remove': function() {
                    return _0x3804bf['each'](arguments, function(_0x3804e8, _0x1580bd) {
                        for (var _0x3dd9b4; - 0x1 < (_0x3dd9b4 = _0x3804bf['inArray'](_0x1580bd, _0x3ced5c, _0x3dd9b4));) _0x3ced5c['splice'](_0x3dd9b4, 0x1), _0x3dd9b4 <= _0x5ae528 && _0x5ae528--;
                    }), this;
                },
                'has': function(_0x10a16e) {
                    return _0x10a16e ? -0x1 < _0x3804bf['inArray'](_0x10a16e, _0x3ced5c) : 0x0 < _0x3ced5c['length'];
                },
                'empty': function() {
                    return _0x3ced5c && (_0x3ced5c = []), this;
                },
                'disable': function() {
                    return _0x41b485 = _0x190cf8 = [], _0x3ced5c = _0x511e4d = '', this;
                },
                'disabled': function() {
                    return !_0x3ced5c;
                },
                'lock': function() {
                    return _0x41b485 = _0x190cf8 = [], _0x511e4d || _0x404b32 || (_0x3ced5c = _0x511e4d = ''), this;
                },
                'locked': function() {
                    return !!_0x41b485;
                },
                'fireWith': function(_0xdc5ebc, _0x54a42a) {
                    return _0x41b485 || (_0x54a42a = _0x54a42a || [], _0x54a42a = [_0xdc5ebc, _0x54a42a['slice'] ? _0x54a42a['slice']() : _0x54a42a], _0x190cf8['push'](_0x54a42a), _0x404b32 || _0x3f4d8b()), this;
                },
                'fire': function() {
                    return _0x23f5a6['fireWith'](this, arguments), this;
                },
                'fired': function() {
                    return !!_0x575ba7;
                }
            };
        return _0x23f5a6;
    }, _0x3804bf['extend']({
        'Deferred': function(_0x1c566e) {
            var _0x345530 = [
                    ['notify', 'progress', _0x3804bf['Callbacks']('memory'), _0x3804bf['Callbacks']('memory'), 0x2],
                    ['resolve', 'done', _0x3804bf['Callbacks']('once\x20memory'), _0x3804bf['Callbacks']('once\x20memory'), 0x0, 'resolved'],
                    ['reject', 'fail', _0x3804bf['Callbacks']('once\x20memory'), _0x3804bf['Callbacks']('once\x20memory'), 0x1, 'rejected']
                ],
                _0x55c8da = 'pending',
                _0x300d7f = {
                    'state': function() {
                        return _0x55c8da;
                    },
                    'always': function() {
                        return _0x38a732['done'](arguments)['fail'](arguments), this;
                    },
                    'catch': function(_0x1fab01) {
                        return _0x300d7f['then'](null, _0x1fab01);
                    },
                    'pipe': function() {
                        var _0x183466 = arguments;
                        return _0x3804bf['Deferred'](function(_0x437d01) {
                            _0x3804bf['each'](_0x345530, function(_0x176a47, _0x2d56fd) {
                                var _0x566122 = _0x3804bf['isFunction'](_0x183466[_0x2d56fd[0x4]]) && _0x183466[_0x2d56fd[0x4]];
                                _0x38a732[_0x2d56fd[0x1]](function() {
                                    var _0x1b86c0 = _0x566122 && _0x566122['apply'](this, arguments);
                                    _0x1b86c0 && _0x3804bf['isFunction'](_0x1b86c0['promise']) ? _0x1b86c0['promise']()['progress'](_0x437d01['notify'])['done'](_0x437d01['resolve'])['fail'](_0x437d01['reject']) : _0x437d01[_0x2d56fd[0x0] + 'With'](this, _0x566122 ? [_0x1b86c0] : arguments);
                                });
                            }), _0x183466 = null;
                        })['promise']();
                    },
                    'then': function(_0x545e60, _0x1b5c76, _0x3a567f) {
                        function _0x3ec665(_0x43781c, _0x16038f, _0x2b1a61, _0x1f53a0) {
                            return function() {
                                var _0x280640 = this,
                                    _0x21a124 = arguments,
                                    _0x53f684 = function() {
                                        var _0x46ac48, _0xbee67a;
                                        if (!(_0x43781c < _0x49e2e9)) {
                                            if (_0x46ac48 = _0x2b1a61['apply'](_0x280640, _0x21a124), _0x46ac48 === _0x16038f['promise']()) throw new TypeError('Thenable\x20self-resolution');
                                            _0xbee67a = _0x46ac48 && ('object' == typeof _0x46ac48 || 'function' == typeof _0x46ac48) && _0x46ac48['then'], _0x3804bf['isFunction'](_0xbee67a) ? _0x1f53a0 ? _0xbee67a['call'](_0x46ac48, _0x3ec665(_0x49e2e9, _0x16038f, _0x42d622, _0x1f53a0), _0x3ec665(_0x49e2e9, _0x16038f, _0x1b91b6, _0x1f53a0)) : (_0x49e2e9++, _0xbee67a['call'](_0x46ac48, _0x3ec665(_0x49e2e9, _0x16038f, _0x42d622, _0x1f53a0), _0x3ec665(_0x49e2e9, _0x16038f, _0x1b91b6, _0x1f53a0), _0x3ec665(_0x49e2e9, _0x16038f, _0x42d622, _0x16038f['notifyWith']))) : (_0x2b1a61 !== _0x42d622 && (_0x280640 = void 0x0, _0x21a124 = [_0x46ac48]), (_0x1f53a0 || _0x16038f['resolveWith'])(_0x280640, _0x21a124));
                                        }
                                    },
                                    _0x2c8b85 = _0x1f53a0 ? _0x53f684 : function() {
                                        try {
                                            _0x53f684();
                                        } catch (_0x3b098a) {
                                            _0x3804bf['Deferred']['exceptionHook'] && _0x3804bf['Deferred']['exceptionHook'](_0x3b098a, _0x2c8b85['stackTrace']), _0x43781c + 0x1 >= _0x49e2e9 && (_0x2b1a61 !== _0x1b91b6 && (_0x280640 = void 0x0, _0x21a124 = [_0x3b098a]), _0x16038f['rejectWith'](_0x280640, _0x21a124));
                                        }
                                    };
                                _0x43781c ? _0x2c8b85() : (_0x3804bf['Deferred']['getStackHook'] && (_0x2c8b85['stackTrace'] = _0x3804bf['Deferred']['getStackHook']()), _0x27d1a6['setTimeout'](_0x2c8b85));
                            };
                        }
                        var _0x49e2e9 = 0x0;
                        return _0x3804bf['Deferred'](function(_0x928e0f) {
                            _0x345530[0x0][0x3]['add'](_0x3ec665(0x0, _0x928e0f, _0x3804bf['isFunction'](_0x3a567f) ? _0x3a567f : _0x42d622, _0x928e0f['notifyWith'])), _0x345530[0x1][0x3]['add'](_0x3ec665(0x0, _0x928e0f, _0x3804bf['isFunction'](_0x545e60) ? _0x545e60 : _0x42d622)), _0x345530[0x2][0x3]['add'](_0x3ec665(0x0, _0x928e0f, _0x3804bf['isFunction'](_0x1b5c76) ? _0x1b5c76 : _0x1b91b6));
                        })['promise']();
                    },
                    'promise': function(_0xcb89de) {
                        return null != _0xcb89de ? _0x3804bf['extend'](_0xcb89de, _0x300d7f) : _0x300d7f;
                    }
                },
                _0x38a732 = {};
            return _0x3804bf['each'](_0x345530, function(_0x27fd31, _0x514ceb) {
                var _0x111fe1 = _0x514ceb[0x2],
                    _0x30a76f = _0x514ceb[0x5];
                _0x300d7f[_0x514ceb[0x1]] = _0x111fe1['add'], _0x30a76f && _0x111fe1['add'](function() {
                    _0x55c8da = _0x30a76f;
                }, _0x345530[0x3 - _0x27fd31][0x2]['disable'], _0x345530[0x0][0x2]['lock']), _0x111fe1['add'](_0x514ceb[0x3]['fire']), _0x38a732[_0x514ceb[0x0]] = function() {
                    return _0x38a732[_0x514ceb[0x0] + 'With'](this === _0x38a732 ? void 0x0 : this, arguments), this;
                }, _0x38a732[_0x514ceb[0x0] + 'With'] = _0x111fe1['fireWith'];
            }), _0x300d7f['promise'](_0x38a732), _0x1c566e && _0x1c566e['call'](_0x38a732, _0x38a732), _0x38a732;
        },
        'when': function(_0x242542) {
            var _0x3746f4 = arguments['length'],
                _0x199f12 = _0x3746f4,
                _0x12c086 = Array(_0x199f12),
                _0x2854e2 = _0x600aa4['call'](arguments),
                _0x3e678d = _0x3804bf['Deferred'](),
                _0x4648b9 = function(_0xfd78ce) {
                    return function(_0x570b64) {
                        _0x12c086[_0xfd78ce] = this, _0x2854e2[_0xfd78ce] = 0x1 < arguments['length'] ? _0x600aa4['call'](arguments) : _0x570b64, --_0x3746f4 || _0x3e678d['resolveWith'](_0x12c086, _0x2854e2);
                    };
                };
            if (0x1 >= _0x3746f4 && (_0x817ffe(_0x242542, _0x3e678d['done'](_0x4648b9(_0x199f12))['resolve'], _0x3e678d['reject'], !_0x3746f4), 'pending' === _0x3e678d['state']() || _0x3804bf['isFunction'](_0x2854e2[_0x199f12] && _0x2854e2[_0x199f12]['then']))) return _0x3e678d['then']();
            for (; _0x199f12--;) _0x817ffe(_0x2854e2[_0x199f12], _0x4648b9(_0x199f12), _0x3e678d['reject']);
            return _0x3e678d['promise']();
        }
    });
    var _0x5c304e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _0x3804bf['Deferred']['exceptionHook'] = function(_0x491efd, _0x12f7f2) {
        _0x27d1a6['console'] && _0x27d1a6['console']['warn'] && _0x491efd && _0x5c304e['test'](_0x491efd['name']) && _0x27d1a6['console']['warn']('jQuery.Deferred\x20exception:\x20' + _0x491efd['message'], _0x491efd['stack'], _0x12f7f2);
    }, _0x3804bf['readyException'] = function(_0x56adda) {
        _0x27d1a6['setTimeout'](function() {
            throw _0x56adda;
        });
    };
    var _0x51628a = _0x3804bf['Deferred']();
    _0x3804bf['fn']['ready'] = function(_0x2025b6) {
        return _0x51628a['then'](_0x2025b6)['catch'](function(_0x1315a3) {
            _0x3804bf['readyException'](_0x1315a3);
        }), this;
    }, _0x3804bf['extend']({
        'isReady': !0x1,
        'readyWait': 0x1,
        'ready': function(_0x72799c) {
            (!0x0 === _0x72799c ? --_0x3804bf['readyWait'] : _0x3804bf['isReady']) || (_0x3804bf['isReady'] = !0x0, !0x0 !== _0x72799c && 0x0 < --_0x3804bf['readyWait'] || _0x51628a['resolveWith'](_0x45a45f, [_0x3804bf]));
        }
    }), _0x3804bf['ready']['then'] = _0x51628a['then'], 'complete' === _0x45a45f['readyState'] || 'loading' !== _0x45a45f['readyState'] && !_0x45a45f['documentElement']['doScroll'] ? _0x27d1a6['setTimeout'](_0x3804bf['ready']) : (_0x45a45f['addEventListener']('DOMContentLoaded', _0x5edaf5), _0x27d1a6['addEventListener']('load', _0x5edaf5));
    var _0x545439 = function(_0x1d4b88, _0x26b34a, _0x3a3d8e, _0x4240ff, _0x4733e7, _0x33deea, _0x31ac99) {
            var _0x3770e6 = 0x0,
                _0x36e87b = _0x1d4b88['length'],
                _0xba1ef7 = null == _0x3a3d8e;
            if ('object' === _0x3804bf['type'](_0x3a3d8e)) {
                for (_0x3770e6 in (_0x4733e7 = !0x0, _0x3a3d8e)) _0x545439(_0x1d4b88, _0x26b34a, _0x3770e6, _0x3a3d8e[_0x3770e6], !0x0, _0x33deea, _0x31ac99);
            } else {
                if (void 0x0 !== _0x4240ff && (_0x4733e7 = !0x0, _0x3804bf['isFunction'](_0x4240ff) || (_0x31ac99 = !0x0), _0xba1ef7 && (_0x31ac99 ? (_0x26b34a['call'](_0x1d4b88, _0x4240ff), _0x26b34a = null) : (_0xba1ef7 = _0x26b34a, _0x26b34a = function(_0x1f473e, _0xa50d72, _0x1a6c0f) {
                        return _0xba1ef7['call'](_0x3804bf(_0x1f473e), _0x1a6c0f);
                    })), _0x26b34a)) {
                    for (; _0x3770e6 < _0x36e87b; _0x3770e6++) _0x26b34a(_0x1d4b88[_0x3770e6], _0x3a3d8e, _0x31ac99 ? _0x4240ff : _0x4240ff['call'](_0x1d4b88[_0x3770e6], _0x3770e6, _0x26b34a(_0x1d4b88[_0x3770e6], _0x3a3d8e)));
                }
            }
            return _0x4733e7 ? _0x1d4b88 : _0xba1ef7 ? _0x26b34a['call'](_0x1d4b88) : _0x36e87b ? _0x26b34a(_0x1d4b88[0x0], _0x3a3d8e) : _0x33deea;
        },
        _0x109a24 = function(_0x238871) {
            return 0x1 === _0x238871['nodeType'] || 0x9 === _0x238871['nodeType'] || !+_0x238871['nodeType'];
        };
    _0x351562['uid'] = 0x1, _0x351562['prototype'] = {
        'cache': function(_0x39a290) {
            var _0x33593c = _0x39a290[this['expando']];
            return _0x33593c || (_0x33593c = {}, _0x109a24(_0x39a290) && (_0x39a290['nodeType'] ? _0x39a290[this['expando']] = _0x33593c : Object['defineProperty'](_0x39a290, this['expando'], {
                'value': _0x33593c,
                'configurable': !0x0
            }))), _0x33593c;
        },
        'set': function(_0xfd2af4, _0x3380b3, _0x5f0602) {
            var _0x4f646f;
            _0xfd2af4 = this['cache'](_0xfd2af4);
            if ('string' == typeof _0x3380b3) _0xfd2af4[_0x3804bf['camelCase'](_0x3380b3)] = _0x5f0602;
            else {
                for (_0x4f646f in _0x3380b3) _0xfd2af4[_0x3804bf['camelCase'](_0x4f646f)] = _0x3380b3[_0x4f646f];
            }
            return _0xfd2af4;
        },
        'get': function(_0xe1da8f, _0xa80854) {
            return void 0x0 === _0xa80854 ? this['cache'](_0xe1da8f) : _0xe1da8f[this['expando']] && _0xe1da8f[this['expando']][_0x3804bf['camelCase'](_0xa80854)];
        },
        'access': function(_0x2f6b7a, _0x59d518, _0x2668dd) {
            return void 0x0 === _0x59d518 || _0x59d518 && 'string' == typeof _0x59d518 && void 0x0 === _0x2668dd ? this['get'](_0x2f6b7a, _0x59d518) : (this['set'](_0x2f6b7a, _0x59d518, _0x2668dd), void 0x0 !== _0x2668dd ? _0x2668dd : _0x59d518);
        },
        'remove': function(_0x3eab53, _0xbb308c) {
            var _0x421194, _0xdcf514 = _0x3eab53[this['expando']];
            if (void 0x0 !== _0xdcf514) {
                if (void 0x0 !== _0xbb308c) {
                    Array['isArray'](_0xbb308c) ? _0xbb308c = _0xbb308c['map'](_0x3804bf['camelCase']) : (_0xbb308c = _0x3804bf['camelCase'](_0xbb308c), _0xbb308c = _0xbb308c in _0xdcf514 ? [_0xbb308c] : _0xbb308c['match'](_0x3ac1b9) || []);
                    for (_0x421194 = _0xbb308c['length']; _0x421194--;) delete _0xdcf514[_0xbb308c[_0x421194]];
                }(void 0x0 === _0xbb308c || _0x3804bf['isEmptyObject'](_0xdcf514)) && (_0x3eab53['nodeType'] ? _0x3eab53[this['expando']] = void 0x0 : delete _0x3eab53[this['expando']]);
            }
        },
        'hasData': function(_0x131fd3) {
            return _0x131fd3 = _0x131fd3[this['expando']], void 0x0 !== _0x131fd3 && !_0x3804bf['isEmptyObject'](_0x131fd3);
        }
    };
    var _0x460f18 = new _0x351562(),
        _0x5dc0e2 = new _0x351562(),
        _0x2852c1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _0x1c1842 = /[A-Z]/g;
    _0x3804bf['extend']({
        'hasData': function(_0x4bcd57) {
            return _0x5dc0e2['hasData'](_0x4bcd57) || _0x460f18['hasData'](_0x4bcd57);
        },
        'data': function(_0x14ced6, _0x44ef7b, _0x42d68b) {
            return _0x5dc0e2['access'](_0x14ced6, _0x44ef7b, _0x42d68b);
        },
        'removeData': function(_0x1a1231, _0x37c78b) {
            _0x5dc0e2['remove'](_0x1a1231, _0x37c78b);
        },
        '_data': function(_0x56619b, _0x4858d9, _0x5d1af4) {
            return _0x460f18['access'](_0x56619b, _0x4858d9, _0x5d1af4);
        },
        '_removeData': function(_0x3aecdc, _0x260911) {
            _0x460f18['remove'](_0x3aecdc, _0x260911);
        }
    }), _0x3804bf['fn']['extend']({
        'data': function(_0x2cde66, _0x46ac70) {
            var _0x14b34b, _0x428a4d, _0x2d595c, _0xa9ee27 = this[0x0],
                _0x2034dd = _0xa9ee27 && _0xa9ee27['attributes'];
            if (void 0x0 === _0x2cde66) {
                if (this['length'] && (_0x2d595c = _0x5dc0e2['get'](_0xa9ee27), 0x1 === _0xa9ee27['nodeType'] && !_0x460f18['get'](_0xa9ee27, 'hasDataAttrs'))) {
                    for (_0x14b34b = _0x2034dd['length']; _0x14b34b--;) _0x2034dd[_0x14b34b] && (_0x428a4d = _0x2034dd[_0x14b34b]['name'], 0x0 === _0x428a4d['indexOf']('data-') && (_0x428a4d = _0x3804bf['camelCase'](_0x428a4d['slice'](0x5)), _0x1aae1e(_0xa9ee27, _0x428a4d, _0x2d595c[_0x428a4d])));
                    _0x460f18['set'](_0xa9ee27, 'hasDataAttrs', !0x0);
                }
                return _0x2d595c;
            }
            return 'object' == typeof _0x2cde66 ? this['each'](function() {
                _0x5dc0e2['set'](this, _0x2cde66);
            }) : _0x545439(this, function(_0x12d480) {
                var _0x2864ca;
                if (_0xa9ee27 && void 0x0 === _0x12d480) {
                    if ((_0x2864ca = _0x5dc0e2['get'](_0xa9ee27, _0x2cde66), void 0x0 !== _0x2864ca) || (_0x2864ca = _0x1aae1e(_0xa9ee27, _0x2cde66), void 0x0 !== _0x2864ca)) return _0x2864ca;
                } else this['each'](function() {
                    _0x5dc0e2['set'](this, _0x2cde66, _0x12d480);
                });
            }, null, _0x46ac70, 0x1 < arguments['length'], null, !0x0);
        },
        'removeData': function(_0x164221) {
            return this['each'](function() {
                _0x5dc0e2['remove'](this, _0x164221);
            });
        }
    }), _0x3804bf['extend']({
        'queue': function(_0x40d36, _0x52d338, _0x2774e1) {
            var _0x3837c6;
            if (_0x40d36) return _0x52d338 = (_0x52d338 || 'fx') + 'queue', _0x3837c6 = _0x460f18['get'](_0x40d36, _0x52d338), _0x2774e1 && (!_0x3837c6 || Array['isArray'](_0x2774e1) ? _0x3837c6 = _0x460f18['access'](_0x40d36, _0x52d338, _0x3804bf['makeArray'](_0x2774e1)) : _0x3837c6['push'](_0x2774e1)), _0x3837c6 || [];
        },
        'dequeue': function(_0x5c8e04, _0x3f9222) {
            _0x3f9222 = _0x3f9222 || 'fx';
            var _0x5a1624 = _0x3804bf['queue'](_0x5c8e04, _0x3f9222),
                _0x1d3140 = _0x5a1624['length'],
                _0x4346d1 = _0x5a1624['shift'](),
                _0x585a23 = _0x3804bf['_queueHooks'](_0x5c8e04, _0x3f9222),
                _0x1fa041 = function() {
                    _0x3804bf['dequeue'](_0x5c8e04, _0x3f9222);
                };
            'inprogress' === _0x4346d1 && (_0x4346d1 = _0x5a1624['shift'](), _0x1d3140--), _0x4346d1 && ('fx' === _0x3f9222 && _0x5a1624['unshift']('inprogress'), delete _0x585a23['stop'], _0x4346d1['call'](_0x5c8e04, _0x1fa041, _0x585a23)), !_0x1d3140 && _0x585a23 && _0x585a23['empty']['fire']();
        },
        '_queueHooks': function(_0x1cc124, _0x2933c2) {
            var _0x2a2ceb = _0x2933c2 + 'queueHooks';
            return _0x460f18['get'](_0x1cc124, _0x2a2ceb) || _0x460f18['access'](_0x1cc124, _0x2a2ceb, {
                'empty': _0x3804bf['Callbacks']('once\x20memory')['add'](function() {
                    _0x460f18['remove'](_0x1cc124, [_0x2933c2 + 'queue', _0x2a2ceb]);
                })
            });
        }
    }), _0x3804bf['fn']['extend']({
        'queue': function(_0x20df2, _0x2728fd) {
            var _0xe118ea = 0x2;
            return 'string' != typeof _0x20df2 && (_0x2728fd = _0x20df2, _0x20df2 = 'fx', _0xe118ea--), arguments['length'] < _0xe118ea ? _0x3804bf['queue'](this[0x0], _0x20df2) : void 0x0 === _0x2728fd ? this : this['each'](function() {
                var _0x4691e2 = _0x3804bf['queue'](this, _0x20df2, _0x2728fd);
                _0x3804bf['_queueHooks'](this, _0x20df2), 'fx' === _0x20df2 && 'inprogress' !== _0x4691e2[0x0] && _0x3804bf['dequeue'](this, _0x20df2);
            });
        },
        'dequeue': function(_0x1bf6a0) {
            return this['each'](function() {
                _0x3804bf['dequeue'](this, _0x1bf6a0);
            });
        },
        'clearQueue': function(_0x30046b) {
            return this['queue'](_0x30046b || 'fx', []);
        },
        'promise': function(_0x19bc17, _0x1de163) {
            var _0x4946e0, _0x277c8d = 0x1,
                _0x358d73 = _0x3804bf['Deferred'](),
                _0x48c411 = this,
                _0x1b140c = this['length'],
                _0x5af41d = function() {
                    --_0x277c8d || _0x358d73['resolveWith'](_0x48c411, [_0x48c411]);
                };
            'string' != typeof _0x19bc17 && (_0x1de163 = _0x19bc17, _0x19bc17 = void 0x0);
            for (_0x19bc17 = _0x19bc17 || 'fx'; _0x1b140c--;)(_0x4946e0 = _0x460f18['get'](_0x48c411[_0x1b140c], _0x19bc17 + 'queueHooks')) && _0x4946e0['empty'] && (_0x277c8d++, _0x4946e0['empty']['add'](_0x5af41d));
            return _0x5af41d(), _0x358d73['promise'](_0x1de163);
        }
    });
    var _0x530056 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ['source'],
        _0x142d0a = RegExp('^(?:([+-])=|)(' + _0x530056 + ')([a-z%]*)$', 'i'),
        _0x65c818 = ['Top', 'Right', 'Bottom', 'Left'],
        _0x293303 = function(_0x151772, _0x8e5dd0) {
            return _0x151772 = _0x8e5dd0 || _0x151772, 'none' === _0x151772['style']['display'] || '' === _0x151772['style']['display'] && _0x3804bf['contains'](_0x151772['ownerDocument'], _0x151772) && 'none' === _0x3804bf['css'](_0x151772, 'display');
        },
        _0x5e56a4 = function(_0x2897fa, _0x35fef9, _0x232849, _0x457a1d) {
            var _0x22180f, _0x204d9a = {};
            for (_0x22180f in _0x35fef9) _0x204d9a[_0x22180f] = _0x2897fa['style'][_0x22180f], _0x2897fa['style'][_0x22180f] = _0x35fef9[_0x22180f];
            _0x232849 = _0x232849['apply'](_0x2897fa, _0x457a1d || []);
            for (_0x22180f in _0x35fef9) _0x2897fa['style'][_0x22180f] = _0x204d9a[_0x22180f];
            return _0x232849;
        },
        _0xb5577e = {};
    _0x3804bf['fn']['extend']({
        'show': function() {
            return _0x21eb52(this, !0x0);
        },
        'hide': function() {
            return _0x21eb52(this);
        },
        'toggle': function(_0x4128f1) {
            return 'boolean' == typeof _0x4128f1 ? _0x4128f1 ? this['show']() : this['hide']() : this['each'](function() {
                _0x293303(this) ? _0x3804bf(this)['show']() : _0x3804bf(this)['hide']();
            });
        }
    });
    var _0x4d291e = /^(?:checkbox|radio)$/i,
        _0x5d23ed = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        _0x571d99 = /^$|\/(?:java|ecma)script/i,
        _0x10e023 = {
            'option': [0x1, '<select\x20multiple=\x27multiple\x27>', '</select>'],
            'thead': [0x1, '<table>', '</table>'],
            'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
            'tr': [0x2, '<table><tbody>', '</tbody></table>'],
            'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
            '_default': [0x0, '', '']
        };
    _0x10e023['optgroup'] = _0x10e023['option'], _0x10e023['tbody'] = _0x10e023['tfoot'] = _0x10e023['colgroup'] = _0x10e023['caption'] = _0x10e023['thead'], _0x10e023['th'] = _0x10e023['td'];
    var _0xed755 = /<|&#?\w+;/,
        _0x410070 = _0x45a45f['createDocumentFragment']()['appendChild'](_0x45a45f['createElement']('div')),
        _0xade12a = _0x45a45f['createElement']('input');
    _0xade12a['setAttribute']('type', 'radio'), _0xade12a['setAttribute']('checked', 'checked'), _0xade12a['setAttribute']('name', 't'), _0x410070['appendChild'](_0xade12a), _0x3c9eda['checkClone'] = _0x410070['cloneNode'](!0x0)['cloneNode'](!0x0)['lastChild']['checked'], _0x410070['innerHTML'] = '<textarea>x</textarea>', _0x3c9eda['noCloneChecked'] = !!_0x410070['cloneNode'](!0x0)['lastChild']['defaultValue'], !0x0;
    var _0x992845 = _0x45a45f['documentElement'],
        _0x61391d = /^key/,
        _0x23e647 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _0x294786 = /^([^.]*)(?:\.(.+)|)/;
    _0x3804bf['event'] = {
        'global': {},
        'add': function(_0x558a4f, _0x11d91b, _0x2908b5, _0x2cb6cc, _0x31afed) {
            var _0xc67042, _0x156a17, _0x388af8, _0x453244, _0x8a57d7, _0xbe9a18, _0x1690cf, _0x19ec74, _0x5057e2, _0x3c783d;
            if (_0x8a57d7 = _0x460f18['get'](_0x558a4f)) {
                _0x2908b5['handler'] && (_0xc67042 = _0x2908b5, _0x2908b5 = _0xc67042['handler'], _0x31afed = _0xc67042['selector']), _0x31afed && _0x3804bf['find']['matchesSelector'](_0x992845, _0x31afed), _0x2908b5['guid'] || (_0x2908b5['guid'] = _0x3804bf['guid']++), (_0x453244 = _0x8a57d7['events']) || (_0x453244 = _0x8a57d7['events'] = {}), (_0x156a17 = _0x8a57d7['handle']) || (_0x156a17 = _0x8a57d7['handle'] = function(_0x17d134) {
                    return 'undefined' != typeof _0x3804bf && _0x3804bf['event']['triggered'] !== _0x17d134['type'] ? _0x3804bf['event']['dispatch']['apply'](_0x558a4f, arguments) : void 0x0;
                }), _0x11d91b = (_0x11d91b || '')['match'](_0x3ac1b9) || [''];
                for (_0x8a57d7 = _0x11d91b['length']; _0x8a57d7--;) _0x388af8 = _0x294786['exec'](_0x11d91b[_0x8a57d7]) || [], _0x5057e2 = _0x3c783d = _0x388af8[0x1], _0x388af8 = (_0x388af8[0x2] || '')['split']('.')['sort'](), _0x5057e2 && (_0x1690cf = _0x3804bf['event']['special'][_0x5057e2] || {}, _0x5057e2 = (_0x31afed ? _0x1690cf['delegateType'] : _0x1690cf['bindType']) || _0x5057e2, _0x1690cf = _0x3804bf['event']['special'][_0x5057e2] || {}, _0xbe9a18 = _0x3804bf['extend']({
                    'type': _0x5057e2,
                    'origType': _0x3c783d,
                    'data': _0x2cb6cc,
                    'handler': _0x2908b5,
                    'guid': _0x2908b5['guid'],
                    'selector': _0x31afed,
                    'needsContext': _0x31afed && _0x3804bf['expr']['match']['needsContext']['test'](_0x31afed),
                    'namespace': _0x388af8['join']('.')
                }, _0xc67042), (_0x19ec74 = _0x453244[_0x5057e2]) || (_0x19ec74 = _0x453244[_0x5057e2] = [], _0x19ec74['delegateCount'] = 0x0, _0x1690cf['setup'] && !0x1 !== _0x1690cf['setup']['call'](_0x558a4f, _0x2cb6cc, _0x388af8, _0x156a17) || _0x558a4f['addEventListener'] && _0x558a4f['addEventListener'](_0x5057e2, _0x156a17)), _0x1690cf['add'] && (_0x1690cf['add']['call'](_0x558a4f, _0xbe9a18), _0xbe9a18['handler']['guid'] || (_0xbe9a18['handler']['guid'] = _0x2908b5['guid'])), _0x31afed ? _0x19ec74['splice'](_0x19ec74['delegateCount']++, 0x0, _0xbe9a18) : _0x19ec74['push'](_0xbe9a18), _0x3804bf['event']['global'][_0x5057e2] = !0x0);
            }
        },
        'remove': function(_0x35d9c2, _0x1f2861, _0xe5484e, _0x56fab0, _0x2db3cd) {
            var _0x1e5b96, _0x34ec33, _0x8318c0, _0x260672, _0x2532e6, _0xff395d, _0x4ad611, _0x11d717, _0xc7471e, _0x3e21e6, _0x19d3d1, _0x290f69 = _0x460f18['hasData'](_0x35d9c2) && _0x460f18['get'](_0x35d9c2);
            if (_0x290f69 && (_0x260672 = _0x290f69['events'])) {
                _0x1f2861 = (_0x1f2861 || '')['match'](_0x3ac1b9) || [''];
                for (_0x2532e6 = _0x1f2861['length']; _0x2532e6--;)
                    if (_0x8318c0 = _0x294786['exec'](_0x1f2861[_0x2532e6]) || [], _0xc7471e = _0x19d3d1 = _0x8318c0[0x1], _0x3e21e6 = (_0x8318c0[0x2] || '')['split']('.')['sort'](), _0xc7471e) {
                        _0x4ad611 = _0x3804bf['event']['special'][_0xc7471e] || {}, _0xc7471e = (_0x56fab0 ? _0x4ad611['delegateType'] : _0x4ad611['bindType']) || _0xc7471e, _0x11d717 = _0x260672[_0xc7471e] || [], _0x8318c0 = _0x8318c0[0x2] && RegExp('(^|\x5c.)' + _0x3e21e6['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)');
                        for (_0x34ec33 = _0x1e5b96 = _0x11d717['length']; _0x1e5b96--;) _0xff395d = _0x11d717[_0x1e5b96], !_0x2db3cd && _0x19d3d1 !== _0xff395d['origType'] || _0xe5484e && _0xe5484e['guid'] !== _0xff395d['guid'] || _0x8318c0 && !_0x8318c0['test'](_0xff395d['namespace']) || _0x56fab0 && _0x56fab0 !== _0xff395d['selector'] && ('**' !== _0x56fab0 || !_0xff395d['selector']) || (_0x11d717['splice'](_0x1e5b96, 0x1), _0xff395d['selector'] && _0x11d717['delegateCount']--, _0x4ad611['remove'] && _0x4ad611['remove']['call'](_0x35d9c2, _0xff395d));
                        _0x34ec33 && !_0x11d717['length'] && (_0x4ad611['teardown'] && !0x1 !== _0x4ad611['teardown']['call'](_0x35d9c2, _0x3e21e6, _0x290f69['handle']) || _0x3804bf['removeEvent'](_0x35d9c2, _0xc7471e, _0x290f69['handle']), delete _0x260672[_0xc7471e]);
                    } else {
                        for (_0xc7471e in _0x260672) _0x3804bf['event']['remove'](_0x35d9c2, _0xc7471e + _0x1f2861[_0x2532e6], _0xe5484e, _0x56fab0, !0x0);
                    }
                _0x3804bf['isEmptyObject'](_0x260672) && _0x460f18['remove'](_0x35d9c2, 'handle\x20events');
            }
        },
        'dispatch': function(_0x5f5cfe) {
            var _0x3927bb = _0x3804bf['event']['fix'](_0x5f5cfe),
                _0x4e01e6, _0x3a3eb9, _0x35ae3c, _0xd8d4a6, _0x2f2e21, _0x3d77f1, _0x283c0f = Array(arguments['length']);
            _0x3a3eb9 = (_0x460f18['get'](this, 'events') || {})[_0x3927bb['type']] || [];
            var _0x47ad7b = _0x3804bf['event']['special'][_0x3927bb['type']] || {};
            _0x283c0f[0x0] = _0x3927bb;
            for (_0x4e01e6 = 0x1; _0x4e01e6 < arguments['length']; _0x4e01e6++) _0x283c0f[_0x4e01e6] = arguments[_0x4e01e6];
            if (_0x3927bb['delegateTarget'] = this, !_0x47ad7b['preDispatch'] || !0x1 !== _0x47ad7b['preDispatch']['call'](this, _0x3927bb)) {
                _0x3d77f1 = _0x3804bf['event']['handlers']['call'](this, _0x3927bb, _0x3a3eb9);
                for (_0x4e01e6 = 0x0;
                    (_0xd8d4a6 = _0x3d77f1[_0x4e01e6++]) && !_0x3927bb['isPropagationStopped']();) {
                    _0x3927bb['currentTarget'] = _0xd8d4a6['elem'];
                    for (_0x3a3eb9 = 0x0;
                        (_0x2f2e21 = _0xd8d4a6['handlers'][_0x3a3eb9++]) && !_0x3927bb['isImmediatePropagationStopped']();) _0x3927bb['rnamespace'] && !_0x3927bb['rnamespace']['test'](_0x2f2e21['namespace']) || (_0x3927bb['handleObj'] = _0x2f2e21, _0x3927bb['data'] = _0x2f2e21['data'], _0x35ae3c = ((_0x3804bf['event']['special'][_0x2f2e21['origType']] || {})['handle'] || _0x2f2e21['handler'])['apply'](_0xd8d4a6['elem'], _0x283c0f), void 0x0 !== _0x35ae3c && !0x1 === (_0x3927bb['result'] = _0x35ae3c) && (_0x3927bb['preventDefault'](), _0x3927bb['stopPropagation']()));
                }
                return _0x47ad7b['postDispatch'] && _0x47ad7b['postDispatch']['call'](this, _0x3927bb), _0x3927bb['result'];
            }
        },
        'handlers': function(_0x2a95da, _0x282a11) {
            var _0x22457b, _0x7d13f6, _0x2b0b69, _0x26a0a1, _0x1d5763, _0x2b40e5 = [],
                _0x3cba3f = _0x282a11['delegateCount'],
                _0x467d23 = _0x2a95da['target'];
            if (_0x3cba3f && _0x467d23['nodeType'] && !('click' === _0x2a95da['type'] && 0x1 <= _0x2a95da['button'])) {
                for (; _0x467d23 !== this; _0x467d23 = _0x467d23['parentNode'] || this)
                    if (0x1 === _0x467d23['nodeType'] && ('click' !== _0x2a95da['type'] || !0x0 !== _0x467d23['disabled'])) {
                        _0x26a0a1 = [], _0x1d5763 = {};
                        for (_0x22457b = 0x0; _0x22457b < _0x3cba3f; _0x22457b++) _0x7d13f6 = _0x282a11[_0x22457b], _0x2b0b69 = _0x7d13f6['selector'] + '\x20', void 0x0 === _0x1d5763[_0x2b0b69] && (_0x1d5763[_0x2b0b69] = _0x7d13f6['needsContext'] ? -0x1 < _0x3804bf(_0x2b0b69, this)['index'](_0x467d23) : _0x3804bf['find'](_0x2b0b69, this, null, [_0x467d23])['length']), _0x1d5763[_0x2b0b69] && _0x26a0a1['push'](_0x7d13f6);
                        _0x26a0a1['length'] && _0x2b40e5['push']({
                            'elem': _0x467d23,
                            'handlers': _0x26a0a1
                        });
                    }
            }
            return _0x467d23 = this, _0x3cba3f < _0x282a11['length'] && _0x2b40e5['push']({
                'elem': _0x467d23,
                'handlers': _0x282a11['slice'](_0x3cba3f)
            }), _0x2b40e5;
        },
        'addProp': function(_0x511965, _0x2b2b13) {
            Object['defineProperty'](_0x3804bf['Event']['prototype'], _0x511965, {
                'enumerable': !0x0,
                'configurable': !0x0,
                'get': _0x3804bf['isFunction'](_0x2b2b13) ? function() {
                    if (this['originalEvent']) return _0x2b2b13(this['originalEvent']);
                } : function() {
                    if (this['originalEvent']) return this['originalEvent'][_0x511965];
                },
                'set': function(_0x468abf) {
                    Object['defineProperty'](this, _0x511965, {
                        'enumerable': !0x0,
                        'configurable': !0x0,
                        'writable': !0x0,
                        'value': _0x468abf
                    });
                }
            });
        },
        'fix': function(_0x355df9) {
            return _0x355df9[_0x3804bf['expando']] ? _0x355df9 : new _0x3804bf['Event'](_0x355df9);
        },
        'special': {
            'load': {
                'noBubble': !0x0
            },
            'focus': {
                'trigger': function() {
                    if (this !== _0x5af9f8() && this['focus']) return this['focus'](), !0x1;
                },
                'delegateType': 'focusin'
            },
            'blur': {
                'trigger': function() {
                    if (this === _0x5af9f8() && this['blur']) return this['blur'](), !0x1;
                },
                'delegateType': 'focusout'
            },
            'click': {
                'trigger': function() {
                    if ('checkbox' === this['type'] && this['click'] && _0x504a90(this, 'input')) return this['click'](), !0x1;
                },
                '_default': function(_0x3bec72) {
                    return _0x504a90(_0x3bec72['target'], 'a');
                }
            },
            'beforeunload': {
                'postDispatch': function(_0x32f0bd) {
                    void 0x0 !== _0x32f0bd['result'] && _0x32f0bd['originalEvent'] && (_0x32f0bd['originalEvent']['returnValue'] = _0x32f0bd['result']);
                }
            }
        }
    }, _0x3804bf['removeEvent'] = function(_0x44d87a, _0x44b446, _0x1b7b13) {
        _0x44d87a['removeEventListener'] && _0x44d87a['removeEventListener'](_0x44b446, _0x1b7b13);
    }, _0x3804bf['Event'] = function(_0x3667d3, _0x20fe71) {
        return this instanceof _0x3804bf['Event'] ? (_0x3667d3 && _0x3667d3['type'] ? (this['originalEvent'] = _0x3667d3, this['type'] = _0x3667d3['type'], this['isDefaultPrevented'] = _0x3667d3['defaultPrevented'] || void 0x0 === _0x3667d3['defaultPrevented'] && !0x1 === _0x3667d3['returnValue'] ? _0x67eb3c : _0x42cb03, this['target'] = _0x3667d3['target'] && 0x3 === _0x3667d3['target']['nodeType'] ? _0x3667d3['target']['parentNode'] : _0x3667d3['target'], this['currentTarget'] = _0x3667d3['currentTarget'], this['relatedTarget'] = _0x3667d3['relatedTarget']) : this['type'] = _0x3667d3, _0x20fe71 && _0x3804bf['extend'](this, _0x20fe71), this['timeStamp'] = _0x3667d3 && _0x3667d3['timeStamp'] || _0x3804bf['now'](), void(this[_0x3804bf['expando']] = !0x0)) : new _0x3804bf['Event'](_0x3667d3, _0x20fe71);
    }, _0x3804bf['Event']['prototype'] = {
        'constructor': _0x3804bf['Event'],
        'isDefaultPrevented': _0x42cb03,
        'isPropagationStopped': _0x42cb03,
        'isImmediatePropagationStopped': _0x42cb03,
        'isSimulated': !0x1,
        'preventDefault': function() {
            var _0x56f6fd = this['originalEvent'];
            this['isDefaultPrevented'] = _0x67eb3c, _0x56f6fd && !this['isSimulated'] && _0x56f6fd['preventDefault']();
        },
        'stopPropagation': function() {
            var _0x655f62 = this['originalEvent'];
            this['isPropagationStopped'] = _0x67eb3c, _0x655f62 && !this['isSimulated'] && _0x655f62['stopPropagation']();
        },
        'stopImmediatePropagation': function() {
            var _0x33ded1 = this['originalEvent'];
            this['isImmediatePropagationStopped'] = _0x67eb3c, _0x33ded1 && !this['isSimulated'] && _0x33ded1['stopImmediatePropagation'](), this['stopPropagation']();
        }
    }, _0x3804bf['each']({
        'altKey': !0x0,
        'bubbles': !0x0,
        'cancelable': !0x0,
        'changedTouches': !0x0,
        'ctrlKey': !0x0,
        'detail': !0x0,
        'eventPhase': !0x0,
        'metaKey': !0x0,
        'pageX': !0x0,
        'pageY': !0x0,
        'shiftKey': !0x0,
        'view': !0x0,
        'char': !0x0,
        'charCode': !0x0,
        'key': !0x0,
        'keyCode': !0x0,
        'button': !0x0,
        'buttons': !0x0,
        'clientX': !0x0,
        'clientY': !0x0,
        'offsetX': !0x0,
        'offsetY': !0x0,
        'pointerId': !0x0,
        'pointerType': !0x0,
        'screenX': !0x0,
        'screenY': !0x0,
        'targetTouches': !0x0,
        'toElement': !0x0,
        'touches': !0x0,
        'which': function(_0x3772c9) {
            var _0x1b2006 = _0x3772c9['button'];
            return null == _0x3772c9['which'] && _0x61391d['test'](_0x3772c9['type']) ? null != _0x3772c9['charCode'] ? _0x3772c9['charCode'] : _0x3772c9['keyCode'] : !_0x3772c9['which'] && void 0x0 !== _0x1b2006 && _0x23e647['test'](_0x3772c9['type']) ? 0x1 & _0x1b2006 ? 0x1 : 0x2 & _0x1b2006 ? 0x3 : 0x4 & _0x1b2006 ? 0x2 : 0x0 : _0x3772c9['which'];
        }
    }, _0x3804bf['event']['addProp']), _0x3804bf['each']({
        'mouseenter': 'mouseover',
        'mouseleave': 'mouseout',
        'pointerenter': 'pointerover',
        'pointerleave': 'pointerout'
    }, function(_0x1b8647, _0x13a221) {
        _0x3804bf['event']['special'][_0x1b8647] = {
            'delegateType': _0x13a221,
            'bindType': _0x13a221,
            'handle': function(_0x3ee44a) {
                var _0x31a815, _0x58abff = _0x3ee44a['relatedTarget'],
                    _0x180d18 = _0x3ee44a['handleObj'];
                return _0x58abff && (_0x58abff === this || _0x3804bf['contains'](this, _0x58abff)) || (_0x3ee44a['type'] = _0x180d18['origType'], _0x31a815 = _0x180d18['handler']['apply'](this, arguments), _0x3ee44a['type'] = _0x13a221), _0x31a815;
            }
        };
    }), _0x3804bf['fn']['extend']({
        'on': function(_0xbf8787, _0x33ea11, _0x2c490e, _0x257205) {
            return _0x484c58(this, _0xbf8787, _0x33ea11, _0x2c490e, _0x257205);
        },
        'one': function(_0x1f4a01, _0x5d04ed, _0x7f5eaa, _0x2ec50e) {
            return _0x484c58(this, _0x1f4a01, _0x5d04ed, _0x7f5eaa, _0x2ec50e, 0x1);
        },
        'off': function(_0x218238, _0x12b832, _0x247b46) {
            var _0xbae2e, _0xc84013;
            if (_0x218238 && _0x218238['preventDefault'] && _0x218238['handleObj']) return _0xbae2e = _0x218238['handleObj'], _0x3804bf(_0x218238['delegateTarget'])['off'](_0xbae2e['namespace'] ? _0xbae2e['origType'] + '.' + _0xbae2e['namespace'] : _0xbae2e['origType'], _0xbae2e['selector'], _0xbae2e['handler']), this;
            if ('object' == typeof _0x218238) {
                for (_0xc84013 in _0x218238) this['off'](_0xc84013, _0x12b832, _0x218238[_0xc84013]);
                return this;
            }
            return !0x1 !== _0x12b832 && 'function' != typeof _0x12b832 || (_0x247b46 = _0x12b832, _0x12b832 = void 0x0), !0x1 === _0x247b46 && (_0x247b46 = _0x42cb03), this['each'](function() {
                _0x3804bf['event']['remove'](this, _0x218238, _0x247b46, _0x12b832);
            });
        }
    });
    var _0x235584 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        _0x48a5c6 = /<script|<style|<link/i,
        _0x218b9b = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _0x47d23f = /^true\/(.*)/,
        _0x56e048 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    _0x3804bf['extend']({
        'htmlPrefilter': function(_0x1da139) {
            return _0x1da139['replace'](_0x235584, '<$1></$2>');
        },
        'clone': function(_0x2e6a67, _0x540126, _0x23410f) {
            var _0x5aec80, _0x4151d8, _0x423046, _0x31c708, _0x27e7a3 = _0x2e6a67['cloneNode'](!0x0),
                _0x5e2460 = _0x3804bf['contains'](_0x2e6a67['ownerDocument'], _0x2e6a67);
            if (!_0x3c9eda['noCloneChecked'] && !(0x1 !== _0x2e6a67['nodeType'] && 0xb !== _0x2e6a67['nodeType'] || _0x3804bf['isXMLDoc'](_0x2e6a67))) {
                _0x31c708 = _0x291148(_0x27e7a3), _0x423046 = _0x291148(_0x2e6a67), _0x5aec80 = 0x0;
                for (_0x4151d8 = _0x423046['length']; _0x5aec80 < _0x4151d8; _0x5aec80++) {
                    var _0x70d569 = _0x423046[_0x5aec80],
                        _0x56d8b5 = _0x31c708[_0x5aec80],
                        _0x20465f = _0x56d8b5['nodeName']['toLowerCase']();
                    'input' === _0x20465f && _0x4d291e['test'](_0x70d569['type']) ? _0x56d8b5['checked'] = _0x70d569['checked'] : 'input' !== _0x20465f && 'textarea' !== _0x20465f || (_0x56d8b5['defaultValue'] = _0x70d569['defaultValue']);
                }
            }
            if (_0x540126) {
                if (_0x23410f) {
                    _0x423046 = _0x423046 || _0x291148(_0x2e6a67), _0x31c708 = _0x31c708 || _0x291148(_0x27e7a3), _0x5aec80 = 0x0;
                    for (_0x4151d8 = _0x423046['length']; _0x5aec80 < _0x4151d8; _0x5aec80++) _0x4b1c70(_0x423046[_0x5aec80], _0x31c708[_0x5aec80]);
                } else _0x4b1c70(_0x2e6a67, _0x27e7a3);
            }
            return _0x31c708 = _0x291148(_0x27e7a3, 'script'), 0x0 < _0x31c708['length'] && _0x3e6a13(_0x31c708, !_0x5e2460 && _0x291148(_0x2e6a67, 'script')), _0x27e7a3;
        },
        'cleanData': function(_0x2b730d) {
            for (var _0x5e1364, _0x5ad81d, _0x2a15f8, _0x5a1405 = _0x3804bf['event']['special'], _0x572d9d = 0x0; void 0x0 !== (_0x5ad81d = _0x2b730d[_0x572d9d]); _0x572d9d++)
                if (_0x109a24(_0x5ad81d)) {
                    if (_0x5e1364 = _0x5ad81d[_0x460f18['expando']]) {
                        if (_0x5e1364['events']) {
                            for (_0x2a15f8 in _0x5e1364['events']) _0x5a1405[_0x2a15f8] ? _0x3804bf['event']['remove'](_0x5ad81d, _0x2a15f8) : _0x3804bf['removeEvent'](_0x5ad81d, _0x2a15f8, _0x5e1364['handle']);
                        }
                        _0x5ad81d[_0x460f18['expando']] = void 0x0;
                    }
                    _0x5ad81d[_0x5dc0e2['expando']] && (_0x5ad81d[_0x5dc0e2['expando']] = void 0x0);
                }
        }
    }), _0x3804bf['fn']['extend']({
        'detach': function(_0x30d491) {
            return _0x5a25c3(this, _0x30d491, !0x0);
        },
        'remove': function(_0x4ee26d) {
            return _0x5a25c3(this, _0x4ee26d);
        },
        'text': function(_0x3d8251) {
            return _0x545439(this, function(_0x59ea41) {
                return void 0x0 === _0x59ea41 ? _0x3804bf['text'](this) : this['empty']()['each'](function() {
                    0x1 !== this['nodeType'] && 0xb !== this['nodeType'] && 0x9 !== this['nodeType'] || (this['textContent'] = _0x59ea41);
                });
            }, null, _0x3d8251, arguments['length']);
        },
        'append': function() {
            return _0x398c3e(this, arguments, function(_0x37a3e2) {
                (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) && _0x3bd48b(this, _0x37a3e2)['appendChild'](_0x37a3e2);
            });
        },
        'prepend': function() {
            return _0x398c3e(this, arguments, function(_0x15ee33) {
                if (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) {
                    var _0x4d1201 = _0x3bd48b(this, _0x15ee33);
                    _0x4d1201['insertBefore'](_0x15ee33, _0x4d1201['firstChild']);
                }
            });
        },
        'before': function() {
            return _0x398c3e(this, arguments, function(_0x305d76) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x305d76, this);
            });
        },
        'after': function() {
            return _0x398c3e(this, arguments, function(_0x45f7a6) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x45f7a6, this['nextSibling']);
            });
        },
        'empty': function() {
            for (var _0x1020e4, _0x4a2e01 = 0x0; null != (_0x1020e4 = this[_0x4a2e01]); _0x4a2e01++) 0x1 === _0x1020e4['nodeType'] && (_0x3804bf['cleanData'](_0x291148(_0x1020e4, !0x1)), _0x1020e4['textContent'] = '');
            return this;
        },
        'clone': function(_0x32f72f, _0x5a4952) {
            return _0x32f72f = null != _0x32f72f && _0x32f72f, _0x5a4952 = null == _0x5a4952 ? _0x32f72f : _0x5a4952, this['map'](function() {
                return _0x3804bf['clone'](this, _0x32f72f, _0x5a4952);
            });
        },
        'html': function(_0x59d3f6) {
            return _0x545439(this, function(_0xb4edaa) {
                var _0x59999e = this[0x0] || {},
                    _0x2634ff = 0x0,
                    _0xbae9e1 = this['length'];
                if (void 0x0 === _0xb4edaa && 0x1 === _0x59999e['nodeType']) return _0x59999e['innerHTML'];
                if ('string' == typeof _0xb4edaa && !_0x48a5c6['test'](_0xb4edaa) && !_0x10e023[(_0x5d23ed['exec'](_0xb4edaa) || ['', ''])[0x1]['toLowerCase']()]) {
                    _0xb4edaa = _0x3804bf['htmlPrefilter'](_0xb4edaa);
                    try {
                        for (; _0x2634ff < _0xbae9e1; _0x2634ff++) _0x59999e = this[_0x2634ff] || {}, 0x1 === _0x59999e['nodeType'] && (_0x3804bf['cleanData'](_0x291148(_0x59999e, !0x1)), _0x59999e['innerHTML'] = _0xb4edaa);
                        _0x59999e = 0x0;
                    } catch (_0x1d2b0f) {}
                }
                _0x59999e && this['empty']()['append'](_0xb4edaa);
            }, null, _0x59d3f6, arguments['length']);
        },
        'replaceWith': function() {
            var _0x4e21e2 = [];
            return _0x398c3e(this, arguments, function(_0x5bd19f) {
                var _0x40af25 = this['parentNode'];
                0x0 > _0x3804bf['inArray'](this, _0x4e21e2) && (_0x3804bf['cleanData'](_0x291148(this)), _0x40af25 && _0x40af25['replaceChild'](_0x5bd19f, this));
            }, _0x4e21e2);
        }
    }), _0x3804bf['each']({
        'appendTo': 'append',
        'prependTo': 'prepend',
        'insertBefore': 'before',
        'insertAfter': 'after',
        'replaceAll': 'replaceWith'
    }, function(_0x5a86b4, _0x5d0d26) {
        _0x3804bf['fn'][_0x5a86b4] = function(_0x4953a3) {
            for (var _0x4c81d9 = [], _0x4d5abf = _0x3804bf(_0x4953a3), _0x49b8c2 = _0x4d5abf['length'] - 0x1, _0x292579 = 0x0; _0x292579 <= _0x49b8c2; _0x292579++) _0x4953a3 = _0x292579 === _0x49b8c2 ? this : this['clone'](!0x0), _0x3804bf(_0x4d5abf[_0x292579])[_0x5d0d26](_0x4953a3), _0x54c40a['apply'](_0x4c81d9, _0x4953a3['get']());
            return this['pushStack'](_0x4c81d9);
        };
    });
    var _0x3cc2f5 = /^margin/,
        _0x49c252 = RegExp('^(' + _0x530056 + ')(?!px)[a-z%]+$', 'i'),
        _0x10a82b = function(_0xee8ccd) {
            var _0x26b2ab = _0xee8ccd['ownerDocument']['defaultView'];
            return _0x26b2ab && _0x26b2ab['opener'] || (_0x26b2ab = _0x27d1a6), _0x26b2ab['getComputedStyle'](_0xee8ccd);
        },
        _0x4c3c04 = function() {
            if (_0x1652d8) {
                _0x1652d8['style']['cssText'] = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', _0x1652d8['innerHTML'] = '', _0x992845['appendChild'](_0x5c8d0a);
                var _0x3a73cc = _0x27d1a6['getComputedStyle'](_0x1652d8);
                _0x328bd2 = '1%' !== _0x3a73cc['top'], _0x19553f = '2px' === _0x3a73cc['marginLeft'], _0x5b96ff = '4px' === _0x3a73cc['width'], _0x1652d8['style']['marginRight'] = '50%', _0x210a4c = '4px' === _0x3a73cc['marginRight'], _0x992845['removeChild'](_0x5c8d0a), _0x1652d8 = null;
            }
        },
        _0x328bd2, _0x5b96ff, _0x210a4c, _0x19553f, _0x5c8d0a = _0x45a45f['createElement']('div'),
        _0x1652d8 = _0x45a45f['createElement']('div');
    _0x1652d8['style'] && (_0x1652d8['style']['backgroundClip'] = 'content-box', _0x1652d8['cloneNode'](!0x0)['style']['backgroundClip'] = '', _0x3c9eda['clearCloneStyle'] = 'content-box' === _0x1652d8['style']['backgroundClip'], _0x5c8d0a['style']['cssText'] = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', _0x5c8d0a['appendChild'](_0x1652d8), _0x3804bf['extend'](_0x3c9eda, {
        'pixelPosition': function() {
            return _0x4c3c04(), _0x328bd2;
        },
        'boxSizingReliable': function() {
            return _0x4c3c04(), _0x5b96ff;
        },
        'pixelMarginRight': function() {
            return _0x4c3c04(), _0x210a4c;
        },
        'reliableMarginLeft': function() {
            return _0x4c3c04(), _0x19553f;
        }
    })), !0x0;
    var _0x20ff37 = /^(none|table(?!-c[ea]).+)/,
        _0x5f5c48 = /^--/,
        _0x554874 = {
            'position': 'absolute',
            'visibility': 'hidden',
            'display': 'block'
        },
        _0x37ca9e = {
            'letterSpacing': '0',
            'fontWeight': '400'
        },
        _0x5c5b35 = ['Webkit', 'Moz', 'ms'],
        _0x14181b = _0x45a45f['createElement']('div')['style'];
    _0x3804bf['extend']({
        'cssHooks': {
            'opacity': {
                'get': function(_0x31742f, _0x423c3d) {
                    if (_0x423c3d) {
                        var _0x26279f = _0x4d26b1(_0x31742f, 'opacity');
                        return '' === _0x26279f ? '1' : _0x26279f;
                    }
                }
            }
        },
        'cssNumber': {
            'animationIterationCount': !0x0,
            'columnCount': !0x0,
            'fillOpacity': !0x0,
            'flexGrow': !0x0,
            'flexShrink': !0x0,
            'fontWeight': !0x0,
            'lineHeight': !0x0,
            'opacity': !0x0,
            'order': !0x0,
            'orphans': !0x0,
            'widows': !0x0,
            'zIndex': !0x0,
            'zoom': !0x0
        },
        'cssProps': {
            'float': 'cssFloat'
        },
        'style': function(_0xd58b52, _0x3e306c, _0x460bfd, _0x2cf5ca) {
            if (_0xd58b52 && 0x3 !== _0xd58b52['nodeType'] && 0x8 !== _0xd58b52['nodeType'] && _0xd58b52['style']) {
                var _0x5c265e, _0x46218b, _0x5bae8e, _0x5cd85c = _0x3804bf['camelCase'](_0x3e306c),
                    _0xe03f4b = _0x5f5c48['test'](_0x3e306c),
                    _0x6510f1 = _0xd58b52['style'];
                return _0xe03f4b || (_0x3e306c = _0x49fe9e(_0x5cd85c)), _0x5bae8e = _0x3804bf['cssHooks'][_0x3e306c] || _0x3804bf['cssHooks'][_0x5cd85c], void 0x0 === _0x460bfd ? _0x5bae8e && 'get' in _0x5bae8e && void 0x0 !== (_0x5c265e = _0x5bae8e['get'](_0xd58b52, !0x1, _0x2cf5ca)) ? _0x5c265e : _0x6510f1[_0x3e306c] : (_0x46218b = typeof _0x460bfd, 'string' === _0x46218b && (_0x5c265e = _0x142d0a['exec'](_0x460bfd)) && _0x5c265e[0x1] && (_0x460bfd = _0x2967f4(_0xd58b52, _0x3e306c, _0x5c265e), _0x46218b = 'number'), null != _0x460bfd && _0x460bfd === _0x460bfd && ('number' === _0x46218b && (_0x460bfd += _0x5c265e && _0x5c265e[0x3] || (_0x3804bf['cssNumber'][_0x5cd85c] ? '' : 'px')), _0x3c9eda['clearCloneStyle'] || '' !== _0x460bfd || 0x0 !== _0x3e306c['indexOf']('background') || (_0x6510f1[_0x3e306c] = 'inherit'), _0x5bae8e && 'set' in _0x5bae8e && void 0x0 === (_0x460bfd = _0x5bae8e['set'](_0xd58b52, _0x460bfd, _0x2cf5ca)) || (_0xe03f4b ? _0x6510f1['setProperty'](_0x3e306c, _0x460bfd) : _0x6510f1[_0x3e306c] = _0x460bfd)), void 0x0);
            }
        },
        'css': function(_0x306d61, _0xc21181, _0x459d26, _0x3d11d0) {
            var _0x4c255e, _0x4bb8dd, _0x3a502a, _0x4fa54e = _0x3804bf['camelCase'](_0xc21181);
            return _0x5f5c48['test'](_0xc21181) || (_0xc21181 = _0x49fe9e(_0x4fa54e)), _0x3a502a = _0x3804bf['cssHooks'][_0xc21181] || _0x3804bf['cssHooks'][_0x4fa54e], _0x3a502a && 'get' in _0x3a502a && (_0x4c255e = _0x3a502a['get'](_0x306d61, !0x0, _0x459d26)), void 0x0 === _0x4c255e && (_0x4c255e = _0x4d26b1(_0x306d61, _0xc21181, _0x3d11d0)), 'normal' === _0x4c255e && _0xc21181 in _0x37ca9e && (_0x4c255e = _0x37ca9e[_0xc21181]), '' === _0x459d26 || _0x459d26 ? (_0x4bb8dd = parseFloat(_0x4c255e), !0x0 === _0x459d26 || isFinite(_0x4bb8dd) ? _0x4bb8dd || 0x0 : _0x4c255e) : _0x4c255e;
        }
    }), _0x3804bf['each'](['height', 'width'], function(_0x119e9c, _0x5194bf) {
        _0x3804bf['cssHooks'][_0x5194bf] = {
            'get': function(_0x185c88, _0x2b7ca4, _0x33a1e8) {
                if (_0x2b7ca4) return !_0x20ff37['test'](_0x3804bf['css'](_0x185c88, 'display')) || _0x185c88['getClientRects']()['length'] && _0x185c88['getBoundingClientRect']()['width'] ? _0x1288ab(_0x185c88, _0x5194bf, _0x33a1e8) : _0x5e56a4(_0x185c88, _0x554874, function() {
                    return _0x1288ab(_0x185c88, _0x5194bf, _0x33a1e8);
                });
            },
            'set': function(_0x1c4167, _0x27c66e, _0x44ecd2) {
                var _0x4f7e77, _0x3028c7 = _0x44ecd2 && _0x10a82b(_0x1c4167);
                return _0x44ecd2 = _0x44ecd2 && _0x5953dd(_0x1c4167, _0x5194bf, _0x44ecd2, 'border-box' === _0x3804bf['css'](_0x1c4167, 'boxSizing', !0x1, _0x3028c7), _0x3028c7), (_0x44ecd2 && (_0x4f7e77 = _0x142d0a['exec'](_0x27c66e)) && 'px' !== (_0x4f7e77[0x3] || 'px') && (_0x1c4167['style'][_0x5194bf] = _0x27c66e, _0x27c66e = _0x3804bf['css'](_0x1c4167, _0x5194bf)), _0x240247(_0x1c4167, _0x27c66e, _0x44ecd2));
            }
        };
    }), _0x3804bf['cssHooks']['marginLeft'] = _0xdb814f(_0x3c9eda['reliableMarginLeft'], function(_0x5325df, _0x77f45a) {
        if (_0x77f45a) return (parseFloat(_0x4d26b1(_0x5325df, 'marginLeft')) || _0x5325df['getBoundingClientRect']()['left'] - _0x5e56a4(_0x5325df, {
            'marginLeft': 0x0
        }, function() {
            return _0x5325df['getBoundingClientRect']()['left'];
        })) + 'px';
    }), _0x3804bf['each']({
        'margin': '',
        'padding': '',
        'border': 'Width'
    }, function(_0x3e8308, _0x95f6a7) {
        _0x3804bf['cssHooks'][_0x3e8308 + _0x95f6a7] = {
            'expand': function(_0x3bf2ed) {
                var _0x265d03 = 0x0,
                    _0x4591f6 = {};
                for (_0x3bf2ed = 'string' == typeof _0x3bf2ed ? _0x3bf2ed['split']('\x20') : [_0x3bf2ed]; 0x4 > _0x265d03; _0x265d03++) _0x4591f6[_0x3e8308 + _0x65c818[_0x265d03] + _0x95f6a7] = _0x3bf2ed[_0x265d03] || _0x3bf2ed[_0x265d03 - 0x2] || _0x3bf2ed[0x0];
                return _0x4591f6;
            }
        }, _0x3cc2f5['test'](_0x3e8308) || (_0x3804bf['cssHooks'][_0x3e8308 + _0x95f6a7]['set'] = _0x240247);
    }), _0x3804bf['fn']['extend']({
        'css': function(_0x3b9f85, _0x4e46b2) {
            return _0x545439(this, function(_0x119371, _0x3c320d, _0x4c08b9) {
                var _0x3ab368, _0x590e28 = {},
                    _0x27de7e = 0x0;
                if (Array['isArray'](_0x3c320d)) {
                    _0x4c08b9 = _0x10a82b(_0x119371);
                    for (_0x3ab368 = _0x3c320d['length']; _0x27de7e < _0x3ab368; _0x27de7e++) _0x590e28[_0x3c320d[_0x27de7e]] = _0x3804bf['css'](_0x119371, _0x3c320d[_0x27de7e], !0x1, _0x4c08b9);
                    return _0x590e28;
                }
                return void 0x0 !== _0x4c08b9 ? _0x3804bf['style'](_0x119371, _0x3c320d, _0x4c08b9) : _0x3804bf['css'](_0x119371, _0x3c320d);
            }, _0x3b9f85, _0x4e46b2, 0x1 < arguments['length']);
        }
    }), _0x3804bf['Tween'] = _0x3e0ef9, _0x3e0ef9['prototype'] = {
        'constructor': _0x3e0ef9,
        'init': function(_0x2de322, _0x3b83b0, _0x2155a3, _0x12391e, _0x358c3c, _0x1b4c00) {
            this['elem'] = _0x2de322, this['prop'] = _0x2155a3, this['easing'] = _0x358c3c || _0x3804bf['easing']['_default'], this['options'] = _0x3b83b0, this['start'] = this['now'] = this['cur'](), this['end'] = _0x12391e, this['unit'] = _0x1b4c00 || (_0x3804bf['cssNumber'][_0x2155a3] ? '' : 'px');
        },
        'cur': function() {
            var _0x52183a = _0x3e0ef9['propHooks'][this['prop']];
            return _0x52183a && _0x52183a['get'] ? _0x52183a['get'](this) : _0x3e0ef9['propHooks']['_default']['get'](this);
        },
        'run': function(_0x47392d) {
            var _0x5c4315, _0x3080ba = _0x3e0ef9['propHooks'][this['prop']];
            return this['options']['duration'] ? this['pos'] = _0x5c4315 = _0x3804bf['easing'][this['easing']](_0x47392d, this['options']['duration'] * _0x47392d, 0x0, 0x1, this['options']['duration']) : this['pos'] = _0x5c4315 = _0x47392d, this['now'] = (this['end'] - this['start']) * _0x5c4315 + this['start'], this['options']['step'] && this['options']['step']['call'](this['elem'], this['now'], this), _0x3080ba && _0x3080ba['set'] ? _0x3080ba['set'](this) : _0x3e0ef9['propHooks']['_default']['set'](this), this;
        }
    }, _0x3e0ef9['prototype']['init']['prototype'] = _0x3e0ef9['prototype'], _0x3e0ef9['propHooks'] = {
        '_default': {
            'get': function(_0x31afc4) {
                var _0x5e7eaf;
                return 0x1 !== _0x31afc4['elem']['nodeType'] || null != _0x31afc4['elem'][_0x31afc4['prop']] && null == _0x31afc4['elem']['style'][_0x31afc4['prop']] ? _0x31afc4['elem'][_0x31afc4['prop']] : (_0x5e7eaf = _0x3804bf['css'](_0x31afc4['elem'], _0x31afc4['prop'], ''), _0x5e7eaf && 'auto' !== _0x5e7eaf ? _0x5e7eaf : 0x0);
            },
            'set': function(_0x1bd28a) {
                _0x3804bf['fx']['step'][_0x1bd28a['prop']] ? _0x3804bf['fx']['step'][_0x1bd28a['prop']](_0x1bd28a) : 0x1 !== _0x1bd28a['elem']['nodeType'] || null == _0x1bd28a['elem']['style'][_0x3804bf['cssProps'][_0x1bd28a['prop']]] && !_0x3804bf['cssHooks'][_0x1bd28a['prop']] ? _0x1bd28a['elem'][_0x1bd28a['prop']] = _0x1bd28a['now'] : _0x3804bf['style'](_0x1bd28a['elem'], _0x1bd28a['prop'], _0x1bd28a['now'] + _0x1bd28a['unit']);
            }
        }
    }, _0x3e0ef9['propHooks']['scrollTop'] = _0x3e0ef9['propHooks']['scrollLeft'] = {
        'set': function(_0x15d88e) {
            _0x15d88e['elem']['nodeType'] && _0x15d88e['elem']['parentNode'] && (_0x15d88e['elem'][_0x15d88e['prop']] = _0x15d88e['now']);
        }
    }, _0x3804bf['easing'] = {
        'linear': function(_0x4733c7) {
            return _0x4733c7;
        },
        'swing': function(_0x3499d7) {
            return 0.5 - Math['cos'](_0x3499d7 * Math['PI']) / 0x2;
        },
        '_default': 'swing'
    }, _0x3804bf['fx'] = _0x3e0ef9['prototype']['init'], _0x3804bf['fx']['step'] = {};
    var _0x28d216, _0x3f83b, _0x4c58ff = /^(?:toggle|show|hide)$/,
        _0x486837 = /queueHooks$/;
    _0x3804bf['Animation'] = _0x3804bf['extend'](_0x56e01d, {
        'tweeners': {
            '*': [function(_0x5b55e9, _0x103d56) {
                var _0x328039 = this['createTween'](_0x5b55e9, _0x103d56);
                return _0x2967f4(_0x328039['elem'], _0x5b55e9, _0x142d0a['exec'](_0x103d56), _0x328039), _0x328039;
            }]
        },
        'tweener': function(_0x121fe9, _0x5c361f) {
            _0x3804bf['isFunction'](_0x121fe9) ? (_0x5c361f = _0x121fe9, _0x121fe9 = ['*']) : _0x121fe9 = _0x121fe9['match'](_0x3ac1b9);
            for (var _0xd3afeb, _0x41652e = 0x0, _0x56da2d = _0x121fe9['length']; _0x41652e < _0x56da2d; _0x41652e++) _0xd3afeb = _0x121fe9[_0x41652e], _0x56e01d['tweeners'][_0xd3afeb] = _0x56e01d['tweeners'][_0xd3afeb] || [], _0x56e01d['tweeners'][_0xd3afeb]['unshift'](_0x5c361f);
        },
        'prefilters': [function(_0x3e31a1, _0x6e392c, _0x1cf2d4) {
            var _0x53ac97, _0x5adb1b, _0x34398a, _0xcb342c, _0x56822a, _0x3d0352, _0x51d42e, _0x310402, _0x171da9 = 'width' in _0x6e392c || 'height' in _0x6e392c,
                _0x3482d3 = this,
                _0x543fe8 = {},
                _0x20db1a = _0x3e31a1['style'],
                _0x51d9e6 = _0x3e31a1['nodeType'] && _0x293303(_0x3e31a1),
                _0x20fced = _0x460f18['get'](_0x3e31a1, 'fxshow');
            _0x1cf2d4['queue'] || (_0xcb342c = _0x3804bf['_queueHooks'](_0x3e31a1, 'fx'), null == _0xcb342c['unqueued'] && (_0xcb342c['unqueued'] = 0x0, _0x56822a = _0xcb342c['empty']['fire'], _0xcb342c['empty']['fire'] = function() {
                _0xcb342c['unqueued'] || _0x56822a();
            }), _0xcb342c['unqueued']++, _0x3482d3['always'](function() {
                _0x3482d3['always'](function() {
                    _0xcb342c['unqueued']--, _0x3804bf['queue'](_0x3e31a1, 'fx')['length'] || _0xcb342c['empty']['fire']();
                });
            }));
            for (_0x53ac97 in _0x6e392c)
                if (_0x5adb1b = _0x6e392c[_0x53ac97], _0x4c58ff['test'](_0x5adb1b)) {
                    if (delete _0x6e392c[_0x53ac97], _0x34398a = _0x34398a || 'toggle' === _0x5adb1b, _0x5adb1b === (_0x51d9e6 ? 'hide' : 'show')) {
                        if ('show' !== _0x5adb1b || !_0x20fced || void 0x0 === _0x20fced[_0x53ac97]) continue;
                        _0x51d9e6 = !0x0;
                    }
                    _0x543fe8[_0x53ac97] = _0x20fced && _0x20fced[_0x53ac97] || _0x3804bf['style'](_0x3e31a1, _0x53ac97);
                }
            if (_0x3d0352 = !_0x3804bf['isEmptyObject'](_0x6e392c), _0x3d0352 || !_0x3804bf['isEmptyObject'](_0x543fe8)) {
                for (_0x53ac97 in (_0x171da9 && 0x1 === _0x3e31a1['nodeType'] && (_0x1cf2d4['overflow'] = [_0x20db1a['overflow'], _0x20db1a['overflowX'], _0x20db1a['overflowY']], _0x51d42e = _0x20fced && _0x20fced['display'], null == _0x51d42e && (_0x51d42e = _0x460f18['get'](_0x3e31a1, 'display')), _0x310402 = _0x3804bf['css'](_0x3e31a1, 'display'), 'none' === _0x310402 && (_0x51d42e ? _0x310402 = _0x51d42e : (_0x21eb52([_0x3e31a1], !0x0), _0x51d42e = _0x3e31a1['style']['display'] || _0x51d42e, _0x310402 = _0x3804bf['css'](_0x3e31a1, 'display'), _0x21eb52([_0x3e31a1]))), ('inline' === _0x310402 || 'inline-block' === _0x310402 && null != _0x51d42e) && 'none' === _0x3804bf['css'](_0x3e31a1, 'float') && (_0x3d0352 || (_0x3482d3['done'](function() {
                        _0x20db1a['display'] = _0x51d42e;
                    }), null == _0x51d42e && (_0x310402 = _0x20db1a['display'], _0x51d42e = 'none' === _0x310402 ? '' : _0x310402)), _0x20db1a['display'] = 'inline-block')), _0x1cf2d4['overflow'] && (_0x20db1a['overflow'] = 'hidden', _0x3482d3['always'](function() {
                        _0x20db1a['overflow'] = _0x1cf2d4['overflow'][0x0], _0x20db1a['overflowX'] = _0x1cf2d4['overflow'][0x1], _0x20db1a['overflowY'] = _0x1cf2d4['overflow'][0x2];
                    })), _0x3d0352 = !0x1, _0x543fe8)) _0x3d0352 || (_0x20fced ? 'hidden' in _0x20fced && (_0x51d9e6 = _0x20fced['hidden']) : _0x20fced = _0x460f18['access'](_0x3e31a1, 'fxshow', {
                    'display': _0x51d42e
                }), _0x34398a && (_0x20fced['hidden'] = !_0x51d9e6), _0x51d9e6 && _0x21eb52([_0x3e31a1], !0x0), _0x3482d3['done'](function() {
                    _0x51d9e6 || _0x21eb52([_0x3e31a1]), _0x460f18['remove'](_0x3e31a1, 'fxshow');
                    for (_0x53ac97 in _0x543fe8) _0x3804bf['style'](_0x3e31a1, _0x53ac97, _0x543fe8[_0x53ac97]);
                })), _0x3d0352 = _0x2e4341(_0x51d9e6 ? _0x20fced[_0x53ac97] : 0x0, _0x53ac97, _0x3482d3), _0x53ac97 in _0x20fced || (_0x20fced[_0x53ac97] = _0x3d0352['start'], _0x51d9e6 && (_0x3d0352['end'] = _0x3d0352['start'], _0x3d0352['start'] = 0x0));
            }
        }],
        'prefilter': function(_0x220793, _0x27b67e) {
            _0x27b67e ? _0x56e01d['prefilters']['unshift'](_0x220793) : _0x56e01d['prefilters']['push'](_0x220793);
        }
    }), _0x3804bf['speed'] = function(_0x20c13d, _0x4f6392, _0x266c9c) {
        var _0x16293d = _0x20c13d && 'object' == typeof _0x20c13d ? _0x3804bf['extend']({}, _0x20c13d) : {
            'complete': _0x266c9c || !_0x266c9c && _0x4f6392 || _0x3804bf['isFunction'](_0x20c13d) && _0x20c13d,
            'duration': _0x20c13d,
            'easing': _0x266c9c && _0x4f6392 || _0x4f6392 && !_0x3804bf['isFunction'](_0x4f6392) && _0x4f6392
        };
        return _0x3804bf['fx']['off'] ? _0x16293d['duration'] = 0x0 : 'number' != typeof _0x16293d['duration'] && (_0x16293d['duration'] in _0x3804bf['fx']['speeds'] ? _0x16293d['duration'] = _0x3804bf['fx']['speeds'][_0x16293d['duration']] : _0x16293d['duration'] = _0x3804bf['fx']['speeds']['_default']), null != _0x16293d['queue'] && !0x0 !== _0x16293d['queue'] || (_0x16293d['queue'] = 'fx'), _0x16293d['old'] = _0x16293d['complete'], _0x16293d['complete'] = function() {
            _0x3804bf['isFunction'](_0x16293d['old']) && _0x16293d['old']['call'](this), _0x16293d['queue'] && _0x3804bf['dequeue'](this, _0x16293d['queue']);
        }, _0x16293d;
    }, _0x3804bf['fn']['extend']({
        'fadeTo': function(_0x41f3c0, _0xae56b0, _0x1acd55, _0x306a09) {
            return this['filter'](_0x293303)['css']('opacity', 0x0)['show']()['end']()['animate']({
                'opacity': _0xae56b0
            }, _0x41f3c0, _0x1acd55, _0x306a09);
        },
        'animate': function(_0x3da2b6, _0x1201cd, _0x2aa79e, _0x107ce9) {
            var _0x5572d7 = _0x3804bf['isEmptyObject'](_0x3da2b6),
                _0x3dd7b0 = _0x3804bf['speed'](_0x1201cd, _0x2aa79e, _0x107ce9);
            return _0x1201cd = function() {
                var _0x426ef2 = _0x56e01d(this, _0x3804bf['extend']({}, _0x3da2b6), _0x3dd7b0);
                (_0x5572d7 || _0x460f18['get'](this, 'finish')) && _0x426ef2['stop'](!0x0);
            }, (_0x1201cd['finish'] = _0x1201cd, _0x5572d7 || !0x1 === _0x3dd7b0['queue'] ? this['each'](_0x1201cd) : this['queue'](_0x3dd7b0['queue'], _0x1201cd));
        },
        'stop': function(_0x214a29, _0x189ad1, _0x8bdcf6) {
            var _0x25f721 = function(_0x370060) {
                var _0x4e5b44 = _0x370060['stop'];
                delete _0x370060['stop'], _0x4e5b44(_0x8bdcf6);
            };
            return 'string' != typeof _0x214a29 && (_0x8bdcf6 = _0x189ad1, _0x189ad1 = _0x214a29, _0x214a29 = void 0x0), _0x189ad1 && !0x1 !== _0x214a29 && this['queue'](_0x214a29 || 'fx', []), this['each'](function() {
                var _0x32ee6c = !0x0,
                    _0x2afbcf = null != _0x214a29 && _0x214a29 + 'queueHooks',
                    _0x40cd10 = _0x3804bf['timers'],
                    _0x2511f0 = _0x460f18['get'](this);
                if (_0x2afbcf) _0x2511f0[_0x2afbcf] && _0x2511f0[_0x2afbcf]['stop'] && _0x25f721(_0x2511f0[_0x2afbcf]);
                else {
                    for (_0x2afbcf in _0x2511f0) _0x2511f0[_0x2afbcf] && _0x2511f0[_0x2afbcf]['stop'] && _0x486837['test'](_0x2afbcf) && _0x25f721(_0x2511f0[_0x2afbcf]);
                }
                for (_0x2afbcf = _0x40cd10['length']; _0x2afbcf--;) _0x40cd10[_0x2afbcf]['elem'] !== this || null != _0x214a29 && _0x40cd10[_0x2afbcf]['queue'] !== _0x214a29 || (_0x40cd10[_0x2afbcf]['anim']['stop'](_0x8bdcf6), _0x32ee6c = !0x1, _0x40cd10['splice'](_0x2afbcf, 0x1));
                !_0x32ee6c && _0x8bdcf6 || _0x3804bf['dequeue'](this, _0x214a29);
            });
        },
        'finish': function(_0x242e31) {
            return !0x1 !== _0x242e31 && (_0x242e31 = _0x242e31 || 'fx'), this['each'](function() {
                var _0x4e633e, _0x576be2 = _0x460f18['get'](this),
                    _0x381e63 = _0x576be2[_0x242e31 + 'queue'];
                _0x4e633e = _0x576be2[_0x242e31 + 'queueHooks'];
                var _0x462d7f = _0x3804bf['timers'],
                    _0x2af108 = _0x381e63 ? _0x381e63['length'] : 0x0;
                _0x576be2['finish'] = !0x0, _0x3804bf['queue'](this, _0x242e31, []), _0x4e633e && _0x4e633e['stop'] && _0x4e633e['stop']['call'](this, !0x0);
                for (_0x4e633e = _0x462d7f['length']; _0x4e633e--;) _0x462d7f[_0x4e633e]['elem'] === this && _0x462d7f[_0x4e633e]['queue'] === _0x242e31 && (_0x462d7f[_0x4e633e]['anim']['stop'](!0x0), _0x462d7f['splice'](_0x4e633e, 0x1));
                for (_0x4e633e = 0x0; _0x4e633e < _0x2af108; _0x4e633e++) _0x381e63[_0x4e633e] && _0x381e63[_0x4e633e]['finish'] && _0x381e63[_0x4e633e]['finish']['call'](this);
                delete _0x576be2['finish'];
            });
        }
    }), _0x3804bf['each'](['toggle', 'show', 'hide'], function(_0x59296a, _0x3af3bd) {
        var _0x358957 = _0x3804bf['fn'][_0x3af3bd];
        _0x3804bf['fn'][_0x3af3bd] = function(_0x3c0dfa, _0x9132cb, _0x2cc708) {
            return null == _0x3c0dfa || 'boolean' == typeof _0x3c0dfa ? _0x358957['apply'](this, arguments) : this['animate'](_0x261257(_0x3af3bd, !0x0), _0x3c0dfa, _0x9132cb, _0x2cc708);
        };
    }), _0x3804bf['each']({
        'slideDown': _0x261257('show'),
        'slideUp': _0x261257('hide'),
        'slideToggle': _0x261257('toggle'),
        'fadeIn': {
            'opacity': 'show'
        },
        'fadeOut': {
            'opacity': 'hide'
        },
        'fadeToggle': {
            'opacity': 'toggle'
        }
    }, function(_0x304f25, _0xfa067d) {
        _0x3804bf['fn'][_0x304f25] = function(_0x5851e6, _0x1abc85, _0x161358) {
            return this['animate'](_0xfa067d, _0x5851e6, _0x1abc85, _0x161358);
        };
    }), _0x3804bf['timers'] = [], _0x3804bf['fx']['tick'] = function() {
        var _0x50ee7d, _0x306f90 = 0x0,
            _0x8da869 = _0x3804bf['timers'];
        for (_0x28d216 = _0x3804bf['now'](); _0x306f90 < _0x8da869['length']; _0x306f90++) _0x50ee7d = _0x8da869[_0x306f90], _0x50ee7d() || _0x8da869[_0x306f90] !== _0x50ee7d || _0x8da869['splice'](_0x306f90--, 0x1);
        _0x8da869['length'] || _0x3804bf['fx']['stop'](), _0x28d216 = void 0x0;
    }, _0x3804bf['fx']['timer'] = function(_0x2ae78a) {
        _0x3804bf['timers']['push'](_0x2ae78a), _0x3804bf['fx']['start']();
    }, _0x3804bf['fx']['interval'] = 0xd, _0x3804bf['fx']['start'] = function() {
        _0x3f83b || (_0x3f83b = !0x0, _0x2c888b());
    }, _0x3804bf['fx']['stop'] = function() {
        _0x3f83b = null;
    }, _0x3804bf['fx']['speeds'] = {
        'slow': 0x258,
        'fast': 0xc8,
        '_default': 0x190
    }, _0x3804bf['fn']['delay'] = function(_0x36f63e, _0x5cb28a) {
        return _0x36f63e = _0x3804bf['fx'] ? _0x3804bf['fx']['speeds'][_0x36f63e] || _0x36f63e : _0x36f63e, _0x5cb28a = _0x5cb28a || 'fx', this['queue'](_0x5cb28a, function(_0x54f7be, _0x57e8e9) {
            var _0x544b49 = _0x27d1a6['setTimeout'](_0x54f7be, _0x36f63e);
            _0x57e8e9['stop'] = function() {
                _0x27d1a6['clearTimeout'](_0x544b49);
            };
        });
    };
    var _0x4b910c = _0x45a45f['createElement']('input'),
        _0x3ec68a = _0x45a45f['createElement']('select')['appendChild'](_0x45a45f['createElement']('option'));
    _0x4b910c['type'] = 'checkbox', _0x3c9eda['checkOn'] = '' !== _0x4b910c['value'], _0x3c9eda['optSelected'] = _0x3ec68a['selected'], _0x4b910c = _0x45a45f['createElement']('input'), _0x4b910c['value'] = 't', _0x4b910c['type'] = 'radio', _0x3c9eda['radioValue'] = 't' === _0x4b910c['value'];
    var _0x153de8, _0x47848e = _0x3804bf['expr']['attrHandle'];
    _0x3804bf['fn']['extend']({
        'attr': function(_0x4e916a, _0x3df6e6) {
            return _0x545439(this, _0x3804bf['attr'], _0x4e916a, _0x3df6e6, 0x1 < arguments['length']);
        },
        'removeAttr': function(_0x44a4f6) {
            return this['each'](function() {
                _0x3804bf['removeAttr'](this, _0x44a4f6);
            });
        }
    }), _0x3804bf['extend']({
        'attr': function(_0x136f1d, _0x39d54c, _0x3fe250) {
            var _0x21f2fd, _0x4badd1, _0x24ad09 = _0x136f1d['nodeType'];
            if (0x3 !== _0x24ad09 && 0x8 !== _0x24ad09 && 0x2 !== _0x24ad09) return 'undefined' == typeof _0x136f1d['getAttribute'] ? _0x3804bf['prop'](_0x136f1d, _0x39d54c, _0x3fe250) : (0x1 === _0x24ad09 && _0x3804bf['isXMLDoc'](_0x136f1d) || (_0x4badd1 = _0x3804bf['attrHooks'][_0x39d54c['toLowerCase']()] || (_0x3804bf['expr']['match']['bool']['test'](_0x39d54c) ? _0x153de8 : void 0x0)), void 0x0 !== _0x3fe250 ? null === _0x3fe250 ? void _0x3804bf['removeAttr'](_0x136f1d, _0x39d54c) : _0x4badd1 && 'set' in _0x4badd1 && void 0x0 !== (_0x21f2fd = _0x4badd1['set'](_0x136f1d, _0x3fe250, _0x39d54c)) ? _0x21f2fd : (_0x136f1d['setAttribute'](_0x39d54c, _0x3fe250 + ''), _0x3fe250) : _0x4badd1 && 'get' in _0x4badd1 && null !== (_0x21f2fd = _0x4badd1['get'](_0x136f1d, _0x39d54c)) ? _0x21f2fd : (_0x21f2fd = _0x3804bf['find']['attr'](_0x136f1d, _0x39d54c), null == _0x21f2fd ? void 0x0 : _0x21f2fd));
        },
        'attrHooks': {
            'type': {
                'set': function(_0x1ebc3a, _0x38463f) {
                    if (!_0x3c9eda['radioValue'] && 'radio' === _0x38463f && _0x504a90(_0x1ebc3a, 'input')) {
                        var _0x2d7239 = _0x1ebc3a['value'];
                        return _0x1ebc3a['setAttribute']('type', _0x38463f), _0x2d7239 && (_0x1ebc3a['value'] = _0x2d7239), _0x38463f;
                    }
                }
            }
        },
        'removeAttr': function(_0x42edaf, _0xbf9840) {
            var _0x5b0956, _0x366df2 = 0x0,
                _0x1e6f9b = _0xbf9840 && _0xbf9840['match'](_0x3ac1b9);
            if (_0x1e6f9b && 0x1 === _0x42edaf['nodeType']) {
                for (; _0x5b0956 = _0x1e6f9b[_0x366df2++];) _0x42edaf['removeAttribute'](_0x5b0956);
            }
        }
    }), _0x153de8 = {
        'set': function(_0x2269c5, _0x1f8254, _0x56f471) {
            return !0x1 === _0x1f8254 ? _0x3804bf['removeAttr'](_0x2269c5, _0x56f471) : _0x2269c5['setAttribute'](_0x56f471, _0x56f471), _0x56f471;
        }
    }, _0x3804bf['each'](_0x3804bf['expr']['match']['bool']['source']['match'](/\w+/g), function(_0x50426e, _0x156d25) {
        var _0x43b433 = _0x47848e[_0x156d25] || _0x3804bf['find']['attr'];
        _0x47848e[_0x156d25] = function(_0x35eba9, _0x370786, _0x538e37) {
            var _0x316943, _0xbd99ef, _0x54cb9b = _0x370786['toLowerCase']();
            return _0x538e37 || (_0xbd99ef = _0x47848e[_0x54cb9b], _0x47848e[_0x54cb9b] = _0x316943, _0x316943 = null != _0x43b433(_0x35eba9, _0x370786, _0x538e37) ? _0x54cb9b : null, _0x47848e[_0x54cb9b] = _0xbd99ef), _0x316943;
        };
    });
    var _0x535136 = /^(?:input|select|textarea|button)$/i,
        _0x5459f5 = /^(?:a|area)$/i;
    _0x3804bf['fn']['extend']({
        'prop': function(_0x4a24e9, _0x5ee7fb) {
            return _0x545439(this, _0x3804bf['prop'], _0x4a24e9, _0x5ee7fb, 0x1 < arguments['length']);
        },
        'removeProp': function(_0x2dc706) {
            return this['each'](function() {
                delete this[_0x3804bf['propFix'][_0x2dc706] || _0x2dc706];
            });
        }
    }), _0x3804bf['extend']({
        'prop': function(_0x11cde5, _0x226d70, _0xc45a6b) {
            var _0xcf1727, _0x3b4a18, _0x43eb72 = _0x11cde5['nodeType'];
            if (0x3 !== _0x43eb72 && 0x8 !== _0x43eb72 && 0x2 !== _0x43eb72) return 0x1 === _0x43eb72 && _0x3804bf['isXMLDoc'](_0x11cde5) || (_0x226d70 = _0x3804bf['propFix'][_0x226d70] || _0x226d70, _0x3b4a18 = _0x3804bf['propHooks'][_0x226d70]), void 0x0 !== _0xc45a6b ? _0x3b4a18 && 'set' in _0x3b4a18 && void 0x0 !== (_0xcf1727 = _0x3b4a18['set'](_0x11cde5, _0xc45a6b, _0x226d70)) ? _0xcf1727 : _0x11cde5[_0x226d70] = _0xc45a6b : _0x3b4a18 && 'get' in _0x3b4a18 && null !== (_0xcf1727 = _0x3b4a18['get'](_0x11cde5, _0x226d70)) ? _0xcf1727 : _0x11cde5[_0x226d70];
        },
        'propHooks': {
            'tabIndex': {
                'get': function(_0x3bf345) {
                    var _0x113801 = _0x3804bf['find']['attr'](_0x3bf345, 'tabindex');
                    return _0x113801 ? parseInt(_0x113801, 0xa) : _0x535136['test'](_0x3bf345['nodeName']) || _0x5459f5['test'](_0x3bf345['nodeName']) && _0x3bf345['href'] ? 0x0 : -0x1;
                }
            }
        },
        'propFix': {
            'for': 'htmlFor',
            'class': 'className'
        }
    }), _0x3c9eda['optSelected'] || (_0x3804bf['propHooks']['selected'] = {
        'get': function(_0x596bc4) {
            return _0x596bc4 = _0x596bc4['parentNode'], (_0x596bc4 && _0x596bc4['parentNode'] && _0x596bc4['parentNode']['selectedIndex'], null);
        },
        'set': function(_0x47877a) {
            _0x47877a = _0x47877a['parentNode'], _0x47877a && (_0x47877a['selectedIndex'], _0x47877a['parentNode'] && _0x47877a['parentNode']['selectedIndex']);
        }
    }), _0x3804bf['each']('tabIndex\x20readOnly\x20maxLength\x20cellSpacing\x20cellPadding\x20rowSpan\x20colSpan\x20useMap\x20frameBorder\x20contentEditable' ['split']('\x20'), function() {
        _0x3804bf['propFix'][this['toLowerCase']()] = this;
    }), _0x3804bf['fn']['extend']({
        'addClass': function(_0x1fd996) {
            var _0x369dba, _0x70017, _0x2051c2, _0x155501, _0x402c82, _0xf8bfee, _0x2b79c5 = 0x0;
            if (_0x3804bf['isFunction'](_0x1fd996)) return this['each'](function(_0x3f1b4b) {
                _0x3804bf(this)['addClass'](_0x1fd996['call'](this, _0x3f1b4b, _0x5e6346(this)));
            });
            if ('string' == typeof _0x1fd996 && _0x1fd996) {
                for (_0x369dba = _0x1fd996['match'](_0x3ac1b9) || []; _0x70017 = this[_0x2b79c5++];)
                    if (_0x155501 = _0x5e6346(_0x70017), _0x2051c2 = 0x1 === _0x70017['nodeType'] && '\x20' + _0x4469bf(_0x155501) + '\x20') {
                        for (_0xf8bfee = 0x0; _0x402c82 = _0x369dba[_0xf8bfee++];) 0x0 > _0x2051c2['indexOf']('\x20' + _0x402c82 + '\x20') && (_0x2051c2 += _0x402c82 + '\x20');
                        _0x2051c2 = _0x4469bf(_0x2051c2), _0x155501 !== _0x2051c2 && _0x70017['setAttribute']('class', _0x2051c2);
                    }
            }
            return this;
        },
        'removeClass': function(_0x5bd11a) {
            var _0xf14a1c, _0xe147d, _0x3f08a2, _0x1476d5, _0x1ad485, _0x19caa5, _0x302b75 = 0x0;
            if (_0x3804bf['isFunction'](_0x5bd11a)) return this['each'](function(_0x212366) {
                _0x3804bf(this)['removeClass'](_0x5bd11a['call'](this, _0x212366, _0x5e6346(this)));
            });
            if (!arguments['length']) return this['attr']('class', '');
            if ('string' == typeof _0x5bd11a && _0x5bd11a) {
                for (_0xf14a1c = _0x5bd11a['match'](_0x3ac1b9) || []; _0xe147d = this[_0x302b75++];)
                    if (_0x1476d5 = _0x5e6346(_0xe147d), _0x3f08a2 = 0x1 === _0xe147d['nodeType'] && '\x20' + _0x4469bf(_0x1476d5) + '\x20') {
                        for (_0x19caa5 = 0x0; _0x1ad485 = _0xf14a1c[_0x19caa5++];)
                            for (; - 0x1 < _0x3f08a2['indexOf']('\x20' + _0x1ad485 + '\x20');) _0x3f08a2 = _0x3f08a2['replace']('\x20' + _0x1ad485 + '\x20', '\x20');
                        _0x3f08a2 = _0x4469bf(_0x3f08a2), _0x1476d5 !== _0x3f08a2 && _0xe147d['setAttribute']('class', _0x3f08a2);
                    }
            }
            return this;
        },
        'toggleClass': function(_0x5fc3ca, _0x2c4cba) {
            var _0x346d75 = typeof _0x5fc3ca;
            return 'boolean' == typeof _0x2c4cba && 'string' === _0x346d75 ? _0x2c4cba ? this['addClass'](_0x5fc3ca) : this['removeClass'](_0x5fc3ca) : _0x3804bf['isFunction'](_0x5fc3ca) ? this['each'](function(_0x6a2269) {
                _0x3804bf(this)['toggleClass'](_0x5fc3ca['call'](this, _0x6a2269, _0x5e6346(this), _0x2c4cba), _0x2c4cba);
            }) : this['each'](function() {
                var _0x1810b1, _0x41b7e0, _0x2d881b, _0x4fdc9c;
                if ('string' === _0x346d75) {
                    _0x41b7e0 = 0x0, _0x2d881b = _0x3804bf(this);
                    for (_0x4fdc9c = _0x5fc3ca['match'](_0x3ac1b9) || []; _0x1810b1 = _0x4fdc9c[_0x41b7e0++];) _0x2d881b['hasClass'](_0x1810b1) ? _0x2d881b['removeClass'](_0x1810b1) : _0x2d881b['addClass'](_0x1810b1);
                } else void 0x0 !== _0x5fc3ca && 'boolean' !== _0x346d75 || (_0x1810b1 = _0x5e6346(this), _0x1810b1 && _0x460f18['set'](this, '__className__', _0x1810b1), this['setAttribute'] && this['setAttribute']('class', _0x1810b1 || !0x1 === _0x5fc3ca ? '' : _0x460f18['get'](this, '__className__') || ''));
            });
        },
        'hasClass': function(_0x59f8bb) {
            var _0x234ce9, _0x314387 = 0x0;
            for (_0x59f8bb = '\x20' + _0x59f8bb + '\x20'; _0x234ce9 = this[_0x314387++];)
                if (0x1 === _0x234ce9['nodeType'] && -0x1 < ('\x20' + _0x4469bf(_0x5e6346(_0x234ce9)) + '\x20')['indexOf'](_0x59f8bb)) return !0x0;
            return !0x1;
        }
    });
    var _0x4134f7 = /\r/g;
    _0x3804bf['fn']['extend']({
        'val': function(_0x1240d7) {
            var _0x50bd24, _0x45de96, _0x2cf78e, _0x59c8a6 = this[0x0];
            if (arguments['length']) return _0x2cf78e = _0x3804bf['isFunction'](_0x1240d7), this['each'](function(_0xc63ef4) {
                var _0xca61d1;
                0x1 === this['nodeType'] && (_0xca61d1 = _0x2cf78e ? _0x1240d7['call'](this, _0xc63ef4, _0x3804bf(this)['val']()) : _0x1240d7, null == _0xca61d1 ? _0xca61d1 = '' : 'number' == typeof _0xca61d1 ? _0xca61d1 += '' : Array['isArray'](_0xca61d1) && (_0xca61d1 = _0x3804bf['map'](_0xca61d1, function(_0x2a31a1) {
                    return null == _0x2a31a1 ? '' : _0x2a31a1 + '';
                })), _0x50bd24 = _0x3804bf['valHooks'][this['type']] || _0x3804bf['valHooks'][this['nodeName']['toLowerCase']()], _0x50bd24 && 'set' in _0x50bd24 && void 0x0 !== _0x50bd24['set'](this, _0xca61d1, 'value') || (this['value'] = _0xca61d1));
            });
            if (_0x59c8a6) return _0x50bd24 = _0x3804bf['valHooks'][_0x59c8a6['type']] || _0x3804bf['valHooks'][_0x59c8a6['nodeName']['toLowerCase']()], _0x50bd24 && 'get' in _0x50bd24 && void 0x0 !== (_0x45de96 = _0x50bd24['get'](_0x59c8a6, 'value')) ? _0x45de96 : (_0x45de96 = _0x59c8a6['value'], 'string' == typeof _0x45de96 ? _0x45de96['replace'](_0x4134f7, '') : null == _0x45de96 ? '' : _0x45de96);
        }
    }), _0x3804bf['extend']({
        'valHooks': {
            'option': {
                'get': function(_0x528378) {
                    var _0xf7402 = _0x3804bf['find']['attr'](_0x528378, 'value');
                    return null != _0xf7402 ? _0xf7402 : _0x4469bf(_0x3804bf['text'](_0x528378));
                }
            },
            'select': {
                'get': function(_0x2e9744) {
                    var _0xd7dea0, _0x28c233, _0x71d41c = _0x2e9744['options'],
                        _0x4bb00d = _0x2e9744['selectedIndex'],
                        _0x5bc851 = 'select-one' === _0x2e9744['type'],
                        _0x3e766e = _0x5bc851 ? null : [],
                        _0x26bef9 = _0x5bc851 ? _0x4bb00d + 0x1 : _0x71d41c['length'];
                    for (_0x28c233 = 0x0 > _0x4bb00d ? _0x26bef9 : _0x5bc851 ? _0x4bb00d : 0x0; _0x28c233 < _0x26bef9; _0x28c233++)
                        if (_0xd7dea0 = _0x71d41c[_0x28c233], (_0xd7dea0['selected'] || _0x28c233 === _0x4bb00d) && !_0xd7dea0['disabled'] && (!_0xd7dea0['parentNode']['disabled'] || !_0x504a90(_0xd7dea0['parentNode'], 'optgroup'))) {
                            if (_0x2e9744 = _0x3804bf(_0xd7dea0)['val'](), _0x5bc851) return _0x2e9744;
                            _0x3e766e['push'](_0x2e9744);
                        }
                    return _0x3e766e;
                },
                'set': function(_0x5af0d7, _0x3b85dd) {
                    for (var _0x4b458e, _0x1ef9ac, _0x34a944 = _0x5af0d7['options'], _0x13abb7 = _0x3804bf['makeArray'](_0x3b85dd), _0x35b1a7 = _0x34a944['length']; _0x35b1a7--;) _0x1ef9ac = _0x34a944[_0x35b1a7], (_0x1ef9ac['selected'] = -0x1 < _0x3804bf['inArray'](_0x3804bf['valHooks']['option']['get'](_0x1ef9ac), _0x13abb7)) && (_0x4b458e = !0x0);
                    return _0x4b458e || (_0x5af0d7['selectedIndex'] = -0x1), _0x13abb7;
                }
            }
        }
    }), _0x3804bf['each'](['radio', 'checkbox'], function() {
        _0x3804bf['valHooks'][this] = {
            'set': function(_0x4b6f80, _0x126648) {
                if (Array['isArray'](_0x126648)) return _0x4b6f80['checked'] = -0x1 < _0x3804bf['inArray'](_0x3804bf(_0x4b6f80)['val'](), _0x126648);
            }
        }, _0x3c9eda['checkOn'] || (_0x3804bf['valHooks'][this]['get'] = function(_0x4b4b1a) {
            return null === _0x4b4b1a['getAttribute']('value') ? 'on' : _0x4b4b1a['value'];
        });
    });
    var _0x477292 = /^(?:focusinfocus|focusoutblur)$/;
    _0x3804bf['extend'](_0x3804bf['event'], {
        'trigger': function(_0x222e24, _0x331ba0, _0x389334, _0x271a5d) {
            var _0x1d4824, _0x164ddd, _0xfae19f, _0x1a954d, _0x32eade, _0x434fb7, _0x3b6add, _0x1a6fdc = [_0x389334 || _0x45a45f],
                _0x11fd99 = _0x15e682['call'](_0x222e24, 'type') ? _0x222e24['type'] : _0x222e24;
            _0x1d4824 = _0x15e682['call'](_0x222e24, 'namespace') ? _0x222e24['namespace']['split']('.') : [];
            if (_0x164ddd = _0xfae19f = _0x389334 = _0x389334 || _0x45a45f, 0x3 !== _0x389334['nodeType'] && 0x8 !== _0x389334['nodeType'] && !_0x477292['test'](_0x11fd99 + _0x3804bf['event']['triggered']) && (-0x1 < _0x11fd99['indexOf']('.') && (_0x1d4824 = _0x11fd99['split']('.'), _0x11fd99 = _0x1d4824['shift'](), _0x1d4824['sort']()), _0x32eade = 0x0 > _0x11fd99['indexOf'](':') && 'on' + _0x11fd99, _0x222e24 = _0x222e24[_0x3804bf['expando']] ? _0x222e24 : new _0x3804bf['Event'](_0x11fd99, 'object' == typeof _0x222e24 && _0x222e24), _0x222e24['isTrigger'] = _0x271a5d ? 0x2 : 0x3, _0x222e24['namespace'] = _0x1d4824['join']('.'), _0x222e24['rnamespace'] = _0x222e24['namespace'] ? RegExp('(^|\x5c.)' + _0x1d4824['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)') : null, _0x222e24['result'] = void 0x0, _0x222e24['target'] || (_0x222e24['target'] = _0x389334), _0x331ba0 = null == _0x331ba0 ? [_0x222e24] : _0x3804bf['makeArray'](_0x331ba0, [_0x222e24]), _0x3b6add = _0x3804bf['event']['special'][_0x11fd99] || {}, _0x271a5d || !_0x3b6add['trigger'] || !0x1 !== _0x3b6add['trigger']['apply'](_0x389334, _0x331ba0))) {
                if (!_0x271a5d && !_0x3b6add['noBubble'] && !_0x3804bf['isWindow'](_0x389334)) {
                    _0x1a954d = _0x3b6add['delegateType'] || _0x11fd99;
                    for (_0x477292['test'](_0x1a954d + _0x11fd99) || (_0x164ddd = _0x164ddd['parentNode']); _0x164ddd; _0x164ddd = _0x164ddd['parentNode']) _0x1a6fdc['push'](_0x164ddd), _0xfae19f = _0x164ddd;
                    _0xfae19f === (_0x389334['ownerDocument'] || _0x45a45f) && _0x1a6fdc['push'](_0xfae19f['defaultView'] || _0xfae19f['parentWindow'] || _0x27d1a6);
                }
                for (_0x1d4824 = 0x0;
                    (_0x164ddd = _0x1a6fdc[_0x1d4824++]) && !_0x222e24['isPropagationStopped']();) _0x222e24['type'] = 0x1 < _0x1d4824 ? _0x1a954d : _0x3b6add['bindType'] || _0x11fd99, (_0x434fb7 = (_0x460f18['get'](_0x164ddd, 'events') || {})[_0x222e24['type']] && _0x460f18['get'](_0x164ddd, 'handle')) && _0x434fb7['apply'](_0x164ddd, _0x331ba0), (_0x434fb7 = _0x32eade && _0x164ddd[_0x32eade]) && _0x434fb7['apply'] && _0x109a24(_0x164ddd) && (_0x222e24['result'] = _0x434fb7['apply'](_0x164ddd, _0x331ba0), !0x1 === _0x222e24['result'] && _0x222e24['preventDefault']());
                return _0x222e24['type'] = _0x11fd99, _0x271a5d || _0x222e24['isDefaultPrevented']() || _0x3b6add['_default'] && !0x1 !== _0x3b6add['_default']['apply'](_0x1a6fdc['pop'](), _0x331ba0) || !_0x109a24(_0x389334) || _0x32eade && _0x3804bf['isFunction'](_0x389334[_0x11fd99]) && !_0x3804bf['isWindow'](_0x389334) && (_0xfae19f = _0x389334[_0x32eade], _0xfae19f && (_0x389334[_0x32eade] = null), _0x3804bf['event']['triggered'] = _0x11fd99, _0x389334[_0x11fd99](), _0x3804bf['event']['triggered'] = void 0x0, _0xfae19f && (_0x389334[_0x32eade] = _0xfae19f)), _0x222e24['result'];
            }
        },
        'simulate': function(_0x3976ec, _0x1b1998, _0x5cfd7a) {
            _0x3976ec = _0x3804bf['extend'](new _0x3804bf['Event'](), _0x5cfd7a, {
                'type': _0x3976ec,
                'isSimulated': !0x0
            }), _0x3804bf['event']['trigger'](_0x3976ec, null, _0x1b1998);
        }
    }), _0x3804bf['fn']['extend']({
        'trigger': function(_0x281d35, _0x26240d) {
            return this['each'](function() {
                _0x3804bf['event']['trigger'](_0x281d35, _0x26240d, this);
            });
        },
        'triggerHandler': function(_0x34bee0, _0x538ede) {
            var _0x5e215f = this[0x0];
            if (_0x5e215f) return _0x3804bf['event']['trigger'](_0x34bee0, _0x538ede, _0x5e215f, !0x0);
        }
    }), _0x3804bf['each']('blur\x20focus\x20focusin\x20focusout\x20resize\x20scroll\x20click\x20dblclick\x20mousedown\x20mouseup\x20mousemove\x20mouseover\x20mouseout\x20mouseenter\x20mouseleave\x20change\x20select\x20submit\x20keydown\x20keypress\x20keyup\x20contextmenu' ['split']('\x20'), function(_0x815e27, _0x11b147) {
        _0x3804bf['fn'][_0x11b147] = function(_0x289c92, _0x30d7f0) {
            return 0x0 < arguments['length'] ? this['on'](_0x11b147, null, _0x289c92, _0x30d7f0) : this['trigger'](_0x11b147);
        };
    }), _0x3804bf['fn']['extend']({
        'hover': function(_0x1eda65, _0x269720) {
            return this['mouseenter'](_0x1eda65)['mouseleave'](_0x269720 || _0x1eda65);
        }
    }), _0x3c9eda['focusin'] = 'onfocusin' in _0x27d1a6, _0x3c9eda['focusin'] || _0x3804bf['each']({
        'focus': 'focusin',
        'blur': 'focusout'
    }, function(_0x3fd2fc, _0x353a6d) {
        var _0x4ce4f3 = function(_0x244c92) {
            _0x3804bf['event']['simulate'](_0x353a6d, _0x244c92['target'], _0x3804bf['event']['fix'](_0x244c92));
        };
        _0x3804bf['event']['special'][_0x353a6d] = {
            'setup': function() {
                var _0x34d6ff = this['ownerDocument'] || this,
                    _0x260280 = _0x460f18['access'](_0x34d6ff, _0x353a6d);
                _0x260280 || _0x34d6ff['addEventListener'](_0x3fd2fc, _0x4ce4f3, !0x0), _0x460f18['access'](_0x34d6ff, _0x353a6d, (_0x260280 || 0x0) + 0x1);
            },
            'teardown': function() {
                var _0x112fab = this['ownerDocument'] || this,
                    _0x21453c = _0x460f18['access'](_0x112fab, _0x353a6d) - 0x1;
                _0x21453c ? _0x460f18['access'](_0x112fab, _0x353a6d, _0x21453c) : (_0x112fab['removeEventListener'](_0x3fd2fc, _0x4ce4f3, !0x0), _0x460f18['remove'](_0x112fab, _0x353a6d));
            }
        };
    });
    var _0x1a1d70 = _0x27d1a6['location'],
        _0x1cb5ac = _0x3804bf['now'](),
        _0xaff440 = /\?/;
    _0x3804bf['parseXML'] = function(_0x4bff56) {
        var _0x43d035;
        if (!_0x4bff56 || 'string' != typeof _0x4bff56) return null;
        try {
            _0x43d035 = new _0x27d1a6['DOMParser']()['parseFromString'](_0x4bff56, 'text/xml');
        } catch (_0x5145b8) {
            _0x43d035 = void 0x0;
        }
        return _0x43d035 && !_0x43d035['getElementsByTagName']('parsererror')['length'] || _0x3804bf['error']('Invalid\x20XML:\x20' + _0x4bff56), _0x43d035;
    };
    var _0x5db6ef = /\[\]$/,
        _0x495d73 = /\r?\n/g,
        _0x4d313a = /^(?:submit|button|image|reset|file)$/i,
        _0x5f3dab = /^(?:input|select|textarea|keygen)/i;
    _0x3804bf['param'] = function(_0x43b8e1, _0x2b6dee) {
        var _0x3d5a49, _0x5ba950 = [],
            _0x4cc272 = function(_0x28d644, _0x3570da) {
                var _0xd426e3 = _0x3804bf['isFunction'](_0x3570da) ? _0x3570da() : _0x3570da;
                _0x5ba950[_0x5ba950['length']] = encodeURIComponent(_0x28d644) + '=' + encodeURIComponent(null == _0xd426e3 ? '' : _0xd426e3);
            };
        if (Array['isArray'](_0x43b8e1) || _0x43b8e1['jquery'] && !_0x3804bf['isPlainObject'](_0x43b8e1)) _0x3804bf['each'](_0x43b8e1, function() {
            _0x4cc272(this['name'], this['value']);
        });
        else {
            for (_0x3d5a49 in _0x43b8e1) _0x4ae4e2(_0x3d5a49, _0x43b8e1[_0x3d5a49], _0x2b6dee, _0x4cc272);
        }
        return _0x5ba950['join']('&');
    }, _0x3804bf['fn']['extend']({
        'serialize': function() {
            return _0x3804bf['param'](this['serializeArray']());
        },
        'serializeArray': function() {
            return this['map'](function() {
                var _0xea44ef = _0x3804bf['prop'](this, 'elements');
                return _0xea44ef ? _0x3804bf['makeArray'](_0xea44ef) : this;
            })['filter'](function() {
                var _0x3ca228 = this['type'];
                return this['name'] && !_0x3804bf(this)['is'](':disabled') && _0x5f3dab['test'](this['nodeName']) && !_0x4d313a['test'](_0x3ca228) && (this['checked'] || !_0x4d291e['test'](_0x3ca228));
            })['map'](function(_0x38565e, _0x1149ce) {
                var _0x5e33d9 = _0x3804bf(this)['val']();
                return null == _0x5e33d9 ? null : Array['isArray'](_0x5e33d9) ? _0x3804bf['map'](_0x5e33d9, function(_0x195ee4) {
                    return {
                        'name': _0x1149ce['name'],
                        'value': _0x195ee4['replace'](_0x495d73, '\x0d\x0a')
                    };
                }) : {
                    'name': _0x1149ce['name'],
                    'value': _0x5e33d9['replace'](_0x495d73, '\x0d\x0a')
                };
            })['get']();
        }
    });
    var _0x1ebb2e = /%20/g,
        _0x1bb127 = /#.*$/,
        _0x29b867 = /([?&])_=[^&]*/,
        _0x33eceb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _0x19a50a = /^(?:GET|HEAD)$/,
        _0x4f4a1f = /^\/\//,
        _0x4d76bf = {},
        _0x12763a = {},
        _0x150c8b = '*/' ['concat']('*'),
        _0x34abde = _0x45a45f['createElement']('a');
    _0x34abde['href'] = _0x1a1d70['href'], _0x3804bf['extend']({
        'active': 0x0,
        'lastModified': {},
        'etag': {},
        'ajaxSettings': {
            'url': _0x1a1d70['href'],
            'type': 'GET',
            'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/ ['test'](_0x1a1d70['protocol']),
            'global': !0x0,
            'processData': !0x0,
            'async': !0x0,
            'contentType': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
            'accepts': {
                '*': _0x150c8b,
                'text': 'text/plain',
                'html': 'text/html',
                'xml': 'application/xml,\x20text/xml',
                'json': 'application/json,\x20text/javascript'
            },
            'contents': {
                'xml': /\bxml\b/,
                'html': /\bhtml/,
                'json': /\bjson\b/
            },
            'responseFields': {
                'xml': 'responseXML',
                'text': 'responseText',
                'json': 'responseJSON'
            },
            'converters': {
                '*\x20text': String,
                'text\x20html': !0x0,
                'text\x20json': JSON['parse'],
                'text\x20xml': _0x3804bf['parseXML']
            },
            'flatOptions': {
                'url': !0x0,
                'context': !0x0
            }
        },
        'ajaxSetup': function(_0x9864e6, _0xdd6d9a) {
            return _0xdd6d9a ? _0x497ddf(_0x497ddf(_0x9864e6, _0x3804bf['ajaxSettings']), _0xdd6d9a) : _0x497ddf(_0x3804bf['ajaxSettings'], _0x9864e6);
        },
        'ajaxPrefilter': _0x3102d5(_0x4d76bf),
        'ajaxTransport': _0x3102d5(_0x12763a),
        'ajax': function(_0x4fc065, _0x5145d0) {
            function _0xe96c0e(_0xc65d8c, _0x53f1f5, _0x529cec, _0x32bb80) {
                var _0x505783, _0x10413f, _0x27ae2d, _0x43dfc9, _0x2e0bd3 = _0x53f1f5;
                if (!_0x33e73e) {
                    _0x33e73e = !0x0, _0x46aa30 && _0x27d1a6['clearTimeout'](_0x46aa30), _0x429c6d = void 0x0, _0x5eaa0b = _0x32bb80 || '', _0x53547c['readyState'] = 0x0 < _0xc65d8c ? 0x4 : 0x0, _0x32bb80 = 0xc8 <= _0xc65d8c && 0x12c > _0xc65d8c || 0x130 === _0xc65d8c;
                    if (_0x529cec) {
                        _0x27ae2d = _0x7c5cf3;
                        for (var _0x1eed7c = _0x53547c, _0xab09e1, _0x430d8b, _0x57ec28, _0x3235ef, _0x3a8e11 = _0x27ae2d['contents'], _0x1e453e = _0x27ae2d['dataTypes'];
                            '*' === _0x1e453e[0x0];) _0x1e453e['shift'](), void 0x0 === _0xab09e1 && (_0xab09e1 = _0x27ae2d['mimeType'] || _0x1eed7c['getResponseHeader']('Content-Type'));
                        if (_0xab09e1) {
                            for (_0x430d8b in _0x3a8e11)
                                if (_0x3a8e11[_0x430d8b] && _0x3a8e11[_0x430d8b]['test'](_0xab09e1)) {
                                    _0x1e453e['unshift'](_0x430d8b);
                                    break;
                                }
                        }
                        if (_0x1e453e[0x0] in _0x529cec) _0x57ec28 = _0x1e453e[0x0];
                        else {
                            for (_0x430d8b in _0x529cec) {
                                if (!_0x1e453e[0x0] || _0x27ae2d['converters'][_0x430d8b + '\x20' + _0x1e453e[0x0]]) {
                                    _0x57ec28 = _0x430d8b;
                                    break;
                                }
                                _0x3235ef || (_0x3235ef = _0x430d8b);
                            }
                            _0x57ec28 = _0x57ec28 || _0x3235ef;
                        }
                        _0x27ae2d = _0x529cec = _0x57ec28 ? (_0x57ec28 !== _0x1e453e[0x0] && _0x1e453e['unshift'](_0x57ec28), _0x529cec[_0x57ec28]) : void 0x0;
                    }
                    var _0xd218ef;
                    _0x4de865: {
                        _0x529cec = _0x7c5cf3,
                        _0xab09e1 = _0x27ae2d,
                        _0x430d8b = _0x53547c,
                        _0x57ec28 = _0x32bb80;
                        var _0x39fd2b, _0x29cd66, _0x546771;_0x27ae2d = {},
                        _0x1eed7c = _0x529cec['dataTypes']['slice']();
                        if (_0x1eed7c[0x1]) {
                            for (_0x39fd2b in _0x529cec['converters']) _0x27ae2d[_0x39fd2b['toLowerCase']()] = _0x529cec['converters'][_0x39fd2b];
                        }
                        for (_0x3235ef = _0x1eed7c['shift'](); _0x3235ef;)
                            if (_0x529cec['responseFields'][_0x3235ef] && (_0x430d8b[_0x529cec['responseFields'][_0x3235ef]] = _0xab09e1), !_0x546771 && _0x57ec28 && _0x529cec['dataFilter'] && (_0xab09e1 = _0x529cec['dataFilter'](_0xab09e1, _0x529cec['dataType'])), _0x546771 = _0x3235ef, _0x3235ef = _0x1eed7c['shift']()) {
                                if ('*' === _0x3235ef) _0x3235ef = _0x546771;
                                else {
                                    if ('*' !== _0x546771 && _0x546771 !== _0x3235ef) {
                                        if (_0x39fd2b = _0x27ae2d[_0x546771 + '\x20' + _0x3235ef] || _0x27ae2d['*\x20' + _0x3235ef], !_0x39fd2b) {
                                            for (_0xd218ef in _0x27ae2d)
                                                if (_0x29cd66 = _0xd218ef['split']('\x20'), _0x29cd66[0x1] === _0x3235ef && (_0x39fd2b = _0x27ae2d[_0x546771 + '\x20' + _0x29cd66[0x0]] || _0x27ae2d['*\x20' + _0x29cd66[0x0]])) {
                                                    !0x0 === _0x39fd2b ? _0x39fd2b = _0x27ae2d[_0xd218ef] : !0x0 !== _0x27ae2d[_0xd218ef] && (_0x3235ef = _0x29cd66[0x0], _0x1eed7c['unshift'](_0x29cd66[0x1]));
                                                    break;
                                                }
                                        }
                                        if (!0x0 !== _0x39fd2b) {
                                            if (_0x39fd2b && _0x529cec['throws']) _0xab09e1 = _0x39fd2b(_0xab09e1);
                                            else try {
                                                _0xab09e1 = _0x39fd2b(_0xab09e1);
                                            } catch (_0x52497c) {
                                                _0xd218ef = {
                                                    'state': 'parsererror',
                                                    'error': _0x39fd2b ? _0x52497c : 'No\x20conversion\x20from\x20' + _0x546771 + '\x20to\x20' + _0x3235ef
                                                };
                                                break _0x4de865;
                                            }
                                        }
                                    }
                                }
                            }
                        _0xd218ef = {
                            'state': 'success',
                            'data': _0xab09e1
                        };
                    }
                    _0x27ae2d = _0xd218ef, _0x32bb80 ? (_0x7c5cf3['ifModified'] && (_0x43dfc9 = _0x53547c['getResponseHeader']('Last-Modified'), _0x43dfc9 && (_0x3804bf['lastModified'][_0x88ac14] = _0x43dfc9), _0x43dfc9 = _0x53547c['getResponseHeader']('etag'), _0x43dfc9 && (_0x3804bf['etag'][_0x88ac14] = _0x43dfc9)), 0xcc === _0xc65d8c || 'HEAD' === _0x7c5cf3['type'] ? _0x2e0bd3 = 'nocontent' : 0x130 === _0xc65d8c ? _0x2e0bd3 = 'notmodified' : (_0x2e0bd3 = _0x27ae2d['state'], _0x505783 = _0x27ae2d['data'], _0x10413f = _0x27ae2d['error'], _0x32bb80 = !_0x10413f)) : (_0x10413f = _0x2e0bd3, !_0xc65d8c && _0x2e0bd3 || (_0x2e0bd3 = 'error', 0x0 > _0xc65d8c && (_0xc65d8c = 0x0))), _0x53547c['status'] = _0xc65d8c, _0x53547c['statusText'] = (_0x53f1f5 || _0x2e0bd3) + '', _0x32bb80 ? _0x305184['resolveWith'](_0x1b49cd, [_0x505783, _0x2e0bd3, _0x53547c]) : _0x305184['rejectWith'](_0x1b49cd, [_0x53547c, _0x2e0bd3, _0x10413f]), _0x53547c['statusCode'](_0x5c659f), _0x5c659f = void 0x0, _0x46cfcb && _0x15a856['trigger'](_0x32bb80 ? 'ajaxSuccess' : 'ajaxError', [_0x53547c, _0x7c5cf3, _0x32bb80 ? _0x505783 : _0x10413f]), _0xdb9de['fireWith'](_0x1b49cd, [_0x53547c, _0x2e0bd3]), _0x46cfcb && (_0x15a856['trigger']('ajaxComplete', [_0x53547c, _0x7c5cf3]), --_0x3804bf['active'] || _0x3804bf['event']['trigger']('ajaxStop'));
                }
            }
            'object' == typeof _0x4fc065 && (_0x5145d0 = _0x4fc065, _0x4fc065 = void 0x0), _0x5145d0 = _0x5145d0 || {};
            var _0x429c6d, _0x88ac14, _0x5eaa0b, _0x515df5, _0x46aa30, _0x2f57e0, _0x33e73e, _0x46cfcb, _0x2e32ad, _0x4d1fd3, _0x7c5cf3 = _0x3804bf['ajaxSetup']({}, _0x5145d0),
                _0x1b49cd = _0x7c5cf3['context'] || _0x7c5cf3,
                _0x15a856 = _0x7c5cf3['context'] && (_0x1b49cd['nodeType'] || _0x1b49cd['jquery']) ? _0x3804bf(_0x1b49cd) : _0x3804bf['event'],
                _0x305184 = _0x3804bf['Deferred'](),
                _0xdb9de = _0x3804bf['Callbacks']('once\x20memory'),
                _0x5c659f = _0x7c5cf3['statusCode'] || {},
                _0x11be53 = {},
                _0x452ec5 = {},
                _0x398086 = 'canceled',
                _0x53547c = {
                    'readyState': 0x0,
                    'getResponseHeader': function(_0x406aa0) {
                        var _0x26ce1b;
                        if (_0x33e73e) {
                            if (!_0x515df5) {
                                for (_0x515df5 = {}; _0x26ce1b = _0x33eceb['exec'](_0x5eaa0b);) _0x515df5[_0x26ce1b[0x1]['toLowerCase']()] = _0x26ce1b[0x2];
                            }
                            _0x26ce1b = _0x515df5[_0x406aa0['toLowerCase']()];
                        }
                        return null == _0x26ce1b ? null : _0x26ce1b;
                    },
                    'getAllResponseHeaders': function() {
                        return _0x33e73e ? _0x5eaa0b : null;
                    },
                    'setRequestHeader': function(_0x42fcbd, _0x589497) {
                        return null == _0x33e73e && (_0x42fcbd = _0x452ec5[_0x42fcbd['toLowerCase']()] = _0x452ec5[_0x42fcbd['toLowerCase']()] || _0x42fcbd, _0x11be53[_0x42fcbd] = _0x589497), this;
                    },
                    'overrideMimeType': function(_0xc936d4) {
                        return null == _0x33e73e && (_0x7c5cf3['mimeType'] = _0xc936d4), this;
                    },
                    'statusCode': function(_0x35ae5d) {
                        var _0x5a64c5;
                        if (_0x35ae5d) {
                            if (_0x33e73e) _0x53547c['always'](_0x35ae5d[_0x53547c['status']]);
                            else {
                                for (_0x5a64c5 in _0x35ae5d) _0x5c659f[_0x5a64c5] = [_0x5c659f[_0x5a64c5], _0x35ae5d[_0x5a64c5]];
                            }
                        }
                        return this;
                    },
                    'abort': function(_0x12595c) {
                        return _0x12595c = _0x12595c || _0x398086, (_0x429c6d && _0x429c6d['abort'](_0x12595c), _0xe96c0e(0x0, _0x12595c), this);
                    }
                };
            if (_0x305184['promise'](_0x53547c), _0x7c5cf3['url'] = ((_0x4fc065 || _0x7c5cf3['url'] || _0x1a1d70['href']) + '')['replace'](_0x4f4a1f, _0x1a1d70['protocol'] + '//'), _0x7c5cf3['type'] = _0x5145d0['method'] || _0x5145d0['type'] || _0x7c5cf3['method'] || _0x7c5cf3['type'], _0x7c5cf3['dataTypes'] = (_0x7c5cf3['dataType'] || '*')['toLowerCase']()['match'](_0x3ac1b9) || [''], null == _0x7c5cf3['crossDomain']) {
                _0x2f57e0 = _0x45a45f['createElement']('a');
                try {
                    _0x2f57e0['href'] = _0x7c5cf3['url'], _0x2f57e0['href'] = _0x2f57e0['href'], _0x7c5cf3['crossDomain'] = _0x34abde['protocol'] + '//' + _0x34abde['host'] != _0x2f57e0['protocol'] + '//' + _0x2f57e0['host'];
                } catch (_0x57ae80) {
                    _0x7c5cf3['crossDomain'] = !0x0;
                }
            }
            if (_0x7c5cf3['data'] && _0x7c5cf3['processData'] && 'string' != typeof _0x7c5cf3['data'] && (_0x7c5cf3['data'] = _0x3804bf['param'](_0x7c5cf3['data'], _0x7c5cf3['traditional'])), _0x3e50d6(_0x4d76bf, _0x7c5cf3, _0x5145d0, _0x53547c), _0x33e73e) return _0x53547c;
            (_0x46cfcb = _0x3804bf['event'] && _0x7c5cf3['global']) && 0x0 === _0x3804bf['active']++ && _0x3804bf['event']['trigger']('ajaxStart'), _0x7c5cf3['type'] = _0x7c5cf3['type']['toUpperCase'](), _0x7c5cf3['hasContent'] = !_0x19a50a['test'](_0x7c5cf3['type']), _0x88ac14 = _0x7c5cf3['url']['replace'](_0x1bb127, ''), _0x7c5cf3['hasContent'] ? _0x7c5cf3['data'] && _0x7c5cf3['processData'] && 0x0 === (_0x7c5cf3['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && (_0x7c5cf3['data'] = _0x7c5cf3['data']['replace'](_0x1ebb2e, '+')) : (_0x4d1fd3 = _0x7c5cf3['url']['slice'](_0x88ac14['length']), _0x7c5cf3['data'] && (_0x88ac14 += (_0xaff440['test'](_0x88ac14) ? '&' : '?') + _0x7c5cf3['data'], delete _0x7c5cf3['data']), !0x1 === _0x7c5cf3['cache'] && (_0x88ac14 = _0x88ac14['replace'](_0x29b867, '$1'), _0x4d1fd3 = (_0xaff440['test'](_0x88ac14) ? '&' : '?') + '_=' + _0x1cb5ac++ + _0x4d1fd3), _0x7c5cf3['url'] = _0x88ac14 + _0x4d1fd3), _0x7c5cf3['ifModified'] && (_0x3804bf['lastModified'][_0x88ac14] && _0x53547c['setRequestHeader']('If-Modified-Since', _0x3804bf['lastModified'][_0x88ac14]), _0x3804bf['etag'][_0x88ac14] && _0x53547c['setRequestHeader']('If-None-Match', _0x3804bf['etag'][_0x88ac14])), (_0x7c5cf3['data'] && _0x7c5cf3['hasContent'] && !0x1 !== _0x7c5cf3['contentType'] || _0x5145d0['contentType']) && _0x53547c['setRequestHeader']('Content-Type', _0x7c5cf3['contentType']), _0x53547c['setRequestHeader']('Accept', _0x7c5cf3['dataTypes'][0x0] && _0x7c5cf3['accepts'][_0x7c5cf3['dataTypes'][0x0]] ? _0x7c5cf3['accepts'][_0x7c5cf3['dataTypes'][0x0]] + ('*' !== _0x7c5cf3['dataTypes'][0x0] ? ',\x20' + _0x150c8b + ';\x20q=0.01' : '') : _0x7c5cf3['accepts']['*']);
            for (_0x2e32ad in _0x7c5cf3['headers']) _0x53547c['setRequestHeader'](_0x2e32ad, _0x7c5cf3['headers'][_0x2e32ad]);
            if (_0x7c5cf3['beforeSend'] && (!0x1 === _0x7c5cf3['beforeSend']['call'](_0x1b49cd, _0x53547c, _0x7c5cf3) || _0x33e73e)) return _0x53547c['abort']();
            if (_0x398086 = 'abort', _0xdb9de['add'](_0x7c5cf3['complete']), _0x53547c['done'](_0x7c5cf3['success']), _0x53547c['fail'](_0x7c5cf3['error']), _0x429c6d = _0x3e50d6(_0x12763a, _0x7c5cf3, _0x5145d0, _0x53547c)) {
                if (_0x53547c['readyState'] = 0x1, _0x46cfcb && _0x15a856['trigger']('ajaxSend', [_0x53547c, _0x7c5cf3]), _0x33e73e) return _0x53547c;
                _0x7c5cf3['async'] && 0x0 < _0x7c5cf3['timeout'] && (_0x46aa30 = _0x27d1a6['setTimeout'](function() {
                    _0x53547c['abort']('timeout');
                }, _0x7c5cf3['timeout']));
                try {
                    _0x33e73e = !0x1, _0x429c6d['send'](_0x11be53, _0xe96c0e);
                } catch (_0x36b585) {
                    if (_0x33e73e) throw _0x36b585;
                    _0xe96c0e(-0x1, _0x36b585);
                }
            } else _0xe96c0e(-0x1, 'No\x20Transport');
            return _0x53547c;
        },
        'getJSON': function(_0x32fc51, _0x34093a, _0x1f419a) {
            return _0x3804bf['get'](_0x32fc51, _0x34093a, _0x1f419a, 'json');
        },
        'getScript': function(_0x4f3bae, _0x23a641) {
            return _0x3804bf['get'](_0x4f3bae, void 0x0, _0x23a641, 'script');
        }
    }), _0x3804bf['each'](['get', 'post'], function(_0x3bd30d, _0x5d9257) {
        _0x3804bf[_0x5d9257] = function(_0x5317cf, _0x5af00c, _0x4d83b3, _0x4a14c8) {
            return _0x3804bf['isFunction'](_0x5af00c) && (_0x4a14c8 = _0x4a14c8 || _0x4d83b3, _0x4d83b3 = _0x5af00c, _0x5af00c = void 0x0), _0x3804bf['ajax'](_0x3804bf['extend']({
                'url': _0x5317cf,
                'type': _0x5d9257,
                'dataType': _0x4a14c8,
                'data': _0x5af00c,
                'success': _0x4d83b3
            }, _0x3804bf['isPlainObject'](_0x5317cf) && _0x5317cf));
        };
    }), _0x3804bf['_evalUrl'] = function(_0x58721c) {
        return _0x3804bf['ajax']({
            'url': _0x58721c,
            'type': 'GET',
            'dataType': 'script',
            'cache': !0x0,
            'async': !0x1,
            'global': !0x1,
            'throws': !0x0
        });
    }, _0x3804bf['fn']['extend']({
        'wrapAll': function(_0x1c36a0) {
            var _0x513146;
            return this[0x0] && (_0x3804bf['isFunction'](_0x1c36a0) && (_0x1c36a0 = _0x1c36a0['call'](this[0x0])), _0x513146 = _0x3804bf(_0x1c36a0, this[0x0]['ownerDocument'])['eq'](0x0)['clone'](!0x0), this[0x0]['parentNode'] && _0x513146['insertBefore'](this[0x0]), _0x513146['map'](function() {
                for (var _0x27fd84 = this; _0x27fd84['firstElementChild'];) _0x27fd84 = _0x27fd84['firstElementChild'];
                return _0x27fd84;
            })['append'](this)), this;
        },
        'wrapInner': function(_0x312eba) {
            return _0x3804bf['isFunction'](_0x312eba) ? this['each'](function(_0xc352ea) {
                _0x3804bf(this)['wrapInner'](_0x312eba['call'](this, _0xc352ea));
            }) : this['each'](function() {
                var _0x24a760 = _0x3804bf(this),
                    _0x33a4a7 = _0x24a760['contents']();
                _0x33a4a7['length'] ? _0x33a4a7['wrapAll'](_0x312eba) : _0x24a760['append'](_0x312eba);
            });
        },
        'wrap': function(_0x3ff0be) {
            var _0x5abfef = _0x3804bf['isFunction'](_0x3ff0be);
            return this['each'](function(_0x1d3a02) {
                _0x3804bf(this)['wrapAll'](_0x5abfef ? _0x3ff0be['call'](this, _0x1d3a02) : _0x3ff0be);
            });
        },
        'unwrap': function(_0x4d49cf) {
            return this['parent'](_0x4d49cf)['not']('body')['each'](function() {
                _0x3804bf(this)['replaceWith'](this['childNodes']);
            }), this;
        }
    }), _0x3804bf['expr']['pseudos']['hidden'] = function(_0x4a65c7) {
        return !_0x3804bf['expr']['pseudos']['visible'](_0x4a65c7);
    }, _0x3804bf['expr']['pseudos']['visible'] = function(_0x34234d) {
        return !(!_0x34234d['offsetWidth'] && !_0x34234d['offsetHeight'] && !_0x34234d['getClientRects']()['length']);
    }, _0x3804bf['ajaxSettings']['xhr'] = function() {
        try {
            return new _0x27d1a6['XMLHttpRequest']();
        } catch (_0x449162) {}
    };
    var _0x226f7d = {
            '0': 0xc8,
            0x4c7: 0xcc
        },
        _0x5c0b7d = _0x3804bf['ajaxSettings']['xhr']();
    _0x3c9eda['cors'] = !!_0x5c0b7d && 'withCredentials' in _0x5c0b7d, _0x3c9eda['ajax'] = _0x5c0b7d = !!_0x5c0b7d, _0x3804bf['ajaxTransport'](function(_0x4de80f) {
        var _0x553586, _0x38dd3f;
        if (_0x3c9eda['cors'] || _0x5c0b7d && !_0x4de80f['crossDomain']) return {
            'send': function(_0x2ce47b, _0x21ffe8) {
                var _0x3f2d55, _0x3a541a = _0x4de80f['xhr']();
                if (_0x3a541a['open'](_0x4de80f['type'], _0x4de80f['url'], _0x4de80f['async'], _0x4de80f['username'], _0x4de80f['password']), _0x4de80f['xhrFields']) {
                    for (_0x3f2d55 in _0x4de80f['xhrFields']) _0x3a541a[_0x3f2d55] = _0x4de80f['xhrFields'][_0x3f2d55];
                }
                _0x4de80f['mimeType'] && _0x3a541a['overrideMimeType'] && _0x3a541a['overrideMimeType'](_0x4de80f['mimeType']), _0x4de80f['crossDomain'] || _0x2ce47b['X-Requested-With'] || (_0x2ce47b['X-Requested-With'] = 'XMLHttpRequest');
                for (_0x3f2d55 in _0x2ce47b) _0x3a541a['setRequestHeader'](_0x3f2d55, _0x2ce47b[_0x3f2d55]);
                _0x553586 = function(_0x7e7203) {
                    return function() {
                        _0x553586 && (_0x553586 = _0x38dd3f = _0x3a541a['onload'] = _0x3a541a['onerror'] = _0x3a541a['onabort'] = _0x3a541a['onreadystatechange'] = null, 'abort' === _0x7e7203 ? _0x3a541a['abort']() : 'error' === _0x7e7203 ? 'number' != typeof _0x3a541a['status'] ? _0x21ffe8(0x0, 'error') : _0x21ffe8(_0x3a541a['status'], _0x3a541a['statusText']) : _0x21ffe8(_0x226f7d[_0x3a541a['status']] || _0x3a541a['status'], _0x3a541a['statusText'], 'text' !== (_0x3a541a['responseType'] || 'text') || 'string' != typeof _0x3a541a['responseText'] ? {
                            'binary': _0x3a541a['response']
                        } : {
                            'text': _0x3a541a['responseText']
                        }, _0x3a541a['getAllResponseHeaders']()));
                    };
                }, _0x3a541a['onload'] = _0x553586(), _0x38dd3f = _0x3a541a['onerror'] = _0x553586('error'), void 0x0 !== _0x3a541a['onabort'] ? _0x3a541a['onabort'] = _0x38dd3f : _0x3a541a['onreadystatechange'] = function() {
                    0x4 === _0x3a541a['readyState'] && _0x27d1a6['setTimeout'](function() {
                        _0x553586 && _0x38dd3f();
                    });
                }, _0x553586 = _0x553586('abort');
                try {
                    _0x3a541a['send'](_0x4de80f['hasContent'] && _0x4de80f['data'] || null);
                } catch (_0x4e2fdb) {
                    if (_0x553586) throw _0x4e2fdb;
                }
            },
            'abort': function() {
                _0x553586 && _0x553586();
            }
        };
    }), _0x3804bf['ajaxPrefilter'](function(_0x213df7) {
        _0x213df7['crossDomain'] && (_0x213df7['contents']['script'] = !0x1);
    }), _0x3804bf['ajaxSetup']({
        'accepts': {
            'script': 'text/javascript,\x20application/javascript,\x20application/ecmascript,\x20application/x-ecmascript'
        },
        'contents': {
            'script': /\b(?:java|ecma)script\b/
        },
        'converters': {
            'text\x20script': function(_0x5e4df7) {
                return _0x3804bf['globalEval'](_0x5e4df7), _0x5e4df7;
            }
        }
    }), _0x3804bf['ajaxPrefilter']('script', function(_0x112415) {
        void 0x0 === _0x112415['cache'] && (_0x112415['cache'] = !0x1), _0x112415['crossDomain'] && (_0x112415['type'] = 'GET');
    }), _0x3804bf['ajaxTransport']('script', function(_0x5d0159) {
        if (_0x5d0159['crossDomain']) {
            var _0x55a617, _0x48b433;
            return {
                'send': function(_0x320957, _0x469344) {
                    _0x55a617 = _0x3804bf('<script>')['prop']({
                        'charset': _0x5d0159['scriptCharset'],
                        'src': _0x5d0159['url']
                    })['on']('load\x20error', _0x48b433 = function(_0x597f7a) {
                        _0x55a617['remove'](), _0x48b433 = null, _0x597f7a && _0x469344('error' === _0x597f7a['type'] ? 0x194 : 0xc8, _0x597f7a['type']);
                    }), _0x45a45f['head']['appendChild'](_0x55a617[0x0]);
                },
                'abort': function() {
                    _0x48b433 && _0x48b433();
                }
            };
        }
    });
    var _0x39da4f = [],
        _0x38303d = /(=)\?(?=&|$)|\?\?/;
    _0x3804bf['ajaxSetup']({
        'jsonp': 'callback',
        'jsonpCallback': function() {
            var _0x21f354 = _0x39da4f['pop']() || _0x3804bf['expando'] + '_' + _0x1cb5ac++;
            return this[_0x21f354] = !0x0, _0x21f354;
        }
    }), _0x3804bf['ajaxPrefilter']('json\x20jsonp', function(_0x59b450, _0xb72f17, _0x2d0426) {
        var _0x43c583, _0x9a8ff4, _0x256689, _0x304a3e = !0x1 !== _0x59b450['jsonp'] && (_0x38303d['test'](_0x59b450['url']) ? 'url' : 'string' == typeof _0x59b450['data'] && 0x0 === (_0x59b450['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && _0x38303d['test'](_0x59b450['data']) && 'data');
        if (_0x304a3e || 'jsonp' === _0x59b450['dataTypes'][0x0]) return _0x43c583 = _0x59b450['jsonpCallback'] = _0x3804bf['isFunction'](_0x59b450['jsonpCallback']) ? _0x59b450['jsonpCallback']() : _0x59b450['jsonpCallback'], _0x304a3e ? _0x59b450[_0x304a3e] = _0x59b450[_0x304a3e]['replace'](_0x38303d, '$1' + _0x43c583) : !0x1 !== _0x59b450['jsonp'] && (_0x59b450['url'] += (_0xaff440['test'](_0x59b450['url']) ? '&' : '?') + _0x59b450['jsonp'] + '=' + _0x43c583), _0x59b450['converters']['script\x20json'] = function() {
            return _0x256689 || _0x3804bf['error'](_0x43c583 + '\x20was\x20not\x20called'), _0x256689[0x0];
        }, _0x59b450['dataTypes'][0x0] = 'json', _0x9a8ff4 = _0x27d1a6[_0x43c583], _0x27d1a6[_0x43c583] = function() {
            _0x256689 = arguments;
        }, _0x2d0426['always'](function() {
            void 0x0 === _0x9a8ff4 ? _0x3804bf(_0x27d1a6)['removeProp'](_0x43c583) : _0x27d1a6[_0x43c583] = _0x9a8ff4, _0x59b450[_0x43c583] && (_0x59b450['jsonpCallback'] = _0xb72f17['jsonpCallback'], _0x39da4f['push'](_0x43c583)), _0x256689 && _0x3804bf['isFunction'](_0x9a8ff4) && _0x9a8ff4(_0x256689[0x0]), _0x256689 = _0x9a8ff4 = void 0x0;
        }), 'script';
    });
    var _0xd13526 = _0x3c9eda,
        _0x32b62a, _0x583d86 = _0x45a45f['implementation']['createHTMLDocument']('')['body'];
    _0x32b62a = (_0x583d86['innerHTML'] = '<form></form><form></form>', 0x2 === _0x583d86['childNodes']['length']), _0xd13526['createHTMLDocument'] = _0x32b62a, _0x3804bf['parseHTML'] = function(_0x5479c3, _0x591559, _0x4526e7) {
        if ('string' != typeof _0x5479c3) return [];
        'boolean' == typeof _0x591559 && (_0x4526e7 = _0x591559, _0x591559 = !0x1);
        var _0x2c27ee, _0x560b0c, _0x22b1b0;
        return _0x591559 || (_0x3c9eda['createHTMLDocument'] ? (_0x591559 = _0x45a45f['implementation']['createHTMLDocument'](''), _0x2c27ee = _0x591559['createElement']('base'), _0x2c27ee['href'] = _0x45a45f['location']['href'], _0x591559['head']['appendChild'](_0x2c27ee)) : _0x591559 = _0x45a45f), _0x560b0c = _0x3e5a45['exec'](_0x5479c3), _0x22b1b0 = !_0x4526e7 && [], _0x560b0c ? [_0x591559['createElement'](_0x560b0c[0x1])] : (_0x560b0c = _0x2225ae([_0x5479c3], _0x591559, _0x22b1b0), _0x22b1b0 && _0x22b1b0['length'] && _0x3804bf(_0x22b1b0)['remove'](), _0x3804bf['merge']([], _0x560b0c['childNodes']));
    }, _0x3804bf['fn']['load'] = function(_0x1ff4b6, _0x34b18a, _0x2c760d) {
        var _0x26b2a7, _0x3a2792, _0x49e094, _0x2ce513 = this,
            _0x3d67c2 = _0x1ff4b6['indexOf']('\x20');
        return -0x1 < _0x3d67c2 && (_0x26b2a7 = _0x4469bf(_0x1ff4b6['slice'](_0x3d67c2)), _0x1ff4b6 = _0x1ff4b6['slice'](0x0, _0x3d67c2)), _0x3804bf['isFunction'](_0x34b18a) ? (_0x2c760d = _0x34b18a, _0x34b18a = void 0x0) : _0x34b18a && 'object' == typeof _0x34b18a && (_0x3a2792 = 'POST'), 0x0 < _0x2ce513['length'] && _0x3804bf['ajax']({
            'url': _0x1ff4b6,
            'type': _0x3a2792 || 'GET',
            'dataType': 'html',
            'data': _0x34b18a
        })['done'](function(_0x5b6d7d) {
            _0x49e094 = arguments, _0x2ce513['html'](_0x26b2a7 ? _0x3804bf('<div>')['append'](_0x3804bf['parseHTML'](_0x5b6d7d))['find'](_0x26b2a7) : _0x5b6d7d);
        })['always'](_0x2c760d && function(_0x4b09c9, _0x3a6ae9) {
            _0x2ce513['each'](function() {
                _0x2c760d['apply'](this, _0x49e094 || [_0x4b09c9['responseText'], _0x3a6ae9, _0x4b09c9]);
            });
        }), this;
    }, _0x3804bf['each']('ajaxStart\x20ajaxStop\x20ajaxComplete\x20ajaxError\x20ajaxSuccess\x20ajaxSend' ['split']('\x20'), function(_0xb6958, _0x3774f5) {
        _0x3804bf['fn'][_0x3774f5] = function(_0x1b546a) {
            return this['on'](_0x3774f5, _0x1b546a);
        };
    }), _0x3804bf['expr']['pseudos']['animated'] = function(_0x256678) {
        return _0x3804bf['grep'](_0x3804bf['timers'], function(_0x330052) {
            return _0x256678 === _0x330052['elem'];
        })['length'];
    }, _0x3804bf['offset'] = {
        'setOffset': function(_0x2c7c89, _0x1abb9c, _0x17547a) {
            var _0x301ad4, _0x2eb444, _0x2ffac6, _0x5f0633, _0x43b836, _0x334880, _0x2ffd1e = _0x3804bf['css'](_0x2c7c89, 'position'),
                _0x3bdf4e = _0x3804bf(_0x2c7c89),
                _0x24d5a7 = {};
            'static' === _0x2ffd1e && (_0x2c7c89['style']['position'] = 'relative'), _0x43b836 = _0x3bdf4e['offset'](), _0x2ffac6 = _0x3804bf['css'](_0x2c7c89, 'top'), _0x334880 = _0x3804bf['css'](_0x2c7c89, 'left'), ('absolute' === _0x2ffd1e || 'fixed' === _0x2ffd1e) && -0x1 < (_0x2ffac6 + _0x334880)['indexOf']('auto') ? (_0x301ad4 = _0x3bdf4e['position'](), _0x5f0633 = _0x301ad4['top'], _0x2eb444 = _0x301ad4['left']) : (_0x5f0633 = parseFloat(_0x2ffac6) || 0x0, _0x2eb444 = parseFloat(_0x334880) || 0x0), _0x3804bf['isFunction'](_0x1abb9c) && (_0x1abb9c = _0x1abb9c['call'](_0x2c7c89, _0x17547a, _0x3804bf['extend']({}, _0x43b836))), null != _0x1abb9c['top'] && (_0x24d5a7['top'] = _0x1abb9c['top'] - _0x43b836['top'] + _0x5f0633), null != _0x1abb9c['left'] && (_0x24d5a7['left'] = _0x1abb9c['left'] - _0x43b836['left'] + _0x2eb444), 'using' in _0x1abb9c ? _0x1abb9c['using']['call'](_0x2c7c89, _0x24d5a7) : _0x3bdf4e['css'](_0x24d5a7);
        }
    }, _0x3804bf['fn']['extend']({
        'offset': function(_0x2d83f2) {
            if (arguments['length']) return void 0x0 === _0x2d83f2 ? this : this['each'](function(_0x2b2c19) {
                _0x3804bf['offset']['setOffset'](this, _0x2d83f2, _0x2b2c19);
            });
            var _0x1f99a6, _0x348a8a, _0x1b2504, _0x4f148d, _0x57b72a = this[0x0];
            if (_0x57b72a) return _0x57b72a['getClientRects']()['length'] ? (_0x1b2504 = _0x57b72a['getBoundingClientRect'](), _0x1f99a6 = _0x57b72a['ownerDocument'], _0x348a8a = _0x1f99a6['documentElement'], _0x4f148d = _0x1f99a6['defaultView'], {
                'top': _0x1b2504['top'] + _0x4f148d['pageYOffset'] - _0x348a8a['clientTop'],
                'left': _0x1b2504['left'] + _0x4f148d['pageXOffset'] - _0x348a8a['clientLeft']
            }) : {
                'top': 0x0,
                'left': 0x0
            };
        },
        'position': function() {
            if (this[0x0]) {
                var _0x1e10b1, _0x2ca16b, _0x308db9 = this[0x0],
                    _0x75604d = {
                        'top': 0x0,
                        'left': 0x0
                    };
                return 'fixed' === _0x3804bf['css'](_0x308db9, 'position') ? _0x2ca16b = _0x308db9['getBoundingClientRect']() : (_0x1e10b1 = this['offsetParent'](), _0x2ca16b = this['offset'](), _0x504a90(_0x1e10b1[0x0], 'html') || (_0x75604d = _0x1e10b1['offset']()), _0x75604d = {
                    'top': _0x75604d['top'] + _0x3804bf['css'](_0x1e10b1[0x0], 'borderTopWidth', !0x0),
                    'left': _0x75604d['left'] + _0x3804bf['css'](_0x1e10b1[0x0], 'borderLeftWidth', !0x0)
                }), {
                    'top': _0x2ca16b['top'] - _0x75604d['top'] - _0x3804bf['css'](_0x308db9, 'marginTop', !0x0),
                    'left': _0x2ca16b['left'] - _0x75604d['left'] - _0x3804bf['css'](_0x308db9, 'marginLeft', !0x0)
                };
            }
        },
        'offsetParent': function() {
            return this['map'](function() {
                for (var _0x173538 = this['offsetParent']; _0x173538 && 'static' === _0x3804bf['css'](_0x173538, 'position');) _0x173538 = _0x173538['offsetParent'];
                return _0x173538 || _0x992845;
            });
        }
    }), _0x3804bf['each']({
        'scrollLeft': 'pageXOffset',
        'scrollTop': 'pageYOffset'
    }, function(_0x58400a, _0x5b9af2) {
        var _0x586ff0 = 'pageYOffset' === _0x5b9af2;
        _0x3804bf['fn'][_0x58400a] = function(_0x4af07a) {
            return _0x545439(this, function(_0x20bd8c, _0x2cbc78, _0x392917) {
                var _0x541215;
                return _0x3804bf['isWindow'](_0x20bd8c) ? _0x541215 = _0x20bd8c : 0x9 === _0x20bd8c['nodeType'] && (_0x541215 = _0x20bd8c['defaultView']), void 0x0 === _0x392917 ? _0x541215 ? _0x541215[_0x5b9af2] : _0x20bd8c[_0x2cbc78] : void(_0x541215 ? _0x541215['scrollTo'](_0x586ff0 ? _0x541215['pageXOffset'] : _0x392917, _0x586ff0 ? _0x392917 : _0x541215['pageYOffset']) : _0x20bd8c[_0x2cbc78] = _0x392917);
            }, _0x58400a, _0x4af07a, arguments['length']);
        };
    }), _0x3804bf['each'](['top', 'left'], function(_0x4915bd, _0x1e5e7a) {
        _0x3804bf['cssHooks'][_0x1e5e7a] = _0xdb814f(_0x3c9eda['pixelPosition'], function(_0x2304b3, _0x3c76f5) {
            if (_0x3c76f5) return _0x3c76f5 = _0x4d26b1(_0x2304b3, _0x1e5e7a), _0x49c252['test'](_0x3c76f5) ? _0x3804bf(_0x2304b3)['position']()[_0x1e5e7a] + 'px' : _0x3c76f5;
        });
    }), _0x3804bf['each']({
        'Height': 'height',
        'Width': 'width'
    }, function(_0x4edae5, _0x5e2e62) {
        _0x3804bf['each']({
            'padding': 'inner' + _0x4edae5,
            'content': _0x5e2e62,
            '': 'outer' + _0x4edae5
        }, function(_0x5d39c8, _0x22a114) {
            _0x3804bf['fn'][_0x22a114] = function(_0x2bae1a, _0x5d9966) {
                var _0x5f01bb = arguments['length'] && (_0x5d39c8 || 'boolean' != typeof _0x2bae1a),
                    _0x1a5e77 = _0x5d39c8 || (!0x0 === _0x2bae1a || !0x0 === _0x5d9966 ? 'margin' : 'border');
                return _0x545439(this, function(_0x3ef47e, _0x393d56, _0x286a3c) {
                    var _0x5dbb05;
                    return _0x3804bf['isWindow'](_0x3ef47e) ? 0x0 === _0x22a114['indexOf']('outer') ? _0x3ef47e['inner' + _0x4edae5] : _0x3ef47e['document']['documentElement']['client' + _0x4edae5] : 0x9 === _0x3ef47e['nodeType'] ? (_0x5dbb05 = _0x3ef47e['documentElement'], Math['max'](_0x3ef47e['body']['scroll' + _0x4edae5], _0x5dbb05['scroll' + _0x4edae5], _0x3ef47e['body']['offset' + _0x4edae5], _0x5dbb05['offset' + _0x4edae5], _0x5dbb05['client' + _0x4edae5])) : void 0x0 === _0x286a3c ? _0x3804bf['css'](_0x3ef47e, _0x393d56, _0x1a5e77) : _0x3804bf['style'](_0x3ef47e, _0x393d56, _0x286a3c, _0x1a5e77);
                }, _0x5e2e62, _0x5f01bb ? _0x2bae1a : void 0x0, _0x5f01bb);
            };
        });
    }), _0x3804bf['fn']['extend']({
        'bind': function(_0x281f10, _0x408f96, _0x1ed54f) {
            return this['on'](_0x281f10, null, _0x408f96, _0x1ed54f);
        },
        'unbind': function(_0x285b46, _0x4f7424) {
            return this['off'](_0x285b46, null, _0x4f7424);
        },
        'delegate': function(_0x33747b, _0x2656f8, _0xf0651d, _0x6de6a3) {
            return this['on'](_0x2656f8, _0x33747b, _0xf0651d, _0x6de6a3);
        },
        'undelegate': function(_0x101de5, _0x481dfb, _0x47bfb0) {
            return 0x1 === arguments['length'] ? this['off'](_0x101de5, '**') : this['off'](_0x481dfb, _0x101de5 || '**', _0x47bfb0);
        }
    }), _0x3804bf['holdReady'] = function(_0x1f91b5) {
        _0x1f91b5 ? _0x3804bf['readyWait']++ : _0x3804bf['ready'](!0x0);
    }, _0x3804bf['isArray'] = Array['isArray'], _0x3804bf['parseJSON'] = JSON['parse'], _0x3804bf['nodeName'] = _0x504a90, 'function' == typeof define && define['amd'] && define('jquery', [], function() {
        return _0x3804bf;
    });
    var _0x3a07d6 = _0x27d1a6['jQuery'],
        _0x21686a = _0x27d1a6['$'];
    return _0x3804bf['noConflict'] = function(_0x4cf17a) {
        return _0x27d1a6['$'] === _0x3804bf && (_0x27d1a6['$'] = _0x21686a), _0x4cf17a && _0x27d1a6['jQuery'] === _0x3804bf && (_0x27d1a6['jQuery'] = _0x3a07d6), _0x3804bf;
    }, _0x58c9aa || (_0x27d1a6['jQuery'] = _0x27d1a6['$'] = _0x3804bf), _0x3804bf;
});

function getInternetExplorerVersion() {
    var _0x511fb6 = -0x1;
    return 'Microsoft\x20Internet\x20Explorer' == navigator['appName'] && null != /MSIE ([0-9]{1,}[.0-9]{0,})/ ['exec'](navigator['userAgent']) && (_0x511fb6 = parseFloat(RegExp['$1'])), _0x511fb6;
}
var ie = getInternetExplorerVersion();

function getQueryVariable(_0x131e01) {
    for (var _0x187245 = window['location']['search']['substring'](0x1)['split']('&'), _0x4199d7 = 0x0; _0x4199d7 < _0x187245['length']; _0x4199d7++) {
        var _0x12026a = _0x187245[_0x4199d7]['match'](/([^=]+?)=(.+)/);
        if (_0x12026a && decodeURIComponent(_0x12026a[0x1]) == _0x131e01) return decodeURIComponent(_0x12026a[0x2]);
    }
}
this['jukebox'] = {}, jukebox['Player'] = function(_0x13b120, _0x2bb218) {
    this['id'] = ++jukebox['__jukeboxId'], this['origin'] = _0x2bb218 || null, this['settings'] = {};
    for (var _0x1e5a0d in this['defaults']) this['settings'][_0x1e5a0d] = this['defaults'][_0x1e5a0d];
    if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x13b120)) {
        for (var _0x369f32 in _0x13b120) this['settings'][_0x369f32] = _0x13b120[_0x369f32];
    }
    '[object\x20Function]' === Object['prototype']['toString']['call'](jukebox['Manager']) && (jukebox['Manager'] = new jukebox['Manager']()), this['resource'] = this['isPlaying'] = null, this['resource'] = '[object\x20Object]' === Object['prototype']['toString']['call'](jukebox['Manager']) ? jukebox['Manager']['getPlayableResource'](this['settings']['resources']) : this['settings']['resources'][0x0] || null;
    if (null === this['resource']) throw 'Your\x20browser\x20can\x27t\x20playback\x20the\x20given\x20resources\x20-\x20or\x20you\x20have\x20missed\x20to\x20include\x20jukebox.Manager';
    return this['__init'](), this;
}, jukebox['__jukeboxId'] = 0x0, jukebox['Player']['prototype'] = {
    'defaults': {
        'resources': [],
        'autoplay': !0x1,
        'spritemap': {},
        'flashMediaElement': './swf/FlashMediaElement.swf',
        'timeout': 0x3e8
    },
    '__addToManager': function() {
        !0x0 !== this['__wasAddedToManager'] && (jukebox['Manager']['add'](this), this['__wasAddedToManager'] = !0x0);
    },
    '__init': function() {
        var _0x632c43 = this,
            _0x290a7a = this['settings'],
            _0x1cc6db = {},
            _0x3619d6;
        jukebox['Manager'] && void 0x0 !== jukebox['Manager']['features'] && (_0x1cc6db = jukebox['Manager']['features']);
        if (!0x0 === _0x1cc6db['html5audio']) {
            this['context'] = new Audio(), this['context']['src'] = this['resource'];
            if (null === this['origin']) {
                var _0x25885a = function(_0x51a0c9) {
                    _0x632c43['__addToManager'](_0x51a0c9);
                };
                this['context']['addEventListener']('canplaythrough', _0x25885a, !0x0), window['setTimeout'](function() {
                    _0x632c43['context']['removeEventListener']('canplaythrough', _0x25885a, !0x0), _0x25885a('timeout');
                }, _0x290a7a['timeout']);
            }
            this['context']['autobuffer'] = !0x0, this['context']['preload'] = !0x0;
            for (_0x3619d6 in this['HTML5API']) this[_0x3619d6] = this['HTML5API'][_0x3619d6];
            0x1 < _0x1cc6db['channels'] ? !0x0 === _0x290a7a['autoplay'] ? this['context']['autoplay'] = !0x0 : void 0x0 !== _0x290a7a['spritemap'][_0x290a7a['autoplay']] && this['play'](_0x290a7a['autoplay']) : 0x1 === _0x1cc6db['channels'] && void 0x0 !== _0x290a7a['spritemap'][_0x290a7a['autoplay']] && (this['backgroundMusic'] = _0x290a7a['spritemap'][_0x290a7a['autoplay']], this['backgroundMusic']['started'] = Date['now'] ? Date['now']() : +new Date(), this['play'](_0x290a7a['autoplay'])), 0x1 == _0x1cc6db['channels'] && !0x0 !== _0x290a7a['canPlayBackground'] && (window['addEventListener']('pagehide', function() {
                null !== _0x632c43['isPlaying'] && (_0x632c43['pause'](), _0x632c43['__wasAutoPaused'] = !0x0);
            }), window['addEventListener']('pageshow', function() {
                _0x632c43['__wasAutoPaused'] && (_0x632c43['resume'](), delete _0x632c43['_wasAutoPaused']);
            }));
        } else {
            if (!0x0 === _0x1cc6db['flashaudio']) {
                for (_0x3619d6 in this['FLASHAPI']) this[_0x3619d6] = this['FLASHAPI'][_0x3619d6];
                _0x1cc6db = ['id=jukebox-flashstream-' + this['id'], 'autoplay=' + _0x290a7a['autoplay'], 'file=' + window['encodeURIComponent'](this['resource'])], this['__initFlashContext'](_0x1cc6db), !0x0 === _0x290a7a['autoplay'] ? this['play'](0x0) : _0x290a7a['spritemap'][_0x290a7a['autoplay']] && this['play'](_0x290a7a['autoplay']);
            } else throw 'Your\x20Browser\x20does\x20not\x20support\x20Flash\x20Audio\x20or\x20HTML5\x20Audio.';
        }
    },
    '__initFlashContext': function(_0x20ccca) {
        var _0x2a078b, _0x4e695d = this['settings']['flashMediaElement'],
            _0x3841c4, _0x5d041d = {
                'flashvars': _0x20ccca['join']('&'),
                'quality': 'high',
                'bgcolor': '#000000',
                'wmode': 'transparent',
                'allowscriptaccess': 'always',
                'allowfullscreen': 'true'
            };
        if (navigator['userAgent']['match'](/MSIE/)) {
            _0x2a078b = document['createElement']('div'), document['getElementsByTagName']('body')[0x0]['appendChild'](_0x2a078b);
            var _0x174db3 = document['createElement']('object');
            _0x174db3['id'] = 'jukebox-flashstream-' + this['id'], _0x174db3['setAttribute']('type', 'application/x-shockwave-flash'), _0x174db3['setAttribute']('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'), _0x174db3['setAttribute']('width', '0'), _0x174db3['setAttribute']('height', '0'), _0x5d041d['movie'] = _0x4e695d + '?x=' + (Date['now'] ? Date['now']() : +new Date()), _0x5d041d['flashvars'] = _0x20ccca['join']('&amp;');
            for (_0x3841c4 in _0x5d041d) _0x20ccca = document['createElement']('param'), _0x20ccca['setAttribute']('name', _0x3841c4), _0x20ccca['setAttribute']('value', _0x5d041d[_0x3841c4]), _0x174db3['appendChild'](_0x20ccca);
            _0x2a078b['outerHTML'] = _0x174db3['outerHTML'], this['context'] = document['getElementById']('jukebox-flashstream-' + this['id']);
        } else {
            _0x2a078b = document['createElement']('embed'), _0x2a078b['id'] = 'jukebox-flashstream-' + this['id'], _0x2a078b['setAttribute']('type', 'application/x-shockwave-flash'), _0x2a078b['setAttribute']('width', '100'), _0x2a078b['setAttribute']('height', '100'), _0x5d041d['play'] = !0x1, _0x5d041d['loop'] = !0x1, _0x5d041d['src'] = _0x4e695d + '?x=' + (Date['now'] ? Date['now']() : +new Date());
            for (_0x3841c4 in _0x5d041d) _0x2a078b['setAttribute'](_0x3841c4, _0x5d041d[_0x3841c4]);
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x2a078b), this['context'] = _0x2a078b;
        }
    },
    'backgroundHackForiOS': function() {
        if (void 0x0 !== this['backgroundMusic']) {
            var _0x4a572e = Date['now'] ? Date['now']() : +new Date();
            void 0x0 === this['backgroundMusic']['started'] ? (this['backgroundMusic']['started'] = _0x4a572e, this['setCurrentTime'](this['backgroundMusic']['start'])) : (this['backgroundMusic']['lastPointer'] = (_0x4a572e - this['backgroundMusic']['started']) / 0x3e8 % (this['backgroundMusic']['end'] - this['backgroundMusic']['start']) + this['backgroundMusic']['start'], this['play'](this['backgroundMusic']['lastPointer']));
        }
    },
    'play': function(_0x3dc7ef, _0x4483f3) {
        if (null !== this['isPlaying'] && !0x0 !== _0x4483f3) void 0x0 !== jukebox['Manager'] && jukebox['Manager']['addToQueue'](_0x3dc7ef, this['id']);
        else {
            var _0x142b3a = this['settings']['spritemap'],
                _0x473b0b;
            if (void 0x0 !== _0x142b3a[_0x3dc7ef]) _0x473b0b = _0x142b3a[_0x3dc7ef]['start'];
            else {
                if ('number' === typeof _0x3dc7ef) {
                    _0x473b0b = _0x3dc7ef;
                    for (var _0x51159c in _0x142b3a)
                        if (_0x473b0b >= _0x142b3a[_0x51159c]['start'] && _0x473b0b <= _0x142b3a[_0x51159c]['end']) {
                            _0x3dc7ef = _0x51159c;
                            break;
                        }
                }
            }
            void 0x0 !== _0x473b0b && '[object\x20Object]' === Object['prototype']['toString']['call'](_0x142b3a[_0x3dc7ef]) && (this['isPlaying'] = this['settings']['spritemap'][_0x3dc7ef], this['context']['play'] && this['context']['play'](), this['wasReady'] = this['setCurrentTime'](_0x473b0b));
        }
    },
    'stop': function() {
        return this['__lastPosition'] = 0x0, this['isPlaying'] = null, this['backgroundMusic'] ? this['backgroundHackForiOS']() : this['context']['pause'](), !0x0;
    },
    'pause': function() {
        return this['isPlaying'] = null, this['__lastPosition'] = this['getCurrentTime'](), this['context']['pause'](), this['__lastPosition'];
    },
    'resume': function(_0x314d7a) {
        _0x314d7a = 'number' === typeof _0x314d7a ? _0x314d7a : this['__lastPosition'];
        if (null !== _0x314d7a) return this['play'](_0x314d7a), this['__lastPosition'] = null, !0x0;
        return this['context']['play'](), !0x1;
    },
    'HTML5API': {
        'getVolume': function() {
            return this['context']['volume'] || 0x1;
        },
        'setVolume': function(_0x2da57f) {
            return this['context']['volume'] = _0x2da57f, 0.0001 > Math['abs'](this['context']['volume'] - _0x2da57f) ? !0x0 : !0x1;
        },
        'getCurrentTime': function() {
            return this['context']['currentTime'] || 0x0;
        },
        'setCurrentTime': function(_0x214983) {
            try {
                return this['context']['currentTime'] = _0x214983, !0x0;
            } catch (_0x338b54) {
                return !0x1;
            }
        }
    },
    'FLASHAPI': {
        'getVolume': function() {
            return this['context'] && 'function' === typeof this['context']['getVolume'] ? this['context']['getVolume']() : 0x1;
        },
        'setVolume': function(_0x1bf7cc) {
            return this['context'] && 'function' === typeof this['context']['setVolume'] ? (this['context']['setVolume'](_0x1bf7cc), !0x0) : !0x1;
        },
        'getCurrentTime': function() {
            return this['context'] && 'function' === typeof this['context']['getCurrentTime'] ? this['context']['getCurrentTime']() : 0x0;
        },
        'setCurrentTime': function(_0xb6be10) {
            return this['context'] && 'function' === typeof this['context']['setCurrentTime'] ? this['context']['setCurrentTime'](_0xb6be10) : !0x1;
        }
    }
};
if (void 0x0 === this['jukebox']) throw 'jukebox.Manager\x20requires\x20jukebox.Player\x20(Player.js)\x20to\x20run\x20properly.';
jukebox['Manager'] = function(_0x1213c4) {
        this['features'] = {}, this['codecs'] = {}, this['__players'] = {}, this['__playersLength'] = 0x0, this['__clones'] = {}, this['__queue'] = [], this['settings'] = {};
        for (var _0x1c9110 in this['defaults']) this['settings'][_0x1c9110] = this['defaults'][_0x1c9110];
        if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x1213c4)) {
            for (var _0x3ff7d4 in _0x1213c4) this['settings'][_0x3ff7d4] = _0x1213c4[_0x3ff7d4];
        }
        this['__detectFeatures'](), jukebox['Manager']['__initialized'] = !0x1 === this['settings']['useGameLoop'] ? window['setInterval'](function() {
            jukebox['Manager']['loop']();
        }, 0x14) : !0x0;
    }, jukebox['Manager']['prototype'] = {
        'defaults': {
            'useFlash': !0x1,
            'useGameLoop': !0x1
        },
        '__detectFeatures': function() {
            var _0x3b9f59 = window['Audio'] && new Audio();
            if (_0x3b9f59 && _0x3b9f59['canPlayType'] && !0x1 === this['settings']['useFlash']) {
                for (var _0x5d1e0e = [{
                        'e': '3gp',
                        'm': ['audio/3gpp', 'audio/amr']
                    }, {
                        'e': 'aac',
                        'm': ['audio/aac', 'audio/aacp']
                    }, {
                        'e': 'amr',
                        'm': ['audio/amr', 'audio/3gpp']
                    }, {
                        'e': 'caf',
                        'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff;\x20codecs=\x22IMA-ADPCM,\x20ADPCM\x22']
                    }, {
                        'e': 'm4a',
                        'm': 'audio/mp4{audio/mp4;\x20codecs=\x22mp4a.40.2,avc1.42E01E\x22{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a' ['split']('{')
                    }, {
                        'e': 'mp3',
                        'm': ['audio/mp3', 'audio/mpeg', 'audio/mpeg;\x20codecs=\x22mp3\x22', 'audio/MPA', 'audio/mpa-robust']
                    }, {
                        'e': 'mpga',
                        'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
                    }, {
                        'e': 'mp4',
                        'm': ['audio/mp4', 'video/mp4']
                    }, {
                        'e': 'ogg',
                        'm': ['application/ogg', 'audio/ogg', 'audio/ogg;\x20codecs=\x22theora,\x20vorbis\x22', 'video/ogg', 'video/ogg;\x20codecs=\x22theora,\x20vorbis\x22']
                    }, {
                        'e': 'wav',
                        'm': ['audio/wave', 'audio/wav', 'audio/wav;\x20codecs=\x221\x22', 'audio/x-wav', 'audio/x-pn-wav']
                    }, {
                        'e': 'webm',
                        'm': ['audio/webm', 'audio/webm;\x20codecs=\x22vorbis\x22', 'video/webm']
                    }], _0x4edda5, _0x27ce97, _0x22e248 = 0x0, _0x4007cf = _0x5d1e0e['length']; _0x22e248 < _0x4007cf; _0x22e248++)
                    if (_0x27ce97 = _0x5d1e0e[_0x22e248]['e'], _0x5d1e0e[_0x22e248]['m']['length'] && 'object' === typeof _0x5d1e0e[_0x22e248]['m']) {
                        for (var _0x1da743 = 0x0, _0x3dbc65 = _0x5d1e0e[_0x22e248]['m']['length']; _0x1da743 < _0x3dbc65; _0x1da743++)
                            if (_0x4edda5 = _0x5d1e0e[_0x22e248]['m'][_0x1da743], '' !== _0x3b9f59['canPlayType'](_0x4edda5)) {
                                this['codecs'][_0x27ce97] = _0x4edda5;
                                break;
                            } else this['codecs'][_0x27ce97] || (this['codecs'][_0x27ce97] = !0x1);
                    }
                this['features']['html5audio'] = !(!this['codecs']['mp3'] && !this['codecs']['ogg'] && !this['codecs']['webm'] && !this['codecs']['wav']), this['features']['channels'] = 0x8, _0x3b9f59['volume'] = 0.1337, this['features']['volume'] = !!(0.0001 > Math['abs'](_0x3b9f59['volume'] - 0.1337)), navigator['userAgent']['match'](/iPhone|iPod|iPad/i) && (this['features']['channels'] = 0x1);
            }
            this['features']['flashaudio'] = !!navigator['mimeTypes']['application/x-shockwave-flash'] || !!navigator['plugins']['Shockwave\x20Flash'] || !0x1;
            if (window['ActiveXObject']) try {
                new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), this['features']['flashaudio'] = !0x0;
            } catch (_0x5dc36d) {}!0x0 === this['settings']['useFlash'] && (this['features']['flashaudio'] = !0x0), !0x0 === this['features']['flashaudio'] && !this['features']['html5audio'] && (this['codecs']['mp3'] = 'audio/mp3', this['codecs']['mpga'] = 'audio/mpeg', this['codecs']['mp4'] = 'audio/mp4', this['codecs']['m4a'] = 'audio/mp4', this['codecs']['3gp'] = 'audio/3gpp', this['codecs']['amr'] = 'audio/amr', this['features']['volume'] = !0x0, this['features']['channels'] = 0x1);
        },
        '__getPlayerById': function(_0x1efb24) {
            return this['__players'] && void 0x0 !== this['__players'][_0x1efb24] ? this['__players'][_0x1efb24] : null;
        },
        '__getClone': function(_0x20589d, _0x1269ac) {
            for (var _0x21e9af in this['__clones']) {
                var _0x3928f4 = this['__clones'][_0x21e9af];
                if (null === _0x3928f4['isPlaying'] && _0x3928f4['origin'] === _0x20589d) return _0x3928f4;
            }
            if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x1269ac)) {
                _0x21e9af = {};
                for (var _0x2da90c in _0x1269ac) _0x21e9af[_0x2da90c] = _0x1269ac[_0x2da90c];
                return _0x21e9af['autoplay'] = !0x1, _0x2da90c = new jukebox['Player'](_0x21e9af, _0x20589d), _0x2da90c['isClone'] = !0x0, _0x2da90c['wasReady'] = !0x1, this['__clones'][_0x2da90c['id']] = _0x2da90c;
            }
            return null;
        },
        'loop': function() {
            if (0x0 !== this['__playersLength']) {
                if (this['__queue']['length'] && this['__playersLength'] < this['features']['channels']) {
                    var _0x79fe70 = this['__queue'][0x0],
                        _0x33470c = this['__getPlayerById'](_0x79fe70['origin']);
                    if (null !== _0x33470c) {
                        var _0x15b9fb = this['__getClone'](_0x79fe70['origin'], _0x33470c['settings']);
                        null !== _0x15b9fb && (!0x0 === this['features']['volume'] && (_0x33470c = this['__players'][_0x79fe70['origin']]) && _0x15b9fb['setVolume'](_0x33470c['getVolume']()), this['add'](_0x15b9fb), _0x15b9fb['play'](_0x79fe70['pointer'], !0x0));
                    }
                    this['__queue']['splice'](0x0, 0x1);
                } else {
                    for (_0x15b9fb in (this['__queue']['length'] && 0x1 === this['features']['channels'] && (_0x79fe70 = this['__queue'][0x0], _0x33470c = this['__getPlayerById'](_0x79fe70['origin']), null !== _0x33470c && _0x33470c['play'](_0x79fe70['pointer'], !0x0), this['__queue']['splice'](0x0, 0x1)), this['__players'])) _0x79fe70 = this['__players'][_0x15b9fb], _0x33470c = _0x79fe70['getCurrentTime']() || 0x0, _0x79fe70['isPlaying'] && !0x1 === _0x79fe70['wasReady'] ? _0x79fe70['wasReady'] = _0x79fe70['setCurrentTime'](_0x79fe70['isPlaying']['start']) : _0x79fe70['isPlaying'] && !0x0 === _0x79fe70['wasReady'] ? _0x33470c > _0x79fe70['isPlaying']['end'] && (!0x0 === _0x79fe70['isPlaying']['loop'] ? _0x79fe70['play'](_0x79fe70['isPlaying']['start'], !0x0) : _0x79fe70['stop']()) : _0x79fe70['isClone'] && null === _0x79fe70['isPlaying'] ? this['remove'](_0x79fe70) : void 0x0 !== _0x79fe70['backgroundMusic'] && null === _0x79fe70['isPlaying'] && _0x33470c > _0x79fe70['backgroundMusic']['end'] && _0x79fe70['backgroundHackForiOS']();
                }
            }
        },
        'getPlayableResource': function(_0x45f4f6) {
            '[object\x20Array]' !== Object['prototype']['toString']['call'](_0x45f4f6) && (_0x45f4f6 = [_0x45f4f6]);
            for (var _0x2c370b = 0x0, _0x56729b = _0x45f4f6['length']; _0x2c370b < _0x56729b; _0x2c370b++) {
                var _0x13e701 = _0x45f4f6[_0x2c370b],
                    _0x1b31a9 = _0x13e701['match'](/\.([^\.]*)$/)[0x1];
                if (_0x1b31a9 && this['codecs'][_0x1b31a9]) return _0x13e701;
            }
            return null;
        },
        'add': function(_0x50c158) {
            return _0x50c158 instanceof jukebox['Player'] && void 0x0 === this['__players'][_0x50c158['id']] ? (this['__playersLength']++, this['__players'][_0x50c158['id']] = _0x50c158, !0x0) : !0x1;
        },
        'remove': function(_0x302515) {
            return _0x302515 instanceof jukebox['Player'] && void 0x0 !== this['__players'][_0x302515['id']] ? (this['__playersLength']--, delete this['__players'][_0x302515['id']], !0x0) : !0x1;
        },
        'addToQueue': function(_0xc6cf24, _0x3b5749) {
            return ('string' === typeof _0xc6cf24 || 'number' === typeof _0xc6cf24) && void 0x0 !== this['__players'][_0x3b5749] ? (this['__queue']['push']({
                'pointer': _0xc6cf24,
                'origin': _0x3b5749
            }), !0x0) : !0x1;
        }
    }, (function() {
        var _0x3f28f4 = function() {
            this['init']();
        };
        _0x3f28f4['prototype'] = {
            'init': function() {
                var _0x1ce783 = this || _0x40a015;
                return _0x1ce783['_counter'] = 0x3e8, _0x1ce783['_html5AudioPool'] = [], _0x1ce783['html5PoolSize'] = 0xa, _0x1ce783['_codecs'] = {}, _0x1ce783['_howls'] = [], _0x1ce783['_muted'] = !0x1, _0x1ce783['_volume'] = 0x1, _0x1ce783['_canPlayEvent'] = 'canplaythrough', _0x1ce783['_navigator'] = 'undefined' !== typeof window && window['navigator'] ? window['navigator'] : null, _0x1ce783['masterGain'] = null, _0x1ce783['noAudio'] = !0x1, _0x1ce783['usingWebAudio'] = !0x0, _0x1ce783['autoSuspend'] = !0x1, _0x1ce783['ctx'] = null, _0x1ce783['autoUnlock'] = !0x0, _0x1ce783['_setup'](), _0x1ce783;
            },
            'volume': function(_0x289d6a) {
                var _0x27bb6c = this || _0x40a015;
                _0x289d6a = parseFloat(_0x289d6a), _0x27bb6c['ctx'] || _0x1387d2();
                if ('undefined' !== typeof _0x289d6a && 0x0 <= _0x289d6a && 0x1 >= _0x289d6a) {
                    _0x27bb6c['_volume'] = _0x289d6a;
                    if (_0x27bb6c['_muted']) return _0x27bb6c;
                    _0x27bb6c['usingWebAudio'] && _0x27bb6c['masterGain']['gain']['setValueAtTime'](_0x289d6a, _0x40a015['ctx']['currentTime']);
                    for (var _0x5d217 = 0x0; _0x5d217 < _0x27bb6c['_howls']['length']; _0x5d217++)
                        if (!_0x27bb6c['_howls'][_0x5d217]['_webAudio'])
                            for (var _0x5f38c5 = _0x27bb6c['_howls'][_0x5d217]['_getSoundIds'](), _0x1b254d = 0x0; _0x1b254d < _0x5f38c5['length']; _0x1b254d++) {
                                var _0x30cba2 = _0x27bb6c['_howls'][_0x5d217]['_soundById'](_0x5f38c5[_0x1b254d]);
                                _0x30cba2 && _0x30cba2['_node'] && (_0x30cba2['_node']['volume'] = _0x30cba2['_volume'] * _0x289d6a);
                            }
                    return _0x27bb6c;
                }
                return _0x27bb6c['_volume'];
            },
            'mute': function(_0x27f9fd) {
                var _0x31016c = this || _0x40a015;
                _0x31016c['ctx'] || _0x1387d2(), _0x31016c['_muted'] = _0x27f9fd, _0x31016c['usingWebAudio'] && _0x31016c['masterGain']['gain']['setValueAtTime'](_0x27f9fd ? 0x0 : _0x31016c['_volume'], _0x40a015['ctx']['currentTime']);
                for (var _0x24a67b = 0x0; _0x24a67b < _0x31016c['_howls']['length']; _0x24a67b++)
                    if (!_0x31016c['_howls'][_0x24a67b]['_webAudio'])
                        for (var _0x3247c5 = _0x31016c['_howls'][_0x24a67b]['_getSoundIds'](), _0x432386 = 0x0; _0x432386 < _0x3247c5['length']; _0x432386++) {
                            var _0x4ea48b = _0x31016c['_howls'][_0x24a67b]['_soundById'](_0x3247c5[_0x432386]);
                            _0x4ea48b && _0x4ea48b['_node'] && (_0x4ea48b['_node']['muted'] = _0x27f9fd ? !0x0 : _0x4ea48b['_muted']);
                        }
                return _0x31016c;
            },
            'stop': function() {
                for (var _0x57cd48 = this || _0x40a015, _0x4ed576 = 0x0; _0x4ed576 < _0x57cd48['_howls']['length']; _0x4ed576++) _0x57cd48['_howls'][_0x4ed576]['stop']();
                return _0x57cd48;
            },
            'unload': function() {
                for (var _0x13fcab = this || _0x40a015, _0x239401 = _0x13fcab['_howls']['length'] - 0x1; 0x0 <= _0x239401; _0x239401--) _0x13fcab['_howls'][_0x239401]['unload']();
                return _0x13fcab['usingWebAudio'] && _0x13fcab['ctx'] && 'undefined' !== typeof _0x13fcab['ctx']['close'] && (_0x13fcab['ctx']['close'](), _0x13fcab['ctx'] = null, _0x1387d2()), _0x13fcab;
            },
            'codecs': function(_0x3789cb) {
                return (this || _0x40a015)['_codecs'][_0x3789cb['replace'](/^x-/, '')];
            },
            '_setup': function() {
                var _0x3d5117 = this || _0x40a015;
                _0x3d5117['state'] = _0x3d5117['ctx'] ? _0x3d5117['ctx']['state'] || 'suspended' : 'suspended', _0x3d5117['_autoSuspend']();
                if (!_0x3d5117['usingWebAudio']) {
                    if ('undefined' !== typeof Audio) try {
                        var _0x1961af = new Audio();
                        'undefined' === typeof _0x1961af['oncanplaythrough'] && (_0x3d5117['_canPlayEvent'] = 'canplay');
                    } catch (_0x1b40dd) {
                        _0x3d5117['noAudio'] = !0x0;
                    } else _0x3d5117['noAudio'] = !0x0;
                }
                try {
                    _0x1961af = new Audio(), _0x1961af['muted'] && (_0x3d5117['noAudio'] = !0x0);
                } catch (_0x4d845b) {}
                return _0x3d5117['noAudio'] || _0x3d5117['_setupCodecs'](), _0x3d5117;
            },
            '_setupCodecs': function() {
                var _0x3eef95 = this || _0x40a015,
                    _0x4371d9 = null;
                try {
                    _0x4371d9 = 'undefined' !== typeof Audio ? new Audio() : null;
                } catch (_0x573fd0) {
                    return _0x3eef95;
                }
                if (!_0x4371d9 || 'function' !== typeof _0x4371d9['canPlayType']) return _0x3eef95;
                var _0x3dcd4b = _0x4371d9['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                    _0x64e872 = _0x3eef95['_navigator'] && _0x3eef95['_navigator']['userAgent']['match'](/OPR\/([0-6].)/g),
                    _0x64e872 = _0x64e872 && 0x21 > parseInt(_0x64e872[0x0]['split']('/')[0x1], 0xa);
                return _0x3eef95['_codecs'] = {
                    'mp3': !(_0x64e872 || !_0x3dcd4b && !_0x4371d9['canPlayType']('audio/mp3;')['replace'](/^no$/, '')),
                    'mpeg': !!_0x3dcd4b,
                    'opus': !!_0x4371d9['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
                    'ogg': !!_0x4371d9['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'oga': !!_0x4371d9['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'wav': !!_0x4371d9['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
                    'aac': !!_0x4371d9['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                    'caf': !!_0x4371d9['canPlayType']('audio/x-caf;')['replace'](/^no$/, ''),
                    'm4a': !!(_0x4371d9['canPlayType']('audio/x-m4a;') || _0x4371d9['canPlayType']('audio/m4a;') || _0x4371d9['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'm4b': !!(_0x4371d9['canPlayType']('audio/x-m4b;') || _0x4371d9['canPlayType']('audio/m4b;') || _0x4371d9['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'mp4': !!(_0x4371d9['canPlayType']('audio/x-mp4;') || _0x4371d9['canPlayType']('audio/mp4;') || _0x4371d9['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'weba': !!_0x4371d9['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'webm': !!_0x4371d9['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'dolby': !!_0x4371d9['canPlayType']('audio/mp4;\x20codecs=\x22ec-3\x22')['replace'](/^no$/, ''),
                    'flac': !!(_0x4371d9['canPlayType']('audio/x-flac;') || _0x4371d9['canPlayType']('audio/flac;'))['replace'](/^no$/, '')
                }, _0x3eef95;
            },
            '_unlockAudio': function() {
                var _0x35944f = this || _0x40a015;
                if (!_0x35944f['_audioUnlocked'] && _0x35944f['ctx']) {
                    _0x35944f['_audioUnlocked'] = !0x1, _0x35944f['autoUnlock'] = !0x1, !_0x35944f['_mobileUnloaded'] && 0xac44 !== _0x35944f['ctx']['sampleRate'] && (_0x35944f['_mobileUnloaded'] = !0x0, _0x35944f['unload']()), _0x35944f['_scratchBuffer'] = _0x35944f['ctx']['createBuffer'](0x1, 0x1, 0x5622);
                    var _0x26c96a = function() {
                        for (; _0x35944f['_html5AudioPool']['length'] < _0x35944f['html5PoolSize'];) try {
                            var _0x669b15 = new Audio();
                            _0x669b15['_unlocked'] = !0x0, _0x35944f['_releaseHtml5Audio'](_0x669b15);
                        } catch (_0xd13bfd) {
                            _0x35944f['noAudio'] = !0x0;
                            break;
                        }
                        for (_0x669b15 = 0x0; _0x669b15 < _0x35944f['_howls']['length']; _0x669b15++)
                            if (!_0x35944f['_howls'][_0x669b15]['_webAudio'])
                                for (var _0x3a2f99 = _0x35944f['_howls'][_0x669b15]['_getSoundIds'](), _0x49bfa1 = 0x0; _0x49bfa1 < _0x3a2f99['length']; _0x49bfa1++) {
                                    var _0x3dbc96 = _0x35944f['_howls'][_0x669b15]['_soundById'](_0x3a2f99[_0x49bfa1]);
                                    _0x3dbc96 && _0x3dbc96['_node'] && !_0x3dbc96['_node']['_unlocked'] && (_0x3dbc96['_node']['_unlocked'] = !0x0, _0x3dbc96['_node']['load']());
                                }
                        _0x35944f['_autoResume']();
                        var _0x1c1746 = _0x35944f['ctx']['createBufferSource']();
                        _0x1c1746['buffer'] = _0x35944f['_scratchBuffer'], _0x1c1746['connect'](_0x35944f['ctx']['destination']), 'undefined' === typeof _0x1c1746['start'] ? _0x1c1746['noteOn'](0x0) : _0x1c1746['start'](0x0), 'function' === typeof _0x35944f['ctx']['resume'] && _0x35944f['ctx']['resume'](), _0x1c1746['onended'] = function() {
                            _0x1c1746['disconnect'](0x0), _0x35944f['_audioUnlocked'] = !0x0, document['removeEventListener']('touchstart', _0x26c96a, !0x0), document['removeEventListener']('touchend', _0x26c96a, !0x0), document['removeEventListener']('click', _0x26c96a, !0x0);
                            for (var _0x4137ec = 0x0; _0x4137ec < _0x35944f['_howls']['length']; _0x4137ec++) _0x35944f['_howls'][_0x4137ec]['_emit']('unlock');
                        };
                    };
                    return document['addEventListener']('touchstart', _0x26c96a, !0x0), document['addEventListener']('touchend', _0x26c96a, !0x0), document['addEventListener']('click', _0x26c96a, !0x0), _0x35944f;
                }
            },
            '_obtainHtml5Audio': function() {
                var _0x319bb8 = this || _0x40a015;
                if (_0x319bb8['_html5AudioPool']['length']) return _0x319bb8['_html5AudioPool']['pop']();
                return (_0x319bb8 = new Audio()['play']()) && 'undefined' !== typeof Promise && (_0x319bb8 instanceof Promise || 'function' === typeof _0x319bb8['then']) && _0x319bb8['catch'](function() {
                    console['warn']('HTML5\x20Audio\x20pool\x20exhausted,\x20returning\x20potentially\x20locked\x20audio\x20object.');
                }), new Audio();
            },
            '_releaseHtml5Audio': function(_0x193dbe) {
                var _0x21093f = this || _0x40a015;
                return _0x193dbe['_unlocked'] && _0x21093f['_html5AudioPool']['push'](_0x193dbe), _0x21093f;
            },
            '_autoSuspend': function() {
                var _0x3f9139 = this;
                if (_0x3f9139['autoSuspend'] && _0x3f9139['ctx'] && 'undefined' !== typeof _0x3f9139['ctx']['suspend'] && _0x40a015['usingWebAudio']) {
                    for (var _0x23f6ee = 0x0; _0x23f6ee < _0x3f9139['_howls']['length']; _0x23f6ee++)
                        if (_0x3f9139['_howls'][_0x23f6ee]['_webAudio']) {
                            for (var _0x13a805 = 0x0; _0x13a805 < _0x3f9139['_howls'][_0x23f6ee]['_sounds']['length']; _0x13a805++)
                                if (!_0x3f9139['_howls'][_0x23f6ee]['_sounds'][_0x13a805]['_paused']) return _0x3f9139;
                        }
                    return _0x3f9139['_suspendTimer'] && clearTimeout(_0x3f9139['_suspendTimer']), _0x3f9139['_suspendTimer'] = setTimeout(function() {
                        if (_0x3f9139['autoSuspend']) {
                            _0x3f9139['_suspendTimer'] = null, _0x3f9139['state'] = 'suspending';
                            var _0x4bb614 = function() {
                                _0x3f9139['state'] = 'suspended', _0x3f9139['_resumeAfterSuspend'] && (delete _0x3f9139['_resumeAfterSuspend'], _0x3f9139['_autoResume']());
                            };
                            _0x3f9139['ctx']['suspend']()['then'](_0x4bb614, _0x4bb614);
                        }
                    }, 0x7530), _0x3f9139;
                }
            },
            '_autoResume': function() {
                var _0x2d304b = this;
                if (_0x2d304b['ctx'] && 'undefined' !== typeof _0x2d304b['ctx']['resume'] && _0x40a015['usingWebAudio']) return 'running' === _0x2d304b['state'] && 'interrupted' !== _0x2d304b['ctx']['state'] && _0x2d304b['_suspendTimer'] ? (clearTimeout(_0x2d304b['_suspendTimer']), _0x2d304b['_suspendTimer'] = null) : 'suspended' === _0x2d304b['state'] || 'running' === _0x2d304b['state'] && 'interrupted' === _0x2d304b['ctx']['state'] ? (_0x2d304b['ctx']['resume']()['then'](function() {
                    _0x2d304b['state'] = 'running';
                    for (var _0x1a14e2 = 0x0; _0x1a14e2 < _0x2d304b['_howls']['length']; _0x1a14e2++) _0x2d304b['_howls'][_0x1a14e2]['_emit']('resume');
                }), _0x2d304b['_suspendTimer'] && (clearTimeout(_0x2d304b['_suspendTimer']), _0x2d304b['_suspendTimer'] = null)) : 'suspending' === _0x2d304b['state'] && (_0x2d304b['_resumeAfterSuspend'] = !0x0), _0x2d304b;
            }
        };
        var _0x40a015 = new _0x3f28f4(),
            _0x17f5c1 = function(_0x466814) {
                !_0x466814['src'] || 0x0 === _0x466814['src']['length'] ? console['error']('An\x20array\x20of\x20source\x20files\x20must\x20be\x20passed\x20with\x20any\x20new\x20Howl.') : this['init'](_0x466814);
            };
        _0x17f5c1['prototype'] = {
            'init': function(_0x1d74e5) {
                var _0x9277a4 = this;
                return _0x40a015['ctx'] || _0x1387d2(), _0x9277a4['_autoplay'] = _0x1d74e5['autoplay'] || !0x1, _0x9277a4['_format'] = 'string' !== typeof _0x1d74e5['format'] ? _0x1d74e5['format'] : [_0x1d74e5['format']], _0x9277a4['_html5'] = _0x1d74e5['html5'] || !0x1, _0x9277a4['_muted'] = _0x1d74e5['mute'] || !0x1, _0x9277a4['_loop'] = _0x1d74e5['loop'] || !0x1, _0x9277a4['_pool'] = _0x1d74e5['pool'] || 0x5, _0x9277a4['_preload'] = 'boolean' === typeof _0x1d74e5['preload'] || 'metadata' === _0x1d74e5['preload'] ? _0x1d74e5['preload'] : !0x0, _0x9277a4['_rate'] = _0x1d74e5['rate'] || 0x1, _0x9277a4['_sprite'] = _0x1d74e5['sprite'] || {}, _0x9277a4['_src'] = 'string' !== typeof _0x1d74e5['src'] ? _0x1d74e5['src'] : [_0x1d74e5['src']], _0x9277a4['_volume'] = void 0x0 !== _0x1d74e5['volume'] ? _0x1d74e5['volume'] : 0x1, _0x9277a4['_xhr'] = {
                    'method': _0x1d74e5['xhr'] && _0x1d74e5['xhr']['method'] ? _0x1d74e5['xhr']['method'] : 'GET',
                    'headers': _0x1d74e5['xhr'] && _0x1d74e5['xhr']['headers'] ? _0x1d74e5['xhr']['headers'] : null,
                    'withCredentials': _0x1d74e5['xhr'] && _0x1d74e5['xhr']['withCredentials'] ? _0x1d74e5['xhr']['withCredentials'] : !0x1
                }, _0x9277a4['_duration'] = 0x0, _0x9277a4['_state'] = 'unloaded', _0x9277a4['_sounds'] = [], _0x9277a4['_endTimers'] = {}, _0x9277a4['_queue'] = [], _0x9277a4['_playLock'] = !0x1, _0x9277a4['_onend'] = _0x1d74e5['onend'] ? [{
                    'fn': _0x1d74e5['onend']
                }] : [], _0x9277a4['_onfade'] = _0x1d74e5['onfade'] ? [{
                    'fn': _0x1d74e5['onfade']
                }] : [], _0x9277a4['_onload'] = _0x1d74e5['onload'] ? [{
                    'fn': _0x1d74e5['onload']
                }] : [], _0x9277a4['_onloaderror'] = _0x1d74e5['onloaderror'] ? [{
                    'fn': _0x1d74e5['onloaderror']
                }] : [], _0x9277a4['_onplayerror'] = _0x1d74e5['onplayerror'] ? [{
                    'fn': _0x1d74e5['onplayerror']
                }] : [], _0x9277a4['_onpause'] = _0x1d74e5['onpause'] ? [{
                    'fn': _0x1d74e5['onpause']
                }] : [], _0x9277a4['_onplay'] = _0x1d74e5['onplay'] ? [{
                    'fn': _0x1d74e5['onplay']
                }] : [], _0x9277a4['_onstop'] = _0x1d74e5['onstop'] ? [{
                    'fn': _0x1d74e5['onstop']
                }] : [], _0x9277a4['_onmute'] = _0x1d74e5['onmute'] ? [{
                    'fn': _0x1d74e5['onmute']
                }] : [], _0x9277a4['_onvolume'] = _0x1d74e5['onvolume'] ? [{
                    'fn': _0x1d74e5['onvolume']
                }] : [], _0x9277a4['_onrate'] = _0x1d74e5['onrate'] ? [{
                    'fn': _0x1d74e5['onrate']
                }] : [], _0x9277a4['_onseek'] = _0x1d74e5['onseek'] ? [{
                    'fn': _0x1d74e5['onseek']
                }] : [], _0x9277a4['_onunlock'] = _0x1d74e5['onunlock'] ? [{
                    'fn': _0x1d74e5['onunlock']
                }] : [], _0x9277a4['_onresume'] = [], _0x9277a4['_webAudio'] = _0x40a015['usingWebAudio'] && !_0x9277a4['_html5'], 'undefined' !== typeof _0x40a015['ctx'] && _0x40a015['ctx'] && _0x40a015['autoUnlock'] && _0x40a015['_unlockAudio'](), _0x40a015['_howls']['push'](_0x9277a4), _0x9277a4['_autoplay'] && _0x9277a4['_queue']['push']({
                    'event': 'play',
                    'action': function() {
                        _0x9277a4['play']();
                    }
                }), _0x9277a4['_preload'] && 'none' !== _0x9277a4['_preload'] && _0x9277a4['load'](), _0x9277a4;
            },
            'load': function() {
                var _0x32afe3 = null;
                if (_0x40a015['noAudio']) this['_emit']('loaderror', null, 'No\x20audio\x20support.');
                else {
                    'string' === typeof this['_src'] && (this['_src'] = [this['_src']]);
                    for (var _0x1a594d = 0x0; _0x1a594d < this['_src']['length']; _0x1a594d++) {
                        var _0x242709, _0x3f067a;
                        if (this['_format'] && this['_format'][_0x1a594d]) _0x242709 = this['_format'][_0x1a594d];
                        else {
                            _0x3f067a = this['_src'][_0x1a594d];
                            if ('string' !== typeof _0x3f067a) {
                                this['_emit']('loaderror', null, 'Non-string\x20found\x20in\x20selected\x20audio\x20sources\x20-\x20ignoring.');
                                continue;
                            }(_0x242709 = /^data:audio\/([^;,]+);/i ['exec'](_0x3f067a)) || (_0x242709 = /\.([^.]+)$/ ['exec'](_0x3f067a['split']('?', 0x1)[0x0])), _0x242709 && (_0x242709 = _0x242709[0x1]['toLowerCase']());
                        }
                        _0x242709 || console['warn']('No\x20file\x20extension\x20was\x20found.\x20Consider\x20using\x20the\x20\x22format\x22\x20property\x20or\x20specify\x20an\x20extension.');
                        if (_0x242709 && _0x40a015['codecs'](_0x242709)) {
                            _0x32afe3 = this['_src'][_0x1a594d];
                            break;
                        }
                    }
                    if (_0x32afe3) {
                        this['_src'] = _0x32afe3, this['_state'] = 'loading', 'https:' === window['location']['protocol'] && 'http:' === _0x32afe3['slice'](0x0, 0x5) && (this['_html5'] = !0x0, this['_webAudio'] = !0x1), new _0x5dc77a(this);
                        if (this['_webAudio']) {
                            var _0x44ad2c = this,
                                _0x2c7dc4 = _0x44ad2c['_src'];
                            if (_0x46d536[_0x2c7dc4]) _0x44ad2c['_duration'] = _0x46d536[_0x2c7dc4]['duration'], _0xf7c013(_0x44ad2c);
                            else {
                                if (/^data:[^;]+;base64,/ ['test'](_0x2c7dc4)) {
                                    _0x32afe3 = atob(_0x2c7dc4['split'](',')[0x1]), _0x1a594d = new Uint8Array(_0x32afe3['length']);
                                    for (_0x242709 = 0x0; _0x242709 < _0x32afe3['length']; ++_0x242709) _0x1a594d[_0x242709] = _0x32afe3['charCodeAt'](_0x242709);
                                    _0x1a2080(_0x1a594d['buffer'], _0x44ad2c);
                                } else {
                                    var _0x2e1688 = new XMLHttpRequest();
                                    _0x2e1688['open'](_0x44ad2c['_xhr']['method'], _0x2c7dc4, !0x0), _0x2e1688['withCredentials'] = _0x44ad2c['_xhr']['withCredentials'], _0x2e1688['responseType'] = 'arraybuffer', _0x44ad2c['_xhr']['headers'] && Object['keys'](_0x44ad2c['_xhr']['headers'])['forEach'](function(_0x457740) {
                                        _0x2e1688['setRequestHeader'](_0x457740, _0x44ad2c['_xhr']['headers'][_0x457740]);
                                    }), _0x2e1688['onload'] = function() {
                                        var _0x350c94 = (_0x2e1688['status'] + '')[0x0];
                                        '0' !== _0x350c94 && '2' !== _0x350c94 && '3' !== _0x350c94 ? _0x44ad2c['_emit']('loaderror', null, 'Failed\x20loading\x20audio\x20file\x20with\x20status:\x20' + _0x2e1688['status'] + '.') : _0x1a2080(_0x2e1688['response'], _0x44ad2c);
                                    }, _0x2e1688['onerror'] = function() {
                                        _0x44ad2c['_webAudio'] && (_0x44ad2c['_html5'] = !0x0, _0x44ad2c['_webAudio'] = !0x1, _0x44ad2c['_sounds'] = [], delete _0x46d536[_0x2c7dc4], _0x44ad2c['load']());
                                    };
                                    try {
                                        _0x2e1688['send']();
                                    } catch (_0x1d4003) {
                                        _0x2e1688['onerror']();
                                    }
                                }
                            }
                        }
                        return this;
                    }
                    this['_emit']('loaderror', null, 'No\x20codec\x20support\x20for\x20selected\x20audio\x20sources.');
                }
            },
            'play': function(_0x2b3e80, _0x1fb74a) {
                var _0x5a7fef = this,
                    _0x233d57 = null;
                if ('number' === typeof _0x2b3e80) _0x233d57 = _0x2b3e80, _0x2b3e80 = null;
                else {
                    if ('string' === typeof _0x2b3e80 && 'loaded' === _0x5a7fef['_state'] && !_0x5a7fef['_sprite'][_0x2b3e80]) return null;
                    if ('undefined' === typeof _0x2b3e80 && (_0x2b3e80 = '__default', !_0x5a7fef['_playLock'])) {
                        for (var _0x24d882 = 0x0, _0x27550f = 0x0; _0x27550f < _0x5a7fef['_sounds']['length']; _0x27550f++) _0x5a7fef['_sounds'][_0x27550f]['_paused'] && !_0x5a7fef['_sounds'][_0x27550f]['_ended'] && (_0x24d882++, _0x233d57 = _0x5a7fef['_sounds'][_0x27550f]['_id']);
                        0x1 === _0x24d882 ? _0x2b3e80 = null : _0x233d57 = null;
                    }
                }
                var _0x2ad1c8 = _0x233d57 ? _0x5a7fef['_soundById'](_0x233d57) : _0x5a7fef['_inactiveSound']();
                if (!_0x2ad1c8) return null;
                _0x233d57 && !_0x2b3e80 && (_0x2b3e80 = _0x2ad1c8['_sprite'] || '__default');
                if ('loaded' !== _0x5a7fef['_state']) {
                    _0x2ad1c8['_sprite'] = _0x2b3e80, _0x2ad1c8['_ended'] = !0x1;
                    var _0x7ced58 = _0x2ad1c8['_id'];
                    return _0x5a7fef['_queue']['push']({
                        'event': 'play',
                        'action': function() {
                            _0x5a7fef['play'](_0x7ced58);
                        }
                    }), _0x7ced58;
                }
                if (_0x233d57 && !_0x2ad1c8['_paused']) return _0x1fb74a || _0x5a7fef['_loadQueue']('play'), _0x2ad1c8['_id'];
                _0x5a7fef['_webAudio'] && _0x40a015['_autoResume']();
                var _0x1559e4 = Math['max'](0x0, 0x0 < _0x2ad1c8['_seek'] ? _0x2ad1c8['_seek'] : _0x5a7fef['_sprite'][_0x2b3e80][0x0] / 0x3e8),
                    _0x385cd5 = Math['max'](0x0, (_0x5a7fef['_sprite'][_0x2b3e80][0x0] + _0x5a7fef['_sprite'][_0x2b3e80][0x1]) / 0x3e8 - _0x1559e4),
                    _0x19b9ec = 0x3e8 * _0x385cd5 / Math['abs'](_0x2ad1c8['_rate']),
                    _0x1ca0f5 = _0x5a7fef['_sprite'][_0x2b3e80][0x0] / 0x3e8,
                    _0x108fb5 = (_0x5a7fef['_sprite'][_0x2b3e80][0x0] + _0x5a7fef['_sprite'][_0x2b3e80][0x1]) / 0x3e8;
                _0x2ad1c8['_sprite'] = _0x2b3e80, _0x2ad1c8['_ended'] = !0x1;
                var _0x34249d = function() {
                    _0x2ad1c8['_paused'] = !0x1, _0x2ad1c8['_seek'] = _0x1559e4, _0x2ad1c8['_start'] = _0x1ca0f5, _0x2ad1c8['_stop'] = _0x108fb5, _0x2ad1c8['_loop'] = !(!_0x2ad1c8['_loop'] && !_0x5a7fef['_sprite'][_0x2b3e80][0x2]);
                };
                if (_0x1559e4 >= _0x108fb5) _0x5a7fef['_ended'](_0x2ad1c8);
                else {
                    var _0x380d10 = _0x2ad1c8['_node'];
                    if (_0x5a7fef['_webAudio']) _0x233d57 = function() {
                        _0x5a7fef['_playLock'] = !0x1, _0x34249d(), _0x5a7fef['_refreshBuffer'](_0x2ad1c8), _0x380d10['gain']['setValueAtTime'](_0x2ad1c8['_muted'] || _0x5a7fef['_muted'] ? 0x0 : _0x2ad1c8['_volume'], _0x40a015['ctx']['currentTime']), _0x2ad1c8['_playStart'] = _0x40a015['ctx']['currentTime'], 'undefined' === typeof _0x380d10['bufferSource']['start'] ? _0x2ad1c8['_loop'] ? _0x380d10['bufferSource']['noteGrainOn'](0x0, _0x1559e4, 0x15180) : _0x380d10['bufferSource']['noteGrainOn'](0x0, _0x1559e4, _0x385cd5) : _0x2ad1c8['_loop'] ? _0x380d10['bufferSource']['start'](0x0, _0x1559e4, 0x15180) : _0x380d10['bufferSource']['start'](0x0, _0x1559e4, _0x385cd5), Infinity !== _0x19b9ec && (_0x5a7fef['_endTimers'][_0x2ad1c8['_id']] = setTimeout(_0x5a7fef['_ended']['bind'](_0x5a7fef, _0x2ad1c8), _0x19b9ec)), _0x1fb74a || setTimeout(function() {
                            _0x5a7fef['_emit']('play', _0x2ad1c8['_id']), _0x5a7fef['_loadQueue']();
                        }, 0x0);
                    }, 'running' === _0x40a015['state'] && 'interrupted' !== _0x40a015['ctx']['state'] ? _0x233d57() : (_0x5a7fef['_playLock'] = !0x0, _0x5a7fef['once']('resume', _0x233d57), _0x5a7fef['_clearTimer'](_0x2ad1c8['_id']));
                    else {
                        var _0x3591d5 = function() {
                            _0x380d10['currentTime'] = _0x1559e4, _0x380d10['muted'] = _0x2ad1c8['_muted'] || _0x5a7fef['_muted'] || _0x40a015['_muted'] || _0x380d10['muted'], _0x380d10['volume'] = _0x2ad1c8['_volume'] * _0x40a015['volume'](), _0x380d10['playbackRate'] = _0x2ad1c8['_rate'];
                            try {
                                var _0xc7de52 = _0x380d10['play']();
                                _0xc7de52 && 'undefined' !== typeof Promise && (_0xc7de52 instanceof Promise || 'function' === typeof _0xc7de52['then']) ? (_0x5a7fef['_playLock'] = !0x0, _0x34249d(), _0xc7de52['then'](function() {
                                    _0x5a7fef['_playLock'] = !0x1, _0x380d10['_unlocked'] = !0x0, _0x1fb74a || (_0x5a7fef['_emit']('play', _0x2ad1c8['_id']), _0x5a7fef['_loadQueue']());
                                })['catch'](function() {
                                    _0x5a7fef['_playLock'] = !0x1, _0x5a7fef['_emit']('playerror', _0x2ad1c8['_id'], 'Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20and\x20Chrome\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction.'), _0x2ad1c8['_ended'] = !0x0, _0x2ad1c8['_paused'] = !0x0;
                                })) : _0x1fb74a || (_0x5a7fef['_playLock'] = !0x1, _0x34249d(), _0x5a7fef['_emit']('play', _0x2ad1c8['_id']), _0x5a7fef['_loadQueue']()), _0x380d10['playbackRate'] = _0x2ad1c8['_rate'], _0x380d10['paused'] ? _0x5a7fef['_emit']('playerror', _0x2ad1c8['_id'], 'Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20and\x20Chrome\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction.') : '__default' !== _0x2b3e80 || _0x2ad1c8['_loop'] ? _0x5a7fef['_endTimers'][_0x2ad1c8['_id']] = setTimeout(_0x5a7fef['_ended']['bind'](_0x5a7fef, _0x2ad1c8), _0x19b9ec) : (_0x5a7fef['_endTimers'][_0x2ad1c8['_id']] = function() {
                                    _0x5a7fef['_ended'](_0x2ad1c8), _0x380d10['removeEventListener']('ended', _0x5a7fef['_endTimers'][_0x2ad1c8['_id']], !0x1);
                                }, _0x380d10['addEventListener']('ended', _0x5a7fef['_endTimers'][_0x2ad1c8['_id']], !0x1));
                            } catch (_0x3f31cd) {
                                _0x5a7fef['_emit']('playerror', _0x2ad1c8['_id'], _0x3f31cd);
                            }
                        };
                        'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === _0x380d10['src'] && (_0x380d10['src'] = _0x5a7fef['_src'], _0x380d10['load']()), _0x233d57 = window && window['ejecta'] || !_0x380d10['readyState'] && _0x40a015['_navigator']['isCocoonJS'];
                        if (0x3 <= _0x380d10['readyState'] || _0x233d57) _0x3591d5();
                        else {
                            _0x5a7fef['_playLock'] = !0x0;
                            var _0x325ce0 = function() {
                                _0x3591d5(), _0x380d10['removeEventListener'](_0x40a015['_canPlayEvent'], _0x325ce0, !0x1);
                            };
                            _0x380d10['addEventListener'](_0x40a015['_canPlayEvent'], _0x325ce0, !0x1), _0x5a7fef['_clearTimer'](_0x2ad1c8['_id']);
                        }
                    }
                    return _0x2ad1c8['_id'];
                }
            },
            'pause': function(_0x2765e1, _0x2cc773) {
                var _0x287acb = this;
                if ('loaded' !== _0x287acb['_state'] || _0x287acb['_playLock']) return _0x287acb['_queue']['push']({
                    'event': 'pause',
                    'action': function() {
                        _0x287acb['pause'](_0x2765e1);
                    }
                }), _0x287acb;
                for (var _0x545b6d = _0x287acb['_getSoundIds'](_0x2765e1), _0x54f089 = 0x0; _0x54f089 < _0x545b6d['length']; _0x54f089++) {
                    _0x287acb['_clearTimer'](_0x545b6d[_0x54f089]);
                    var _0x58bc4b = _0x287acb['_soundById'](_0x545b6d[_0x54f089]);
                    if (_0x58bc4b && !_0x58bc4b['_paused'] && (_0x58bc4b['_seek'] = _0x287acb['seek'](_0x545b6d[_0x54f089]), _0x58bc4b['_rateSeek'] = 0x0, _0x58bc4b['_paused'] = !0x0, _0x287acb['_stopFade'](_0x545b6d[_0x54f089]), _0x58bc4b['_node'])) {
                        if (_0x287acb['_webAudio']) {
                            if (!_0x58bc4b['_node']['bufferSource']) continue;
                            'undefined' === typeof _0x58bc4b['_node']['bufferSource']['stop'] ? _0x58bc4b['_node']['bufferSource']['noteOff'](0x0) : _0x58bc4b['_node']['bufferSource']['stop'](0x0), _0x287acb['_cleanBuffer'](_0x58bc4b['_node']);
                        } else(!isNaN(_0x58bc4b['_node']['duration']) || Infinity === _0x58bc4b['_node']['duration']) && _0x58bc4b['_node']['pause']();
                    }
                    _0x2cc773 || _0x287acb['_emit']('pause', _0x58bc4b ? _0x58bc4b['_id'] : null);
                }
                return _0x287acb;
            },
            'stop': function(_0x34084a, _0x18a5a7) {
                var _0x4fdb66 = this;
                if ('loaded' !== _0x4fdb66['_state'] || _0x4fdb66['_playLock']) return _0x4fdb66['_queue']['push']({
                    'event': 'stop',
                    'action': function() {
                        _0x4fdb66['stop'](_0x34084a);
                    }
                }), _0x4fdb66;
                for (var _0x188867 = _0x4fdb66['_getSoundIds'](_0x34084a), _0x265304 = 0x0; _0x265304 < _0x188867['length']; _0x265304++) {
                    _0x4fdb66['_clearTimer'](_0x188867[_0x265304]);
                    var _0xa39ae6 = _0x4fdb66['_soundById'](_0x188867[_0x265304]);
                    if (_0xa39ae6) {
                        _0xa39ae6['_seek'] = _0xa39ae6['_start'] || 0x0, _0xa39ae6['_rateSeek'] = 0x0, _0xa39ae6['_paused'] = !0x0, _0xa39ae6['_ended'] = !0x0, _0x4fdb66['_stopFade'](_0x188867[_0x265304]);
                        if (_0xa39ae6['_node']) {
                            if (_0x4fdb66['_webAudio']) _0xa39ae6['_node']['bufferSource'] && ('undefined' === typeof _0xa39ae6['_node']['bufferSource']['stop'] ? _0xa39ae6['_node']['bufferSource']['noteOff'](0x0) : _0xa39ae6['_node']['bufferSource']['stop'](0x0), _0x4fdb66['_cleanBuffer'](_0xa39ae6['_node']));
                            else {
                                if (!isNaN(_0xa39ae6['_node']['duration']) || Infinity === _0xa39ae6['_node']['duration']) _0xa39ae6['_node']['currentTime'] = _0xa39ae6['_start'] || 0x0, _0xa39ae6['_node']['pause'](), Infinity === _0xa39ae6['_node']['duration'] && _0x4fdb66['_clearSound'](_0xa39ae6['_node']);
                            }
                        }
                        _0x18a5a7 || _0x4fdb66['_emit']('stop', _0xa39ae6['_id']);
                    }
                }
                return _0x4fdb66;
            },
            'mute': function(_0x84a6c5, _0x3c9bc6) {
                var _0x4bcb38 = this;
                if ('loaded' !== _0x4bcb38['_state'] || _0x4bcb38['_playLock']) return _0x4bcb38['_queue']['push']({
                    'event': 'mute',
                    'action': function() {
                        _0x4bcb38['mute'](_0x84a6c5, _0x3c9bc6);
                    }
                }), _0x4bcb38;
                if ('undefined' === typeof _0x3c9bc6) {
                    if ('boolean' === typeof _0x84a6c5) _0x4bcb38['_muted'] = _0x84a6c5;
                    else return _0x4bcb38['_muted'];
                }
                for (var _0x282cf1 = _0x4bcb38['_getSoundIds'](_0x3c9bc6), _0x12dd35 = 0x0; _0x12dd35 < _0x282cf1['length']; _0x12dd35++) {
                    var _0x1e6fb5 = _0x4bcb38['_soundById'](_0x282cf1[_0x12dd35]);
                    _0x1e6fb5 && (_0x1e6fb5['_muted'] = _0x84a6c5, _0x1e6fb5['_interval'] && _0x4bcb38['_stopFade'](_0x1e6fb5['_id']), _0x4bcb38['_webAudio'] && _0x1e6fb5['_node'] ? _0x1e6fb5['_node']['gain']['setValueAtTime'](_0x84a6c5 ? 0x0 : _0x1e6fb5['_volume'], _0x40a015['ctx']['currentTime']) : _0x1e6fb5['_node'] && (_0x1e6fb5['_node']['muted'] = _0x40a015['_muted'] ? !0x0 : _0x84a6c5), _0x4bcb38['_emit']('mute', _0x1e6fb5['_id']));
                }
                return _0x4bcb38;
            },
            'volume': function() {
                var _0x23e408 = this,
                    _0x24cec1 = arguments,
                    _0x4392d4, _0x3198ae;
                if (0x0 === _0x24cec1['length']) return _0x23e408['_volume'];
                0x1 === _0x24cec1['length'] || 0x2 === _0x24cec1['length'] && 'undefined' === typeof _0x24cec1[0x1] ? 0x0 <= _0x23e408['_getSoundIds']()['indexOf'](_0x24cec1[0x0]) ? _0x3198ae = parseInt(_0x24cec1[0x0], 0xa) : _0x4392d4 = parseFloat(_0x24cec1[0x0]) : 0x2 <= _0x24cec1['length'] && (_0x4392d4 = parseFloat(_0x24cec1[0x0]), _0x3198ae = parseInt(_0x24cec1[0x1], 0xa));
                var _0x447deb;
                if ('undefined' !== typeof _0x4392d4 && 0x0 <= _0x4392d4 && 0x1 >= _0x4392d4) {
                    if ('loaded' !== _0x23e408['_state'] || _0x23e408['_playLock']) return _0x23e408['_queue']['push']({
                        'event': 'volume',
                        'action': function() {
                            _0x23e408['volume']['apply'](_0x23e408, _0x24cec1);
                        }
                    }), _0x23e408;
                    'undefined' === typeof _0x3198ae && (_0x23e408['_volume'] = _0x4392d4), _0x3198ae = _0x23e408['_getSoundIds'](_0x3198ae);
                    for (var _0x5e44cc = 0x0; _0x5e44cc < _0x3198ae['length']; _0x5e44cc++)
                        if (_0x447deb = _0x23e408['_soundById'](_0x3198ae[_0x5e44cc])) _0x447deb['_volume'] = _0x4392d4, _0x24cec1[0x2] || _0x23e408['_stopFade'](_0x3198ae[_0x5e44cc]), _0x23e408['_webAudio'] && _0x447deb['_node'] && !_0x447deb['_muted'] ? _0x447deb['_node']['gain']['setValueAtTime'](_0x4392d4, _0x40a015['ctx']['currentTime']) : _0x447deb['_node'] && !_0x447deb['_muted'] && (_0x447deb['_node']['volume'] = _0x4392d4 * _0x40a015['volume']()), _0x23e408['_emit']('volume', _0x447deb['_id']);
                } else return (_0x447deb = _0x3198ae ? _0x23e408['_soundById'](_0x3198ae) : _0x23e408['_sounds'][0x0]) ? _0x447deb['_volume'] : 0x0;
                return _0x23e408;
            },
            'fade': function(_0x4079aa, _0x2a679f, _0x16bf63, _0x12f1b6) {
                var _0x40d1b0 = this;
                if ('loaded' !== _0x40d1b0['_state'] || _0x40d1b0['_playLock']) return _0x40d1b0['_queue']['push']({
                    'event': 'fade',
                    'action': function() {
                        _0x40d1b0['fade'](_0x4079aa, _0x2a679f, _0x16bf63, _0x12f1b6);
                    }
                }), _0x40d1b0;
                _0x4079aa = Math['min'](Math['max'](0x0, parseFloat(_0x4079aa)), 0x1), _0x2a679f = Math['min'](Math['max'](0x0, parseFloat(_0x2a679f)), 0x1), _0x16bf63 = parseFloat(_0x16bf63), _0x40d1b0['volume'](_0x4079aa, _0x12f1b6);
                for (var _0x370ca8 = _0x40d1b0['_getSoundIds'](_0x12f1b6), _0x5b09a3 = 0x0; _0x5b09a3 < _0x370ca8['length']; _0x5b09a3++) {
                    var _0x295a1c = _0x40d1b0['_soundById'](_0x370ca8[_0x5b09a3]);
                    if (_0x295a1c) {
                        _0x12f1b6 || _0x40d1b0['_stopFade'](_0x370ca8[_0x5b09a3]);
                        if (_0x40d1b0['_webAudio'] && !_0x295a1c['_muted']) {
                            var _0x1110e6 = _0x40a015['ctx']['currentTime'],
                                _0x20c73d = _0x1110e6 + _0x16bf63 / 0x3e8;
                            _0x295a1c['_volume'] = _0x4079aa, _0x295a1c['_node']['gain']['setValueAtTime'](_0x4079aa, _0x1110e6), _0x295a1c['_node']['gain']['linearRampToValueAtTime'](_0x2a679f, _0x20c73d);
                        }
                        _0x40d1b0['_startFadeInterval'](_0x295a1c, _0x4079aa, _0x2a679f, _0x16bf63, _0x370ca8[_0x5b09a3], 'undefined' === typeof _0x12f1b6);
                    }
                }
                return _0x40d1b0;
            },
            '_startFadeInterval': function(_0x31c85f, _0x3babff, _0x2cc48d, _0x47bbdd, _0x90f447, _0x547fc7) {
                var _0x1a2a57 = this,
                    _0x4277ba = _0x3babff,
                    _0x15b5b3 = _0x2cc48d - _0x3babff;
                _0x90f447 = Math['abs'](_0x15b5b3 / 0.01), _0x90f447 = Math['max'](0x4, 0x0 < _0x90f447 ? _0x47bbdd / _0x90f447 : _0x47bbdd);
                var _0x3b4ab4 = Date['now']();
                _0x31c85f['_fadeTo'] = _0x2cc48d, _0x31c85f['_interval'] = setInterval(function() {
                    var _0x548ead = (Date['now']() - _0x3b4ab4) / _0x47bbdd;
                    _0x3b4ab4 = Date['now'](), _0x4277ba += _0x15b5b3 * _0x548ead, _0x4277ba = 0x0 > _0x15b5b3 ? Math['max'](_0x2cc48d, _0x4277ba) : Math['min'](_0x2cc48d, _0x4277ba), _0x4277ba = Math['round'](0x64 * _0x4277ba) / 0x64, _0x1a2a57['_webAudio'] ? _0x31c85f['_volume'] = _0x4277ba : _0x1a2a57['volume'](_0x4277ba, _0x31c85f['_id'], !0x0), _0x547fc7 && (_0x1a2a57['_volume'] = _0x4277ba);
                    if (_0x2cc48d < _0x3babff && _0x4277ba <= _0x2cc48d || _0x2cc48d > _0x3babff && _0x4277ba >= _0x2cc48d) clearInterval(_0x31c85f['_interval']), _0x31c85f['_interval'] = null, _0x31c85f['_fadeTo'] = null, _0x1a2a57['volume'](_0x2cc48d, _0x31c85f['_id']), _0x1a2a57['_emit']('fade', _0x31c85f['_id']);
                }, _0x90f447);
            },
            '_stopFade': function(_0x101c42) {
                var _0x5a2d30 = this['_soundById'](_0x101c42);
                return _0x5a2d30 && _0x5a2d30['_interval'] && (this['_webAudio'] && _0x5a2d30['_node']['gain']['cancelScheduledValues'](_0x40a015['ctx']['currentTime']), clearInterval(_0x5a2d30['_interval']), _0x5a2d30['_interval'] = null, this['volume'](_0x5a2d30['_fadeTo'], _0x101c42), _0x5a2d30['_fadeTo'] = null, this['_emit']('fade', _0x101c42)), this;
            },
            'loop': function() {
                var _0x36c882 = arguments,
                    _0x36c71e, _0x1e7d77;
                if (0x0 === _0x36c882['length']) return this['_loop'];
                if (0x1 === _0x36c882['length']) {
                    if ('boolean' === typeof _0x36c882[0x0]) this['_loop'] = _0x36c71e = _0x36c882[0x0];
                    else return (_0x36c882 = this['_soundById'](parseInt(_0x36c882[0x0], 0xa))) ? _0x36c882['_loop'] : !0x1;
                } else 0x2 === _0x36c882['length'] && (_0x36c71e = _0x36c882[0x0], _0x1e7d77 = parseInt(_0x36c882[0x1], 0xa));
                _0x1e7d77 = this['_getSoundIds'](_0x1e7d77);
                for (var _0x5ea97c = 0x0; _0x5ea97c < _0x1e7d77['length']; _0x5ea97c++)
                    if (_0x36c882 = this['_soundById'](_0x1e7d77[_0x5ea97c])) {
                        if (_0x36c882['_loop'] = _0x36c71e, this['_webAudio'] && _0x36c882['_node'] && _0x36c882['_node']['bufferSource'] && (_0x36c882['_node']['bufferSource']['loop'] = _0x36c71e)) _0x36c882['_node']['bufferSource']['loopStart'] = _0x36c882['_start'] || 0x0, _0x36c882['_node']['bufferSource']['loopEnd'] = _0x36c882['_stop'];
                    }
                return this;
            },
            'rate': function() {
                var _0x1bc536 = this,
                    _0x255958 = arguments,
                    _0x5c2511, _0x5d1584;
                0x0 === _0x255958['length'] ? _0x5d1584 = _0x1bc536['_sounds'][0x0]['_id'] : 0x1 === _0x255958['length'] ? 0x0 <= _0x1bc536['_getSoundIds']()['indexOf'](_0x255958[0x0]) ? _0x5d1584 = parseInt(_0x255958[0x0], 0xa) : _0x5c2511 = parseFloat(_0x255958[0x0]) : 0x2 === _0x255958['length'] && (_0x5c2511 = parseFloat(_0x255958[0x0]), _0x5d1584 = parseInt(_0x255958[0x1], 0xa));
                var _0x1ff4eb;
                if ('number' === typeof _0x5c2511) {
                    if ('loaded' !== _0x1bc536['_state'] || _0x1bc536['_playLock']) return _0x1bc536['_queue']['push']({
                        'event': 'rate',
                        'action': function() {
                            _0x1bc536['rate']['apply'](_0x1bc536, _0x255958);
                        }
                    }), _0x1bc536;
                    'undefined' === typeof _0x5d1584 && (_0x1bc536['_rate'] = _0x5c2511), _0x5d1584 = _0x1bc536['_getSoundIds'](_0x5d1584);
                    for (var _0x2a4fb0 = 0x0; _0x2a4fb0 < _0x5d1584['length']; _0x2a4fb0++)
                        if (_0x1ff4eb = _0x1bc536['_soundById'](_0x5d1584[_0x2a4fb0])) {
                            _0x1bc536['playing'](_0x5d1584[_0x2a4fb0]) && (_0x1ff4eb['_rateSeek'] = _0x1bc536['seek'](_0x5d1584[_0x2a4fb0]), _0x1ff4eb['_playStart'] = _0x1bc536['_webAudio'] ? _0x40a015['ctx']['currentTime'] : _0x1ff4eb['_playStart']), _0x1ff4eb['_rate'] = _0x5c2511, _0x1bc536['_webAudio'] && _0x1ff4eb['_node'] && _0x1ff4eb['_node']['bufferSource'] ? _0x1ff4eb['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x5c2511, _0x40a015['ctx']['currentTime']) : _0x1ff4eb['_node'] && (_0x1ff4eb['_node']['playbackRate'] = _0x5c2511);
                            var _0x2b2c4b = _0x1bc536['seek'](_0x5d1584[_0x2a4fb0]),
                                _0x2b2c4b = 0x3e8 * ((_0x1bc536['_sprite'][_0x1ff4eb['_sprite']][0x0] + _0x1bc536['_sprite'][_0x1ff4eb['_sprite']][0x1]) / 0x3e8 - _0x2b2c4b) / Math['abs'](_0x1ff4eb['_rate']);
                            if (_0x1bc536['_endTimers'][_0x5d1584[_0x2a4fb0]] || !_0x1ff4eb['_paused']) _0x1bc536['_clearTimer'](_0x5d1584[_0x2a4fb0]), _0x1bc536['_endTimers'][_0x5d1584[_0x2a4fb0]] = setTimeout(_0x1bc536['_ended']['bind'](_0x1bc536, _0x1ff4eb), _0x2b2c4b);
                            _0x1bc536['_emit']('rate', _0x1ff4eb['_id']);
                        }
                } else return (_0x1ff4eb = _0x1bc536['_soundById'](_0x5d1584)) ? _0x1ff4eb['_rate'] : _0x1bc536['_rate'];
                return _0x1bc536;
            },
            'seek': function() {
                var _0x5c090c = this,
                    _0x56e1bf = arguments,
                    _0x51a92d, _0x88469b;
                0x0 === _0x56e1bf['length'] ? _0x88469b = _0x5c090c['_sounds'][0x0]['_id'] : 0x1 === _0x56e1bf['length'] ? 0x0 <= _0x5c090c['_getSoundIds']()['indexOf'](_0x56e1bf[0x0]) ? _0x88469b = parseInt(_0x56e1bf[0x0], 0xa) : _0x5c090c['_sounds']['length'] && (_0x88469b = _0x5c090c['_sounds'][0x0]['_id'], _0x51a92d = parseFloat(_0x56e1bf[0x0])) : 0x2 === _0x56e1bf['length'] && (_0x51a92d = parseFloat(_0x56e1bf[0x0]), _0x88469b = parseInt(_0x56e1bf[0x1], 0xa));
                if ('undefined' === typeof _0x88469b) return _0x5c090c;
                if ('loaded' !== _0x5c090c['_state'] || _0x5c090c['_playLock']) return _0x5c090c['_queue']['push']({
                    'event': 'seek',
                    'action': function() {
                        _0x5c090c['seek']['apply'](_0x5c090c, _0x56e1bf);
                    }
                }), _0x5c090c;
                var _0x2ea036 = _0x5c090c['_soundById'](_0x88469b);
                if (_0x2ea036) {
                    if ('number' === typeof _0x51a92d && 0x0 <= _0x51a92d) {
                        var _0x4ffb7d = _0x5c090c['playing'](_0x88469b);
                        _0x4ffb7d && _0x5c090c['pause'](_0x88469b, !0x0), _0x2ea036['_seek'] = _0x51a92d, _0x2ea036['_ended'] = !0x1, _0x5c090c['_clearTimer'](_0x88469b), !_0x5c090c['_webAudio'] && _0x2ea036['_node'] && !isNaN(_0x2ea036['_node']['duration']) && (_0x2ea036['_node']['currentTime'] = _0x51a92d);
                        var _0x5c206c = function() {
                            _0x5c090c['_emit']('seek', _0x88469b), _0x4ffb7d && _0x5c090c['play'](_0x88469b, !0x0);
                        };
                        if (_0x4ffb7d && !_0x5c090c['_webAudio']) {
                            var _0x452b93 = function() {
                                _0x5c090c['_playLock'] ? setTimeout(_0x452b93, 0x0) : _0x5c206c();
                            };
                            setTimeout(_0x452b93, 0x0);
                        } else _0x5c206c();
                    } else return _0x5c090c['_webAudio'] ? (_0x51a92d = _0x5c090c['playing'](_0x88469b) ? _0x40a015['ctx']['currentTime'] - _0x2ea036['_playStart'] : 0x0, _0x2ea036['_seek'] + ((_0x2ea036['_rateSeek'] ? _0x2ea036['_rateSeek'] - _0x2ea036['_seek'] : 0x0) + _0x51a92d * Math['abs'](_0x2ea036['_rate']))) : _0x2ea036['_node']['currentTime'];
                }
                return _0x5c090c;
            },
            'playing': function(_0x4af3c4) {
                if ('number' === typeof _0x4af3c4) return (_0x4af3c4 = this['_soundById'](_0x4af3c4)) ? !_0x4af3c4['_paused'] : !0x1;
                for (_0x4af3c4 = 0x0; _0x4af3c4 < this['_sounds']['length']; _0x4af3c4++)
                    if (!this['_sounds'][_0x4af3c4]['_paused']) return !0x0;
                return !0x1;
            },
            'duration': function(_0xa19c9c) {
                var _0x2105ae = this['_duration'];
                return (_0xa19c9c = this['_soundById'](_0xa19c9c)) && (_0x2105ae = this['_sprite'][_0xa19c9c['_sprite']][0x1] / 0x3e8), _0x2105ae;
            },
            'state': function() {
                return this['_state'];
            },
            'unload': function() {
                for (var _0x340c48 = this['_sounds'], _0x4372b9 = 0x0; _0x4372b9 < _0x340c48['length']; _0x4372b9++) _0x340c48[_0x4372b9]['_paused'] || this['stop'](_0x340c48[_0x4372b9]['_id']), this['_webAudio'] || (this['_clearSound'](_0x340c48[_0x4372b9]['_node']), _0x340c48[_0x4372b9]['_node']['removeEventListener']('error', _0x340c48[_0x4372b9]['_errorFn'], !0x1), _0x340c48[_0x4372b9]['_node']['removeEventListener'](_0x40a015['_canPlayEvent'], _0x340c48[_0x4372b9]['_loadFn'], !0x1), _0x40a015['_releaseHtml5Audio'](_0x340c48[_0x4372b9]['_node'])), delete _0x340c48[_0x4372b9]['_node'], this['_clearTimer'](_0x340c48[_0x4372b9]['_id']);
                _0x4372b9 = _0x40a015['_howls']['indexOf'](this), 0x0 <= _0x4372b9 && _0x40a015['_howls']['splice'](_0x4372b9, 0x1), _0x340c48 = !0x0;
                for (_0x4372b9 = 0x0; _0x4372b9 < _0x40a015['_howls']['length']; _0x4372b9++)
                    if (_0x40a015['_howls'][_0x4372b9]['_src'] === this['_src'] || 0x0 <= this['_src']['indexOf'](_0x40a015['_howls'][_0x4372b9]['_src'])) {
                        _0x340c48 = !0x1;
                        break;
                    }
                return _0x46d536 && _0x340c48 && delete _0x46d536[this['_src']], _0x40a015['noAudio'] = !0x1, this['_state'] = 'unloaded', this['_sounds'] = [], null;
            },
            'on': function(_0x444fe8, _0x39215b, _0x3ae9e1, _0x2f238) {
                return _0x444fe8 = this['_on' + _0x444fe8], 'function' === typeof _0x39215b && _0x444fe8['push'](_0x2f238 ? {
                    'id': _0x3ae9e1,
                    'fn': _0x39215b,
                    'once': _0x2f238
                } : {
                    'id': _0x3ae9e1,
                    'fn': _0x39215b
                }), this;
            },
            'off': function(_0x4c9a69, _0x5274aa, _0x38f795) {
                var _0x17e5fc = this['_on' + _0x4c9a69],
                    _0x5c87b5 = 0x0;
                'number' === typeof _0x5274aa && (_0x38f795 = _0x5274aa, _0x5274aa = null);
                if (_0x5274aa || _0x38f795)
                    for (_0x5c87b5 = 0x0; _0x5c87b5 < _0x17e5fc['length']; _0x5c87b5++) {
                        if (_0x4c9a69 = _0x38f795 === _0x17e5fc[_0x5c87b5]['id'], _0x5274aa === _0x17e5fc[_0x5c87b5]['fn'] && _0x4c9a69 || !_0x5274aa && _0x4c9a69) {
                            _0x17e5fc['splice'](_0x5c87b5, 0x1);
                            break;
                        }
                    } else {
                        if (_0x4c9a69) this['_on' + _0x4c9a69] = [];
                        else {
                            _0x5274aa = Object['keys'](this);
                            for (_0x5c87b5 = 0x0; _0x5c87b5 < _0x5274aa['length']; _0x5c87b5++) 0x0 === _0x5274aa[_0x5c87b5]['indexOf']('_on') && Array['isArray'](this[_0x5274aa[_0x5c87b5]]) && (this[_0x5274aa[_0x5c87b5]] = []);
                        }
                    }
                return this;
            },
            'once': function(_0xcf78ee, _0x21b743, _0x1515ba) {
                return this['on'](_0xcf78ee, _0x21b743, _0x1515ba, 0x1), this;
            },
            '_emit': function(_0x18fffd, _0x410189, _0x560b8d) {
                for (var _0x38d425 = this['_on' + _0x18fffd], _0x2d5dd1 = _0x38d425['length'] - 0x1; 0x0 <= _0x2d5dd1; _0x2d5dd1--)
                    if (!_0x38d425[_0x2d5dd1]['id'] || _0x38d425[_0x2d5dd1]['id'] === _0x410189 || 'load' === _0x18fffd) setTimeout(function(_0x24a957) {
                        _0x24a957['call'](this, _0x410189, _0x560b8d);
                    }['bind'](this, _0x38d425[_0x2d5dd1]['fn']), 0x0), _0x38d425[_0x2d5dd1]['once'] && this['off'](_0x18fffd, _0x38d425[_0x2d5dd1]['fn'], _0x38d425[_0x2d5dd1]['id']);
                return this['_loadQueue'](_0x18fffd), this;
            },
            '_loadQueue': function(_0x537e7f) {
                if (0x0 < this['_queue']['length']) {
                    var _0x30eacc = this['_queue'][0x0];
                    _0x30eacc['event'] === _0x537e7f && (this['_queue']['shift'](), this['_loadQueue']()), _0x537e7f || _0x30eacc['action']();
                }
                return this;
            },
            '_ended': function(_0x4cedb9) {
                var _0x4669a4 = _0x4cedb9['_sprite'];
                if (!this['_webAudio'] && _0x4cedb9['_node'] && !_0x4cedb9['_node']['paused'] && !_0x4cedb9['_node']['ended'] && _0x4cedb9['_node']['currentTime'] < _0x4cedb9['_stop']) return setTimeout(this['_ended']['bind'](this, _0x4cedb9), 0x64), this;
                _0x4669a4 = !(!_0x4cedb9['_loop'] && !this['_sprite'][_0x4669a4][0x2]), this['_emit']('end', _0x4cedb9['_id']), !this['_webAudio'] && _0x4669a4 && this['stop'](_0x4cedb9['_id'], !0x0)['play'](_0x4cedb9['_id']);
                if (this['_webAudio'] && _0x4669a4) {
                    this['_emit']('play', _0x4cedb9['_id']), _0x4cedb9['_seek'] = _0x4cedb9['_start'] || 0x0, _0x4cedb9['_rateSeek'] = 0x0, _0x4cedb9['_playStart'] = _0x40a015['ctx']['currentTime'];
                    var _0xdb6bc3 = 0x3e8 * (_0x4cedb9['_stop'] - _0x4cedb9['_start']) / Math['abs'](_0x4cedb9['_rate']);
                    this['_endTimers'][_0x4cedb9['_id']] = setTimeout(this['_ended']['bind'](this, _0x4cedb9), _0xdb6bc3);
                }
                return this['_webAudio'] && !_0x4669a4 && (_0x4cedb9['_paused'] = !0x0, _0x4cedb9['_ended'] = !0x0, _0x4cedb9['_seek'] = _0x4cedb9['_start'] || 0x0, _0x4cedb9['_rateSeek'] = 0x0, this['_clearTimer'](_0x4cedb9['_id']), this['_cleanBuffer'](_0x4cedb9['_node']), _0x40a015['_autoSuspend']()), !this['_webAudio'] && !_0x4669a4 && this['stop'](_0x4cedb9['_id'], !0x0), this;
            },
            '_clearTimer': function(_0x17cce2) {
                if (this['_endTimers'][_0x17cce2]) {
                    if ('function' !== typeof this['_endTimers'][_0x17cce2]) clearTimeout(this['_endTimers'][_0x17cce2]);
                    else {
                        var _0x5c586d = this['_soundById'](_0x17cce2);
                        _0x5c586d && _0x5c586d['_node'] && _0x5c586d['_node']['removeEventListener']('ended', this['_endTimers'][_0x17cce2], !0x1);
                    }
                    delete this['_endTimers'][_0x17cce2];
                }
                return this;
            },
            '_soundById': function(_0x26dbf0) {
                for (var _0x39f5c8 = 0x0; _0x39f5c8 < this['_sounds']['length']; _0x39f5c8++)
                    if (_0x26dbf0 === this['_sounds'][_0x39f5c8]['_id']) return this['_sounds'][_0x39f5c8];
                return null;
            },
            '_inactiveSound': function() {
                this['_drain']();
                for (var _0x1ae1b5 = 0x0; _0x1ae1b5 < this['_sounds']['length']; _0x1ae1b5++)
                    if (this['_sounds'][_0x1ae1b5]['_ended']) return this['_sounds'][_0x1ae1b5]['reset']();
                return new _0x5dc77a(this);
            },
            '_drain': function() {
                var _0x411e1e = this['_pool'],
                    _0x20e7f7 = 0x0,
                    _0x30e85c = 0x0;
                if (!(this['_sounds']['length'] < _0x411e1e)) {
                    for (_0x30e85c = 0x0; _0x30e85c < this['_sounds']['length']; _0x30e85c++) this['_sounds'][_0x30e85c]['_ended'] && _0x20e7f7++;
                    for (_0x30e85c = this['_sounds']['length'] - 0x1; 0x0 <= _0x30e85c && !(_0x20e7f7 <= _0x411e1e); _0x30e85c--) this['_sounds'][_0x30e85c]['_ended'] && (this['_webAudio'] && this['_sounds'][_0x30e85c]['_node'] && this['_sounds'][_0x30e85c]['_node']['disconnect'](0x0), this['_sounds']['splice'](_0x30e85c, 0x1), _0x20e7f7--);
                }
            },
            '_getSoundIds': function(_0x55757a) {
                if ('undefined' === typeof _0x55757a) {
                    _0x55757a = [];
                    for (var _0xbd3d04 = 0x0; _0xbd3d04 < this['_sounds']['length']; _0xbd3d04++) _0x55757a['push'](this['_sounds'][_0xbd3d04]['_id']);
                    return _0x55757a;
                }
                return [_0x55757a];
            },
            '_refreshBuffer': function(_0x3983ed) {
                _0x3983ed['_node']['bufferSource'] = _0x40a015['ctx']['createBufferSource'](), _0x3983ed['_node']['bufferSource']['buffer'] = _0x46d536[this['_src']], _0x3983ed['_panner'] ? _0x3983ed['_node']['bufferSource']['connect'](_0x3983ed['_panner']) : _0x3983ed['_node']['bufferSource']['connect'](_0x3983ed['_node']);
                if (_0x3983ed['_node']['bufferSource']['loop'] = _0x3983ed['_loop']) _0x3983ed['_node']['bufferSource']['loopStart'] = _0x3983ed['_start'] || 0x0, _0x3983ed['_node']['bufferSource']['loopEnd'] = _0x3983ed['_stop'] || 0x0;
                return _0x3983ed['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x3983ed['_rate'], _0x40a015['ctx']['currentTime']), this;
            },
            '_cleanBuffer': function(_0x2eb82d) {
                var _0x3c419c = _0x40a015['_navigator'] && 0x0 <= _0x40a015['_navigator']['vendor']['indexOf']('Apple');
                if (_0x40a015['_scratchBuffer'] && _0x2eb82d['bufferSource'] && (_0x2eb82d['bufferSource']['onended'] = null, _0x2eb82d['bufferSource']['disconnect'](0x0), _0x3c419c)) try {
                    _0x2eb82d['bufferSource']['buffer'] = _0x40a015['_scratchBuffer'];
                } catch (_0x196fc9) {}
                return _0x2eb82d['bufferSource'] = null, this;
            },
            '_clearSound': function(_0x30934a) {
                /MSIE |Trident\// ['test'](_0x40a015['_navigator'] && _0x40a015['_navigator']['userAgent']) || (_0x30934a['src'] = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            }
        };
        var _0x5dc77a = function(_0x3fa031) {
            this['_parent'] = _0x3fa031, this['init']();
        };
        _0x5dc77a['prototype'] = {
            'init': function() {
                var _0x456642 = this['_parent'];
                return this['_muted'] = _0x456642['_muted'], this['_loop'] = _0x456642['_loop'], this['_volume'] = _0x456642['_volume'], this['_rate'] = _0x456642['_rate'], this['_seek'] = 0x0, this['_ended'] = this['_paused'] = !0x0, this['_sprite'] = '__default', this['_id'] = ++_0x40a015['_counter'], _0x456642['_sounds']['push'](this), this['create'](), this;
            },
            'create': function() {
                var _0x79e08c = this['_parent'],
                    _0x45f8ed = _0x40a015['_muted'] || this['_muted'] || this['_parent']['_muted'] ? 0x0 : this['_volume'];
                return _0x79e08c['_webAudio'] ? (this['_node'] = 'undefined' === typeof _0x40a015['ctx']['createGain'] ? _0x40a015['ctx']['createGainNode']() : _0x40a015['ctx']['createGain'](), this['_node']['gain']['setValueAtTime'](_0x45f8ed, _0x40a015['ctx']['currentTime']), this['_node']['paused'] = !0x0, this['_node']['connect'](_0x40a015['masterGain'])) : _0x40a015['noAudio'] || (this['_node'] = _0x40a015['_obtainHtml5Audio'](), this['_errorFn'] = this['_errorListener']['bind'](this), this['_node']['addEventListener']('error', this['_errorFn'], !0x1), this['_loadFn'] = this['_loadListener']['bind'](this), this['_node']['addEventListener'](_0x40a015['_canPlayEvent'], this['_loadFn'], !0x1), this['_node']['src'] = _0x79e08c['_src'], this['_node']['preload'] = !0x0 === _0x79e08c['_preload'] ? 'auto' : _0x79e08c['_preload'], this['_node']['volume'] = _0x45f8ed * _0x40a015['volume'](), this['_node']['load']()), this;
            },
            'reset': function() {
                var _0x3251cf = this['_parent'];
                return this['_muted'] = _0x3251cf['_muted'], this['_loop'] = _0x3251cf['_loop'], this['_volume'] = _0x3251cf['_volume'], this['_rate'] = _0x3251cf['_rate'], this['_rateSeek'] = this['_seek'] = 0x0, this['_ended'] = this['_paused'] = !0x0, this['_sprite'] = '__default', this['_id'] = ++_0x40a015['_counter'], this;
            },
            '_errorListener': function() {
                this['_parent']['_emit']('loaderror', this['_id'], this['_node']['error'] ? this['_node']['error']['code'] : 0x0), this['_node']['removeEventListener']('error', this['_errorFn'], !0x1);
            },
            '_loadListener': function() {
                var _0x4e1df1 = this['_parent'];
                _0x4e1df1['_duration'] = Math['ceil'](0xa * this['_node']['duration']) / 0xa, 0x0 === Object['keys'](_0x4e1df1['_sprite'])['length'] && (_0x4e1df1['_sprite'] = {
                    '__default': [0x0, 0x3e8 * _0x4e1df1['_duration']]
                }), 'loaded' !== _0x4e1df1['_state'] && (_0x4e1df1['_state'] = 'loaded', _0x4e1df1['_emit']('load'), _0x4e1df1['_loadQueue']()), this['_node']['removeEventListener'](_0x40a015['_canPlayEvent'], this['_loadFn'], !0x1);
            }
        };
        var _0x46d536 = {},
            _0x1a2080 = function(_0x249c7a, _0xcb6e49) {
                var _0x3ab300 = function() {
                        _0xcb6e49['_emit']('loaderror', null, 'Decoding\x20audio\x20data\x20failed.');
                    },
                    _0x5de694 = function(_0x82d654) {
                        _0x82d654 && 0x0 < _0xcb6e49['_sounds']['length'] ? (_0x46d536[_0xcb6e49['_src']] = _0x82d654, _0xf7c013(_0xcb6e49, _0x82d654)) : _0x3ab300();
                    };
                'undefined' !== typeof Promise && 0x1 === _0x40a015['ctx']['decodeAudioData']['length'] ? _0x40a015['ctx']['decodeAudioData'](_0x249c7a)['then'](_0x5de694)['catch'](_0x3ab300) : _0x40a015['ctx']['decodeAudioData'](_0x249c7a, _0x5de694, _0x3ab300);
            },
            _0xf7c013 = function(_0x48f23e, _0x3b1c01) {
                _0x3b1c01 && !_0x48f23e['_duration'] && (_0x48f23e['_duration'] = _0x3b1c01['duration']), 0x0 === Object['keys'](_0x48f23e['_sprite'])['length'] && (_0x48f23e['_sprite'] = {
                    '__default': [0x0, 0x3e8 * _0x48f23e['_duration']]
                }), 'loaded' !== _0x48f23e['_state'] && (_0x48f23e['_state'] = 'loaded', _0x48f23e['_emit']('load'), _0x48f23e['_loadQueue']());
            },
            _0x1387d2 = function() {
                if (_0x40a015['usingWebAudio']) {
                    try {
                        'undefined' !== typeof AudioContext ? _0x40a015['ctx'] = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x40a015['ctx'] = new webkitAudioContext() : _0x40a015['usingWebAudio'] = !0x1;
                    } catch (_0x5e0d53) {
                        _0x40a015['usingWebAudio'] = !0x1;
                    }
                    _0x40a015['ctx'] || (_0x40a015['usingWebAudio'] = !0x1);
                    var _0x3d7bf7 = /iP(hone|od|ad)/ ['test'](_0x40a015['_navigator'] && _0x40a015['_navigator']['platform']),
                        _0x1c46dd = _0x40a015['_navigator'] && _0x40a015['_navigator']['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/),
                        _0x1c46dd = _0x1c46dd ? parseInt(_0x1c46dd[0x1], 0xa) : null;
                    _0x3d7bf7 && _0x1c46dd && 0x9 > _0x1c46dd && (_0x3d7bf7 = /safari/ ['test'](_0x40a015['_navigator'] && _0x40a015['_navigator']['userAgent']['toLowerCase']()), _0x40a015['_navigator'] && !_0x3d7bf7 && (_0x40a015['usingWebAudio'] = !0x1)), _0x40a015['usingWebAudio'] && (_0x40a015['masterGain'] = 'undefined' === typeof _0x40a015['ctx']['createGain'] ? _0x40a015['ctx']['createGainNode']() : _0x40a015['ctx']['createGain'](), _0x40a015['masterGain']['gain']['setValueAtTime'](_0x40a015['_muted'] ? 0x0 : _0x40a015['_volume'], _0x40a015['ctx']['currentTime']), _0x40a015['masterGain']['connect'](_0x40a015['ctx']['destination'])), _0x40a015['_setup']();
                }
            };
        'function' === typeof define && define['amd'] && define([], function() {
            return {
                'Howler': _0x40a015,
                'Howl': _0x17f5c1
            };
        }), 'undefined' !== typeof exports && (exports['Howler'] = _0x40a015, exports['Howl'] = _0x17f5c1), 'undefined' !== typeof global ? (global['HowlerGlobal'] = _0x3f28f4, global['Howler'] = _0x40a015, global['Howl'] = _0x17f5c1, global['Sound'] = _0x5dc77a) : 'undefined' !== typeof window && (window['HowlerGlobal'] = _0x3f28f4, window['Howler'] = _0x40a015, window['Howl'] = _0x17f5c1, window['Sound'] = _0x5dc77a);
    }()), (function() {
        HowlerGlobal['prototype']['_pos'] = [0x0, 0x0, 0x0], HowlerGlobal['prototype']['_orientation'] = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0], HowlerGlobal['prototype']['stereo'] = function(_0x1bf944) {
            if (!this['ctx'] || !this['ctx']['listener']) return this;
            for (var _0x25e735 = this['_howls']['length'] - 0x1; 0x0 <= _0x25e735; _0x25e735--) this['_howls'][_0x25e735]['stereo'](_0x1bf944);
            return this;
        }, HowlerGlobal['prototype']['pos'] = function(_0x1db284, _0x724793, _0x2bc425) {
            if (!this['ctx'] || !this['ctx']['listener']) return this;
            _0x724793 = 'number' !== typeof _0x724793 ? this['_pos'][0x1] : _0x724793, _0x2bc425 = 'number' !== typeof _0x2bc425 ? this['_pos'][0x2] : _0x2bc425;
            if ('number' === typeof _0x1db284) this['_pos'] = [_0x1db284, _0x724793, _0x2bc425], 'undefined' !== typeof this['ctx']['listener']['positionX'] ? (this['ctx']['listener']['positionX']['setTargetAtTime'](this['_pos'][0x0], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionY']['setTargetAtTime'](this['_pos'][0x1], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionZ']['setTargetAtTime'](this['_pos'][0x2], Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setPosition'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2]);
            else return this['_pos'];
            return this;
        }, HowlerGlobal['prototype']['orientation'] = function(_0x66f5cd, _0x3a0464, _0x2441ee, _0x2e6d3c, _0x5a31c3, _0x3eb19c) {
            if (!this['ctx'] || !this['ctx']['listener']) return this;
            var _0x21e998 = this['_orientation'];
            _0x3a0464 = 'number' !== typeof _0x3a0464 ? _0x21e998[0x1] : _0x3a0464, _0x2441ee = 'number' !== typeof _0x2441ee ? _0x21e998[0x2] : _0x2441ee, _0x2e6d3c = 'number' !== typeof _0x2e6d3c ? _0x21e998[0x3] : _0x2e6d3c, _0x5a31c3 = 'number' !== typeof _0x5a31c3 ? _0x21e998[0x4] : _0x5a31c3, _0x3eb19c = 'number' !== typeof _0x3eb19c ? _0x21e998[0x5] : _0x3eb19c;
            if ('number' === typeof _0x66f5cd) this['_orientation'] = [_0x66f5cd, _0x3a0464, _0x2441ee, _0x2e6d3c, _0x5a31c3, _0x3eb19c], 'undefined' !== typeof this['ctx']['listener']['forwardX'] ? (this['ctx']['listener']['forwardX']['setTargetAtTime'](_0x66f5cd, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardY']['setTargetAtTime'](_0x3a0464, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardZ']['setTargetAtTime'](_0x2441ee, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upX']['setTargetAtTime'](_0x2e6d3c, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upY']['setTargetAtTime'](_0x5a31c3, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upZ']['setTargetAtTime'](_0x3eb19c, Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setOrientation'](_0x66f5cd, _0x3a0464, _0x2441ee, _0x2e6d3c, _0x5a31c3, _0x3eb19c);
            else return _0x21e998;
            return this;
        };
        var _0x4a4179 = Howl['prototype']['init'];
        Howl['prototype']['init'] = function(_0x4f1646) {
            return this['_orientation'] = _0x4f1646['orientation'] || [0x1, 0x0, 0x0], this['_stereo'] = _0x4f1646['stereo'] || null, this['_pos'] = _0x4f1646['pos'] || null, this['_pannerAttr'] = {
                'coneInnerAngle': 'undefined' !== typeof _0x4f1646['coneInnerAngle'] ? _0x4f1646['coneInnerAngle'] : 0x168,
                'coneOuterAngle': 'undefined' !== typeof _0x4f1646['coneOuterAngle'] ? _0x4f1646['coneOuterAngle'] : 0x168,
                'coneOuterGain': 'undefined' !== typeof _0x4f1646['coneOuterGain'] ? _0x4f1646['coneOuterGain'] : 0x0,
                'distanceModel': 'undefined' !== typeof _0x4f1646['distanceModel'] ? _0x4f1646['distanceModel'] : 'inverse',
                'maxDistance': 'undefined' !== typeof _0x4f1646['maxDistance'] ? _0x4f1646['maxDistance'] : 0x2710,
                'panningModel': 'undefined' !== typeof _0x4f1646['panningModel'] ? _0x4f1646['panningModel'] : 'HRTF',
                'refDistance': 'undefined' !== typeof _0x4f1646['refDistance'] ? _0x4f1646['refDistance'] : 0x1,
                'rolloffFactor': 'undefined' !== typeof _0x4f1646['rolloffFactor'] ? _0x4f1646['rolloffFactor'] : 0x1
            }, this['_onstereo'] = _0x4f1646['onstereo'] ? [{
                'fn': _0x4f1646['onstereo']
            }] : [], this['_onpos'] = _0x4f1646['onpos'] ? [{
                'fn': _0x4f1646['onpos']
            }] : [], this['_onorientation'] = _0x4f1646['onorientation'] ? [{
                'fn': _0x4f1646['onorientation']
            }] : [], _0x4a4179['call'](this, _0x4f1646);
        }, Howl['prototype']['stereo'] = function(_0x2af58f, _0x2daa1a) {
            var _0x1e90d8 = this;
            if (!_0x1e90d8['_webAudio']) return _0x1e90d8;
            if ('loaded' !== _0x1e90d8['_state']) return _0x1e90d8['_queue']['push']({
                'event': 'stereo',
                'action': function() {
                    _0x1e90d8['stereo'](_0x2af58f, _0x2daa1a);
                }
            }), _0x1e90d8;
            var _0x1260ce = 'undefined' === typeof Howler['ctx']['createStereoPanner'] ? 'spatial' : 'stereo';
            if ('undefined' === typeof _0x2daa1a) {
                if ('number' === typeof _0x2af58f) _0x1e90d8['_stereo'] = _0x2af58f, _0x1e90d8['_pos'] = [_0x2af58f, 0x0, 0x0];
                else return _0x1e90d8['_stereo'];
            }
            for (var _0xb6a75 = _0x1e90d8['_getSoundIds'](_0x2daa1a), _0x20fa6c = 0x0; _0x20fa6c < _0xb6a75['length']; _0x20fa6c++) {
                var _0x578954 = _0x1e90d8['_soundById'](_0xb6a75[_0x20fa6c]);
                if (_0x578954) {
                    if ('number' === typeof _0x2af58f) _0x578954['_stereo'] = _0x2af58f, _0x578954['_pos'] = [_0x2af58f, 0x0, 0x0], _0x578954['_node'] && (_0x578954['_pannerAttr']['panningModel'] = 'equalpower', (!_0x578954['_panner'] || !_0x578954['_panner']['pan']) && _0x102443(_0x578954, _0x1260ce), 'spatial' === _0x1260ce ? 'undefined' !== typeof _0x578954['_panner']['positionX'] ? (_0x578954['_panner']['positionX']['setValueAtTime'](_0x2af58f, Howler['ctx']['currentTime']), _0x578954['_panner']['positionY']['setValueAtTime'](0x0, Howler['ctx']['currentTime']), _0x578954['_panner']['positionZ']['setValueAtTime'](0x0, Howler['ctx']['currentTime'])) : _0x578954['_panner']['setPosition'](_0x2af58f, 0x0, 0x0) : _0x578954['_panner']['pan']['setValueAtTime'](_0x2af58f, Howler['ctx']['currentTime'])), _0x1e90d8['_emit']('stereo', _0x578954['_id']);
                    else return _0x578954['_stereo'];
                }
            }
            return _0x1e90d8;
        }, Howl['prototype']['pos'] = function(_0x37fb99, _0x313bae, _0x5bc020, _0x3203a8) {
            var _0xb15b40 = this;
            if (!_0xb15b40['_webAudio']) return _0xb15b40;
            if ('loaded' !== _0xb15b40['_state']) return _0xb15b40['_queue']['push']({
                'event': 'pos',
                'action': function() {
                    _0xb15b40['pos'](_0x37fb99, _0x313bae, _0x5bc020, _0x3203a8);
                }
            }), _0xb15b40;
            _0x313bae = 'number' !== typeof _0x313bae ? 0x0 : _0x313bae, _0x5bc020 = 'number' !== typeof _0x5bc020 ? -0.5 : _0x5bc020;
            if ('undefined' === typeof _0x3203a8) {
                if ('number' === typeof _0x37fb99) _0xb15b40['_pos'] = [_0x37fb99, _0x313bae, _0x5bc020];
                else return _0xb15b40['_pos'];
            }
            for (var _0x171bd9 = _0xb15b40['_getSoundIds'](_0x3203a8), _0x2f1aaa = 0x0; _0x2f1aaa < _0x171bd9['length']; _0x2f1aaa++) {
                var _0x3e3967 = _0xb15b40['_soundById'](_0x171bd9[_0x2f1aaa]);
                if (_0x3e3967) {
                    if ('number' === typeof _0x37fb99) _0x3e3967['_pos'] = [_0x37fb99, _0x313bae, _0x5bc020], _0x3e3967['_node'] && ((!_0x3e3967['_panner'] || _0x3e3967['_panner']['pan']) && _0x102443(_0x3e3967, 'spatial'), 'undefined' !== typeof _0x3e3967['_panner']['positionX'] ? (_0x3e3967['_panner']['positionX']['setValueAtTime'](_0x37fb99, Howler['ctx']['currentTime']), _0x3e3967['_panner']['positionY']['setValueAtTime'](_0x313bae, Howler['ctx']['currentTime']), _0x3e3967['_panner']['positionZ']['setValueAtTime'](_0x5bc020, Howler['ctx']['currentTime'])) : _0x3e3967['_panner']['setPosition'](_0x37fb99, _0x313bae, _0x5bc020)), _0xb15b40['_emit']('pos', _0x3e3967['_id']);
                    else return _0x3e3967['_pos'];
                }
            }
            return _0xb15b40;
        }, Howl['prototype']['orientation'] = function(_0x1a9ffd, _0x454639, _0xad1abe, _0x326785) {
            var _0x270272 = this;
            if (!_0x270272['_webAudio']) return _0x270272;
            if ('loaded' !== _0x270272['_state']) return _0x270272['_queue']['push']({
                'event': 'orientation',
                'action': function() {
                    _0x270272['orientation'](_0x1a9ffd, _0x454639, _0xad1abe, _0x326785);
                }
            }), _0x270272;
            _0x454639 = 'number' !== typeof _0x454639 ? _0x270272['_orientation'][0x1] : _0x454639, _0xad1abe = 'number' !== typeof _0xad1abe ? _0x270272['_orientation'][0x2] : _0xad1abe;
            if ('undefined' === typeof _0x326785) {
                if ('number' === typeof _0x1a9ffd) _0x270272['_orientation'] = [_0x1a9ffd, _0x454639, _0xad1abe];
                else return _0x270272['_orientation'];
            }
            for (var _0x5c88fd = _0x270272['_getSoundIds'](_0x326785), _0x3b7993 = 0x0; _0x3b7993 < _0x5c88fd['length']; _0x3b7993++) {
                var _0x4bce14 = _0x270272['_soundById'](_0x5c88fd[_0x3b7993]);
                if (_0x4bce14) {
                    if ('number' === typeof _0x1a9ffd) _0x4bce14['_orientation'] = [_0x1a9ffd, _0x454639, _0xad1abe], _0x4bce14['_node'] && (_0x4bce14['_panner'] || (_0x4bce14['_pos'] || (_0x4bce14['_pos'] = _0x270272['_pos'] || [0x0, 0x0, -0.5]), _0x102443(_0x4bce14, 'spatial')), 'undefined' !== typeof _0x4bce14['_panner']['orientationX'] ? (_0x4bce14['_panner']['orientationX']['setValueAtTime'](_0x1a9ffd, Howler['ctx']['currentTime']), _0x4bce14['_panner']['orientationY']['setValueAtTime'](_0x454639, Howler['ctx']['currentTime']), _0x4bce14['_panner']['orientationZ']['setValueAtTime'](_0xad1abe, Howler['ctx']['currentTime'])) : _0x4bce14['_panner']['setOrientation'](_0x1a9ffd, _0x454639, _0xad1abe)), _0x270272['_emit']('orientation', _0x4bce14['_id']);
                    else return _0x4bce14['_orientation'];
                }
            }
            return _0x270272;
        }, Howl['prototype']['pannerAttr'] = function() {
            var _0x47dd2f = arguments,
                _0x5ddde6, _0x4c9b59;
            if (!this['_webAudio']) return this;
            if (0x0 === _0x47dd2f['length']) return this['_pannerAttr'];
            if (0x1 === _0x47dd2f['length']) {
                if ('object' === typeof _0x47dd2f[0x0]) _0x5ddde6 = _0x47dd2f[0x0], 'undefined' === typeof _0x4c9b59 && (_0x5ddde6['pannerAttr'] || (_0x5ddde6['pannerAttr'] = {
                    'coneInnerAngle': _0x5ddde6['coneInnerAngle'],
                    'coneOuterAngle': _0x5ddde6['coneOuterAngle'],
                    'coneOuterGain': _0x5ddde6['coneOuterGain'],
                    'distanceModel': _0x5ddde6['distanceModel'],
                    'maxDistance': _0x5ddde6['maxDistance'],
                    'refDistance': _0x5ddde6['refDistance'],
                    'rolloffFactor': _0x5ddde6['rolloffFactor'],
                    'panningModel': _0x5ddde6['panningModel']
                }), this['_pannerAttr'] = {
                    'coneInnerAngle': 'undefined' !== typeof _0x5ddde6['pannerAttr']['coneInnerAngle'] ? _0x5ddde6['pannerAttr']['coneInnerAngle'] : this['_coneInnerAngle'],
                    'coneOuterAngle': 'undefined' !== typeof _0x5ddde6['pannerAttr']['coneOuterAngle'] ? _0x5ddde6['pannerAttr']['coneOuterAngle'] : this['_coneOuterAngle'],
                    'coneOuterGain': 'undefined' !== typeof _0x5ddde6['pannerAttr']['coneOuterGain'] ? _0x5ddde6['pannerAttr']['coneOuterGain'] : this['_coneOuterGain'],
                    'distanceModel': 'undefined' !== typeof _0x5ddde6['pannerAttr']['distanceModel'] ? _0x5ddde6['pannerAttr']['distanceModel'] : this['_distanceModel'],
                    'maxDistance': 'undefined' !== typeof _0x5ddde6['pannerAttr']['maxDistance'] ? _0x5ddde6['pannerAttr']['maxDistance'] : this['_maxDistance'],
                    'refDistance': 'undefined' !== typeof _0x5ddde6['pannerAttr']['refDistance'] ? _0x5ddde6['pannerAttr']['refDistance'] : this['_refDistance'],
                    'rolloffFactor': 'undefined' !== typeof _0x5ddde6['pannerAttr']['rolloffFactor'] ? _0x5ddde6['pannerAttr']['rolloffFactor'] : this['_rolloffFactor'],
                    'panningModel': 'undefined' !== typeof _0x5ddde6['pannerAttr']['panningModel'] ? _0x5ddde6['pannerAttr']['panningModel'] : this['_panningModel']
                });
                else return (_0x47dd2f = this['_soundById'](parseInt(_0x47dd2f[0x0], 0xa))) ? _0x47dd2f['_pannerAttr'] : this['_pannerAttr'];
            } else 0x2 === _0x47dd2f['length'] && (_0x5ddde6 = _0x47dd2f[0x0], _0x4c9b59 = parseInt(_0x47dd2f[0x1], 0xa));
            _0x4c9b59 = this['_getSoundIds'](_0x4c9b59);
            for (var _0x38aef9 = 0x0; _0x38aef9 < _0x4c9b59['length']; _0x38aef9++)
                if (_0x47dd2f = this['_soundById'](_0x4c9b59[_0x38aef9])) {
                    var _0x260100 = _0x47dd2f['_pannerAttr'],
                        _0x260100 = {
                            'coneInnerAngle': 'undefined' !== typeof _0x5ddde6['coneInnerAngle'] ? _0x5ddde6['coneInnerAngle'] : _0x260100['coneInnerAngle'],
                            'coneOuterAngle': 'undefined' !== typeof _0x5ddde6['coneOuterAngle'] ? _0x5ddde6['coneOuterAngle'] : _0x260100['coneOuterAngle'],
                            'coneOuterGain': 'undefined' !== typeof _0x5ddde6['coneOuterGain'] ? _0x5ddde6['coneOuterGain'] : _0x260100['coneOuterGain'],
                            'distanceModel': 'undefined' !== typeof _0x5ddde6['distanceModel'] ? _0x5ddde6['distanceModel'] : _0x260100['distanceModel'],
                            'maxDistance': 'undefined' !== typeof _0x5ddde6['maxDistance'] ? _0x5ddde6['maxDistance'] : _0x260100['maxDistance'],
                            'refDistance': 'undefined' !== typeof _0x5ddde6['refDistance'] ? _0x5ddde6['refDistance'] : _0x260100['refDistance'],
                            'rolloffFactor': 'undefined' !== typeof _0x5ddde6['rolloffFactor'] ? _0x5ddde6['rolloffFactor'] : _0x260100['rolloffFactor'],
                            'panningModel': 'undefined' !== typeof _0x5ddde6['panningModel'] ? _0x5ddde6['panningModel'] : _0x260100['panningModel']
                        },
                        _0x4ec72a = _0x47dd2f['_panner'];
                    _0x4ec72a ? (_0x4ec72a['coneInnerAngle'] = _0x260100['coneInnerAngle'], _0x4ec72a['coneOuterAngle'] = _0x260100['coneOuterAngle'], _0x4ec72a['coneOuterGain'] = _0x260100['coneOuterGain'], _0x4ec72a['distanceModel'] = _0x260100['distanceModel'], _0x4ec72a['maxDistance'] = _0x260100['maxDistance'], _0x4ec72a['refDistance'] = _0x260100['refDistance'], _0x4ec72a['rolloffFactor'] = _0x260100['rolloffFactor'], _0x4ec72a['panningModel'] = _0x260100['panningModel']) : (_0x47dd2f['_pos'] || (_0x47dd2f['_pos'] = this['_pos'] || [0x0, 0x0, -0.5]), _0x102443(_0x47dd2f, 'spatial'));
                }
            return this;
        };
        var _0x135b2a = Sound['prototype']['init'];
        Sound['prototype']['init'] = function() {
            var _0xc22afe = this['_parent'];
            this['_orientation'] = _0xc22afe['_orientation'], this['_stereo'] = _0xc22afe['_stereo'], this['_pos'] = _0xc22afe['_pos'], this['_pannerAttr'] = _0xc22afe['_pannerAttr'], _0x135b2a['call'](this), this['_stereo'] ? _0xc22afe['stereo'](this['_stereo']) : this['_pos'] && _0xc22afe['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']);
        };
        var _0x43a354 = Sound['prototype']['reset'];
        Sound['prototype']['reset'] = function() {
            var _0x4e6bea = this['_parent'];
            return this['_orientation'] = _0x4e6bea['_orientation'], this['_stereo'] = _0x4e6bea['_stereo'], this['_pos'] = _0x4e6bea['_pos'], this['_pannerAttr'] = _0x4e6bea['_pannerAttr'], this['_stereo'] ? _0x4e6bea['stereo'](this['_stereo']) : this['_pos'] ? _0x4e6bea['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']) : this['_panner'] && (this['_panner']['disconnect'](0x0), this['_panner'] = void 0x0, _0x4e6bea['_refreshBuffer'](this)), _0x43a354['call'](this);
        };
        var _0x102443 = function(_0x42abca, _0x56d6c7) {
            'spatial' === (_0x56d6c7 || 'spatial') ? (_0x42abca['_panner'] = Howler['ctx']['createPanner'](), _0x42abca['_panner']['coneInnerAngle'] = _0x42abca['_pannerAttr']['coneInnerAngle'], _0x42abca['_panner']['coneOuterAngle'] = _0x42abca['_pannerAttr']['coneOuterAngle'], _0x42abca['_panner']['coneOuterGain'] = _0x42abca['_pannerAttr']['coneOuterGain'], _0x42abca['_panner']['distanceModel'] = _0x42abca['_pannerAttr']['distanceModel'], _0x42abca['_panner']['maxDistance'] = _0x42abca['_pannerAttr']['maxDistance'], _0x42abca['_panner']['refDistance'] = _0x42abca['_pannerAttr']['refDistance'], _0x42abca['_panner']['rolloffFactor'] = _0x42abca['_pannerAttr']['rolloffFactor'], _0x42abca['_panner']['panningModel'] = _0x42abca['_pannerAttr']['panningModel'], 'undefined' !== typeof _0x42abca['_panner']['positionX'] ? (_0x42abca['_panner']['positionX']['setValueAtTime'](_0x42abca['_pos'][0x0], Howler['ctx']['currentTime']), _0x42abca['_panner']['positionY']['setValueAtTime'](_0x42abca['_pos'][0x1], Howler['ctx']['currentTime']), _0x42abca['_panner']['positionZ']['setValueAtTime'](_0x42abca['_pos'][0x2], Howler['ctx']['currentTime'])) : _0x42abca['_panner']['setPosition'](_0x42abca['_pos'][0x0], _0x42abca['_pos'][0x1], _0x42abca['_pos'][0x2]), 'undefined' !== typeof _0x42abca['_panner']['orientationX'] ? (_0x42abca['_panner']['orientationX']['setValueAtTime'](_0x42abca['_orientation'][0x0], Howler['ctx']['currentTime']), _0x42abca['_panner']['orientationY']['setValueAtTime'](_0x42abca['_orientation'][0x1], Howler['ctx']['currentTime']), _0x42abca['_panner']['orientationZ']['setValueAtTime'](_0x42abca['_orientation'][0x2], Howler['ctx']['currentTime'])) : _0x42abca['_panner']['setOrientation'](_0x42abca['_orientation'][0x0], _0x42abca['_orientation'][0x1], _0x42abca['_orientation'][0x2])) : (_0x42abca['_panner'] = Howler['ctx']['createStereoPanner'](), _0x42abca['_panner']['pan']['setValueAtTime'](_0x42abca['_stereo'], Howler['ctx']['currentTime'])), _0x42abca['_panner']['connect'](_0x42abca['_node']), _0x42abca['_paused'] || _0x42abca['_parent']['pause'](_0x42abca['_id'], !0x0)['play'](_0x42abca['_id'], !0x0);
        };
    }()), ! function(_0x21320a, _0x1d8b60) {
        'object' == typeof exports && 'undefined' != typeof module ? _0x1d8b60() : 'function' == typeof define && define['amd'] ? define(_0x1d8b60) : _0x1d8b60();
    }(0x0, function() {
        function _0x15e62c(_0x28b56f) {
            var _0x212d49 = this['constructor'];
            return this['then'](function(_0x7d8a5) {
                return _0x212d49['resolve'](_0x28b56f())['then'](function() {
                    return _0x7d8a5;
                });
            }, function(_0x1aa3d5) {
                return _0x212d49['resolve'](_0x28b56f())['then'](function() {
                    return _0x212d49['reject'](_0x1aa3d5);
                });
            });
        }

        function _0x8fed7a() {}

        function _0x2f51d5(_0x1c987f) {
            if (!(this instanceof _0x2f51d5)) throw new TypeError('Promises\x20must\x20be\x20constructed\x20via\x20new');
            if ('function' != typeof _0x1c987f) throw new TypeError('not\x20a\x20function');
            this['_state'] = 0x0, this['_handled'] = !0x1, this['_value'] = void 0x0, this['_deferreds'] = [], _0x16db71(_0x1c987f, this);
        }

        function _0x445f54(_0x3a0506, _0x412145) {
            for (; 0x3 === _0x3a0506['_state'];) _0x3a0506 = _0x3a0506['_value'];
            0x0 !== _0x3a0506['_state'] ? (_0x3a0506['_handled'] = !0x0, _0x2f51d5['_immediateFn'](function() {
                var _0x250467 = 0x1 === _0x3a0506['_state'] ? _0x412145['onFulfilled'] : _0x412145['onRejected'];
                if (null !== _0x250467) {
                    var _0x12f297;
                    try {
                        _0x12f297 = _0x250467(_0x3a0506['_value']);
                    } catch (_0x422970) {
                        return void _0x232ec2(_0x412145['promise'], _0x422970);
                    }
                    _0x520060(_0x412145['promise'], _0x12f297);
                } else(0x1 === _0x3a0506['_state'] ? _0x520060 : _0x232ec2)(_0x412145['promise'], _0x3a0506['_value']);
            })) : _0x3a0506['_deferreds']['push'](_0x412145);
        }

        function _0x520060(_0x31481a, _0x44683f) {
            try {
                if (_0x44683f === _0x31481a) throw new TypeError('A\x20promise\x20cannot\x20be\x20resolved\x20with\x20itself.');
                if (_0x44683f && ('object' == typeof _0x44683f || 'function' == typeof _0x44683f)) {
                    var _0x299b91 = _0x44683f['then'];
                    if (_0x44683f instanceof _0x2f51d5) return _0x31481a['_state'] = 0x3, _0x31481a['_value'] = _0x44683f, void _0x750096(_0x31481a);
                    if ('function' == typeof _0x299b91) return void _0x16db71(function() {
                        _0x299b91['apply'](_0x44683f, arguments);
                    }, _0x31481a);
                }
                _0x31481a['_state'] = 0x1, _0x31481a['_value'] = _0x44683f, _0x750096(_0x31481a);
            } catch (_0x3bc834) {
                _0x232ec2(_0x31481a, _0x3bc834);
            }
        }

        function _0x232ec2(_0x4fc362, _0x31f40e) {
            _0x4fc362['_state'] = 0x2, _0x4fc362['_value'] = _0x31f40e, _0x750096(_0x4fc362);
        }

        function _0x750096(_0x39f99e) {
            0x2 === _0x39f99e['_state'] && 0x0 === _0x39f99e['_deferreds']['length'] && _0x2f51d5['_immediateFn'](function() {
                _0x39f99e['_handled'] || _0x2f51d5['_unhandledRejectionFn'](_0x39f99e['_value']);
            });
            for (var _0x36c789 = 0x0, _0x1709da = _0x39f99e['_deferreds']['length']; _0x1709da > _0x36c789; _0x36c789++) _0x445f54(_0x39f99e, _0x39f99e['_deferreds'][_0x36c789]);
            _0x39f99e['_deferreds'] = null;
        }

        function _0x16db71(_0x44f755, _0x7d4fb0) {
            var _0x282e4d = !0x1;
            try {
                _0x44f755(function(_0x283354) {
                    _0x282e4d || (_0x282e4d = !0x0, _0x520060(_0x7d4fb0, _0x283354));
                }, function(_0x48331e) {
                    _0x282e4d || (_0x282e4d = !0x0, _0x232ec2(_0x7d4fb0, _0x48331e));
                });
            } catch (_0x4d11bc) {
                _0x282e4d || (_0x282e4d = !0x0, _0x232ec2(_0x7d4fb0, _0x4d11bc));
            }
        }
        var _0x4f1e0e = setTimeout;
        _0x2f51d5['prototype']['catch'] = function(_0x2a1587) {
            return this['then'](null, _0x2a1587);
        }, _0x2f51d5['prototype']['then'] = function(_0x594907, _0x16c753) {
            var _0x3b5f22 = new this['constructor'](_0x8fed7a);
            return _0x445f54(this, new function(_0x390991, _0x151655, _0x448bc7) {
                this['onFulfilled'] = 'function' == typeof _0x390991 ? _0x390991 : null, this['onRejected'] = 'function' == typeof _0x151655 ? _0x151655 : null, this['promise'] = _0x448bc7;
            }(_0x594907, _0x16c753, _0x3b5f22)), _0x3b5f22;
        }, _0x2f51d5['prototype']['finally'] = _0x15e62c, _0x2f51d5['all'] = function(_0x409148) {
            return new _0x2f51d5(function(_0x25c5af, _0x4c0140) {
                function _0x59d6ab(_0x4aa3a9, _0xc8ae4d) {
                    try {
                        if (_0xc8ae4d && ('object' == typeof _0xc8ae4d || 'function' == typeof _0xc8ae4d)) {
                            var _0x1a3ba2 = _0xc8ae4d['then'];
                            if ('function' == typeof _0x1a3ba2) return void _0x1a3ba2['call'](_0xc8ae4d, function(_0x2de8a0) {
                                _0x59d6ab(_0x4aa3a9, _0x2de8a0);
                            }, _0x4c0140);
                        }
                        _0x2e9c9e[_0x4aa3a9] = _0xc8ae4d, 0x0 == --_0x424da8 && _0x25c5af(_0x2e9c9e);
                    } catch (_0x44e69e) {
                        _0x4c0140(_0x44e69e);
                    }
                }
                if (!_0x409148 || 'undefined' == typeof _0x409148['length']) throw new TypeError('Promise.all\x20accepts\x20an\x20array');
                var _0x2e9c9e = Array['prototype']['slice']['call'](_0x409148);
                if (0x0 === _0x2e9c9e['length']) return _0x25c5af([]);
                for (var _0x424da8 = _0x2e9c9e['length'], _0x45b2a7 = 0x0; _0x2e9c9e['length'] > _0x45b2a7; _0x45b2a7++) _0x59d6ab(_0x45b2a7, _0x2e9c9e[_0x45b2a7]);
            });
        }, _0x2f51d5['resolve'] = function(_0x28ff45) {
            return _0x28ff45 && 'object' == typeof _0x28ff45 && _0x28ff45['constructor'] === _0x2f51d5 ? _0x28ff45 : new _0x2f51d5(function(_0x57d0f9) {
                _0x57d0f9(_0x28ff45);
            });
        }, _0x2f51d5['reject'] = function(_0x563aae) {
            return new _0x2f51d5(function(_0x4d5640, _0x15e017) {
                _0x15e017(_0x563aae);
            });
        }, _0x2f51d5['race'] = function(_0xe0adda) {
            return new _0x2f51d5(function(_0x59d1ca, _0x322228) {
                for (var _0x597891 = 0x0, _0x938aa3 = _0xe0adda['length']; _0x938aa3 > _0x597891; _0x597891++) _0xe0adda[_0x597891]['then'](_0x59d1ca, _0x322228);
            });
        }, _0x2f51d5['_immediateFn'] = 'function' == typeof setImmediate && function(_0x53bbd5) {
            setImmediate(_0x53bbd5);
        } || function(_0x4a107a) {
            _0x4f1e0e(_0x4a107a, 0x0);
        }, _0x2f51d5['_unhandledRejectionFn'] = function(_0x11c79a) {
            void 0x0 !== console && console && console['warn']('Possible\x20Unhandled\x20Promise\x20Rejection:', _0x11c79a);
        };
        var _0x39b48c = (function() {
            if ('undefined' != typeof self) return self;
            if ('undefined' != typeof window) return window;
            if ('undefined' != typeof global) return global;
            throw Error('unable\x20to\x20locate\x20global\x20object');
        }());
        'Promise' in _0x39b48c ? _0x39b48c['Promise']['prototype']['finally'] || (_0x39b48c['Promise']['prototype']['finally'] = _0x15e62c) : _0x39b48c['Promise'] = _0x2f51d5;
    }), (function() {
        function _0x4829c9(_0x466f26, _0x9dc1) {
            document['addEventListener'] ? _0x466f26['addEventListener']('scroll', _0x9dc1, !0x1) : _0x466f26['attachEvent']('scroll', _0x9dc1);
        }

        function _0x5de6dc(_0x2ed3c3) {
            this['a'] = document['createElement']('div'), this['a']['setAttribute']('aria-hidden', 'true'), this['a']['appendChild'](document['createTextNode'](_0x2ed3c3)), this['b'] = document['createElement']('span'), this['c'] = document['createElement']('span'), this['h'] = document['createElement']('span'), this['f'] = document['createElement']('span'), this['g'] = -0x1, this['b']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this['c']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this['f']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this['h']['style']['cssText'] = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this['b']['appendChild'](this['h']), this['c']['appendChild'](this['f']), this['a']['appendChild'](this['b']), this['a']['appendChild'](this['c']);
        }

        function _0x4fbf27(_0x4b7c5d, _0x3a196e) {
            _0x4b7c5d['a']['style']['cssText'] = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x3a196e + ';';
        }

        function _0x407a4b(_0x3f6f50) {
            var _0x109834 = _0x3f6f50['a']['offsetWidth'],
                _0xadb63e = _0x109834 + 0x64;
            return _0x3f6f50['f']['style']['width'] = _0xadb63e + 'px', _0x3f6f50['c']['scrollLeft'] = _0xadb63e, _0x3f6f50['b']['scrollLeft'] = _0x3f6f50['b']['scrollWidth'] + 0x64, _0x3f6f50['g'] !== _0x109834 ? (_0x3f6f50['g'] = _0x109834, !0x0) : !0x1;
        }

        function _0x2e78f3(_0x41fe9d, _0x333f94) {
            function _0x46c757() {
                var _0x3324cf = _0x186e5d;
                _0x407a4b(_0x3324cf) && _0x3324cf['a']['parentNode'] && _0x333f94(_0x3324cf['g']);
            }
            var _0x186e5d = _0x41fe9d;
            _0x4829c9(_0x41fe9d['b'], _0x46c757), _0x4829c9(_0x41fe9d['c'], _0x46c757), _0x407a4b(_0x41fe9d);
        }

        function _0x5b9379(_0x20333b, _0x11cdd9) {
            var _0x5eb996 = _0x11cdd9 || {};
            this['family'] = _0x20333b, this['style'] = _0x5eb996['style'] || 'normal', this['weight'] = _0x5eb996['weight'] || 'normal', this['stretch'] = _0x5eb996['stretch'] || 'normal';
        }

        function _0x23e1f2() {
            return null === _0x32f9e6 && (_0x32f9e6 = !!document['fonts']), _0x32f9e6;
        }

        function _0x8395f6() {
            if (null === _0x5aa6d2) {
                var _0x2f850f = document['createElement']('div');
                try {
                    _0x2f850f['style']['font'] = 'condensed\x20100px\x20sans-serif';
                } catch (_0x2671a3) {}
                _0x5aa6d2 = '' !== _0x2f850f['style']['font'];
            }
            return _0x5aa6d2;
        }

        function _0x1edaec(_0xecba29, _0x508895) {
            return [_0xecba29['style'], _0xecba29['weight'], _0x8395f6() ? _0xecba29['stretch'] : '', '100px', _0x508895]['join']('\x20');
        }
        var _0x5e11fb = null,
            _0x5358b = null,
            _0x5aa6d2 = null,
            _0x32f9e6 = null;
        _0x5b9379['prototype']['load'] = function(_0x481226, _0x470008) {
            var _0x1756ca = this,
                _0x5e605e = _0x481226 || 'BESbswy',
                _0x23e7b1 = 0x0,
                _0x1fef80 = _0x470008 || 0xbb8,
                _0x2f50f0 = new Date()['getTime']();
            return new Promise(function(_0x586c9e, _0x8efe8) {
                var _0x1f9c42;
                if (_0x1f9c42 = _0x23e1f2()) null === _0x5358b && (_0x23e1f2() && /Apple/ ['test'](window['navigator']['vendor']) ? (_0x1f9c42 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/ ['exec'](window['navigator']['userAgent']), _0x5358b = !!_0x1f9c42 && 0x25b > parseInt(_0x1f9c42[0x1], 0xa)) : _0x5358b = !0x1), _0x1f9c42 = !_0x5358b;
                if (_0x1f9c42) {
                    _0x1f9c42 = new Promise(function(_0x5cf959, _0x549554) {
                        function _0x353f9a() {
                            new Date()['getTime']() - _0x2f50f0 >= _0x1fef80 ? _0x549554(Error('' + _0x1fef80 + 'ms\x20timeout\x20exceeded')) : document['fonts']['load'](_0x1edaec(_0x1756ca, '\x22' + _0x1756ca['family'] + '\x22'), _0x5e605e)['then'](function(_0x52afae) {
                                0x1 <= _0x52afae['length'] ? _0x5cf959() : setTimeout(_0x353f9a, 0x19);
                            }, _0x549554);
                        }
                        _0x353f9a();
                    });
                    var _0xaf0d29 = new Promise(function(_0xc884a3, _0x4227e2) {
                        _0x23e7b1 = setTimeout(function() {
                            _0x4227e2(Error('' + _0x1fef80 + 'ms\x20timeout\x20exceeded'));
                        }, _0x1fef80);
                    });
                    Promise['race']([_0xaf0d29, _0x1f9c42])['then'](function() {
                        clearTimeout(_0x23e7b1), _0x586c9e(_0x1756ca);
                    }, _0x8efe8);
                } else {
                    var _0x55eade = function() {
                        function _0x1cd9c6() {
                            var _0x41b8d2;
                            if (_0x41b8d2 = -0x1 != _0x25763b && -0x1 != _0x383256 || -0x1 != _0x25763b && -0x1 != _0x21cfb0 || -0x1 != _0x383256 && -0x1 != _0x21cfb0)(_0x41b8d2 = _0x25763b != _0x383256 && _0x25763b != _0x21cfb0 && _0x383256 != _0x21cfb0) || (null === _0x5e11fb && (_0x41b8d2 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/ ['exec'](window['navigator']['userAgent']), _0x5e11fb = !!_0x41b8d2 && (0x218 > parseInt(_0x41b8d2[0x1], 0xa) || 0x218 === parseInt(_0x41b8d2[0x1], 0xa) && 0xb >= parseInt(_0x41b8d2[0x2], 0xa))), _0x41b8d2 = _0x5e11fb && (_0x25763b == _0x20dc0f && _0x383256 == _0x20dc0f && _0x21cfb0 == _0x20dc0f || _0x25763b == _0x17d136 && _0x383256 == _0x17d136 && _0x21cfb0 == _0x17d136 || _0x25763b == _0x106302 && _0x383256 == _0x106302 && _0x21cfb0 == _0x106302)), _0x41b8d2 = !_0x41b8d2;
                            _0x41b8d2 && (_0xb2610b['parentNode'] && _0xb2610b['parentNode']['removeChild'](_0xb2610b), clearTimeout(_0x23e7b1), _0x586c9e(_0x1756ca));
                        }

                        function _0x1b397e() {
                            if (new Date()['getTime']() - _0x2f50f0 >= _0x1fef80) _0xb2610b['parentNode'] && _0xb2610b['parentNode']['removeChild'](_0xb2610b), _0x8efe8(Error('' + _0x1fef80 + 'ms\x20timeout\x20exceeded'));
                            else {
                                var _0x5cf40f = document['hidden'];
                                if (!0x0 === _0x5cf40f || void 0x0 === _0x5cf40f) _0x25763b = _0x4eb76e['a']['offsetWidth'], _0x383256 = _0x19731d['a']['offsetWidth'], _0x21cfb0 = _0x1bf4cd['a']['offsetWidth'], _0x1cd9c6();
                                _0x23e7b1 = setTimeout(_0x1b397e, 0x32);
                            }
                        }
                        var _0x4eb76e = new _0x5de6dc(_0x5e605e),
                            _0x19731d = new _0x5de6dc(_0x5e605e),
                            _0x1bf4cd = new _0x5de6dc(_0x5e605e),
                            _0x25763b = -0x1,
                            _0x383256 = -0x1,
                            _0x21cfb0 = -0x1,
                            _0x20dc0f = -0x1,
                            _0x17d136 = -0x1,
                            _0x106302 = -0x1,
                            _0xb2610b = document['createElement']('div');
                        _0xb2610b['dir'] = 'ltr', _0x4fbf27(_0x4eb76e, _0x1edaec(_0x1756ca, 'sans-serif')), _0x4fbf27(_0x19731d, _0x1edaec(_0x1756ca, 'serif')), _0x4fbf27(_0x1bf4cd, _0x1edaec(_0x1756ca, 'monospace')), _0xb2610b['appendChild'](_0x4eb76e['a']), _0xb2610b['appendChild'](_0x19731d['a']), _0xb2610b['appendChild'](_0x1bf4cd['a']), document['body']['appendChild'](_0xb2610b), _0x20dc0f = _0x4eb76e['a']['offsetWidth'], _0x17d136 = _0x19731d['a']['offsetWidth'], _0x106302 = _0x1bf4cd['a']['offsetWidth'], _0x1b397e(), _0x2e78f3(_0x4eb76e, function(_0x27119d) {
                            _0x25763b = _0x27119d, _0x1cd9c6();
                        }), _0x4fbf27(_0x4eb76e, _0x1edaec(_0x1756ca, '\x22' + _0x1756ca['family'] + '\x22,sans-serif')), _0x2e78f3(_0x19731d, function(_0x5e7f35) {
                            _0x383256 = _0x5e7f35, _0x1cd9c6();
                        }), _0x4fbf27(_0x19731d, _0x1edaec(_0x1756ca, '\x22' + _0x1756ca['family'] + '\x22,serif')), _0x2e78f3(_0x1bf4cd, function(_0x30964f) {
                            _0x21cfb0 = _0x30964f, _0x1cd9c6();
                        }), _0x4fbf27(_0x1bf4cd, _0x1edaec(_0x1756ca, '\x22' + _0x1756ca['family'] + '\x22,monospace'));
                    };
                    document['body'] ? _0x55eade() : document['addEventListener'] ? document['addEventListener']('DOMContentLoaded', function _0x363ef2() {
                        document['removeEventListener']('DOMContentLoaded', _0x363ef2), _0x55eade();
                    }) : document['attachEvent']('onreadystatechange', function _0x4109e3() {
                        if ('interactive' == document['readyState'] || 'complete' == document['readyState']) document['detachEvent']('onreadystatechange', _0x4109e3), _0x55eade();
                    });
                }
            });
        }, 'object' === typeof module ? module['exports'] = _0x5b9379 : (window['FontFaceObserver'] = _0x5b9379, window['FontFaceObserver']['prototype']['load'] = _0x5b9379['prototype']['load']);
    }()),
    function(_0x2ae94b) {
        var _0x4cdcf4 = (function() {
                var _0x1d98e2 = !![];
                return function(_0x57cd68, _0x39acfe) {
                    var _0x55324d = _0x1d98e2 ? function() {
                        if (_0x39acfe) {
                            var _0x56f4cb = _0x39acfe['apply'](_0x57cd68, arguments);
                            return _0x39acfe = null, _0x56f4cb;
                        }
                    } : function() {};
                    return _0x1d98e2 = ![], _0x55324d;
                };
            }()),
            _0x1f0165 = _0x4cdcf4(this, function() {
                var _0x32bab1 = function() {
                        var _0x929efe;
                        try {
                            _0x929efe = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                        } catch (_0x37a200) {
                            _0x929efe = window;
                        }
                        return _0x929efe;
                    },
                    _0x4cc0d6 = _0x32bab1();
            });
        _0x1f0165();
        var _0x58897e = (function() {
                var _0x1d109d = !![];
                return function(_0x8b7189, _0x2f7481) {
                    var _0x42b5f1 = _0x1d109d ? function() {
                        if (_0x2f7481) {
                            var _0x10830c = _0x2f7481['apply'](_0x8b7189, arguments);
                            return _0x2f7481 = null, _0x10830c;
                        }
                    } : function() {};
                    return _0x1d109d = ![], _0x42b5f1;
                };
            }()),
            _0x491a61 = _0x58897e(this, function() {
                var _0x4bb8a4 = function() {
                        var _0x3d3a3c;
                        try {
                            _0x3d3a3c = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                        } catch (_0x14ce37) {
                            _0x3d3a3c = window;
                        }
                        return _0x3d3a3c;
                    },
                    _0x2425fb = _0x4bb8a4(),
                    _0x1fbd52 = _0x2425fb['console'] = _0x2425fb['console'] || {},
                    _0x6e84e0 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
                for (var _0x4051e2 = 0x0; _0x4051e2 < _0x6e84e0['length']; _0x4051e2++) {
                    var _0x4124b6 = _0x58897e['constructor']['prototype']['bind'](_0x58897e),
                        _0x8322df = _0x6e84e0[_0x4051e2],
                        _0x569454 = _0x1fbd52[_0x8322df] || _0x4124b6;
                    _0x4124b6['__proto__'] = _0x58897e['bind'](_0x58897e), _0x4124b6['toString'] = _0x569454['toString']['bind'](_0x569454), _0x1fbd52[_0x8322df] = _0x4124b6;
                }
            });
        _0x491a61(), Number['prototype']['map'] = function(_0x40f322, _0x5cea43, _0xba70bb, _0x1a0b1d) {
            return _0xba70bb + (_0x1a0b1d - _0xba70bb) * ((this - _0x40f322) / (_0x5cea43 - _0x40f322));
        }, Number['prototype']['limit'] = function(_0x3bf4b0, _0x22d002) {
            return Math['min'](_0x22d002, Math['max'](_0x3bf4b0, this));
        }, Number['prototype']['round'] = function(_0x27b2c9) {
            return _0x27b2c9 = Math['pow'](0xa, _0x27b2c9 || 0x0), Math['round'](this * _0x27b2c9) / _0x27b2c9;
        }, Number['prototype']['floor'] = function() {
            return Math['floor'](this);
        }, Number['prototype']['ceil'] = function() {
            return Math['ceil'](this);
        }, Number['prototype']['toInt'] = function() {
            return this | 0x0;
        }, Number['prototype']['toRad'] = function() {
            return this / 0xb4 * Math['PI'];
        }, Number['prototype']['toDeg'] = function() {
            return 0xb4 * this / Math['PI'];
        }, Object['defineProperty'](Array['prototype'], 'erase', {
            'value': function(_0x594614) {
                for (var _0x509cae = this['length']; _0x509cae--;) this[_0x509cae] === _0x594614 && this['splice'](_0x509cae, 0x1);
                return this;
            }
        }), Object['defineProperty'](Array['prototype'], 'random', {
            'value': function() {
                return this[Math['floor'](Math['random']() * this['length'])];
            }
        }), Function['prototype']['bind'] = Function['prototype']['bind'] || function(_0x5dd865) {
            if ('function' !== typeof this) throw new TypeError('Function.prototype.bind\x20-\x20what\x20is\x20trying\x20to\x20be\x20bound\x20is\x20not\x20callable');
            var _0x2e3a93 = Array['prototype']['slice']['call'](arguments, 0x1),
                _0x1cb346 = this,
                _0xfbdcf3 = function() {},
                _0x148f7a = function() {
                    return _0x1cb346['apply'](this instanceof _0xfbdcf3 && _0x5dd865 ? this : _0x5dd865, _0x2e3a93['concat'](Array['prototype']['slice']['call'](arguments)));
                };
            return _0xfbdcf3['prototype'] = this['prototype'], _0x148f7a['prototype'] = new _0xfbdcf3(), _0x148f7a;
        }, _0x2ae94b['ig'] = {
            'game': null,
            'debug': null,
            'version': '1.24',
            'global': _0x2ae94b,
            'modules': {},
            'resources': [],
            'ready': !0x1,
            'baked': !0x1,
            'nocache': '',
            'ua': {},
            'prefix': _0x2ae94b['ImpactPrefix'] || '',
            'lib': 'lib/',
            '_current': null,
            '_loadQueue': [],
            '_waitForOnload': 0x0,
            '$': function(_0xefad3b) {
                return '#' == _0xefad3b['charAt'](0x0) ? document['getElementById'](_0xefad3b['substr'](0x1)) : document['getElementsByTagName'](_0xefad3b);
            },
            '$new': function(_0x3c26c6) {
                return document['createElement'](_0x3c26c6);
            },
            'copy': function(_0x2c6574) {
                if (!_0x2c6574 || 'object' != typeof _0x2c6574 || _0x2c6574 instanceof HTMLElement || _0x2c6574 instanceof ig['Class']) return _0x2c6574;
                if (_0x2c6574 instanceof Array) {
                    for (var _0x3bd3e9 = [], _0x3b923a = 0x0, _0x1a83d8 = _0x2c6574['length']; _0x3b923a < _0x1a83d8; _0x3b923a++) _0x3bd3e9[_0x3b923a] = ig['copy'](_0x2c6574[_0x3b923a]);
                } else {
                    for (_0x3b923a in (_0x3bd3e9 = {}, _0x2c6574)) _0x3bd3e9[_0x3b923a] = ig['copy'](_0x2c6574[_0x3b923a]);
                }
                return _0x3bd3e9;
            },
            'merge': function(_0x4c40ce, _0x16c1df) {
                for (var _0x46296b in _0x16c1df) {
                    var _0x718c45 = _0x16c1df[_0x46296b];
                    if ('object' != typeof _0x718c45 || _0x718c45 instanceof HTMLElement || _0x718c45 instanceof ig['Class'] || null === _0x718c45) _0x4c40ce[_0x46296b] = _0x718c45;
                    else {
                        if (!_0x4c40ce[_0x46296b] || 'object' != typeof _0x4c40ce[_0x46296b]) _0x4c40ce[_0x46296b] = _0x718c45 instanceof Array ? [] : {};
                        ig['merge'](_0x4c40ce[_0x46296b], _0x718c45);
                    }
                }
                return _0x4c40ce;
            },
            'ksort': function(_0x29eabd) {
                if (!_0x29eabd || 'object' != typeof _0x29eabd) return [];
                var _0x474a7b = [],
                    _0xc5d4fa = [],
                    _0x586cd1;
                for (_0x586cd1 in _0x29eabd) _0x474a7b['push'](_0x586cd1);
                _0x474a7b['sort']();
                for (_0x586cd1 = 0x0; _0x586cd1 < _0x474a7b['length']; _0x586cd1++) _0xc5d4fa['push'](_0x29eabd[_0x474a7b[_0x586cd1]]);
                return _0xc5d4fa;
            },
            'setVendorAttribute': function(_0x3365a6, _0x2ed494, _0x386a4c) {
                var _0x2f041b = _0x2ed494['charAt'](0x0)['toUpperCase']() + _0x2ed494['substr'](0x1);
                _0x3365a6[_0x2ed494] = _0x3365a6['ms' + _0x2f041b] = _0x3365a6['moz' + _0x2f041b] = _0x3365a6['webkit' + _0x2f041b] = _0x3365a6['o' + _0x2f041b] = _0x386a4c;
            },
            'getVendorAttribute': function(_0x23c1bc, _0x472c6d) {
                var _0x3c5cd1 = _0x472c6d['charAt'](0x0)['toUpperCase']() + _0x472c6d['substr'](0x1);
                return _0x23c1bc[_0x472c6d] || _0x23c1bc['ms' + _0x3c5cd1] || _0x23c1bc['moz' + _0x3c5cd1] || _0x23c1bc['webkit' + _0x3c5cd1] || _0x23c1bc['o' + _0x3c5cd1];
            },
            'normalizeVendorAttribute': function(_0x580c15, _0x4b94a7) {
                var _0x2d7bfc = ig['getVendorAttribute'](_0x580c15, _0x4b94a7);
                !_0x580c15[_0x4b94a7] && _0x2d7bfc && (_0x580c15[_0x4b94a7] = _0x2d7bfc);
            },
            'getImagePixels': function(_0x954681, _0x35c768, _0x1bcd28, _0x2f234e, _0x19b55f) {
                var _0x5a8332 = ig['$new']('canvas');
                _0x5a8332['width'] = _0x954681['width'], _0x5a8332['height'] = _0x954681['height'];
                var _0x2be882 = _0x5a8332['getContext']('2d');
                ig['System']['SCALE']['CRISP'](_0x5a8332, _0x2be882);
                var _0x3a743e = ig['getVendorAttribute'](_0x2be882, 'backingStorePixelRatio') || 0x1;
                ig['normalizeVendorAttribute'](_0x2be882, 'getImageDataHD');
                var _0x3b5e36 = _0x954681['width'] / _0x3a743e,
                    _0x2a35f6 = _0x954681['height'] / _0x3a743e;
                return _0x5a8332['width'] = Math['ceil'](_0x3b5e36), _0x5a8332['height'] = Math['ceil'](_0x2a35f6), _0x2be882['drawImage'](_0x954681, 0x0, 0x0, _0x3b5e36, _0x2a35f6), 0x1 === _0x3a743e ? _0x2be882['getImageData'](_0x35c768, _0x1bcd28, _0x2f234e, _0x19b55f) : _0x2be882['getImageDataHD'](_0x35c768, _0x1bcd28, _0x2f234e, _0x19b55f);
            },
            'module': function(_0x3a046f) {
                if (ig['_current']) throw 'Module\x20\x27' + ig['_current']['name'] + '\x27\x20defines\x20nothing';
                if (ig['modules'][_0x3a046f] && ig['modules'][_0x3a046f]['body']) throw 'Module\x20\x27' + _0x3a046f + '\x27\x20is\x20already\x20defined';
                return ig['_current'] = {
                    'name': _0x3a046f,
                    'requires': [],
                    'loaded': !0x1,
                    'body': null
                }, ig['modules'][_0x3a046f] = ig['_current'], ig['_loadQueue']['push'](ig['_current']), ig;
            },
            'requires': function() {
                return ig['_current']['requires'] = Array['prototype']['slice']['call'](arguments), ig;
            },
            'defines': function(_0x2a7e30) {
                ig['_current']['body'] = _0x2a7e30, ig['_current'] = null, ig['_initDOMReady']();
            },
            'addResource': function(_0x3125bc) {
                ig['resources']['push'](_0x3125bc);
            },
            'setNocache': function(_0x638088) {
                ig['nocache'] = _0x638088 ? '?' + Date['now']() : '';
            },
            'log': function() {},
            'assert': function() {},
            'show': function() {},
            'mark': function() {},
            '_loadScript': function(_0x2371a1, _0x4d3de6) {
                ig['modules'][_0x2371a1] = {
                    'name': _0x2371a1,
                    'requires': [],
                    'loaded': !0x1,
                    'body': null
                }, ig['_waitForOnload']++;
                var _0x3b1b09 = ig['prefix'] + ig['lib'] + _0x2371a1['replace'](/\./g, '/') + '.js' + ig['nocache'],
                    _0x57f4a6 = ig['$new']('script');
                _0x57f4a6['type'] = 'text/javascript', _0x57f4a6['src'] = _0x3b1b09, _0x57f4a6['onload'] = function() {
                    ig['_waitForOnload']--, ig['_execModules']();
                }, _0x57f4a6['onerror'] = function() {
                    throw 'Failed\x20to\x20load\x20module\x20' + _0x2371a1 + '\x20at\x20' + _0x3b1b09 + '\x20required\x20from\x20' + _0x4d3de6;
                }, ig['$']('head')[0x0]['appendChild'](_0x57f4a6);
            },
            '_execModules': function() {
                for (var _0x19331e = !0x1, _0x3b2a77 = 0x0; _0x3b2a77 < ig['_loadQueue']['length']; _0x3b2a77++) {
                    for (var _0x53c56a = ig['_loadQueue'][_0x3b2a77], _0x70f731 = !0x0, _0x522adb = 0x0; _0x522adb < _0x53c56a['requires']['length']; _0x522adb++) {
                        var _0x2cb1b6 = _0x53c56a['requires'][_0x522adb];
                        ig['modules'][_0x2cb1b6] ? ig['modules'][_0x2cb1b6]['loaded'] || (_0x70f731 = !0x1) : (_0x70f731 = !0x1, ig['_loadScript'](_0x2cb1b6, _0x53c56a['name']));
                    }
                    _0x70f731 && _0x53c56a['body'] && (ig['_loadQueue']['splice'](_0x3b2a77, 0x1), _0x53c56a['loaded'] = !0x0, _0x53c56a['body'](), _0x19331e = !0x0, _0x3b2a77--);
                }
                if (_0x19331e) ig['_execModules']();
                else {
                    if (!ig['baked'] && 0x0 == ig['_waitForOnload'] && 0x0 != ig['_loadQueue']['length']) {
                        _0x19331e = [];
                        for (_0x3b2a77 = 0x0; _0x3b2a77 < ig['_loadQueue']['length']; _0x3b2a77++) {
                            _0x70f731 = [], _0x2cb1b6 = ig['_loadQueue'][_0x3b2a77]['requires'];
                            for (_0x522adb = 0x0; _0x522adb < _0x2cb1b6['length']; _0x522adb++) _0x53c56a = ig['modules'][_0x2cb1b6[_0x522adb]], (!_0x53c56a || !_0x53c56a['loaded']) && _0x70f731['push'](_0x2cb1b6[_0x522adb]);
                            _0x19331e['push'](ig['_loadQueue'][_0x3b2a77]['name'] + '\x20(requires:\x20' + _0x70f731['join'](',\x20') + ')');
                        }
                        throw 'Unresolved\x20(or\x20circular?)\x20dependencies.\x20Most\x20likely\x20there\x27s\x20a\x20name/path\x20mismatch\x20for\x20one\x20of\x20the\x20listed\x20modules\x20or\x20a\x20previous\x20syntax\x20error\x20prevents\x20a\x20module\x20from\x20loading:\x0a' + _0x19331e['join']('\x0a');
                    }
                }
            },
            '_DOMReady': function() {
                if (!ig['modules']['dom.ready']['loaded']) {
                    if (!document['body']) return setTimeout(ig['_DOMReady'], 0xd);
                    ig['modules']['dom.ready']['loaded'] = !0x0, ig['_waitForOnload']--, ig['_execModules']();
                }
                return 0x0;
            },
            '_boot': function() {
                document['location']['href']['match'](/\?nocache/) && ig['setNocache'](!0x0), ig['ua']['pixelRatio'] = _0x2ae94b['devicePixelRatio'] || 0x1, ig['ua']['viewport'] = {
                    'width': _0x2ae94b['innerWidth'],
                    'height': _0x2ae94b['innerHeight']
                }, ig['ua']['screen'] = {
                    'width': _0x2ae94b['screen']['availWidth'] * ig['ua']['pixelRatio'],
                    'height': _0x2ae94b['screen']['availHeight'] * ig['ua']['pixelRatio']
                }, ig['ua']['iPhone'] = /iPhone|iPod/i ['test'](navigator['userAgent']), ig['ua']['iPhone4'] = ig['ua']['iPhone'] && 0x2 == ig['ua']['pixelRatio'], ig['ua']['iPad'] = /iPad/i ['test'](navigator['userAgent']), ig['ua']['android'] = /android/i ['test'](navigator['userAgent']), ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']), ig['ua']['iOS'] = ig['ua']['iPhone'] || ig['ua']['iPad'], ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['android'] || ig['ua']['winPhone'] || /mobile/i ['test'](navigator['userAgent']), ig['ua']['touchDevice'] = 'ontouchstart' in _0x2ae94b || _0x2ae94b['navigator']['msMaxTouchPoints'];
            },
            '_initDOMReady': function() {
                ig['modules']['dom.ready'] ? ig['_execModules']() : (ig['_boot'](), ig['modules']['dom.ready'] = {
                    'requires': [],
                    'loaded': !0x1,
                    'body': null
                }, ig['_waitForOnload']++, 'complete' === document['readyState'] ? ig['_DOMReady']() : (document['addEventListener']('DOMContentLoaded', ig['_DOMReady'], !0x1), _0x2ae94b['addEventListener']('load', ig['_DOMReady'], !0x1)));
            }
        }, ig['normalizeVendorAttribute'](_0x2ae94b, 'requestAnimationFrame');
        if (_0x2ae94b['requestAnimationFrame']) {
            var _0x4e271a = 0x1,
                _0x239ba3 = {};
            _0x2ae94b['ig']['setAnimation'] = function(_0x1e0d31) {
                var _0xe8fee6 = _0x4e271a++;
                _0x239ba3[_0xe8fee6] = !0x0;
                var _0x5cca6a = function() {
                    _0x239ba3[_0xe8fee6] && (_0x2ae94b['requestAnimationFrame'](_0x5cca6a), _0x1e0d31());
                };
                return _0x2ae94b['requestAnimationFrame'](_0x5cca6a), _0xe8fee6;
            }, _0x2ae94b['ig']['clearAnimation'] = function(_0x57fa2) {
                delete _0x239ba3[_0x57fa2];
            };
        } else _0x2ae94b['ig']['setAnimation'] = function(_0x45e529) {
            return _0x2ae94b['setInterval'](_0x45e529, 0x3e8 / 0x3c);
        }, _0x2ae94b['ig']['clearAnimation'] = function(_0x45c8e2) {
            _0x2ae94b['clearInterval'](_0x45c8e2);
        };
        var _0xc20439 = !0x1,
            _0x1adf2d = /xyz/ ['test'](function() {
                xyz;
            }) ? /\bparent\b/ : /.*/,
            _0x319c3f = 0x0;
        _0x2ae94b['ig']['Class'] = function() {};
        var _0xa97720 = function(_0x1ceb22) {
            var _0x154c65 = this['prototype'],
                _0x270e00 = {},
                _0x563e10;
            for (_0x563e10 in _0x1ceb22) 'function' == typeof _0x1ceb22[_0x563e10] && 'function' == typeof _0x154c65[_0x563e10] && _0x1adf2d['test'](_0x1ceb22[_0x563e10]) ? (_0x270e00[_0x563e10] = _0x154c65[_0x563e10], _0x154c65[_0x563e10] = function(_0x3e9832, _0x1dd158) {
                return function() {
                    var _0x380d8a = this['parent'];
                    this['parent'] = _0x270e00[_0x3e9832];
                    var _0x2028e0 = _0x1dd158['apply'](this, arguments);
                    return this['parent'] = _0x380d8a, _0x2028e0;
                };
            }(_0x563e10, _0x1ceb22[_0x563e10])) : _0x154c65[_0x563e10] = _0x1ceb22[_0x563e10];
        };
        _0x2ae94b['ig']['Class']['extend'] = function(_0x436036) {
            function _0x4a7007() {
                if (!_0xc20439) {
                    if (this['staticInstantiate']) {
                        var _0x2a4e5a = this['staticInstantiate']['apply'](this, arguments);
                        if (_0x2a4e5a) return _0x2a4e5a;
                    }
                    for (var _0x4f2660 in this) 'object' == typeof this[_0x4f2660] && (this[_0x4f2660] = ig['copy'](this[_0x4f2660]));
                    this['init'] && this['init']['apply'](this, arguments);
                }
                return this;
            }
            var _0x3b8269 = this['prototype'];
            _0xc20439 = !0x0;
            var _0x2e8e24 = new this();
            _0xc20439 = !0x1;
            for (var _0x275f47 in _0x436036) _0x2e8e24[_0x275f47] = 'function' == typeof _0x436036[_0x275f47] && 'function' == typeof _0x3b8269[_0x275f47] && _0x1adf2d['test'](_0x436036[_0x275f47]) ? function(_0x3fecb2, _0x1d692c) {
                return function() {
                    var _0x1fea96 = this['parent'];
                    this['parent'] = _0x3b8269[_0x3fecb2];
                    var _0x45dc1f = _0x1d692c['apply'](this, arguments);
                    return this['parent'] = _0x1fea96, _0x45dc1f;
                };
            }(_0x275f47, _0x436036[_0x275f47]) : _0x436036[_0x275f47];
            return _0x4a7007['prototype'] = _0x2e8e24, _0x4a7007['prototype']['constructor'] = _0x4a7007, _0x4a7007['extend'] = _0x2ae94b['ig']['Class']['extend'], _0x4a7007['inject'] = _0xa97720, _0x4a7007['classId'] = _0x2e8e24['classId'] = ++_0x319c3f, _0x4a7007;
        }, _0x2ae94b['ImpactMixin'] && ig['merge'](ig, _0x2ae94b['ImpactMixin']);
    }(window), ig['baked'] = !0x0, ig['module']('impact.image')['defines'](function() {
        ig['Image'] = ig['Class']['extend']({
            'data': null,
            'width': 0x0,
            'height': 0x0,
            'loaded': !0x1,
            'failed': !0x1,
            'loadCallback': null,
            'path': '',
            'staticInstantiate': function(_0xc80d4f) {
                return ig['Image']['cache'][_0xc80d4f] || null;
            },
            'init': function(_0x33e7bc) {
                this['path'] = _0x33e7bc, this['load']();
            },
            'load': function(_0x270ad9) {
                this['loaded'] ? _0x270ad9 && _0x270ad9(this['path'], !0x0) : (!this['loaded'] && ig['ready'] ? (this['loadCallback'] = _0x270ad9 || null, this['data'] = new Image(), this['data']['onload'] = this['onload']['bind'](this), this['data']['onerror'] = this['onerror']['bind'](this), this['data']['src'] = ig['prefix'] + this['path'] + ig['nocache']) : ig['addResource'](this), ig['Image']['cache'][this['path']] = this);
            },
            'reload': function() {
                this['loaded'] = !0x1, this['data'] = new Image(), this['data']['onload'] = this['onload']['bind'](this), this['data']['src'] = this['path'] + '?' + Date['now']();
            },
            'onload': function() {
                this['width'] = this['data']['width'], this['height'] = this['data']['height'], this['loaded'] = !0x0, 0x1 != ig['system']['scale'] && this['resize'](ig['system']['scale']), this['loadCallback'] && this['loadCallback'](this['path'], !0x0);
            },
            'onerror': function() {
                this['failed'] = !0x0, this['loadCallback'] && this['loadCallback'](this['path'], !0x1);
            },
            'resize': function(_0xd4e246) {
                var _0x5ac9b5 = ig['getImagePixels'](this['data'], 0x0, 0x0, this['width'], this['height']),
                    _0x2b5dfb = this['width'] * _0xd4e246,
                    _0x148f4c = this['height'] * _0xd4e246,
                    _0x431e47 = ig['$new']('canvas');
                _0x431e47['width'] = _0x2b5dfb, _0x431e47['height'] = _0x148f4c;
                for (var _0x1348d3 = _0x431e47['getContext']('2d'), _0x2ae592 = _0x1348d3['getImageData'](0x0, 0x0, _0x2b5dfb, _0x148f4c), _0x53e19c = 0x0; _0x53e19c < _0x148f4c; _0x53e19c++)
                    for (var _0x2ec0f5 = 0x0; _0x2ec0f5 < _0x2b5dfb; _0x2ec0f5++) {
                        var _0x5c882e = 0x4 * (Math['floor'](_0x53e19c / _0xd4e246) * this['width'] + Math['floor'](_0x2ec0f5 / _0xd4e246)),
                            _0x1cd9a8 = 0x4 * (_0x53e19c * _0x2b5dfb + _0x2ec0f5);
                        _0x2ae592['data'][_0x1cd9a8] = _0x5ac9b5['data'][_0x5c882e], _0x2ae592['data'][_0x1cd9a8 + 0x1] = _0x5ac9b5['data'][_0x5c882e + 0x1], _0x2ae592['data'][_0x1cd9a8 + 0x2] = _0x5ac9b5['data'][_0x5c882e + 0x2], _0x2ae592['data'][_0x1cd9a8 + 0x3] = _0x5ac9b5['data'][_0x5c882e + 0x3];
                    }
                _0x1348d3['putImageData'](_0x2ae592, 0x0, 0x0), this['data'] = _0x431e47;
            },
            'draw': function(_0x23838, _0x4c1245, _0xc14ef5, _0x5ef692, _0x6c54a6, _0x58b172) {
                if (this['loaded']) {
                    var _0x266baa = ig['system']['scale'];
                    _0x6c54a6 = (_0x6c54a6 ? _0x6c54a6 : this['width']) * _0x266baa, _0x58b172 = (_0x58b172 ? _0x58b172 : this['height']) * _0x266baa, ig['system']['context']['drawImage'](this['data'], _0xc14ef5 ? _0xc14ef5 * _0x266baa : 0x0, _0x5ef692 ? _0x5ef692 * _0x266baa : 0x0, _0x6c54a6, _0x58b172, ig['system']['getDrawPos'](_0x23838), ig['system']['getDrawPos'](_0x4c1245), _0x6c54a6, _0x58b172), ig['Image']['drawCount']++;
                }
            },
            'drawTile': function(_0x2e7150, _0x13e2c3, _0x51de51, _0x33790c, _0x26de61, _0xd1e97f, _0x18e2fc) {
                _0x26de61 = _0x26de61 ? _0x26de61 : _0x33790c;
                if (this['loaded'] && !(_0x33790c > this['width'] || _0x26de61 > this['height'])) {
                    var _0x24c275 = ig['system']['scale'],
                        _0x50c3b4 = Math['floor'](_0x33790c * _0x24c275),
                        _0x445135 = Math['floor'](_0x26de61 * _0x24c275),
                        _0x39bfc4 = _0xd1e97f ? -0x1 : 0x1,
                        _0x3ff901 = _0x18e2fc ? -0x1 : 0x1;
                    if (_0xd1e97f || _0x18e2fc) ig['system']['context']['save'](), ig['system']['context']['scale'](_0x39bfc4, _0x3ff901);
                    ig['system']['context']['drawImage'](this['data'], Math['floor'](_0x51de51 * _0x33790c) % this['width'] * _0x24c275, Math['floor'](_0x51de51 * _0x33790c / this['width']) * _0x26de61 * _0x24c275, _0x50c3b4, _0x445135, ig['system']['getDrawPos'](_0x2e7150) * _0x39bfc4 - (_0xd1e97f ? _0x50c3b4 : 0x0), ig['system']['getDrawPos'](_0x13e2c3) * _0x3ff901 - (_0x18e2fc ? _0x445135 : 0x0), _0x50c3b4, _0x445135), (_0xd1e97f || _0x18e2fc) && ig['system']['context']['restore'](), ig['Image']['drawCount']++;
                }
            }
        }), ig['Image']['drawCount'] = 0x0, ig['Image']['cache'] = {}, ig['Image']['reloadCache'] = function() {
            for (var _0x4f30b0 in ig['Image']['cache']) ig['Image']['cache'][_0x4f30b0]['reload']();
        };
    }), ig['baked'] = !0x0, ig['module']('impact.font')['requires']('impact.image')['defines'](function() {
        ig['Font'] = ig['Image']['extend']({
            'widthMap': [],
            'indices': [],
            'firstChar': 0x20,
            'alpha': 0x1,
            'letterSpacing': 0x1,
            'lineSpacing': 0x0,
            'onload': function(_0x15c01d) {
                this['_loadMetrics'](this['data']), this['parent'](_0x15c01d), this['height'] -= 0x2;
            },
            'widthForString': function(_0x18c17) {
                if (-0x1 !== _0x18c17['indexOf']('\x0a')) {
                    _0x18c17 = _0x18c17['split']('\x0a');
                    for (var _0x257466 = 0x0, _0x511190 = 0x0; _0x511190 < _0x18c17['length']; _0x511190++) _0x257466 = Math['max'](_0x257466, this['_widthForLine'](_0x18c17[_0x511190]));
                    return _0x257466;
                }
                return this['_widthForLine'](_0x18c17);
            },
            '_widthForLine': function(_0x2081c5) {
                for (var _0x3eeee4 = 0x0, _0x51d0b6 = 0x0; _0x51d0b6 < _0x2081c5['length']; _0x51d0b6++) _0x3eeee4 += this['widthMap'][_0x2081c5['charCodeAt'](_0x51d0b6) - this['firstChar']];
                return 0x0 < _0x2081c5['length'] && (_0x3eeee4 += this['letterSpacing'] * (_0x2081c5['length'] - 0x1)), _0x3eeee4;
            },
            'heightForString': function(_0x49068e) {
                return _0x49068e['split']('\x0a')['length'] * (this['height'] + this['lineSpacing']);
            },
            'draw': function(_0x214444, _0x336f6f, _0x5ed486, _0x5c43b8) {
                'string' != typeof _0x214444 && (_0x214444 = _0x214444['toString']());
                if (-0x1 !== _0x214444['indexOf']('\x0a')) {
                    _0x214444 = _0x214444['split']('\x0a');
                    for (var _0x16c4b0 = this['height'] + this['lineSpacing'], _0x542823 = 0x0; _0x542823 < _0x214444['length']; _0x542823++) this['draw'](_0x214444[_0x542823], _0x336f6f, _0x5ed486 + _0x542823 * _0x16c4b0, _0x5c43b8);
                } else {
                    if (_0x5c43b8 == ig['Font']['ALIGN']['RIGHT'] || _0x5c43b8 == ig['Font']['ALIGN']['CENTER']) _0x542823 = this['_widthForLine'](_0x214444), _0x336f6f -= _0x5c43b8 == ig['Font']['ALIGN']['CENTER'] ? _0x542823 / 0x2 : _0x542823;
                    0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
                    for (_0x542823 = 0x0; _0x542823 < _0x214444['length']; _0x542823++) _0x5c43b8 = _0x214444['charCodeAt'](_0x542823), _0x336f6f += this['_drawChar'](_0x5c43b8 - this['firstChar'], _0x336f6f, _0x5ed486);
                    0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1), ig['Image']['drawCount'] += _0x214444['length'];
                }
            },
            '_drawChar': function(_0x3b63fc, _0x2b9c89, _0x112ecb) {
                if (!this['loaded'] || 0x0 > _0x3b63fc || _0x3b63fc >= this['indices']['length']) return 0x0;
                var _0x20cc9e = ig['system']['scale'],
                    _0xde4da9 = this['widthMap'][_0x3b63fc] * _0x20cc9e,
                    _0x4abeb2 = this['height'] * _0x20cc9e;
                return ig['system']['context']['drawImage'](this['data'], this['indices'][_0x3b63fc] * _0x20cc9e, 0x0, _0xde4da9, _0x4abeb2, ig['system']['getDrawPos'](_0x2b9c89), ig['system']['getDrawPos'](_0x112ecb), _0xde4da9, _0x4abeb2), this['widthMap'][_0x3b63fc] + this['letterSpacing'];
            },
            '_loadMetrics': function(_0x7618b1) {
                this['widthMap'] = [], this['indices'] = [];
                for (var _0x38babb = ig['getImagePixels'](_0x7618b1, 0x0, _0x7618b1['height'] - 0x1, _0x7618b1['width'], 0x1), _0x2984b9 = 0x0, _0xdc84c5 = 0x0; _0xdc84c5 < _0x7618b1['width']; _0xdc84c5++) {
                    var _0x33116b = 0x4 * _0xdc84c5 + 0x3;
                    0x7f < _0x38babb['data'][_0x33116b] ? _0x2984b9++ : 0x80 > _0x38babb['data'][_0x33116b] && _0x2984b9 && (this['widthMap']['push'](_0x2984b9), this['indices']['push'](_0xdc84c5 - _0x2984b9), _0x2984b9 = 0x0);
                }
                this['widthMap']['push'](_0x2984b9), this['indices']['push'](_0xdc84c5 - _0x2984b9);
            }
        }), ig['Font']['ALIGN'] = {
            'LEFT': 0x0,
            'RIGHT': 0x1,
            'CENTER': 0x2
        };
    }), ig['baked'] = !0x0, ig['module']('impact.sound')['defines'](function() {
        ig['SoundManager'] = ig['Class']['extend']({
            'clips': {},
            'volume': 0x1,
            'format': null,
            'init': function() {
                if (!ig['Sound']['enabled'] || !window['Audio']) ig['Sound']['enabled'] = !0x1;
                else {
                    for (var _0x3d50e1 = new Audio(), _0x54908a = 0x0; _0x54908a < ig['Sound']['use']['length']; _0x54908a++) {
                        var _0x4cf624 = ig['Sound']['use'][_0x54908a];
                        if (_0x3d50e1['canPlayType'](_0x4cf624['mime'])) {
                            this['format'] = _0x4cf624;
                            break;
                        }
                    }
                    this['format'] || (ig['Sound']['enabled'] = !0x1), ig['Sound']['enabled'] && ig['Sound']['useWebAudio'] && (this['audioContext'] = new AudioContext(), this['boundWebAudioUnlock'] = this['unlockWebAudio']['bind'](this), ig['system']['canvas']['addEventListener']('touchstart', this['boundWebAudioUnlock'], !0x1), ig['system']['canvas']['addEventListener']('mousedown', this['boundWebAudioUnlock'], !0x1));
                }
            },
            'unlockWebAudio': function() {
                ig['system']['canvas']['removeEventListener']('touchstart', this['boundWebAudioUnlock'], !0x1), ig['system']['canvas']['removeEventListener']('mousedown', this['boundWebAudioUnlock'], !0x1);
                var _0x2b29ff = this['audioContext']['createBuffer'](0x1, 0x1, 0x5622),
                    _0x20a905 = this['audioContext']['createBufferSource']();
                _0x20a905['buffer'] = _0x2b29ff, _0x20a905['connect'](this['audioContext']['destination']), _0x20a905['start'](0x0);
            },
            'load': function(_0x4a60e4, _0x566861, _0x33febf) {
                return _0x566861 && ig['Sound']['useWebAudio'] ? this['loadWebAudio'](_0x4a60e4, _0x566861, _0x33febf) : this['loadHTML5Audio'](_0x4a60e4, _0x566861, _0x33febf);
            },
            'loadWebAudio': function(_0x415bf1, _0x2dd8ed, _0x3e42aa) {
                _0x2dd8ed = ig['prefix'] + _0x415bf1['replace'](/[^\.]+$/, this['format']['ext']) + ig['nocache'];
                if (this['clips'][_0x415bf1]) return this['clips'][_0x415bf1];
                var _0xa387bc = new ig['Sound']['WebAudioSource']();
                this['clips'][_0x415bf1] = _0xa387bc;
                var _0x1b25db = new XMLHttpRequest();
                _0x1b25db['open']('GET', _0x2dd8ed, !0x0), _0x1b25db['responseType'] = 'arraybuffer';
                var _0x441ac3 = this;
                return _0x1b25db['onload'] = function(_0x329c06) {
                    _0x441ac3['audioContext']['decodeAudioData'](_0x1b25db['response'], function(_0x3792f7) {
                        _0xa387bc['buffer'] = _0x3792f7, _0x3e42aa && _0x3e42aa(_0x415bf1, !0x0, _0x329c06);
                    }, function(_0x621a7e) {
                        _0x3e42aa && _0x3e42aa(_0x415bf1, !0x1, _0x621a7e);
                    });
                }, _0x1b25db['onerror'] = function(_0x16b961) {
                    _0x3e42aa && _0x3e42aa(_0x415bf1, !0x1, _0x16b961);
                }, _0x1b25db['send'](), _0xa387bc;
            },
            'loadHTML5Audio': function(_0x2f5c46, _0x531d8d, _0x513676) {
                var _0x2c5563 = ig['prefix'] + _0x2f5c46['replace'](/[^\.]+$/, this['format']['ext']) + ig['nocache'];
                if (this['clips'][_0x2f5c46]) {
                    if (this['clips'][_0x2f5c46] instanceof ig['Sound']['WebAudioSource']) return this['clips'][_0x2f5c46];
                    if (_0x531d8d && this['clips'][_0x2f5c46]['length'] < ig['Sound']['channels'])
                        for (_0x531d8d = this['clips'][_0x2f5c46]['length']; _0x531d8d < ig['Sound']['channels']; _0x531d8d++) {
                            var _0x249fc6 = new Audio(_0x2c5563);
                            _0x249fc6['load'](), this['clips'][_0x2f5c46]['push'](_0x249fc6);
                        }
                    return this['clips'][_0x2f5c46][0x0];
                }
                var _0x40b142 = new Audio(_0x2c5563);
                _0x513676 && (ig['ua']['mobile'] ? setTimeout(function() {
                    _0x513676(_0x2f5c46, !0x0, null);
                }, 0x0) : (_0x40b142['addEventListener']('canplaythrough', function _0x5b1d31(_0x10d8b6) {
                    _0x40b142['removeEventListener']('canplaythrough', _0x5b1d31, !0x1), _0x513676(_0x2f5c46, !0x0, _0x10d8b6);
                }, !0x1), _0x40b142['addEventListener']('error', function(_0x5e7050) {
                    _0x513676(_0x2f5c46, !0x1, _0x5e7050);
                }, !0x1))), _0x40b142['preload'] = 'auto', _0x40b142['load'](), this['clips'][_0x2f5c46] = [_0x40b142];
                if (_0x531d8d) {
                    for (_0x531d8d = 0x1; _0x531d8d < ig['Sound']['channels']; _0x531d8d++) _0x249fc6 = new Audio(_0x2c5563), _0x249fc6['load'](), this['clips'][_0x2f5c46]['push'](_0x249fc6);
                }
                return _0x40b142;
            },
            'get': function(_0x5e0d48) {
                if ((_0x5e0d48 = this['clips'][_0x5e0d48]) && _0x5e0d48 instanceof ig['Sound']['WebAudioSource']) return _0x5e0d48;
                for (var _0x1e757f = 0x0, _0x3438a5; _0x3438a5 = _0x5e0d48[_0x1e757f++];)
                    if (_0x3438a5['paused'] || _0x3438a5['ended']) return _0x3438a5['ended'] && (_0x3438a5['currentTime'] = 0x0), _0x3438a5;
                return _0x5e0d48[0x0]['pause'](), _0x5e0d48[0x0]['currentTime'] = 0x0, _0x5e0d48[0x0];
            }
        }), ig['Music'] = ig['Class']['extend']({
            'tracks': [],
            'namedTracks': {},
            'currentTrack': null,
            'currentIndex': 0x0,
            'random': !0x1,
            '_volume': 0x1,
            '_loop': !0x1,
            '_fadeInterval': 0x0,
            '_fadeTimer': null,
            '_endedCallbackBound': null,
            'init': function() {
                this['_endedCallbackBound'] = this['_endedCallback']['bind'](this), Object['defineProperty'](this, 'volume', {
                    'get': this['getVolume']['bind'](this),
                    'set': this['setVolume']['bind'](this)
                }), Object['defineProperty'](this, 'loop', {
                    'get': this['getLooping']['bind'](this),
                    'set': this['setLooping']['bind'](this)
                });
            },
            'add': function(_0x116d83, _0x202a2f) {
                if (ig['Sound']['enabled']) {
                    var _0x468c84 = _0x116d83 instanceof ig['Sound'] ? _0x116d83['path'] : _0x116d83,
                        _0x3a5fdc = ig['soundManager']['load'](_0x468c84, !0x1);
                    if (_0x3a5fdc instanceof ig['Sound']['WebAudioSource']) throw ig['system']['stopRunLoop'](), 'Sound\x20\x27' + _0x468c84 + '\x27\x20loaded\x20as\x20Multichannel\x20but\x20used\x20for\x20Music.\x20Set\x20the\x20multiChannel\x20param\x20to\x20false\x20when\x20loading,\x20e.g.:\x20new\x20ig.Sound(path,\x20false)';
                    _0x3a5fdc['loop'] = this['_loop'], _0x3a5fdc['volume'] = this['_volume'], _0x3a5fdc['addEventListener']('ended', this['_endedCallbackBound'], !0x1), this['tracks']['push'](_0x3a5fdc), _0x202a2f && (this['namedTracks'][_0x202a2f] = _0x3a5fdc), this['currentTrack'] || (this['currentTrack'] = _0x3a5fdc);
                }
            },
            'next': function() {
                this['tracks']['length'] && (this['stop'](), this['currentIndex'] = this['random'] ? Math['floor'](Math['random']() * this['tracks']['length']) : (this['currentIndex'] + 0x1) % this['tracks']['length'], this['currentTrack'] = this['tracks'][this['currentIndex']], this['play']());
            },
            'pause': function() {
                this['currentTrack'] && this['currentTrack']['pause']();
            },
            'stop': function() {
                this['currentTrack'] && (this['currentTrack']['pause'](), this['currentTrack']['currentTime'] = 0x0);
            },
            'play': function(_0x156b0b) {
                if (_0x156b0b && this['namedTracks'][_0x156b0b]) _0x156b0b = this['namedTracks'][_0x156b0b], _0x156b0b != this['currentTrack'] && (this['stop'](), this['currentTrack'] = _0x156b0b);
                else {
                    if (!this['currentTrack']) return;
                }
                this['currentTrack']['play']();
            },
            'getLooping': function() {
                return this['_loop'];
            },
            'setLooping': function(_0x6bf93b) {
                this['_loop'] = _0x6bf93b;
                for (var _0x2524b3 in this['tracks']) this['tracks'][_0x2524b3]['loop'] = _0x6bf93b;
            },
            'getVolume': function() {
                return this['_volume'];
            },
            'setVolume': function(_0x33a2ff) {
                this['_volume'] = _0x33a2ff['limit'](0x0, 0x1);
                for (var _0x4245c2 in this['tracks']) this['tracks'][_0x4245c2]['volume'] = this['_volume'];
            },
            'fadeOut': function(_0x4238b8) {
                this['currentTrack'] && (clearInterval(this['_fadeInterval']), this['_fadeTimer'] = new ig['Timer'](_0x4238b8), this['_fadeInterval'] = setInterval(this['_fadeStep']['bind'](this), 0x32));
            },
            '_fadeStep': function() {
                var _0xf02c71 = this['_fadeTimer']['delta']()['map'](-this['_fadeTimer']['target'], 0x0, 0x1, 0x0)['limit'](0x0, 0x1) * this['_volume'];
                0.01 >= _0xf02c71 ? (this['stop'](), this['currentTrack']['volume'] = this['_volume'], clearInterval(this['_fadeInterval'])) : this['currentTrack']['volume'] = _0xf02c71;
            },
            '_endedCallback': function() {
                this['_loop'] ? this['play']() : this['next']();
            }
        }), ig['Sound'] = ig['Class']['extend']({
            'path': '',
            'volume': 0x1,
            'currentClip': null,
            'multiChannel': !0x0,
            '_loop': !0x1,
            'init': function(_0x33cae4, _0x139921) {
                this['path'] = _0x33cae4, this['multiChannel'] = !0x1 !== _0x139921, Object['defineProperty'](this, 'loop', {
                    'get': this['getLooping']['bind'](this),
                    'set': this['setLooping']['bind'](this)
                }), this['load']();
            },
            'getLooping': function() {
                return this['_loop'];
            },
            'setLooping': function(_0x32603c) {
                this['_loop'] = _0x32603c, this['currentClip'] && (this['currentClip']['loop'] = _0x32603c);
            },
            'load': function(_0x40ccb7) {
                ig['Sound']['enabled'] ? ig['ready'] ? ig['soundManager']['load'](this['path'], this['multiChannel'], _0x40ccb7) : ig['addResource'](this) : _0x40ccb7 && _0x40ccb7(this['path'], !0x0);
            },
            'play': function() {
                ig['Sound']['enabled'] && (this['currentClip'] = ig['soundManager']['get'](this['path']), this['currentClip']['loop'] = this['_loop'], this['currentClip']['volume'] = ig['soundManager']['volume'] * this['volume'], this['currentClip']['play']());
            },
            'stop': function() {
                this['currentClip'] && (this['currentClip']['pause'](), this['currentClip']['currentTime'] = 0x0);
            }
        }), ig['Sound']['WebAudioSource'] = ig['Class']['extend']({
            'sources': [],
            'gain': null,
            'buffer': null,
            '_loop': !0x1,
            'init': function() {
                this['gain'] = ig['soundManager']['audioContext']['createGain'](), this['gain']['connect'](ig['soundManager']['audioContext']['destination']), Object['defineProperty'](this, 'loop', {
                    'get': this['getLooping']['bind'](this),
                    'set': this['setLooping']['bind'](this)
                }), Object['defineProperty'](this, 'volume', {
                    'get': this['getVolume']['bind'](this),
                    'set': this['setVolume']['bind'](this)
                });
            },
            'play': function() {
                if (this['buffer']) {
                    var _0x349eb0 = ig['soundManager']['audioContext']['createBufferSource']();
                    _0x349eb0['buffer'] = this['buffer'], _0x349eb0['connect'](this['gain']), _0x349eb0['loop'] = this['_loop'];
                    var _0xd051cf = this;
                    this['sources']['push'](_0x349eb0), _0x349eb0['onended'] = function() {
                        _0xd051cf['sources']['erase'](_0x349eb0);
                    }, _0x349eb0['start'](0x0);
                }
            },
            'pause': function() {
                for (var _0x3e0203 = 0x0; _0x3e0203 < this['sources']['length']; _0x3e0203++) try {
                    this['sources'][_0x3e0203]['stop']();
                } catch (_0x473569) {}
            },
            'getLooping': function() {
                return this['_loop'];
            },
            'setLooping': function(_0x54dbe0) {
                this['_loop'] = _0x54dbe0;
                for (var _0x168a8e = 0x0; _0x168a8e < this['sources']['length']; _0x168a8e++) this['sources'][_0x168a8e]['loop'] = _0x54dbe0;
            },
            'getVolume': function() {
                return this['gain']['gain']['value'];
            },
            'setVolume': function(_0x2aaf08) {
                this['gain']['gain']['value'] = _0x2aaf08;
            }
        }), ig['Sound']['FORMAT'] = {
            'MP3': {
                'ext': 'mp3',
                'mime': 'audio/mpeg'
            },
            'M4A': {
                'ext': 'm4a',
                'mime': 'audio/mp4;\x20codecs=mp4a.40.2'
            },
            'OGG': {
                'ext': 'ogg',
                'mime': 'audio/ogg;\x20codecs=vorbis'
            },
            'WEBM': {
                'ext': 'webm',
                'mime': 'audio/webm;\x20codecs=vorbis'
            },
            'CAF': {
                'ext': 'caf',
                'mime': 'audio/x-caf'
            }
        }, ig['Sound']['use'] = [ig['Sound']['FORMAT']['OGG'], ig['Sound']['FORMAT']['MP3']], ig['Sound']['channels'] = 0x4, ig['Sound']['enabled'] = !0x0, ig['normalizeVendorAttribute'](window, 'AudioContext'), ig['Sound']['useWebAudio'] = !!window['AudioContext'];
    }), ig['baked'] = !0x0, ig['module']('impact.loader')['requires']('impact.image', 'impact.font', 'impact.sound')['defines'](function() {
        ig['Loader'] = ig['Class']['extend']({
            'resources': [],
            'gameClass': null,
            'status': 0x0,
            'done': !0x1,
            '_unloaded': [],
            '_drawStatus': 0x0,
            '_intervalId': 0x0,
            '_loadCallbackBound': null,
            'init': function(_0x3dff34, _0x865f9e) {
                this['gameClass'] = _0x3dff34, this['resources'] = _0x865f9e, this['_loadCallbackBound'] = this['_loadCallback']['bind'](this);
                for (var _0xd2cec8 = 0x0; _0xd2cec8 < this['resources']['length']; _0xd2cec8++) this['_unloaded']['push'](this['resources'][_0xd2cec8]['path']);
            },
            'load': function() {
                ig['system']['clear']('#000');
                if (this['resources']['length']) {
                    for (var _0x5b19f2 = 0x0; _0x5b19f2 < this['resources']['length']; _0x5b19f2++) this['loadResource'](this['resources'][_0x5b19f2]);
                    this['_intervalId'] = setInterval(this['draw']['bind'](this), 0x10);
                } else this['end']();
            },
            'loadResource': function(_0x17c622) {
                _0x17c622['load'](this['_loadCallbackBound']);
            },
            'end': function() {
                this['done'] || (this['done'] = !0x0, clearInterval(this['_intervalId']), ig['system']['setGame'](this['gameClass']));
            },
            'draw': function() {
                this['_drawStatus'] += (this['status'] - this['_drawStatus']) / 0x5;
                var _0x3a4757 = ig['system']['scale'],
                    _0x350ec8 = (0.6 * ig['system']['width'])['floor'](),
                    _0x30bfa5 = (0.1 * ig['system']['height'])['floor'](),
                    _0x4b2303 = (0.5 * ig['system']['width'] - _0x350ec8 / 0x2)['floor'](),
                    _0x136bfd = (0.5 * ig['system']['height'] - _0x30bfa5 / 0x2)['floor']();
                ig['system']['context']['fillStyle'] = '#000', ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']), ig['system']['context']['fillStyle'] = '#fff', ig['system']['context']['fillRect'](_0x4b2303 * _0x3a4757, _0x136bfd * _0x3a4757, _0x350ec8 * _0x3a4757, _0x30bfa5 * _0x3a4757), ig['system']['context']['fillStyle'] = '#000', ig['system']['context']['fillRect'](_0x4b2303 * _0x3a4757 + _0x3a4757, _0x136bfd * _0x3a4757 + _0x3a4757, _0x350ec8 * _0x3a4757 - _0x3a4757 - _0x3a4757, _0x30bfa5 * _0x3a4757 - _0x3a4757 - _0x3a4757), ig['system']['context']['fillStyle'] = '#fff', ig['system']['context']['fillRect'](_0x4b2303 * _0x3a4757, _0x136bfd * _0x3a4757, _0x350ec8 * _0x3a4757 * this['_drawStatus'], _0x30bfa5 * _0x3a4757);
            },
            '_loadCallback': function(_0x5ef2ae, _0x23d00a) {
                if (_0x23d00a) this['_unloaded']['erase'](_0x5ef2ae);
                else throw 'Failed\x20to\x20load\x20resource:\x20' + _0x5ef2ae;
                this['status'] = 0x1 - this['_unloaded']['length'] / this['resources']['length'], 0x0 == this['_unloaded']['length'] && setTimeout(this['end']['bind'](this), 0xfa);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('impact.timer')['defines'](function() {
        ig['Timer'] = ig['Class']['extend']({
            'target': 0x0,
            'base': 0x0,
            'last': 0x0,
            'pausedAt': 0x0,
            'init': function(_0x2b97d6) {
                this['last'] = this['base'] = ig['Timer']['time'], this['target'] = _0x2b97d6 || 0x0;
            },
            'set': function(_0x45e51) {
                this['target'] = _0x45e51 || 0x0, this['base'] = ig['Timer']['time'], this['pausedAt'] = 0x0;
            },
            'reset': function() {
                this['base'] = ig['Timer']['time'], this['pausedAt'] = 0x0;
            },
            'tick': function() {
                var _0xbdefbe = ig['Timer']['time'] - this['last'];
                return this['last'] = ig['Timer']['time'], this['pausedAt'] ? 0x0 : _0xbdefbe;
            },
            'delta': function() {
                return (this['pausedAt'] || ig['Timer']['time']) - this['base'] - this['target'];
            },
            'pause': function() {
                this['pausedAt'] || (this['pausedAt'] = ig['Timer']['time']);
            },
            'unpause': function() {
                this['pausedAt'] && (this['base'] += ig['Timer']['time'] - this['pausedAt'], this['pausedAt'] = 0x0);
            }
        }), ig['Timer']['_last'] = 0x0, ig['Timer']['time'] = Number['MIN_VALUE'], ig['Timer']['timeScale'] = 0x1, ig['Timer']['maxStep'] = 0.05, ig['Timer']['step'] = function() {
            var _0x48b956 = Date['now']();
            ig['Timer']['time'] += Math['min']((_0x48b956 - ig['Timer']['_last']) / 0x3e8, ig['Timer']['maxStep']) * ig['Timer']['timeScale'], ig['Timer']['_last'] = _0x48b956;
        };
    }), ig['baked'] = !0x0, ig['module']('impact.system')['requires']('impact.timer', 'impact.image')['defines'](function() {
        ig['System'] = ig['Class']['extend']({
            'fps': 0x1e,
            'width': 0x140,
            'height': 0xf0,
            'realWidth': 0x140,
            'realHeight': 0xf0,
            'scale': 0x1,
            'tick': 0x0,
            'animationId': 0x0,
            'newGameClass': null,
            'running': !0x1,
            'delegate': null,
            'clock': null,
            'canvas': null,
            'context': null,
            'init': function(_0x1bc326, _0x5346dd, _0xcb39ef, _0x1f91e1, _0x27b271) {
                this['fps'] = _0x5346dd, this['clock'] = new ig['Timer'](), this['canvas'] = ig['$'](_0x1bc326), this['resize'](_0xcb39ef, _0x1f91e1, _0x27b271), this['context'] = this['canvas']['getContext']('2d'), this['getDrawPos'] = ig['System']['drawMode'], 0x1 != this['scale'] && (ig['System']['scaleMode'] = ig['System']['SCALE']['CRISP']), ig['System']['scaleMode'](this['canvas'], this['context']);
            },
            'resize': function(_0x5a8958, _0x345b2f, _0x1e1f2e) {
                this['width'] = _0x5a8958, this['height'] = _0x345b2f, this['scale'] = _0x1e1f2e || this['scale'], this['realWidth'] = this['width'] * this['scale'], this['realHeight'] = this['height'] * this['scale'], this['canvas']['width'] = this['realWidth'], this['canvas']['height'] = this['realHeight'];
            },
            'setGame': function(_0x381b88) {
                this['running'] ? this['newGameClass'] = _0x381b88 : this['setGameNow'](_0x381b88);
            },
            'setGameNow': function(_0x4f1386) {
                ig['game'] = new _0x4f1386(), ig['system']['setDelegate'](ig['game']);
            },
            'setDelegate': function(_0x9ee7c4) {
                if ('function' == typeof _0x9ee7c4['run']) this['delegate'] = _0x9ee7c4, this['startRunLoop']();
                else throw 'System.setDelegate:\x20No\x20run()\x20function\x20in\x20object';
            },
            'stopRunLoop': function() {
                ig['clearAnimation'](this['animationId']), this['running'] = !0x1;
            },
            'startRunLoop': function() {
                this['stopRunLoop'](), this['animationId'] = ig['setAnimation'](this['run']['bind'](this)), this['running'] = !0x0;
            },
            'clear': function(_0x4ac1c8) {
                this['context']['fillStyle'] = _0x4ac1c8, this['context']['fillRect'](0x0, 0x0, this['realWidth'], this['realHeight']);
            },
            'run': function() {
                ig['Timer']['step'](), this['tick'] = this['clock']['tick'](), this['delegate']['run'](), ig['input']['clearPressed'](), this['newGameClass'] && (this['setGameNow'](this['newGameClass']), this['newGameClass'] = null);
            },
            'getDrawPos': null
        }), ig['System']['DRAW'] = {
            'AUTHENTIC': function(_0x177dbd) {
                return Math['round'](_0x177dbd) * this['scale'];
            },
            'SMOOTH': function(_0x2dc0b9) {
                return Math['round'](_0x2dc0b9 * this['scale']);
            },
            'SUBPIXEL': function(_0x2672d7) {
                return _0x2672d7 * this['scale'];
            }
        }, ig['System']['drawMode'] = ig['System']['DRAW']['SMOOTH'], ig['System']['SCALE'] = {
            'CRISP': function(_0x577f57, _0x2a6016) {
                ig['setVendorAttribute'](_0x2a6016, 'imageSmoothingEnabled', !0x1), _0x577f57['style']['imageRendering'] = '-moz-crisp-edges', _0x577f57['style']['imageRendering'] = '-o-crisp-edges', _0x577f57['style']['imageRendering'] = '-webkit-optimize-contrast', _0x577f57['style']['imageRendering'] = 'crisp-edges', _0x577f57['style']['msInterpolationMode'] = 'nearest-neighbor';
            },
            'SMOOTH': function(_0x452fb7, _0x27ca8c) {
                ig['setVendorAttribute'](_0x27ca8c, 'imageSmoothingEnabled', !0x0), _0x452fb7['style']['imageRendering'] = '', _0x452fb7['style']['msInterpolationMode'] = '';
            }
        }, ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH'];
    }), ig['baked'] = !0x0, ig['module']('impact.input')['defines'](function() {
        ig['KEY'] = {
            'MOUSE1': -0x1,
            'MOUSE2': -0x3,
            'MWHEEL_UP': -0x4,
            'MWHEEL_DOWN': -0x5,
            'BACKSPACE': 0x8,
            'TAB': 0x9,
            'ENTER': 0xd,
            'PAUSE': 0x13,
            'CAPS': 0x14,
            'ESC': 0x1b,
            'SPACE': 0x20,
            'PAGE_UP': 0x21,
            'PAGE_DOWN': 0x22,
            'END': 0x23,
            'HOME': 0x24,
            'LEFT_ARROW': 0x25,
            'UP_ARROW': 0x26,
            'RIGHT_ARROW': 0x27,
            'DOWN_ARROW': 0x28,
            'INSERT': 0x2d,
            'DELETE': 0x2e,
            '_0': 0x30,
            '_1': 0x31,
            '_2': 0x32,
            '_3': 0x33,
            '_4': 0x34,
            '_5': 0x35,
            '_6': 0x36,
            '_7': 0x37,
            '_8': 0x38,
            '_9': 0x39,
            'A': 0x41,
            'B': 0x42,
            'C': 0x43,
            'D': 0x44,
            'E': 0x45,
            'F': 0x46,
            'G': 0x47,
            'H': 0x48,
            'I': 0x49,
            'J': 0x4a,
            'K': 0x4b,
            'L': 0x4c,
            'M': 0x4d,
            'N': 0x4e,
            'O': 0x4f,
            'P': 0x50,
            'Q': 0x51,
            'R': 0x52,
            'S': 0x53,
            'T': 0x54,
            'U': 0x55,
            'V': 0x56,
            'W': 0x57,
            'X': 0x58,
            'Y': 0x59,
            'Z': 0x5a,
            'NUMPAD_0': 0x60,
            'NUMPAD_1': 0x61,
            'NUMPAD_2': 0x62,
            'NUMPAD_3': 0x63,
            'NUMPAD_4': 0x64,
            'NUMPAD_5': 0x65,
            'NUMPAD_6': 0x66,
            'NUMPAD_7': 0x67,
            'NUMPAD_8': 0x68,
            'NUMPAD_9': 0x69,
            'MULTIPLY': 0x6a,
            'ADD': 0x6b,
            'SUBSTRACT': 0x6d,
            'DECIMAL': 0x6e,
            'DIVIDE': 0x6f,
            'F1': 0x70,
            'F2': 0x71,
            'F3': 0x72,
            'F4': 0x73,
            'F5': 0x74,
            'F6': 0x75,
            'F7': 0x76,
            'F8': 0x77,
            'F9': 0x78,
            'F10': 0x79,
            'F11': 0x7a,
            'F12': 0x7b,
            'SHIFT': 0x10,
            'CTRL': 0x11,
            'ALT': 0x12,
            'PLUS': 0xbb,
            'COMMA': 0xbc,
            'MINUS': 0xbd,
            'PERIOD': 0xbe
        }, ig['Input'] = ig['Class']['extend']({
            'bindings': {},
            'actions': {},
            'presses': {},
            'locks': {},
            'delayedKeyup': {},
            'isUsingMouse': !0x1,
            'isUsingKeyboard': !0x1,
            'isUsingAccelerometer': !0x1,
            'mouse': {
                'x': 0x0,
                'y': 0x0
            },
            'accel': {
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
            },
            'initMouse': function() {
                this['isUsingMouse'] || (this['isUsingMouse'] = !0x0, ig['system']['canvas']['addEventListener']('wheel', this['mousewheel']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('contextmenu', this['contextmenu']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('mousedown', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('mouseup', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('mousemove', this['mousemove']['bind'](this), !0x1), ig['ua']['touchDevice'] && (ig['system']['canvas']['addEventListener']('touchstart', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchcancel', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerDown', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['style']['msTouchAction'] = 'none'));
            },
            'initKeyboard': function() {
                this['isUsingKeyboard'] || (this['isUsingKeyboard'] = !0x0, window['addEventListener']('keydown', this['keydown']['bind'](this), !0x1), window['addEventListener']('keyup', this['keyup']['bind'](this), !0x1));
            },
            'initAccelerometer': function() {
                this['isUsingAccelerometer'] || (this['isUsingAccelerometer'] = !0x0, window['addEventListener']('devicemotion', this['devicemotion']['bind'](this), !0x1));
            },
            'mousewheel': function(_0x117841) {
                var _0x450b70 = this['bindings'][0x0 > _0x117841['deltaY'] ? ig['KEY']['MWHEEL_UP'] : ig['KEY']['MWHEEL_DOWN']];
                _0x450b70 && (this['actions'][_0x450b70] = !0x0, this['presses'][_0x450b70] = !0x0, this['delayedKeyup'][_0x450b70] = !0x0, _0x117841['stopPropagation'](), _0x117841['preventDefault']());
            },
            'mousemove': function(_0x5bb040) {
                var _0x4f52e4 = ig['system']['scale'] * ((ig['system']['canvas']['offsetWidth'] || ig['system']['realWidth']) / ig['system']['realWidth']),
                    _0x569220 = {
                        'left': 0x0,
                        'top': 0x0
                    };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x569220 = ig['system']['canvas']['getBoundingClientRect']()), _0x5bb040 = _0x5bb040['touches'] ? _0x5bb040['touches'][0x0] : _0x5bb040, this['mouse']['x'] = (_0x5bb040['clientX'] - _0x569220['left']) / _0x4f52e4, this['mouse']['y'] = (_0x5bb040['clientY'] - _0x569220['top']) / _0x4f52e4;
            },
            'contextmenu': function(_0x16a142) {
                this['bindings'][ig['KEY']['MOUSE2']] && (_0x16a142['stopPropagation'](), _0x16a142['preventDefault']());
            },
            'keydown': function(_0x12e537) {
                var _0xf26117 = _0x12e537['target']['tagName'];
                if (!('INPUT' == _0xf26117 || 'TEXTAREA' == _0xf26117)) {
                    if (_0xf26117 = 'keydown' == _0x12e537['type'] ? _0x12e537['keyCode'] : 0x2 == _0x12e537['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], 0x0 > _0xf26117 && !ig['ua']['mobile'] && window['focus'](), ('touchstart' == _0x12e537['type'] || 'mousedown' == _0x12e537['type']) && this['mousemove'](_0x12e537), _0xf26117 = this['bindings'][_0xf26117]) this['actions'][_0xf26117] = !0x0, this['locks'][_0xf26117] || (this['presses'][_0xf26117] = !0x0, this['locks'][_0xf26117] = !0x0), _0x12e537['preventDefault']();
                }
            },
            'keyup': function(_0xc77ef4) {
                var _0x1e6222 = _0xc77ef4['target']['tagName'];
                if (!('INPUT' == _0x1e6222 || 'TEXTAREA' == _0x1e6222)) {
                    if (_0x1e6222 = this['bindings']['keyup' == _0xc77ef4['type'] ? _0xc77ef4['keyCode'] : 0x2 == _0xc77ef4['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']]) this['delayedKeyup'][_0x1e6222] = !0x0, _0xc77ef4['preventDefault']();
                }
            },
            'devicemotion': function(_0x458a3a) {
                this['accel'] = _0x458a3a['accelerationIncludingGravity'];
            },
            'bind': function(_0x37e361, _0x2498d4) {
                0x0 > _0x37e361 ? this['initMouse']() : 0x0 < _0x37e361 && this['initKeyboard'](), this['bindings'][_0x37e361] = _0x2498d4;
            },
            'bindTouch': function(_0x49a40b, _0x244230) {
                var _0x4b9dcd = ig['$'](_0x49a40b),
                    _0x296754 = this;
                _0x4b9dcd['addEventListener']('touchstart', function(_0x15cf56) {
                    _0x296754['touchStart'](_0x15cf56, _0x244230);
                }, !0x1), _0x4b9dcd['addEventListener']('touchend', function(_0x1bab95) {
                    _0x296754['touchEnd'](_0x1bab95, _0x244230);
                }, !0x1), _0x4b9dcd['addEventListener']('MSPointerDown', function(_0x3c7dc3) {
                    _0x296754['touchStart'](_0x3c7dc3, _0x244230);
                }, !0x1), _0x4b9dcd['addEventListener']('MSPointerUp', function(_0x1826be) {
                    _0x296754['touchEnd'](_0x1826be, _0x244230);
                }, !0x1);
            },
            'unbind': function(_0x1cdca4) {
                this['delayedKeyup'][this['bindings'][_0x1cdca4]] = !0x0, this['bindings'][_0x1cdca4] = null;
            },
            'unbindAll': function() {
                this['bindings'] = {}, this['actions'] = {}, this['presses'] = {}, this['locks'] = {}, this['delayedKeyup'] = {};
            },
            'state': function(_0x239df9) {
                return this['actions'][_0x239df9];
            },
            'pressed': function(_0xa5be1a) {
                return this['presses'][_0xa5be1a];
            },
            'released': function(_0x5b4b14) {
                return !!this['delayedKeyup'][_0x5b4b14];
            },
            'clearPressed': function() {
                for (var _0x558099 in this['delayedKeyup']) this['actions'][_0x558099] = !0x1, this['locks'][_0x558099] = !0x1;
                this['delayedKeyup'] = {}, this['presses'] = {};
            },
            'touchStart': function(_0x19ee78, _0x5d32f9) {
                return this['actions'][_0x5d32f9] = !0x0, this['presses'][_0x5d32f9] = !0x0, _0x19ee78['stopPropagation'](), _0x19ee78['preventDefault'](), !0x1;
            },
            'touchEnd': function(_0x1b4760, _0x8718f5) {
                return this['delayedKeyup'][_0x8718f5] = !0x0, _0x1b4760['stopPropagation'](), _0x1b4760['preventDefault'](), !0x1;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('impact.impact')['requires']('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound')['defines'](function() {
        ig['main'] = function(_0x51a2d0, _0x485413, _0x194ab6, _0x2902f6, _0x15fb73, _0xe9b7b6, _0x5bbe6a) {
            ig['system'] = new ig['System'](_0x51a2d0, _0x194ab6, _0x2902f6, _0x15fb73, _0xe9b7b6 || 0x1), ig['input'] = new ig['Input'](), ig['soundManager'] = new ig['SoundManager'](), ig['music'] = new ig['Music'](), ig['ready'] = !0x0, new(_0x5bbe6a || ig['Loader'])(_0x485413, ig['resources'])['load']();
        };
    }), ig['baked'] = !0x0, ig['module']('impact.animation')['requires']('impact.timer', 'impact.image')['defines'](function() {
        ig['AnimationSheet'] = ig['Class']['extend']({
            'width': 0x8,
            'height': 0x8,
            'image': null,
            'init': function(_0x232e3e, _0x4ed4a0, _0x22da34) {
                this['width'] = _0x4ed4a0, this['height'] = _0x22da34, this['image'] = new ig['Image'](_0x232e3e);
            }
        }), ig['Animation'] = ig['Class']['extend']({
            'sheet': null,
            'timer': null,
            'sequence': [],
            'flip': {
                'x': !0x1,
                'y': !0x1
            },
            'pivot': {
                'x': 0x0,
                'y': 0x0
            },
            'frameTime': 0x0,
            'frame': 0x0,
            'tile': 0x0,
            'stop': !0x1,
            'loopCount': 0x0,
            'alpha': 0x1,
            'angle': 0x0,
            'init': function(_0x36f6b9, _0x34e691, _0x5c5081, _0x3228c2) {
                this['sheet'] = _0x36f6b9, this['pivot'] = {
                    'x': _0x36f6b9['width'] / 0x2,
                    'y': _0x36f6b9['height'] / 0x2
                }, this['timer'] = new ig['Timer'](), this['frameTime'] = _0x34e691, this['sequence'] = _0x5c5081, this['stop'] = !!_0x3228c2, this['tile'] = this['sequence'][0x0];
            },
            'rewind': function() {
                return this['timer']['set'](), this['frame'] = this['loopCount'] = 0x0, this['tile'] = this['sequence'][0x0], this;
            },
            'gotoFrame': function(_0x499219) {
                this['timer']['set'](this['frameTime'] * -_0x499219 - 0.0001), this['update']();
            },
            'gotoRandomFrame': function() {
                this['gotoFrame'](Math['floor'](Math['random']() * this['sequence']['length']));
            },
            'update': function() {
                var _0x4cfa90 = Math['floor'](this['timer']['delta']() / this['frameTime']);
                this['loopCount'] = Math['floor'](_0x4cfa90 / this['sequence']['length']), this['frame'] = this['stop'] && 0x0 < this['loopCount'] ? this['sequence']['length'] - 0x1 : _0x4cfa90 % this['sequence']['length'], this['tile'] = this['sequence'][this['frame']];
            },
            'draw': function(_0x292376, _0x4667bb) {
                var _0x580149 = Math['max'](this['sheet']['width'], this['sheet']['height']);
                _0x292376 > ig['system']['width'] || _0x4667bb > ig['system']['height'] || (0x0 > _0x292376 + _0x580149 || 0x0 > _0x4667bb + _0x580149) || (0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']), 0x0 == this['angle'] ? this['sheet']['image']['drawTile'](_0x292376, _0x4667bb, this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']) : (ig['system']['context']['save'](), ig['system']['context']['translate'](ig['system']['getDrawPos'](_0x292376 + this['pivot']['x']), ig['system']['getDrawPos'](_0x4667bb + this['pivot']['y'])), ig['system']['context']['rotate'](this['angle']), this['sheet']['image']['drawTile'](-this['pivot']['x'], -this['pivot']['y'], this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']), ig['system']['context']['restore']()), 0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1));
            }
        });
    }), ig['baked'] = !0x0, ig['module']('impact.entity')['requires']('impact.animation', 'impact.impact')['defines'](function() {
        ig['Entity'] = ig['Class']['extend']({
            'id': 0x0,
            'settings': {},
            'size': {
                'x': 0x10,
                'y': 0x10
            },
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'pos': {
                'x': 0x0,
                'y': 0x0
            },
            'last': {
                'x': 0x0,
                'y': 0x0
            },
            'vel': {
                'x': 0x0,
                'y': 0x0
            },
            'accel': {
                'x': 0x0,
                'y': 0x0
            },
            'friction': {
                'x': 0x0,
                'y': 0x0
            },
            'maxVel': {
                'x': 0x64,
                'y': 0x64
            },
            'zIndex': 0x0,
            'gravityFactor': 0x1,
            'standing': !0x1,
            'bounciness': 0x0,
            'minBounceVelocity': 0x28,
            'anims': {},
            'animSheet': null,
            'currentAnim': null,
            'health': 0xa,
            'type': 0x0,
            'checkAgainst': 0x0,
            'collides': 0x0,
            '_killed': !0x1,
            'slopeStanding': {
                'min': 0x2c['toRad'](),
                'max': 0x88['toRad']()
            },
            'init': function(_0x26547d, _0xc77c34, _0x436abe) {
                this['id'] = ++ig['Entity']['_lastId'], this['pos']['x'] = this['last']['x'] = _0x26547d, this['pos']['y'] = this['last']['y'] = _0xc77c34, ig['merge'](this, _0x436abe);
            },
            'reset': function(_0x479b97, _0x40535c, _0x1d8879) {
                var _0x2306fa = this['constructor']['prototype'];
                this['pos']['x'] = _0x479b97, this['pos']['y'] = _0x40535c, this['last']['x'] = _0x479b97, this['last']['y'] = _0x40535c, this['vel']['x'] = _0x2306fa['vel']['x'], this['vel']['y'] = _0x2306fa['vel']['y'], this['accel']['x'] = _0x2306fa['accel']['x'], this['accel']['y'] = _0x2306fa['accel']['y'], this['health'] = _0x2306fa['health'], this['_killed'] = _0x2306fa['_killed'], this['standing'] = _0x2306fa['standing'], this['type'] = _0x2306fa['type'], this['checkAgainst'] = _0x2306fa['checkAgainst'], this['collides'] = _0x2306fa['collides'], ig['merge'](this, _0x1d8879);
            },
            'addAnim': function(_0x39b8f4, _0x3437dd, _0xecf36c, _0x24d5f0) {
                if (!this['animSheet']) throw 'No\x20animSheet\x20to\x20add\x20the\x20animation\x20' + _0x39b8f4 + '\x20to.';
                return _0x3437dd = new ig['Animation'](this['animSheet'], _0x3437dd, _0xecf36c, _0x24d5f0), this['anims'][_0x39b8f4] = _0x3437dd, this['currentAnim'] || (this['currentAnim'] = _0x3437dd), _0x3437dd;
            },
            'update': function() {
                this['last']['x'] = this['pos']['x'], this['last']['y'] = this['pos']['y'], this['vel']['y'] += ig['game']['gravity'] * ig['system']['tick'] * this['gravityFactor'], this['vel']['x'] = this['getNewVelocity'](this['vel']['x'], this['accel']['x'], this['friction']['x'], this['maxVel']['x']), this['vel']['y'] = this['getNewVelocity'](this['vel']['y'], this['accel']['y'], this['friction']['y'], this['maxVel']['y']);
                var _0x11c1b2 = ig['game']['collisionMap']['trace'](this['pos']['x'], this['pos']['y'], this['vel']['x'] * ig['system']['tick'], this['vel']['y'] * ig['system']['tick'], this['size']['x'], this['size']['y']);
                this['handleMovementTrace'](_0x11c1b2), this['currentAnim'] && this['currentAnim']['update']();
            },
            'getNewVelocity': function(_0x31fff3, _0x424d72, _0x3a72cb, _0x5d6aa6) {
                return _0x424d72 ? (_0x31fff3 + _0x424d72 * ig['system']['tick'])['limit'](-_0x5d6aa6, _0x5d6aa6) : _0x3a72cb ? (_0x424d72 = _0x3a72cb * ig['system']['tick'], 0x0 < _0x31fff3 - _0x424d72 ? _0x31fff3 - _0x424d72 : 0x0 > _0x31fff3 + _0x424d72 ? _0x31fff3 + _0x424d72 : 0x0) : _0x31fff3['limit'](-_0x5d6aa6, _0x5d6aa6);
            },
            'handleMovementTrace': function(_0x1b0a4c) {
                this['standing'] = !0x1, _0x1b0a4c['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0)), _0x1b0a4c['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
                if (_0x1b0a4c['collision']['slope']) {
                    var _0x5d8789 = _0x1b0a4c['collision']['slope'];
                    if (0x0 < this['bounciness']) {
                        var _0xe97cf4 = this['vel']['x'] * _0x5d8789['nx'] + this['vel']['y'] * _0x5d8789['ny'];
                        this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x5d8789['nx'] * _0xe97cf4) * this['bounciness'], this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x5d8789['ny'] * _0xe97cf4) * this['bounciness'];
                    } else _0xe97cf4 = (this['vel']['x'] * _0x5d8789['x'] + this['vel']['y'] * _0x5d8789['y']) / (_0x5d8789['x'] * _0x5d8789['x'] + _0x5d8789['y'] * _0x5d8789['y']), this['vel']['x'] = _0x5d8789['x'] * _0xe97cf4, this['vel']['y'] = _0x5d8789['y'] * _0xe97cf4, _0x5d8789 = Math['atan2'](_0x5d8789['x'], _0x5d8789['y']), _0x5d8789 > this['slopeStanding']['min'] && _0x5d8789 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
                }
                this['pos'] = _0x1b0a4c['pos'];
            },
            'draw': function() {
                this['currentAnim'] && this['currentAnim']['draw'](this['pos']['x'] - this['offset']['x'] - ig['game']['_rscreen']['x'], this['pos']['y'] - this['offset']['y'] - ig['game']['_rscreen']['y']);
            },
            'kill': function() {
                ig['game']['removeEntity'](this);
            },
            'receiveDamage': function(_0xff269) {
                this['health'] -= _0xff269, 0x0 >= this['health'] && this['kill']();
            },
            'touches': function(_0x1a682d) {
                return !(this['pos']['x'] >= _0x1a682d['pos']['x'] + _0x1a682d['size']['x'] || this['pos']['x'] + this['size']['x'] <= _0x1a682d['pos']['x'] || this['pos']['y'] >= _0x1a682d['pos']['y'] + _0x1a682d['size']['y'] || this['pos']['y'] + this['size']['y'] <= _0x1a682d['pos']['y']);
            },
            'distanceTo': function(_0x3d0c80) {
                var _0x40ebfb = this['pos']['x'] + this['size']['x'] / 0x2 - (_0x3d0c80['pos']['x'] + _0x3d0c80['size']['x'] / 0x2);
                return _0x3d0c80 = this['pos']['y'] + this['size']['y'] / 0x2 - (_0x3d0c80['pos']['y'] + _0x3d0c80['size']['y'] / 0x2), Math['sqrt'](_0x40ebfb * _0x40ebfb + _0x3d0c80 * _0x3d0c80);
            },
            'angleTo': function(_0xf14da5) {
                return Math['atan2'](_0xf14da5['pos']['y'] + _0xf14da5['size']['y'] / 0x2 - (this['pos']['y'] + this['size']['y'] / 0x2), _0xf14da5['pos']['x'] + _0xf14da5['size']['x'] / 0x2 - (this['pos']['x'] + this['size']['x'] / 0x2));
            },
            'check': function() {},
            'collideWith': function() {},
            'ready': function() {},
            'erase': function() {}
        }), ig['Entity']['_lastId'] = 0x0, ig['Entity']['COLLIDES'] = {
            'NEVER': 0x0,
            'LITE': 0x1,
            'PASSIVE': 0x2,
            'ACTIVE': 0x4,
            'FIXED': 0x8
        }, ig['Entity']['TYPE'] = {
            'NONE': 0x0,
            'A': 0x1,
            'B': 0x2,
            'BOTH': 0x3
        }, ig['Entity']['checkPair'] = function(_0x55e241, _0x3da29f) {
            _0x55e241['checkAgainst'] & _0x3da29f['type'] && _0x55e241['check'](_0x3da29f), _0x3da29f['checkAgainst'] & _0x55e241['type'] && _0x3da29f['check'](_0x55e241), _0x55e241['collides'] && _0x3da29f['collides'] && _0x55e241['collides'] + _0x3da29f['collides'] > ig['Entity']['COLLIDES']['ACTIVE'] && ig['Entity']['solveCollision'](_0x55e241, _0x3da29f);
        }, ig['Entity']['solveCollision'] = function(_0x54e42b, _0x48dc3c) {
            var _0x162ce3 = null;
            if (_0x54e42b['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x48dc3c['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x162ce3 = _0x54e42b;
            else {
                if (_0x48dc3c['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x54e42b['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x162ce3 = _0x48dc3c;
            }
            _0x54e42b['last']['x'] + _0x54e42b['size']['x'] > _0x48dc3c['last']['x'] && _0x54e42b['last']['x'] < _0x48dc3c['last']['x'] + _0x48dc3c['size']['x'] ? (_0x54e42b['last']['y'] < _0x48dc3c['last']['y'] ? ig['Entity']['seperateOnYAxis'](_0x54e42b, _0x48dc3c, _0x162ce3) : ig['Entity']['seperateOnYAxis'](_0x48dc3c, _0x54e42b, _0x162ce3), _0x54e42b['collideWith'](_0x48dc3c, 'y'), _0x48dc3c['collideWith'](_0x54e42b, 'y')) : _0x54e42b['last']['y'] + _0x54e42b['size']['y'] > _0x48dc3c['last']['y'] && _0x54e42b['last']['y'] < _0x48dc3c['last']['y'] + _0x48dc3c['size']['y'] && (_0x54e42b['last']['x'] < _0x48dc3c['last']['x'] ? ig['Entity']['seperateOnXAxis'](_0x54e42b, _0x48dc3c, _0x162ce3) : ig['Entity']['seperateOnXAxis'](_0x48dc3c, _0x54e42b, _0x162ce3), _0x54e42b['collideWith'](_0x48dc3c, 'x'), _0x48dc3c['collideWith'](_0x54e42b, 'x'));
        }, ig['Entity']['seperateOnXAxis'] = function(_0x180af5, _0x2d3163, _0x16e593) {
            var _0x4d4462 = _0x180af5['pos']['x'] + _0x180af5['size']['x'] - _0x2d3163['pos']['x'];
            _0x16e593 ? (_0x16e593['vel']['x'] = -_0x16e593['vel']['x'] * _0x16e593['bounciness'] + (_0x180af5 === _0x16e593 ? _0x2d3163 : _0x180af5)['vel']['x'], _0x2d3163 = ig['game']['collisionMap']['trace'](_0x16e593['pos']['x'], _0x16e593['pos']['y'], _0x16e593 == _0x180af5 ? -_0x4d4462 : _0x4d4462, 0x0, _0x16e593['size']['x'], _0x16e593['size']['y']), _0x16e593['pos']['x'] = _0x2d3163['pos']['x']) : (_0x16e593 = (_0x180af5['vel']['x'] - _0x2d3163['vel']['x']) / 0x2, _0x180af5['vel']['x'] = -_0x16e593, _0x2d3163['vel']['x'] = _0x16e593, _0x16e593 = ig['game']['collisionMap']['trace'](_0x180af5['pos']['x'], _0x180af5['pos']['y'], -_0x4d4462 / 0x2, 0x0, _0x180af5['size']['x'], _0x180af5['size']['y']), _0x180af5['pos']['x'] = Math['floor'](_0x16e593['pos']['x']), _0x180af5 = ig['game']['collisionMap']['trace'](_0x2d3163['pos']['x'], _0x2d3163['pos']['y'], _0x4d4462 / 0x2, 0x0, _0x2d3163['size']['x'], _0x2d3163['size']['y']), _0x2d3163['pos']['x'] = Math['ceil'](_0x180af5['pos']['x']));
        }, ig['Entity']['seperateOnYAxis'] = function(_0x18e9a4, _0x91008e, _0x11f476) {
            var _0x36e274 = _0x18e9a4['pos']['y'] + _0x18e9a4['size']['y'] - _0x91008e['pos']['y'];
            if (_0x11f476) {
                _0x91008e = _0x18e9a4 === _0x11f476 ? _0x91008e : _0x18e9a4, _0x11f476['vel']['y'] = -_0x11f476['vel']['y'] * _0x11f476['bounciness'] + _0x91008e['vel']['y'];
                var _0x4d013b = 0x0;
                _0x11f476 == _0x18e9a4 && Math['abs'](_0x11f476['vel']['y'] - _0x91008e['vel']['y']) < _0x11f476['minBounceVelocity'] && (_0x11f476['standing'] = !0x0, _0x4d013b = _0x91008e['vel']['x'] * ig['system']['tick']), _0x18e9a4 = ig['game']['collisionMap']['trace'](_0x11f476['pos']['x'], _0x11f476['pos']['y'], _0x4d013b, _0x11f476 == _0x18e9a4 ? -_0x36e274 : _0x36e274, _0x11f476['size']['x'], _0x11f476['size']['y']), _0x11f476['pos']['y'] = _0x18e9a4['pos']['y'], _0x11f476['pos']['x'] = _0x18e9a4['pos']['x'];
            } else ig['game']['gravity'] && (_0x91008e['standing'] || 0x0 < _0x18e9a4['vel']['y']) ? (_0x11f476 = ig['game']['collisionMap']['trace'](_0x18e9a4['pos']['x'], _0x18e9a4['pos']['y'], 0x0, -(_0x18e9a4['pos']['y'] + _0x18e9a4['size']['y'] - _0x91008e['pos']['y']), _0x18e9a4['size']['x'], _0x18e9a4['size']['y']), _0x18e9a4['pos']['y'] = _0x11f476['pos']['y'], 0x0 < _0x18e9a4['bounciness'] && _0x18e9a4['vel']['y'] > _0x18e9a4['minBounceVelocity'] ? _0x18e9a4['vel']['y'] *= -_0x18e9a4['bounciness'] : (_0x18e9a4['standing'] = !0x0, _0x18e9a4['vel']['y'] = 0x0)) : (_0x11f476 = (_0x18e9a4['vel']['y'] - _0x91008e['vel']['y']) / 0x2, _0x18e9a4['vel']['y'] = -_0x11f476, _0x91008e['vel']['y'] = _0x11f476, _0x4d013b = _0x91008e['vel']['x'] * ig['system']['tick'], _0x11f476 = ig['game']['collisionMap']['trace'](_0x18e9a4['pos']['x'], _0x18e9a4['pos']['y'], _0x4d013b, -_0x36e274 / 0x2, _0x18e9a4['size']['x'], _0x18e9a4['size']['y']), _0x18e9a4['pos']['y'] = _0x11f476['pos']['y'], _0x18e9a4 = ig['game']['collisionMap']['trace'](_0x91008e['pos']['x'], _0x91008e['pos']['y'], 0x0, _0x36e274 / 0x2, _0x91008e['size']['x'], _0x91008e['size']['y']), _0x91008e['pos']['y'] = _0x18e9a4['pos']['y']);
        };
    }), ig['baked'] = !0x0, ig['module']('impact.map')['defines'](function() {
        ig['Map'] = ig['Class']['extend']({
            'tilesize': 0x8,
            'width': 0x1,
            'height': 0x1,
            'pxWidth': 0x1,
            'pxHeight': 0x1,
            'data': [
                []
            ],
            'name': null,
            'init': function(_0x101710, _0x2abfa6) {
                this['tilesize'] = _0x101710, this['data'] = _0x2abfa6, this['height'] = _0x2abfa6['length'], this['width'] = _0x2abfa6[0x0]['length'], this['pxWidth'] = this['width'] * this['tilesize'], this['pxHeight'] = this['height'] * this['tilesize'];
            },
            'getTile': function(_0x3eca60, _0x3d6ebf) {
                var _0x2cf952 = Math['floor'](_0x3eca60 / this['tilesize']),
                    _0x4ba31c = Math['floor'](_0x3d6ebf / this['tilesize']);
                return 0x0 <= _0x2cf952 && _0x2cf952 < this['width'] && 0x0 <= _0x4ba31c && _0x4ba31c < this['height'] ? this['data'][_0x4ba31c][_0x2cf952] : 0x0;
            },
            'setTile': function(_0x1695a5, _0x1adbd5, _0x135919) {
                _0x1695a5 = Math['floor'](_0x1695a5 / this['tilesize']), _0x1adbd5 = Math['floor'](_0x1adbd5 / this['tilesize']), 0x0 <= _0x1695a5 && _0x1695a5 < this['width'] && 0x0 <= _0x1adbd5 && _0x1adbd5 < this['height'] && (this['data'][_0x1adbd5][_0x1695a5] = _0x135919);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('impact.collision-map')['requires']('impact.map')['defines'](function() {
        ig['CollisionMap'] = ig['Map']['extend']({
            'lastSlope': 0x1,
            'tiledef': null,
            'init': function(_0x4a6d47, _0x5b834c, _0x1e2bbe) {
                this['parent'](_0x4a6d47, _0x5b834c), this['tiledef'] = _0x1e2bbe || ig['CollisionMap']['defaultTileDef'];
                for (var _0x3e6e14 in this['tiledef']) _0x3e6e14 | 0x0 > this['lastSlope'] && (this['lastSlope'] = _0x3e6e14 | 0x0);
            },
            'trace': function(_0x2352a8, _0x9de74b, _0x4ef1b0, _0x38f08f, _0x15bc57, _0x1d4f33) {
                var _0x2fee49 = {
                        'collision': {
                            'x': !0x1,
                            'y': !0x1,
                            'slope': !0x1
                        },
                        'pos': {
                            'x': _0x2352a8,
                            'y': _0x9de74b
                        },
                        'tile': {
                            'x': 0x0,
                            'y': 0x0
                        }
                    },
                    _0x345749 = Math['ceil']((Math['max'](Math['abs'](_0x4ef1b0), Math['abs'](_0x38f08f)) + 0.1) / this['tilesize']);
                if (0x1 < _0x345749) {
                    for (var _0x5f3f9f = _0x4ef1b0 / _0x345749, _0x43b3a9 = _0x38f08f / _0x345749, _0x120d0c = 0x0; _0x120d0c < _0x345749 && (_0x5f3f9f || _0x43b3a9) && !(this['_traceStep'](_0x2fee49, _0x2352a8, _0x9de74b, _0x5f3f9f, _0x43b3a9, _0x15bc57, _0x1d4f33, _0x4ef1b0, _0x38f08f, _0x120d0c), _0x2352a8 = _0x2fee49['pos']['x'], _0x9de74b = _0x2fee49['pos']['y'], _0x2fee49['collision']['x'] && (_0x4ef1b0 = _0x5f3f9f = 0x0), _0x2fee49['collision']['y'] && (_0x38f08f = _0x43b3a9 = 0x0), _0x2fee49['collision']['slope']); _0x120d0c++);
                } else this['_traceStep'](_0x2fee49, _0x2352a8, _0x9de74b, _0x4ef1b0, _0x38f08f, _0x15bc57, _0x1d4f33, _0x4ef1b0, _0x38f08f, 0x0);
                return _0x2fee49;
            },
            '_traceStep': function(_0x3b3cca, _0x458c1a, _0x2e896f, _0x4c3679, _0x698ee3, _0x173889, _0x59ae66, _0x31f379, _0x824932, _0x37f360) {
                _0x3b3cca['pos']['x'] += _0x4c3679, _0x3b3cca['pos']['y'] += _0x698ee3;
                var _0x4b0938 = 0x0;
                if (_0x4c3679) {
                    var _0x4648f9 = 0x0 < _0x4c3679 ? _0x173889 : 0x0,
                        _0x4e00b2 = 0x0 > _0x4c3679 ? this['tilesize'] : 0x0,
                        _0x4b0938 = Math['max'](Math['floor'](_0x2e896f / this['tilesize']), 0x0),
                        _0xd5a5b4 = Math['min'](Math['ceil']((_0x2e896f + _0x59ae66) / this['tilesize']), this['height']);
                    _0x4c3679 = Math['floor']((_0x3b3cca['pos']['x'] + _0x4648f9) / this['tilesize']);
                    var _0x5e5624 = Math['floor']((_0x458c1a + _0x4648f9) / this['tilesize']);
                    if (0x0 < _0x37f360 || _0x4c3679 == _0x5e5624 || 0x0 > _0x5e5624 || _0x5e5624 >= this['width']) _0x5e5624 = -0x1;
                    if (0x0 <= _0x4c3679 && _0x4c3679 < this['width']) {
                        for (var _0x41e35e = _0x4b0938; _0x41e35e < _0xd5a5b4 && !(-0x1 != _0x5e5624 && (_0x4b0938 = this['data'][_0x41e35e][_0x5e5624], 0x1 < _0x4b0938 && _0x4b0938 <= this['lastSlope'] && this['_checkTileDef'](_0x3b3cca, _0x4b0938, _0x458c1a, _0x2e896f, _0x31f379, _0x824932, _0x173889, _0x59ae66, _0x5e5624, _0x41e35e))); _0x41e35e++)
                            if (_0x4b0938 = this['data'][_0x41e35e][_0x4c3679], 0x1 == _0x4b0938 || _0x4b0938 > this['lastSlope'] || 0x1 < _0x4b0938 && this['_checkTileDef'](_0x3b3cca, _0x4b0938, _0x458c1a, _0x2e896f, _0x31f379, _0x824932, _0x173889, _0x59ae66, _0x4c3679, _0x41e35e)) {
                                if (0x1 < _0x4b0938 && _0x4b0938 <= this['lastSlope'] && _0x3b3cca['collision']['slope']) break;
                                _0x3b3cca['collision']['x'] = !0x0, _0x3b3cca['tile']['x'] = _0x4b0938, _0x458c1a = _0x3b3cca['pos']['x'] = _0x4c3679 * this['tilesize'] - _0x4648f9 + _0x4e00b2, _0x31f379 = 0x0;
                                break;
                            }
                    }
                }
                if (_0x698ee3) {
                    _0x4648f9 = 0x0 < _0x698ee3 ? _0x59ae66 : 0x0, _0x698ee3 = 0x0 > _0x698ee3 ? this['tilesize'] : 0x0, _0x4b0938 = Math['max'](Math['floor'](_0x3b3cca['pos']['x'] / this['tilesize']), 0x0), _0x4e00b2 = Math['min'](Math['ceil']((_0x3b3cca['pos']['x'] + _0x173889) / this['tilesize']), this['width']), _0x41e35e = Math['floor']((_0x3b3cca['pos']['y'] + _0x4648f9) / this['tilesize']), _0xd5a5b4 = Math['floor']((_0x2e896f + _0x4648f9) / this['tilesize']);
                    if (0x0 < _0x37f360 || _0x41e35e == _0xd5a5b4 || 0x0 > _0xd5a5b4 || _0xd5a5b4 >= this['height']) _0xd5a5b4 = -0x1;
                    if (0x0 <= _0x41e35e && _0x41e35e < this['height']) {
                        for (_0x4c3679 = _0x4b0938; _0x4c3679 < _0x4e00b2 && !(-0x1 != _0xd5a5b4 && (_0x4b0938 = this['data'][_0xd5a5b4][_0x4c3679], 0x1 < _0x4b0938 && _0x4b0938 <= this['lastSlope'] && this['_checkTileDef'](_0x3b3cca, _0x4b0938, _0x458c1a, _0x2e896f, _0x31f379, _0x824932, _0x173889, _0x59ae66, _0x4c3679, _0xd5a5b4))); _0x4c3679++)
                            if (_0x4b0938 = this['data'][_0x41e35e][_0x4c3679], 0x1 == _0x4b0938 || _0x4b0938 > this['lastSlope'] || 0x1 < _0x4b0938 && this['_checkTileDef'](_0x3b3cca, _0x4b0938, _0x458c1a, _0x2e896f, _0x31f379, _0x824932, _0x173889, _0x59ae66, _0x4c3679, _0x41e35e)) {
                                if (0x1 < _0x4b0938 && _0x4b0938 <= this['lastSlope'] && _0x3b3cca['collision']['slope']) break;
                                _0x3b3cca['collision']['y'] = !0x0, _0x3b3cca['tile']['y'] = _0x4b0938, _0x3b3cca['pos']['y'] = _0x41e35e * this['tilesize'] - _0x4648f9 + _0x698ee3;
                                break;
                            }
                    }
                }
            },
            '_checkTileDef': function(_0x27e672, _0xab8219, _0x396e03, _0x3c5348, _0x553afd, _0x4babc2, _0x261401, _0x5ae5a7, _0x22c2b8, _0x146696) {
                var _0x4375a0 = this['tiledef'][_0xab8219];
                if (!_0x4375a0) return !0x1;
                _0xab8219 = (_0x4375a0[0x2] - _0x4375a0[0x0]) * this['tilesize'];
                var _0x15cab2 = (_0x4375a0[0x3] - _0x4375a0[0x1]) * this['tilesize'],
                    _0x18ef74 = _0x4375a0[0x4];
                _0x261401 = _0x396e03 + _0x553afd + (0x0 > _0x15cab2 ? _0x261401 : 0x0) - (_0x22c2b8 + _0x4375a0[0x0]) * this['tilesize'], _0x5ae5a7 = _0x3c5348 + _0x4babc2 + (0x0 < _0xab8219 ? _0x5ae5a7 : 0x0) - (_0x146696 + _0x4375a0[0x1]) * this['tilesize'];
                if (0x0 < _0xab8219 * _0x5ae5a7 - _0x15cab2 * _0x261401) {
                    if (0x0 > _0x553afd * -_0x15cab2 + _0x4babc2 * _0xab8219) return _0x18ef74;
                    _0x22c2b8 = Math['sqrt'](_0xab8219 * _0xab8219 + _0x15cab2 * _0x15cab2), _0x146696 = _0x15cab2 / _0x22c2b8, _0x22c2b8 = -_0xab8219 / _0x22c2b8;
                    var _0x2695ea = _0x261401 * _0x146696 + _0x5ae5a7 * _0x22c2b8,
                        _0x4375a0 = _0x146696 * _0x2695ea,
                        _0x2695ea = _0x22c2b8 * _0x2695ea;
                    if (_0x4375a0 * _0x4375a0 + _0x2695ea * _0x2695ea >= _0x553afd * _0x553afd + _0x4babc2 * _0x4babc2) return _0x18ef74 || 0.5 > _0xab8219 * (_0x5ae5a7 - _0x4babc2) - _0x15cab2 * (_0x261401 - _0x553afd);
                    return _0x27e672['pos']['x'] = _0x396e03 + _0x553afd - _0x4375a0, _0x27e672['pos']['y'] = _0x3c5348 + _0x4babc2 - _0x2695ea, _0x27e672['collision']['slope'] = {
                        'x': _0xab8219,
                        'y': _0x15cab2,
                        'nx': _0x146696,
                        'ny': _0x22c2b8
                    }, !0x0;
                }
                return !0x1;
            }
        });
        var _0x1e26c5 = 0x1 / 0x3,
            _0x45c182 = 0x2 / 0x3;
        ig['CollisionMap']['defaultTileDef'] = {
            0x5: [0x0, 0x1, 0x1, _0x45c182, !0x0],
            0x6: [0x0, _0x45c182, 0x1, _0x1e26c5, !0x0],
            0x7: [0x0, _0x1e26c5, 0x1, 0x0, !0x0],
            0x3: [0x0, 0x1, 0x1, 0.5, !0x0],
            0x4: [0x0, 0.5, 0x1, 0x0, !0x0],
            0x2: [0x0, 0x1, 0x1, 0x0, !0x0],
            0xa: [0.5, 0x1, 0x1, 0x0, !0x0],
            0x15: [0x0, 0x1, 0.5, 0x0, !0x0],
            0x20: [_0x45c182, 0x1, 0x1, 0x0, !0x0],
            0x2b: [_0x1e26c5, 0x1, _0x45c182, 0x0, !0x0],
            0x36: [0x0, 0x1, _0x1e26c5, 0x0, !0x0],
            0x1b: [0x0, 0x0, 0x1, _0x1e26c5, !0x0],
            0x1c: [0x0, _0x1e26c5, 0x1, _0x45c182, !0x0],
            0x1d: [0x0, _0x45c182, 0x1, 0x1, !0x0],
            0x19: [0x0, 0x0, 0x1, 0.5, !0x0],
            0x1a: [0x0, 0.5, 0x1, 0x1, !0x0],
            0x18: [0x0, 0x0, 0x1, 0x1, !0x0],
            0xb: [0x0, 0x0, 0.5, 0x1, !0x0],
            0x16: [0.5, 0x0, 0x1, 0x1, !0x0],
            0x21: [0x0, 0x0, _0x1e26c5, 0x1, !0x0],
            0x2c: [_0x1e26c5, 0x0, _0x45c182, 0x1, !0x0],
            0x37: [_0x45c182, 0x0, 0x1, 0x1, !0x0],
            0x10: [0x1, _0x1e26c5, 0x0, 0x0, !0x0],
            0x11: [0x1, _0x45c182, 0x0, _0x1e26c5, !0x0],
            0x12: [0x1, 0x1, 0x0, _0x45c182, !0x0],
            0xe: [0x1, 0.5, 0x0, 0x0, !0x0],
            0xf: [0x1, 0x1, 0x0, 0.5, !0x0],
            0xd: [0x1, 0x1, 0x0, 0x0, !0x0],
            0x8: [0.5, 0x1, 0x0, 0x0, !0x0],
            0x13: [0x1, 0x1, 0.5, 0x0, !0x0],
            0x1e: [_0x1e26c5, 0x1, 0x0, 0x0, !0x0],
            0x29: [_0x45c182, 0x1, _0x1e26c5, 0x0, !0x0],
            0x34: [0x1, 0x1, _0x45c182, 0x0, !0x0],
            0x26: [0x1, _0x45c182, 0x0, 0x1, !0x0],
            0x27: [0x1, _0x1e26c5, 0x0, _0x45c182, !0x0],
            0x28: [0x1, 0x0, 0x0, _0x1e26c5, !0x0],
            0x24: [0x1, 0.5, 0x0, 0x1, !0x0],
            0x25: [0x1, 0x0, 0x0, 0.5, !0x0],
            0x23: [0x1, 0x0, 0x0, 0x1, !0x0],
            0x9: [0x1, 0x0, 0.5, 0x1, !0x0],
            0x14: [0.5, 0x0, 0x0, 0x1, !0x0],
            0x1f: [0x1, 0x0, _0x45c182, 0x1, !0x0],
            0x2a: [_0x45c182, 0x0, _0x1e26c5, 0x1, !0x0],
            0x35: [_0x1e26c5, 0x0, 0x0, 0x1, !0x0],
            0xc: [0x0, 0x0, 0x1, 0x0, !0x1],
            0x17: [0x1, 0x1, 0x0, 0x1, !0x1],
            0x22: [0x1, 0x0, 0x1, 0x1, !0x1],
            0x2d: [0x0, 0x1, 0x0, 0x0, !0x1]
        }, ig['CollisionMap']['staticNoCollision'] = {
            'trace': function(_0x48ad82, _0x2d383b, _0x34b230, _0x1f929c) {
                return {
                    'collision': {
                        'x': !0x1,
                        'y': !0x1,
                        'slope': !0x1
                    },
                    'pos': {
                        'x': _0x48ad82 + _0x34b230,
                        'y': _0x2d383b + _0x1f929c
                    },
                    'tile': {
                        'x': 0x0,
                        'y': 0x0
                    }
                };
            }
        };
    }), ig['baked'] = !0x0, ig['module']('impact.background-map')['requires']('impact.map', 'impact.image')['defines'](function() {
        ig['BackgroundMap'] = ig['Map']['extend']({
            'tiles': null,
            'scroll': {
                'x': 0x0,
                'y': 0x0
            },
            'distance': 0x1,
            'repeat': !0x1,
            'tilesetName': '',
            'foreground': !0x1,
            'enabled': !0x0,
            'preRender': !0x1,
            'preRenderedChunks': null,
            'chunkSize': 0x200,
            'debugChunks': !0x1,
            'anims': {},
            'init': function(_0x43e89a, _0x5b03c8, _0x125743) {
                this['parent'](_0x43e89a, _0x5b03c8), this['setTileset'](_0x125743);
            },
            'setTileset': function(_0x4981e1) {
                this['tilesetName'] = _0x4981e1 instanceof ig['Image'] ? _0x4981e1['path'] : _0x4981e1, this['tiles'] = new ig['Image'](this['tilesetName']), this['preRenderedChunks'] = null;
            },
            'setScreenPos': function(_0x109953, _0x32a6ce) {
                this['scroll']['x'] = _0x109953 / this['distance'], this['scroll']['y'] = _0x32a6ce / this['distance'];
            },
            'preRenderMapToChunks': function() {
                var _0x41b6d4 = this['width'] * this['tilesize'] * ig['system']['scale'],
                    _0x376610 = this['height'] * this['tilesize'] * ig['system']['scale'];
                this['chunkSize'] = Math['min'](Math['max'](_0x41b6d4, _0x376610), this['chunkSize']);
                var _0x584bcb = Math['ceil'](_0x41b6d4 / this['chunkSize']),
                    _0x4409c2 = Math['ceil'](_0x376610 / this['chunkSize']);
                this['preRenderedChunks'] = [];
                for (var _0x4f3c79 = 0x0; _0x4f3c79 < _0x4409c2; _0x4f3c79++) {
                    this['preRenderedChunks'][_0x4f3c79] = [];
                    for (var _0x3a0625 = 0x0; _0x3a0625 < _0x584bcb; _0x3a0625++) this['preRenderedChunks'][_0x4f3c79][_0x3a0625] = this['preRenderChunk'](_0x3a0625, _0x4f3c79, _0x3a0625 == _0x584bcb - 0x1 ? _0x41b6d4 - _0x3a0625 * this['chunkSize'] : this['chunkSize'], _0x4f3c79 == _0x4409c2 - 0x1 ? _0x376610 - _0x4f3c79 * this['chunkSize'] : this['chunkSize']);
                }
            },
            'preRenderChunk': function(_0x570567, _0x508691, _0x1bfc72, _0x57d8ab) {
                var _0x139ea4 = _0x1bfc72 / this['tilesize'] / ig['system']['scale'] + 0x1,
                    _0xa854de = _0x57d8ab / this['tilesize'] / ig['system']['scale'] + 0x1,
                    _0x38c37a = _0x570567 * this['chunkSize'] / ig['system']['scale'] % this['tilesize'],
                    _0x103cf0 = _0x508691 * this['chunkSize'] / ig['system']['scale'] % this['tilesize'];
                _0x570567 = Math['floor'](_0x570567 * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
                var _0x5c65fe = Math['floor'](_0x508691 * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
                _0x508691 = ig['$new']('canvas'), _0x508691['width'] = _0x1bfc72, _0x508691['height'] = _0x57d8ab, _0x508691['retinaResolutionEnabled'] = !0x1, _0x57d8ab = _0x508691['getContext']('2d'), ig['System']['scaleMode'](_0x508691, _0x57d8ab), _0x1bfc72 = ig['system']['context'], ig['system']['context'] = _0x57d8ab;
                for (_0x57d8ab = 0x0; _0x57d8ab < _0x139ea4; _0x57d8ab++)
                    for (var _0x588f3d = 0x0; _0x588f3d < _0xa854de; _0x588f3d++)
                        if (_0x57d8ab + _0x570567 < this['width'] && _0x588f3d + _0x5c65fe < this['height']) {
                            var _0x504fc0 = this['data'][_0x588f3d + _0x5c65fe][_0x57d8ab + _0x570567];
                            _0x504fc0 && this['tiles']['drawTile'](_0x57d8ab * this['tilesize'] - _0x38c37a, _0x588f3d * this['tilesize'] - _0x103cf0, _0x504fc0 - 0x1, this['tilesize']);
                        }
                return ig['system']['context'] = _0x1bfc72, _0x139ea4 = new Image(), _0x139ea4['src'] = _0x508691['toDataURL'](), _0x139ea4['width'] = _0x508691['width'], _0x139ea4['height'] = _0x508691['height'], _0x139ea4;
            },
            'draw': function() {
                this['tiles']['loaded'] && this['enabled'] && (this['preRender'] ? this['drawPreRendered']() : this['drawTiled']());
            },
            'drawPreRendered': function() {
                this['preRenderedChunks'] || this['preRenderMapToChunks']();
                var _0x5f3ed4 = ig['system']['getDrawPos'](this['scroll']['x']),
                    _0x30ce81 = ig['system']['getDrawPos'](this['scroll']['y']);
                if (this['repeat']) var _0x2e7c70 = this['width'] * this['tilesize'] * ig['system']['scale'],
                    _0x5f3ed4 = (_0x5f3ed4 % _0x2e7c70 + _0x2e7c70) % _0x2e7c70,
                    _0x2e7c70 = this['height'] * this['tilesize'] * ig['system']['scale'],
                    _0x30ce81 = (_0x30ce81 % _0x2e7c70 + _0x2e7c70) % _0x2e7c70;
                var _0x2e7c70 = Math['max'](Math['floor'](_0x5f3ed4 / this['chunkSize']), 0x0),
                    _0x3c0d02 = Math['max'](Math['floor'](_0x30ce81 / this['chunkSize']), 0x0),
                    _0x403e70 = Math['ceil']((_0x5f3ed4 + ig['system']['realWidth']) / this['chunkSize']),
                    _0x381f00 = Math['ceil']((_0x30ce81 + ig['system']['realHeight']) / this['chunkSize']),
                    _0x599a84 = this['preRenderedChunks'][0x0]['length'],
                    _0x47a5b5 = this['preRenderedChunks']['length'];
                this['repeat'] || (_0x403e70 = Math['min'](_0x403e70, _0x599a84), _0x381f00 = Math['min'](_0x381f00, _0x47a5b5));
                for (var _0x10a4ec = 0x0, _0x4f8f07 = _0x3c0d02; _0x4f8f07 < _0x381f00; _0x4f8f07++) {
                    for (var _0x2660ec = 0x0, _0x5788b8 = _0x2e7c70; _0x5788b8 < _0x403e70; _0x5788b8++) {
                        var _0x4afdab = this['preRenderedChunks'][_0x4f8f07 % _0x47a5b5][_0x5788b8 % _0x599a84],
                            _0x56b13a = -_0x5f3ed4 + _0x5788b8 * this['chunkSize'] - _0x2660ec,
                            _0x532398 = -_0x30ce81 + _0x4f8f07 * this['chunkSize'] - _0x10a4ec;
                        ig['system']['context']['drawImage'](_0x4afdab, _0x56b13a, _0x532398), ig['Image']['drawCount']++, this['debugChunks'] && (ig['system']['context']['strokeStyle'] = '#f0f', ig['system']['context']['strokeRect'](_0x56b13a, _0x532398, this['chunkSize'], this['chunkSize'])), this['repeat'] && _0x4afdab['width'] < this['chunkSize'] && _0x56b13a + _0x4afdab['width'] < ig['system']['realWidth'] && (_0x2660ec += this['chunkSize'] - _0x4afdab['width'], _0x4f8f07 == _0x3c0d02 && _0x403e70++);
                    }
                    this['repeat'] && _0x4afdab['height'] < this['chunkSize'] && _0x532398 + _0x4afdab['height'] < ig['system']['realHeight'] && (_0x10a4ec += this['chunkSize'] - _0x4afdab['height'], _0x381f00++);
                }
            },
            'drawTiled': function() {
                for (var _0x46be8d = 0x0, _0x44fc16 = null, _0x16d215 = (this['scroll']['x'] / this['tilesize'])['toInt'](), _0x26a5fc = (this['scroll']['y'] / this['tilesize'])['toInt'](), _0x5aba38 = this['scroll']['x'] % this['tilesize'], _0x3e677b = this['scroll']['y'] % this['tilesize'], _0x9f2952 = -_0x5aba38 - this['tilesize'], _0x5aba38 = ig['system']['width'] + this['tilesize'] - _0x5aba38, _0x1e4aa4 = ig['system']['height'] + this['tilesize'] - _0x3e677b, _0x2f52eb = -0x1, _0x3e677b = -_0x3e677b - this['tilesize']; _0x3e677b < _0x1e4aa4; _0x2f52eb++, _0x3e677b += this['tilesize']) {
                    var _0x3fc267 = _0x2f52eb + _0x26a5fc;
                    if (_0x3fc267 >= this['height'] || 0x0 > _0x3fc267) {
                        if (!this['repeat']) continue;
                        _0x3fc267 = (_0x3fc267 % this['height'] + this['height']) % this['height'];
                    }
                    for (var _0x90611b = -0x1, _0xfb810f = _0x9f2952; _0xfb810f < _0x5aba38; _0x90611b++, _0xfb810f += this['tilesize']) {
                        _0x46be8d = _0x90611b + _0x16d215;
                        if (_0x46be8d >= this['width'] || 0x0 > _0x46be8d) {
                            if (!this['repeat']) continue;
                            _0x46be8d = (_0x46be8d % this['width'] + this['width']) % this['width'];
                        }
                        if (_0x46be8d = this['data'][_0x3fc267][_0x46be8d])(_0x44fc16 = this['anims'][_0x46be8d - 0x1]) ? _0x44fc16['draw'](_0xfb810f, _0x3e677b) : this['tiles']['drawTile'](_0xfb810f, _0x3e677b, _0x46be8d - 0x1, this['tilesize']);
                    }
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('impact.game')['requires']('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map')['defines'](function() {
        ig['Game'] = ig['Class']['extend']({
            'clearColor': '#000000',
            'gravity': 0x0,
            'screen': {
                'x': 0x0,
                'y': 0x0
            },
            '_rscreen': {
                'x': 0x0,
                'y': 0x0
            },
            'entities': [],
            'namedEntities': {},
            'collisionMap': ig['CollisionMap']['staticNoCollision'],
            'backgroundMaps': [],
            'backgroundAnims': {},
            'autoSort': !0x1,
            'sortBy': null,
            'cellSize': 0x40,
            '_deferredKill': [],
            '_levelToLoad': null,
            '_doSortEntities': !0x1,
            'staticInstantiate': function() {
                return this['sortBy'] = this['sortBy'] || ig['Game']['SORT']['Z_INDEX'], ig['game'] = this, null;
            },
            'loadLevel': function(_0x4e9973) {
                this['screen'] = {
                    'x': 0x0,
                    'y': 0x0
                }, this['entities'] = [], this['namedEntities'] = {};
                for (var _0x39ba7e = 0x0; _0x39ba7e < _0x4e9973['entities']['length']; _0x39ba7e++) {
                    var _0x55ca2f = _0x4e9973['entities'][_0x39ba7e];
                    this['spawnEntity'](_0x55ca2f['type'], _0x55ca2f['x'], _0x55ca2f['y'], _0x55ca2f['settings']);
                }
                this['sortEntities'](), this['collisionMap'] = ig['CollisionMap']['staticNoCollision'], this['backgroundMaps'] = [];
                for (_0x39ba7e = 0x0; _0x39ba7e < _0x4e9973['layer']['length']; _0x39ba7e++)
                    if (_0x55ca2f = _0x4e9973['layer'][_0x39ba7e], 'collision' == _0x55ca2f['name']) this['collisionMap'] = new ig['CollisionMap'](_0x55ca2f['tilesize'], _0x55ca2f['data']);
                    else {
                        var _0x32c17d = new ig['BackgroundMap'](_0x55ca2f['tilesize'], _0x55ca2f['data'], _0x55ca2f['tilesetName']);
                        _0x32c17d['anims'] = this['backgroundAnims'][_0x55ca2f['tilesetName']] || {}, _0x32c17d['repeat'] = _0x55ca2f['repeat'], _0x32c17d['distance'] = _0x55ca2f['distance'], _0x32c17d['foreground'] = !!_0x55ca2f['foreground'], _0x32c17d['preRender'] = !!_0x55ca2f['preRender'], _0x32c17d['name'] = _0x55ca2f['name'], this['backgroundMaps']['push'](_0x32c17d);
                    }
                for (_0x39ba7e = 0x0; _0x39ba7e < this['entities']['length']; _0x39ba7e++) this['entities'][_0x39ba7e]['ready']();
            },
            'loadLevelDeferred': function(_0x5e939a) {
                this['_levelToLoad'] = _0x5e939a;
            },
            'getMapByName': function(_0x4cd561) {
                if ('collision' == _0x4cd561) return this['collisionMap'];
                for (var _0x135cd3 = 0x0; _0x135cd3 < this['backgroundMaps']['length']; _0x135cd3++)
                    if (this['backgroundMaps'][_0x135cd3]['name'] == _0x4cd561) return this['backgroundMaps'][_0x135cd3];
                return null;
            },
            'getEntityByName': function(_0x49ab02) {
                return this['namedEntities'][_0x49ab02];
            },
            'getEntitiesByType': function(_0x22704c) {
                _0x22704c = 'string' === typeof _0x22704c ? ig['global'][_0x22704c] : _0x22704c;
                for (var _0xef0a59 = [], _0x29e0d9 = 0x0; _0x29e0d9 < this['entities']['length']; _0x29e0d9++) {
                    var _0x4eba60 = this['entities'][_0x29e0d9];
                    _0x4eba60 instanceof _0x22704c && !_0x4eba60['_killed'] && _0xef0a59['push'](_0x4eba60);
                }
                return _0xef0a59;
            },
            'spawnEntity': function(_0x15333c, _0x9b1ac8, _0x4dd2ab, _0x525ae1) {
                var _0x342794 = 'string' === typeof _0x15333c ? ig['global'][_0x15333c] : _0x15333c;
                if (!_0x342794) throw 'Can\x27t\x20spawn\x20entity\x20of\x20type\x20' + _0x15333c;
                return _0x15333c = new _0x342794(_0x9b1ac8, _0x4dd2ab, _0x525ae1 || {}), this['entities']['push'](_0x15333c), _0x15333c['name'] && (this['namedEntities'][_0x15333c['name']] = _0x15333c), _0x15333c;
            },
            'sortEntities': function() {
                this['entities']['sort'](this['sortBy']);
            },
            'sortEntitiesDeferred': function() {
                this['_doSortEntities'] = !0x0;
            },
            'removeEntity': function(_0x47228c) {
                _0x47228c['name'] && delete this['namedEntities'][_0x47228c['name']], _0x47228c['_killed'] = !0x0, _0x47228c['type'] = ig['Entity']['TYPE']['NONE'], _0x47228c['checkAgainst'] = ig['Entity']['TYPE']['NONE'], _0x47228c['collides'] = ig['Entity']['COLLIDES']['NEVER'], this['_deferredKill']['push'](_0x47228c);
            },
            'run': function() {
                this['update'](), this['draw']();
            },
            'update': function() {
                this['_levelToLoad'] && (this['loadLevel'](this['_levelToLoad']), this['_levelToLoad'] = null), this['updateEntities'](), this['checkEntities']();
                for (var _0x36c7cd = 0x0; _0x36c7cd < this['_deferredKill']['length']; _0x36c7cd++) this['_deferredKill'][_0x36c7cd]['erase'](), this['entities']['erase'](this['_deferredKill'][_0x36c7cd]);
                this['_deferredKill'] = [];
                if (this['_doSortEntities'] || this['autoSort']) this['sortEntities'](), this['_doSortEntities'] = !0x1;
                for (var _0x9fa1e8 in this['backgroundAnims']) {
                    var _0x36c7cd = this['backgroundAnims'][_0x9fa1e8],
                        _0x4c7025;
                    for (_0x4c7025 in _0x36c7cd) _0x36c7cd[_0x4c7025]['update']();
                }
            },
            'updateEntities': function() {
                for (var _0x5265ed = 0x0; _0x5265ed < this['entities']['length']; _0x5265ed++) {
                    var _0x3ee49d = this['entities'][_0x5265ed];
                    _0x3ee49d['_killed'] || _0x3ee49d['update']();
                }
            },
            'draw': function() {
                this['clearColor'] && ig['system']['clear'](this['clearColor']), this['_rscreen']['x'] = ig['system']['getDrawPos'](this['screen']['x']) / ig['system']['scale'], this['_rscreen']['y'] = ig['system']['getDrawPos'](this['screen']['y']) / ig['system']['scale'];
                var _0x373047;
                for (_0x373047 = 0x0; _0x373047 < this['backgroundMaps']['length']; _0x373047++) {
                    var _0x12879a = this['backgroundMaps'][_0x373047];
                    if (_0x12879a['foreground']) break;
                    _0x12879a['setScreenPos'](this['screen']['x'], this['screen']['y']), _0x12879a['draw']();
                }
                this['drawEntities']();
                for (_0x373047; _0x373047 < this['backgroundMaps']['length']; _0x373047++) _0x12879a = this['backgroundMaps'][_0x373047], _0x12879a['setScreenPos'](this['screen']['x'], this['screen']['y']), _0x12879a['draw']();
            },
            'drawEntities': function() {
                for (var _0x434b76 = 0x0; _0x434b76 < this['entities']['length']; _0x434b76++) this['entities'][_0x434b76]['draw']();
            },
            'checkEntities': function() {
                for (var _0x397879 = {}, _0x57d872 = 0x0; _0x57d872 < this['entities']['length']; _0x57d872++) {
                    var _0x385bc5 = this['entities'][_0x57d872];
                    if (!(_0x385bc5['type'] == ig['Entity']['TYPE']['NONE'] && _0x385bc5['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x385bc5['collides'] == ig['Entity']['COLLIDES']['NEVER'])) {
                        for (var _0x116404 = {}, _0x16d10c = Math['floor'](_0x385bc5['pos']['y'] / this['cellSize']), _0x35ec7c = Math['floor']((_0x385bc5['pos']['x'] + _0x385bc5['size']['x']) / this['cellSize']) + 0x1, _0x30f1a0 = Math['floor']((_0x385bc5['pos']['y'] + _0x385bc5['size']['y']) / this['cellSize']) + 0x1, _0x522e7c = Math['floor'](_0x385bc5['pos']['x'] / this['cellSize']); _0x522e7c < _0x35ec7c; _0x522e7c++)
                            for (var _0x210d39 = _0x16d10c; _0x210d39 < _0x30f1a0; _0x210d39++)
                                if (_0x397879[_0x522e7c]) {
                                    if (_0x397879[_0x522e7c][_0x210d39]) {
                                        for (var _0x38d5bb = _0x397879[_0x522e7c][_0x210d39], _0x2b2e74 = 0x0; _0x2b2e74 < _0x38d5bb['length']; _0x2b2e74++) _0x385bc5['touches'](_0x38d5bb[_0x2b2e74]) && !_0x116404[_0x38d5bb[_0x2b2e74]['id']] && (_0x116404[_0x38d5bb[_0x2b2e74]['id']] = !0x0, ig['Entity']['checkPair'](_0x385bc5, _0x38d5bb[_0x2b2e74]));
                                        _0x38d5bb['push'](_0x385bc5);
                                    } else _0x397879[_0x522e7c][_0x210d39] = [_0x385bc5];
                                } else _0x397879[_0x522e7c] = {}, _0x397879[_0x522e7c][_0x210d39] = [_0x385bc5];
                    }
                }
            }
        }), ig['Game']['SORT'] = {
            'Z_INDEX': function(_0x17c8e6, _0x22e42d) {
                return _0x17c8e6['zIndex'] - _0x22e42d['zIndex'];
            },
            'POS_X': function(_0x1d8826, _0x390e5b) {
                return _0x1d8826['pos']['x'] + _0x1d8826['size']['x'] - (_0x390e5b['pos']['x'] + _0x390e5b['size']['x']);
            },
            'POS_Y': function(_0x3209c5, _0x741bab) {
                return _0x3209c5['pos']['y'] + _0x3209c5['size']['y'] - (_0x741bab['pos']['y'] + _0x741bab['size']['y']);
            }
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.fps-limit-patch')['requires']('impact.system', 'impact.impact')['defines'](function() {
        ig['System']['inject']({
            'fps': 0x3c
        }), ig['system'] && (ig['system']['fps'] = 0x3c), ig['normalizeVendorAttribute'](window, 'requestAnimationFrame');
        if (window['requestAnimationFrame']) {
            var _0x4530bf = 0x1,
                _0x337de6 = {};
            window['ig']['setAnimation'] = function(_0x313b89, _0x4f3854) {
                var _0x110d6a = _0x4530bf++;
                _0x337de6[_0x110d6a] = !0x0;
                var _0x5b77d9 = 0x3e8 / 0x3c,
                    _0x3a712d = 0x3c,
                    _0x5e2211 = 0x0,
                    _0x1ca690 = 0x0,
                    _0x31afae = 0x0,
                    _0x22805b = 0x0,
                    _0x87839f = function() {
                        _0x337de6[_0x110d6a] && (timestamp = Date['now'](), _0x1ca690 = _0x5e2211, _0x5e2211 = timestamp, _0x22805b = _0x5e2211 - _0x1ca690, _0x3a712d = 0.8 * _0x3a712d + 0.2 * (0x3e8 / _0x22805b), 0x3c < _0x3a712d && 0x3f <= _0x3a712d ? (_0x31afae = Math['min'](Math['max'](0x2 * _0x5b77d9 + _0x1ca690 - timestamp, 0x0), _0x5b77d9), setTimeout(function() {
                            window['requestAnimationFrame'](_0x87839f, _0x4f3854);
                        }, _0x31afae), _0x313b89(timestamp)) : (window['requestAnimationFrame'](_0x87839f, _0x4f3854), _0x313b89()));
                    };
                return window['requestAnimationFrame'](_0x87839f, _0x4f3854), _0x110d6a;
            }, window['ig']['clearAnimation'] = function(_0x4b0385) {
                delete _0x337de6[_0x4b0385];
            };
        } else window['ig']['setAnimation'] = function(_0x5ecb60) {
            return window['setInterval'](_0x5ecb60, 0x3e8 / 0x3c);
        }, window['ig']['clearAnimation'] = function(_0x4cd0bd) {
            window['clearInterval'](_0x4cd0bd);
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.timer-patch')['requires']('impact.timer')['defines'](function() {
        ig['Timer']['step'] = function() {
            var _0x4e8286 = Date['now'](),
                _0x109f06 = (_0x4e8286 - ig['Timer']['_last']) / 0x3e8;
            0x0 > _0x109f06 && (_0x109f06 = 0x0), ig['Timer']['time'] += Math['min'](_0x109f06, ig['Timer']['maxStep']) * ig['Timer']['timeScale'], ig['Timer']['_last'] = _0x4e8286;
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.user-agent-patch')['requires']('impact.impact')['defines'](function() {
        ig['ua']['is_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i ['test'](navigator['userAgent']), ig['ua']['is_safari_or_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit/i ['test'](navigator['userAgent']), ig['ua']['iOS6_tag'] = /OS 6_/i ['test'](navigator['userAgent']), ig['ua']['iOS6'] = (ig['ua']['iPhone'] || ig['ua']['iPad']) && ig['ua']['iOS6_tag'], ig['ua']['iOSgt5'] = ig['ua']['iOS'] && 0x5 < parseInt(navigator['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/)[0x1]), ig['ua']['HTCONE'] = /HTC_One/i ['test'](navigator['userAgent']), ig['ua']['Kindle'] = /Silk/i ['test'](navigator['userAgent']), ig['ua']['touchDevice'] = 'ontouchstart' in window || window['navigator']['msMaxTouchPoints'] || window['navigator']['maxTouchPoints'], ig['ua']['is_mac'] = 'MacIntel' === navigator['platform'], ig['ua']['iOS'] = ig['ua']['touchDevice'] && ig['ua']['is_mac'] || ig['ua']['iOS'], ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['android'] || ig['ua']['iOS6'] || ig['ua']['winPhone'] || ig['ua']['Kindle'] || /mobile/i ['test'](navigator['userAgent']);
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.webkit-image-smoothing-patch')['defines'](function() {
        ig['System'] && (ig['System']['SCALE'] = {
            'CRISP': function(_0xbabf98, _0x3aeca6) {
                _0x3aeca6['imageSmoothingEnabled'] = _0x3aeca6['msImageSmoothingEnabled'] = _0x3aeca6['mozImageSmoothingEnabled'] = _0x3aeca6['oImageSmoothingEnabled'] = !0x1, _0xbabf98['style']['imageRendering'] = '-moz-crisp-edges', _0xbabf98['style']['imageRendering'] = '-o-crisp-edges', _0xbabf98['style']['imageRendering'] = '-webkit-optimize-contrast', _0xbabf98['style']['imageRendering'] = 'crisp-edges', _0xbabf98['style']['msInterpolationMode'] = 'nearest-neighbor';
            },
            'SMOOTH': function(_0x503ef2, _0x2ca4ed) {
                _0x2ca4ed['imageSmoothingEnabled'] = _0x2ca4ed['msImageSmoothingEnabled'] = _0x2ca4ed['oImageSmoothingEnabled'] = !0x0, _0x503ef2['style']['imageRendering'] = '', _0x503ef2['style']['msInterpolationMode'] = '';
            }
        }, ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH']);
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.windowfocus-onMouseDown-patch')['requires']('impact.input')['defines'](function() {
        var _0x9f388c = !0x1;
        try {
            _0x9f388c = window['self'] !== window['top'], !0x1 === _0x9f388c && (_0x9f388c = 0x0 < window['frames']['length']);
        } catch (_0x48cc99) {
            _0x9f388c = !0x0;
        }
        ig['Input']['inject']({
            'keydown': function(_0x58328d) {
                var _0x4c5209 = _0x58328d['target']['tagName'];
                if (!('INPUT' == _0x4c5209 || 'TEXTAREA' == _0x4c5209)) {
                    if (_0x4c5209 = 'keydown' == _0x58328d['type'] ? _0x58328d['keyCode'] : 0x2 == _0x58328d['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], _0x9f388c && 0x0 > _0x4c5209 && window['focus'](), ('touchstart' == _0x58328d['type'] || 'mousedown' == _0x58328d['type']) && this['mousemove'](_0x58328d), _0x4c5209 = this['bindings'][_0x4c5209]) this['actions'][_0x4c5209] = !0x0, this['locks'][_0x4c5209] || (this['presses'][_0x4c5209] = !0x0, this['locks'][_0x4c5209] = !0x0), _0x58328d['stopPropagation'](), _0x58328d['preventDefault']();
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.input-patch')['requires']('impact.input')['defines'](function() {
        ig['Input']['inject']({
            'initMouse': function() {
                this['parent'](), ig['system']['canvas']['addEventListener']('mouseleave', this['mouseleave']['bind'](this), !0x1);
            },
            'mousemove': function(_0x3fa335) {
                this['parent'](_0x3fa335);
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x42079f) {}
            },
            'mouseleave': function() {
                this['clearState']('click');
            },
            'keyup': function(_0x57958b) {
                this['parent'](_0x57958b);
                if (ig['visibilityHandler']) ig['visibilityHandler']['onChange']('focus');
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x5093d0) {}
            },
            'clearState': function(_0x181891) {
                this['actions'][_0x181891] = !0x1;
            },
            'clearAllState': function() {
                for (var _0x6d645f in this['actions']) this['clearState'](_0x6d645f);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.data.vector')['defines'](function() {
        Vector2 = function(_0x118912, _0x3b84c3) {
            this['x'] = _0x118912 || 0x0, this['y'] = _0x3b84c3 || 0x0;
        }, Vector2['prototype'] = {
            'valType': 'number',
            'neg': function() {
                return this['x'] = -this['x'], this['y'] = -this['y'], this;
            },
            'row': function(_0x44dd5d) {
                return typeof _0x44dd5d === this['valType'] && (this['y'] = _0x44dd5d), this['y'];
            },
            'col': function(_0x181664) {
                return typeof _0x181664 === this['valType'] && (this['x'] = _0x181664), this['x'];
            },
            'add': function(_0x335d90) {
                return _0x335d90 instanceof Vector2 ? (this['x'] += _0x335d90['x'], this['y'] += _0x335d90['y']) : (this['x'] += _0x335d90, this['y'] += _0x335d90), this;
            },
            'sub': function(_0x9eb7d3) {
                return _0x9eb7d3 instanceof Vector2 ? (this['x'] -= _0x9eb7d3['x'], this['y'] -= _0x9eb7d3['y']) : (this['x'] -= _0x9eb7d3, this['y'] -= _0x9eb7d3), this;
            },
            'mul': function(_0x5aa582) {
                return _0x5aa582 instanceof Vector2 ? (this['x'] *= _0x5aa582['x'], this['y'] *= _0x5aa582['y']) : (this['x'] *= _0x5aa582, this['y'] *= _0x5aa582), this;
            },
            'div': function(_0x173805) {
                return _0x173805 instanceof Vector2 ? (0x0 != _0x173805['x'] && (this['x'] /= _0x173805['x']), 0x0 != _0x173805['y'] && (this['y'] /= _0x173805['y'])) : 0x0 != _0x173805 && (this['x'] /= _0x173805, this['y'] /= _0x173805), this;
            },
            'equals': function(_0x22f8b1) {
                return this['x'] == _0x22f8b1['x'] && this['y'] == _0x22f8b1['y'];
            },
            'dot': function(_0x4d9779) {
                return this['x'] * _0x4d9779['x'] + this['y'] * _0x4d9779['y'];
            },
            'cross': function(_0x10ba8b) {
                return this['x'] * _0x10ba8b['y'] - this['y'] * _0x10ba8b['x'];
            },
            'length': function() {
                return Math['sqrt'](this['dot'](this));
            },
            'norm': function() {
                return this['divide'](this['length']());
            },
            'min': function() {
                return Math['min'](this['x'], this['y']);
            },
            'max': function() {
                return Math['max'](this['x'], this['y']);
            },
            'toAngles': function() {
                return -Math['atan2'](-this['y'], this['x']);
            },
            'angleTo': function(_0x253ddc) {
                return Math['acos'](this['dot'](_0x253ddc) / (this['length']() * _0x253ddc['length']()));
            },
            'toArray': function(_0x460547) {
                return [this['x'], this['y']]['slice'](0x0, _0x460547 || 0x2);
            },
            'clone': function() {
                return new Vector2(this['x'], this['y']);
            },
            'set': function(_0x263c1d, _0x2859ce) {
                return this['x'] = _0x263c1d, this['y'] = _0x2859ce, this;
            },
            'unit': function() {
                var _0x42a3d8 = this['length']();
                if (0x0 < _0x42a3d8) return new Vector2(this['x'] / _0x42a3d8, this['y'] / _0x42a3d8);
                throw 'Divide\x20by\x200\x20error\x20in\x20unitVector\x20function\x20of\x20vector:' + this;
            },
            'turnRight': function() {
                var _0x2de5e1 = this['x'];
                return this['x'] = -this['y'], this['y'] = _0x2de5e1, this;
            },
            'turnLeft': function() {
                var _0x30d837 = this['x'];
                return this['x'] = this['y'], this['y'] = -_0x30d837, this;
            },
            'rotate': function(_0x539f20) {
                var _0x13a733 = this['clone']();
                return this['x'] = _0x13a733['x'] * Math['cos'](_0x539f20) - _0x13a733['y'] * Math['sin'](_0x539f20), this['y'] = _0x13a733['x'] * Math['sin'](_0x539f20) + _0x13a733['y'] * Math['cos'](_0x539f20), this;
            }
        }, Vector2['negative'] = function(_0xa677ab) {
            return new Vector2(-_0xa677ab['x'], -_0xa677ab['y']);
        }, Vector2['add'] = function(_0x4a23ef, _0x24b738) {
            return _0x24b738 instanceof Vector2 ? new Vector2(_0x4a23ef['x'] + _0x24b738['x'], _0x4a23ef['y'] + _0x24b738['y']) : new Vector2(_0x4a23ef['x'] + v, _0x4a23ef['y'] + v);
        }, Vector2['subtract'] = function(_0x503977, _0x20ba0e) {
            return _0x20ba0e instanceof Vector2 ? new Vector2(_0x503977['x'] - _0x20ba0e['x'], _0x503977['y'] - _0x20ba0e['y']) : new Vector2(_0x503977['x'] - v, _0x503977['y'] - v);
        }, Vector2['multiply'] = function(_0x3c18ce, _0x3b37e1) {
            return _0x3b37e1 instanceof Vector2 ? new Vector2(_0x3c18ce['x'] * _0x3b37e1['x'], _0x3c18ce['y'] * _0x3b37e1['y']) : new Vector2(_0x3c18ce['x'] * v, _0x3c18ce['y'] * v);
        }, Vector2['divide'] = function(_0xe7dc54, _0x4c358f) {
            return _0x4c358f instanceof Vector2 ? new Vector2(_0xe7dc54['x'] / _0x4c358f['x'], _0xe7dc54['y'] / _0x4c358f['y']) : new Vector2(_0xe7dc54['x'] / v, _0xe7dc54['y'] / v);
        }, Vector2['equals'] = function(_0x46ad3c, _0x565a4f) {
            return _0x46ad3c['x'] == _0x565a4f['x'] && _0x46ad3c['y'] == _0x565a4f['y'];
        }, Vector2['dot'] = function(_0x3cea3e, _0x30bee1) {
            return _0x3cea3e['x'] * _0x30bee1['x'] + _0x3cea3e['y'] * _0x30bee1['y'];
        }, Vector2['cross'] = function(_0x4fcc4e, _0x2d280d) {
            return _0x4fcc4e['x'] * _0x2d280d['y'] - _0x4fcc4e['y'] * _0x2d280d['x'];
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.data.color-rgb')['defines'](function() {
        ColorRGB = function(_0x27735e, _0x4a69ce, _0x3aac6b, _0x3c349f) {
            this['r'] = _0x27735e || 0x0, this['g'] = _0x4a69ce || 0x0, this['b'] = _0x3aac6b || 0x0, this['a'] = _0x3c349f || 0x0;
        }, ColorRGB['prototype'] = {
            'setRandomColor': function() {
                this['r'] = Math['round'](0xff * Math['random']()), this['g'] = Math['round'](0xff * Math['random']()), this['b'] = Math['round'](0xff * Math['random']());
            },
            'getStyle': function() {
                return 'rgba(' + this['r'] + ',' + this['g'] + ',' + this['b'] + ',' + this['a'] + ')';
            },
            'getHex': function() {
                for (var _0x55d4c5 = this['r']['toString'](0x10), _0x58ceff = this['g']['toString'](0x10), _0x11c366 = this['b']['toString'](0x10); 0x2 > _0x55d4c5['length'];) _0x55d4c5 = '0' + _0x55d4c5;
                for (; 0x2 > _0x58ceff['length'];) _0x58ceff = '0' + _0x58ceff;
                for (; 0x2 > _0x11c366['length'];) _0x11c366 = '0' + _0x11c366;
                return '#' + _0x55d4c5 + _0x58ceff + _0x11c366;
            },
            'getInvertedColor': function() {
                return new ColorRGB(0xff - this['r'], 0xff - this['g'], 0xff - this['b'], 0xff - this['a']);
            },
            'clone': function() {
                return new ColorRGB(this['r'], this['g'], this['b'], this['a']);
            }
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.font.font-info')['requires']('impact.impact')['defines'](function() {
        ig['FontInfo'] = ig['Class']['extend']({
            'fonts': [{
                'name': 'Signika',
                'source': 'media/fonts/mainfont'
            }, {
                'name': 'montserrat',
                'source': 'media/fonts/montserrat'
            }, {
                'name': 'mainfont2',
                'source': 'media/fonts/mainfont2'
            }, {
                'name': 'helvetica',
                'source': 'media/fonts/helvetica'
            }],
            'init': function() {
                this['registerCssFont']();
            },
            'registerCssFont': function() {
                if (0x0 < this['fonts']['length']) {
                    var _0x53e271 = document['createElement']('style');
                    _0x53e271['type'] = 'text/css';
                    for (var _0x4948d2 = '', _0x31f428 = 0x0; _0x31f428 < this['fonts']['length']; _0x31f428++) var _0x591eff = this['fonts'][_0x31f428],
                        _0x4948d2 = _0x4948d2 + ('@font-face\x20{font-family:\x20\x27' + _0x591eff['name'] + '\x27;src:\x20url(\x27' + _0x591eff['source'] + '.eot\x27);src:\x20url(\x27' + _0x591eff['source'] + '.eot?#iefix\x27)\x20format(\x27embedded-opentype\x27),url(\x27' + _0x591eff['source'] + '.woff\x27)\x20format(\x27woff\x27),url(\x27' + _0x591eff['source'] + '.ttf\x27)\x20format(\x27truetype\x27),url(\x27' + _0x591eff['source'] + '.svg#svgFontName\x27)\x20format(\x27svg\x27)}');
                    _0x53e271['appendChild'](document['createTextNode'](_0x4948d2)), document['head']['appendChild'](_0x53e271);
                }
            },
            'isValid': function() {
                for (var _0x2be3bb = 0x0; _0x2be3bb < this['fonts']['length']; _0x2be3bb++)
                    if (!this['_isValidName'](this['fonts'][_0x2be3bb]['source'])) return !0x1;
                return !0x0;
            },
            '_isValidName': function(_0x21f8b6) {
                return -0x1 == _0x21f8b6['search'](/^[a-z0-9-\/]+$/) ? !0x1 : !0x0;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.font.font-loader')['requires']('impact.impact', 'plugins.font.font-info', 'impact.loader')['defines'](function() {
        ig['FontLoader'] = ig['Class']['extend']({
            'fontInfo': new ig['FontInfo'](),
            'onload': !0x1,
            'onerror': !0x1,
            'init': function(_0x4b9e11, _0x33cd80) {
                this['onload'] = _0x4b9e11, this['onerror'] = _0x33cd80;
            },
            'load': function() {
                this['fontInfo']['isValid']() ? this['_loadByLib']() : console['error']('Only\x20lowercased\x20alphanumeric\x20and\x20dash\x20are\x20allowed\x20for\x20font\x20file\x20name!.\x20Please\x20check\x20the\x20font\x20path');
            },
            '_loadByLib': function() {
                for (var _0x30947f = [], _0x1282fa = 0x0; _0x1282fa < this['fontInfo']['fonts']['length']; _0x1282fa++) {
                    var _0xeb0c8a = new FontFaceObserver(this['fontInfo']['fonts'][_0x1282fa]['name']);
                    _0x30947f['push'](_0xeb0c8a['load']());
                }
                Promise['all'](_0x30947f)['then'](this['onload'])['catch'](this['onerror']);
            }
        }), ig['Loader']['inject']({
            'parentLoad': !0x1,
            'load': function() {
                this['parentLoad'] = this['parent'], new ig['FontLoader'](this['onFontLoad']['bind'](this), this['onFontError']['bind'](this))['load']();
            },
            'onFontLoad': function() {
                this['parentLoad']();
            },
            'onFontError': function() {
                console['error']('Font\x20is\x20not\x20loaded'), this['parentLoad']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.handlers.dom-handler')['defines'](function() {
        ig['DomHandler'] = ig['Class']['extend']({
            'version': '1.1.2',
            'JQUERYAVAILABLE': !0x1,
            'init': function() {
                this['JQUERYAVAILABLE'] = this['_jqueryAvailable']();
            },
            '_jqueryAvailable': function() {
                return 'undefined' !== typeof jQuery;
            },
            'addEvent': function(_0x540409, _0x27f78c, _0x330aa5, _0x3e2408) {
                if (this['JQUERYAVAILABLE']) _0x540409['on'](_0x27f78c, _0x330aa5);
                else _0x540409['addEventListener'](_0x27f78c, _0x330aa5, _0x3e2408);
            },
            'create': function(_0x28b0ac) {
                return this['JQUERYAVAILABLE'] ? $('<' + _0x28b0ac + '>') : ig['$new'](_0x28b0ac);
            },
            'getElementByClass': function(_0x44e053) {
                return this['JQUERYAVAILABLE'] ? $('.' + _0x44e053) : document['getElementsByClassName'](_0x44e053);
            },
            'getElementById': function(_0x3b902c) {
                return this['JQUERYAVAILABLE'] ? 0x0 < $(_0x3b902c)['length'] ? $(_0x3b902c) : null : ig['$'](_0x3b902c);
            },
            'appendChild': function(_0x464fdf, _0x15156e) {
                this['JQUERYAVAILABLE'] ? _0x464fdf['append'](_0x15156e) : _0x464fdf['appendChild'](_0x15156e);
            },
            'appendToBody': function(_0x5c941c) {
                this['JQUERYAVAILABLE'] ? $('body')['append'](_0x5c941c) : document['body']['appendChild'](_0x5c941c);
            },
            'appendToHead': function(_0x16db19) {
                this['JQUERYAVAILABLE'] ? $('head')['append'](_0x16db19) : document['head']['appendChild'](_0x16db19);
            },
            'removeChild': function(_0x4cc2d9, _0x491d42) {
                this['JQUERYAVAILABLE'] ? _0x4cc2d9['remove'](_0x491d42) : _0x4cc2d9['removeChild'](_0x491d42);
            },
            'removeFromBody': function(_0xa79143) {
                this['JQUERYAVAILABLE'] ? $(_0xa79143)['remove']() : document['body']['removeChild'](_0xa79143);
            },
            'removeFromHead': function(_0x4900ef) {
                this['JQUERYAVAILABLE'] ? $(_0x4900ef)['remove']() : document['head']['removeChild'](_0x4900ef);
            },
            'text': function(_0x2d8529, _0x5d63e6) {
                this['JQUERYAVAILABLE'] ? _0x2d8529['text'](_0x5d63e6) : _0x2d8529['innerText'] = _0x5d63e6;
            },
            'val': function(_0x4e2d8e, _0xbef534) {
                this['JQUERYAVAILABLE'] ? _0x4e2d8e['val'](_0xbef534) : _0x4e2d8e['value'] = _0xbef534;
            },
            'getVal': function(_0x36b60b) {
                return this['JQUERYAVAILABLE'] ? _0x36b60b['val']() : _0x36b60b['value'];
            },
            'getAttr': function(_0x457622, _0x25caf3) {
                return this['JQUERYAVAILABLE'] ? _0x457622['attr'](_0x25caf3) : _0x457622['getAttribute'](_0x25caf3);
            },
            'getText': function(_0x476340) {
                return this['JQUERYAVAILABLE'] ? _0x476340['text']() : _0x476340['innerText'];
            },
            'html': function(_0x5199f2, _0x9de582) {
                this['JQUERYAVAILABLE'] ? _0x5199f2['html'](_0x9de582) : _0x5199f2['innerHTML'] = _0x9de582;
            },
            'resize': function(_0x55e6b4, _0x5938f8, _0x331021) {
                if (this['JQUERYAVAILABLE']) _0x55e6b4['width'](_0x5938f8['toFixed'](0x2)), _0x55e6b4['height'](_0x331021['toFixed'](0x2));
                else {
                    var _0x42a3c1 = _0x55e6b4['style']['visibility'];
                    _0x5938f8 = 'width:' + _0x5938f8['toFixed'](0x2) + 'px;\x20height:' + _0x331021['toFixed'](0x2) + 'px;', this['attr'](_0x55e6b4, 'style', _0x5938f8), _0x55e6b4['style']['visibility'] = _0x42a3c1;
                }
            },
            'resizeOffsetLeft': function(_0x1fe836, _0x3ea038, _0x566ea2, _0x4ae1df) {
                if (this['JQUERYAVAILABLE']) _0x1fe836['width'](_0x3ea038['toFixed'](0x2)), _0x1fe836['height'](_0x566ea2['toFixed'](0x2)), _0x1fe836['css']('left', _0x4ae1df);
                else {
                    var _0x5abc8f = _0x1fe836['style']['visibility'];
                    _0x3ea038 = 'width:' + _0x3ea038['toFixed'](0x2) + 'px;\x20height:' + _0x566ea2['toFixed'](0x2) + 'px;\x20left:\x20' + _0x4ae1df['toFixed'](0x2) + 'px;', this['attr'](_0x1fe836, 'style', _0x3ea038), _0x1fe836['style']['visibility'] = _0x5abc8f;
                }
            },
            'resizeOffset': function(_0x521056, _0x36f24a, _0x72111a, _0x442e98, _0x46af5e) {
                if (this['JQUERYAVAILABLE']) _0x521056['width'](_0x36f24a['toFixed'](0x2)), _0x521056['height'](_0x72111a['toFixed'](0x2)), _0x521056['css']('left', _0x442e98), _0x521056['css']('top', _0x46af5e);
                else {
                    var _0x1d7fd8 = _0x521056['style']['visibility'];
                    _0x36f24a = 'width:' + _0x36f24a['toFixed'](0x2) + 'px;\x20height:' + _0x72111a['toFixed'](0x2) + 'px;\x20left:\x20' + _0x442e98['toFixed'](0x2) + 'px;\x20top:\x20' + _0x46af5e['toFixed'](0x2) + 'px;', this['attr'](_0x521056, 'style', _0x36f24a), _0x521056['style']['visibility'] = _0x1d7fd8;
                }
            },
            'css': function(_0x1d669d, _0x3d5cc2) {
                if (this['JQUERYAVAILABLE']) _0x1d669d['css'](_0x3d5cc2);
                else {
                    var _0x335230 = '',
                        _0x4436a0;
                    for (_0x4436a0 in _0x3d5cc2) _0x335230 += _0x4436a0 + ':' + _0x3d5cc2[_0x4436a0] + ';';
                    this['attr'](_0x1d669d, 'style', _0x335230);
                }
            },
            'getOffsets': function(_0x579355) {
                return this['JQUERYAVAILABLE'] ? (_0x579355 = _0x579355['offset'](), {
                    'left': _0x579355['left'],
                    'top': _0x579355['top']
                }) : {
                    'left': _0x579355['offsetLeft'],
                    'top': _0x579355['offsetTop']
                };
            },
            'attr': function(_0x4af71e, _0x509a2a, _0x56782b) {
                if ('undefined' === typeof _0x56782b) return this['JQUERYAVAILABLE'] ? _0x4af71e['attr'](_0x509a2a) : _0x4af71e['getAttribute'](_0x509a2a);
                this['JQUERYAVAILABLE'] ? _0x4af71e['attr'](_0x509a2a, _0x56782b) : _0x4af71e['setAttribute'](_0x509a2a, _0x56782b);
            },
            'show': function(_0x3d17d0) {
                _0x3d17d0 && 'undefined' !== typeof _0x3d17d0 && (this['JQUERYAVAILABLE'] ? (_0x3d17d0['show'](), _0x3d17d0['css']('visibility', 'visible')) : _0x3d17d0 && (_0x3d17d0['style'] ? _0x3d17d0['style']['visibility'] = 'visible' : _0x3d17d0[0x0] && (_0x3d17d0[0x0]['style']['visibility'] = 'visible')));
            },
            'hide': function(_0x169bfe) {
                _0x169bfe && 'undefined' !== typeof _0x169bfe && (this['JQUERYAVAILABLE'] ? (_0x169bfe['hide'](), _0x169bfe['css']('visibility', 'hidden')) : _0x169bfe && (_0x169bfe['style'] ? _0x169bfe['style']['visibility'] = 'hidden' : _0x169bfe[0x0] && (_0x169bfe[0x0]['style']['visibility'] = 'hidden')));
            },
            'getQueryVariable': function(_0x3c1015) {
                for (var _0x34e46f = window['location']['search']['substring'](0x1)['split']('&'), _0x145700 = 0x0; _0x145700 < _0x34e46f['length']; _0x145700++) {
                    var _0x561393 = _0x34e46f[_0x145700]['match'](/([^=]+?)=(.+)/);
                    if (_0x561393 && decodeURIComponent(_0x561393[0x1]) == _0x3c1015) return decodeURIComponent(_0x561393[0x2]);
                }
            },
            'forcedDeviceDetection': function() {
                var _0x21d744 = this['getQueryVariable']('device');
                if (_0x21d744) switch (_0x21d744) {
                    case 'mobile':
                        console['log']('serving\x20mobile\x20version\x20...'), ig['ua']['mobile'] = !0x0;
                        break;
                    case 'desktop':
                        console['log']('serving\x20desktop\x20version\x20...'), ig['ua']['mobile'] = !0x1;
                        break;
                    default:
                        console['log']('serving\x20universal\x20version\x20...');
                } else console['log']('serving\x20universal\x20version\x20...');
            },
            'forcedDeviceRotation': function() {
                var _0x13ec0c = this['getQueryVariable']('force-rotate');
                if (_0x13ec0c) switch (_0x13ec0c) {
                    case 'portrait':
                        console['log']('force\x20rotate\x20to\x20portrait'), window['orientation'] = 0x0;
                        break;
                    case 'landscape':
                        console['log']('force\x20rotate\x20to\x20horizontal'), window['orientation'] = 0x5a;
                        break;
                    default:
                        alert('wrong\x20command/type\x20in\x20param\x20force-rotate.\x20Defaulting\x20value\x20to\x20portrait'), window['orientation'] = 0x0;
                }
            },
            'setZIndex': function(_0x581280, _0x372ad8) {
                this['JQUERYAVAILABLE'] ? _0x581280['css']('zIndex', _0x372ad8) : _0x581280 && (_0x581280['style'] ? _0x581280['style']['zIndex'] = _0x372ad8 : _0x581280[0x0] && (_0x581280[0x0]['style']['zIndex'] = _0x372ad8));
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.handlers.size-handler')['requires']('plugins.data.vector')['defines'](function() {
        ig['SizeHandler'] = ig['Class']['extend']({
            'portraitMode': !0x1,
            'disableStretchToFitOnMobileFlag': !0x1,
            'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
            'enableScalingLimitsOnMobileFlag': !0x1,
            'minScalingOnMobile': 0x0,
            'maxScalingOnMobile': 0x1,
            'enableStretchToFitOnDesktopFlag': !0x1,
            'enableScalingLimitsOnDesktopFlag': !0x1,
            'minScalingOnDesktop': 0x0,
            'maxScalingOnDesktop': 0x1,
            'desktop': {
                'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
                'actualResolution': new Vector2(0x780, 0x438)
            },
            'mobile': {
                'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
                'actualResolution': new Vector2(0x780, 0x438)
            },
            'windowSize': new Vector2(window['innerWidth'], window['innerHeight']),
            'scaleRatioMultiplier': new Vector2(0x1, 0x1),
            'sizeRatio': new Vector2(0x1, 0x1),
            'scale': 0x1,
            'domHandler': null,
            'dynamicClickableEntityDivs': {},
            'coreDivsToResize': ['#canvas', '#play', '#orientate'],
            'init': function(_0x44ac40) {
                this['domHandler'] = _0x44ac40;
                if ('undefined' === typeof _0x44ac40) throw 'undefined\x20Dom\x20Handler\x20for\x20Size\x20Handler';
                this['sizeCalcs'](), this['eventListenerSetup'](), this['samsungFix']();
            },
            'sizeCalcs': function() {
                this['windowSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
                if (ig['ua']['mobile']) {
                    this['mobile']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
                    var _0x5a549e = new Vector2(this['mobile']['actualResolution']['x'], this['mobile']['actualResolution']['y']);
                    this['scaleRatioMultiplier'] = new Vector2(this['mobile']['actualSize']['x'] / _0x5a549e['x'], this['mobile']['actualSize']['y'] / _0x5a549e['y']);
                    if (this['disableStretchToFitOnMobileFlag']) {
                        var _0x1cca1b = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']);
                        this['enableScalingLimitsOnMobileFlag'] && (_0x1cca1b = _0x1cca1b['limit'](this['minScalingOnMobile'], this['maxScalingOnMobile'])), this['mobile']['actualSize']['x'] = _0x5a549e['x'] * _0x1cca1b, this['mobile']['actualSize']['y'] = _0x5a549e['y'] * _0x1cca1b, this['scaleRatioMultiplier']['x'] = _0x1cca1b, this['scaleRatioMultiplier']['y'] = _0x1cca1b;
                    } else this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1;
                } else this['desktop']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']), _0x5a549e = new Vector2(this['desktop']['actualResolution']['x'], this['desktop']['actualResolution']['y']), this['scaleRatioMultiplier'] = new Vector2(this['desktop']['actualSize']['x'] / _0x5a549e['x'], this['desktop']['actualSize']['y'] / _0x5a549e['y']), this['enableStretchToFitOnDesktopFlag'] ? (this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1) : (_0x1cca1b = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']), this['enableScalingLimitsOnDesktopFlag'] && (_0x1cca1b = _0x1cca1b['limit'](this['minScalingOnDesktop'], this['maxScalingOnDesktop'])), this['desktop']['actualSize']['x'] = _0x5a549e['x'] * _0x1cca1b, this['desktop']['actualSize']['y'] = _0x5a549e['y'] * _0x1cca1b, this['scaleRatioMultiplier']['x'] = _0x1cca1b, this['scaleRatioMultiplier']['y'] = _0x1cca1b);
            },
            'resizeLayers': function() {
                for (var _0x580a15 = 0x0; _0x580a15 < this['coreDivsToResize']['length']; _0x580a15++) {
                    var _0x5ec39c = ig['domHandler']['getElementById'](this['coreDivsToResize'][_0x580a15]);
                    if (ig['ua']['mobile']) {
                        if (this['disableStretchToFitOnMobileFlag']) {
                            var _0x231953 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['x'] / 0x2),
                                _0x1032e7 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['y'] / 0x2);
                            0x0 > _0x231953 && (_0x231953 = 0x0), 0x0 > _0x1032e7 && (_0x1032e7 = 0x0), ig['domHandler']['resizeOffset'](_0x5ec39c, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']), _0x231953, _0x1032e7);
                            var _0x242fb9 = !0x1;
                            if (this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth']) {
                                if (this['enableStretchToFitOnAntiPortraitModeFlag']) ig['domHandler']['resizeOffset'](_0x5ec39c, Math['floor'](window['innerWidth']), Math['floor'](window['innerHeight']), 0x0, 0x0);
                                else {
                                    var _0x242fb9 = new Vector2(window['innerWidth'] / this['mobile']['actualResolution']['y'], window['innerHeight'] / this['mobile']['actualResolution']['x']),
                                        _0x231953 = Math['min'](_0x242fb9['x'], _0x242fb9['y']),
                                        _0x242fb9 = this['mobile']['actualResolution']['y'] * _0x231953,
                                        _0x421007 = this['mobile']['actualResolution']['x'] * _0x231953,
                                        _0x231953 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - _0x242fb9 / 0x2),
                                        _0x1032e7 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - _0x421007 / 0x2);
                                    0x0 > _0x231953 && (_0x231953 = 0x0), 0x0 > _0x1032e7 && (_0x1032e7 = 0x0), ig['domHandler']['resizeOffset'](_0x5ec39c, Math['floor'](_0x242fb9), Math['floor'](_0x421007), _0x231953, _0x1032e7);
                                }
                            }
                        } else ig['domHandler']['resize'](_0x5ec39c, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']));
                    } else this['enableStretchToFitOnDesktopFlag'] ? ig['domHandler']['resize'](_0x5ec39c, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y'])) : (_0x231953 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['x'] / 0x2), _0x1032e7 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['y'] / 0x2), 0x0 > _0x231953 && (_0x231953 = 0x0), 0x0 > _0x1032e7 && (_0x1032e7 = 0x0), ig['domHandler']['resizeOffset'](_0x5ec39c, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y']), _0x231953, _0x1032e7));
                }
                for (var _0x49dfe9 in this['adsToResize']) _0x580a15 = ig['domHandler']['getElementById']('#' + _0x49dfe9), _0x5ec39c = ig['domHandler']['getElementById']('#' + _0x49dfe9 + '-Box'), _0x242fb9 = (window['innerWidth'] - this['adsToResize'][_0x49dfe9]['box-width']) / 0x2 + 'px', _0x231953 = (window['innerHeight'] - this['adsToResize'][_0x49dfe9]['box-height']) / 0x2 + 'px', _0x580a15 && ig['domHandler']['css'](_0x580a15, {
                    'width': window['innerWidth'],
                    'height': window['innerHeight']
                }), _0x5ec39c && ig['domHandler']['css'](_0x5ec39c, {
                    'left': _0x242fb9,
                    'top': _0x231953
                });
                _0x580a15 = ig['domHandler']['getElementById']('#canvas'), _0x5ec39c = ig['domHandler']['getOffsets'](_0x580a15), _0x580a15 = _0x5ec39c['left'], _0x5ec39c = _0x5ec39c['top'], _0x242fb9 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
                for (_0x49dfe9 in this['dynamicClickableEntityDivs']) {
                    _0x231953 = ig['domHandler']['getElementById']('#' + _0x49dfe9);
                    if (ig['ua']['mobile']) {
                        var _0x421007 = this['dynamicClickableEntityDivs'][_0x49dfe9]['entity_pos_x'],
                            _0x50273b = this['dynamicClickableEntityDivs'][_0x49dfe9]['entity_pos_y'],
                            _0x2dc22d = this['dynamicClickableEntityDivs'][_0x49dfe9]['width'],
                            _0x1032e7 = this['dynamicClickableEntityDivs'][_0x49dfe9]['height'];
                        this['disableStretchToFitOnMobileFlag'] ? (_0x421007 = Math['floor'](_0x580a15 + _0x421007 * this['scaleRatioMultiplier']['x']) + 'px', _0x50273b = Math['floor'](_0x5ec39c + _0x50273b * this['scaleRatioMultiplier']['y']) + 'px', _0x2dc22d = Math['floor'](_0x2dc22d * this['scaleRatioMultiplier']['x']) + 'px', _0x1032e7 = Math['floor'](_0x1032e7 * this['scaleRatioMultiplier']['y']) + 'px') : (_0x421007 = Math['floor'](_0x421007 * this['sizeRatio']['x']) + 'px', _0x50273b = Math['floor'](_0x50273b * this['sizeRatio']['y']) + 'px', _0x2dc22d = Math['floor'](_0x2dc22d * this['sizeRatio']['x']) + 'px', _0x1032e7 = Math['floor'](_0x1032e7 * this['sizeRatio']['y']) + 'px');
                    } else _0x421007 = this['dynamicClickableEntityDivs'][_0x49dfe9]['entity_pos_x'], _0x50273b = this['dynamicClickableEntityDivs'][_0x49dfe9]['entity_pos_y'], _0x2dc22d = this['dynamicClickableEntityDivs'][_0x49dfe9]['width'], _0x1032e7 = this['dynamicClickableEntityDivs'][_0x49dfe9]['height'], this['enableStretchToFitOnDesktopFlag'] ? (_0x421007 = Math['floor'](_0x421007 * this['sizeRatio']['x']) + 'px', _0x50273b = Math['floor'](_0x50273b * this['sizeRatio']['y']) + 'px', _0x2dc22d = Math['floor'](_0x2dc22d * this['sizeRatio']['x']) + 'px', _0x1032e7 = Math['floor'](_0x1032e7 * this['sizeRatio']['y']) + 'px') : (_0x421007 = Math['floor'](_0x580a15 + _0x421007 * this['scaleRatioMultiplier']['x']) + 'px', _0x50273b = Math['floor'](_0x5ec39c + _0x50273b * this['scaleRatioMultiplier']['y']) + 'px', _0x2dc22d = Math['floor'](_0x2dc22d * this['scaleRatioMultiplier']['x']) + 'px', _0x1032e7 = Math['floor'](_0x1032e7 * this['scaleRatioMultiplier']['y']) + 'px');
                    ig['domHandler']['css'](_0x231953, {
                        'float': 'left',
                        'position': 'absolute',
                        'left': _0x421007,
                        'top': _0x50273b,
                        'width': _0x2dc22d,
                        'height': _0x1032e7,
                        'z-index': 0x3
                    }), this['dynamicClickableEntityDivs'][_0x49dfe9]['font-size'] && ig['domHandler']['css'](_0x231953, {
                        'font-size': this['dynamicClickableEntityDivs'][_0x49dfe9]['font-size'] * _0x242fb9 + 'px'
                    });
                }
                $('#ajaxbar')['width'](this['windowSize']['x']), $('#ajaxbar')['height'](this['windowSize']['y']);
            },
            'resize': function() {
                this['sizeCalcs'](), this['resizeLayers']();
            },
            'reorient': function() {
                console['log']('changing\x20orientation\x20...');
                if (ig['ua']['mobile']) {
                    var _0x3f2956 = !0x1,
                        _0x3f2956 = this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'],
                        _0x1f3702 = this['domHandler']['getElementById']('#orientate'),
                        _0x14513a = this['domHandler']['getElementById']('#game');
                    _0x3f2956 ? (this['domHandler']['show'](_0x1f3702), this['domHandler']['hide'](_0x14513a)) : (this['domHandler']['show'](_0x14513a), this['domHandler']['hide'](_0x1f3702));
                }
                ig['ua']['mobile'] ? (this['resize'](), this['resizeAds']()) : this['resize']();
            },
            'resizeAds': function() {
                for (var _0x2d2005 in this['adsToResize']) {
                    var _0x47b147 = ig['domHandler']['getElementById']('#' + _0x2d2005),
                        _0x37ca97 = ig['domHandler']['getElementById']('#' + _0x2d2005 + '-Box'),
                        _0x1adbc9 = (window['innerWidth'] - this['adsToResize'][_0x2d2005]['box-width']) / 0x2 + 'px',
                        _0x5bec71 = (window['innerHeight'] - this['adsToResize'][_0x2d2005]['box-height']) / 0x2 + 'px';
                    _0x47b147 && ig['domHandler']['css'](_0x47b147, {
                        'width': window['innerWidth'],
                        'height': window['innerHeight']
                    }), _0x37ca97 && ig['domHandler']['css'](_0x37ca97, {
                        'left': _0x1adbc9,
                        'top': _0x5bec71
                    });
                }
            },
            'samsungFix': function() {
                ig['ua']['android'] && !(4.2 > parseFloat(navigator['userAgent']['slice'](navigator['userAgent']['indexOf']('Android') + 0x8, navigator['userAgent']['indexOf']('Android') + 0xb))) && (!(0x0 > navigator['userAgent']['indexOf']('GT')) && !(0x0 < navigator['userAgent']['indexOf']('Chrome')) && !(0x0 < navigator['userAgent']['indexOf']('Firefox'))) && (document['addEventListener']('touchstart', function(_0x273131) {
                    return _0x273131['preventDefault'](), !0x1;
                }, !0x1), document['addEventListener']('touchmove', function(_0x14da24) {
                    return _0x14da24['preventDefault'](), !0x1;
                }, !0x1), document['addEventListener']('touchend', function(_0x5f5020) {
                    return _0x5f5020['preventDefault'](), !0x1;
                }, !0x1));
            },
            'orientationInterval': null,
            'orientationTimeout': null,
            'orientationHandler': function() {
                this['reorient'](), window['scrollTo'](0x0, 0x1);
            },
            'orientationDelayHandler': function() {
                null == this['orientationInterval'] && (this['orientationInterval'] = window['setInterval'](this['orientationHandler']['bind'](this), 0x64)), null == this['orientationTimeout'] && (this['orientationTimeout'] = window['setTimeout'](function() {
                    this['clearAllIntervals']();
                }['bind'](this), 0x7d0));
            },
            'clearAllIntervals': function() {
                window['clearInterval'](this['orientationInterval']), this['orientationInterval'] = null, window['clearTimeout'](this['orientationTimeout']), this['orientationTimeout'] = null;
            },
            'eventListenerSetup': function() {
                ig['ua']['iOS'] ? (window['addEventListener']('orientationchange', this['orientationDelayHandler']['bind'](this)), window['addEventListener']('resize', this['orientationDelayHandler']['bind'](this))) : (window['addEventListener']('orientationchange', this['orientationHandler']['bind'](this)), window['addEventListener']('resize', this['orientationHandler']['bind'](this))), document['addEventListener']('touchmove', function(_0x6c2513) {
                    window['scrollTo'](0x0, 0x1), _0x6c2513['preventDefault']();
                }, {
                    'passive': !0x1
                }), this['chromePullDownRefreshFix']();
            },
            'chromePullDownRefreshFix': function() {
                var _0x323c3e = window['chrome'] || navigator['userAgent']['match']('CriOS'),
                    _0x125398 = 'ontouchstart' in document['documentElement'];
                if (_0x323c3e && _0x125398) {
                    var _0x5017bc = _0x323c3e = !0x1,
                        _0x34dc49 = 0x0,
                        _0x36d725 = !0x1;
                    try {
                        CSS['supports']('overscroll-behavior-y', 'contain') && (_0x323c3e = !0x0);
                    } catch (_0x651a51) {}
                    try {
                        if (_0x323c3e) return document['body']['style']['overscrollBehaviorY'] = 'contain';
                    } catch (_0x3d0df4) {}
                    _0x323c3e = document['head'] || document['body'], _0x125398 = document['createElement']('style'), _0x125398['type'] = 'text/css', _0x125398['styleSheet'] ? _0x125398['styleSheet']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500x;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20auto!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' : _0x125398['appendChild'](document['createTextNode']('\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20auto!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20')), _0x323c3e['appendChild'](_0x125398);
                    try {
                        addEventListener('test', null, {
                            get 'passive' () {
                                _0x5017bc = !0x0;
                            }
                        });
                    } catch (_0x19d62c) {}
                    document['addEventListener']('touchstart', function(_0x4ec8f7) {
                        0x1 === _0x4ec8f7['touches']['length'] && (_0x34dc49 = _0x4ec8f7['touches'][0x0]['clientY'], _0x36d725 = 0x0 === window['pageYOffset']);
                    }, !!_0x5017bc && {
                        'passive': !0x0
                    }), document['addEventListener']('touchmove', function(_0x5372ce) {
                        var _0x4d3404;
                        if (_0x4d3404 = _0x36d725) {
                            _0x36d725 = !0x1, _0x4d3404 = _0x5372ce['touches'][0x0]['clientY'];
                            var _0x25f1bc = _0x4d3404 - _0x34dc49;
                            _0x4d3404 = (_0x34dc49 = _0x4d3404, 0x0 < _0x25f1bc);
                        }
                        if (_0x4d3404) return _0x5372ce['preventDefault']();
                    }, !!_0x5017bc && {
                        'passive': !0x1
                    });
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.handlers.api-handler')['defines'](function() {
        ig['ApiHandler'] = ig['Class']['extend']({
            'apiAvailable': {
                'MJSPreroll': function() {
                    ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS && _SETTINGS['Ad']['Mobile']['Preroll']['Enabled'] && MobileAdInGamePreroll['Initialize']();
                },
                'MJSHeader': function() {
                    ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Header']['Enabled'] && MobileAdInGameHeader['Initialize']();
                },
                'MJSFooter': function() {
                    ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Footer']['Enabled'] && MobileAdInGameFooter['Initialize']();
                },
                'MJSEnd': function() {
                    ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['End']['Enabled'] && MobileAdInGameEnd['Initialize']();
                }
            },
            'run': function(_0x500a84, _0x2c5dbb) {
                if (this['apiAvailable'][_0x500a84]) this['apiAvailable'][_0x500a84](_0x2c5dbb);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.sound-player')['defines'](function() {
        SoundPlayer = ig['Class']['extend']({
            'tagName': 'SoundPlayer',
            'stayMuteFlag': !0x1,
            'debug': !0x1,
            'init': function() {
                this['debug'] && console['log'](this['tagName']);
            },
            'play': function(_0x8ecfc7) {
                this['debug'] && console['log']('play\x20sound\x20', _0x8ecfc7);
            },
            'stop': function() {
                this['debug'] && console['log']('stop\x20sound\x20');
            },
            'volume': function() {
                this['debug'] && console['log']('set\x20volume');
            },
            'mute': function(_0x32ed5b) {
                this['debug'] && console['log']('mute'), 'undefined' === typeof _0x32ed5b ? this['stayMuteFlag'] = !0x0 : _0x32ed5b && (this['stayMuteFlag'] = !0x0);
            },
            'unmute': function(_0x4285f3) {
                this['debug'] && console['log']('unmute'), 'undefined' === typeof _0x4285f3 ? this['stayMuteFlag'] = !0x1 : _0x4285f3 && (this['stayMuteFlag'] = !0x1);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.impact-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
        ImpactMusicPlayer = SoundPlayer['extend']({
            'tagName': 'ImpactMusicPlayer',
            'bgmPlaying': !0x1,
            'soundList': {},
            'init': function(_0x41a35d, _0x8ce4fa) {
                this['parent'](_0x41a35d, _0x8ce4fa);
                for (var _0x15af85 in _0x41a35d) this['soundList'][_0x15af85] = _0x15af85, ig['music']['add'](_0x41a35d[_0x15af85]['path'] + '.*', _0x15af85);
                _0x8ce4fa && _0x8ce4fa['loop'] && (ig['music']['loop'] = _0x8ce4fa['loop']);
            },
            'play': function(_0x18c851) {
                this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, 'undefined' === typeof _0x18c851 ? ig['music']['play'](_0x18c851) : ig['music']['play']());
            },
            'stop': function() {
                this['bgmPlaying'] = !0x1, ig['music']['pause']();
            },
            'volume': function(_0x254b0b) {
                console['log']('impactmusic:', _0x254b0b), ig['music']['volume'] = 0x0 > _0x254b0b ? 0x0 : isNaN(_0x254b0b) ? 0x1 : 0x1 < _0x254b0b ? 0x1 : _0x254b0b;
            },
            'getVolume': function() {
                return ig['music']['volume'];
            },
            'mute': function(_0x5c7ebd) {
                this['parent'](_0x5c7ebd), this['bgmPlaying'] && this['stop']();
            },
            'unmute': function(_0x4701f9) {
                this['parent'](_0x4701f9), this['play']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.impact-sound-player')['requires']('plugins.audio.sound-player')['defines'](function() {
        ImpactSoundPlayer = SoundPlayer['extend']({
            'tagName': 'ImpactSoundPlayer',
            'soundList': {},
            'init': function(_0x4655b4, _0xa03dbc) {
                this['parent'](_0x4655b4, _0xa03dbc);
                for (var _0x578aac in _0x4655b4) {
                    var _0x4b18bd = new ig['Sound'](_0x4655b4[_0x578aac]['path'] + '.*');
                    this['soundList'][_0x578aac] = _0x4b18bd;
                }
            },
            'play': function(_0x4f18eb) {
                this['stayMuteFlag'] || ('object' === typeof _0x4f18eb ? (console['log'](_0x4f18eb + '\x20exists'), _0x4f18eb['play']()) : 'string' === typeof _0x4f18eb && this['soundList'][_0x4f18eb]['play']());
            },
            'stop': function(_0x52cb35) {
                this['parent'](_0x52cb35), _0x52cb35['stop']();
            },
            'volume': function(_0x13c80c) {
                ig['soundManager']['volume'] = 0x0 > _0x13c80c ? 0x0 : isNaN(_0x13c80c) ? 0x1 : 0x1 < _0x13c80c ? 0x1 : _0x13c80c;
            },
            'getVolume': function() {
                return ig['soundManager']['volume'];
            },
            'mute': function(_0x5cc580) {
                this['parent'](_0x5cc580), ig['Sound']['enabled'] = !0x1;
            },
            'unmute': function(_0x2d9f9c) {
                this['parent'](_0x2d9f9c), ig['Sound']['enabled'] = !0x0;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.howler-player')['requires']('plugins.audio.sound-player')['defines'](function() {
        HowlerPlayer = SoundPlayer['extend']({
            'tagName': 'HowlerPlayer',
            'soundList': {},
            'init': function(_0x20a94f, _0x57bc23) {
                this['parent'](_0x20a94f, _0x57bc23);
                for (var _0x38e6c5 in _0x20a94f) {
                    var _0x2202b1 = _0x20a94f[_0x38e6c5]['path'],
                        _0x2202b1 = new Howl({
                            'src': [_0x2202b1 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x2202b1 + '.' + ig['Sound']['FORMAT']['MP3']['ext']]
                        });
                    this['soundList'][_0x38e6c5] = _0x2202b1;
                }
            },
            'play': function(_0x4f6ee0) {
                if (Howler['ctx'] && 'running' !== Howler['ctx']['state']) return Howler['ctx']['resume']();
                this['stayMuteFlag'] || ('object' === typeof _0x4f6ee0 ? _0x4f6ee0['play']() : 'string' === typeof _0x4f6ee0 && this['soundList'][_0x4f6ee0]['play']());
            },
            'stop': function(_0x419835) {
                this['parent'](_0x419835), 'object' === typeof _0x419835 ? _0x419835['stop']() : 'string' === typeof _0x419835 && this['soundList'][_0x419835]['stop']();
            },
            'volume': function(_0x3b4cde) {
                for (var _0x2cbf02 in this['soundList']) {
                    if (0x0 > _0x3b4cde) {
                        this['soundList'][_0x2cbf02]['volume'](0x0);
                        break;
                    }
                    isNaN(_0x3b4cde) ? this['soundList'][_0x2cbf02]['volume'](0x1) : 0x1 < _0x3b4cde ? this['soundList'][_0x2cbf02]['volume'](0x1) : this['soundList'][_0x2cbf02]['volume'](_0x3b4cde);
                }
            },
            'getVolume': function() {
                for (var _0x4b9d26 in this['soundList']) return this['soundList'][_0x4b9d26]['volume']();
            },
            'mute': function(_0x3878de) {
                this['parent'](_0x3878de), Howler['mute'](!0x0);
            },
            'unmute': function(_0xaf01d3) {
                this['parent'](_0xaf01d3), Howler['mute'](!0x1);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.howler-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
        HowlerMusicPlayer = SoundPlayer['extend']({
            'tagName': 'HowlerMusicPlayer',
            'bgmPlaying': !0x1,
            'soundList': {},
            'init': function(_0x6192f1, _0x53698b) {
                this['parent'](_0x6192f1, _0x53698b);
                for (var _0x11292a in _0x6192f1) {
                    var _0x5455af = _0x6192f1[_0x11292a]['path'],
                        _0x5455af = new Howl({
                            'src': [_0x5455af + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x5455af + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                            'loop': !0x0,
                            'autoplay': !0x1,
                            'onend': function() {}['bind'](this)
                        });
                    this['soundList'][_0x11292a] = _0x5455af;
                }
            },
            'play': function(_0x5cfb65) {
                if (!this['stayMuteFlag'] && !this['bgmPlaying']) {
                    if ('object' === typeof _0x5cfb65) this['bgmPlaying'] = !0x0, _0x5cfb65['play']();
                    else {
                        if ('string' === typeof _0x5cfb65) this['bgmPlaying'] = !0x0, this['soundList'][_0x5cfb65]['play']();
                        else
                            for (var _0x1a0b39 in this['soundList']) {
                                this['soundList'][_0x1a0b39]['play'](), this['bgmPlaying'] = !0x0;
                                break;
                            }
                    }
                }
            },
            'stop': function(_0x5e0e11) {
                this['parent'](_0x5e0e11);
                if (this['bgmPlaying']) {
                    for (var _0x4fe2c6 in this['soundList']) this['soundList'][_0x4fe2c6]['stop']();
                    this['bgmPlaying'] = !0x1;
                }
            },
            'volume': function(_0xbf94da) {
                console['log']('howler', _0xbf94da);
                for (var _0x2628fe in this['soundList']) {
                    if (0x0 > _0xbf94da) {
                        this['soundList'][_0x2628fe]['volume'](0x0);
                        break;
                    }
                    isNaN(_0xbf94da) ? this['soundList'][_0x2628fe]['volume'](0x1) : 0x1 < _0xbf94da ? this['soundList'][_0x2628fe]['volume'](0x1) : this['soundList'][_0x2628fe]['volume'](_0xbf94da);
                }
            },
            'getVolume': function() {
                for (var _0x2fb6b9 in this['soundList']) return this['soundList'][_0x2fb6b9]['volume']();
            },
            'mute': function(_0x4920d5) {
                this['parent'](_0x4920d5), Howler['mute'](!0x0);
            },
            'unmute': function(_0x117532) {
                this['parent'](_0x117532), Howler['mute'](!0x1);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.jukebox-player')['requires']('plugins.audio.sound-player')['defines'](function() {
        JukeboxPlayer = SoundPlayer['extend']({
            'tagName': 'JukeboxPlayer',
            'bgmPlaying': !0x1,
            'soundList': {},
            'jukeboxPlayer': null,
            'pausePosition': 0x0,
            'premuteVolume': 0x0,
            'minVolume': 0.001,
            'init': function(_0xc79351, _0xf5ad3e) {
                this['parent'](_0xc79351, _0xf5ad3e);
                for (var _0x11f2e3 in _0xc79351) {
                    this['soundList'][_0x11f2e3] = _0x11f2e3;
                    var _0xc72a50 = _0xc79351[_0x11f2e3]['path'];
                    this['jukeboxPlayer'] = new jukebox['Player']({
                        'resources': [_0xc72a50 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0xc72a50 + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                        'autoplay': !0x1,
                        'spritemap': {
                            'music': {
                                'start': _0xc79351[_0x11f2e3]['startMp3'],
                                'end': _0xc79351[_0x11f2e3]['endMp3'],
                                'loop': !0x0
                            }
                        }
                    });
                }
            },
            'play': function() {
                this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, this['pausePosition'] ? (console['log']('resume'), this['jukeboxPlayer']['resume'](this['pausePosition'])) : (console['log']('play'), this['jukeboxPlayer']['play'](this['jukeboxPlayer']['settings']['spritemap']['music']['start'], !0x0)), this['premuteVolume'] = this['getVolume']());
            },
            'stop': function() {
                this['bgmPlaying'] = !0x1, this['pausePosition'] = this['jukeboxPlayer']['pause']();
            },
            'volume': function(_0x540eff) {
                console['log']('jukebox:', _0x540eff), 0x0 >= _0x540eff ? this['jukeboxPlayer']['setVolume'](this['minVolume']) : isNaN(_0x540eff) ? this['jukeboxPlayer']['setVolume'](0x1) : 0x1 < _0x540eff ? this['jukeboxPlayer']['setVolume'](0x1) : this['jukeboxPlayer']['setVolume'](_0x540eff);
            },
            'getVolume': function() {
                return this['jukeboxPlayer']['getVolume']();
            },
            'mute': function(_0x2524b4) {
                this['parent'](_0x2524b4), this['bgmPlaying'] && (console['log']('jukebox', this['premuteVolume']), this['stayMuteFlag'] || (this['premuteVolume'] = this['getVolume']()), this['jukeboxPlayer']['pause'](), this['jukeboxPlayer']['setVolume'](this['minVolume']));
            },
            'unmute': function(_0x4e8647) {
                this['parent'](_0x4e8647), this['stayMuteFlag'] || (console['log']('jukebox', this['premuteVolume']), this['jukeboxPlayer']['setVolume'](this['premuteVolume']), this['jukeboxPlayer']['resume']());
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.webaudio-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
        WebaudioMusicPlayer = SoundPlayer['extend']({
            'tagName': 'WebaudioMusicPlayer',
            'bgmPlaying': !0x1,
            'isSupported': !0x1,
            'muteFlag': !0x1,
            'pausedTime': 0x0,
            'webaudio': null,
            'useHTML5Audio': !0x1,
            'audio': null,
            'inactiveAudio': null,
            'codecs': null,
            'reinitOnPlay': !0x1,
            'inputList': null,
            '_volume': 0x1,
            'soundList': {},
            'init': function(_0x1a1b41) {
                this['webaudio'] = {
                    'compatibility': {},
                    'gainNode': null,
                    'buffer': null,
                    'source_loop': {},
                    'source_once': {}
                };
                try {
                    Howler && Howler['ctx'] ? this['webaudio']['context'] = Howler['ctx'] : ig && ig['webaudio_ctx'] ? this['webaudio']['context'] = ig['webaudio_ctx'] : (this['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'], this['webaudio']['context'] = new this['AudioContext'](), ig['webaudio_ctx'] = this['webaudio']['context']), this['isSupported'] = !0x0;
                } catch (_0x1864d9) {
                    console['log']('Web\x20Audio\x20API\x20not\x20supported\x20in\x20this\x20browser.'), this['webaudio'] = null, this['useHTML5Audio'] = !0x0;
                }
                if (this['useHTML5Audio']) {
                    if ('undefined' !== typeof Audio) try {
                        new Audio();
                    } catch (_0x4f8abe) {
                        this['useHTML5Audio'] = !0x1;
                    } else this['useHTML5Audio'] = !0x1;
                }
                this['useHTML5Audio'] && (this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x1a1b41));
                if (!this['isSupported']) return null;
                this['webaudio'] && (this['inputList'] = _0x1a1b41, this['initWebAudio'](_0x1a1b41));
            },
            'initWebAudio': function(_0x5eaf1b) {
                ig['ua']['iOS'] && this['initIOSWebAudioUnlock'](), this['webaudio']['gainNode'] = 'undefined' === typeof this['webaudio']['context']['createGain'] ? this['webaudio']['context']['createGainNode']() : this['webaudio']['context']['createGain'](), this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']), this['webaudio']['gainNode']['gain']['value'] = this['_volume'], this['webaudio']['buffer'] = null;
                var _0x4cad09 = 'start',
                    _0xde68a5 = 'stop',
                    _0x492e09 = this['webaudio']['context']['createBufferSource']();
                'function' !== typeof _0x492e09['start'] && (_0x4cad09 = 'noteOn'), this['webaudio']['compatibility']['start'] = _0x4cad09, 'function' !== typeof _0x492e09['stop'] && (_0xde68a5 = 'noteOff'), this['webaudio']['compatibility']['stop'] = _0xde68a5;
                for (var _0x5c9383 in _0x5eaf1b) {
                    this['soundList'][_0x5c9383] = _0x5c9383;
                    var _0xde68a5 = _0x5eaf1b[_0x5c9383]['path'],
                        _0x4cad09 = _0xde68a5 + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
                        _0x4aa91d = _0xde68a5 + '.' + ig['Sound']['FORMAT']['OGG']['ext'];
                    ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x4aa91d = _0x4cad09) : (_0xde68a5 = navigator['userAgent']['toLowerCase'](), -0x1 != _0xde68a5['indexOf']('safari') && -0x1 >= _0xde68a5['indexOf']('chrome') && (_0x4aa91d = _0x4cad09), _0xde68a5['indexOf']('win64') && (_0x4aa91d = _0x4cad09));
                    var _0x2731bf = new XMLHttpRequest();
                    _0x2731bf['open']('GET', _0x4aa91d, !0x0), _0x2731bf['responseType'] = 'arraybuffer', _0x2731bf['onload'] = function() {
                        this['webaudio']['context']['decodeAudioData'](_0x2731bf['response'], function(_0x58bc6d) {
                            this['webaudio']['buffer'] = _0x58bc6d, this['webaudio']['source_loop'] = {}, this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
                        }['bind'](this), function() {
                            console['log']('Error\x20decoding\x20audio\x20\x22' + _0x4aa91d + '\x22.');
                        });
                    }['bind'](this), _0x2731bf['send']();
                    if (0x4 == _0x2731bf['readyState'] && 'undefined' !== typeof Audio) {
                        this['useHTML5Audio'] = !0x0;
                        try {
                            new Audio();
                        } catch (_0x3bb6f5) {
                            this['useHTML5Audio'] = !0x1;
                        }
                        this['useHTML5Audio'] && (console['log']('Using\x20HTML5\x20Audio'), this['webaudio'] = null, this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x5eaf1b));
                    }
                    break;
                }
            },
            'initIOSWebAudioUnlock': function() {
                if (this['webaudio']) {
                    webaudio = this['webaudio'];
                    var _0x27ec5f = function() {
                        var _0x4dfcfc = webaudio['context'],
                            _0xc1963d = _0x4dfcfc['createBuffer'](0x1, 0x1, 0x5622),
                            _0x1d033d = _0x4dfcfc['createBufferSource']();
                        _0x1d033d['buffer'] = _0xc1963d, _0x1d033d['connect'](_0x4dfcfc['destination']), 'undefined' === typeof _0x1d033d['start'] ? _0x1d033d['noteOn'](0x0) : _0x1d033d['start'](0x0), setTimeout(function() {
                            (_0x1d033d['playbackState'] === _0x1d033d['PLAYING_STATE'] || _0x1d033d['playbackState'] === _0x1d033d['FINISHED_STATE']) && window['removeEventListener']('touchend', _0x27ec5f, !0x1);
                        }['bind'](this), 0x0);
                    };
                    window['addEventListener']('touchend', _0x27ec5f, !0x1);
                }
            },
            'initHTML5Audio': function(_0x30c03d) {
                if (this['useHTML5Audio'] && this['audio']) {
                    var _0x4472e5 = this['audio'];
                    this['codecs'] = {}, this['codecs'] = {
                        'mp3': !!_0x4472e5['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                        'opus': !!_0x4472e5['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
                        'ogg': !!_0x4472e5['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                        'wav': !!_0x4472e5['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
                        'aac': !!_0x4472e5['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                        'm4a': !!(_0x4472e5['canPlayType']('audio/x-m4a;') || _0x4472e5['canPlayType']('audio/m4a;') || _0x4472e5['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                        'mp4': !!(_0x4472e5['canPlayType']('audio/x-mp4;') || _0x4472e5['canPlayType']('audio/mp4;') || _0x4472e5['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                        'weba': !!_0x4472e5['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, '')
                    }, this['is'] = {
                        'ff': Boolean(null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']())),
                        'ie': Boolean(document['all'] && !window['opera']),
                        'opera': Boolean(window['opera']),
                        'chrome': Boolean(window['chrome']),
                        'safari': Boolean(!window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()) && window['getComputedStyle'] && !window['globalStorage'] && !window['opera'])
                    }, this['playDelay'] = -0x3c, this['stopDelay'] = 0x1e, this['is']['chrome'] && (this['playDelay'] = -0x19), this['is']['chrome'] && (this['stopDelay'] = 0x19), this['is']['ff'] && (this['playDelay'] = -0x19), this['is']['ff'] && (this['stopDelay'] = 0x55), this['is']['opera'] && (this['playDelay'] = 0x5), this['is']['opera'] && (this['stopDelay'] = 0x0);
                    for (var _0x7633f0 in _0x30c03d) {
                        this['soundList'][_0x7633f0] = _0x7633f0;
                        var _0x2f5d0a = _0x30c03d[_0x7633f0]['path'],
                            _0x4472e5 = _0x2f5d0a + '.' + ig['Sound']['FORMAT']['OGG']['ext'],
                            _0x2f5d0a = _0x2f5d0a + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
                            _0x2d447f = null;
                        this['codecs'][ig['Sound']['FORMAT']['OGG']['ext']['toLowerCase']()] ? _0x2d447f = _0x4472e5 : this['codecs'][ig['Sound']['FORMAT']['MP3']['ext']['toLowerCase']()] && (_0x2d447f = _0x2f5d0a);
                        if (_0x2d447f) {
                            ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x2d447f = _0x2f5d0a) : (_0x30c03d = navigator['userAgent']['toLowerCase'](), -0x1 != _0x30c03d['indexOf']('safari') && -0x1 >= _0x30c03d['indexOf']('chrome') && (_0x2d447f = _0x2f5d0a)), this['audio']['addEventListener']('error', function() {
                                this['audio']['error'] && 0x4 === this['audio']['error']['code'] && (this['isSupported'] = !0x1);
                            }, !0x1), this['audio']['src'] = _0x2d447f, this['audio']['_pos'] = 0x0, this['audio']['preload'] = 'auto', this['audio']['volume'] = this['_volume'], this['inactiveAudio'] = new Audio(), this['inactiveAudio']['src'] = _0x2d447f, this['inactiveAudio']['_pos'] = 0x0, this['inactiveAudio']['preload'] = 'auto', this['inactiveAudio']['volume'] = this['_volume'], this['inactiveAudio']['load']();
                            var _0x52cdc5 = function() {
                                this['_duration'] = this['audio']['duration'], this['_loaded'] || (this['_loaded'] = !0x0), this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop'](), this['audio']['removeEventListener']('canplaythrough', _0x52cdc5, !0x1);
                            }['bind'](this);
                            this['audio']['addEventListener']('canplaythrough', _0x52cdc5, !0x1), this['audio']['load']();
                            break;
                        }
                    }
                }
            },
            'play': function(_0x278c2a, _0x424831) {
                if (this['isSupported']) {
                    if (this['bgmPlaying'] = !0x0, this['webaudio']) {
                        if (!_0x424831 && this['reinitOnPlay'] && this['webaudio']['source_loop']['buffer'] == this['webaudio']['buffer']) {
                            if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                            try {
                                this['webaudio']['context']['close'](), this['webaudio']['context'] = new this['AudioContext'](), this['webaudio']['gainNode'] = this['webaudio']['context']['createGain'](), this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']), this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
                                var _0x40d23e = 'start',
                                    _0x48b5d9 = 'stop',
                                    _0x875fab = this['webaudio']['context']['createBufferSource']();
                                'function' !== typeof _0x875fab['start'] && (_0x40d23e = 'noteOn'), this['webaudio']['compatibility']['start'] = _0x40d23e, 'function' !== typeof _0x875fab['stop'] && (_0x48b5d9 = 'noteOff'), this['webaudio']['compatibility']['stop'] = _0x48b5d9, this['webaudio']['source_loop'] = {}, this['play'](null, !0x0);
                            } catch (_0x92b355) {}
                        }
                        if (this['webaudio']['buffer']) {
                            if (!this['muteFlag'] && (this['bgmPlaying'] = !0x0, !this['webaudio']['source_loop']['_playing'])) {
                                this['webaudio']['source_loop'] = this['webaudio']['context']['createBufferSource'](), this['webaudio']['source_loop']['buffer'] = this['webaudio']['buffer'], this['webaudio']['source_loop']['loop'] = !0x0, this['webaudio']['source_loop']['connect'](this['webaudio']['gainNode']);
                                if (null == _0x278c2a || isNaN(_0x278c2a)) _0x278c2a = 0x0, this['pausedTime'] && (_0x278c2a = this['pausedTime']);
                                this['webaudio']['source_loop']['_startTime'] = this['webaudio']['context']['currentTime'];
                                if ('noteOn' === this['webaudio']['compatibility']['start']) this['webaudio']['source_once'] = this['webaudio']['context']['createBufferSource'](), this['webaudio']['source_once']['buffer'] = this['webaudio']['buffer'], this['webaudio']['source_once']['connect'](this['webaudio']['gainNode']), this['webaudio']['source_once']['noteGrainOn'](0x0, _0x278c2a, this['webaudio']['buffer']['duration'] - _0x278c2a), this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](this['webaudio']['context']['currentTime'] + (this['webaudio']['buffer']['duration'] - _0x278c2a));
                                else this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](0x0, _0x278c2a);
                                this['webaudio']['source_loop']['_playing'] = !0x0;
                            }
                        } else this['bgmPlaying'] = !0x0;
                    } else {
                        if (this['audio']) {
                            var _0x2e978b = this['audio'];
                            if (!this['muteFlag']) {
                                if (this['bgmPlaying'] = !0x0, isNaN(_0x278c2a) && (_0x278c2a = 0x0, this['pausedTime'] && (_0x278c2a = this['pausedTime'])), _0x40d23e = this['_duration'] - _0x278c2a, this['_onEndTimer'] && (clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null), this['_onEndTimer'] = setTimeout(function() {
                                        this['audio']['currentTime'] = 0x0, this['audio']['pause'](), this['pausedTime'] = 0x0;
                                        if (this['inactiveAudio']) {
                                            var _0x438a36 = this['audio'];
                                            this['audio'] = this['inactiveAudio'], this['inactiveAudio'] = _0x438a36;
                                        }
                                        this['play']();
                                    }['bind'](this), 0x3e8 * _0x40d23e + this['playDelay']), 0x4 === _0x2e978b['readyState'] || !_0x2e978b['readyState'] && navigator['isCocoonJS']) _0x2e978b['readyState'] = 0x4, _0x2e978b['currentTime'] = _0x278c2a, _0x2e978b['muted'] = this['muteFlag'] || _0x2e978b['muted'], _0x2e978b['volume'] = this['_volume'], setTimeout(function() {
                                    _0x2e978b['play']();
                                }, 0x0);
                                else {
                                    clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null;
                                    var _0x4e2b9c = function() {
                                        typeof('function' == this['play']) && (this['play'](), _0x2e978b['removeEventListener']('canplaythrough', _0x4e2b9c, !0x1));
                                    }['bind'](this);
                                    _0x2e978b['addEventListener']('canplaythrough', _0x4e2b9c, !0x1);
                                }
                            }
                        }
                    }
                }
            },
            'stop': function() {
                this['bgmPlaying'] = !0x1;
                if (this['isSupported']) {
                    if (this['webaudio']) {
                        if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                    } else {
                        if (this['audio']) {
                            var _0x1a9369 = this['audio'];
                            0x4 == _0x1a9369['readyState'] && (this['pausedTime'] = _0x1a9369['currentTime'], _0x1a9369['currentTime'] = 0x0, _0x1a9369['pause'](), clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null);
                        }
                    }
                }
            },
            'volume': function(_0x4978b1) {
                if (isNaN(_0x4978b1) || null == _0x4978b1) return this['getVolume']();
                this['isSupported'] && (this['_volume'] = _0x4978b1, 0x0 > this['_volume'] ? this['_volume'] = 0x0 : 0x1 < this['_volume'] && (this['_volume'] = 0x1), this['webaudio'] ? this['webaudio']['gainNode'] && (this['webaudio']['gainNode']['gain']['value'] = this['_volume']) : this['audio'] && (this['audio']['volume'] = this['_volume'], this['inactiveAudio'] && (this['inactiveAudio']['volume'] = this['_volume'])));
            },
            'getVolume': function() {
                return !this['isSupported'] ? 0x0 : this['_volume'];
            },
            'mute': function(_0x393d6c) {
                this['parent'](_0x393d6c), !0x1 == this['muteFlag'] && (this['muteFlag'] = !0x0, this['bgmPlaying'] && (this['stop'](), this['bgmPlaying'] = !0x0));
            },
            'unmute': function(_0x47b1ed) {
                this['parent'](_0x47b1ed), !this['stayMuteFlag'] && !0x0 == this['muteFlag'] && (this['muteFlag'] = !0x1, this['bgmPlaying'] && this['play']());
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.sound-info')['defines'](function() {
        SoundInfo = ig['Class']['extend']({
            'FORMATS': {
                'OGG': '.ogg',
                'MP3': '.mp3'
            },
            'sfx': {
                'logosplash1': {
                    'path': 'media/audio/opening/logosplash1'
                },
                'logosplash2': {
                    'path': 'media/audio/opening/logosplash2'
                },
                'staticSound': {
                    'path': 'media/audio/play/static'
                },
                'click': {
                    'path': 'media/audio/click'
                },
                'select': {
                    'path': 'media/audio/select'
                },
                'correct': {
                    'path': 'media/audio/correct'
                },
                'wrong': {
                    'path': 'media/audio/wrong'
                },
                'win': {
                    'path': 'media/audio/win'
                }
            },
            'bgm': {
                'background': {
                    'path': 'media/audio/bgm',
                    'startOgg': 0x0,
                    'endOgg': 21.463,
                    'startMp3': 0x0,
                    'endMp3': 21.463
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.audio.sound-handler')['requires']('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info')['defines'](function() {
        ig['SoundHandler'] = ig['Class']['extend']({
            'bgmPlayer': null,
            'sfxPlayer': null,
            'focusBlurMute': !0x1,
            'soundInfo': new SoundInfo(),
            'init': function() {
                console['log']('Initiating\x20sound\x20handler'), ig['ua']['mobile'] ? (this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']), this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
                    'loop': !0x0
                }), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new JukeboxPlayer(this['soundInfo']['bgm'], {
                    'loop': !0x0
                }))) : (this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']), this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
                    'loop': !0x0
                }), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new ImpactMusicPlayer(this['soundInfo']['bgm'], {
                    'loop': !0x0
                })));
            },
            'unlockWebAudio': function() {
                Howler && (Howler['ctx'] && 'running' !== Howler['ctx']['state'] && Howler['ctx']['resume'](), Howler['_audioUnlocked'] || 'function' === typeof Howler['_unlockAudio'] && Howler['_unlockAudio']()), ig && ig['webaudio_ctx'] && ig['webaudio_ctx']['state'] && 'running' !== ig['webaudio_ctx']['state'] && ig['webaudio_ctx']['resume'](), this['bgmPlayer']['webaudio'] && this['bgmPlayer']['webaudio']['context'] && this['bgmPlayer']['webaudio']['context']['state'] && 'running' !== this['bgmPlayer']['webaudio']['context']['state'] && this['bgmPlayer']['webaudio']['context']['resume']();
            },
            'checkBGM': function() {
                return this['bgmPlayer']['stayMuteFlag'];
            },
            'checkSFX': function() {
                return this['sfxPlayer']['stayMuteFlag'];
            },
            'muteSFX': function(_0x5ab7ac) {
                this['sfxPlayer'] && this['sfxPlayer']['mute'](_0x5ab7ac);
            },
            'muteBGM': function(_0x46866c) {
                this['bgmPlayer'] && this['bgmPlayer']['mute'](_0x46866c);
            },
            'unmuteSFX': function(_0x567021) {
                this['sfxPlayer'] && this['sfxPlayer']['unmute'](_0x567021);
            },
            'unmuteBGM': function(_0x50956e) {
                this['bgmPlayer'] && this['bgmPlayer']['unmute'](_0x50956e);
            },
            'muteAll': function(_0x5def90) {
                this['muteSFX'](_0x5def90), this['muteBGM'](_0x5def90);
            },
            'unmuteAll': function(_0x50f86c) {
                this['unlockWebAudio'](), this['unmuteSFX'](_0x50f86c), this['unmuteBGM'](_0x50f86c);
            },
            'forceMuteAll': function() {
                this['focusBlurMute'] || this['muteAll'](!0x1), this['focusBlurMute'] = !0x0;
            },
            'forceUnMuteAll': function() {
                this['focusBlurMute'] && (this['unmuteAll'](!0x1), this['focusBlurMute'] = !0x1);
            },
            'saveVolume': function() {
                this['sfxPlayer'] && ig['game']['io']['storageSet']('soundVolume', this['sfxPlayer']['getVolume']()), this['bgmPlayer'] && ig['game']['io']['storageSet']('musicVolume', this['bgmPlayer']['getVolume']());
            },
            'forceLoopBGM': function() {
                var _0x460f91;
                if (!this['focusBlurMute'] && this['bgmPlayer']['bgmPlaying'] && this['bgmPlayer']) {
                    var _0x4be837 = this['bgmPlayer']['jukeboxPlayer'];
                    if (_0x4be837) {
                        null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']()), _0x460f91 = Boolean(window['chrome']), !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']());
                        var _0x154ab2 = 0.1;
                        ig['ua']['mobile'] && (_0x154ab2 = 0.115, ig['ua']['android'] && (_0x154ab2 = 0.45, _0x460f91 && (_0x154ab2 = 0.3))), _0x4be837['settings']['spritemap']['music'] && (_0x460f91 = _0x4be837['settings']['spritemap']['music']['end'] - _0x154ab2, _0x4be837['getCurrentTime']() >= _0x460f91 && (_0x460f91 = _0x4be837['settings']['spritemap']['music']['start'], ig['ua']['android'] ? this['forcelooped'] || (_0x4be837['play'](_0x460f91, !0x0), this['forcelooped'] = !0x0, setTimeout(function() {
                            ig['soundHandler']['forcelooped'] = !0x1;
                        }, _0x154ab2)) : _0x4be837['setCurrentTime'](_0x460f91)));
                    } else 'ImpactMusicPlayer' == this['bgmPlayer']['tagName'] && (null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']()), _0x460f91 = Boolean(window['chrome']), !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()), _0x154ab2 = 0.1, ig['ua']['mobile'] && (_0x154ab2 = 0.115, ig['ua']['android'] && (_0x154ab2 = 0.45, _0x460f91 && (_0x154ab2 = 0.3))), _0x4be837 = 0x0, 'mp3' == ig['soundManager']['format']['ext'] && (_0x4be837 = 0.05), ig['music']['currentTrack'] && (_0x460f91 = ig['music']['currentTrack']['duration'] - _0x154ab2, ig['music']['currentTrack']['currentTime'] >= _0x460f91 && (ig['ua']['android'] ? this['forcelooped'] || (ig['music']['currentTrack']['pause'](), ig['music']['currentTrack']['currentTime'] = _0x4be837, ig['music']['currentTrack']['play'](), this['forcelooped'] = !0x0, setTimeout(function() {
                        ig['soundHandler']['forcelooped'] = !0x1;
                    }, _0x154ab2)) : ig['music']['currentTrack']['currentTime'] = _0x4be837)));
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.handlers.visibility-handler')['requires']('plugins.audio.sound-handler')['defines'](function() {
        ig['VisibilityHandler'] = ig['Class']['extend']({
            'version': '1.1.2',
            'config': {
                'muteOnBlur': !0x0,
                'pauseOnBlur': !0x0,
                'clearInputStateOnBlur': !0x0,
                'allowResumeWithoutFocus': {
                    'desktop': !0x0,
                    'mobile': {
                        'kaios': !0x1,
                        'default': !0x0
                    }
                },
                'handlerDelay': {
                    'desktop': 0x0,
                    'mobile': {
                        'kaios': 0x0,
                        'default': 0x0
                    }
                },
                'autoFocusOnResume': {
                    'desktop': !0x0,
                    'mobile': {
                        'kaios': !0x1,
                        'default': !0x0
                    }
                },
                'autoFocusAfterResume': {
                    'desktop': !0x0,
                    'mobile': {
                        'kaios': !0x1,
                        'default': !0x0
                    }
                }
            },
            'browserPrefixes': ['o', 'ms', 'moz', 'webkit'],
            'browserPrefix': null,
            'hiddenPropertyName': null,
            'visibilityEventName': null,
            'visibilityStateName': null,
            'isShowingOverlay': !0x1,
            'isFocused': !0x1,
            'isPaused': !0x1,
            'init': function() {
                this['initVisibilityHandler'](), this['initFocusHandler'](), this['initPageTransitionHandler'](), ig['visibilityHandler'] = this;
            },
            'pauseHandler': function() {
                !0x0 === this['config']['clearInputStateOnBlur'] && 'undefined' !== typeof ig['input'] && null !== ig['input'] && 'function' === typeof ig['input']['clearAllState'] && ig['input']['clearAllState'](), !0x0 === this['config']['pauseOnBlur'] && 'undefined' !== typeof ig['game'] && null !== ig['game'] && 'undefined' !== typeof ig['game']['pauseGame'] && ig['game']['pauseGame'](), !0x0 === this['config']['muteOnBlur'] && 'undefined' !== typeof ig['soundHandler'] && null !== ig['soundHandler'] && 'function' === typeof ig['soundHandler']['forceMuteAll'] && ig['soundHandler']['forceMuteAll']();
            },
            'resumeHandler': function() {
                'undefined' !== typeof ig['input'] && null !== ig['input'] && 'function' === typeof ig['input']['clearAllState'] && ig['input']['clearAllState'](), 'undefined' !== typeof ig['game'] && null !== ig['game'] && 'undefined' !== typeof ig['game']['resumeGame'] && ig['game']['resumeGame'](), 'undefined' !== typeof ig['soundHandler'] && null !== ig['soundHandler'] && 'function' === typeof ig['soundHandler']['forceUnMuteAll'] && ig['soundHandler']['forceUnMuteAll']();
            },
            'initVisibilityHandler': function() {
                this['browserPrefix'] = this['getBrowserPrefix'](), this['hiddenPropertyName'] = this['getHiddenPropertyName'](this['browserPrefix']), this['visibilityEventName'] = this['getVisibilityEventName'](this['browserPrefix']), this['visibilityStateName'] = this['getVisibilityStateName'](this['browserPrefix']), this['visibilityEventName'] && document['addEventListener'](this['visibilityEventName'], this['onChange']['bind'](this), !0x0);
            },
            'initFocusHandler': function() {
                window['addEventListener']('blur', this['onChange']['bind'](this), !0x0), document['addEventListener']('blur', this['onChange']['bind'](this), !0x0), document['addEventListener']('focusout', this['onChange']['bind'](this), !0x0), window['addEventListener']('focus', this['onChange']['bind'](this), !0x0), document['addEventListener']('focus', this['onChange']['bind'](this), !0x0), document['addEventListener']('focusin', this['onChange']['bind'](this), !0x0);
            },
            'initPageTransitionHandler': function() {
                window['addEventListener']('pagehide', this['onChange']['bind'](this), !0x0), window['addEventListener']('pageshow', this['onChange']['bind'](this), !0x0);
            },
            'getBrowserPrefix': function() {
                var _0x26d062 = null;
                return this['browserPrefixes']['forEach'](function(_0x5a498e) {
                    if (this['getHiddenPropertyName'](_0x5a498e) in document) return _0x26d062 = _0x5a498e;
                }['bind'](this)), _0x26d062;
            },
            'getHiddenPropertyName': function(_0x1bd5f7) {
                return _0x1bd5f7 ? _0x1bd5f7 + 'Hidden' : 'hidden';
            },
            'getVisibilityEventName': function(_0x1c4638) {
                return (_0x1c4638 ? _0x1c4638 : '') + 'visibilitychange';
            },
            'getVisibilityStateName': function(_0x4a0126) {
                return _0x4a0126 ? _0x4a0126 + 'VisibilityState' : 'visibilityState';
            },
            'hasView': function() {
                return !(document[this['hiddenPropertyName']] || 'visible' !== document[this['visibilityStateName']]);
            },
            'hasFocus': function() {
                return document['hasFocus']() || this['isFocused'];
            },
            'onOverlayShow': function() {
                this['systemPaused'](), this['isShowingOverlay'] = !0x0;
            },
            'onOverlayHide': function() {
                this['isShowingOverlay'] = !0x1, this['systemResumed']();
            },
            'systemPaused': function() {
                if (this['isPaused']) return !0x1;
                return this['pauseHandler'](), this['isPaused'] = !0x0;
            },
            'systemResumed': function() {
                if (!this['isPaused'] || !this['hasView']() || this['isShowingOverlay']) return !0x1;
                if (!this['hasFocus']()) {
                    if (ig['ua']['mobile']) {
                        if (this['isKaiOS']()) {
                            if (!this['config']['allowResumeWithoutFocus']['mobile']['kaios']) return !0x1;
                        } else {
                            if (!this['config']['allowResumeWithoutFocus']['mobile']['default']) return !0x1;
                        }
                    } else {
                        if (!this['config']['allowResumeWithoutFocus']['desktop']) return !0x1;
                    }
                }
                return this['focusOnResume'](), this['resumeHandler'](), this['focusAfterResume'](), this['isPaused'] = !0x1, !0x0;
            },
            'isKaiOS': function() {
                return /KAIOS/ ['test'](navigator['userAgent']) || !0x1;
            },
            'focusOnResume': function() {
                return ig['ua']['mobile'] ? this['isKaiOS']() ? this['config']['autoFocusOnResume']['mobile']['kaios'] : this['config']['autoFocusOnResume']['mobile']['default'] : this['config']['autoFocusOnResume']['desktop'];
            },
            'focusAfterResume': function() {
                return ig['ua']['mobile'] ? this['isKaiOS']() ? this['config']['autoFocusAfterResume']['mobile']['kaios'] : this['config']['autoFocusAfterResume']['mobile']['default'] : this['config']['autoFocusAfterResume']['desktop'];
            },
            'focus': function(_0x152f7f) {
                window['focus'] && _0x152f7f && (document['activeElement'] && 'function' === typeof document['activeElement']['blur'] && document['activeElement']['blur'](), window['focus']());
            },
            'handleDelayedEvent': function(_0x526a8d) {
                if (!this['hasView']() || 'pause' === _0x526a8d['type'] || 'pageHide' === _0x526a8d['type'] || 'blur' === _0x526a8d['type'] || 'focusout' === _0x526a8d['type']) {
                    if ('blur' === _0x526a8d['type'] || 'focusout' === _0x526a8d['type']) {
                        var _0x1c1831 = _0x526a8d['path'] || _0x526a8d['composedPath'] && _0x526a8d['composedPath']();
                        if (_0x1c1831 && 0x2 < _0x1c1831['length'] || _0x526a8d['srcElement'] && ('INPUT' === _0x526a8d['srcElement']['tagName'] || 'TEXTAREA' === _0x526a8d['srcElement']['tagName'])) return !0x1;
                        this['isFocused'] = !0x1;
                    }
                    return this['systemPaused'](_0x526a8d);
                }
                if ('focus' === _0x526a8d['type'] || 'focusin' === _0x526a8d['type']) this['isFocused'] = !0x0;
                return this['systemResumed'](_0x526a8d);
            },
            'startDelayedEventHandler': function(_0x52679b) {
                ig['ua']['mobile'] ? this['isKaiOS']() ? 0x0 < this['config']['handlerDelay']['mobile']['kaios'] ? window['setTimeout'](function(_0x55e2ee) {
                    this['handleDelayedEvent'](_0x55e2ee);
                }['bind'](this, _0x52679b), this['config']['handlerDelay']['mobile']) : this['handleDelayedEvent'](_0x52679b) : 0x0 < this['config']['handlerDelay']['mobile']['default'] ? window['setTimeout'](function(_0x1ce871) {
                    this['handleDelayedEvent'](_0x1ce871);
                }['bind'](this, _0x52679b), this['config']['handlerDelay']['mobile']) : this['handleDelayedEvent'](_0x52679b) : 0x0 < this['config']['handlerDelay']['desktop'] ? window['setTimeout'](function(_0x34b08e) {
                    this['handleDelayedEvent'](_0x34b08e);
                }['bind'](this, _0x52679b), this['config']['handlerDelay']['desktop']) : this['handleDelayedEvent'](_0x52679b);
            },
            'onChange': function(_0x379122) {
                this['startDelayedEventHandler'](_0x379122);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.storage')['defines'](function() {
        ig['Storage'] = ig['Class']['extend']({
            'staticInstantiate': function() {
                return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
            },
            'init': function() {
                ig['Storage']['instance'] = this;
            },
            'isCapable': function() {
                return 'undefined' !== typeof window['localStorage'];
            },
            'isSet': function(_0x1a586a) {
                return null !== this['get'](_0x1a586a);
            },
            'initUnset': function(_0x3b0e6a, _0x3a40d6) {
                null === this['get'](_0x3b0e6a) && this['set'](_0x3b0e6a, _0x3a40d6);
            },
            'get': function(_0x475776) {
                if (!this['isCapable']()) return null;
                try {
                    return JSON['parse'](localStorage['getItem'](_0x475776));
                } catch (_0x97df48) {
                    return window['localStorage']['getItem'](_0x475776);
                }
            },
            'getInt': function(_0x1b7d9a) {
                return ~~this['get'](_0x1b7d9a);
            },
            'getFloat': function(_0x2334f4) {
                return parseFloat(this['get'](_0x2334f4));
            },
            'getBool': function(_0x2c8fee) {
                return !!this['get'](_0x2c8fee);
            },
            'key': function(_0x1ff029) {
                return this['isCapable']() ? window['localStorage']['key'](_0x1ff029) : null;
            },
            'set': function(_0x356f71, _0xbb8083) {
                if (!this['isCapable']()) return null;
                try {
                    window['localStorage']['setItem'](_0x356f71, JSON['stringify'](_0xbb8083));
                } catch (_0xc19bee) {
                    console['log'](_0xc19bee);
                }
            },
            'setHighest': function(_0x3eecb8, _0x51cd13) {
                _0x51cd13 > this['getFloat'](_0x3eecb8) && this['set'](_0x3eecb8, _0x51cd13);
            },
            'remove': function(_0xc2a13f) {
                if (!this['isCapable']()) return null;
                window['localStorage']['removeItem'](_0xc2a13f);
            },
            'clear': function() {
                if (!this['isCapable']()) return null;
                window['localStorage']['clear']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.mouse')['requires']('plugins.data.vector')['defines'](function() {
        Mouse = ig['Class']['extend']({
            'pos': new Vector2(0x0, 0x0),
            'bindings': {
                'click': [ig['KEY']['MOUSE1']]
            },
            'init': function() {
                ig['input']['initMouse']();
                for (var _0x17e09f in this['bindings']) {
                    this[_0x17e09f] = _0x17e09f;
                    for (var _0x4c71a9 = 0x0; _0x4c71a9 < this['bindings'][_0x17e09f]['length']; _0x4c71a9++) ig['input']['bind'](this['bindings'][_0x17e09f][_0x4c71a9], _0x17e09f);
                }
            },
            'getLast': function() {
                return this['pos'];
            },
            'getPos': function() {
                var _0x3f225f = ig['system']['scale'] * ((ig['system']['canvas']['offsetWidth'] || ig['system']['realWidth']) / ig['system']['realWidth']);
                return this['pos']['set'](ig['input']['mouse']['x'] * _0x3f225f / ig['sizeHandler']['sizeRatio']['x'] / ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['input']['mouse']['y'] * _0x3f225f / ig['sizeHandler']['sizeRatio']['y'] / ig['sizeHandler']['scaleRatioMultiplier']['y']), this['pos']['clone']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.keyboard')['defines'](function() {
        Keyboard = ig['Class']['extend']({
            'bindings': {
                'PREVENT_PAGE_SCROLLING_OVER_IFRAME': [ig['KEY']['UP_ARROW'], ig['KEY']['DOWN_ARROW'], ig['KEY']['LEFT_ARROW'], ig['KEY']['RIGHT_ARROW'], ig['KEY']['PAGE_UP'], ig['KEY']['PAGE_DOWN']],
                'up': [ig['KEY']['W'], ig['KEY']['UP_ARROW']],
                'right': [ig['KEY']['D'], ig['KEY']['RIGHT_ARROW']],
                'left': [ig['KEY']['A'], ig['KEY']['LEFT_ARROW']],
                'down': [ig['KEY']['S'], ig['KEY']['DOWN_ARROW'], ig['KEY']['SPACE']]
            },
            'init': function() {
                for (var _0x17dee3 in this['bindings']) {
                    this[_0x17dee3] = _0x17dee3;
                    for (var _0x33447d = 0x0; _0x33447d < this['bindings'][_0x17dee3]['length']; _0x33447d++) ig['input']['bind'](this['bindings'][_0x17dee3][_0x33447d], _0x17dee3);
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.gamepad-input')['defines'](function() {
        ig['PADKEY'] = {
            'BUTTON_0': 0x0,
            'PADBUTTON_1': 0x1,
            'BUTTON_2': 0x2,
            'BUTTON_3': 0x3,
            'BUTTON_LEFT_BUMPER': 0x4,
            'BUTTON_RIGHT_BUMPER': 0x5,
            'BUTTON_LEFT_TRIGGER': 0x6,
            'BUTTON_RIGHT_TRIGGER': 0x7,
            'BUTTON_LEFT_JOYSTICK': 0xa,
            'BUTTON_RIGHT_JOYSTICK': 0xb,
            'BUTTON_DPAD_UP': 0xc,
            'BUTTON_DPAD_DOWN': 0xd,
            'BUTTON_DPAD_LEFT': 0xe,
            'BUTTON_DPAD_RIGHT': 0xf,
            'BUTTON_MENU': 0x10,
            'AXIS_LEFT_JOYSTICK_X': 0x0,
            'AXIS_LEFT_JOYSTICK_Y': 0x1,
            'AXIS_RIGHT_JOYSTICK_X': 0x2,
            'AXIS_RIGHT_JOYSTICK_Y': 0x3
        }, ig['GamepadInput'] = ig['Class']['extend']({
            'isInit': !0x1,
            'isSupported': !0x1,
            'list': [],
            'bindings': {},
            'states': {},
            'presses': {},
            'releases': {},
            'downLocks': {},
            'upLocks': {},
            'leftStick': {
                'x': 0x0,
                'y': 0x0
            },
            'rightStick': {
                'x': 0x0,
                'y': 0x0
            },
            'start': function() {
                if (!this['isInit']) {
                    this['isInit'] = !0x0;
                    var _0x4b5bdc = navigator['getGamepads'] || navigator['webkitGetGamepads'];
                    _0x4b5bdc && (!navigator['getGamepads'] && navigator['webkitGetGamepads'] && (navigator['getGamepads'] = navigator['webkitGetGamepads']), this['list'] = navigator['getGamepads']()), this['isSupported'] = _0x4b5bdc;
                }
            },
            'isAvailable': function() {
                return this['isInit'] && this['isSupported'];
            },
            'buttonPressed': function(_0x38a825) {
                return 'object' == typeof _0x38a825 ? _0x38a825['pressed'] : 0x1 == _0x38a825;
            },
            'buttonDown': function(_0x296aea) {
                if (_0x296aea = this['bindings'][_0x296aea]) this['states'][_0x296aea] = !0x0, this['downLocks'][_0x296aea] || (this['presses'][_0x296aea] = !0x0, this['downLocks'][_0x296aea] = !0x0);
            },
            'buttonUp': function(_0x4fe2e7) {
                if ((_0x4fe2e7 = this['bindings'][_0x4fe2e7]) && this['downLocks'][_0x4fe2e7] && !this['upLocks'][_0x4fe2e7]) this['states'][_0x4fe2e7] = !0x1, this['releases'][_0x4fe2e7] = !0x0, this['upLocks'][_0x4fe2e7] = !0x0;
            },
            'clearPressed': function() {
                for (var _0x4117fc in this['releases']) this['states'][_0x4117fc] = !0x1, this['downLocks'][_0x4117fc] = !0x1;
                this['releases'] = {}, this['presses'] = {}, this['upLocks'] = {};
            },
            'bind': function(_0x1a7152, _0x5c7800) {
                this['bindings'][_0x1a7152] = _0x5c7800;
            },
            'unbind': function(_0x2bf9a7) {
                this['releases'][this['bindings'][_0x2bf9a7]] = !0x0, this['bindings'][_0x2bf9a7] = null;
            },
            'unbindAll': function() {
                this['bindings'] = {}, this['states'] = {}, this['presses'] = {}, this['releases'] = {}, this['downLocks'] = {}, this['upLocks'] = {};
            },
            'state': function(_0x225c13) {
                return this['states'][_0x225c13];
            },
            'pressed': function(_0x587bdf) {
                return this['presses'][_0x587bdf];
            },
            'released': function(_0x4b94bd) {
                return this['releases'][_0x4b94bd];
            },
            'clamp': function(_0x5814ec, _0x14e244, _0x3fdfc5) {
                return _0x5814ec < _0x14e244 ? _0x14e244 : _0x5814ec > _0x3fdfc5 ? _0x3fdfc5 : _0x5814ec;
            },
            'pollGamepads': function() {
                if (this['isSupported']) {
                    this['leftStick']['x'] = 0x0, this['leftStick']['y'] = 0x0, this['rightStick']['x'] = 0x0, this['rightStick']['y'] = 0x0, this['list'] = navigator['getGamepads']();
                    for (var _0x17e7c2 in this['bindings']) {
                        for (var _0x586f19 = !0x1, _0x43f82b = 0x0; _0x43f82b < this['list']['length']; _0x43f82b++) {
                            var _0x417bd0 = this['list'][_0x43f82b];
                            if (_0x417bd0 && _0x417bd0['buttons'] && this['buttonPressed'](_0x417bd0['buttons'][_0x17e7c2])) {
                                _0x586f19 = !0x0;
                                break;
                            }
                        }
                        _0x586f19 ? this['buttonDown'](_0x17e7c2) : this['buttonUp'](_0x17e7c2);
                    }
                    for (_0x43f82b = 0x0; _0x43f82b < this['list']['length']; _0x43f82b++)
                        if ((_0x417bd0 = this['list'][_0x43f82b]) && _0x417bd0['axes']) {
                            _0x17e7c2 = _0x417bd0['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_X']];
                            var _0x586f19 = _0x417bd0['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_Y']],
                                _0x587bec = _0x417bd0['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_X']],
                                _0x417bd0 = _0x417bd0['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_Y']];
                            this['leftStick']['x'] += isNaN(_0x17e7c2) ? 0x0 : _0x17e7c2, this['leftStick']['y'] += isNaN(_0x586f19) ? 0x0 : _0x586f19, this['rightStick']['x'] += isNaN(_0x587bec) ? 0x0 : _0x587bec, this['rightStick']['y'] += isNaN(_0x417bd0) ? 0x0 : _0x417bd0;
                        }
                    0x0 < this['list']['length'] && (this['leftStick']['x'] = this['clamp'](this['leftStick']['x'], -0x1, 0x1), this['leftStick']['y'] = this['clamp'](this['leftStick']['y'], -0x1, 0x1), this['rightStick']['x'] = this['clamp'](this['rightStick']['x'], -0x1, 0x1), this['rightStick']['y'] = this['clamp'](this['rightStick']['y'], -0x1, 0x1));
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.gamepad')['requires']('plugins.io.gamepad-input')['defines'](function() {
        Gamepad = ig['Class']['extend']({
            'bindings': {
                'padJump': [ig['PADKEY']['BUTTON_0']]
            },
            'init': function() {
                ig['gamepadInput']['start']();
                for (var _0x102456 in this['bindings'])
                    for (var _0x411b75 = 0x0; _0x411b75 < this['bindings'][_0x102456]['length']; _0x411b75++) ig['gamepadInput']['bind'](this['bindings'][_0x102456][_0x411b75], _0x102456);
            },
            'press': function() {},
            'held': function() {},
            'release': function() {}
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.multitouch')['defines'](function() {
        Multitouch = ig['Class']['extend']({
            'init': function() {
                ig['multitouchInput']['start']();
            },
            'getTouchesPos': function() {
                if (ig['ua']['mobile']) {
                    if (0x0 < ig['multitouchInput']['touches']['length']) {
                        for (var _0x3278fb = [], _0x363304 = 0x0; _0x363304 < ig['multitouchInput']['touches']['length']; _0x363304++) {
                            var _0x2e2877 = ig['multitouchInput']['touches'][_0x363304];
                            _0x3278fb['push']({
                                'x': _0x2e2877['x'],
                                'y': _0x2e2877['y']
                            });
                        }
                        return _0x3278fb;
                    }
                    return null;
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.multitouch-input')['defines'](function() {
        ig['MultitouchInput'] = ig['Class']['extend']({
            'isStart': !0x1,
            'touches': [],
            'multitouchCapable': !0x1,
            'lastEventUp': null,
            'start': function() {
                this['isStart'] || (this['isStart'] = !0x0, navigator['maxTouchPoints'] && 0x1 < navigator['maxTouchPoints'] && (this['multitouchCapable'] = !0x0), ig['ua']['touchDevice'] && (window['navigator']['msPointerEnabled'] && (ig['system']['canvas']['addEventListener']('MSPointerDown', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['touchmove']['bind'](this), !0x1), ig['system']['canvas']['style']['msContentZooming'] = 'none', ig['system']['canvas']['style']['msTouchAction'] = 'none'), ig['system']['canvas']['addEventListener']('touchstart', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['touchmove']['bind'](this), !0x1)));
            },
            'touchmove': function(_0x52c0c3) {
                if (ig['ua']['touchDevice']) {
                    var _0x42db4b = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                        _0x1a8ca0 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                        _0x42db4b = ig['system']['scale'] * (_0x42db4b / ig['system']['realWidth']),
                        _0x1a8ca0 = ig['system']['scale'] * (_0x1a8ca0 / ig['system']['realHeight']);
                    if (_0x52c0c3['touches']) {
                        for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                        !this['multitouchCapable'] && 0x1 < _0x52c0c3['touches']['length'] && (this['multitouchCapable'] = !0x0);
                        var _0x57e042 = {
                            'left': 0x0,
                            'top': 0x0
                        };
                        ig['system']['canvas']['getBoundingClientRect'] && (_0x57e042 = ig['system']['canvas']['getBoundingClientRect']());
                        for (var _0x1d4cb9 = 0x0; _0x1d4cb9 < _0x52c0c3['touches']['length']; _0x1d4cb9++) {
                            var _0x37b03a = _0x52c0c3['touches'][_0x1d4cb9];
                            _0x37b03a && this['touches']['push']({
                                'x': (_0x37b03a['clientX'] - _0x57e042['left']) / _0x42db4b,
                                'y': (_0x37b03a['clientY'] - _0x57e042['top']) / _0x1a8ca0
                            });
                        }
                    } else this['windowMove'](_0x52c0c3);
                }
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x26669b) {}
            },
            'touchdown': function(_0x23599f) {
                var _0xf74505 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                    _0x49db4a = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                    _0xf74505 = ig['system']['scale'] * (_0xf74505 / ig['system']['realWidth']),
                    _0x49db4a = ig['system']['scale'] * (_0x49db4a / ig['system']['realHeight']);
                if (window['navigator']['msPointerEnabled']) this['windowKeyDown'](_0x23599f);
                else {
                    if (ig['ua']['touchDevice'] && _0x23599f['touches']) {
                        for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                        !this['multitouchCapable'] && 0x1 < _0x23599f['touches']['length'] && (this['multitouchCapable'] = !0x0);
                        var _0x33370a = {
                            'left': 0x0,
                            'top': 0x0
                        };
                        ig['system']['canvas']['getBoundingClientRect'] && (_0x33370a = ig['system']['canvas']['getBoundingClientRect']());
                        for (var _0x560785 = 0x0; _0x560785 < _0x23599f['touches']['length']; _0x560785++) {
                            var _0xe1b8b5 = _0x23599f['touches'][_0x560785];
                            _0xe1b8b5 && this['touches']['push']({
                                'x': (_0xe1b8b5['clientX'] - _0x33370a['left']) / _0xf74505,
                                'y': (_0xe1b8b5['clientY'] - _0x33370a['top']) / _0x49db4a
                            });
                        }
                    }
                }
            },
            'touchup': function(_0x5e38bf) {
                var _0x5369d1 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
                parseInt(ig['system']['canvas']['offsetHeight']), _0x5369d1 = ig['system']['scale'] * (_0x5369d1 / ig['system']['realWidth']);
                if (window['navigator']['msPointerEnabled']) this['windowKeyUp'](_0x5e38bf);
                else {
                    this['lastEventUp'] = _0x5e38bf;
                    var _0x268932 = {
                        'left': 0x0,
                        'top': 0x0
                    };
                    ig['system']['canvas']['getBoundingClientRect'] && (_0x268932 = ig['system']['canvas']['getBoundingClientRect']());
                    if (ig['ua']['touchDevice']) {
                        _0x5e38bf = (_0x5e38bf['changedTouches'][0x0]['clientX'] - _0x268932['left']) / _0x5369d1;
                        for (_0x5369d1 = 0x0; _0x5369d1 < this['touches']['length']; _0x5369d1++) this['touches'][_0x5369d1]['x'] >= _0x5e38bf - 0x28 && this['touches'][_0x5369d1]['x'] <= _0x5e38bf + 0x28 && this['touches']['splice'](_0x5369d1, 0x1);
                    }
                }
                if (ig['visibilityHandler']) ig['visibilityHandler']['onChange']('focus');
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x165f5a) {}
            },
            'windowKeyDown': function(_0x1dd66f) {
                var _0xe8e753 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                    _0x2e1eb6 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                    _0xe8e753 = ig['system']['scale'] * (_0xe8e753 / ig['system']['realWidth']),
                    _0x2e1eb6 = ig['system']['scale'] * (_0x2e1eb6 / ig['system']['realHeight']);
                if (window['navigator']['msPointerEnabled']) {
                    var _0x403f4a = {
                        'left': 0x0,
                        'top': 0x0
                    };
                    ig['system']['canvas']['getBoundingClientRect'] && (_0x403f4a = ig['system']['canvas']['getBoundingClientRect']()), _0x1dd66f = _0x1dd66f['changedTouches'] ? _0x1dd66f['changedTouches'] : [_0x1dd66f];
                    for (var _0x36a7e9 = 0x0; _0x36a7e9 < _0x1dd66f['length']; ++_0x36a7e9) {
                        for (var _0x4c5056 = _0x1dd66f[_0x36a7e9], _0x556b9a = 'undefined' != typeof _0x4c5056['identifier'] ? _0x4c5056['identifier'] : 'undefined' != typeof _0x4c5056['pointerId'] ? _0x4c5056['pointerId'] : 0x1, _0x83686c = (_0x4c5056['clientX'] - _0x403f4a['left']) / _0xe8e753, _0x4c5056 = (_0x4c5056['clientY'] - _0x403f4a['top']) / _0x2e1eb6, _0x23c9ef = 0x0; _0x23c9ef < this['touches']['length']; ++_0x23c9ef) this['touches'][_0x23c9ef]['identifier'] == _0x556b9a && this['touches']['splice'](_0x23c9ef, 0x1);
                        this['touches']['push']({
                            'x': _0x83686c,
                            'y': _0x4c5056,
                            'identifier': _0x556b9a
                        });
                    }
                    for (_0xe8e753 = 0x0; _0xe8e753 < this['touches']['length']; _0xe8e753++);
                }
            },
            'windowKeyUp': function(_0x3439fb) {
                _0x3439fb = 'undefined' != typeof _0x3439fb['identifier'] ? _0x3439fb['identifier'] : 'undefined' != typeof _0x3439fb['pointerId'] ? _0x3439fb['pointerId'] : 0x1;
                for (var _0x21e1d6 = 0x0; _0x21e1d6 < this['touches']['length']; ++_0x21e1d6) this['touches'][_0x21e1d6]['identifier'] == _0x3439fb && this['touches']['splice'](_0x21e1d6, 0x1);
                for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                if (ig['visibilityHandler']) ig['visibilityHandler']['onChange']('focus');
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x5abc9f) {}
            },
            'windowMove': function(_0x45bf8b) {
                var _0x573e0d = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                    _0x10a287 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                    _0x573e0d = ig['system']['scale'] * (_0x573e0d / ig['system']['realWidth']),
                    _0x10a287 = ig['system']['scale'] * (_0x10a287 / ig['system']['realHeight']),
                    _0x267160 = {
                        'left': 0x0,
                        'top': 0x0
                    };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x267160 = ig['system']['canvas']['getBoundingClientRect']());
                if (window['navigator']['msPointerEnabled']) {
                    for (var _0x14ceaa = 'undefined' != typeof _0x45bf8b['identifier'] ? _0x45bf8b['identifier'] : 'undefined' != typeof _0x45bf8b['pointerId'] ? _0x45bf8b['pointerId'] : 0x1, _0x518ec8 = 0x0; _0x518ec8 < this['touches']['length']; ++_0x518ec8)
                        if (this['touches'][_0x518ec8]['identifier'] == _0x14ceaa) {
                            var _0x4174de = (_0x45bf8b['clientY'] - _0x267160['top']) / _0x10a287;
                            this['touches'][_0x518ec8]['x'] = (_0x45bf8b['clientX'] - _0x267160['left']) / _0x573e0d, this['touches'][_0x518ec8]['y'] = _0x4174de;
                        }
                }
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x1ea775) {}
            },
            'clear': function() {
                for (var _0x58d4ab = 0x0; _0x58d4ab < this['released']['length']; ++_0x58d4ab) this['released'][_0x58d4ab] && (this['released']['splice'](_0x58d4ab, 0x1), _0x58d4ab--);
            },
            'pollMultitouch': function(_0x48eca6) {
                !this['multitouchCapable'] && 0x1 < _0x48eca6 && (this['multitouchCapable'] = !0x0);
            },
            'spliceFromArray': function(_0x4b6851, _0x3d0258) {
                for (var _0x8f04cf = 0x0; _0x8f04cf < _0x3d0258['length']; _0x8f04cf++)
                    for (var _0x388a52 = 0x0; _0x388a52 < _0x4b6851['length']; _0x388a52++) _0x4b6851[_0x388a52]['identifier'] === _0x3d0258[_0x8f04cf]['identifier'] && (_0x4b6851['splice'](_0x388a52, 0x1), _0x388a52--);
            },
            'updateSizeProperties': function() {
                var _0x4af496 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                    _0x10cca8 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'];
                this['scaleX'] = ig['system']['scale'] * (_0x4af496 / ig['system']['realWidth']), this['scaleY'] = ig['system']['scale'] * (_0x10cca8 / ig['system']['realHeight']);
            },
            'upgrade': function(_0x2c0186, _0x36f5b8, _0x207f4f) {
                var _0x4c09b6 = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x4c09b6 = ig['system']['canvas']['getBoundingClientRect']());
                for (var _0x3b0c59 = (_0x207f4f['clientX'] - _0x4c09b6['left']) / this['scaleX'], _0x4c09b6 = (_0x207f4f['clientY'] - _0x4c09b6['top']) / this['scaleY'], _0x18e71d = 0x0; _0x18e71d < _0x2c0186['length']; _0x18e71d++)
                    if (void 0x0 !== typeof _0x2c0186[_0x18e71d]['identifier'] && void 0x0 !== typeof _0x207f4f['identifier'] && _0x207f4f['identifier'] === _0x2c0186[_0x18e71d]['identifier']) {
                        _0x2c0186['splice'](_0x18e71d, 0x1), _0x36f5b8['push']({
                            'identifier': _0x207f4f['identifier'],
                            'x': _0x3b0c59,
                            'y': _0x4c09b6
                        });
                        break;
                    }
            },
            'updateArray': function(_0x20924b, _0x57113c) {
                var _0x13f2ad = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x13f2ad = ig['system']['canvas']['getBoundingClientRect']());
                for (var _0x1c34d8 = (_0x57113c['clientX'] - _0x13f2ad['left']) / this['scaleX'], _0x13f2ad = (_0x57113c['clientY'] - _0x13f2ad['top']) / this['scaleY'], _0x556cad = 0x0; _0x556cad < _0x20924b['length']; _0x556cad++)
                    if (void 0x0 !== typeof _0x20924b[_0x556cad]['identifier'] && void 0x0 !== typeof _0x57113c['identifier'] && _0x57113c['identifier'] === _0x20924b[_0x556cad]['identifier']) {
                        _0x20924b[_0x556cad]['x'] = _0x1c34d8, _0x20924b[_0x556cad]['y'] = _0x13f2ad;
                        break;
                    }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.fake-storage')['requires']('impact.game')['defines'](function() {
        ig['FakeStorage'] = ig['Class']['extend']({
            'tempData': {},
            'init': function() {
                ig['FakeStorage']['instance'] = this;
            },
            'initUnset': function(_0x3794d1, _0x362465) {
                null === this['get'](_0x3794d1) && this['set'](_0x3794d1, _0x362465);
            },
            'set': function(_0x5947a1, _0x2e870c) {
                this['tempData'][_0x5947a1] = JSON['stringify'](_0x2e870c);
            },
            'setHighest': function(_0x16efc1, _0xdf7b87) {
                _0xdf7b87 > this['getFloat'](_0x16efc1) && this['set'](_0x16efc1, _0xdf7b87);
            },
            'get': function(_0x3cc756) {
                return 'undefined' == typeof this['tempData'][_0x3cc756] ? null : JSON['parse'](this['tempData'][_0x3cc756]);
            },
            'getInt': function(_0x253bf0) {
                return ~~this['get'](_0x253bf0);
            },
            'getFloat': function(_0x41b66c) {
                return parseFloat(this['get'](_0x41b66c));
            },
            'getBool': function(_0x89cf98) {
                return !!this['get'](_0x89cf98);
            },
            'isSet': function(_0x8ecd08) {
                return null !== this['get'](_0x8ecd08);
            },
            'remove': function(_0x3f73) {
                delete this['tempData'][_0x3f73];
            },
            'clear': function() {
                this['tempData'] = {};
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.io-manager')['requires']('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage')['defines'](function() {
        IoManager = ig['Class']['extend']({
            'version': '1.0.0',
            'storage': null,
            'localStorageSupport': !0x1,
            'mouse': null,
            'keyboard': null,
            'multitouch': null,
            'gamepad': null,
            'init': function() {
                ig['multitouchInput'] = new ig['MultitouchInput'](), ig['gamepadInput'] = new ig['GamepadInput'](), this['unbindAll'](), this['initStorage'](), this['initMouse'](), this['initKeyboard']();
            },
            'unbindAll': function() {
                ig['input']['unbindAll'](), ig['gamepadInput']['unbindAll']();
            },
            'initStorage': function() {
                try {
                    window['localStorage']['setItem']('test', 'test'), window['localStorage']['removeItem']('test'), this['storage'] = new ig['Storage']();
                } catch (_0x4aaa18) {
                    console['log']('using\x20fake\x20storage'), this['storage'] = new ig['FakeStorage']();
                }
            },
            'initMouse': function() {
                this['mouse'] = new Mouse();
            },
            'initKeyboard': function() {
                this['keyboard'] = new Keyboard();
            },
            'initMultitouch': function() {
                this['multitouch'] = new Multitouch();
            },
            'initGamepad': function() {
                this['gamepad'] = new Gamepad();
            },
            'press': function(_0x52aafb) {
                return ig['input']['pressed'](_0x52aafb) || this['gamepad'] && this['gamepad']['press'](_0x52aafb) ? !0x0 : !0x1;
            },
            'held': function(_0x4a37ca) {
                return ig['input']['state'](_0x4a37ca) || this['gamepad'] && this['gamepad']['state'](_0x4a37ca) ? !0x0 : !0x1;
            },
            'release': function(_0x1ea372) {
                return ig['input']['released'](_0x1ea372) || this['gamepad'] && this['gamepad']['released'](_0x1ea372) ? !0x0 : !0x1;
            },
            'getClickPos': function() {
                return this['mouse']['getPos']();
            },
            'getLastClickPos': function() {
                return this['mouse']['getLast']();
            },
            'getTouchesPos': function() {
                return this['multitouch']['getTouchesPos']();
            },
            'checkOverlap': function(_0x4617f6, _0x5d6b1a, _0x3db488, _0x1dab2d, _0x1b8f00) {
                return _0x4617f6['x'] > _0x5d6b1a + _0x1dab2d || _0x4617f6['x'] < _0x5d6b1a || _0x4617f6['y'] > _0x3db488 + _0x1b8f00 || _0x4617f6['y'] < _0x3db488 ? !0x1 : !0x0;
            },
            'clear': function() {
                ig['multitouchInput']['clear']();
            },
            '_supportsLocalStorage': function() {
                try {
                    return localStorage['setItem']('test', 'test'), localStorage['removeItem']('test'), this['localStorageSupport'] = 'localStorage' in window && null !== window['localStorage'];
                } catch (_0x3e8e7b) {
                    return this['localStorageSupport'];
                }
            },
            'storageIsSet': function(_0x4727fc) {
                return 'function' === typeof this['storage']['isSet'] ? this['storage']['isSet'](_0x4727fc) : null;
            },
            'storageGet': function(_0x2791a6) {
                return 'function' === typeof this['storage']['get'] ? this['storage']['get'](_0x2791a6) : null;
            },
            'storageSet': function(_0x32408c, _0x333fbb) {
                return 'function' === typeof this['storage']['set'] ? this['storage']['set'](_0x32408c, _0x333fbb) : null;
            },
            'assert': function(_0x515216, _0xd0d55, _0x491fdb) {
                if (_0xd0d55 !== _0x491fdb) throw 'actualValue:' + _0xd0d55 + '\x20not\x20equal\x20to\x20testValue:' + _0x491fdb + '\x20at\x20' + _0x515216;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.io.storage-manager')['requires']('impact.game', 'plugins.io.io-manager')['defines'](function() {
        ig['Game']['prototype']['name'] = 'MJS-Game', ig['Game']['prototype']['version'] = '1.0.0', ig['Game']['prototype']['sessionData'] = {}, ig['Game']['prototype']['initData'] = function() {
            return this['sessionData'] = {
                'sound': 0.5,
                'music': 0.5,
                'level': 0x1,
                'score': 0x0
            };
        }, ig['Game']['prototype']['setupStorageManager'] = function() {
            'undefined' === typeof this['name'] ? console['error']('Cannot\x20found\x20Game\x20Name,\x20Storage\x20Manager\x20Cancelled.') : 'undefined' === typeof this['version'] ? console['error']('Cannot\x20found\x20Game\x20Version,\x20Storage\x20Manager\x20Cancelled.') : (this['io'] || (this['io'] = new IoManager(), console['log']('IO\x20Manager\x20doesn\x27t\x20existed.\x20Initialize...')), console['log']('Plug\x20in\x20Storage\x20Manager'), this['storage'] = this['io']['storage'], this['storageName'] = this['name'] + '-v' + this['version'], this['loadAll']());
        }, ig['Game']['prototype']['loadAll'] = function() {
            var _0x5086f1 = this['storage']['get'](this['storageName']);
            if (null === _0x5086f1 || 'undefined' === typeof _0x5086f1) _0x5086f1 = this['initData']();
            for (var _0x5c4a06 in _0x5086f1) this['sessionData'][_0x5c4a06] = _0x5086f1[_0x5c4a06];
            this['storage']['set'](this['storageName'], _0x5086f1);
        }, ig['Game']['prototype']['saveAll'] = function() {
            var _0x2e7151 = this['storage']['get'](this['storageName']),
                _0x16913e;
            for (_0x16913e in _0x2e7151) _0x2e7151[_0x16913e] = this['sessionData'][_0x16913e];
            this['storage']['set'](this['storageName'], _0x2e7151);
        }, ig['Game']['prototype']['load'] = function(_0x1c520a) {
            return this['storage']['get'](this['storageName'])[_0x1c520a];
        }, ig['Game']['prototype']['save'] = function(_0x4c325a, _0x2a4797) {
            var _0x488759 = this['storage']['get'](this['storageName']);
            _0x488759[_0x4c325a] = _0x2a4797, this['storage']['set'](this['storageName'], _0x488759);
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.splash-loader')['requires']('impact.loader', 'impact.animation')['defines'](function() {
        ig['SplashLoader'] = ig['Loader']['extend']({
            'tapToStartDivId': 'tap-to-start',
            'titleIm': new ig['Image']('media/graphics/sprites/ui/title.png'),
            'loadingFill': new ig['Image']('media/graphics/sprites/loading-fill.png'),
            'init': function(_0x449174, _0x2103b6) {
                this['parent'](_0x449174, _0x2103b6), ig['apiHandler']['run']('MJSPreroll');
            },
            'end': function() {
                this['_endParent'] = this['parent'], this['_drawStatus'] = 0x1, _SETTINGS['TapToStartAudioUnlock']['Enabled'] ? this['tapToStartDiv'](function() {
                    this['_endParent'](), ('undefined' === typeof ig['game'] || null == ig['game']) && ig['system']['setGame'](this['gameClass']);
                }['bind'](this)) : (this['_endParent'](), ('undefined' === typeof ig['game'] || null == ig['game']) && ig['system']['setGame'](this['gameClass'])), this['draw']();
            },
            'tapToStartDiv': function(_0x4b3522) {
                this['desktopCoverDIV'] = document['getElementById'](this['tapToStartDivId']);
                if (!this['desktopCoverDIV']) {
                    this['desktopCoverDIV'] = document['createElement']('div'), this['desktopCoverDIV']['id'] = this['tapToStartDivId'], this['desktopCoverDIV']['setAttribute']('class', 'play'), this['desktopCoverDIV']['setAttribute']('style', 'position:\x20absolute;\x20display:\x20block;\x20z-index:\x20999999;\x20background-color:\x20rgba(23,\x2032,\x2053,\x200.7);\x20visibility:\x20visible;\x20font-size:\x2010vmin;\x20text-align:\x20center;\x20vertical-align:\x20middle;\x20-webkit-touch-callout:\x20none;\x20-webkit-user-select:\x20none;\x20-khtml-user-select:\x20none;\x20-moz-user-select:\x20none;\x20-ms-user-select:\x20none;\x20user-select:\x20none;'), this['desktopCoverDIV']['innerHTML'] = '<div\x20style=\x27color:white;background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x20border:\x202px\x20solid\x20#fff;\x20font-size:20px;\x20border-radius:\x205px;\x20position:\x20relative;\x20float:\x20left;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x27><div\x20style=\x27padding:20px\x2050px;\x20font-family:\x20montserrat;\x27>' + _STRINGS['Splash']['TapToStart'] + '</div></div>', (document['getElementById']('play')['parentNode'] || document['getElementById']('ajaxbar'))['appendChild'](this['desktopCoverDIV']);
                    try {
                        'undefined' !== typeof ig['sizeHandler'] ? 'undefined' !== typeof ig['sizeHandler']['coreDivsToResize'] && (ig['sizeHandler']['coreDivsToResize']['push']('#' + this['tapToStartDivId']), 'function' === typeof ig['sizeHandler']['reorient'] && ig['sizeHandler']['reorient']()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize['push'](this['tapToStartDivId']), 'function' === typeof sizeHandler && sizeHandler());
                    } catch (_0x130c4b) {
                        console['log'](_0x130c4b);
                    }
                    this['desktopCoverDIV']['addEventListener']('click', function() {
                        ig['soundHandler']['unlockWebAudio'](), this['setAttribute']('style', 'visibility:\x20hidden;'), 'function' === typeof _0x4b3522 && _0x4b3522();
                    });
                }
            },
            'setupCustomAnimation': function() {
                this['animHeight'] = this['customAnim']['height'], this['animWidth'] = this['customAnim']['width'], this['customAnim'] = new ig['Animation'](this['customAnim'], 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
            },
            'animate': function() {
                ig['Timer']['step'](), this['customAnim']['update']();
            },
            'drawCheck': 0x0,
            'draw': function() {
                this['_drawStatus'] += (this['status'] - this['_drawStatus']) / 0x5, 0x1 === this['drawCheck'] && console['log']('Font\x20should\x20be\x20loaded\x20before\x20loader\x20draw\x20loop'), 0x2 > this['drawCheck'] && this['drawCheck']++, ig['system']['context']['fillStyle'] = '#fff', ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']), this['titleIm']['draw']((ig['system']['width'] - this['titleIm']['width']) / 0x2, 0xb4), this['loadingFill']['draw']((ig['system']['width'] - this['loadingFill']['width']) / 0x2, 0x1c2, 0x0, 0x0, this['_drawStatus'] * this['loadingFill']['width'], this['loadingFill']['height']), this['drawVersion']();
            },
            'drawVersion': function() {
                if ('undefined' !== typeof _SETTINGS['Versioning'] && null !== _SETTINGS['Versioning'] && _SETTINGS['Versioning']['DrawVersion']) {
                    var _0xb6e31 = ig['system']['context'];
                    fontSize = _SETTINGS['Versioning']['FontSize'], fontFamily = _SETTINGS['Versioning']['FontFamily'], fillStyle = _SETTINGS['Versioning']['FillStyle'], _0xb6e31['save'](), _0xb6e31['textBaseline'] = 'bottom', _0xb6e31['textAlign'] = 'left', _0xb6e31['font'] = fontSize + '\x20' + fontFamily || '10px\x20Arial', _0xb6e31['fillStyle'] = fillStyle || '#ffffff', _0xb6e31['fillText']('v' + _SETTINGS['Versioning']['Version'] + '+build.' + _SETTINGS['Versioning']['Build'], 0xa, ig['system']['height'] - 0xa), _0xb6e31['restore']();
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.tween')['requires']('impact.entity')['defines'](function() {
        Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x1bcece) {
            for (var _0x5c338b = 0x0; _0x5c338b < this['length']; ++_0x5c338b)
                if (this[_0x5c338b] === _0x1bcece) return _0x5c338b;
            return -0x1;
        }), ig['Entity']['prototype']['tweens'] = [], ig['Entity']['prototype']['_preTweenUpdate'] = ig['Entity']['prototype']['update'], ig['Entity']['prototype']['update'] = function() {
            this['_preTweenUpdate']();
            if (0x0 < this['tweens']['length']) {
                for (var _0x3a939c = [], _0x3a6600 = 0x0; _0x3a6600 < this['tweens']['length']; _0x3a6600++) this['tweens'][_0x3a6600]['update'](), this['tweens'][_0x3a6600]['complete'] || _0x3a939c['push'](this['tweens'][_0x3a6600]);
                this['tweens'] = _0x3a939c;
            }
        }, ig['Entity']['prototype']['tween'] = function(_0x2de7a0, _0x4181a2, _0x24551c) {
            return _0x2de7a0 = new ig['Tween'](this, _0x2de7a0, _0x4181a2, _0x24551c), this['tweens']['push'](_0x2de7a0), _0x2de7a0;
        }, ig['Entity']['prototype']['pauseTweens'] = function() {
            for (var _0x31d75e = 0x0; _0x31d75e < this['tweens']['length']; _0x31d75e++) this['tweens'][_0x31d75e]['pause']();
        }, ig['Entity']['prototype']['resumeTweens'] = function() {
            for (var _0x1f732d = 0x0; _0x1f732d < this['tweens']['length']; _0x1f732d++) this['tweens'][_0x1f732d]['resume']();
        }, ig['Entity']['prototype']['stopTweens'] = function(_0x5c222d) {
            for (var _0x4acdfc = 0x0; _0x4acdfc < this['tweens']['length']; _0x4acdfc++) this['tweens'][_0x4acdfc]['stop'](_0x5c222d);
        }, ig['Tween'] = function(_0x3862be, _0x7a0ca2, _0x1a2da6, _0x102621) {
            var _0x2cb8e6 = {},
                _0x9a06d5 = {},
                _0x52dd4f = {},
                _0x4ce678 = 0x0,
                _0x343cd7 = !0x1,
                _0xa91eb9 = !0x1,
                _0x44f0ba = !0x1;
            this['duration'] = _0x1a2da6, this['paused'] = this['complete'] = !0x1, this['easing'] = ig['Tween']['Easing']['Linear']['EaseNone'], this['onComplete'] = !0x1, this['loop'] = this['delay'] = 0x0, this['loopCount'] = -0x1, ig['merge'](this, _0x102621), this['loopNum'] = this['loopCount'], this['chain'] = function(_0x217f1f) {
                _0x44f0ba = _0x217f1f;
            }, this['initEnd'] = function(_0x34875a, _0x9d7139, _0x3a4a08) {
                if ('object' !== typeof _0x9d7139[_0x34875a]) _0x3a4a08[_0x34875a] = _0x9d7139[_0x34875a];
                else {
                    for (subprop in _0x9d7139[_0x34875a]) _0x3a4a08[_0x34875a] || (_0x3a4a08[_0x34875a] = {}), this['initEnd'](subprop, _0x9d7139[_0x34875a], _0x3a4a08[_0x34875a]);
                }
            }, this['initStart'] = function(_0x6d676f, _0x4bd1d6, _0x599d80, _0x417e4d) {
                if ('object' !== typeof _0x599d80[_0x6d676f]) 'undefined' !== typeof _0x4bd1d6[_0x6d676f] && (_0x417e4d[_0x6d676f] = _0x599d80[_0x6d676f]);
                else {
                    for (subprop in _0x599d80[_0x6d676f]) _0x417e4d[_0x6d676f] || (_0x417e4d[_0x6d676f] = {}), 'undefined' !== typeof _0x4bd1d6[_0x6d676f] && this['initStart'](subprop, _0x4bd1d6[_0x6d676f], _0x599d80[_0x6d676f], _0x417e4d[_0x6d676f]);
                }
            }, this['start'] = function() {
                this['paused'] = this['complete'] = !0x1, this['loopNum'] = this['loopCount'], _0x4ce678 = 0x0, -0x1 == _0x3862be['tweens']['indexOf'](this) && _0x3862be['tweens']['push'](this), _0xa91eb9 = !0x0, _0x343cd7 = new ig['Timer']();
                for (var _0x153b08 in _0x7a0ca2) this['initEnd'](_0x153b08, _0x7a0ca2, _0x9a06d5);
                for (_0x153b08 in _0x9a06d5) this['initStart'](_0x153b08, _0x9a06d5, _0x3862be, _0x2cb8e6), this['initDelta'](_0x153b08, _0x52dd4f, _0x3862be, _0x9a06d5);
            }, this['initDelta'] = function(_0x1c9fb7, _0x2a227a, _0x41c027, _0x5511bf) {
                if ('object' !== typeof _0x5511bf[_0x1c9fb7]) _0x2a227a[_0x1c9fb7] = _0x5511bf[_0x1c9fb7] - _0x41c027[_0x1c9fb7];
                else {
                    for (subprop in _0x5511bf[_0x1c9fb7]) _0x2a227a[_0x1c9fb7] || (_0x2a227a[_0x1c9fb7] = {}), this['initDelta'](subprop, _0x2a227a[_0x1c9fb7], _0x41c027[_0x1c9fb7], _0x5511bf[_0x1c9fb7]);
                }
            }, this['propUpdate'] = function(_0x344b12, _0x3b6be5, _0x2b3083, _0x447d8c, _0x2427a9) {
                if ('object' !== typeof _0x2b3083[_0x344b12]) _0x3b6be5[_0x344b12] = 'undefined' != typeof _0x2b3083[_0x344b12] ? _0x2b3083[_0x344b12] + _0x447d8c[_0x344b12] * _0x2427a9 : _0x3b6be5[_0x344b12];
                else {
                    for (subprop in _0x2b3083[_0x344b12]) this['propUpdate'](subprop, _0x3b6be5[_0x344b12], _0x2b3083[_0x344b12], _0x447d8c[_0x344b12], _0x2427a9);
                }
            }, this['propSet'] = function(_0x24e5fc, _0x20528d, _0x3c1be0) {
                if ('object' !== typeof _0x20528d[_0x24e5fc]) _0x3c1be0[_0x24e5fc] = _0x20528d[_0x24e5fc];
                else {
                    for (subprop in _0x20528d[_0x24e5fc]) _0x3c1be0[_0x24e5fc] || (_0x3c1be0[_0x24e5fc] = {}), this['propSet'](subprop, _0x20528d[_0x24e5fc], _0x3c1be0[_0x24e5fc]);
                }
            }, this['update'] = function() {
                if (!_0xa91eb9) return !0x1;
                if (this['delay']) {
                    if (_0x343cd7['delta']() < this['delay']) return;
                    this['delay'] = 0x0, _0x343cd7['reset']();
                }
                if (this['paused'] || this['complete']) return !0x1;
                var _0x266d6b = (_0x343cd7['delta']() + _0x4ce678) / this['duration'],
                    _0x266d6b = 0x1 < _0x266d6b ? 0x1 : _0x266d6b,
                    _0x1a03a5 = this['easing'](_0x266d6b);
                for (property in _0x52dd4f) this['propUpdate'](property, _0x3862be, _0x2cb8e6, _0x52dd4f, _0x1a03a5);
                if (0x1 <= _0x266d6b) {
                    if (0x0 == this['loopNum'] || !this['loop']) {
                        this['complete'] = !0x0;
                        if (this['onComplete']) this['onComplete']();
                        return _0x44f0ba && _0x44f0ba['start'](), !0x1;
                    }
                    if (this['loop'] == ig['Tween']['Loop']['Revert']) {
                        for (property in _0x2cb8e6) this['propSet'](property, _0x2cb8e6, _0x3862be);
                        _0x4ce678 = 0x0, _0x343cd7['reset'](), -0x1 != this['loopNum'] && this['loopNum']--;
                    } else {
                        if (this['loop'] == ig['Tween']['Loop']['Reverse']) {
                            _0x266d6b = {}, _0x1a03a5 = {}, ig['merge'](_0x266d6b, _0x9a06d5), ig['merge'](_0x1a03a5, _0x2cb8e6), ig['merge'](_0x2cb8e6, _0x266d6b), ig['merge'](_0x9a06d5, _0x1a03a5);
                            for (property in _0x9a06d5) this['initDelta'](property, _0x52dd4f, _0x3862be, _0x9a06d5);
                            _0x4ce678 = 0x0, _0x343cd7['reset'](), -0x1 != this['loopNum'] && this['loopNum']--;
                        }
                    }
                }
            }, this['pause'] = function() {
                this['paused'] = !0x0, _0x343cd7 && _0x343cd7['delta'] && (_0x4ce678 += _0x343cd7['delta']());
            }, this['resume'] = function() {
                this['paused'] = !0x1, _0x343cd7 && _0x343cd7['reset'] && _0x343cd7['reset']();
            }, this['stop'] = function(_0x4f66a6) {
                _0x4f66a6 && (this['loop'] = this['complete'] = this['paused'] = !0x1, _0x4ce678 += _0x1a2da6, this['update']()), this['complete'] = !0x0;
            };
        }, ig['Tween']['Loop'] = {
            'Revert': 0x1,
            'Reverse': 0x2
        }, ig['Tween']['Easing'] = {
            'Linear': {},
            'Quadratic': {},
            'Cubic': {},
            'Quartic': {},
            'Quintic': {},
            'Sinusoidal': {},
            'Exponential': {},
            'Circular': {},
            'Elastic': {},
            'Back': {},
            'Bounce': {}
        }, ig['Tween']['Easing']['Linear']['EaseNone'] = function(_0x1ca364) {
            return _0x1ca364;
        }, ig['Tween']['Easing']['Quadratic']['EaseIn'] = function(_0x3f3b27) {
            return _0x3f3b27 * _0x3f3b27;
        }, ig['Tween']['Easing']['Quadratic']['EaseOut'] = function(_0xeae384) {
            return -_0xeae384 * (_0xeae384 - 0x2);
        }, ig['Tween']['Easing']['Quadratic']['EaseInOut'] = function(_0x2a99c5) {
            return 0x1 > (_0x2a99c5 *= 0x2) ? 0.5 * _0x2a99c5 * _0x2a99c5 : -0.5 * (--_0x2a99c5 * (_0x2a99c5 - 0x2) - 0x1);
        }, ig['Tween']['Easing']['Cubic']['EaseIn'] = function(_0x2f4676) {
            return _0x2f4676 * _0x2f4676 * _0x2f4676;
        }, ig['Tween']['Easing']['Cubic']['EaseOut'] = function(_0x371119) {
            return --_0x371119 * _0x371119 * _0x371119 + 0x1;
        }, ig['Tween']['Easing']['Cubic']['EaseInOut'] = function(_0x2b4f5d) {
            return 0x1 > (_0x2b4f5d *= 0x2) ? 0.5 * _0x2b4f5d * _0x2b4f5d * _0x2b4f5d : 0.5 * ((_0x2b4f5d -= 0x2) * _0x2b4f5d * _0x2b4f5d + 0x2);
        }, ig['Tween']['Easing']['Quartic']['EaseIn'] = function(_0x10a36c) {
            return _0x10a36c * _0x10a36c * _0x10a36c * _0x10a36c;
        }, ig['Tween']['Easing']['Quartic']['EaseOut'] = function(_0x384640) {
            return -(--_0x384640 * _0x384640 * _0x384640 * _0x384640 - 0x1);
        }, ig['Tween']['Easing']['Quartic']['EaseInOut'] = function(_0x56e02b) {
            return 0x1 > (_0x56e02b *= 0x2) ? 0.5 * _0x56e02b * _0x56e02b * _0x56e02b * _0x56e02b : -0.5 * ((_0x56e02b -= 0x2) * _0x56e02b * _0x56e02b * _0x56e02b - 0x2);
        }, ig['Tween']['Easing']['Quintic']['EaseIn'] = function(_0x103c05) {
            return _0x103c05 * _0x103c05 * _0x103c05 * _0x103c05 * _0x103c05;
        }, ig['Tween']['Easing']['Quintic']['EaseOut'] = function(_0x59a06a) {
            return (_0x59a06a -= 0x1) * _0x59a06a * _0x59a06a * _0x59a06a * _0x59a06a + 0x1;
        }, ig['Tween']['Easing']['Quintic']['EaseInOut'] = function(_0x5e5045) {
            return 0x1 > (_0x5e5045 *= 0x2) ? 0.5 * _0x5e5045 * _0x5e5045 * _0x5e5045 * _0x5e5045 * _0x5e5045 : 0.5 * ((_0x5e5045 -= 0x2) * _0x5e5045 * _0x5e5045 * _0x5e5045 * _0x5e5045 + 0x2);
        }, ig['Tween']['Easing']['Sinusoidal']['EaseIn'] = function(_0x480fc3) {
            return -Math['cos'](_0x480fc3 * Math['PI'] / 0x2) + 0x1;
        }, ig['Tween']['Easing']['Sinusoidal']['EaseOut'] = function(_0x37127d) {
            return Math['sin'](_0x37127d * Math['PI'] / 0x2);
        }, ig['Tween']['Easing']['Sinusoidal']['EaseInOut'] = function(_0x1c0b17) {
            return -0.5 * (Math['cos'](Math['PI'] * _0x1c0b17) - 0x1);
        }, ig['Tween']['Easing']['Exponential']['EaseIn'] = function(_0x50c01c) {
            return 0x0 == _0x50c01c ? 0x0 : Math['pow'](0x2, 0xa * (_0x50c01c - 0x1));
        }, ig['Tween']['Easing']['Exponential']['EaseOut'] = function(_0x113337) {
            return 0x1 == _0x113337 ? 0x1 : -Math['pow'](0x2, -0xa * _0x113337) + 0x1;
        }, ig['Tween']['Easing']['Exponential']['EaseInOut'] = function(_0x8fb950) {
            return 0x0 == _0x8fb950 ? 0x0 : 0x1 == _0x8fb950 ? 0x1 : 0x1 > (_0x8fb950 *= 0x2) ? 0.5 * Math['pow'](0x2, 0xa * (_0x8fb950 - 0x1)) : 0.5 * (-Math['pow'](0x2, -0xa * (_0x8fb950 - 0x1)) + 0x2);
        }, ig['Tween']['Easing']['Circular']['EaseIn'] = function(_0x47581a) {
            return -(Math['sqrt'](0x1 - _0x47581a * _0x47581a) - 0x1);
        }, ig['Tween']['Easing']['Circular']['EaseOut'] = function(_0x1ae4dd) {
            return Math['sqrt'](0x1 - --_0x1ae4dd * _0x1ae4dd);
        }, ig['Tween']['Easing']['Circular']['EaseInOut'] = function(_0x32f5eb) {
            return 0x1 > (_0x32f5eb /= 0.5) ? -0.5 * (Math['sqrt'](0x1 - _0x32f5eb * _0x32f5eb) - 0x1) : 0.5 * (Math['sqrt'](0x1 - (_0x32f5eb -= 0x2) * _0x32f5eb) + 0x1);
        }, ig['Tween']['Easing']['Elastic']['EaseIn'] = function(_0x2e8ad3) {
            var _0x2015f6, _0x345938 = 0.1,
                _0x5a2d91 = 0.4;
            if (0x0 == _0x2e8ad3) return 0x0;
            if (0x1 == _0x2e8ad3) return 0x1;
            return _0x5a2d91 || (_0x5a2d91 = 0.3), !_0x345938 || 0x1 > _0x345938 ? (_0x345938 = 0x1, _0x2015f6 = _0x5a2d91 / 0x4) : _0x2015f6 = _0x5a2d91 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x345938), -(_0x345938 * Math['pow'](0x2, 0xa * (_0x2e8ad3 -= 0x1)) * Math['sin'](0x2 * (_0x2e8ad3 - _0x2015f6) * Math['PI'] / _0x5a2d91));
        }, ig['Tween']['Easing']['Elastic']['EaseOut'] = function(_0x3abd65) {
            var _0x59615b, _0x1c2d8b = 0.1,
                _0x48fee5 = 0.4;
            if (0x0 == _0x3abd65) return 0x0;
            if (0x1 == _0x3abd65) return 0x1;
            return _0x48fee5 || (_0x48fee5 = 0.3), !_0x1c2d8b || 0x1 > _0x1c2d8b ? (_0x1c2d8b = 0x1, _0x59615b = _0x48fee5 / 0x4) : _0x59615b = _0x48fee5 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x1c2d8b), _0x1c2d8b * Math['pow'](0x2, -0xa * _0x3abd65) * Math['sin'](0x2 * (_0x3abd65 - _0x59615b) * Math['PI'] / _0x48fee5) + 0x1;
        }, ig['Tween']['Easing']['Elastic']['EaseInOut'] = function(_0x4571eb) {
            var _0x32501c, _0x208c6c = 0.1,
                _0x353810 = 0.4;
            if (0x0 == _0x4571eb) return 0x0;
            if (0x1 == _0x4571eb) return 0x1;
            return _0x353810 || (_0x353810 = 0.3), !_0x208c6c || 0x1 > _0x208c6c ? (_0x208c6c = 0x1, _0x32501c = _0x353810 / 0x4) : _0x32501c = _0x353810 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x208c6c), 0x1 > (_0x4571eb *= 0x2) ? -0.5 * _0x208c6c * Math['pow'](0x2, 0xa * (_0x4571eb -= 0x1)) * Math['sin'](0x2 * (_0x4571eb - _0x32501c) * Math['PI'] / _0x353810) : 0.5 * _0x208c6c * Math['pow'](0x2, -0xa * (_0x4571eb -= 0x1)) * Math['sin'](0x2 * (_0x4571eb - _0x32501c) * Math['PI'] / _0x353810) + 0x1;
        }, ig['Tween']['Easing']['Back']['EaseIn'] = function(_0xbee735) {
            return _0xbee735 * _0xbee735 * (2.70158 * _0xbee735 - 1.70158);
        }, ig['Tween']['Easing']['Back']['EaseOut'] = function(_0x5be055) {
            return (_0x5be055 -= 0x1) * _0x5be055 * (2.70158 * _0x5be055 + 1.70158) + 0x1;
        }, ig['Tween']['Easing']['Back']['EaseInOut'] = function(_0x54cbdc) {
            return 0x1 > (_0x54cbdc *= 0x2) ? 0.5 * _0x54cbdc * _0x54cbdc * (3.5949095 * _0x54cbdc - 2.5949095) : 0.5 * ((_0x54cbdc -= 0x2) * _0x54cbdc * (3.5949095 * _0x54cbdc + 2.5949095) + 0x2);
        }, ig['Tween']['Easing']['Bounce']['EaseIn'] = function(_0x3a162e) {
            return 0x1 - ig['Tween']['Easing']['Bounce']['EaseOut'](0x1 - _0x3a162e);
        }, ig['Tween']['Easing']['Bounce']['EaseOut'] = function(_0x90dbf1) {
            return (_0x90dbf1 /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x90dbf1 * _0x90dbf1 : _0x90dbf1 < 0x2 / 2.75 ? 7.5625 * (_0x90dbf1 -= 1.5 / 2.75) * _0x90dbf1 + 0.75 : _0x90dbf1 < 2.5 / 2.75 ? 7.5625 * (_0x90dbf1 -= 2.25 / 2.75) * _0x90dbf1 + 0.9375 : 7.5625 * (_0x90dbf1 -= 2.625 / 2.75) * _0x90dbf1 + 0.984375;
        }, ig['Tween']['Easing']['Bounce']['EaseInOut'] = function(_0x419736) {
            return 0.5 > _0x419736 ? 0.5 * ig['Tween']['Easing']['Bounce']['EaseIn'](0x2 * _0x419736) : 0.5 * ig['Tween']['Easing']['Bounce']['EaseOut'](0x2 * _0x419736 - 0x1) + 0.5;
        }, ig['Tween']['Interpolation'] = {
            'Linear': function(_0x3b0f71, _0x213c01) {
                var _0xba86a5 = _0x3b0f71['length'] - 0x1,
                    _0x552bc6 = _0xba86a5 * _0x213c01,
                    _0x4b6f9d = Math['floor'](_0x552bc6),
                    _0xe136c = TWEEN['Interpolation']['Utils']['Linear'];
                return 0x0 > _0x213c01 ? _0xe136c(_0x3b0f71[0x0], _0x3b0f71[0x1], _0x552bc6) : 0x1 < _0x213c01 ? _0xe136c(_0x3b0f71[_0xba86a5], _0x3b0f71[_0xba86a5 - 0x1], _0xba86a5 - _0x552bc6) : _0xe136c(_0x3b0f71[_0x4b6f9d], _0x3b0f71[_0x4b6f9d + 0x1 > _0xba86a5 ? _0xba86a5 : _0x4b6f9d + 0x1], _0x552bc6 - _0x4b6f9d);
            }
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.scale')['requires']('impact.entity')['defines'](function() {
        ig['Entity']['inject']({
            'scale': {
                'x': 0x1,
                'y': 0x1
            },
            '_offset': {
                'x': 0x0,
                'y': 0x0
            },
            '_scale': {
                'x': 0x1,
                'y': 0x1
            },
            '_size': {
                'x': 0x0,
                'y': 0x0
            },
            'init': function(_0x2c621c, _0x8ce01d, _0x57b869) {
                this['parent'](_0x2c621c, _0x8ce01d, _0x57b869), this['_offset']['x'] = this['offset']['x'], this['_offset']['y'] = this['offset']['y'], this['_size']['x'] = this['size']['x'], this['_size']['y'] = this['size']['y'], this['setScale'](this['scale']['x'], this['scale']['y']);
            },
            'draw': function() {
                var _0x54fb74 = ig['system']['context'];
                _0x54fb74['save'](), _0x54fb74['translate'](ig['system']['getDrawPos'](this['pos']['x']['round']() - this['offset']['x'] - ig['game']['screen']['x']), ig['system']['getDrawPos'](this['pos']['y']['round']() - this['offset']['y'] - ig['game']['screen']['y'])), _0x54fb74['scale'](this['_scale']['x'], this['_scale']['y']), null != this['currentAnim'] && this['currentAnim']['draw'](0x0, 0x0), _0x54fb74['restore']();
            },
            'setScale': function(_0xf3e4bf, _0x28e6bd) {
                var _0x5806f3 = this['size']['x'],
                    _0x4f6777 = this['size']['y'];
                this['scale']['x'] = _0xf3e4bf || this['scale']['x'], this['scale']['y'] = _0x28e6bd || this['scale']['y'], this['_scale']['x'] = this['scale']['x'] / ig['system']['scale'], this['_scale']['y'] = this['scale']['y'] / ig['system']['scale'], this['offset']['x'] = this['_offset']['x'] * this['_scale']['x'], this['offset']['y'] = this['_offset']['y'] * this['_scale']['y'], this['size']['x'] = this['_size']['x'] * this['_scale']['x'], this['size']['y'] = this['_size']['y'] * this['_scale']['y'], this['pos']['x'] += (_0x5806f3 - this['size']['x']) / 0x2, this['pos']['y'] += (_0x4f6777 - this['size']['y']) / 0x2;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.patches.entity-patch')['requires']('impact.entity')['defines'](function() {
        ig['Entity']['inject']({
            'handleMovementTrace': function(_0x418ac3) {
                this['standing'] = !0x1, _0x418ac3['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0)), _0x418ac3['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
                if (_0x418ac3['collision']['slope']) {
                    var _0x4cf2c9 = _0x418ac3['collision']['slope'];
                    if (0x0 < this['bounciness']) {
                        var _0x479c90 = this['vel']['x'] * _0x4cf2c9['nx'] + this['vel']['y'] * _0x4cf2c9['ny'];
                        this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x4cf2c9['nx'] * _0x479c90) * this['bounciness'], this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x4cf2c9['ny'] * _0x479c90) * this['bounciness'];
                    } else _0x479c90 = (this['vel']['x'] * _0x4cf2c9['x'] + this['vel']['y'] * _0x4cf2c9['y']) / (_0x4cf2c9['x'] * _0x4cf2c9['x'] + _0x4cf2c9['y'] * _0x4cf2c9['y']), this['vel']['x'] = _0x4cf2c9['x'] * _0x479c90, this['vel']['y'] = _0x4cf2c9['y'] * _0x479c90, _0x4cf2c9 = Math['atan2'](_0x4cf2c9['x'], _0x4cf2c9['y']), _0x4cf2c9 > this['slopeStanding']['min'] && _0x4cf2c9 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
                }
                this['pos']['x'] = _0x418ac3['pos']['x'], this['pos']['y'] = _0x418ac3['pos']['y'];
            },
            'update': function() {
                this['parent'](), null !== this['clickableLayer'] && 'undefined' !== typeof this['clickableLayer'] && null !== this['clickableLayer']['update'] && 'function' === typeof this['clickableLayer']['update'] && this['clickableLayer']['update'](this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.tweens-handler')['requires']('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch')['defines'](function() {
        Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x4c4c95) {
            for (var _0x5473d3 = 0x0; _0x5473d3 < this['length']; ++_0x5473d3)
                if (this[_0x5473d3] === _0x4c4c95) return _0x5473d3;
            return -0x1;
        }), ig['TweensHandler'] = ig['Class']['extend']({
            '_tweens': [],
            '_systemPausedTweens': [],
            'init': function() {},
            'getAll': function() {
                return this['_tweens'];
            },
            'removeAll': function() {
                this['_tweens'] = [];
            },
            'add': function(_0x28d49c) {
                this['_tweens']['push'](_0x28d49c);
            },
            'remove': function(_0x3fffd7) {
                _0x3fffd7 = this['_tweens']['indexOf'](_0x3fffd7), -0x1 !== _0x3fffd7 && this['_tweens']['splice'](_0x3fffd7, 0x1);
            },
            'onSystemPause': function() {
                if (0x0 === this['_tweens']['length']) return !0x1;
                for (var _0x2288fc = 0x0, _0x4169b1 = null; _0x2288fc < this['_tweens']['length'];) _0x4169b1 = this['_tweens'][_0x2288fc], _0x4169b1['_isPlaying'] && (this['_systemPausedTweens']['push'](_0x4169b1), _0x4169b1['pause']()), _0x2288fc++;
                return !0x0;
            },
            'onSystemResume': function() {
                if (0x0 === this['_systemPausedTweens']['length']) return !0x1;
                for (var _0x4d3fc2 = 0x0; _0x4d3fc2 < this['_systemPausedTweens']['length'];) this['_systemPausedTweens'][_0x4d3fc2]['resume'](), _0x4d3fc2++;
                return this['_systemPausedTweens'] = [], !0x0;
            },
            'update': function(_0x4554c0, _0x5954a5) {
                if (0x0 === this['_tweens']['length']) return !0x1;
                var _0x3af3af = 0x0;
                for (_0x4554c0 = void 0x0 !== _0x4554c0 ? _0x4554c0 : ig['game']['tweens']['now'](); _0x3af3af < this['_tweens']['length'];) this['_tweens'][_0x3af3af]['update'](_0x4554c0) || _0x5954a5 ? _0x3af3af++ : this['_tweens']['splice'](_0x3af3af, 0x1);
                return !0x0;
            },
            'now': function() {
                return Date['now']();
            }
        }), ig['TweenDef'] = ig['Class']['extend']({
            '_ent': null,
            '_valuesStart': {},
            '_valuesEnd': {},
            '_valuesStartRepeat': {},
            '_duration': 0x3e8,
            '_repeat': 0x0,
            '_yoyo': !0x1,
            '_isPlaying': !0x1,
            '_reversed': !0x1,
            '_delayTime': 0x0,
            '_startTime': null,
            '_pauseTime': null,
            '_easingFunction': ig['Tween']['Easing']['Linear']['EaseNone'],
            '_interpolationFunction': ig['Tween']['Interpolation']['Linear'],
            '_chainedTweens': [],
            '_onStartCallback': null,
            '_onStartCallbackFired': !0x1,
            '_onUpdateCallback': null,
            '_onCompleteCallback': null,
            '_onStopCallback': null,
            '_onPauseCallback': null,
            '_onResumeCallback': null,
            '_currentElapsed': 0x0,
            'init': function(_0x41150b) {
                this['_object'] = _0x41150b;
            },
            'to': function(_0x96fa9a, _0x421a2f) {
                return this['_valuesEnd'] = _0x96fa9a, void 0x0 !== _0x421a2f && (this['_duration'] = _0x421a2f), this;
            },
            'start': function(_0x4b64d5) {
                if (this['_isPlaying']) return this;
                ig['game']['tweens']['add'](this), this['_isPlaying'] = !0x0, this['_onStartCallbackFired'] = !0x1, this['_startTime'] = void 0x0 !== _0x4b64d5 ? _0x4b64d5 : ig['game']['tweens']['now'](), this['_startTime'] += this['_delayTime'];
                for (var _0x516139 in this['_valuesEnd']) {
                    if (this['_valuesEnd'][_0x516139] instanceof Array) {
                        if (0x0 === this['_valuesEnd'][_0x516139]['length']) continue;
                        this['_valuesEnd'][_0x516139] = [this['_object'][_0x516139]]['concat'](this['_valuesEnd'][_0x516139]);
                    }
                    void 0x0 !== this['_object'][_0x516139] && (this['_valuesStart'][_0x516139] = this['_object'][_0x516139], !0x1 === this['_valuesStart'][_0x516139] instanceof Array && (this['_valuesStart'][_0x516139] *= 0x1), this['_valuesStartRepeat'][_0x516139] = this['_valuesStart'][_0x516139] || 0x0);
                }
                return this;
            },
            'stop': function() {
                if (!this['_isPlaying']) return this;
                return ig['game']['tweens']['remove'](this), this['_isPlaying'] = !0x1, null !== this['_onStopCallback'] && this['_onStopCallback']['call'](this['_object'], this['_object']), this['stopChainedTweens'](), this;
            },
            'pause': function() {
                if (!this['_isPlaying']) return this;
                return ig['game']['tweens']['remove'](this), this['_isPlaying'] = !0x1, this['_pauseTime'] = ig['game']['tweens']['now'](), null !== this['_onPauseCallback'] && this['_onPauseCallback']['call'](this['_object'], this['_object']), this;
            },
            'resume': function() {
                if (this['_isPlaying'] || !this['_pauseTime']) return this;
                var _0x4d24b4 = ig['game']['tweens']['now']() - this['_pauseTime'];
                return this['_startTime'] += _0x4d24b4, ig['game']['tweens']['add'](this), this['_isPlaying'] = !0x0, null !== this['_onResumeCallback'] && this['_onResumeCallback']['call'](this['_object'], this['_object']), this['_pauseTime'] = null, this;
            },
            'end': function() {
                return this['update'](this['_startTime'] + this['_duration']), this;
            },
            'stopChainedTweens': function() {
                for (var _0x437939 = 0x0, _0x1f689d = this['_chainedTweens']['length']; _0x437939 < _0x1f689d; _0x437939++) this['_chainedTweens'][_0x437939]['stop']();
            },
            'delay': function(_0x4857f0) {
                return this['_delayTime'] = _0x4857f0, this;
            },
            'repeat': function(_0x5a2225) {
                return this['_repeat'] = _0x5a2225, this;
            },
            'repeatDelay': function(_0xf4b6fb) {
                return this['_repeatDelayTime'] = _0xf4b6fb, this;
            },
            'yoyo': function(_0x56e656) {
                return this['_yoyo'] = _0x56e656, this;
            },
            'easing': function(_0x75793) {
                return this['_easingFunction'] = _0x75793, this;
            },
            'interpolation': function(_0x17890e) {
                return this['_interpolationFunction'] = _0x17890e, this;
            },
            'chain': function() {
                return this['_chainedTweens'] = arguments, this;
            },
            'onStart': function(_0xdc5771) {
                return this['_onStartCallback'] = _0xdc5771, this;
            },
            'onUpdate': function(_0x506938) {
                return this['_onUpdateCallback'] = _0x506938, this;
            },
            'onComplete': function(_0x15a94e) {
                return this['_onCompleteCallback'] = _0x15a94e, this;
            },
            'onStop': function(_0x4224de) {
                return this['_onStopCallback'] = _0x4224de, this;
            },
            'onPause': function(_0x27967f) {
                return this['_onPauseCallback'] = _0x27967f, this;
            },
            'onResume': function(_0x1a92c8) {
                return this['_onResumeCallback'] = _0x1a92c8, this;
            },
            'update': function(_0x5b2d39) {
                var _0x4e86fd, _0x5a0688, _0xe69370;
                if (_0x5b2d39 < this['_startTime']) return !0x0;
                !0x1 === this['_onStartCallbackFired'] && (null !== this['_onStartCallback'] && this['_onStartCallback']['call'](this['_object'], this['_object']), this['_onStartCallbackFired'] = !0x0), _0x5a0688 = (_0x5b2d39 - this['_startTime']) / this['_duration'], this['_currentElapsed'] = _0x5a0688 = 0x1 < _0x5a0688 ? 0x1 : _0x5a0688, _0xe69370 = this['_easingFunction'](_0x5a0688);
                for (_0x4e86fd in this['_valuesEnd'])
                    if (void 0x0 !== this['_valuesStart'][_0x4e86fd]) {
                        var _0x5bd976 = this['_valuesStart'][_0x4e86fd] || 0x0,
                            _0x533f13 = this['_valuesEnd'][_0x4e86fd];
                        _0x533f13 instanceof Array ? this['_object'][_0x4e86fd] = this['_interpolationFunction'](_0x533f13, _0xe69370) : ('string' === typeof _0x533f13 && (_0x533f13 = '+' === _0x533f13['charAt'](0x0) || '-' === _0x533f13['charAt'](0x0) ? _0x5bd976 + parseFloat(_0x533f13) : parseFloat(_0x533f13)), 'number' === typeof _0x533f13 && (this['_object'][_0x4e86fd] = _0x5bd976 + (_0x533f13 - _0x5bd976) * _0xe69370));
                    }
                null !== this['_onUpdateCallback'] && this['_onUpdateCallback']['call'](this['_object'], this['_object'], _0xe69370);
                if (0x1 === _0x5a0688) {
                    if (0x0 < this['_repeat']) {
                        isFinite(this['_repeat']) && this['_repeat']--;
                        for (_0x4e86fd in this['_valuesStartRepeat']) 'string' === typeof this['_valuesEnd'][_0x4e86fd] && (this['_valuesStartRepeat'][_0x4e86fd] = _valuesStartRepeat[_0x4e86fd] + parseFloat(_valuesEnd[_0x4e86fd])), this['_yoyo'] && (_0x5a0688 = this['_valuesStartRepeat'][_0x4e86fd], this['_valuesStartRepeat'][_0x4e86fd] = this['_valuesEnd'][_0x4e86fd], this['_valuesEnd'][_0x4e86fd] = _0x5a0688), this['_valuesStart'][_0x4e86fd] = this['_valuesStartRepeat'][_0x4e86fd];
                        this['_yoyo'] && (this['_reversed'] = !this['_reversed']), this['_startTime'] = void 0x0 !== this['_repeatDelayTime'] ? _0x5b2d39 + this['_repeatDelayTime'] : _0x5b2d39 + this['_delayTime'];
                    } else {
                        null !== this['_onCompleteCallback'] && this['_onCompleteCallback']['call'](this['_object'], this['_object']), _0x5b2d39 = 0x0;
                        for (_0x4e86fd = this['_chainedTweens']['length']; _0x5b2d39 < _0x4e86fd; _0x5b2d39++) this['_chainedTweens'][_0x5b2d39]['start'](this['_startTime'] + this['_duration']);
                        return !0x1;
                    }
                }
                return !0x0;
            }
        });
        var _0x59ddeb = [0x1];
        ig['Tween']['Interpolation'] = {
            'Linear': function(_0x413b23, _0x5de615) {
                var _0x58f26c = _0x413b23['length'] - 0x1,
                    _0x5850c3 = _0x58f26c * _0x5de615,
                    _0x363ed1 = Math['floor'](_0x5850c3),
                    _0x4bf414 = ig['Tween']['Interpolation']['Utils']['Linear'];
                return 0x0 > _0x5de615 ? _0x4bf414(_0x413b23[0x0], _0x413b23[0x1], _0x5850c3) : 0x1 < _0x5de615 ? _0x4bf414(_0x413b23[_0x58f26c], _0x413b23[_0x58f26c - 0x1], _0x58f26c - _0x5850c3) : _0x4bf414(_0x413b23[_0x363ed1], _0x413b23[_0x363ed1 + 0x1 > _0x58f26c ? _0x58f26c : _0x363ed1 + 0x1], _0x5850c3 - _0x363ed1);
            },
            'Bezier': function(_0x3f16ca, _0x563f76) {
                for (var _0x1917da = 0x0, _0x10ad96 = _0x3f16ca['length'] - 0x1, _0x8abc88 = Math['pow'], _0x4402fa = ig['Tween']['Interpolation']['Utils']['Bernstein'], _0x5aadb8 = 0x0; _0x5aadb8 <= _0x10ad96; _0x5aadb8++) _0x1917da += _0x8abc88(0x1 - _0x563f76, _0x10ad96 - _0x5aadb8) * _0x8abc88(_0x563f76, _0x5aadb8) * _0x3f16ca[_0x5aadb8] * _0x4402fa(_0x10ad96, _0x5aadb8);
                return _0x1917da;
            },
            'CatmullRom': function(_0xcd12bd, _0x265dda) {
                var _0x2b2ba5 = _0xcd12bd['length'] - 0x1,
                    _0x9c9a12 = _0x2b2ba5 * _0x265dda,
                    _0x6b5722 = Math['floor'](_0x9c9a12),
                    _0x3775be = ig['Tween']['Interpolation']['Utils']['CatmullRom'];
                return _0xcd12bd[0x0] === _0xcd12bd[_0x2b2ba5] ? (0x0 > _0x265dda && (_0x6b5722 = Math['floor'](_0x9c9a12 = _0x2b2ba5 * (0x1 + _0x265dda))), _0x3775be(_0xcd12bd[(_0x6b5722 - 0x1 + _0x2b2ba5) % _0x2b2ba5], _0xcd12bd[_0x6b5722], _0xcd12bd[(_0x6b5722 + 0x1) % _0x2b2ba5], _0xcd12bd[(_0x6b5722 + 0x2) % _0x2b2ba5], _0x9c9a12 - _0x6b5722)) : 0x0 > _0x265dda ? _0xcd12bd[0x0] - (_0x3775be(_0xcd12bd[0x0], _0xcd12bd[0x0], _0xcd12bd[0x1], _0xcd12bd[0x1], -_0x9c9a12) - _0xcd12bd[0x0]) : 0x1 < _0x265dda ? _0xcd12bd[_0x2b2ba5] - (_0x3775be(_0xcd12bd[_0x2b2ba5], _0xcd12bd[_0x2b2ba5], _0xcd12bd[_0x2b2ba5 - 0x1], _0xcd12bd[_0x2b2ba5 - 0x1], _0x9c9a12 - _0x2b2ba5) - _0xcd12bd[_0x2b2ba5]) : _0x3775be(_0xcd12bd[_0x6b5722 ? _0x6b5722 - 0x1 : 0x0], _0xcd12bd[_0x6b5722], _0xcd12bd[_0x2b2ba5 < _0x6b5722 + 0x1 ? _0x2b2ba5 : _0x6b5722 + 0x1], _0xcd12bd[_0x2b2ba5 < _0x6b5722 + 0x2 ? _0x2b2ba5 : _0x6b5722 + 0x2], _0x9c9a12 - _0x6b5722);
            },
            'Utils': {
                'Linear': function(_0x42ac14, _0x4856e5, _0x563e77) {
                    return (_0x4856e5 - _0x42ac14) * _0x563e77 + _0x42ac14;
                },
                'Bernstein': function(_0x3b7d54, _0x1fe152) {
                    var _0x297c04 = ig['Tween']['Interpolation']['Utils']['Factorial'];
                    return _0x297c04(_0x3b7d54) / _0x297c04(_0x1fe152) / _0x297c04(_0x3b7d54 - _0x1fe152);
                },
                'Factorial': function(_0x303fea) {
                    var _0x389311 = 0x1;
                    if (_0x59ddeb[_0x303fea]) return _0x59ddeb[_0x303fea];
                    for (var _0x2a40be = _0x303fea; 0x1 < _0x2a40be; _0x2a40be--) _0x389311 *= _0x2a40be;
                    return _0x59ddeb[_0x303fea] = _0x389311;
                },
                'CatmullRom': function(_0x102613, _0x23ed85, _0x10d57c, _0x526cc2, _0x234040) {
                    _0x102613 = 0.5 * (_0x10d57c - _0x102613), _0x526cc2 = 0.5 * (_0x526cc2 - _0x23ed85);
                    var _0x764852 = _0x234040 * _0x234040;
                    return (0x2 * _0x23ed85 - 0x2 * _0x10d57c + _0x102613 + _0x526cc2) * _0x234040 * _0x764852 + (-0x3 * _0x23ed85 + 0x3 * _0x10d57c - 0x2 * _0x102613 - _0x526cc2) * _0x764852 + _0x102613 * _0x234040 + _0x23ed85;
                }
            }
        };
    }), ig['baked'] = !0x0, ig['module']('plugins.url-parameters')['defines'](function() {
        ig['UrlParameters'] = ig['Class']['extend']({
            'init': function() {
                switch (getQueryVariable('iphone')) {
                    case 'true':
                        ig['ua']['iPhone'] = !0x0, console['log']('iPhone\x20mode');
                }
                var _0x50472d = getQueryVariable('webview');
                if (_0x50472d) switch (_0x50472d) {
                    case 'true':
                        ig['ua']['is_uiwebview'] = !0x0, console['log']('webview\x20mode');
                }
                if (_0x50472d = getQueryVariable('debug')) switch (_0x50472d) {
                    case 'true':
                        ig['game']['showDebugMenu'](), console['log']('debug\x20mode');
                }
                switch (getQueryVariable('view')) {
                    case 'stats':
                        ig['game']['resetPlayerStats'](), ig['game']['endGame']();
                }
                getQueryVariable('ad');
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.director')['requires']('impact.impact')['defines'](function() {
        ig['Director'] = ig['Class']['extend']({
            'init': function(_0xc990ca, _0xe62dc5) {
                this['game'] = _0xc990ca, this['levels'] = [], this['currentLevel'] = 0x0, this['append'](_0xe62dc5);
            },
            'loadLevel': function(_0x3f1fb3) {
                for (var _0x20bdd0 in ig['sizeHandler']['dynamicClickableEntityDivs']) {
                    var _0x48c0b9 = ig['domHandler']['getElementById']('#' + _0x20bdd0);
                    ig['domHandler']['hide'](_0x48c0b9);
                }
                return this['currentLevel'] = _0x3f1fb3, this['game']['loadLevel'](this['levels'][_0x3f1fb3]), !0x0;
            },
            'loadLevelWithoutEntities': function(_0x6aad22) {
                return this['currentLevel'] = _0x6aad22, this['game']['loadLevelWithoutEntities'](this['levels'][_0x6aad22]), !0x0;
            },
            'append': function(_0x215dc1) {
                return newLevels = [], 'object' === typeof _0x215dc1 ? (_0x215dc1['constructor'] === []['constructor'] ? newLevels = _0x215dc1 : newLevels[0x0] = _0x215dc1, this['levels'] = this['levels']['concat'](newLevels), !0x0) : !0x1;
            },
            'nextLevel': function() {
                return this['currentLevel'] + 0x1 < this['levels']['length'] ? this['loadLevel'](this['currentLevel'] + 0x1) : !0x1;
            },
            'previousLevel': function() {
                return 0x0 <= this['currentLevel'] - 0x1 ? this['loadLevel'](this['currentLevel'] - 0x1) : !0x1;
            },
            'jumpTo': function(_0x5ea723) {
                var _0x3a70e2 = null;
                for (i = 0x0; i < this['levels']['length']; i++) this['levels'][i] == _0x5ea723 && (_0x3a70e2 = i);
                return 0x0 <= _0x3a70e2 ? this['loadLevel'](_0x3a70e2) : !0x1;
            },
            'firstLevel': function() {
                return this['loadLevel'](0x0);
            },
            'lastLevel': function() {
                return this['loadLevel'](this['levels']['length'] - 0x1);
            },
            'reloadLevel': function() {
                return this['loadLevel'](this['currentLevel']);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.impact-storage')['requires']('impact.game')['defines'](function() {
        ig['Storage'] = ig['Class']['extend']({
            'staticInstantiate': function() {
                return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
            },
            'init': function() {
                ig['Storage']['instance'] = this;
            },
            'isCapable': function() {
                return 'undefined' !== typeof window['localStorage'];
            },
            'isSet': function(_0x3e50f3) {
                return null !== this['get'](_0x3e50f3);
            },
            'initUnset': function(_0x45a204, _0x175dd7) {
                null === this['get'](_0x45a204) && this['set'](_0x45a204, _0x175dd7);
            },
            'get': function(_0x265fb2) {
                if (!this['isCapable']()) return null;
                try {
                    return JSON['parse'](localStorage['getItem'](_0x265fb2));
                } catch (_0x26b7c8) {
                    return window['localStorage']['getItem'](_0x265fb2);
                }
            },
            'getInt': function(_0x758ecb) {
                return ~~this['get'](_0x758ecb);
            },
            'getFloat': function(_0xce4ff9) {
                return parseFloat(this['get'](_0xce4ff9));
            },
            'getBool': function(_0x349df2) {
                return !!this['get'](_0x349df2);
            },
            'key': function(_0x275ec8) {
                return this['isCapable']() ? window['localStorage']['key'](_0x275ec8) : null;
            },
            'set': function(_0x1af4f6, _0x7e7e9f) {
                if (!this['isCapable']()) return null;
                try {
                    window['localStorage']['setItem'](_0x1af4f6, JSON['stringify'](_0x7e7e9f));
                } catch (_0x7f205c) {
                    console['log'](_0x7f205c);
                }
            },
            'setHighest': function(_0x3c79b0, _0xe78e31) {
                _0xe78e31 > this['getFloat'](_0x3c79b0) && this['set'](_0x3c79b0, _0xe78e31);
            },
            'remove': function(_0x2f483d) {
                if (!this['isCapable']()) return null;
                window['localStorage']['removeItem'](_0x2f483d);
            },
            'clear': function() {
                if (!this['isCapable']()) return null;
                window['localStorage']['clear']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.fullscreen')['requires']('impact.entity', 'plugins.handlers.size-handler', 'plugins.director')['defines'](function() {
        // Disable fullscreen button (0x1)
        ig['Fullscreen'] = {
            'version': '1.0.0',
            'enableFullscreenButton': !0x1,
            '_isEnabled': 'notChecked',
            'isEnabled': function() {
                return 'notChecked' == this['_isEnabled'] && (this['_isEnabled'] = document['fullscreenEnabled'] || document['mozFullScreenEnabled'] || document['webkitFullscreenEnabled'] || document['msFullscreenEnabled'] ? !0x0 : !0x1), this['_isEnabled'];
            },
            'isFullscreen': function() {
                return ig['Fullscreen']['isEnabled']() && (document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement']) ? !0x0 : !0x1;
            },
            'toggleFullscreen': function() {
                ig['Fullscreen']['isFullscreen']() ? ig['Fullscreen']['exitFullscreen']() : ig['Fullscreen']['requestFullscreen'](), ig['sizeHandler']['orientationDelayHandler']();
                if (ig && ig['visibilityHandler']) ig['visibilityHandler']['onChange']('focus');
                try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0xe3bd70) {}
            },
            'requestFullscreen': function() {
                var _0x59534 = document['documentElement'];
                _0x59534['requestFullscreen'] ? _0x59534['requestFullscreen']() : _0x59534['webkitRequestFullscreen'] ? _0x59534['webkitRequestFullscreen']() : _0x59534['mozRequestFullScreen'] ? _0x59534['mozRequestFullScreen']() : _0x59534['msRequestFullscreen'] ? _0x59534['msRequestFullscreen']() : console['log']('no\x20request\x20fullscreen\x20method\x20available');
            },
            'exitFullscreen': function() {
                document['exitFullscreen'] ? document['exitFullscreen']() : document['webkitExitFullscreen'] ? document['webkitExitFullscreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['msExitFullscreen'] ? document['msExitFullscreen']() : console['log']('no\x20exit\x20fullscreen\x20method\x20available');
            },
            'divs': {}
        }, ig['Director']['inject']({
            'loadLevel': function(_0x485b92) {
                var _0x34acfc = ig['Fullscreen']['divs'],
                    _0x27562a;
                for (_0x27562a in _0x34acfc) _0x34acfc = ig['domHandler']['getElementById']('#' + _0x27562a), ig['domHandler']['hide'](_0x34acfc);
                return this['parent'](_0x485b92);
            }
        }), ig['SizeHandler']['inject']({
            'resize': function() {
                this['parent']();
                var _0x5cf104 = ig['Fullscreen']['divs'],
                    _0x1978cb;
                for (_0x1978cb in _0x5cf104) {
                    var _0x3cc699 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']),
                        _0xccf982 = ig['domHandler']['getElementById']('#' + _0x1978cb),
                        _0xb70a5e = _0x5cf104[_0x1978cb]['entity_pos_x'],
                        _0x21d6f6 = _0x5cf104[_0x1978cb]['entity_pos_y'],
                        _0x27b5d6 = _0x5cf104[_0x1978cb]['width'],
                        _0x2f5254 = _0x5cf104[_0x1978cb]['height'],
                        _0x3931c8 = ig['domHandler']['getElementById']('#canvas'),
                        _0x251424 = ig['domHandler']['getOffsets'](_0x3931c8);
                    ig['ua']['mobile'] ? (_0x3931c8 = _0x251424['left'], _0x251424 = _0x251424['top'], ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0xb70a5e = Math['floor'](_0x3931c8 + _0xb70a5e * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x21d6f6 = Math['floor'](_0x251424 + _0x21d6f6 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x27b5d6 = Math['floor'](_0x27b5d6 * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x2f5254 = Math['floor'](_0x2f5254 * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0xb70a5e = Math['floor'](_0xb70a5e * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x21d6f6 = Math['floor'](_0x21d6f6 * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x27b5d6 = Math['floor'](_0x27b5d6 * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x2f5254 = Math['floor'](_0x2f5254 * ig['sizeHandler']['sizeRatio']['y']) + 'px')) : (_0x3931c8 = _0x251424['left'], _0x251424 = _0x251424['top'], _0xb70a5e = Math['floor'](_0x3931c8 + _0xb70a5e * _0x3cc699) + 'px', _0x21d6f6 = Math['floor'](_0x251424 + _0x21d6f6 * _0x3cc699) + 'px', _0x27b5d6 = Math['floor'](_0x27b5d6 * _0x3cc699) + 'px', _0x2f5254 = Math['floor'](_0x2f5254 * _0x3cc699) + 'px'), ig['domHandler']['css'](_0xccf982, {
                        'float': 'left',
                        'position': 'absolute',
                        'left': _0xb70a5e,
                        'top': _0x21d6f6,
                        'width': _0x27b5d6,
                        'height': _0x2f5254,
                        'z-index': 0x3
                    }), _0x5cf104[_0x1978cb]['font-size'] && ig['domHandler']['css'](_0xccf982, {
                        'font-size': _0x5cf104[_0x1978cb]['font-size'] * _0x3cc699 + 'px'
                    });
                }
            }
        }), ig['FullscreenButton'] = ig['Entity']['extend']({
            'enterImage': null,
            'exitImage': null,
            'isReady': !0x1,
            'zIndex': 0xf423f,
            'identifier': null,
            'prevPos': {
                'x': 0x0,
                'y': 0x0
            },
            'invisImagePath': 'media/graphics/misc/invisible.png',
            'init': function(_0x2c8953, _0x5d4ff8, _0x1a26b6) {
                this['parent'](_0x2c8953, _0x5d4ff8, _0x1a26b6), ig['Fullscreen']['isEnabled']() && ig['Fullscreen']['enableFullscreenButton'] ? this['enterImage']['loaded'] ? this['initSize']() : this['enterImage']['loadCallback'] = function() {
                    this['initSize']();
                }['bind'](this) : this['kill']();
            },
            'kill': function() {
                this['parent']();
            },
            'destroy': function() {
                this['parent'](), console['log']('destroy');
            },
            'initSize': function() {
                this['size']['x'] = this['enterImage']['width'], this['size']['y'] = this['enterImage']['height'], this['createClickableLayer'](), this['isReady'] = !0x0;
            },
            'createClickableLayer': function() {
                this['identifier'] = 'fullscreen-button-layer';
                var _0x14c7ed = ig['domHandler']['getElementById']('#' + this['identifier']);
                _0x14c7ed ? (ig['domHandler']['show'](_0x14c7ed), ig['domHandler']['attr'](_0x14c7ed, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this['createClickableOutboundLayer']();
            },
            'update': function(_0xe417d1, _0x43a3a6) {
                _0xe417d1 = this['pos']['x'], _0x43a3a6 = this['pos']['y'];
                if (this['isReady'] && !(this['prevPos']['x'] === _0xe417d1 && this['prevPos']['y'] === _0x43a3a6)) {
                    ig['Fullscreen']['divs'][this['identifier']] = {}, ig['Fullscreen']['divs'][this['identifier']]['width'] = this['size']['x'], ig['Fullscreen']['divs'][this['identifier']]['height'] = this['size']['y'], ig['Fullscreen']['divs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['Fullscreen']['divs'][this['identifier']]['entity_pos_y'] = this['pos']['y'];
                    var _0x36fa1a = ig['domHandler']['getElementById']('#' + this['identifier']);
                    this['updateCSS'](_0x36fa1a), this['prevPos']['x'] = _0xe417d1, this['prevPos']['y'] = _0x43a3a6;
                }
            },
            'draw': function() {
                this['isReady'] && (ig['Fullscreen']['isFullscreen']() ? this['exitImage']['draw'](this['pos']['x'], this['pos']['y']) : this['enterImage']['draw'](this['pos']['x'], this['pos']['y']));
            },
            'createClickableOutboundLayer': function() {
                var _0x444777 = this['identifier'],
                    _0x1a416c = this['invisImagePath'],
                    _0x7e088f = ig['domHandler']['create']('div');
                ig['domHandler']['attr'](_0x7e088f, 'id', _0x444777), ig['domHandler']['attr'](_0x7e088f, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
                var _0x5bfabe = ig['domHandler']['create']('a'),
                    _0x32b8d2 = ig['domHandler']['create']('img');
                ig['domHandler']['css'](_0x32b8d2, {
                    'width': '100%',
                    'height': '100%'
                }), ig['domHandler']['attr'](_0x32b8d2, 'src', _0x1a416c), ig['domHandler']['addEvent'](_0x7e088f, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1), ig['domHandler']['appendChild'](_0x5bfabe, _0x32b8d2), ig['domHandler']['appendChild'](_0x7e088f, _0x5bfabe), ig['domHandler']['appendToBody'](_0x7e088f), ig['Fullscreen']['divs'][_0x444777] = {}, ig['Fullscreen']['divs'][_0x444777]['width'] = this['size']['x'], ig['Fullscreen']['divs'][_0x444777]['height'] = this['size']['y'], ig['Fullscreen']['divs'][_0x444777]['entity_pos_x'] = this['pos']['x'], ig['Fullscreen']['divs'][_0x444777]['entity_pos_y'] = this['pos']['y'], this['updateCSS'](_0x7e088f);
            },
            'updateCSS': function(_0x5ee396) {
                var _0x2b84cc = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
                if (ig['ua']['mobile']) {
                    var _0x19dd8f = ig['domHandler']['getElementById']('#canvas'),
                        _0x19dd8f = ig['domHandler']['getOffsets'](_0x19dd8f),
                        _0x6c602b = _0x19dd8f['left'],
                        _0x5c40e5 = _0x19dd8f['top'];
                    console['log'](_0x19dd8f['left']), ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x19dd8f = Math['floor'](_0x6c602b + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x5c40e5 = Math['floor'](_0x5c40e5 + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0x6c602b = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x2b84cc = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x19dd8f = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x5c40e5 = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x6c602b = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x2b84cc = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
                } else _0x19dd8f = ig['domHandler']['getElementById']('#canvas'), _0x19dd8f = ig['domHandler']['getOffsets'](_0x19dd8f), _0x6c602b = _0x19dd8f['left'], _0x5c40e5 = _0x19dd8f['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x19dd8f = Math['floor'](_0x6c602b + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x5c40e5 = Math['floor'](_0x5c40e5 + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x6c602b = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x2b84cc = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x19dd8f = Math['floor'](_0x6c602b + this['pos']['x'] * _0x2b84cc) + 'px', _0x5c40e5 = Math['floor'](_0x5c40e5 + this['pos']['y'] * _0x2b84cc) + 'px', _0x6c602b = Math['floor'](this['size']['x'] * _0x2b84cc) + 'px', _0x2b84cc = Math['floor'](this['size']['y'] * _0x2b84cc) + 'px');
                ig['domHandler']['css'](_0x5ee396, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x19dd8f,
                    'top': _0x5c40e5,
                    'width': _0x6c602b,
                    'height': _0x2b84cc,
                    'z-index': 0x3
                });
            }
        });
    }), this['START_BRANDING_SPLASH'], ig['baked'] = !0x0, ig['module']('plugins.branding.splash')['requires']('impact.impact', 'impact.entity')['defines'](function() {
        ig['BrandingSplash'] = ig['Class']['extend']({
            'init': function() {
                ig['game']['spawnEntity'](EntityBranding, 0x0, 0x0), console['log']('spawn\x20branding');
            }
        }), EntityBranding = ig['Entity']['extend']({
            'autoUpdateScale': !0x1,
            'gravityFactor': 0x0,
            'size': {
                'x': 0x20,
                'y': 0x20
            },
            'splash': new ig['Image']('branding/splash1.png'),
            'init': function(_0x2584e1, _0x6af237, _0x2172f7) {
                this['parent'](_0x2584e1, _0x6af237, _0x2172f7), 0x140 >= ig['system']['width'] ? (this['size']['x'] = 0x140, this['size']['y'] = 0xc8) : (this['size']['x'] = 0x1e0, this['size']['y'] = 0xf0), this['pos']['x'] = (ig['system']['width'] - this['size']['x']) / 0x2, this['pos']['y'] = -this['size']['y'] - 0xc8, this['endPosY'] = (ig['system']['height'] - this['size']['y']) / 0x2, _0x2584e1 = this['tween']({
                    'pos': {
                        'y': this['endPosY']
                    }
                }, 0.5, {
                    'easing': ig['Tween']['Easing']['Bounce']['EaseIn']
                }), _0x6af237 = this['tween']({}, 2.5, {
                    'onComplete': function() {
                        ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']);
                    }
                }), _0x2584e1['chain'](_0x6af237), _0x2584e1['start'](), this['currentAnim'] = this['anims']['idle'];
            },
            'createClickableLayer': function() {
                console['log']('Build\x20clickable\x20layer'), this['checkClickableLayer']('branding-splash', _SETTINGS['Branding']['Logo']['Link'], _SETTINGS['Branding']['Logo']['NewWindow']);
            },
            'doesClickableLayerExist': function(_0x56da43) {
                for (k in dynamicClickableEntityDivs)
                    if (k == _0x56da43) return !0x0;
                return !0x1;
            },
            'checkClickableLayer': function(_0xdf3a88, _0x1b79c1, _0x1b614c) {
                'undefined' == typeof wm && (this['doesClickableLayerExist'](_0xdf3a88) ? (ig['game']['showOverlay']([_0xdf3a88]), $('#' + _0xdf3a88)['find']('[href]')['attr']('href', _0x1b79c1)) : this['createClickableOutboundLayer'](_0xdf3a88, _0x1b79c1, 'media/graphics/misc/invisible.png', _0x1b614c));
            },
            'createClickableOutboundLayer': function(_0x1bc0a9, _0x31bc5f, _0x10635b, _0x1cccbb) {
                var _0x298b29 = ig['$new']('div');
                _0x298b29['id'] = _0x1bc0a9, document['body']['appendChild'](_0x298b29), _0x298b29 = $('#' + _0x298b29['id']), _0x298b29['css']('float', 'left'), _0x298b29['css']('position', 'absolute');
                if (ig['ua']['mobile']) {
                    var _0x95443a = window['innerHeight'] / mobileHeight,
                        _0x6248a0 = window['innerWidth'] / mobileWidth;
                    _0x298b29['css']('left', this['pos']['x'] * _0x6248a0), _0x298b29['css']('top', this['pos']['y'] * _0x95443a), _0x298b29['css']('width', this['size']['x'] * _0x6248a0), _0x298b29['css']('height', this['size']['y'] * _0x95443a);
                } else _0x95443a = w / 0x2 - destW / 0x2, _0x6248a0 = h / 0x2 - destH / 0x2, console['log'](_0x95443a, _0x6248a0), _0x298b29['css']('left', _0x95443a + this['pos']['x'] * multiplier), _0x298b29['css']('top', _0x6248a0 + this['pos']['y'] * multiplier), _0x298b29['css']('width', this['size']['x'] * multiplier), _0x298b29['css']('height', this['size']['y'] * multiplier);
                _0x1cccbb ? _0x298b29['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0x31bc5f + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x10635b + '\x27></a>') : _0x298b29['html']('<a\x20href=\x27' + _0x31bc5f + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x10635b + '\x27></a>'), dynamicClickableEntityDivs[_0x1bc0a9] = {}, dynamicClickableEntityDivs[_0x1bc0a9]['width'] = this['size']['x'] * multiplier, dynamicClickableEntityDivs[_0x1bc0a9]['height'] = this['size']['y'] * multiplier, dynamicClickableEntityDivs[_0x1bc0a9]['entity_pos_x'] = this['pos']['x'], dynamicClickableEntityDivs[_0x1bc0a9]['entity_pos_y'] = this['pos']['y'];
            },
            'draw': function() {
                ig['system']['context']['fillStyle'] = '#ffffff', ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']), ig['system']['context']['fillStyle'] = '#000', ig['system']['context']['font'] = '12px\x20Arial', ig['system']['context']['textAlign'] = 'left', 0x140 >= ig['system']['width'] ? ig['system']['context']['fillText']('powered\x20by\x20MarketJS.com', ig['system']['width'] - 0x96, ig['system']['height'] - 0xf) : ig['system']['context']['fillText']('powered\x20by\x20MarketJS.com', ig['system']['width'] - 0xa0, ig['system']['height'] - 0xf), this['parent'](), this['splash'] && ig['system']['context']['drawImage'](this['splash']['data'], 0x0, 0x0, this['splash']['data']['width'], this['splash']['data']['height'], this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
            }
        });
    }), this['END_BRANDING_SPLASH'], ig['baked'] = !0x0, ig['module']('game.entities.branding-logo-placeholder')['requires']('impact.entity')['defines'](function() {
        EntityBrandingLogoPlaceholder = ig['Entity']['extend']({
            'gravityFactor': 0x0,
            'size': {
                'x': 0x20,
                'y': 0x20
            },
            '_wmDrawBox': !0x0,
            '_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
            'init': function(_0x2384a6, _0x20035b, _0x1ea9dd) {
                this['parent'](_0x2384a6, _0x20035b, _0x1ea9dd);
                if (_0x1ea9dd) switch (console['log']('settings\x20found\x20...\x20using\x20that\x20div\x20layer\x20name'), _0x2384a6 = _0x1ea9dd['div_layer_name'], console['log']('settings.centralize:', _0x1ea9dd['centralize']), _0x1ea9dd['centralize']) {
                    case 'true':
                        console['log']('centralize\x20true'), centralize = !0x0;
                        break;
                    case 'false':
                        console['log']('centralize\x20false'), centralize = !0x1;
                        break;
                    default:
                        console['log']('default\x20...\x20centralize\x20false'), centralize = !0x1;
                } else _0x2384a6 = 'branding-logo', centralize = !0x1;
                if ('undefined' == typeof wm) {
                    if (_SETTINGS['Branding']['Logo']['Enabled']) try {
                        ig['game']['spawnEntity'](EntityBrandingLogo, this['pos']['x'], this['pos']['y'], {
                            'div_layer_name': _0x2384a6,
                            'centralize': centralize
                        });
                    } catch (_0x500806) {
                        console['log'](_0x500806);
                    }
                    this['kill']();
                }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('plugins.clickable-div-layer')['requires']('plugins.data.vector')['defines'](function() {
        ClickableDivLayer = ig['Class']['extend']({
            'version': '1.0.0',
            'pos': new Vector2(0x0, 0x0),
            'size': new Vector2(0x0, 0x0),
            'identifier': null,
            'invisImagePath': 'media/graphics/misc/invisible.png',
            'init': function(_0x493d3a) {
                this['pos'] = new Vector2(_0x493d3a['pos']['x'], _0x493d3a['pos']['y']), this['size'] = new Vector2(_0x493d3a['size']['x'], _0x493d3a['size']['y']);
                var _0x43f0da = 'more-games',
                    _0x439e94 = 'https://www.marketjs.com',
                    _0x464efc = !0x1;
                _0x493d3a['div_layer_name'] && (_0x43f0da = _0x493d3a['div_layer_name']), _0x493d3a['link'] && (_0x439e94 = _0x493d3a['link']), _0x493d3a['newWindow'] && (_0x464efc = _0x493d3a['newWindow']), this['createClickableLayer'](_0x43f0da, _0x439e94, _0x464efc);
            },
            'createClickableLayer': function(_0x5d9225, _0x525d8a, _0x51db42) {
                this['identifier'] = _0x5d9225;
                var _0x48c266 = ig['domHandler']['getElementById']('#' + _0x5d9225);
                _0x48c266 ? (ig['domHandler']['show'](_0x48c266), ig['domHandler']['attr'](_0x48c266, 'href', _0x525d8a)) : this['createClickableOutboundLayer'](_0x5d9225, _0x525d8a, this['invisImagePath'], _0x51db42);
            },
            'update': function(_0x111757, _0x41f3b5, _0x3c775e, _0x24c9be) {
                this['pos']['x'] === _0x111757 && this['pos']['y'] === _0x41f3b5 && this['size']['x'] === _0x3c775e && this['size']['y'] === _0x24c9be || (this['pos']['x'] = _0x111757, this['pos']['y'] = _0x41f3b5, this['size']['x'] = _0x3c775e, this['size']['y'] = _0x24c9be, ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']] = {}, ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['width'] = this['size']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['height'] = this['size']['y'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_y'] = this['pos']['y'], _0x111757 = ig['domHandler']['getElementById']('#' + this['identifier']), this['updateCSS'](_0x111757));
            },
            'createClickableOutboundLayer': function(_0x2edee2, _0x34299c, _0x4ea8a8, _0x2d15aa) {
                var _0x34df9c = ig['domHandler']['create']('div');
                ig['domHandler']['attr'](_0x34df9c, 'id', _0x2edee2);
                var _0xb3057a = ig['domHandler']['create']('a');
                ig['domHandler']['addEvent'](_0x34df9c, 'mousedown', function(_0x204fd4) {
                    _0x204fd4['preventDefault']();
                }), _0x2d15aa ? (ig['domHandler']['attr'](_0xb3057a, 'href', _0x34299c), ig['domHandler']['attr'](_0xb3057a, 'target', '_blank')) : ig['domHandler']['attr'](_0xb3057a, 'href', _0x34299c), _0x34299c = ig['domHandler']['create']('img'), ig['domHandler']['css'](_0x34299c, {
                    'width': '100%',
                    'height': '100%'
                }), ig['domHandler']['attr'](_0x34299c, 'src', _0x4ea8a8), ig['domHandler']['addEvent'](_0x34df9c, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1), ig['domHandler']['appendChild'](_0xb3057a, _0x34299c), ig['domHandler']['appendChild'](_0x34df9c, _0xb3057a), ig['domHandler']['appendToBody'](_0x34df9c), ig['sizeHandler']['dynamicClickableEntityDivs'][_0x2edee2] = {}, ig['sizeHandler']['dynamicClickableEntityDivs'][_0x2edee2]['width'] = this['size']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][_0x2edee2]['height'] = this['size']['y'], ig['sizeHandler']['dynamicClickableEntityDivs'][_0x2edee2]['entity_pos_x'] = this['pos']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][_0x2edee2]['entity_pos_y'] = this['pos']['y'], this['updateCSS'](_0x34df9c);
            },
            'updateCSS': function(_0x19c174) {
                var _0x1252bf = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
                if (ig['ua']['mobile']) {
                    var _0x4324c1 = ig['domHandler']['getElementById']('#canvas'),
                        _0x2b6728 = ig['domHandler']['getOffsets'](_0x4324c1),
                        _0x4324c1 = _0x2b6728['left'],
                        _0x2b6728 = _0x2b6728['top'];
                    if (ig['sizeHandler']['disableStretchToFitOnMobileFlag']) var _0x4324c1 = Math['floor'](_0x4324c1 + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                        _0x2b6728 = Math['floor'](_0x2b6728 + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px',
                        _0x33f2a1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px',
                        _0x1252bf = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px';
                    else _0x4324c1 = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x2b6728 = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x33f2a1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x1252bf = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px';
                } else _0x4324c1 = ig['domHandler']['getElementById']('#canvas'), _0x2b6728 = ig['domHandler']['getOffsets'](_0x4324c1), _0x4324c1 = _0x2b6728['left'], _0x2b6728 = _0x2b6728['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x4324c1 = Math['floor'](_0x4324c1 + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x2b6728 = Math['floor'](_0x2b6728 + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0x33f2a1 = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x1252bf = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x4324c1 = Math['floor'](_0x4324c1 + this['pos']['x'] * _0x1252bf) + 'px', _0x2b6728 = Math['floor'](_0x2b6728 + this['pos']['y'] * _0x1252bf) + 'px', _0x33f2a1 = Math['floor'](this['size']['x'] * _0x1252bf) + 'px', _0x1252bf = Math['floor'](this['size']['y'] * _0x1252bf) + 'px');
                ig['domHandler']['css'](_0x19c174, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x4324c1,
                    'top': _0x2b6728,
                    'width': _0x33f2a1,
                    'height': _0x1252bf,
                    'z-index': 0x3
                });
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.button-more-games')['requires']('impact.entity', 'plugins.clickable-div-layer')['defines'](function() {
        EntityButtonMoreGames = ig['Entity']['extend']({
            'type': ig['Entity']['TYPE']['A'],
            'gravityFactor': 0x0,
            'logo': new ig['AnimationSheet']('media/graphics/sprites/buttons/bt-more-games.png', 0x58, 0x57),
            'size': {
                'x': 0x58,
                'y': 0x57
            },
            'zIndex': 0x2ee,
            'clickableLayer': null,
            'link': null,
            'newWindow': !0x1,
            'div_layer_name': 'more-games',
            'name': 'moregames',
            'init': function(_0x2b3ad2, _0x424f0a, _0x3682d9) {
                this['parent'](_0x2b3ad2, _0x424f0a, _0x3682d9), this['pos']['x'] = ig['system']['width'] - this['size']['x'] - 0xf, this['pos']['y'] = 0xd7, ig['global']['wm'] || (this['div_layer_name'] = _0x3682d9['div_layer_name'] ? _0x3682d9['div_layer_name'] : 'more-games', _SETTINGS['MoreGames']['Enabled'] ? (this['anims']['idle'] = new ig['Animation'](this['logo'], 0x0, [0x0], !0x0), this['currentAnim'] = this['anims']['idle'], _SETTINGS['MoreGames']['Link'] && (this['link'] = _SETTINGS['MoreGames']['Link']), _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']());
            },
            'show': function() {
                var _0x5daa22 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
                _0x5daa22 && ig['domHandler']['show'](_0x5daa22);
            },
            'hide': function() {
                var _0xcb1dce = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
                _0xcb1dce && ig['domHandler']['hide'](_0xcb1dce);
            },
            'clicked': function() {},
            'clicking': function() {},
            'released': function() {}
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.pointer')['requires']('impact.entity')['defines'](function() {
        EntityPointer = ig['Entity']['extend']({
            'checkAgainst': ig['Entity']['TYPE']['BOTH'],
            'size': new Vector2(0x1, 0x1),
            'isFirstPressed': !0x1,
            'isPressed': !0x1,
            'isReleased': !0x1,
            'isHovering': !0x1,
            'hoveringItem': null,
            'objectArray': [],
            'clickedObjectList': [],
            'ignorePause': !0x0,
            'zIndex': 0x157c,
            'check': function(_0x4d7b03) {
                this['objectArray']['push'](_0x4d7b03);
            },
            'clickObject': function(_0x21aae3) {
                this['isFirstPressed'] && 'function' == typeof _0x21aae3['clicked'] && (_0x21aae3['clicked'](), this['addToClickedObjectList'](_0x21aae3)), this['isPressed'] && !this['isReleased'] && 'function' == typeof _0x21aae3['clicking'] && _0x21aae3['clicking'](), this['isReleased'] && 'function' == typeof _0x21aae3['released'] && (_0x21aae3['released'](), this['removeFromClickedObjectList'](_0x21aae3));
            },
            'refreshPos': function() {
                this['pos'] = ig['game']['io']['getClickPos']();
            },
            'update': function() {
                this['parent'](), this['refreshPos']();
                var _0x34ed49 = null,
                    _0x369377 = -0x1;
                for (a = this['objectArray']['length'] - 0x1; - 0x1 < a; a--) this['objectArray'][a]['zIndex'] > _0x369377 && (_0x369377 = this['objectArray'][a]['zIndex'], _0x34ed49 = this['objectArray'][a]);
                if (null != _0x34ed49) null != this['hoveringItem'] ? this['hoveringItem'] != _0x34ed49 && ('function' == typeof this['hoveringItem']['leave'] && this['hoveringItem']['leave'](), 'function' == typeof _0x34ed49['over'] && _0x34ed49['over']()) : 'function' == typeof _0x34ed49['over'] && _0x34ed49['over'](), this['hoveringItem'] = _0x34ed49, this['clickObject'](_0x34ed49), this['objectArray'] = [];
                else {
                    if (null != this['hoveringItem'] && 'function' == typeof this['hoveringItem']['leave'] && (this['hoveringItem']['leave'](), this['hoveringItem'] = null), this['isReleased']) {
                        for (_0x34ed49 = 0x0; _0x34ed49 < this['clickedObjectList']['length']; _0x34ed49++) _0x369377 = this['clickedObjectList'][_0x34ed49], 'function' == typeof _0x369377['releasedOutside'] && _0x369377['releasedOutside']();
                        this['clickedObjectList'] = [];
                    }
                }
                this['isFirstPressed'] = ig['input']['pressed']('click'), this['isReleased'] = ig['input']['released']('click'), this['isPressed'] = ig['input']['state']('click');
            },
            'addToClickedObjectList': function(_0x3f7030) {
                this['clickedObjectList']['push'](_0x3f7030);
            },
            'removeFromClickedObjectList': function(_0x333015) {
                for (var _0x4155dc = [], _0x66dc9c = 0x0; _0x66dc9c < this['clickedObjectList']['length']; _0x66dc9c++) {
                    var _0x5c3e57 = this['clickedObjectList'][_0x66dc9c];
                    _0x5c3e57 != _0x333015 && _0x4155dc['push'](_0x5c3e57);
                }
                this['clickedObjectList'] = _0x4155dc;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.pointer-selector')['requires']('game.entities.pointer')['defines'](function() {
        EntityPointerSelector = EntityPointer['extend']({
            'zIndex': 0x3e8,
            '_wmDrawBox': !0x0,
            '_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
            'size': {
                'x': 0xa,
                'y': 0xa
            },
            'init': function(_0x35619a, _0xc84287, _0x5ac26b) {
                this['parent'](_0x35619a, _0xc84287, _0x5ac26b);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.select')['requires']('impact.entity')['defines'](function() {
        EntitySelect = ig['Entity']['extend']({
            'type': ig['Entity']['TYPE']['B'],
            'checkAgainst': ig['Entity']['TYPE']['A'],
            'collides': ig['Entity']['COLLIDES']['NEVER'],
            'canSelect': !0x1,
            'canSelectTimerDuration': 0.35,
            'zIndex': 0x1869f,
            'isHovering': !0x1,
            'isSelected': !0x1,
            'init': function(_0x211618, _0x14f1ae, _0x3f3830) {
                this['parent'](_0x211618, _0x14f1ae, _0x3f3830), this['canSelectTimer'] = new ig['Timer'](this['canSelectTimerDuration']);
            },
            'doesClickableLayerExist': function(_0x2ee2fd) {
                for (k in dynamicClickableEntityDivs)
                    if (k == _0x2ee2fd) return !0x0;
                return !0x1;
            },
            'checkClickableLayer': function(_0x25be3a, _0x3c78db, _0x245e06) {
                'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x25be3a) ? (ig['game']['showOverlay']([_0x25be3a]), $('#' + _0x25be3a)['find']('[href]')['attr']('href', _0x3c78db)) : this['createClickableOutboundLayer'](_0x25be3a, _0x3c78db, 'media/graphics/misc/invisible.png', _0x245e06));
            },
            'createClickableOutboundLayer': function(_0x2b53d5, _0x173bcc, _0x3e9a5b, _0x3b6eea) {
                var _0x2273a5 = ig['$new']('div');
                _0x2273a5['id'] = _0x2b53d5, document['body']['appendChild'](_0x2273a5), $('#' + _0x2273a5['id'])['css']('float', 'left'), $('#' + _0x2273a5['id'])['css']('width', this['size']['x'] * multiplier), $('#' + _0x2273a5['id'])['css']('height', this['size']['y'] * multiplier), $('#' + _0x2273a5['id'])['css']('position', 'absolute');
                var _0x5bd519 = w / 0x2 - destW / 0x2,
                    _0x2800f0 = h / 0x2 - destH / 0x2;
                w == mobileWidth ? ($('#' + _0x2273a5['id'])['css']('left', this['pos']['x']), $('#' + _0x2273a5['id'])['css']('top', this['pos']['y'])) : ($('#' + _0x2273a5['id'])['css']('left', _0x5bd519 + this['pos']['x'] * multiplier), $('#' + _0x2273a5['id'])['css']('top', _0x2800f0 + this['pos']['y'] * multiplier)), _0x3b6eea ? $('#' + _0x2273a5['id'])['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0x173bcc + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x3e9a5b + '\x27></a>') : $('#' + _0x2273a5['id'])['html']('<a\x20href=\x27' + _0x173bcc + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x3e9a5b + '\x27></a>'), dynamicClickableEntityDivs[_0x2b53d5] = {}, dynamicClickableEntityDivs[_0x2b53d5]['width'] = $('#' + _0x2273a5['id'])['width'](), dynamicClickableEntityDivs[_0x2b53d5]['height'] = $('#' + _0x2273a5['id'])['height'](), dynamicClickableEntityDivs[_0x2b53d5]['entity_pos_x'] = this['pos']['x'], dynamicClickableEntityDivs[_0x2b53d5]['entity_pos_y'] = this['pos']['y'];
            },
            'hovered': function() {
                this['isHovering'] = !0x0, this['dehoverOthers']();
            },
            'dehoverOthers': function() {
                var _0x1ffc36 = ig['game']['getEntitiesByType'](EntitySelect);
                for (i = 0x0; i < _0x1ffc36['length']; i++) _0x1ffc36[i] != this && (_0x1ffc36[i]['isHovering'] = !0x1);
            },
            'deselectOthers': function() {
                var _0x2cb692 = ig['game']['getEntitiesByType'](EntitySelect);
                for (i = 0x0; i < _0x2cb692['length']; i++) _0x2cb692[i] != this && (_0x2cb692[i]['isSelected'] = !0x1);
            },
            'update': function() {
                this['parent'](), this['canSelectTimer'] && 0x0 < this['canSelectTimer']['delta']() && (this['canSelect'] = !0x0, this['canSelectTimer'] = null);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.opening-marketjs-logo')['requires']('impact.entity')['defines'](function() {
        EntityOpeningMarketJSLogo = ig['Entity']['extend']({
            'objects': [],
            'letterM': null,
            'logoShield': null,
            'text': null,
            'localTweens': [],
            'logoOriX': 0x0,
            'logoOriY': 0x0,
            'textOriX': 0x0,
            'textOriY': 0x0,
            'logoCanvas': null,
            'init': function(_0x32cbd2, _0x59b92b, _0x3c5fbc) {
                this['parent'](_0x32cbd2, _0x59b92b, _0x3c5fbc), console['log']('Opening\x20v1.0.4'), logoSize = 0x94 / 0x3c0 * Math['min'](ig['system']['width'], ig['system']['height']), this['logoCacheSize'] = Math['round'](0x2 * logoSize), this['text'] = this['addObject']('drawText', 0x0, 0x0, logoSize, logoSize), this['cover'] = this['addObject']('drawCover', 0x0, 0x0, logoSize, logoSize), this['logoShield'] = this['addObject']('drawLogoShield', 0x0, 0x0, logoSize, logoSize), this['letterM'] = this['addObject']('drawLetterM', 0x0, 0x0, logoSize, logoSize), this['logoOriX'] = 0x0 - 2.2 * logoSize, this['logoOriY'] = 0x0, this['textOriX'] = 0x0 - 1.378 * logoSize, this['textOriY'] = 0x0 - 0.5 * logoSize, this['logoShield']['x'] = 0x0, this['logoShield']['y'] = 0x0, this['logoShield']['scaleX'] = 0x0, this['logoShield']['scaleY'] = 0x0, this['logoShield']['alpha'] = 0x0, this['letterM']['x'] = this['logoShield']['x'], this['letterM']['y'] = this['logoShield']['y'], this['letterM']['scaleX'] = 0x0, this['letterM']['scaleY'] = 0x0, this['letterM']['alpha'] = 0x0, this['text']['x'] = 4.6 * -logoSize, this['text']['y'] = this['textOriY'], this['cover']['x'] = this['logoShield']['x'], this['cover']['y'] = 0x0, this['addLocalDelayedCall'](0.6, function() {
                    this['addLocalTweenTo'](this['logoShield'], {
                        'scaleX': 0x2,
                        'scaleY': 0x2
                    }, 0.5, this['backOut']), this['addLocalTweenTo'](this['logoShield'], {
                        'alpha': 0x1
                    }, 0.2, this['quadOut']), ig['soundHandler']['sfxPlayer']['play']('logosplash1'), this['addLocalDelayedCall'](0.4, function() {
                        this['addLocalTweenTo'](this['letterM'], {
                            'scaleX': 0x2,
                            'scaleY': 0x2
                        }, 0.5, this['backOut']), this['addLocalTweenTo'](this['letterM'], {
                            'alpha': 0x1
                        }, 0.2, this['quadOut']), ig['soundHandler']['sfxPlayer']['play']('logosplash1'), this['addLocalDelayedCall'](0.2, function() {
                            ig['soundHandler']['sfxPlayer']['play']('logosplash2');
                        }['bind'](this)), this['addLocalDelayedCall'](0.6, function() {
                            this['addLocalTweenTo'](this['logoShield'], {
                                'scaleX': 0x1,
                                'scaleY': 0x1
                            }, 0.4, this['quartOut']), this['addLocalTweenTo'](this['logoShield'], {
                                'x': this['logoOriX'],
                                'y': this['logoOriY']
                            }, 0.4, this['quadOut']), this['addLocalTweenTo'](this['letterM'], {
                                'scaleX': 0x1,
                                'scaleY': 0x1
                            }, 0.4, this['quartOut']), this['addLocalTweenTo'](this['letterM'], {
                                'x': this['logoOriX'],
                                'y': this['logoOriY']
                            }, 0.4, this['quadOut']), this['addLocalTweenTo'](this['text'], {
                                'x': this['textOriX']
                            }, 0.8, this['backOut']), this['addLocalDelayedCall'](0x2, function() {
                                this['addLocalTweenTo'](this['logoShield'], {
                                    'alpha': 0x0
                                }, 0.6, this['quadOut']), this['addLocalTweenTo'](this['text'], {
                                    'alpha': 0x0
                                }, 0.6, this['quadOut']), this['addLocalDelayedCall'](1.3, function() {
                                    this['playBgm'](), ig['game']['director']['nextLevel']();
                                }['bind'](this));
                            }['bind'](this));
                        }['bind'](this));
                    }['bind'](this));
                }['bind'](this));
            },
            'addObject': function(_0x17cd48, _0x372e4b, _0x20b420, _0x37b9cd, _0x88c405) {
                return _0x17cd48 = {
                    'x': _0x372e4b,
                    'y': _0x20b420,
                    'width': _0x37b9cd,
                    'height': _0x88c405,
                    'scaleX': 0x1,
                    'scaleY': 0x1,
                    'alpha': 0x1,
                    'drawFunctionName': _0x17cd48
                }, this['objects']['push'](_0x17cd48), _0x17cd48;
            },
            'update': function() {
                this['parent']();
                if (!ig['wm']) {
                    this['unlockWebAudio']();
                    var _0xd8fb85 = ig['system']['tick'];
                    _0xd8fb85 > 0x1 / 0x3c && (_0xd8fb85 = 0x1 / 0x3c), this['updateLocalTween'](_0xd8fb85), this['cover']['x'] = this['logoShield']['x'], _SETTINGS['DeveloperBranding']['Splash']['Enabled'] || (ig['game']['director']['nextLevel'](), this['kill']());
                }
            },
            'playBgm': function() {},
            'unlockWebAudio': function() {
                if (ig['input']['released']('click')) try {
                    ig['soundHandler']['unlockWebAudio']();
                } catch (_0x1c5b77) {}
            },
            'addLocalDelayedCall': function(_0x2d343a, _0x15c843) {
                this['addLocalTweenTo'](null, {}, _0x2d343a, this['easeNone'], 0x0, _0x15c843);
            },
            'addLocalTweenTo': function(_0x4aa6c8, _0x3ae7d1, _0x4c4a8c, _0x300c01, _0x41dd15, _0x40b7b8) {
                'undefined' == typeof _0x41dd15 && (_0x41dd15 = 0x0), 'undefined' == typeof _0x300c01 && (_0x300c01 = this['easeNone']), 'undefined' == typeof _0x40b7b8 && (_0x40b7b8 = null), _0x4c4a8c = {
                    'obj': _0x4aa6c8,
                    'endProperties': _0x3ae7d1,
                    'duration': _0x4c4a8c,
                    'easing': _0x300c01,
                    'delay': _0x41dd15,
                    'elapsed': 0x0,
                    'deltaProperties': {},
                    'startProperties': {},
                    'onComplete': _0x40b7b8
                };
                for (var _0xda62af in _0x3ae7d1) Object['hasOwnProperty']['call'](_0x3ae7d1, _0xda62af) && (_0x4c4a8c['startProperties'][_0xda62af] = _0x4aa6c8[_0xda62af], _0x4c4a8c['deltaProperties'][_0xda62af] = _0x3ae7d1[_0xda62af] - _0x4aa6c8[_0xda62af]);
                this['localTweens']['push'](_0x4c4a8c);
            },
            'updateLocalTween': function(_0x2c45c9) {
                for (var _0x4f0cef = 0x0; _0x4f0cef < this['localTweens']['length']; _0x4f0cef++) {
                    var _0x5aa29e = this['localTweens'][_0x4f0cef];
                    if (0x0 < _0x5aa29e['delay']) _0x5aa29e['delay'] -= _0x2c45c9;
                    else {
                        _0x5aa29e['elapsed'] += _0x2c45c9;
                        for (var _0x50ead4 in _0x5aa29e['deltaProperties'])
                            if (Object['hasOwnProperty']['call'](_0x5aa29e['deltaProperties'], _0x50ead4)) {
                                var _0x1940d8 = _0x5aa29e['deltaProperties'][_0x50ead4],
                                    _0x34b85c = _0x5aa29e['startProperties'][_0x50ead4],
                                    _0x18d97e = _0x5aa29e['easing'],
                                    _0x40f009 = _0x5aa29e['elapsed'] / _0x5aa29e['duration'];
                                0x1 < _0x40f009 && (_0x40f009 = 0x1), _0x40f009 = _0x18d97e(_0x40f009), _0x5aa29e['obj'][_0x50ead4] = _0x34b85c + _0x1940d8 * _0x40f009;
                            }
                        if (_0x5aa29e['elapsed'] >= _0x5aa29e['duration'] && (this['localTweens']['splice'](_0x4f0cef, 0x1), _0x4f0cef--, _0x5aa29e['onComplete'])) _0x5aa29e['onComplete']();
                    }
                }
            },
            'quadOut': function(_0x423a3e) {
                return -_0x423a3e * (_0x423a3e - 0x2);
            },
            'quartOut': function(_0x1ea24a) {
                return -(--_0x1ea24a * _0x1ea24a * _0x1ea24a * _0x1ea24a - 0x1);
            },
            'backOut': function(_0x28448e) {
                return (_0x28448e -= 0x1) * _0x28448e * (2.70158 * _0x28448e + 1.70158) + 0x1;
            },
            'easeNone': function(_0x1af0fb) {
                return _0x1af0fb;
            },
            'draw': function() {
                this['parent']();
                if (!ig['global']['wm']) {
                    var _0x514a60 = ig['system']['context'];
                    _0x514a60['fillStyle'] = '#ffffff', _0x514a60['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
                    for (_0x514a60 = 0x0; _0x514a60 < this['objects']['length']; _0x514a60++) {
                        var _0x54336a = this['objects'][_0x514a60];
                        0x1 < _0x54336a['alpha'] && (_0x54336a['alpha'] = 0x1);
                        if (0x0 != _0x54336a['scaleX'] && 0x0 != _0x54336a['scaleY'] && 0x0 < _0x54336a['alpha']) this[_0x54336a['drawFunctionName']](_0x54336a);
                    }
                }
            },
            'drawLogoShield': function(_0x3f950b) {
                if (!this['logoCanvas']) {
                    this['logoCanvas'] = ig['$new']('canvas'), this['logoCanvas']['width'] = this['logoCacheSize'], this['logoCanvas']['height'] = this['logoCacheSize'];
                    var _0x2e02ed = this['logoCanvas']['getContext']('2d'),
                        _0x2d6ec3 = this['logoCacheSize'],
                        _0x388598 = this['logoCacheSize'],
                        _0x16295c = 0x0,
                        _0x5b7898 = 0x0;
                    _0x2e02ed['clearRect'](0x0, 0x0, this['logoCanvas']['width'], this['logoCanvas']['height']), _0x2e02ed['save'](), _0x2e02ed['fillStyle'] = '#e35026', _0x2e02ed['beginPath'](), _0x2e02ed['moveTo'](_0x16295c + 0.06 * _0x2d6ec3, _0x5b7898), _0x2e02ed['lineTo'](_0x16295c + 0.94 * _0x2d6ec3, _0x5b7898), _0x2e02ed['lineTo'](_0x16295c + 0.86 * _0x2d6ec3, _0x5b7898 + 0.89 * _0x388598), _0x2e02ed['lineTo'](_0x16295c + 0.5 * _0x2d6ec3, _0x5b7898 + _0x388598), _0x2e02ed['lineTo'](_0x16295c + 0.14 * _0x2d6ec3, _0x5b7898 + 0.89 * _0x388598), _0x2e02ed['closePath'](), _0x2e02ed['fill'](), _0x2e02ed['fillStyle'] = '#ee652b', _0x2e02ed['beginPath'](), _0x2e02ed['moveTo'](_0x16295c + 0.5 * _0x2d6ec3, _0x5b7898 + 0.07 * _0x388598), _0x2e02ed['lineTo'](_0x16295c + 0.86 * _0x2d6ec3, _0x5b7898 + 0.07 * _0x388598), _0x2e02ed['lineTo'](_0x16295c + 0.79 * _0x2d6ec3, _0x5b7898 + 0.84 * _0x388598), _0x2e02ed['lineTo'](_0x16295c + 0.5 * _0x2d6ec3, _0x5b7898 + 0.92 * _0x388598), _0x2e02ed['closePath'](), _0x2e02ed['fill'](), _0x2e02ed['restore']();
                }
                _0x2d6ec3 = _0x3f950b['width'] * _0x3f950b['scaleX'], _0x388598 = _0x3f950b['height'] * _0x3f950b['scaleY'], _0x16295c = ig['system']['width'] / 0x2 + _0x3f950b['x'] - _0x2d6ec3 / 0x2, _0x5b7898 = ig['system']['height'] / 0x2 + _0x3f950b['y'] - _0x388598 / 0x2, _0x2e02ed = ig['system']['context'], _0x2e02ed['globalAlpha'] = _0x3f950b['alpha'], _0x2e02ed['drawImage'](this['logoCanvas'], 0x0, 0x0, this['logoCacheSize'], this['logoCacheSize'], _0x16295c, _0x5b7898, _0x2d6ec3, _0x388598), _0x2e02ed['globalAlpha'] = 0x1;
            },
            'drawLetterM': function(_0x209c5e) {
                if (!this['mCanvas']) {
                    this['mCanvas'] = ig['$new']('canvas'), this['mCanvas']['width'] = this['logoCacheSize'], this['mCanvas']['height'] = this['logoCacheSize'];
                    var _0x1a5223 = this['mCanvas']['getContext']('2d'),
                        _0x142ffc = this['logoCacheSize'],
                        _0x3bdd7c = this['logoCacheSize'],
                        _0x4a408d = 0x0,
                        _0x887928 = 0x0;
                    _0x1a5223['save'](), _0x1a5223['fillStyle'] = '#ffffff', _0x1a5223['beginPath'](), _0x1a5223['moveTo'](_0x4a408d + 0.25 * _0x142ffc, _0x887928 + 0.2 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.4 * _0x142ffc, _0x887928 + 0.2 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.5 * _0x142ffc, _0x887928 + 0.37 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.6 * _0x142ffc, _0x887928 + 0.2 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.75 * _0x142ffc, _0x887928 + 0.2 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.75 * _0x142ffc, _0x887928 + 0.7 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.6 * _0x142ffc, _0x887928 + 0.7 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.6 * _0x142ffc, _0x887928 + 0.45 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.5 * _0x142ffc, _0x887928 + 0.63 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.4 * _0x142ffc, _0x887928 + 0.45 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.4 * _0x142ffc, _0x887928 + 0.7 * _0x3bdd7c), _0x1a5223['lineTo'](_0x4a408d + 0.25 * _0x142ffc, _0x887928 + 0.7 * _0x3bdd7c), _0x1a5223['closePath'](), _0x1a5223['fill'](), _0x1a5223['restore']();
                }
                _0x1a5223 = ig['system']['context'], _0x142ffc = _0x209c5e['width'] * _0x209c5e['scaleX'], _0x3bdd7c = _0x209c5e['height'] * _0x209c5e['scaleY'], _0x4a408d = ig['system']['width'] / 0x2 + _0x209c5e['x'] - _0x142ffc / 0x2, _0x887928 = ig['system']['height'] / 0x2 + _0x209c5e['y'] - _0x3bdd7c / 0x2, _0x1a5223['globalAlpha'] = _0x209c5e['alpha'], _0x1a5223['drawImage'](this['mCanvas'], 0x0, 0x0, this['logoCacheSize'], this['logoCacheSize'], _0x4a408d, _0x887928, _0x142ffc, _0x3bdd7c), _0x1a5223['globalAlpha'] = 0x1;
            },
            'drawText': function(_0x4f5257) {
                if (ig['splashLogoFontLoaded']) {
                    var _0x572288 = ig['system']['context'],
                        _0x535aec = _0x4f5257['height'] * _0x4f5257['scaleY'],
                        _0x189c48 = ig['system']['width'] / 0x2 + _0x4f5257['x'],
                        _0x2ac56e = ig['system']['height'] / 0x2 + _0x4f5257['y'];
                    _0x572288['save'](), _0x572288['globalAlpha'] = _0x4f5257['alpha'], _0x4f5257 = Math['round'](0x73 / 0x98 * _0x535aec);
                    var _0x3a7042 = Math['round'](0x3e / 0x98 * _0x535aec);
                    _0x572288['textAlign'] = 'left', _0x572288['fillStyle'] = '#316198', _0x572288['font'] = _0x4f5257 + 'px\x20logofont', _0x572288['fillText']('MarketJS', _0x189c48 - 0.06 * _0x4f5257, _0x2ac56e + 0.66 * _0x4f5257), _0x572288['font'] = _0x3a7042 + 'px\x20logofont', _0x572288['fillText']('HTML5\x20gaming\x20solutions', _0x189c48 - 0.02 * _0x3a7042, _0x2ac56e + _0x535aec - 0.1 * _0x3a7042), _0x572288['globalAlpha'] = 0x1, _0x572288['restore']();
                }
            },
            'drawCover': function(_0xbb8ec8) {
                var _0x20cb23 = ig['system']['context'],
                    _0x28c4b2 = ig['system']['width'] / 0x2 + _0xbb8ec8['x'],
                    _0x50bc15 = ig['system']['height'] / 0x2 + _0xbb8ec8['y'];
                _0x20cb23['save'](), _0x20cb23['globalAlpha'] = _0xbb8ec8['alpha'], _0x20cb23['fillStyle'] = '#ffffff', _0x20cb23['fillRect'](_0x28c4b2 - ig['system']['width'] / 0x2, _0x50bc15 - this['logoCacheSize'] / 0x2, ig['system']['width'] / 0x2, this['logoCacheSize']), _0x20cb23['globalAlpha'] = 0x1, _0x20cb23['restore']();
            }
        });
        if ('undefined' == typeof window['FontFaceObserver']) {
            var _0x4b96eb = function(_0x50f6e2, _0x1a1bac) {
                    document['addEventListener'] ? _0x50f6e2['addEventListener']('scroll', _0x1a1bac, !0x1) : _0x50f6e2['attachEvent']('scroll', _0x1a1bac);
                },
                _0x1b39b0 = function(_0x4b3e0f) {
                    this['a'] = document['createElement']('div'), this['a']['setAttribute']('aria-hidden', 'true'), this['a']['appendChild'](document['createTextNode'](_0x4b3e0f)), this['b'] = document['createElement']('span'), this['c'] = document['createElement']('span'), this['h'] = document['createElement']('span'), this['f'] = document['createElement']('span'), this['g'] = -0x1, this['b']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this['c']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this['f']['style']['cssText'] = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this['h']['style']['cssText'] = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this['b']['appendChild'](this['h']), this['c']['appendChild'](this['f']), this['a']['appendChild'](this['b']), this['a']['appendChild'](this['c']);
                },
                _0x19f99b = function(_0x386998, _0x999f3e) {
                    _0x386998['a']['style']['cssText'] = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x999f3e + ';';
                },
                _0x282e61 = function(_0x12e6b1) {
                    var _0x9e850f = _0x12e6b1['a']['offsetWidth'],
                        _0x4f5543 = _0x9e850f + 0x64;
                    return _0x12e6b1['f']['style']['width'] = _0x4f5543 + 'px', _0x12e6b1['c']['scrollLeft'] = _0x4f5543, _0x12e6b1['b']['scrollLeft'] = _0x12e6b1['b']['scrollWidth'] + 0x64, _0x12e6b1['g'] !== _0x9e850f ? (_0x12e6b1['g'] = _0x9e850f, !0x0) : !0x1;
                },
                _0x2abb54 = function(_0x55e89c, _0x1caa54) {
                    function _0x36266d() {
                        var _0x2556b3 = _0x136a4f;
                        _0x282e61(_0x2556b3) && _0x2556b3['a']['parentNode'] && _0x1caa54(_0x2556b3['g']);
                    }
                    var _0x136a4f = _0x55e89c;
                    _0x4b96eb(_0x55e89c['b'], _0x36266d), _0x4b96eb(_0x55e89c['c'], _0x36266d), _0x282e61(_0x55e89c);
                },
                _0x4698c7 = function(_0x321206, _0x2f6547) {
                    var _0x35c8ca = _0x2f6547 || {};
                    this['family'] = _0x321206, this['style'] = _0x35c8ca['style'] || 'normal', this['weight'] = _0x35c8ca['weight'] || 'normal', this['stretch'] = _0x35c8ca['stretch'] || 'normal';
                },
                _0x5d095f = function() {
                    return null === _0x57e6bb && (_0x57e6bb = !!document['fonts']), _0x57e6bb;
                },
                _0x2db3a3 = function() {
                    if (null === _0x4bf8a1) {
                        var _0x3cf158 = document['createElement']('div');
                        try {
                            _0x3cf158['style']['font'] = 'condensed\x20100px\x20sans-serif';
                        } catch (_0x37465a) {}
                        _0x4bf8a1 = '' !== _0x3cf158['style']['font'];
                    }
                    return _0x4bf8a1;
                },
                _0x5081de = function(_0xa47ae1, _0x532421) {
                    return [_0xa47ae1['style'], _0xa47ae1['weight'], _0x2db3a3() ? _0xa47ae1['stretch'] : '', '100px', _0x532421]['join']('\x20');
                },
                _0x17c488 = null,
                _0x36653b = null,
                _0x4bf8a1 = null,
                _0x57e6bb = null;
            _0x4698c7['prototype']['load'] = function(_0xf87528, _0x31abde) {
                var _0x34e2db = this,
                    _0x5a5d6e = _0xf87528 || 'BESbswy',
                    _0x11d473 = 0x0,
                    _0x4ba37c = _0x31abde || 0xbb8,
                    _0x5ce146 = new Date()['getTime']();
                return new Promise(function(_0x36e28d, _0x2dd6df) {
                    var _0x272101;
                    if (_0x272101 = _0x5d095f()) null === _0x36653b && (_0x5d095f() && /Apple/ ['test'](window['navigator']['vendor']) ? (_0x272101 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/ ['exec'](window['navigator']['userAgent']), _0x36653b = !!_0x272101 && 0x25b > parseInt(_0x272101[0x1], 0xa)) : _0x36653b = !0x1), _0x272101 = !_0x36653b;
                    if (_0x272101) {
                        _0x272101 = new Promise(function(_0x3555da, _0x3ba267) {
                            function _0x8ed2a9() {
                                new Date()['getTime']() - _0x5ce146 >= _0x4ba37c ? _0x3ba267(Error('' + _0x4ba37c + 'ms\x20timeout\x20exceeded')) : document['fonts']['load'](_0x5081de(_0x34e2db, '\x22' + _0x34e2db['family'] + '\x22'), _0x5a5d6e)['then'](function(_0x182501) {
                                    0x1 <= _0x182501['length'] ? _0x3555da() : setTimeout(_0x8ed2a9, 0x19);
                                }, _0x3ba267);
                            }
                            _0x8ed2a9();
                        });
                        var _0x26607b = new Promise(function(_0x1541cc, _0x5e65c5) {
                            _0x11d473 = setTimeout(function() {
                                _0x5e65c5(Error('' + _0x4ba37c + 'ms\x20timeout\x20exceeded'));
                            }, _0x4ba37c);
                        });
                        Promise['race']([_0x26607b, _0x272101])['then'](function() {
                            clearTimeout(_0x11d473), _0x36e28d(_0x34e2db);
                        }, _0x2dd6df);
                    } else {
                        var _0x45cef3 = function() {
                            function _0x48c528() {
                                var _0x1a9d7a;
                                if (_0x1a9d7a = -0x1 != _0x1b13f7 && -0x1 != _0x42df82 || -0x1 != _0x1b13f7 && -0x1 != _0x17537f || -0x1 != _0x42df82 && -0x1 != _0x17537f)(_0x1a9d7a = _0x1b13f7 != _0x42df82 && _0x1b13f7 != _0x17537f && _0x42df82 != _0x17537f) || (null === _0x17c488 && (_0x1a9d7a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/ ['exec'](window['navigator']['userAgent']), _0x17c488 = !!_0x1a9d7a && (0x218 > parseInt(_0x1a9d7a[0x1], 0xa) || 0x218 === parseInt(_0x1a9d7a[0x1], 0xa) && 0xb >= parseInt(_0x1a9d7a[0x2], 0xa))), _0x1a9d7a = _0x17c488 && (_0x1b13f7 == _0x4bd84c && _0x42df82 == _0x4bd84c && _0x17537f == _0x4bd84c || _0x1b13f7 == _0x223cdb && _0x42df82 == _0x223cdb && _0x17537f == _0x223cdb || _0x1b13f7 == _0xf44858 && _0x42df82 == _0xf44858 && _0x17537f == _0xf44858)), _0x1a9d7a = !_0x1a9d7a;
                                _0x1a9d7a && (_0xb87f3c['parentNode'] && _0xb87f3c['parentNode']['removeChild'](_0xb87f3c), clearTimeout(_0x11d473), _0x36e28d(_0x34e2db));
                            }

                            function _0x38165d() {
                                if (new Date()['getTime']() - _0x5ce146 >= _0x4ba37c) _0xb87f3c['parentNode'] && _0xb87f3c['parentNode']['removeChild'](_0xb87f3c), _0x2dd6df(Error('' + _0x4ba37c + 'ms\x20timeout\x20exceeded'));
                                else {
                                    var _0x4d5d6b = document['hidden'];
                                    if (!0x0 === _0x4d5d6b || void 0x0 === _0x4d5d6b) _0x1b13f7 = _0x78ef12['a']['offsetWidth'], _0x42df82 = _0x198c95['a']['offsetWidth'], _0x17537f = _0x37a9cc['a']['offsetWidth'], _0x48c528();
                                    _0x11d473 = setTimeout(_0x38165d, 0x32);
                                }
                            }
                            var _0x78ef12 = new _0x1b39b0(_0x5a5d6e),
                                _0x198c95 = new _0x1b39b0(_0x5a5d6e),
                                _0x37a9cc = new _0x1b39b0(_0x5a5d6e),
                                _0x1b13f7 = -0x1,
                                _0x42df82 = -0x1,
                                _0x17537f = -0x1,
                                _0x4bd84c = -0x1,
                                _0x223cdb = -0x1,
                                _0xf44858 = -0x1,
                                _0xb87f3c = document['createElement']('div');
                            _0xb87f3c['dir'] = 'ltr', _0x19f99b(_0x78ef12, _0x5081de(_0x34e2db, 'sans-serif')), _0x19f99b(_0x198c95, _0x5081de(_0x34e2db, 'serif')), _0x19f99b(_0x37a9cc, _0x5081de(_0x34e2db, 'monospace')), _0xb87f3c['appendChild'](_0x78ef12['a']), _0xb87f3c['appendChild'](_0x198c95['a']), _0xb87f3c['appendChild'](_0x37a9cc['a']), document['body']['appendChild'](_0xb87f3c), _0x4bd84c = _0x78ef12['a']['offsetWidth'], _0x223cdb = _0x198c95['a']['offsetWidth'], _0xf44858 = _0x37a9cc['a']['offsetWidth'], _0x38165d(), _0x2abb54(_0x78ef12, function(_0x36191b) {
                                _0x1b13f7 = _0x36191b, _0x48c528();
                            }), _0x19f99b(_0x78ef12, _0x5081de(_0x34e2db, '\x22' + _0x34e2db['family'] + '\x22,sans-serif')), _0x2abb54(_0x198c95, function(_0x2c3478) {
                                _0x42df82 = _0x2c3478, _0x48c528();
                            }), _0x19f99b(_0x198c95, _0x5081de(_0x34e2db, '\x22' + _0x34e2db['family'] + '\x22,serif')), _0x2abb54(_0x37a9cc, function(_0x5cdccc) {
                                _0x17537f = _0x5cdccc, _0x48c528();
                            }), _0x19f99b(_0x37a9cc, _0x5081de(_0x34e2db, '\x22' + _0x34e2db['family'] + '\x22,monospace'));
                        };
                        document['body'] ? _0x45cef3() : document['addEventListener'] ? document['addEventListener']('DOMContentLoaded', function _0xf3db0f() {
                            document['removeEventListener']('DOMContentLoaded', _0xf3db0f), _0x45cef3();
                        }) : document['attachEvent']('onreadystatechange', function _0x3b914f() {
                            if ('interactive' == document['readyState'] || 'complete' == document['readyState']) document['detachEvent']('onreadystatechange', _0x3b914f), _0x45cef3();
                        });
                    }
                });
            }, 'object' === typeof module ? module['exports'] = _0x4698c7 : (window['FontFaceObserver'] = _0x4698c7, window['FontFaceObserver']['prototype']['load'] = _0x4698c7['prototype']['load']), console['log']('font\x20loader\x20not\x20exist\x20:\x20create\x20new\x20instance\x20of\x20font\x20loader');
        }
        _0x4698c7 = document['createElement']('style'), _0x4698c7['type'] = 'text/css', _0x4698c7['appendChild'](document['createTextNode']('@font-face\x20{font-family:\x20\x27logofont\x27;src:\x20url(\x27media/fonts/logofont.woff2\x27)\x20format(\x27woff2\x27),url(\x27media/fonts/logofont.woff\x27)\x20format(\x27woff\x27),url(\x27media/fonts/logofont.ttf\x27)\x20format(\x27truetype\x27)}')), document['head']['appendChild'](_0x4698c7), ig['splashLogoFontLoaded'] = !0x1, new FontFaceObserver('logofont')['load']()['then'](function() {
            ig['splashLogoFontLoaded'] = !0x0;
        })['catch'](function() {
            console['log']('Splash\x20font\x20failed\x20to\x20load\x20:', 'media/fonts/logofont');
        });
    }), ig['baked'] = !0x0, ig['module']('game.levels.opening')['requires']('impact.image', 'game.entities.opening-marketjs-logo')['defines'](function() {
        LevelOpening = {
            'entities': [{
                'type': 'EntityOpeningMarketJSLogo',
                'x': 0x208,
                'y': 0xd4
            }],
            'layer': []
        };
    }), ig['baked'] = !0x0, ig['module']('game.entities.buttons.button')['requires']('impact.entity')['defines'](function() {
        EntityButton = ig['Entity']['extend']({
            'type': ig['Entity']['TYPE']['B'],
            'collides': ig['Entity']['COLLIDES']['NEVER'],
            'image': new ig['Image']('media/graphics/misc/invisible.png'),
            'enabled': !0x0,
            'isClickable': !0x0,
            'alwaysActive': !0x1,
            'disabled': !0x1,
            'disabledLetter': !0x1,
            'scale': {
                'x': 0x1,
                'y': 0x1
            },
            'zIndex': 0x5,
            'isClicked': !0x1,
            'skipSound': !0x1,
            'init': function(_0x14ded6, _0x3c97b6, _0x55c119) {
                this['parent'](_0x14ded6, _0x3c97b6, _0x55c119), this['size']['x'] = this['image']['width'], this['size']['y'] = this['image']['height'], this['halfSize'] = {
                    'x': this['size']['x'] / 0x2,
                    'y': this['size']['y'] / 0x2
                }, ig['global']['wm'] || (this['extraInit'](), this['scaleX0'] = this['scale']['x'], this['scaleY0'] = this['scale']['y'], this['scaleX1'] = 0.9 * this['scaleX0'], this['scaleY1'] = 0.9 * this['scaleY0'], this['scaleX2'] = 1.04 * this['scaleX0'], this['scaleY2'] = 1.04 * this['scaleY0'], this['layer'] = ig['game']['currentLayer'], this['clickTime'] = ig['system']['clock']['delta']());
            },
            'clicked': function() {
                if (this['enabled']) {
                    var _0x169f90 = this['clickTime'];
                    this['clickTime'] = ig['system']['clock']['delta'](), !(0.35 > this['clickTime'] - _0x169f90) && ig['game']['currentLayer'] == this['layer'] && (this['isClicked'] = !0x0, this['scaleAnim'] = this['tween']({
                        'scale': {
                            'x': 0.85 * this['scale']['x'],
                            'y': 0.85 * this['scale']['y']
                        }
                    }, 0.1, {
                        'loop': ig['Tween']['Loop']['Reverse'],
                        'loopCount': 0x1
                    }), this['scaleAnim']['start'](), ig['soundHandler']['sfxPlayer']['play']('click'));
                }
            },
            'released': function() {
                this['isClicked'] && (this['isClicked'] = !0x1, this['callback']());
            },
            'leave': function() {
                this['isClicked'] = !0x1, ig['domHandler']['getElementById']('#canvas')['css']('cursor', 'default'), this['tween']({
                    'scale': {
                        'x': this['scaleX0'],
                        'y': this['scaleY0']
                    }
                }, 0.025)['start']();
            },
            'over': function() {
                ig['game']['currentLayer'] == this['layer'] && this['enabled'] && (ig['domHandler']['getElementById']('#canvas')['css']('cursor', 'pointer'), this['tween']({
                    'scale': {
                        'x': this['scaleX2'],
                        'y': this['scaleY2']
                    }
                }, 0.025)['start']());
            },
            'draw': function() {
                if (this['enabled']) {
                    var _0x3bbba0 = ig['system']['context'];
                    _0x3bbba0['save'](), _0x3bbba0['translate'](ig['system']['getDrawPos'](this['pos']['x'] - ig['game']['screen']['x'] + this['halfSize']['x']), ig['system']['getDrawPos'](this['pos']['y'] - ig['game']['screen']['y'] + this['halfSize']['y'])), _0x3bbba0['scale'](this['scale']['x'], this['scale']['y']), this['image']['draw'](-this['halfSize']['x'], -this['halfSize']['y']), this['extraDraw'](_0x3bbba0), this['extraDrawImage'](_0x3bbba0), _0x3bbba0['restore']();
                }
            },
            'extraDraw': function() {},
            'extraDrawImage': function() {},
            'extraInit': function() {},
            'extraInit2': function() {},
            'callback': function() {},
            'repos': function() {}
        }), EntityButtonFix = EntityButton['extend']({
            'underPointer': function() {
                var _0x2467c6 = ig['game']['io']['getClickPos']();
                return this['containPoint'](_0x2467c6);
            },
            'draw': function() {
                if (this['enabled']) {
                    var _0x18096a = ig['system']['context'];
                    _0x18096a['save'](), _0x18096a['translate'](ig['system']['getDrawPos'](this['pos']['x'] + this['halfSize']['x']), ig['system']['getDrawPos'](this['pos']['y'] + this['halfSize']['y'])), _0x18096a['scale'](this['scale']['x'], this['scale']['y']), this['image']['draw'](-this['halfSize']['x'], -this['halfSize']['y']), this['extraDraw'](_0x18096a), _0x18096a['restore']();
                }
            },
            'extraDraw': function() {}
        }), EntityButtonPopup = EntityButton['extend']({
            'dx': 0x0,
            'dy': 0x0,
            'withText': !0x1,
            'update': function() {
                this['parent'](), this['pos']['x'] = this['popup']['midX']() + this['dx'], this['pos']['y'] = this['popup']['midY']() + this['dy'];
            },
            'draw': function() {},
            'subDraw': function(_0x1393be) {
                _0x1393be['save'](), _0x1393be['translate'](this['dx'] + this['halfSize']['x'], this['dy'] + this['halfSize']['y']), _0x1393be['scale'](this['scale']['x'], this['scale']['y']), this['image']['draw'](-this['halfSize']['x'], -this['halfSize']['y']), this['withText'] && this['extraDraw'](_0x1393be), _0x1393be['restore']();
            }
        }), EntityButtonText = EntityButton['extend']({
            'text': 'Button',
            'color': '#222',
            'fontSize': 0x20,
            'fontName': 'text',
            'extraInit': function() {
                this['font'] = this['fontSize'] + 'px\x20' + this['fontName'], this['dx'] = 0x0, this['dy'] = this['fontSize'] / 0x2;
            },
            'extraDraw': function(_0x264f8a) {
                ig['game']['fontStyle'](this['font'], this['color'], 'center'), _0x264f8a['fillText'](this['text'], this['dx'], this['dy']);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.buttons.button-play')['requires']('game.entities.buttons.button')['defines'](function() {
        EntityButtonPlay = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/bt-play.png'),
            'init': function(_0x28f338, _0x462ad6, _0x3c70bf) {
                this['parent'](_0x28f338, _0x462ad6, _0x3c70bf), this['pos']['x'] = (ig['system']['width'] - this['size']['x']) / 0x2, this['pos']['y'] = (ig['system']['height'] - this['size']['y']) / 0x2 + 0x64;
            },
            // Set Difficulty (desc in line 10704)
            'callback': function() {
                ig['game']['difficulty'] = 0x3, this['mother']['startGame']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.ui.dialog-instructions')['requires']('impact.entity', 'game.entities.buttons.button')['defines'](function() {
        EntityDialogInstructions = ig['Entity']['extend']({
            'background': new ig['Image']('media/graphics/sprites/panel.png'),
            'ignorePause': !0x0,
            'bgAlpha': 0x0,
            'DRAW_TEXT': !0x1,
            'font': 'Signika',
            'fontStyle': '#292a2b',
            'fontSize': 0x2f,
            'text': '',
            'locked': !0x0,
            'init': function(_0x3446f6, _0x649b47, _0x5e74b3) {
                ig['game']['paused'] = !0x0, this['parent'](_0x3446f6, _0x649b47, _0x5e74b3), this['mother']['mother']['buttonMoreGames'] && ig['game']['hideOverlay']([this['mother']['mother']['buttonMoreGames']['div_layer_name']]), this['size'] = {
                    'x': this['background']['width'],
                    'y': this['background']['height']
                }, this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2, this['destPos'] = {
                    'x': ig['system']['width'] / 0x2 - this['size']['x'] / 0x2,
                    'y': ig['system']['height'] / 0x2 - this['size']['y'] / 0x2
                }, this['buttonClose'] || (this['buttonClose'] = ig['game']['spawnEntity'](EntityDialogInstructionsCloseButton, this['pos']['x'] + 0.35 * this['size']['x'], this['pos']['y'] + 0.49 * this['size']['y'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64,
                    'ignorePause': this['ignorePause']
                })), ig['game']['sortEntitiesDeferred'](), this['tween']({
                    'pos': this['destPos'],
                    'bgAlpha': 0.63
                }, 0.25, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Linear']['EaseNone'],
                    'onComplete': function() {
                        this['locked'] = !0x1;
                    }['bind'](this)
                })['start']();
            },
            'close': function() {
                this['buttonClose'] && (this['buttonClose']['locked'] = !0x0), this['tween']({
                    'pos': {
                        'y': -0x2 * this['size']['y']
                    },
                    'bgAlpha': 0x0
                }, 0.25, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Linear']['EaseNone'],
                    'onComplete': function() {
                        this['kill']();
                    }['bind'](this)
                })['start']();
            },
            'kill': function() {
                ig['game']['paused'] = !0x1, this['buttonClose'] && this['buttonClose']['kill'](), this['buttonClose'] = null, this['mother']['dialogInstructions'] = null, this['mother']['mother']['buttonMoreGames'] && ig['game']['showOverlay']([this['mother']['mother']['buttonMoreGames']['div_layer_name']]), this['parent']();
            },
            'update': function() {
                this['parent'](), this['buttonClose'] && (this['buttonClose']['pos']['x'] = this['pos']['x'] + this['size']['x'] - this['buttonClose']['size']['x'] - 0xf, this['buttonClose']['pos']['y'] = this['pos']['y'] + this['buttonClose']['size']['y'] / 0x2 - 0x1e);
            },
            'draw': function() {
                this['parent'](), this['background']['draw'](this['pos']['x'], this['pos']['y']), ig['system']['context']['font'] = this['fontSize'] + 'px\x20' + this['font'], ig['system']['context']['textAlign'] = 'center', ig['system']['context']['fillStyle'] = this['fontStyle'];
                if (_STRINGS['Game']['Instructions']) {
                    for (var _0xab1a14 = 0x0; _0xab1a14 < _STRINGS['Game']['Instructions']['length']; ++_0xab1a14) ig['system']['context']['fillText'](_STRINGS['Game']['Instructions'][_0xab1a14], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.3 * this['size']['y'] + 1.1 * _0xab1a14 * this['fontSize']);
                }
            }
        }), EntityDialogInstructionsCloseButton = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/button-exit.png'),
            'size': {
                'x': 0x57,
                'y': 0x57
            },
            'callback': function() {
                this['mother']['close'](), this['locked'] = !0x0;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.buttons.button-tutorial')['requires']('game.entities.buttons.button', 'game.entities.ui.dialog-instructions')['defines'](function() {
        EntityButtonTutorial = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/bt-intruction.png'),
            'init': function(_0x422f28, _0x296a9f, _0x2ec19c) {
                this['parent'](_0x422f28, _0x296a9f, _0x2ec19c), this['pos']['x'] = ig['system']['width'] - this['size']['x'] - 0xf, this['pos']['y'] = 0x73;
            },
            'callback': function() {
                this['dialogInstructions'] || (this['dialogInstructions'] = ig['game']['spawnEntity'](EntityDialogInstructions, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64
                }));
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.buttons.button-audio')['requires']('game.entities.buttons.button')['defines'](function() {
        EntityButtonAudio = EntityButton['extend']({
            'images': {
                'on': new ig['Image']('media/graphics/sprites/buttons/bt-audio-on.png'),
                'off': new ig['Image']('media/graphics/sprites/buttons/bt-audio-off.png')
            },
            'zIndex': 0x1e,
            'isON': !0x0,
            'init': function(_0x119e19, _0x36fb73, _0x39ae3e) {
                this['isON'] = ig['game']['load']('audio'), this['parent'](_0x119e19, _0x36fb73, _0x39ae3e), this['switchImage'](), this['size']['x'] = this['image']['width'], this['size']['y'] = this['image']['height'], this['repos']();
            },
            'switchImage': function() {
                this['image'] = this['images'][this['isON'] ? 'on' : 'off'];
            },
            'clicked': function() {
                this['parent']();
            },
            'callback': function(_0x45588b) {
                _0x45588b || (this['isON'] = !this['isON'], ig['game']['save']('audio', this['isON'])), this['isON'] ? ig['soundHandler']['unmuteAll']() : ig['soundHandler']['muteAll'](), this['switchImage']();
            },
            'repos': function() {
                ig['home'] && (this['pos']['x'] = ig['system']['width'] - this['size']['x'] - 0xf, this['pos']['y'] = 0xf);
            }
        }), EntityButtonAudio2 = EntityButtonAudio['extend']({
            'images': {
                'on': new ig['Image']('media/graphics/sprites/buttons/bt-audio-on-big.png'),
                'off': new ig['Image']('media/graphics/sprites/buttons/bt-audio-off-big.png')
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.brain-main-menu')['requires']('impact.entity', 'game.entities.button-more-games', 'game.entities.pointer-selector', 'game.entities.buttons.button-play', 'game.entities.buttons.button-tutorial', 'game.entities.buttons.button-audio', 'game.entities.buttons.button-audio')['defines'](function() {
        EntityBrainMainMenu = ig['Entity']['extend']({
            'zIndex': 0x1,
            'bgAlpha': 0x1,
            'ignorePause': !0x0,
            'titleIm': new ig['Image']('media/graphics/sprites/ui/title.png'),
            'init': function(_0x1d37e6, _0x5aff15, _0x44d2ab) {
                this['parent'](_0x1d37e6, _0x5aff15, _0x44d2ab), ig['home'] = this, this['bgColor'] = 'light' == ig['game']['load']('color') ? '#f8f9fa' : '#202124', document['body']['style']['backgroundColor'] = this['bgColor'];
            },
            'ready': function() {
                for (ig['game']['pointer'] = null; ig['game']['getEntitiesByType'](EntityPointerSelector)[0x0];) ig['game']['getEntitiesByType'](EntityPointerSelector)[0x0]['kill']();
                ig['game']['pointer'] || (ig['game']['pointer'] = ig['game']['spawnEntity'](EntityPointerSelector, 0x19, 0x19)), _SETTINGS['MoreGames']['Enabled'] && !this['buttonMoreGames'] && (this['buttonMoreGames'] = ig['game']['spawnEntity'](EntityButtonMoreGames, 0xdd, 0x190, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x1,
                    'div_layer_name': 'more-games'
                })), this['buttonPlay'] || (this['buttonPlay'] = ig['game']['spawnEntity'](EntityButtonPlay, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x1
                })), this['buttonAudio'] || (this['buttonAudio'] = ig['game']['spawnEntity'](EntityButtonAudio, ig['system']['width'] - 0x58 - 0xf, 0xf, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x1
                })), this['buttonInstructions'] || (this['buttonInstructions'] = ig['game']['spawnEntity'](EntityButtonTutorial, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x1
                })), ig['game']['spawnEntity'](ig['FullscreenButton'], 0xf, 0xf, {
                    'enterImage': new ig['Image']('media/graphics/misc/enter-fullscreen-transparent.png'),
                    'exitImage': new ig['Image']('media/graphics/misc/exit-fullscreen-transparent.png')
                }), this['titleX'] = (ig['system']['width'] - this['titleIm']['width']) / 0x2, ig['game']['sortEntitiesDeferred']();
            },
            'startGame': function() {
                this['locked'] = !0x0, ig['game']['pointer']['kill'](), ig['game']['pointer'] = null, ig['game']['director']['jumpTo'](LevelGame);
            },
            'draw': function() {
                this['parent'](), ig['game']['fillScreen'](this['bgColor']), this['titleIm']['draw'](this['titleX'], 0xb4);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.levels.main-menu')['requires']('impact.image', 'game.entities.brain-main-menu')['defines'](function() {
        LevelMainMenu = {
            'entities': [{
                'type': 'EntityBrainMainMenu',
                'x': -0x32,
                'y': -0x32
            }],
            'layer': []
        };
    }), ig['baked'] = !0x0, ig['module']('game.entities.tile')['requires']('impact.entity')['defines'](function() {
        EntityTile = ig['Entity']['extend']({
            'type': ig['Entity']['TYPE']['B'],
            'animSheetLight': new ig['AnimationSheet']('media/graphics/sprites/tile-light.png', 0x41, 0x41),
            'animSheetDark': new ig['AnimationSheet']('media/graphics/sprites/tile-dark.png', 0x41, 0x41),
            'size': {
                'x': 0x41,
                'y': 0x41
            },
            'DRAW_TEXT': !0x1,
            'font': 'Signika',
            'defaultFontStyle': '#fff',
            'highlightedFontStyle': '#000000',
            'fontSize': 0x28,
            'highlighted': !0x1,
            'isAnswer': !0x1,
            'answered': !0x1,
            'check': !0x0,
            'init': function(_0x20b75d, _0x4eb894, _0x4595c3) {
                this['parent'](_0x20b75d, _0x4eb894, _0x4595c3), this['changeMode']();
                if (this['scale']['x'] || this['scale']['y']) this['scale']['x'] || (this['scale']['x'] = 0x1), this['scale']['y'] || (this['scale']['y'] = 0x1), this['setScale'](), this['pos']['x'] = this['mother']['gridPos']['x'] + this['tileIndex']['x'] * this['size']['x'], this['pos']['y'] = this['mother']['gridPos']['y'] + this['tileIndex']['y'] * this['size']['y'], this['fontSize'] *= 0.5 * (this['scale']['x'] + this['scale']['y']);
                this['letter'] = this['letter']['toUpperCase']();
            },
            'changeMode': function() {
                'light' == ig['game']['load']('color') ? (this['animSheet'] = this['animSheetLight'], this['defaultFontStyle'] = '#000') : (this['animSheet'] = this['animSheetDark'], this['defaultFontStyle'] = '#fff'), this['addAnim']('idle', 0x1, [0x0], !0x0), this['addAnim']('highlighted', 0x1, [0x1], !0x0), this['currentAnim'] = this['anims']['idle'];
            },
            'clicked': function() {
                this['mother']['gameEnded'] || (this['mother']['startTile'] || (this['mother']['startTile'] = this), this['mother']['endTile'] || (this['mother']['endTile'] = this));
            },
            'clicking': function() {
                if (!this['mother']['gameEnded'] && (ig['control']['startTile'] && ig['control']['startTile']['tileIndex']['x'] === this['tileIndex']['x'] || ig['control']['startTile'] && ig['control']['startTile']['tileIndex']['y'] === this['tileIndex']['y'])) {
                    if (this['mother']['endTile'] !== this) try {
                        ig['soundHandler']['sfxPlayer']['play']('select');
                    } catch (_0x15a8dc) {
                        console['log'](_0x15a8dc);
                    }
                    this['mother']['endTile'] = this;
                }
            },
            'released': function() {},
            'update': function() {
                this['parent'](), this['changeMode'](), this['highlighted'] || this['answered'] ? this['currentAnim'] !== this['anims']['highlighted'] && (this['currentAnim'] = this['anims']['highlighted']) : this['currentAnim'] !== this['anims']['idle'] && (this['currentAnim'] = this['anims']['idle']);
            },
            'draw': function() {
                this['parent'](), this['letter'] && (ig['system']['context']['save'](), ig['system']['context']['font'] = this['fontSize'] + 'px\x20' + this['font'], ig['system']['context']['textAlign'] = 'center', ig['system']['context']['fillStyle'] = this['highlighted'] ? this['highlightedFontStyle'] : this['answered'] ? '#000000' : this['defaultFontStyle'], ig['game']['paused'] ? 0.25 < this['currentAnim']['alpha'] && (this['currentAnim']['alpha'] -= 0.125) : (this['currentAnim']['alpha'] = 0x1, ig['system']['context']['fillText'](this['letter'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.5 * this['size']['y'] + 0.4 * this['fontSize'])), ig['system']['context']['restore']());
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.ui.dialog-win')['requires']('impact.entity', 'game.entities.buttons.button')['defines'](function() {
        EntityDialogWin = ig['Entity']['extend']({
            'background': new ig['Image']('media/graphics/sprites/panel.png'),
            'ignorePause': !0x0,
            'bgAlpha': 0x0,
            'fontSize': 0x32,
            'init': function(_0x5bafc4, _0x2df6e2, _0x507e4f) {
                this['parent'](_0x5bafc4, _0x2df6e2, _0x507e4f), ig['game']['currentLayer'] = ig['game']['layers']['popup'], this['size'] = {
                    'x': this['background']['width'],
                    'y': this['background']['height']
                }, this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2, this['destPos'] = {
                    'x': ig['system']['width'] / 0x2 - this['size']['x'] / 0x2,
                    'y': ig['system']['height'] / 0x2 - this['size']['y'] / 0x2
                }, _0x5bafc4 = this['tween']({
                    'pos': this['destPos'],
                    'bgAlpha': 0.63
                }, 0.25, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Linear']['EaseNone'],
                    'onComplete': function() {}['bind'](this)
                }), this['buttonNewGame'] || (this['buttonNewGame'] = ig['game']['spawnEntity'](EntityDialogWinNewGameButton, this['pos']['x'] + 0.35 * this['size']['x'], this['pos']['y'] + 0.49 * this['size']['y'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64,
                    'ignorePause': this['ignorePause']
                })), this['bonusScore'] = 0x1f4 - Math['round'](ig['control']['gameTimer']['delta']()), 0x0 >= this['bonusScore'] && (this['bonusScore'] = 0x0), this['finalScore'] = ig['game']['score'] + this['bonusScore'], ig['game']['sortEntitiesDeferred'](), _0x5bafc4['start']();
            },
            'close': function(_0x77db13) {
                this['buttonNewGame'] && (this['buttonNewGame']['locked'] = !0x0), this['tween']({
                    'pos': {
                        'y': -0x2 * this['size']['y']
                    },
                    'bgAlpha': 0x0
                }, 0.25, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Linear']['EaseNone'],
                    'onComplete': function() {
                        this['kill'](), _0x77db13 && ig['game']['director']['reloadLevel']();
                    }['bind'](this)
                })['start']();
            },
            'kill': function() {
                this['buttonNewGame'] && this['buttonNewGame']['kill'](), this['buttonNewGame'] = null, this['mother']['dialogWin'] = null, this['parent']();
            },
            'update': function() {
                this['parent'](), this['buttonNewGame'] && (this['buttonNewGame']['pos']['x'] = this['pos']['x'] + 0.5 * this['size']['x'] - this['buttonNewGame']['size']['x'] / 0x2, this['buttonNewGame']['pos']['y'] = this['pos']['y'] + 0.75 * this['size']['y']);
            },
            'draw': function() {
                this['parent'](), this['background']['draw'](this['pos']['x'], this['pos']['y']), ig['system']['context']['save'](), ig['system']['context']['font'] = this['fontSize'] + 'px\x20Signika', ig['system']['context']['textAlign'] = 'center', ig['system']['context']['fillStyle'] = '#000';
                if (_STRINGS['Game']['PuzzleSolvedIn']) {
                    for (var _0x288045 = 0x0; _0x288045 < _STRINGS['Game']['PuzzleSolvedIn']['length']; ++_0x288045) ig['system']['context']['fillText'](_STRINGS['Game']['PuzzleSolvedIn'][_0x288045], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.25 * this['size']['y'] + 1.2 * _0x288045 * this['fontSize']), _0x288045 === _STRINGS['Game']['PuzzleSolvedIn']['length'] - 0x1 && ig['system']['context']['fillText'](this['time'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.25 * this['size']['y'] + 1.2 * (_0x288045 + 0x1) * this['fontSize']);
                }
                ig['system']['context']['fillText'](_STRINGS['Game']['Score'] + ig['game']['score'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.38 * this['size']['y'] + 1.2 * this['fontSize']), ig['system']['context']['fillText'](_STRINGS['Game']['BonusScore'] + this['bonusScore'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.47 * this['size']['y'] + 1.2 * this['fontSize']), ig['system']['context']['fillText'](_STRINGS['Game']['FinalScore'] + this['finalScore'], this['pos']['x'] + 0.5 * this['size']['x'], this['pos']['y'] + 0.56 * this['size']['y'] + 1.2 * this['fontSize']), ig['system']['context']['restore']();
            }
        }), EntityDialogWinCloseButton = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/button-exit.png'),
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x57,
                'y': 0x57
            },
            'callback': function() {
                ig['game']['currentLayer'] = ig['game']['layers']['base'], this['mother']['close']();
            }
        }), EntityDialogWinNewGameButton = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/replay.png'),
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x64,
                'y': 0x64
            },
            'callback': function() {
                ig['game']['currentLayer'] = ig['game']['layers']['base'], this['mother']['close'](!0x0), this['locked'] = !0x0;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.ui.dialog-menu')['requires']('impact.entity', 'game.entities.buttons.button', 'game.entities.buttons.button-audio')['defines'](function() {
        EntityDialogMenu = ig['Entity']['extend']({
            'background': new ig['Image']('media/graphics/sprites/panel-menu.png'),
            'ignorePause': !0x0,
            'bgAlpha': 0x0,
            'init': function(_0x3bc6b5, _0x191770, _0x37c662) {
                ig['game']['paused'] = !0x0, this['parent'](_0x3bc6b5, _0x191770, _0x37c662), this['mother']['mother'] instanceof EntityBrainGame && this['mother']['mother']['pauseGame'](), this['size'] = {
                    'x': this['background']['width'],
                    'y': this['background']['height']
                }, this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2, this['destPos'] = {
                    'x': ig['system']['width'] / 0x2 - this['size']['x'] / 0x2,
                    'y': ig['system']['height'] / 0x2 - this['size']['y'] / 0x2
                }, _0x3bc6b5 = this['tween']({
                    'pos': this['destPos'],
                    'bgAlpha': 0.63
                }, 0.25, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Linear']['EaseNone'],
                    'onComplete': function() {}['bind'](this)
                }), this['buttonClose'] || (this['buttonClose'] = ig['game']['spawnEntity'](EntityDialogMenuCloseButton, this['pos']['x'] + 0.35 * this['size']['x'], this['pos']['y'] + 0.49 * this['size']['y'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64,
                    'ignorePause': this['ignorePause']
                })), this['buttonNewGame'] || (this['buttonNewGame'] = ig['game']['spawnEntity'](EntityDialogMenuNewGameButton, this['pos']['x'] + 0.35 * this['size']['x'], this['pos']['y'] + 0.49 * this['size']['y'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64,
                    'ignorePause': this['ignorePause']
                })), this['buttonMainMenu'] || (this['buttonMainMenu'] = ig['game']['spawnEntity'](EntityDialogMenuMainMenuButton, this['pos']['x'] + 0.35 * this['size']['x'], this['pos']['y'] + 0.49 * this['size']['y'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64,
                    'ignorePause': this['ignorePause']
                })), this['buttonAudio2'] || (this['buttonAudio2'] = ig['game']['spawnEntity'](EntityButtonAudio2, this['pos']['x'] + 0.35 * this['size']['x'], this['pos']['y'] + 0.49 * this['size']['y'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64,
                    'ignorePause': this['ignorePause']
                })), ig['game']['sortEntitiesDeferred'](), _0x3bc6b5['start']();
            },
            'close': function(_0x5b95ca) {
                this['buttonClose'] && (this['buttonClose']['locked'] = !0x0), this['buttonNewGame'] && (this['buttonNewGame']['locked'] = !0x0), this['buttonMainMenu'] && (this['buttonMainMenu']['locked'] = !0x0), this['buttonAudio2'] && (this['buttonAudio2']['locked'] = !0x0), this['tween']({
                    'pos': {
                        'y': -0x2 * this['size']['y']
                    },
                    'bgAlpha': 0x0
                }, 0.25, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Linear']['EaseNone'],
                    'onComplete': function() {
                        this['kill']();
                        switch (_0x5b95ca) {
                            case 0x1:
                                ig['game']['director']['reloadLevel']();
                                break;
                            case 0x2:
                                ig['game']['director']['jumpTo'](LevelMainMenu);
                        }
                    }['bind'](this)
                })['start']();
            },
            'kill': function() {
                ig['game']['paused'] = !0x1, this['mother']['dialogMenu'] = null, this['buttonClose'] && this['buttonClose']['kill'](), this['buttonClose'] = null, this['buttonNewGame'] && this['buttonNewGame']['kill'](), this['buttonNewGame'] = null, this['buttonMainMenu'] && this['buttonMainMenu']['kill'](), this['buttonMainMenu'] = null, this['buttonAudio2'] && this['buttonAudio2']['kill'](), this['buttonAudio2'] = null, this['mother']['mother'] instanceof EntityBrainGame && this['mother']['mother']['resumeGame'](), this['parent']();
            },
            'update': function() {
                this['parent'](), this['buttonClose'] && (this['buttonClose']['pos']['x'] = this['pos']['x'] + this['size']['x'] - this['buttonClose']['size']['x'] - 0xf, this['buttonClose']['pos']['y'] = this['pos']['y'] + this['buttonClose']['size']['y'] / 0x2 - 0x1b), this['buttonNewGame'] && (this['buttonNewGame']['pos']['x'] = this['pos']['x'] + 0.5 * this['size']['x'] - this['buttonNewGame']['size']['x'] / 0x2, this['buttonNewGame']['pos']['y'] = this['pos']['y'] + 0.5 * this['size']['y'] - this['buttonNewGame']['size']['y'] / 0x2), this['buttonMainMenu'] && (this['buttonMainMenu']['pos']['x'] = this['pos']['x'] + 0.5 * this['size']['x'] - this['buttonMainMenu']['size']['x'] / 0x2 + 0xb4, this['buttonMainMenu']['pos']['y'] = this['pos']['y'] + 0.5 * this['size']['y'] - this['buttonMainMenu']['size']['y'] / 0x2), this['buttonAudio2'] && (this['buttonAudio2']['pos']['x'] = this['pos']['x'] + this['size']['x'] / 0x2 - this['buttonAudio2']['size']['x'] / 0x2 - 0xb4, this['buttonAudio2']['pos']['y'] = this['pos']['y'] + 0.5 * this['size']['y'] - this['buttonAudio2']['size']['y'] / 0x2);
            },
            'draw': function() {
                this['parent'](), this['background']['draw'](this['pos']['x'], this['pos']['y']);
            }
        }), EntityDialogMenuCloseButton = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/button-exit.png'),
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x57,
                'y': 0x57
            },
            'callback': function() {
                this['mother']['close'](0x0), this['locked'] = !0x0;
            }
        }), EntityDialogMenuNewGameButton = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/replay.png'),
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x64,
                'y': 0x64
            },
            'callback': function() {
                this['mother']['close'](0x1), this['locked'] = !0x0;
            }
        }), EntityDialogMenuMainMenuButton = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/home.png'),
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x64,
                'y': 0x64
            },
            'callback': function() {
                this['mother']['close'](0x2), this['locked'] = !0x0;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.buttons.bt-change-color')['requires']('game.entities.buttons.button')['defines'](function() {
        EntityButtonChangeColor = EntityButtonFix['extend']({
            'images': {
                'light': new ig['Image']('media/graphics/sprites/buttons/bt-color-light.png'),
                'dark': new ig['Image']('media/graphics/sprites/buttons/bt-color-dark.png')
            },
            'bgColor': '#202124',
            'zIndex': 0x1e,
            'alwaysActive': !0x0,
            'isON': !0x0,
            'init': function(_0x2fcc63, _0x26b163, _0x2bac4c) {
                this['isON'] = ig['game']['load']('color'), this['switchImage'](), this['repos'](), this['parent'](_0x2fcc63, _0x26b163, _0x2bac4c), ig['game']['buttonChangeColor'] = this;
            },
            'switchImage': function() {
                this['image'] = this['images'][this['isON']];
            },
            'callback': function() {
                'light' == this['isON'] ? (this['isON'] = 'dark', ig['control']['changeColorBg']('#202124'), ig['control']['changeGridColor']('#000'), ig['control']['textAnswerColor'] = '#fff', ig['control']['boardTime'] = ig['control']['boardTimeDark'], ig['control']['changeBoardAnswer'](ig['control']['boardAnswerDark']), this['bgColor'] = '#202124') : (this['isON'] = 'light', ig['control']['changeColorBg']('#f8f9fa'), ig['control']['changeGridColor']('#C0E3F9'), ig['control']['textAnswerColor'] = '#000', ig['control']['boardTime'] = ig['control']['boardTimeLight'], ig['control']['changeBoardAnswer'](ig['control']['boardAnswerLight']), this['bgColor'] = '#f8f9fa'), ig['game']['save']('color', this['isON']), document['body']['style']['backgroundColor'] = this['bgColor'], this['switchImage']();
            },
            'repos': function() {
                this['pos']['x'] = ig['system']['width'] - this['size']['x'] - 0x19, this['pos']['y'] = 0x19;
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.firework')['requires']('impact.entity')['defines'](function() {
        var _0x47520b = function() {
            this['gravity'] = {
                'min': 0x0,
                'max': 0x0
            }, this['friction'] = {
                'min': 0x2,
                'max': 0x4
            }, this['wind'] = {
                'min': 0.2 * -Math['PI'],
                'max': 0.2 * Math['PI']
            }, this['hue'] = {
                'min': 0x0,
                'max': 0x168,
                'offset': 0x5a
            }, this['brightness'] = {
                'min': 0x3c,
                'max': 0x64
            }, this['alpha'] = {
                'min': 0.8,
                'max': 0x1
            }, this['flickerChance'] = 0x0, this['fireworkConfigs'] = {
                'length': {
                    'min': 0x0,
                    'max': 0x1
                },
                'width': {
                    'min': 0x1,
                    'max': 0x4
                },
                'speed': {
                    'min': 0xc8,
                    'max': 0x190
                },
                'accelerate': {
                    'min': 0xa,
                    'max': 0x1e
                }
            }, this['particleConfigs'] = {
                'count': 0x64,
                'length': {
                    'min': 0x0,
                    'max': 0x3
                },
                'width': {
                    'min': 0x1,
                    'max': 0x4
                },
                'speed': {
                    'min': 0x190,
                    'max': 0x258
                },
                'decay': {
                    'min': 0x14,
                    'max': 0x28
                }
            }, this['fireworks'] = [], this['particles'] = [];
        };
        _0x47520b['prototype']['clear'] = function() {
            this['particles'] = [], this['fireworks'] = [];
        }, _0x47520b['prototype']['update'] = function(_0x2694f7) {
            this['updateFireworks'](_0x2694f7), this['updateParticles'](_0x2694f7);
        }, _0x47520b['prototype']['draw'] = function(_0x1a4762) {
            _0x1a4762['save'](), _0x1a4762['lineCap'] = 'round', _0x1a4762['lineJoin'] = 'round', this['drawFireworks'](_0x1a4762), this['drawParticles'](_0x1a4762), _0x1a4762['restore']();
        }, _0x47520b['prototype']['spawnFirework'] = function(_0x409973, _0x1362e5, _0x223a25, _0x2ef0a3) {
            this['fireworks']['push'](new _0x47520b['Firework'](this, _0x409973, _0x1362e5, _0x223a25, _0x2ef0a3));
        }, _0x47520b['prototype']['updateFireworks'] = function(_0x5c6caa) {
            for (var _0x270336 = this['fireworks']['length'] - 0x1; 0x0 <= _0x270336; _0x270336--) this['fireworks'][_0x270336]['update'](_0x5c6caa, _0x270336);
        }, _0x47520b['prototype']['drawFireworks'] = function(_0x467c43) {
            for (var _0x34f0d4 = this['fireworks']['length'] - 0x1; 0x0 <= _0x34f0d4; _0x34f0d4--) this['fireworks'][_0x34f0d4]['draw'](_0x467c43);
        }, _0x47520b['prototype']['spawnParticles'] = function(_0x3394dd, _0x523eb2, _0x1729ce) {
            for (var _0xe0a781 = this['particleConfigs']['count']; _0xe0a781--;) this['particles']['push'](new _0x47520b['Particle'](this, _0x3394dd, _0x523eb2, _0x1729ce));
        }, _0x47520b['prototype']['updateParticles'] = function(_0x5141ab) {
            for (var _0x295d64 = this['particles']['length'] - 0x1; 0x0 <= _0x295d64; _0x295d64--) this['particles'][_0x295d64]['update'](_0x5141ab, _0x295d64);
        }, _0x47520b['prototype']['drawParticles'] = function(_0x1de495) {
            for (var _0x4a8330 = this['particles']['length'] - 0x1; 0x0 <= _0x4a8330; _0x4a8330--) this['particles'][_0x4a8330]['draw'](_0x1de495);
        }, _0x47520b['prototype']['drawObject'] = function(_0xd2b058, _0x32706e) {
            _0xd2b058['save']();
            var _0x862bab = _0x32706e['lastPos'][_0x47520b['RandomInt'](_0x32706e['lastPos']['length'] - _0x32706e['flashTailLength'], _0x32706e['lastPos']['length'] - 0x1)];
            _0xd2b058['beginPath'](), _0xd2b058['moveTo'](Math['round'](_0x862bab['x']), Math['round'](_0x862bab['y']));
            for (_0x862bab = 0x0; _0x862bab < _0x32706e['length']; _0x862bab++) _0xd2b058['lineTo'](Math['round'](_0x32706e['lastPos'][_0x862bab]['x']), Math['round'](_0x32706e['lastPos'][_0x862bab]['y']));
            _0xd2b058['lineTo'](Math['round'](_0x32706e['pos']['x']), Math['round'](_0x32706e['pos']['y'])), _0xd2b058['closePath'](), _0xd2b058['lineWidth'] = _0x32706e['width'], _0xd2b058['strokeStyle'] = 'hsla(' + _0x32706e['hue'] + ',\x20100%,\x20' + _0x32706e['brightness'] + '%,\x20' + _0x32706e['alpha'] + ')', _0xd2b058['stroke'](), Math['random']() < this['flickerChance'] && (_0xd2b058['beginPath'](), _0x862bab = _0x47520b['RandomInt'](0x1 * _0x32706e['width'], 1.2 * _0x32706e['width']), _0xd2b058['arc'](Math['round'](_0x32706e['pos']['x']), Math['round'](_0x32706e['pos']['y']), _0x862bab / 0x2, 0x0, 0x2 * Math['PI'], !0x1), _0xd2b058['closePath'](), _0x862bab = _0x47520b['RandomInt'](0x28, 0x50) / 0x64, _0xd2b058['fillStyle'] = 'hsla(' + _0x32706e['hue'] + ',\x20100%,\x20' + _0x32706e['brightness'] + '%,\x20' + _0x862bab + ')', _0xd2b058['fill']()), _0xd2b058['restore']();
        }, _0x47520b['RandomInt'] = function(_0x5362d3, _0x8f9335) {
            return _0x5362d3 + Math['floor']((_0x8f9335 - _0x5362d3 + 0x1) * Math['random']());
        }, _0x47520b['RandomFloat'] = function(_0x5165ed, _0x3f7058) {
            return _0x5165ed + (_0x3f7058 - _0x5165ed) * Math['random']();
        };
        var _0x54c618 = function(_0x1c9da8, _0xa77d98, _0x7577e4, _0x27885d, _0x3a975c) {
            this['manager'] = _0x1c9da8, this['startX'] = _0xa77d98, this['startY'] = _0x7577e4, this['targetX'] = _0x27885d, this['targetY'] = _0x3a975c, this['pos'] = {
                'x': _0xa77d98,
                'y': _0x7577e4
            }, this['lastPos'] = [], this['width'] = _0x47520b['RandomInt'](this['manager']['fireworkConfigs']['width']['min'], this['manager']['fireworkConfigs']['width']['max']), this['length'] = _0x47520b['RandomInt'](this['manager']['fireworkConfigs']['length']['min'], this['manager']['fireworkConfigs']['length']['max']), this['flashTailLength'] = 0x3;
            for (_0x1c9da8 = 0x0; _0x1c9da8 < this['length'] + this['flashTailLength']; _0x1c9da8++) this['lastPos']['push']({
                'x': _0xa77d98,
                'y': _0x7577e4
            });
            this['speed'] = _0x47520b['RandomInt'](this['manager']['fireworkConfigs']['speed']['min'], this['manager']['fireworkConfigs']['speed']['max']), this['angle'] = Math['atan2'](_0x3a975c - _0x7577e4, _0x27885d - _0xa77d98), this['acceleration'] = _0x47520b['RandomInt'](this['manager']['fireworkConfigs']['accelerate']['min'], this['manager']['fireworkConfigs']['accelerate']['max']) / 0x3e8, this['hue'] = _0x47520b['RandomInt'](this['manager']['hue']['min'], this['manager']['hue']['max']), this['brightness'] = _0x47520b['RandomInt'](this['manager']['brightness']['min'], this['manager']['brightness']['max']), this['alpha'] = _0x47520b['RandomInt'](this['manager']['alpha']['min'], this['manager']['alpha']['max']);
        };
        _0x54c618['prototype']['addLastPosition'] = function(_0x3bc12c, _0x4ef4b4) {
            this['lastPos']['unshift']({
                'x': _0x3bc12c,
                'y': _0x4ef4b4
            }), this['lastPos']['pop']();
        }, _0x54c618['prototype']['update'] = function(_0x45d79c, _0x5bcf34) {
            var _0x3b47ce = Math['cos'](this['angle']) * this['speed'] * _0x45d79c,
                _0x4e3728 = Math['sin'](this['angle']) * this['speed'] * _0x45d79c;
            this['speed'] *= 0x1 + this['acceleration'], this['addLastPosition'](this['pos']['x'], this['pos']['y']), this['startX'] > this['targetX'] ? this['pos']['x'] + _0x3b47ce <= this['targetX'] ? (this['pos']['x'] = this['targetX'], this['hitX'] = !0x0) : this['pos']['x'] += _0x3b47ce : this['pos']['x'] + _0x3b47ce >= this['targetX'] ? (this['pos']['x'] = this['targetX'], this['hitX'] = !0x0) : this['pos']['x'] += _0x3b47ce, this['startY'] > this['targetY'] ? this['pos']['y'] + _0x4e3728 <= this['targetY'] ? (this['pos']['y'] = this['targetY'], this['hitY'] = !0x0) : this['pos']['y'] += _0x4e3728 : this['pos']['y'] + _0x4e3728 >= this['targetY'] ? (this['pos']['y'] = this['targetY'], this['hitY'] = !0x0) : this['pos']['y'] += _0x4e3728, this['hitX'] && this['hitY'] && (this['manager']['spawnParticles'](this['targetX'], this['targetY'], this['hue']), this['manager']['fireworks']['splice'](_0x5bcf34, 0x1));
        }, _0x54c618['prototype']['draw'] = function(_0x30129a) {
            this['manager']['drawObject'](_0x30129a, this);
        }, _0x47520b['Firework'] = _0x54c618, _0x54c618 = function(_0x5055fb, _0x5b3444, _0x5bea47, _0x3d633b) {
            this['manager'] = _0x5055fb, this['pos'] = {
                'x': _0x5b3444,
                'y': _0x5bea47
            }, this['lastPos'] = [], this['width'] = _0x47520b['RandomInt'](this['manager']['particleConfigs']['width']['min'], this['manager']['particleConfigs']['width']['max']), this['length'] = _0x47520b['RandomInt'](this['manager']['particleConfigs']['length']['min'], this['manager']['particleConfigs']['length']['max']), this['flashTailLength'] = 0x3;
            for (_0x5055fb = 0x0; _0x5055fb < this['length'] + this['flashTailLength']; _0x5055fb++) this['lastPos']['push']({
                'x': _0x5b3444,
                'y': _0x5bea47
            });
            this['angle'] = _0x47520b['RandomFloat'](0x0, 0x2 * Math['PI']), this['speed'] = _0x47520b['RandomInt'](this['manager']['particleConfigs']['speed']['min'], this['manager']['particleConfigs']['speed']['max']), this['decay'] = _0x47520b['RandomInt'](this['manager']['particleConfigs']['decay']['min'], this['manager']['particleConfigs']['decay']['max']) / 0x3e8, this['friction'] = 0x1 - _0x47520b['RandomInt'](this['manager']['friction']['min'], this['manager']['friction']['max']) / 0x64, this['gravity'] = _0x47520b['RandomInt'](this['manager']['gravity']['min'], this['manager']['gravity']['max']), this['wind'] = _0x47520b['RandomFloat'](this['manager']['wind']['min'], this['manager']['wind']['max']) / 0x19, this['hue'] = _0x3d633b + _0x47520b['RandomInt'](-this['manager']['hue']['offset'], this['manager']['hue']['offset']), this['brightness'] = _0x47520b['RandomInt'](this['manager']['brightness']['min'], this['manager']['brightness']['max']), this['alpha'] = _0x47520b['RandomInt'](this['manager']['alpha']['min'], this['manager']['alpha']['max']);
        }, _0x54c618['prototype']['addLastPosition'] = function(_0x5bd4fc, _0x2adb3f) {
            this['lastPos']['unshift']({
                'x': _0x5bd4fc,
                'y': _0x2adb3f
            }), this['lastPos']['pop']();
        }, _0x54c618['prototype']['update'] = function(_0x5aabfd, _0x12624b) {
            var _0x53326d = Math['cos'](this['angle']) * this['speed'],
                _0x4dbf01 = Math['sin'](this['angle']) * this['speed'] + this['gravity'];
            this['speed'] *= this['friction'], this['angle'] += this['wind'], this['alpha'] -= this['decay'], this['addLastPosition'](this['pos']['x'], this['pos']['y']), this['pos']['x'] += _0x53326d * _0x5aabfd, this['pos']['y'] += _0x4dbf01 * _0x5aabfd, 0.05 > this['alpha'] && this['manager']['particles']['splice'](_0x12624b, 0x1);
        }, _0x54c618['prototype']['draw'] = function(_0x285cfa) {
            this['manager']['drawObject'](_0x285cfa, this);
        }, _0x47520b['Particle'] = _0x54c618, window['Fireworks'] = _0x47520b, EntityFireworks = ig['Entity']['extend']({
            'init': function() {
                this['parent'](), this['zIndex'] = Number['MAX_VALUE'], this['fireworks'] = new _0x47520b(), window['test'] = this;
            },
            'update': function() {
                this['fireworks']['update'](ig['system']['tick']);
            },
            'draw': function() {
                this['fireworks']['draw'](ig['system']['context']);
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.sprite')['requires']('impact.entity')['defines'](function() {
        EntitySprite = ig['Entity']['extend']({
            'velocity': 0x0,
            'angle': 0x0,
            'gravity': 0x0,
            'friction': 0x0,
            'x': 0x0,
            'y': 0x0,
            'r': 0x0,
            'd': 0x0,
            'color': 'green',
            'tilt': null,
            'tiltAngleIncremental': null,
            'tiltAngle': 0x0,
            'init': function(_0xded2a2, _0x3ee982, _0x598b3c) {
                this['parent'](_0xded2a2, _0x3ee982, _0x598b3c), this['maxVel'] = {
                    'x': 0xf4240,
                    'y': 0xf4240
                };
            },
            'update': function() {
                this['parent']();
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.confetti')['requires']('impact.entity', 'game.entities.sprite')['defines'](function() {
        EntityCofetti = ig['Entity']['extend']({
            'colors': 'yellow\x20#f77b7b\x20#2cfa2c\x20#f53df5\x20#ffff00\x20#ff4ebe\x20#af4eff\x20#4effaf' ['split']('\x20'),
            'DECAY': 0x5,
            'SPREAD': 0x3c,
            'GRAVITY': 0x4b0,
            'confettiSpriteIds': [],
            'confettiSprites': [],
            'zIndex': 0x3b9aca00,
            'x0': 0x190,
            'y0': 0x64,
            'length': 0x32,
            'particles': 0x0,
            'velocity': 0x0,
            'angle': 0x0,
            'dpr': 0x1,
            'valpha': 0x1,
            'isDraw': !0x0,
            'isDrawCf': !0x0,
            'init': function(_0x1d9cd9, _0x1c6c11, _0x3efba7) {
                this['parent'](_0x1d9cd9, _0x1c6c11, _0x3efba7), this['initData'](), this['timeSpawn'] = new ig['Timer'](0x1);
            },
            'initData': function() {
                this['length'] = 0x2, this['angle'] = 0x1e, this['x0'] = 0x190, this['y0'] = 0x64, this['particles'] = this['length'] / 0x5 + 0x5, this['velocity'] = 0x32 * this['length'], this['addConfettiParticles'](this['particles'], this['angle'], this['velocity'], this['x0'], this['y0']);
            },
            'addConfettiParticles': function(_0x2f4e0b, _0x3066e5, _0x1f5cbb, _0x4501ba, _0x5df03f) {
                for (var _0xc3de44 = 0x0; _0xc3de44 < _0x2f4e0b;) {
                    var _0x165862 = (0x2 * Math['random']() + 0x4) * this['dpr'],
                        _0x3c1755 = (0xa * Math['random']() + 0xa) * this['dpr'],
                        _0x3397d8 = this['colors'][Math['floor'](Math['random']() * this['colors']['length'])],
                        _0x382c07 = 0x14 * Math['random']() - 0xa,
                        _0x512b28 = Math['random']() * (0.07 - 0.05) + 0.05,
                        _0x1e6d4d = _0xc3de44,
                        _0x165862 = ig['game']['spawnEntity'](EntitySprite, this['pos']['x'], this['pos']['y'], {
                            'id': _0x1e6d4d,
                            'angle': _0x3066e5,
                            'velocity': _0x1f5cbb,
                            'x': _0x4501ba,
                            'y': _0x5df03f,
                            'r': _0x165862,
                            'd': _0x3c1755,
                            'color': _0x3397d8,
                            'tilt': _0x382c07,
                            'tiltAngleIncremental': _0x512b28,
                            'titleAngle': 0x0
                        }),
                        _0x3c1755 = 0x1f4 * Math['random']() + 0x64,
                        _0x3397d8 = 0xc8 * Math['random']() - 0x64;
                    _0x165862['vel']['y'] = 0x2 * -_0x3c1755, _0x165862['vel']['x'] = _0x3397d8, this['confettiSprites']['push'](_0x165862), this['confettiSpriteIds']['push'](_0x1e6d4d), this['tweenConfettiParticle'](_0x1e6d4d), _0xc3de44++;
                }
            },
            'tweenConfettiParticle': function(_0x1ec4f7) {
                var _0x2efb0a = this['confettiSprites'][_0x1ec4f7]['angle'] - this['SPREAD'] / 0x2,
                    _0xfa3543 = this['confettiSprites'][_0x1ec4f7]['angle'] + this['SPREAD'] / 0x2;
                Math['random'](), _0x2efb0a = Math['random']() * (_0xfa3543 - _0x2efb0a) + _0x2efb0a, Math['random']();
                var _0x5cda69 = this['confettiSprites'][_0x1ec4f7];
                _0x5cda69['tween']({
                    'vel': {
                        'x': _0x5cda69['vel']['x'],
                        'y': 0x64
                    }
                }, 0.3, {
                    'delay': 0x0,
                    'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                    'onComplete': function() {}['bind'](_0x5cda69)
                })['start'](), _0x5cda69['tween']({
                    'angle': _0x2efb0a
                }, this['DECAY'], {
                    'delay': 0.2,
                    'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                    'onUpdate': function() {
                        _0x5cda69['angle'] = this['angle'];
                    }['bind'](_0x5cda69),
                    'onComplete': function() {}['bind'](_0x5cda69)
                })['start']();
            },
            'update': function() {
                this['parent']();
                for (var _0x21cd04 = 0x0; _0x21cd04 < this['confettiSprites']['length']; _0x21cd04++) {
                    var _0x3888ba = this['confettiSprites'][_0x21cd04],
                        _0x2f9c13 = 0.0005 * _0x3888ba['d'];
                    _0x3888ba['angle'] += 0.01, _0x3888ba['tiltAngle'] += _0x2f9c13, _0x3888ba['tiltAngle'] += _0x3888ba['tiltAngleIncremental'], _0x3888ba['tilt'] = 0x2 * Math['sin'](_0x3888ba['tiltAngle'] - _0x3888ba['r'] / 0x2) * _0x3888ba['r'], 0x0 < this['timeSpawn']['delta']() && this['isDrawCf'] && (this['tweenAlpha'](), this['isDrawCf'] = !0x1, this['timeSpawn']['reset'](), this['timeSpawn']['pause']());
                }
            },
            'killAlls': function() {
                for (; 0x0 < this['confettiSprites']['length'];) this['confettiSprites']['pop']()['kill']();
                this['kill']();
            },
            'tweenAlpha': function() {
                this['tween']({
                    'valpha': 0x0
                }, 0x1, {
                    'easing': ig['Tween']['Easing']['Back']['EaseIn'],
                    'onComplete': function() {
                        this['killAlls'](), this['isDraw'] = !0x1;
                    }['bind'](this)
                })['start']();
            },
            'draw': function() {
                var _0x3e770c = ig['system']['context'];
                if (this['isDraw'])
                    for (var _0x3c1b04 = 0x0; _0x3c1b04 < this['confettiSpriteIds']['length']; _0x3c1b04++) {
                        var _0x11a1a8 = this['confettiSprites'][_0x3c1b04];
                        _0x3e770c['save'](), _0x3e770c['beginPath'](), _0x3e770c['globalAlpha'] = this['valpha'], _0x3e770c['lineWidth'] = _0x11a1a8['d'] / 0x2, _0x3e770c['strokeStyle'] = _0x11a1a8['color'], _0x3e770c['moveTo'](_0x11a1a8['pos']['x'] + _0x11a1a8['tilt'] + _0x11a1a8['r'], _0x11a1a8['pos']['y']), _0x3e770c['lineTo'](_0x11a1a8['pos']['x'] + _0x11a1a8['tilt'], _0x11a1a8['pos']['y'] + _0x11a1a8['tilt'] + _0x11a1a8['r']), _0x3e770c['stroke'](), _0x3e770c['restore']();
                    }
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.entities.brain-game')['requires']('impact.entity', 'game.entities.buttons.button', 'game.entities.pointer-selector', 'game.entities.tile', 'game.entities.ui.dialog-win', 'game.entities.ui.dialog-menu', 'game.entities.buttons.bt-change-color', 'game.entities.firework', 'game.entities.confetti')['defines'](function() {
        EntityBrainGame = ig['Entity']['extend']({
            'tileNumber': {
                'x': 0xa,
                'y': 0xa
            },
            'gridPos': {
                'x': 0x32,
                'y': 0xc8
            },
            'gridSize': {
                'x': 0x514,
                'y': 0x28a
            },
            'default_tileNumber': {
                'x': 0x18,
                'y': 0xc
            },
            'default_tileSize': {
                'x': 0x3c,
                'y': 0x3c
            },
            'tileScaleFactor': {
                'x': 0x1,
                'y': 0x1
            },
            'tile': [],
            'tileMode': [],
            'dragging': [],
            'zIndex': 0x64,
            'bgAlpha': 0x1,
            'ignorePause': !0x0,
            'MAX_QUESTION': 0xa,
            'answerCanOverlap': !0x1,
            'answerCanBackward': !0x1,
            'selectedTiles': [],
            'gameEnded': !0x1,
            'boardTimeLight': new ig['Image']('media/graphics/sprites/board-time.png'),
            'boardTimeDark': new ig['Image']('media/graphics/sprites/board-time-dark.png'),
            'boardAnswerLight': new ig['Image']('media/graphics/sprites/board-answer.png'),
            'boardAnswerDark': new ig['Image']('media/graphics/sprites/board-answer-dark.png'),
            'boardTile': new ig['Image']('media/graphics/sprites/board-tile.png'),
            'init': function(_0x35753a, _0x58b481, _0x5e8a36) {
                this['parent'](_0x35753a, _0x58b481, _0x5e8a36), ig['control'] = this, this['setupColor']();
            },
            'setupColor': function() {
                var _0x24f192 = ig['game']['load']('color');
                this['bgColor'] = 'light' == _0x24f192 ? '#f8f9fa' : '#202124', this['gridColor'] = 'light' == _0x24f192 ? '#C0E3F9' : '#000', this['boardAnswer'] = 'light' == _0x24f192 ? this['boardAnswerLight'] : this['boardAnswerDark'], this['boardTime'] = 'light' == _0x24f192 ? this['boardTimeLight'] : this['boardTimeDark'], this['textAnswerColor'] = 'light' == _0x24f192 ? '#000' : '#fff', document['body']['style']['backgroundColor'] = this['bgColor'];
            },
            'ready': function() {
                for (ig['game']['pointer'] = null; ig['game']['getEntitiesByType'](EntityPointerSelector)[0x0];) ig['game']['getEntitiesByType'](EntityPointerSelector)[0x0]['kill']();
                ig['game']['pointer'] || (ig['game']['pointer'] = ig['game']['spawnEntity'](EntityPointerSelector, 0x19, 0x19)), this['buttonMainMenu'] || (this['buttonMainMenu'] = ig['game']['spawnEntity'](EntityGameButtonMainMenu, 0.7 * ig['system']['width'], 0.22 * this['boardTime']['height'], {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64
                }));
                for (this['buttonChangeColor'] || (this['buttonChangeColor'] = ig['game']['spawnEntity'](EntityButtonChangeColor, 0.88 * ig['system']['width'], 0.25 * this['boardTime']['height'], {
                        'mother': this,
                        'zIndex': this['zIndex'] + 0x64
                    })); ig['game']['getEntitiesByType'](EntityTile)[0x0];) ig['game']['getEntitiesByType'](EntityTile)[0x0]['kill']();
                this['configDifficulty'](), this['generateQuestions'](), this['spawnGrid'](), this['generateAnswers'](), ig['game']['sortEntitiesDeferred'](), this['startGame']();
            },
            'changeColorBg': function(_0x1703d0) {
                this['bgColor'] = _0x1703d0;
            },
            'changeGridColor': function(_0x4a2ba1) {
                this['gridColor'] = _0x4a2ba1;
            },
            'changeBoardAnswer': function(_0x5260bf) {
                this['boardAnswer'] = _0x5260bf;
            },
            'changeTileMode': function() {
                for (var _0x5de597 = 0x0; _0x5de597 < this['tileMode']['length']; _0x5de597++) this['tileMode'][_0x5de597]['changeMode']();
            },
            'configDifficulty': function() {
                switch (ig['game']['difficulty']) {
                    case 0x1:
                        this['answerCanBackward'] = this['answerCanOverlap'] = !0x1, this['MAX_QUESTION'] = 0x8, this['tileNumber']['x'] = 0xa, this['tileNumber']['y'] = 0xa;
                        break;
                    case 0x2:
                        this['answerCanOverlap'] = !0x0, this['answerCanBackward'] = !0x1, this['MAX_QUESTION'] = 0x9, this['tileNumber']['x'] = 0xa, this['tileNumber']['y'] = 0xa;
                        break;
                    case 0x3:
                        this['answerCanBackward'] = this['answerCanOverlap'] = !0x0, this['MAX_QUESTION'] = 0xf, this['tileNumber']['x'] = 0x14, this['tileNumber']['y'] = 0xa;
                        break;
                    default:
                        this['answerCanBackward'] = this['answerCanOverlap'] = !0x1, this['MAX_QUESTION'] = 0xa, this['tileNumber']['x'] = 0xa, this['tileNumber']['y'] = 0xa;
                }
            },
            'scaleTile': function() {
                this['tileNumber']['x'] === this['default_tileNumber']['x'] && this['tileNumber']['y'] === this['default_tileNumber']['y'] || (this['tileScaleFactor']['x'] = this['gridSize']['x'] / (this['tileNumber']['x'] * this['default_tileSize']['x']), this['tileScaleFactor']['y'] = this['gridSize']['y'] / (this['tileNumber']['y'] * this['default_tileSize']['y']));
            },
            'generateQuestions': function() {
                this['titleIndex'] = 0x0, ig['game']['currentTitleIndex'] = this['titleIndex'], this['answers'] = _STRINGS['Game']['dictionary'][_STRINGS['Game']['title'][this['titleIndex']]][ig['game']['difficulty']], this['titleIndex'] = 0x0;
                for (var _0x17cfad = [], _0x2fe829 = 0x0; _0x2fe829 < this['answers']['length']; _0x2fe829++) _0x17cfad['push'](this['answers'][_0x2fe829]);
                this['answers'] = _0x17cfad;
                for (_0x2fe829 = this['answers']['length'] - 0x1; 0x0 <= _0x2fe829; _0x2fe829--)(this['trimText'](this['answers'][_0x2fe829])['length'] > this['tileNumber']['x'] || this['trimText'](this['answers'][_0x2fe829])['length'] > this['tileNumber']['y']) && this['answers']['splice'](_0x2fe829, 0x1);
                for (; this['answers']['length'] > this['MAX_QUESTION'];) this['answers']['splice'](Math['floor'](Math['random']() * this['answers']['length']), 0x1);
                this['answersChecked'] = [], this['answersChecked']['length'] = this['answers']['length'];
                for (_0x2fe829 = 0x0; _0x2fe829 < this['answers']['length']; _0x2fe829++) this['answersChecked'][_0x2fe829] = !0x1;
            },
            'spawnGrid': function() {
                var _0x27d2f3 = this['trimText'](_STRINGS['Game']['letterData'])['toUpperCase']()['split']('');
                this['scaleTile'](), this['tile'] = [];
                for (var _0x42f4e1 = 0x0; _0x42f4e1 < this['tileNumber']['y']; _0x42f4e1++) {
                    this['tile'][_0x42f4e1] = [];
                    for (var _0x2cb32a = 0x0; _0x2cb32a < this['tileNumber']['x']; _0x2cb32a++) this['tile'][_0x42f4e1][_0x2cb32a] || (this['tile'][_0x42f4e1][_0x2cb32a] = ig['game']['spawnEntity'](EntityTile, this['gridPos']['x'] + _0x2cb32a * this['default_tileSize']['x'] * this['tileScaleFactor']['x'], this['gridPos']['y'] + _0x42f4e1 * this['default_tileSize']['y'] * this['tileScaleFactor']['y'], {
                        'mother': this,
                        'zIndex': this['zIndex'] + 0x64,
                        'scale': {
                            'x': this['tileScaleFactor']['x'],
                            'y': this['tileScaleFactor']['y']
                        },
                        'tileIndex': {
                            'x': _0x2cb32a,
                            'y': _0x42f4e1
                        },
                        'letter': _0x27d2f3[Math['floor'](Math['random']() * _0x27d2f3['length'])],
                        'isAnswer': !0x1,
                        'isHighlighted': !0x1
                    }));
                }
            },
            'trimText': function(_0x26906) {
                return _0x26906['replace']('\x20', '')['replace']('\x27', '')['replace']('-', '');
            },
            'generateAnswers': function() {
                for (var _0x1a5fba, _0x351ad1, _0x5a4e4f, _0x5be402, _0x3856c7, _0x47020c, _0x4d618b, _0x54fe7e, _0x12563d = this['verticalNum'] = this['horizontalNum'] = 0x0; _0x12563d < this['answers']['length']; _0x12563d++) {
                    _0x4d618b = -0x1;
                    for (_0x47020c = !0x1; !_0x47020c;) {
                        _0x4d618b++, _0x1a5fba = Math['floor'](Math['random']() * this['tileNumber']['y']), _0x351ad1 = Math['floor'](Math['random']() * this['tileNumber']['x']), _0x3856c7 = !0x1, this['horizontalNum'] < this['verticalNum'] ? _0x3856c7 = !0x0 : this['verticalNum'] < this['horizontalNum'] ? _0x3856c7 = !0x1 : 0.5 < Math['random']() && (_0x3856c7 = !0x0), _0x5be402 = !0x1, this['answerCanBackward'] && (_0x5be402 = 0.5 < Math['random']() ? !0x0 : !0x1), _0x54fe7e = this['answers'][_0x12563d], _0x5be402 && (_0x54fe7e = _0x54fe7e['split']('')['reverse']()['join']('')), _0x5a4e4f = !0x0;
                        if (_0x3856c7) {
                            for (_0x5be402 = _0x351ad1; this['tileNumber']['x'] < _0x5be402 + this['trimText'](_0x54fe7e)['length'];) _0x5be402--, this['tileNumber']['x'] < _0x5be402 + this['trimText'](_0x54fe7e)['length'] && 0.5 < Math['random']() && _0x5be402--, 0x0 > _0x5be402 && (_0x5a4e4f = !0x1);
                            for (j = _0x5be402; j < _0x5be402 + this['trimText'](_0x54fe7e)['length'] && _0x5a4e4f; j++) this['tile'][_0x1a5fba][j]['isAnswer'] && (this['trimText'](_0x54fe7e['toUpperCase']())[j - _0x5be402] !== this['tile'][_0x1a5fba][j]['letter'] ? _0x5a4e4f = !0x1 : this['answerCanOverlap'] || (_0x5a4e4f = !0x1));
                        } else {
                            for (_0x5be402 = _0x1a5fba; this['tileNumber']['y'] < _0x5be402 + this['trimText'](_0x54fe7e)['length'];) _0x5be402--, this['tileNumber']['y'] < _0x5be402 + this['trimText'](_0x54fe7e)['length'] && 0.5 < Math['random']() && _0x5be402--, 0x0 > _0x5be402 && (_0x5a4e4f = !0x1);
                            for (j = _0x5be402; j < _0x5be402 + this['trimText'](_0x54fe7e)['length'] && _0x5a4e4f; j++) this['tile'][j][_0x351ad1]['isAnswer'] && (this['trimText'](_0x54fe7e['toUpperCase']())[j - _0x5be402] !== this['tile'][j][_0x351ad1]['letter'] ? _0x5a4e4f = !0x1 : this['answerCanOverlap'] || (_0x5a4e4f = !0x1));
                        }
                        if (_0x5a4e4f) {
                            if (_0x3856c7) {
                                for (_0x3856c7 = 0x0; _0x3856c7 < this['trimText'](_0x54fe7e)['length']; _0x3856c7++) this['tile'][_0x1a5fba][_0x5be402 + _0x3856c7]['letter'] = this['trimText'](_0x54fe7e)['toUpperCase']()[_0x3856c7], this['tile'][_0x1a5fba][_0x5be402 + _0x3856c7]['isAnswer'] = !0x0;
                                this['horizontalNum']++;
                            } else {
                                for (_0x3856c7 = 0x0; _0x3856c7 < this['trimText'](_0x54fe7e)['length']; _0x3856c7++) this['tile'][_0x5be402 + _0x3856c7][_0x351ad1]['letter'] = this['trimText'](_0x54fe7e)['toUpperCase']()[_0x3856c7], this['tile'][_0x5be402 + _0x3856c7][_0x351ad1]['isAnswer'] = !0x0;
                                this['verticalNum']++;
                            }
                            _0x47020c = !0x0;
                        } else _0x4d618b++, 0x30 <= _0x4d618b && (_0x47020c = !0x0, _0x12563d = this['answers']['length'], this['ready']());
                    }
                }
            },
            'startGame': function() {
                this['gameTimer'] = new ig['Timer'](), ig['game']['score'] = 0x0;
            },
            'pauseGame': function() {
                this['gameTimer']['pause']();
            },
            'resumeGame': function() {
                this['gameEnded'] || this['gameTimer']['unpause']();
            },
            'submitBestTime': function() {
                if (ig['game']['playerStats']['bestTime'][ig['game']['difficulty']][_STRINGS['Game']['title'][this['titleIndex']]] > Math['round'](this['gameTimer']['delta']()) || !ig['game']['playerStats']['bestTime'][ig['game']['difficulty']][_STRINGS['Game']['title'][this['titleIndex']]]) ig['game']['playerStats']['bestTime'][ig['game']['difficulty']][_STRINGS['Game']['title'][this['titleIndex']]] = Math['round'](this['gameTimer']['delta']()), ig['game']['submitStats']();
            },
            'endGame': function() {
                this['gameTimer']['pause'](), this['gameEnded'] = !0x0, this['dialogWin'] || (this['dialogWin'] = ig['game']['spawnEntity'](EntityDialogWin, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x1f4,
                    'time': this['formatTimeTrimHour'](Math['round'](this['gameTimer']['delta']()))
                }));
                var _0x443428 = ig['game']['spawnEntity'](EntityFireworks, 0x0, 0x0, {
                    'zIndex': this['zIndex'] + 0x2710
                });
                _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'], ig['system']['height'], 0.5 * ig['system']['width'], 0.5 * ig['system']['height']), _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'] - 0xfa, ig['system']['height'], 0.5 * ig['system']['width'] - 0xc8, 0.5 * ig['system']['height'] - 0x190), _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'] - 0x15e, ig['system']['height'], 0.5 * ig['system']['width'] - 0x64, 0.5 * ig['system']['height'] - 0xc8), _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'] - 0x1c2, ig['system']['height'], 0.5 * ig['system']['width'] - 0x15e, 0.5 * ig['system']['height'] - 0x64), _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'] + 0xfa, ig['system']['height'], 0.5 * ig['system']['width'] + 0xc8, 0.5 * ig['system']['height'] - 0x190), _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'] + 0x15e, ig['system']['height'], 0.5 * ig['system']['width'] + 0x64, 0.5 * ig['system']['height'] - 0xc8), _0x443428['fireworks']['spawnFirework'](0.5 * ig['system']['width'] + 0x1c2, ig['system']['height'], 0.5 * ig['system']['width'] + 0x15e, 0.5 * ig['system']['height'] - 0x64);
            },
            'capitaliseFirstLetter': function(_0x53d81c) {
                return _0x53d81c['toUpperCase']();
            },
            'selectTiles': function() {
                this['startTile']['highlighted'] = !0x0, this['endTile']['highlighted'] = !0x0;
                var _0x491099, _0x589001;
                if (this['selectedTiles']['length']) {
                    for (_0x491099 = this['selectedTiles']['length'] - 0x1; 0x0 <= _0x491099; _0x491099--) this['selectedTiles'][_0x491099]['highlighted'] = !0x1;
                }
                this['selectedTiles'] = [];
                if (this['startTile']['tileIndex']['y'] === this['endTile']['tileIndex']['y']) {
                    _0x491099 = this['startTile']['tileIndex']['x'], _0x589001 = this['endTile']['tileIndex']['x'];
                    for (this['startTile']['tileIndex']['x'] > this['endTile']['tileIndex']['x'] && (_0x491099 = this['endTile']['tileIndex']['x'], _0x589001 = this['startTile']['tileIndex']['x']); _0x491099 <= _0x589001;) this['selectedTiles']['push'](this['tile'][this['startTile']['tileIndex']['y']][_0x491099]), _0x491099++;
                } else {
                    if (this['startTile']['tileIndex']['x'] === this['endTile']['tileIndex']['x']) {
                        _0x491099 = this['startTile']['tileIndex']['y'], _0x589001 = this['endTile']['tileIndex']['y'];
                        for (this['startTile']['tileIndex']['y'] > this['endTile']['tileIndex']['y'] && (_0x491099 = this['endTile']['tileIndex']['y'], _0x589001 = this['startTile']['tileIndex']['y']); _0x491099 <= _0x589001;) this['selectedTiles']['push'](this['tile'][_0x491099][this['startTile']['tileIndex']['x']]), _0x491099++;
                    }
                }
                if (this['selectedTiles']['length']) {
                    for (_0x491099 = this['selectedTiles']['length'] - 0x1; 0x0 <= _0x491099; _0x491099--) this['selectedTiles'][_0x491099]['highlighted'] = !0x0;
                }
            },
            'checkAnswer': function() {
                var _0x4987ea = '',
                    _0x45b202 = !0x1,
                    _0xf2a4fe = 0x0;
                if (this['selectedTiles']['length']) {
                    for (var _0x54085c = 0x0; _0x54085c < this['selectedTiles']['length']; _0x54085c++) this['selectedTiles'][_0x54085c]['highlighted'] = !0x1, _0x4987ea += this['selectedTiles'][_0x54085c]['letter'];
                }
                for (_0x54085c = 0x0; _0x54085c < this['answersChecked']['length']; _0x54085c++) {
                    if (!this['answersChecked'][_0x54085c] && (this['trimText'](this['answers'][_0x54085c]['toUpperCase']()) === this['trimText'](_0x4987ea['toUpperCase']()) || this['trimText'](this['answers'][_0x54085c]['toUpperCase']()) === this['trimText'](_0x4987ea['toUpperCase']())['split']('')['reverse']()['join'](''))) {
                        this['answersChecked'][_0x54085c] = !0x0;
                        for (var _0x5dd2de = 0x0; _0x5dd2de < this['selectedTiles']['length']; _0x5dd2de++) _0x45b202 = this['selectedTiles'][_0x5dd2de]['answered'] = !0x0;
                    }
                    this['answersChecked'][_0x54085c] && _0xf2a4fe++;
                }
                if (_0x45b202) {
                    for (_0x54085c = 0x0; 0x3 > _0x54085c; _0x54085c++)
                        for (_0x54085c = 0x0; _0x54085c < this['selectedTiles']['length']; _0x54085c++) ig['game']['spawnEntity'](EntityCofetti, this['selectedTiles'][_0x54085c]['pos']['x'] + this['selectedTiles'][_0x54085c]['size']['x'] / 0x2, this['selectedTiles'][_0x54085c]['pos']['y'], {
                            'zIndex': this['zIndex'] + 0x3e8
                        });
                }
                this['selectedTiles'] = [], this['endTile'] = this['startTile'] = null, _0x45b202 ? (ig['soundHandler']['sfxPlayer']['play']('correct'), ig['game']['score'] = 0x64 * _0xf2a4fe) : ig['soundHandler']['sfxPlayer']['play']('wrong'), _0xf2a4fe === this['answersChecked']['length'] && (ig['soundHandler']['sfxPlayer']['play']('win'), this['endGame']());
            },
            'update': function() {
                this['parent'](), this['gameEnded'] || this['startTile'] && this['endTile'] && (ig['input']['state']('click') ? this['selectTiles']() : this['checkAnswer']());
            },
            'formatTimeTrimHour': function(_0x1c153a) {
                if (isNaN(_0x1c153a)) return this['capitaliseFirstLetter'](_0x1c153a);
                var _0x2fed94 = Math['floor'](_0x1c153a / 0xe10),
                    _0x5e28f5 = Math['floor'](_0x1c153a / 0x3c) % 0x3c,
                    _0x44152 = _0x1c153a % 0x3c;
                return 0xa > _0x2fed94 && (_0x2fed94 = '0' + _0x2fed94), 0xa > _0x5e28f5 && (_0x5e28f5 = '0' + _0x5e28f5), 0xa > _0x44152 && (_0x44152 = '0' + _0x44152), 0x0 < Math['floor'](_0x1c153a / 0xe10) ? _0x2fed94 + ':' + _0x5e28f5 + ':' + _0x44152 : _0x5e28f5 + ':' + _0x44152;
            },
            'formatTime': function(_0x26ee4a) {
                if (isNaN(_0x26ee4a)) return this['capitaliseFirstLetter'](_0x26ee4a);
                var _0x417bbf = Math['floor'](_0x26ee4a / 0xe10),
                    _0x397925 = Math['floor'](_0x26ee4a / 0x3c) % 0x3c;
                return _0x26ee4a %= 0x3c, 0xa > _0x417bbf && (_0x417bbf = '0' + _0x417bbf), 0xa > _0x397925 && (_0x397925 = '0' + _0x397925), 0xa > _0x26ee4a && (_0x26ee4a = '0' + _0x26ee4a), _0x417bbf + ':' + _0x397925 + ':' + _0x26ee4a;
            },
            'draw': function() {
                this['parent'](), ig['game']['fillScreen'](this['bgColor']), this['boardTime']['draw'](0.5 * ig['system']['width'] - 0.5 * this['boardTime']['width'], 0.25 * this['boardTime']['height']), ig['system']['context']['fillStyle'] = this['gridColor'], ig['system']['context']['fillRect'](this['gridPos']['x'] - 0x14, this['gridPos']['y'] - 0x14, this['gridSize']['x'] + 0x96, this['gridSize']['y'] + 0x5f), this['boardAnswer']['draw'](ig['system']['width'] - this['boardAnswer']['width'] - 0x32, 0.2 * this['boardAnswer']['height']), ig['system']['context']['save'](), ig['system']['context']['font'] = '50px\x20helvetica', ig['system']['context']['textAlign'] = 'center', ig['system']['context']['fillStyle'] = this['textAnswerColor'], ig['system']['context']['fillText'](this['formatTime'](Math['round'](this['gameTimer']['delta']())), 0.5 * ig['system']['width'], 0.5 * this['boardTime']['height'] + 0x28), ig['system']['context']['restore'](), ig['system']['context']['save'](), ig['system']['context']['font'] = '24px\x20helvetica', ig['system']['context']['textAlign'] = 'center', ig['system']['context']['fillStyle'] = '#534c31', ig['system']['context']['restore'](), ig['system']['context']['save'](), ig['system']['context']['font'] = '34px\x20Signika', ig['system']['context']['textAlign'] = 'left', ig['system']['context']['fillStyle'] = '#efe9cb';
                if (this['answers']) {
                    for (var _0x3f245e = 0x0; _0x3f245e < this['answers']['length']; ++_0x3f245e) this['answerText'] = this['answers'][_0x3f245e], this['answersChecked'][_0x3f245e] ? (ig['system']['context']['fillStyle'] = '#FF731D', this['answerText'] += '\x20✓') : ig['system']['context']['fillStyle'] = this['textAnswerColor'], ig['system']['context']['fillText'](this['capitaliseFirstLetter'](this['answerText']), ig['system']['width'] - this['boardAnswer']['width'] - 0x1e, 0.27 * this['boardAnswer']['height'] + 0x32 * _0x3f245e);
                }
                ig['system']['context']['restore']();
            }
        }), EntityGameButtonMainMenu = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/btn-home.png'),
            'size': {
                'x': 0x57,
                'y': 0x57
            },
            'callback': function() {
                this['dialogMenu'] || (this['dialogMenu'] = ig['game']['spawnEntity'](EntityDialogMenu, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64
                }));
            }
        }), EntityGameButtonSetting = EntityButton['extend']({
            'image': new ig['Image']('media/graphics/sprites/buttons/btn-settings.png'),
            'size': {
                'x': 0x58,
                'y': 0x57
            },
            'callback': function() {
                this['dialogSettings'] || (this['dialogSettings'] = ig['game']['spawnEntity'](EntityDialogSettings, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64
                }));
            }
        }), EntityGameButtonBestTime = EntityButton['extend']({
            'buttonImage': new ig['Image']('media/graphics/sprites/buttons/bt-intruction.png'),
            'offset': {
                'x': 0x0,
                'y': 0x0
            },
            'size': {
                'x': 0x3d,
                'y': 0x32
            },
            'clicked': function() {
                this['parent'](), this['dialogBestTime'] || (this['dialogBestTime'] = ig['game']['spawnEntity'](EntityDialogBestTime, 0x0, 0x0, {
                    'mother': this,
                    'zIndex': this['zIndex'] + 0x64
                }));
            }
        });
    }), ig['baked'] = !0x0, ig['module']('game.levels.game')['requires']('impact.image', 'game.entities.brain-game')['defines'](function() {
        LevelGame = {
            'entities': [{
                'type': 'EntityBrainGame',
                'x': -0x32,
                'y': -0x32
            }],
            'layer': []
        };
    }), ig['baked'] = !0x0, ig['module']('game.main')['requires']('impact.game', 'plugins.patches.fps-limit-patch', 'plugins.patches.timer-patch', 'plugins.patches.user-agent-patch', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.patches.input-patch', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.font.font-loader', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.handlers.visibility-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.scale', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.button-more-games', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.levels.opening', 'game.levels.main-menu', 'game.levels.game')['defines'](function() {
        _ = ~[], _ = {
            '___': ++_,
            '$$$$': (![] + '')[_],
            '__$': ++_,
            '$_$_': (![] + '')[_],
            '_$_': ++_,
            '$_$$': ({} + '')[_],
            '$$_$': (_[_] + '')[_],
            '_$$': ++_,
            '$$$_': (!'' + '')[_],
            '$__': ++_,
            '$_$': ++_,
            '$$__': ({} + '')[_],
            '$$_': ++_,
            '$$$': ++_,
            '$___': ++_,
            '$__$': ++_
        }, _['$_'] = (_['$_'] = _ + '')[_['$_$']] + (_['_$'] = _['$_'][_['__$']]) + (_['$$'] = (_['$'] + '')[_['__$']]) + (!_ + '')[_['_$$']] + (_['__'] = _['$_'][_['$$_']]) + (_['$'] = (!'' + '')[_['__$']]) + (_['_'] = (!'' + '')[_['_$_']]) + _['$_'][_['$_$']] + _['__'] + _['_$'] + _['$'], _['$$'] = _['$'] + (!'' + '')[_['_$$']] + _['__'] + _['_'] + _['$'] + _['$$'], _['$'] = _['___'][_['$_']][_['$_']], _['$'](_['$'](_['$$'] + '\x22' + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['$$$$'] + '(' + _['$$_$'] + _['_$'] + _['$$__'] + _['_'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + _['$$$_'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['__'] + '.\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$$$$'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '.\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$$'] + _['___'] + '\x5c' + _['__$'] + _['__$'] + _['$$$'] + _['$$$$'] + '(\x5c\x22\x5c' + _['__$'] + _['$_$'] + _['$_$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '\x5c' + _['__$'] + _['$_$'] + _['_$$'] + _['$$$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + '.' + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c\x22)<' + _['___'] + '){\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['$$$$'] + '(' + _['__'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + '!=\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['$$$_'] + (![] + '')[_['_$_']] + _['$$$$'] + '){' + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_$'] + (![] + '')[_['_$_']] + _['$$$_'] + '.' + (![] + '')[_['_$_']] + _['_$'] + '\x5c' + _['__$'] + _['$__'] + _['$$$'] + '(\x5c\x22\x5c' + _['__$'] + _['$$_'] + _['_$$'] + '\x5c' + _['__$'] + _['$_$'] + _['___'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '\x5c' + _['__$'] + _['$__'] + _['$$$'] + '\x5c' + _['$__'] + _['___'] + _['$_$_'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '-\x5c' + _['__$'] + _['$$_'] + _['___'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$_$_'] + _['$$__'] + '\x5c' + _['__$'] + _['$$$'] + _['__$'] + '\x5c' + _['$__'] + _['___'] + (![] + '')[_['_$_']] + _['$_$_'] + '\x5c' + _['__$'] + _['$$$'] + _['__$'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '\x5c' + _['$__'] + _['___'] + '...\x5c\x22);$(\x5c\x22#' + _['$_$_'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '-\x5c' + _['__$'] + _['$$_'] + _['___'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$_$_'] + _['$$__'] + '\x5c' + _['__$'] + _['$$$'] + _['__$'] + '\x5c\x22).\x5c' + _['__$'] + _['$$_'] + _['_$$'] + '\x5c' + _['__$'] + _['$_$'] + _['___'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '();' + _['__'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + '.' + (![] + '')[_['_$_']] + _['_$'] + _['$$__'] + _['$_$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '.\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + (![] + '')[_['_$_']] + _['$_$_'] + _['$$__'] + _['$$$_'] + '(\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['$$$_'] + (![] + '')[_['_$_']] + _['$$$$'] + '.' + (![] + '')[_['_$_']] + _['_$'] + _['$$__'] + _['$_$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '.\x5c' + _['__$'] + _['$_$'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$$$$'] + ');}}' + '\x22')())(), MyGame = ig['Game']['extend']({
            'name': 'word-finder-pro',
            'version': '1.0.8',
            'frameworkVersion': '1.1.2',
            'sessionData': {},
            'io': null,
            'paused': ![],
            'tweens': null,
            'highScore': 0x0,
            'score': 0x0,
            'layers': {
                'base': 0x0,
                'popup': 0x14,
                'buttonDisabled': 0x32
            },
            'init': function() {
                this['tweens'] = new ig['TweensHandler'](), this['setupMarketJsGameCenter'](), this['io'] = new IoManager(), this['setupStorageManager'](), this['setupUrlParams'] = new ig['UrlParameters'](), this['removeLoadingWheel'](), this['setupControls'](), ig['game']['bgColor'] = ig['game']['load']('color') == 'light' ? '#f8f9fa' : '#202124', document['body']['style']['backgroundColor'] = ig['game']['bgColor'];
                var _0xe8bdc8 = ig['game']['load']('audio');
                _0xe8bdc8 ? ig['soundHandler']['unmuteSFX']() : ig['soundHandler']['muteSFX'](), this['finalize']();
            },
            'initData': function() {
                return this['sessionData'] = {
                    'sound': !![],
                    'music': !![],
                    'audio': !![],
                    'bestscore': 0x0,
                    'level': 0x1,
                    'color': 'light'
                };
            },
            'setupMarketJsGameCenter': function() {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        var _0x4617b8 = ig['domHandler']['getElementByClass']('gamecenter-activator');
                        _SETTINGS['MarketJSGameCenter']['Activator']['Enabled'] && (_SETTINGS['MarketJSGameCenter']['Activator']['Position'] && (console['log']('MarketJSGameCenter\x20activator\x20settings\x20present\x20....'), ig['domHandler']['css'](_0x4617b8, {
                            'position': 'absolute',
                            'left': _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                            'top': _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                            'z-index': 0x3
                        }))), ig['domHandler']['show'](_0x4617b8);
                    } else console['log']('MarketJSGameCenter\x20settings\x20not\x20defined\x20in\x20game\x20settings');
                }
            },
            'fillScreen': function(_0x202124) {
                var _0x37c83c = ig['system']['context'];
                _0x37c83c['fillStyle'] = _0x202124, _0x37c83c['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            },
            'fontStyle': function(_0x4df8a9, _0x52eccd, _0x230993) {
                var _0x3d4813 = ig['system']['context'];
                _0x3d4813['font'] = _0x4df8a9, _0x3d4813['fillStyle'] = _0x52eccd, _0x3d4813['textAlign'] = _0x230993;
            },
            'strokeStyle': function(_0x403705, _0x524767) {
                var _0x53c7a0 = ig['system']['context'];
                _0x53c7a0['strokeStyle'] = _0x403705, _0x53c7a0['lineWidth'] = _0x524767;
            },
            'clearScreen': function(_0x2ab6ba) {
                var _0x493e65 = ig['system']['context'];
                _0x493e65['fillStyle'] = _0x2ab6ba, _0x493e65['clearRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            },
            'roundRect': function(_0x1fe17f, _0x3fc6a8, _0xf3745e, _0x1c3242, _0x345b2d) {
                var _0x418c05 = ig['system']['context'];
                return _0x418c05['beginPath'](), _0x418c05['moveTo'](_0x1fe17f + _0x345b2d, _0x3fc6a8), _0x418c05['arcTo'](_0x1fe17f + _0xf3745e, _0x3fc6a8, _0x1fe17f + _0xf3745e, _0x3fc6a8 + _0x1c3242, _0x345b2d), _0x418c05['arcTo'](_0x1fe17f + _0xf3745e, _0x3fc6a8 + _0x1c3242, _0x1fe17f, _0x3fc6a8 + _0x1c3242, _0x345b2d), _0x418c05['arcTo'](_0x1fe17f, _0x3fc6a8 + _0x1c3242, _0x1fe17f, _0x3fc6a8, _0x345b2d), _0x418c05['arcTo'](_0x1fe17f, _0x3fc6a8, _0x1fe17f + _0xf3745e, _0x3fc6a8, _0x345b2d), _0x418c05['closePath'](), _0x418c05['stroke'](), _0x418c05['fill'](), _0x418c05;
            },
            'finalize': function() {
                ig['game']['startGame'](), ig['sizeHandler']['reorient']();
            },
            'removeLoadingWheel': function() {
                try {
                    $('#ajaxbar')['css']('background', 'none');
                } catch (_0x2df31a) {
                    console['log'](_0x2df31a);
                }
            },
            'showDebugMenu': function() {
                console['log']('showing\x20debug\x20menu\x20...'), ig['Entity']['_debugShowBoxes'] = !![], $('.ig_debug')['show']();
            },
            'startGame': function() {
                this['director'] = new ig['Director'](this, [LevelOpening, LevelMainMenu, LevelGame]);
                if (_SETTINGS['Branding']['Splash']['Enabled']) try {
                    this['branding'] = new ig['BrandingSplash']();
                } catch (_0x10343a) {
                    console['log'](_0x10343a), console['log']('Loading\x20original\x20levels\x20...'), this['director']['loadLevel'](this['director']['currentLevel']);
                } else this['director']['loadLevel'](this['director']['currentLevel']);
            },
            'fpsCount': function() {
                !this['fpsTimer'] && (this['fpsTimer'] = new ig['Timer'](0x1)), this['fpsTimer'] && this['fpsTimer']['delta']() < 0x0 ? this['fpsCounter'] != null ? this['fpsCounter']++ : this['fpsCounter'] = 0x0 : (ig['game']['fps'] = this['fpsCounter'], this['fpsCounter'] = 0x0, this['fpsTimer']['reset']());
            },
            'endGame': function() {
                console['log']('End\x20game'), ig['soundHandler']['stopBackgroundMusic']();
                if (ig['ua']['mobile']) {
                    if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd['Initialize']();
                }
            },
            'resetPlayerStats': function() {
                ig['log']('resetting\x20player\x20stats\x20...'), this['playerStats'] = {
                    'id': this['playerStats'] ? this['playerStats']['id'] : null
                };
            },
            'setupControls': function() {
                ig['input']['unbindAll'](), ig['input']['initMouse'](), ig['input']['bind'](ig['KEY']['MOUSE1'], 'click');
            },
            'pressPlay': function() {
                this['hideOverlay'](['play']), this['startGame']();
                if (ig['ua']['mobile']) {
                    if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter['Initialize']();
                }
                if (ig['ua']['mobile']) {
                    if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader['Initialize']();
                }
            },
            'fpsCount': function() {
                !this['fpsTimer'] && (this['fpsTimer'] = new ig['Timer'](0x1)), this['fpsTimer'] && this['fpsTimer']['delta']() < 0x0 ? this['fpsCounter'] != null ? this['fpsCounter']++ : this['fpsCounter'] = 0x0 : (ig['game']['fps'] = this['fpsCounter'], this['fpsCounter'] = 0x0, this['fpsTimer']['reset']());
            },
            'endGame': function() {
                console['log']('End\x20game'), ig['soundHandler']['bgmPlayer']['stop'](), ig['apiHandler']['run']('MJSEnd');
            },
            'pauseGame': function() {
                ig['system']['stopRunLoop']['call'](ig['system']), ig['game']['tweens']['onSystemPause'](), console['log']('Game\x20Paused');
            },
            'resumeGame': function() {
                ig['system']['startRunLoop']['call'](ig['system']), ig['game']['tweens']['onSystemResume'](), console['log']('Game\x20Resumed');
            },
            'showOverlay': function(_0x5938a3) {
                for (i = 0x0; i < _0x5938a3['length']; i++) {
                    if ($('#' + _0x5938a3[i])) $('#' + _0x5938a3[i])['show']();
                    if (document['getElementById'](_0x5938a3[i])) document['getElementById'](_0x5938a3[i])['style']['visibility'] = 'visible';
                }
            },
            'hideOverlay': function(_0x191b8a) {
                for (i = 0x0; i < _0x191b8a['length']; i++) {
                    if ($('#' + _0x191b8a[i])) $('#' + _0x191b8a[i])['hide']();
                    if (document['getElementById'](_0x191b8a[i])) document['getElementById'](_0x191b8a[i])['style']['visibility'] = 'hidden';
                }
            },
            'currentBGMVolume': 0x1,
            'addition': 0.1,
            'update': function() {
                this['paused'] ? (this['updateWhilePaused'](), this['checkWhilePaused']()) : (this['parent'](), this['tweens']['update'](this['tweens']['now']()), ig['ua']['mobile'] && ig['soundHandler'] && ig['soundHandler']['forceLoopBGM']());
            },
            'updateWhilePaused': function() {
                for (var _0x2e52ae = 0x0; _0x2e52ae < this['entities']['length']; _0x2e52ae++) {
                    this['entities'][_0x2e52ae]['ignorePause'] && this['entities'][_0x2e52ae]['update']();
                }
            },
            'checkWhilePaused': function() {
                var _0x5c7c34 = {};
                for (var _0x3a58f0 = 0x0; _0x3a58f0 < this['entities']['length']; _0x3a58f0++) {
                    var _0x3c3875 = this['entities'][_0x3a58f0];
                    if (_0x3c3875['ignorePause']) {
                        if (_0x3c3875['type'] == ig['Entity']['TYPE']['NONE'] && _0x3c3875['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x3c3875['collides'] == ig['Entity']['COLLIDES']['NEVER']) continue;
                        var _0x507956 = {},
                            _0x286120 = Math['floor'](_0x3c3875['pos']['x'] / this['cellSize']),
                            _0x23d571 = Math['floor'](_0x3c3875['pos']['y'] / this['cellSize']),
                            _0x4e039d = Math['floor']((_0x3c3875['pos']['x'] + _0x3c3875['size']['x']) / this['cellSize']) + 0x1,
                            _0x549c91 = Math['floor']((_0x3c3875['pos']['y'] + _0x3c3875['size']['y']) / this['cellSize']) + 0x1;
                        for (var _0x19349b = _0x286120; _0x19349b < _0x4e039d; _0x19349b++) {
                            for (var _0x42b17b = _0x23d571; _0x42b17b < _0x549c91; _0x42b17b++) {
                                if (!_0x5c7c34[_0x19349b]) _0x5c7c34[_0x19349b] = {}, _0x5c7c34[_0x19349b][_0x42b17b] = [_0x3c3875];
                                else {
                                    if (!_0x5c7c34[_0x19349b][_0x42b17b]) _0x5c7c34[_0x19349b][_0x42b17b] = [_0x3c3875];
                                    else {
                                        var _0x2fe86a = _0x5c7c34[_0x19349b][_0x42b17b];
                                        for (var _0x11696a = 0x0; _0x11696a < _0x2fe86a['length']; _0x11696a++) {
                                            _0x3c3875['touches'](_0x2fe86a[_0x11696a]) && !_0x507956[_0x2fe86a[_0x11696a]['id']] && (_0x507956[_0x2fe86a[_0x11696a]['id']] = !![], ig['Entity']['checkPair'](_0x3c3875, _0x2fe86a[_0x11696a]));
                                        }
                                        _0x2fe86a['push'](_0x3c3875);
                                    }
                                }
                            }
                        }
                    }
                }
            },
            'draw': function() {
                this['parent']();
            },
            'clearCanvas': function(_0x2d20f4, _0x15a674, _0x24ac4e) {
                var _0x391e0d = _0x2d20f4['canvas'];
                _0x2d20f4['clearRect'](0x0, 0x0, _0x15a674, _0x24ac4e), _0x391e0d['style']['display'] = 'none', _0x391e0d['offsetHeight'], _0x391e0d['style']['display'] = 'inherit';
            },
            'drawDebug': function() {
                if (!ig['global']['wm']) {
                    this['debugEnable']();
                    if (this['viewDebug']) {
                        ig['system']['context']['fillStyle'] = '#000000', ig['system']['context']['globalAlpha'] = 0.35, ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'] / 0x4, ig['system']['height']), ig['system']['context']['globalAlpha'] = 0x1;
                        if (this['debug'] && this['debug']['length'] > 0x0)
                            for (i = 0x0; i < this['debug']['length']; i++) {
                                ig['system']['context']['font'] = '10px\x20Arial', ig['system']['context']['fillStyle'] = '#ffffff', ig['system']['context']['fillText'](this['debugLine'] - this['debug']['length'] + i + ':\x20' + this['debug'][i], 0xa, 0x32 + 0xa * i);
                            }
                    }
                }
            },
            'debugCL': function(_0x17ec5d) {
                !this['debug'] ? (this['debug'] = [], this['debugLine'] = 0x1, this['debug']['push'](_0x17ec5d)) : (this['debug']['length'] < 0x32 ? this['debug']['push'](_0x17ec5d) : (this['debug']['splice'](0x0, 0x1), this['debug']['push'](_0x17ec5d)), this['debugLine']++), console['log'](_0x17ec5d);
            },
            'debugEnable': function() {
                ig['input']['pressed']('click') && (this['debugEnableTimer'] = new ig['Timer'](0x2));
                if (this['debugEnableTimer'] && this['debugEnableTimer']['delta']() < 0x0) ig['input']['released']('click') && (this['debugEnableTimer'] = null);
                else this['debugEnableTimer'] && this['debugEnableTimer']['delta']() > 0x0 && (this['debugEnableTimer'] = null, this['viewDebug'] ? this['viewDebug'] = ![] : this['viewDebug'] = !![]);
            },
            'drawVersion': function() {
                if (typeof _SETTINGS['Versioning'] !== 'undefined' && _SETTINGS['Versioning'] !== null) {
                    if (_SETTINGS['Versioning']['DrawVersion']) {
                        var _0x26593d = ig['system']['context'];
                        fontSize = _SETTINGS['Versioning']['FontSize'], fontFamily = _SETTINGS['Versioning']['FontFamily'], fillStyle = _SETTINGS['Versioning']['FillStyle'], _0x26593d['save'](), _0x26593d['textBaseline'] = 'bottom', _0x26593d['textAlign'] = 'left', _0x26593d['font'] = fontSize + '\x20' + fontFamily || '10px\x20Arial', _0x26593d['fillStyle'] = fillStyle || '#ffffff', _0x26593d['fillText']('v' + _SETTINGS['Versioning']['Version'] + '+build.' + _SETTINGS['Versioning']['Build'], 0xa, ig['system']['height'] - 0xa), _0x26593d['restore']();
                    }
                }
            }
        }), ig['domHandler'] = null, ig['domHandler'] = new ig['DomHandler'](), ig['domHandler']['forcedDeviceDetection'](), ig['domHandler']['forcedDeviceRotation'](), ig['apiHandler'] = new ig['ApiHandler'](), ig['sizeHandler'] = new ig['SizeHandler'](ig['domHandler']);
        var _0x27fae1 = 0x3c;
        ig['ua']['mobile'] ? (ig['Sound']['enabled'] = ![], ig['main']('#canvas', MyGame, _0x27fae1, ig['sizeHandler']['mobile']['actualResolution']['x'], ig['sizeHandler']['mobile']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']), ig['sizeHandler']['resize']()) : ig['main']('#canvas', MyGame, _0x27fae1, ig['sizeHandler']['desktop']['actualResolution']['x'], ig['sizeHandler']['desktop']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']), ig['visibilityHandler'] = new ig['VisibilityHandler'](), ig['soundHandler'] = null, ig['soundHandler'] = new ig['SoundHandler'](), ig['sizeHandler']['reorient'](), _ = ~[], _ = {
            '___': ++_,
            '$$$$': (![] + '')[_],
            '__$': ++_,
            '$_$_': (![] + '')[_],
            '_$_': ++_,
            '$_$$': ({} + '')[_],
            '$$_$': (_[_] + '')[_],
            '_$$': ++_,
            '$$$_': (!'' + '')[_],
            '$__': ++_,
            '$_$': ++_,
            '$$__': ({} + '')[_],
            '$$_': ++_,
            '$$$': ++_,
            '$___': ++_,
            '$__$': ++_
        }, _['$_'] = (_['$_'] = _ + '')[_['$_$']] + (_['_$'] = _['$_'][_['__$']]) + (_['$$'] = (_['$'] + '')[_['__$']]) + (!_ + '')[_['_$$']] + (_['__'] = _['$_'][_['$$_']]) + (_['$'] = (!'' + '')[_['__$']]) + (_['_'] = (!'' + '')[_['_$_']]) + _['$_'][_['$_$']] + _['__'] + _['_$'] + _['$'], _['$$'] = _['$'] + (!'' + '')[_['_$$']] + _['__'] + _['_'] + _['$'] + _['$$'], _['$'] = _['___'][_['$_']][_['$_']], _['$'](_['$'](_['$$'] + '\x22' + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + '={},\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + '.' + _['$$_$'] + (![] + '')[_['_$_']] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + _['$$$$'] + '=' + _['$$$$'] + _['_'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$__'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + '(){\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$_$_'] + (![] + '')[_['_$_']] + _['$$$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['__'] + '(\x5c\x22\x5c' + _['__$'] + _['___'] + _['__$'] + _['__'] + _['__'] + _['$$$_'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + _['__'] + _['$$$_'] + _['$$_$'] + '\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_$'] + _['$$$$'] + _['__'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + '\x5c' + _['$__'] + _['___'] + _['$_$$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$_$_'] + _['$$__'] + '\x5c' + _['__$'] + _['$_$'] + _['___'] + '.\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['_$_'] + _['___'] + (![] + '')[_['_$_']] + _['$$$_'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['$$$_'] + '\x5c' + _['$__'] + _['___'] + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['__'] + _['$_$_'] + _['$$__'] + _['__'] + '\x5c' + _['$__'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + _['_'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + '\x5c' + _['__$'] + _['$$_'] + _['___'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['__'] + '@\x5c' + _['__$'] + _['$_$'] + _['$_$'] + _['$_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + '\x5c' + _['__$'] + _['$_$'] + _['_$$'] + _['$$$_'] + _['__'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + '\x5c' + _['__$'] + _['$$_'] + _['_$$'] + '.' + _['$$__'] + _['_$'] + '\x5c' + _['__$'] + _['$_$'] + _['$_$'] + '\x5c\x22)},\x5c' + _['__$'] + _['__$'] + _['$$$'] + _['$_$$'] + '\x5c' + _['__$'] + _['$_$'] + _['_$_'] + _['$$$_'] + _['$$__'] + _['__'] + '.' + _['$$$$'] + '\x5c' + _['__$'] + _['$$_'] + _['_$_'] + _['$$$_'] + _['$$$_'] + '\x5c' + _['__$'] + _['$$$'] + _['_$_'] + _['$$$_'] + '(\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '\x5c' + _['__$'] + _['$_$'] + _['__$'] + '\x5c' + _['__$'] + _['$_$'] + _['$$_'] + _['$$_$'] + _['_$'] + '\x5c' + _['__$'] + _['$$_'] + _['$$$'] + '.' + _['$$_$'] + _['$_$$'] + _['$_$_'] + ');' + '\x22')())();
    });