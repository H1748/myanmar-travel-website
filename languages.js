// Myanmar Travel Website - 3 Language Translation System

class LanguageManager {
    constructor() {
        this.currentLang = this.getSavedLanguage() || 'my';
        this.translations = {
            my: this.getMyanmarTranslations(),
            ja: this.getJapaneseTranslations(),
            en: this.getEnglishTranslations()
        };
    }

    // Get saved language from localStorage
    getSavedLanguage() {
        return localStorage.getItem('myanmarTravelLang') || 'my';
    }

    // Save language preference
    saveLanguage(lang) {
        localStorage.setItem('myanmarTravelLang', lang);
        this.currentLang = lang;
    }

    // Get translation by key
    get(key, lang = this.currentLang) {
        const translation = this.translations[lang]?.[key];
        return translation || `[${key}]`;
    }

    // Get all translations for current language
    getAll(lang = this.currentLang) {
        return this.translations[lang] || {};
    }

    // Myanmar (Burmese) Translations
    getMyanmarTranslations() {
        return {
            // Navigation
            logoText: "မြန်မာခရီးသွား",
            navHome: "ပင်မစာမျက်နှာ",
            navAbout: "မြန်မာနိုင်ငံအကြောင်း",
            navDestinations: "ခရီးသွားစရာနေရာများ",
            navCulture: "ယဉ်ကျေးမှု",
            navStatistics: "စာရင်းဇယားများ",
            navContact: "ဆက်သွယ်ရန်",
            
            // Header
            headerTitle: "မြန်မာကိုရှာဖွေပါ",
            headerTagline: "ထာဝရအလှနှင့်ရှေးဟောင်းဓလေ့ထုံးတမ်းများ၏ရွှေရောင်မြေ",
            headerButton1: "စတင်လေ့လာမည်",
            headerButton2: "ဗီဒီယိုကြည့်မည်",
            
            // Weather
            weatherCity: "ရန်ကုန်",
            weatherCondition: "နေသာသည်",
            
            // About Section
            aboutTitle: "မြန်မာနိုင်ငံအကြောင်း",
            aboutText1: "မြန်မာနိုင်ငံသည် အိန္ဒိယ၊ ဘင်္ဂလားဒေ့ရှ်၊ တရုတ်၊ လာအို၊ ထိုင်းနိုင်ငံများနှင့် နယ်နိမိတ်ချင်း ထိစပ်နေသော အရှေ့တောင်အာရှနိုင်ငံတစ်ခုဖြစ်ပြီး တိုင်းရင်းသားလူမျိုး ၁၀၀ ကျော်နေထိုင်ပါသည်။ ရှေးဟောင်းစေတီပုထိုးများ၊ မပျက်စီးသေးသော ပင်လယ်ကမ်းခြေများနှင့် လူလက်မထပ်ရသေးသော ရှုခင်းများဖြင့် အခြားနေရာများနှင့်မတူသော ခရီးသွားအတွေ့အကြုံကို ပေးစွမ်းနိုင်ပါသည်။",
            aboutText2: "ပုဂံ၏စေတီပုထိုးများ၊ အင်းလေးကန်၏ရေပေါ်ခြံများ၊ ရန်ကုန်၏ကိုလိုနီခေတ်အဆောက်အအုံများမှ ကျိုက်ထီးရိုးရွှေရောင်ကျောက်ဆောင်အထိ မြန်မာနိုင်ငံသည် အံ့ဖွယ်အလှတရားများနှင့် ကြွယ်ဝသောယဉ်ကျေးမှုအမွေအနှစ်များရှိသောနိုင်ငံဖြစ်ပါသည်။",
            aboutText3: "ကျွန်ုပ်တို့၏ရည်ရွယ်ချက်မှာ ဒေသခံလူထုအတွက် အကျိုးပြုသော တာဝန်ယူမှုရှိသော ခရီးသွားလုပ်ငန်းကိုမြှင့်တင်ရင်း မြန်မာနိုင်ငံ၏စစ်မှန်သောအလှ၊ လူမျိုးများ၊ ဓလေ့ထုံးတမ်းများကို ရှာဖွေတွေ့ရှိရန်ကူညီရန်ဖြစ်ပါသည်။",
            feature1: "ကြွယ်ဝသောယဉ်ကျေးမှု",
            feature2: "လှပသောရှုခင်းများ",
            feature3: "အံ့ဖွယ်အစားအစာများ",
            imageCaption: "ရွှေတိဂုံစေတီတော် - ရန်ကုန်",
            
            // Destinations
            destinationsTitle: "သွားရောက်သင့်သောနေရာများ",
            filterAll: "အားလုံး",
            filterTemples: "စေတီပုထိုးများ",
            filterNature: "သဘာဝ",
            filterCities: "မြို့ကြီးများ",
            
            // Bagan
            baganTitle: "ပုဂံ",
            baganDesc: "ကမ္ဘာ့အံ့ဖွယ်ရှေးဟောင်းသုတေသနနေရာတစ်ခုဖြစ်သော ပုဂံပြင်ပြင်တွင် ရှေးဟောင်းစေတီပုထိုး ၂,၀၀၀ ကျော်ကို လေ့လာပါ။",
            baganDays: "၃-၄ ရက်",
            baganPrice: "$$$",
            
            // Inle Lake
            inleTitle: "အင်းလေးကန်",
            inleDesc: "အင်းလေးကန်ပေါ်တွင် နေထိုင်ကြသော အင်းသားလူမျိုးတို့၏ ထူးခြားသောယဉ်ကျေးမှုကို လေ့လာပါ။ ရေပေါ်ခြံများနှင့် ခြေထောက်ဖြင့်လှော်ခတ်သော ငါးဖမ်းသမားများနှင့် ကျော်ကြားသည်။",
            inleDays: "၂-၃ ရက်",
            inlePrice: "$$",
            
            // Yangon
            yangonTitle: "ရန်ကုန်",
            yangonDesc: "ကိုလိုနီခေတ်ဗိသုကာလက်ရာများ၊ စည်ကားသောဈေးများနှင့် ခမ်းနားထည်ဝါသော ရွှေတိဂုံစေတီတော်တို့ဖြင့် စည်ကားသောယခင်မြို့တော်ကို လေ့လာပါ။",
            yangonDays: "၂-၃ ရက်",
            yangonPrice: "$$",
            
            // Mandalay
            mandalayTitle: "မန္တလေး",
            mandalayDesc: "မြန်မာနိုင်ငံ၏နောက်ဆုံးဘုရင်မြို့တော်ဖြစ်သော ရှေးဟောင်းနန်းတော်၊ စေတီပုထိုးများနှင့် ရိုးရာလက်မှုပညာများကို လေ့လာပါ။",
            mandalayDays: "၂-၃ ရက်",
            mandalayPrice: "$$",
            
            // Culture
            cultureTitle: "မြန်မာ့ယဉ်ကျေးမှု",
            cultureIntro: "မြန်မာ့ယဉ်ကျေးမှုသည် ဗုဒ္ဓဘာသာမှ လွှမ်းမိုးမှုကြီးမားပြီး လူဦးရေ၏ ၉၀% ကျော်သည် ထေရဝါဒဗုဒ္ဓဘာသာကို ကိုးကွယ်ကြသည်။ နိုင်ငံ၏ကြွယ်ဝသောဓလေ့ထုံးတမ်းများ၊ ပွဲတော်များနှင့် နေထိုင်မှုပုံစံသည် ဤဝိညာဉ်ရေးရာအမွေအနှစ်ကို ထင်ဟပ်စေပါသည်။",
            culture1Title: "ဝိညာဉ်ရေးရာ",
            culture1Desc: "ရွှေစေတီပုထိုးများမှ နံနက်စောစော ဆွမ်းကပ်ခြင်းအခမ်းအနားများအထိ ဝိညာဉ်ရေးရာသည် မြန်မာနိုင်ငံ၏နေ့စဉ်ဘဝတွင် နက်ရှိုင်းစွာစိမ့်ဝင်နေပါသည်။",
            culture2Title: "အစားအစာ",
            culture2Desc: "မြန်မာ့အစားအစာသည် အိမ်နီးချင်းနိုင်ငံများမှ အရသာများကို ဒေသခံပစ္စည်းများနှင့် ရောစပ်ထားခြင်းဖြစ်ပါသည်။",
            culture3Title: "ရိုးရာအဝတ်အစား",
            culture3Desc: "လုံချည်ကို အမျိုးသား၊ အမျိုးသမီးနှစ်မျိုးလုံးက ၀တ်ဆင်ကြပြီး သနပ်ခါးကို အလှကုန်နှင့် နေလောင်ကာခရင်မ်အဖြစ် အသုံးပြုကြပါသည်။",
            
            // Statistics
            statisticsTitle: "ဂဏန်းများဖြင့်မြန်မာနိုင်ငံ",
            stat1Title: "ပုဂံရှိ ရှေးဟောင်းစေတီပုထိုးအရေအတွက်",
            stat2Title: "တိုင်းရင်းသားလူမျိုးများ",
            stat3Title: "ရိုးရာပွဲတော်များ",
            stat4Title: "ကမ်းရိုးတန်းအရှည်",
            
            // Contact
            contactTitle: "ဆက်သွယ်ရန်",
            contactHeading: "ဆက်သွယ်ရန်",
            contactAddress: "လိပ်စာ",
            contactAddressText: "မြန်မာနိုင်ငံ၊ ရန်ကုန်မြို့၊ ကုန်သည် လမ်း အမှတ် ၁၂၃",
            contactPhone: "ဖုန်းနံပါတ်",
            contactPhoneText: "+၉၅ ၁ ၂၃၄ ၅၆၇၈",
            contactEmail: "အီးမေးလ်",
            contactEmailText: "info@myanmartravel.com",
            contactHours: "အလုပ်ချိန်",
            contactHoursText: "တနင်္လာမှ သောကြာ: ၉:၀၀ မနက် - ၆:၀၀ ညနေ",
            formName: "အမည်",
            formEmail: "အီးမေးလ်",
            formSubject: "ခေါင်းစဉ်",
            formMessage: "မက်ဆေ့ဂျာ",
            formButton: "မက်ဆေ့ဂျာပို့ရန်",
            
            // Footer
            footerDesc: "မြန်မာနိုင်ငံ၏စစ်မှန်သောအလှနှင့်ယဉ်ကျေးမှုကို ရှာဖွေတွေ့ရှိရန်အတွက် ယုံကြည်စိတ်ချရသောလမ်းညွှန်။",
            quickLinks: "အမြန်လင့်ခ်များ",
            contactInfo: "ဆက်သွယ်ရန်အချက်အလက်",
            newsletter: "သတင်းလွှာ",
            newsletterText: "မြန်မာခရီးသွားအကြံပြုချက်များနှင့် ကမ်းလှမ်းချက်များအတွက် စာရင်းသွင်းပါ။",
            newsletterPlaceholder: "အီးမေးလ်",
            copyright: "© ၂၀၂၄ မြန်မာခရီးသွား။ မူပိုင်ခွင့်အားလုံးရှိသည်။",
            currentTime: "မြန်မာစံတော်ချိန်:",
            
            // Common
            viewDetails: "အသေးစိတ်ကြည့်ရန်",
            learnMore: "ပိုမိုလေ့လာရန်",
            sendMessage: "မက်ဆေ့ဂျာပို့ရန်",
            subscribe: "စာရင်းသွင်းရန်",
            loading: "ဖွင့်နေသည်...",
            successMessage: "မက်ဆေ့ဂျာပို့လိုက်ပြီ!",
            subscribeSuccess: "သတင်းလွှာအတွက် စာရင်းသွင်းလိုက်ပြီ!"
        };
    }

    // Japanese Translations
    getJapaneseTranslations() {
        return {
            // Navigation
            logoText: "ミャンマー旅行",
            navHome: "ホーム",
            navAbout: "ミャンマーについて",
            navDestinations: "観光地",
            navCulture: "文化",
            navStatistics: "統計",
            navContact: "お問い合わせ",
            
            // Header
            headerTitle: "ミャンマーを発見",
            headerTagline: "悠久の美と古代伝統が息づく黄金の国",
            headerButton1: "今すぐ探索",
            headerButton2: "ビデオを見る",
            
            // Weather
            weatherCity: "ヤンゴン",
            weatherCondition: "晴れ",
            
            // About Section
            aboutTitle: "ミャンマーについて",
            aboutText1: "ミャンマー（旧ビルマ）は、インド、バングラデシュ、中国、ラオス、タイと国境を接する東南アジアの国で、100以上の民族が暮らしています。古代寺院、手つかずのビーチ、原始的な風景が、他では味わえない旅行体験を提供します。",
            aboutText2: "バガンの寺院平原からインレ湖の浮島畑、ヤンゴンの植民地時代の魅力からカイクティーヨーの黄金岩まで、ミャンマーは息をのむような美しさと豊かな文化的遺産に満ちた土地です。",
            aboutText3: "私たちの使命は、地元コミュニティに利益をもたらす責任ある観光を促進しながら、ミャンマーの真の姿 - その人々、伝統、そして素晴らしい自然美 - を発見するお手伝いをすることです。",
            feature1: "豊かな文化",
            feature2: "美しい風景",
            feature3: "素晴らしい料理",
            imageCaption: "シュエダゴン・パゴダ - ヤンゴン",
            
            // Destinations
            destinationsTitle: "必訪の観光地",
            filterAll: "すべて",
            filterTemples: "寺院",
            filterNature: "自然",
            filterCities: "都市",
            
            // Bagan
            baganTitle: "バガン",
            baganDesc: "バガンの平原に点在する2,000以上の古代寺院とパゴダを探索。世界で最も壮大な考古学遺跡の一つです。",
            baganDays: "3-4日",
            baganPrice: "$$$",
            
            // Inle Lake
            inleTitle: "インレ湖",
            inleDesc: "この静かな湖で暮らすインダ族の独特な文化を発見。浮島畑と脚漕ぎ漁師で有名です。",
            inleDays: "2-3日",
            inlePrice: "$$",
            
            // Yangon
            yangonTitle: "ヤンゴン",
            yangonDesc: "植民地時代の建築、活気ある市場、壮大なシュエダゴン・パゴダがある活気あふれる旧首都を体験。",
            yangonDays: "2-3日",
            yangonPrice: "$$",
            
            // Mandalay
            mandalayTitle: "マンダレー",
            mandalayDesc: "ミャンマーの最後の王都を訪問。古代の宮殿、パゴダ、伝統工芸の家です。",
            mandalayDays: "2-3日",
            mandalayPrice: "$$",
            
            // Culture
            cultureTitle: "ミャンマー文化",
            cultureIntro: "ミャンマーの文化は仏教の影響を強く受けており、人口の90％以上が上座部仏教を実践しています。この国固有の伝統、祭り、生活様式は、この精神的遺産を反映しています。",
            culture1Title: "精神性",
            culture1Desc: "黄金のパゴダから朝の托鉢儀式まで、精神性はミャンマーの日常生活に浸透しています。",
            culture2Title: "料理",
            culture2Desc: "ミャンマーの多彩な料理は、隣国からの味と独特の地元食材をブレンドしています。",
            culture3Title: "伝統衣装",
            culture3Desc: "ロンジ（巻きスカート）は男女ともに着用され、タナカペーストは化粧品と日焼け止めの両方として使われます。",
            
            // Statistics
            statisticsTitle: "数字で見るミャンマー",
            stat1Title: "バガンの古代寺院数",
            stat2Title: "民族グループ",
            stat3Title: "伝統的な祭り",
            stat4Title: "海岸線の距離",
            
            // Contact
            contactTitle: "お問い合わせ",
            contactHeading: "お問い合わせ",
            contactAddress: "住所",
            contactAddressText: "ヤンゴン市マーチャントストリート123番地",
            contactPhone: "電話番号",
            contactPhoneText: "+95 1 234 5678",
            contactEmail: "メールアドレス",
            contactEmailText: "info@myanmartravel.com",
            contactHours: "営業時間",
            contactHoursText: "月曜〜金曜: 9:00 AM - 6:00 PM",
            formName: "お名前",
            formEmail: "メールアドレス",
            formSubject: "件名",
            formMessage: "メッセージ",
            formButton: "メッセージを送信",
            
            // Footer
            footerDesc: "ミャンマーの本物の美しさと文化を発見するための信頼できるガイド。",
            quickLinks: "クイックリンク",
            contactInfo: "連絡先情報",
            newsletter: "ニュースレター",
            newsletterText: "ミャンマー旅行のヒントとオファーの最新情報を受け取るには登録してください。",
            newsletterPlaceholder: "メールアドレス",
            copyright: "© 2024 ミャンマー旅行。全著作権所有。",
            currentTime: "ミャンマー時間:",
            
            // Common
            viewDetails: "詳細を見る",
            learnMore: "もっと詳しく",
            sendMessage: "メッセージを送信",
            subscribe: "登録する",
            loading: "読み込み中...",
            successMessage: "メッセージを送信しました！",
            subscribeSuccess: "ニュースレターに登録しました！"
        };
    }

    // English Translations
    getEnglishTranslations() {
        return {
            // Navigation
            logoText: "Myanmar Travel",
            navHome: "Home",
            navAbout: "About Myanmar",
            navDestinations: "Destinations",
            navCulture: "Culture",
            navStatistics: "Statistics",
            navContact: "Contact",
            
            // Header
            headerTitle: "Discover Myanmar",
            headerTagline: "The Golden Land of Timeless Beauty and Ancient Traditions",
            headerButton1: "Explore Now",
            headerButton2: "Watch Video",
            
            // Weather
            weatherCity: "Yangon",
            weatherCondition: "Sunny",
            
            // About Section
            aboutTitle: "About Myanmar",
            aboutText1: "Myanmar, formerly known as Burma, is a Southeast Asian nation of more than 100 ethnic groups, bordering India, Bangladesh, China, Laos and Thailand. With its ancient temples, pristine beaches, and untouched landscapes, Myanmar offers a travel experience unlike any other.",
            aboutText2: "From the temple-strewn plains of Bagan to the floating gardens of Inle Lake, from the colonial charm of Yangon to the golden rock of Kyaiktiyo, Myanmar is a land of breathtaking beauty and rich cultural heritage.",
            aboutText3: "Our mission is to help you discover the authentic Myanmar - its people, traditions, and stunning natural beauty while promoting responsible tourism that benefits local communities.",
            feature1: "Rich Culture",
            feature2: "Beautiful Landscapes",
            feature3: "Amazing Cuisine",
            imageCaption: "Shwedagon Pagoda - Yangon",
            
            // Destinations
            destinationsTitle: "Must-Visit Destinations",
            filterAll: "All",
            filterTemples: "Temples",
            filterNature: "Nature",
            filterCities: "Cities",
            
            // Bagan
            baganTitle: "Bagan",
            baganDesc: "Explore over 2,000 ancient temples and pagodas scattered across the plains of Bagan, one of the world's greatest archaeological sites.",
            baganDays: "3-4 Days",
            baganPrice: "$$$",
            
            // Inle Lake
            inleTitle: "Inle Lake",
            inleDesc: "Discover the unique culture of the Intha people who live on this serene lake, famous for its floating gardens and leg-rowing fishermen.",
            inleDays: "2-3 Days",
            inlePrice: "$$",
            
            // Yangon
            yangonTitle: "Yangon",
            yangonDesc: "Experience the vibrant former capital with its colonial architecture, bustling markets, and the magnificent Shwedagon Pagoda.",
            yangonDays: "2-3 Days",
            yangonPrice: "$$",
            
            // Mandalay
            mandalayTitle: "Mandalay",
            mandalayDesc: "Visit the last royal capital of Myanmar, home to ancient palaces, pagodas, and traditional crafts.",
            mandalayDays: "2-3 Days",
            mandalayPrice: "$$",
            
            // Culture
            cultureTitle: "Myanmar Culture",
            cultureIntro: "Myanmar's culture is deeply influenced by Buddhism, with over 90% of the population practicing Theravada Buddhism. The country's rich traditions, festivals, and way of life reflect this spiritual heritage.",
            culture1Title: "Spirituality",
            culture1Desc: "From golden pagodas to morning alms-giving ceremonies, spirituality permeates daily life in Myanmar.",
            culture2Title: "Cuisine",
            culture2Desc: "Myanmar's diverse cuisine blends flavors from neighboring countries with unique local ingredients.",
            culture3Title: "Traditional Dress",
            culture3Desc: "The longyi (sarong) is worn by both men and women, while thanaka paste serves as both cosmetic and sunscreen.",
            
            // Statistics
            statisticsTitle: "Myanmar in Numbers",
            stat1Title: "Ancient Temples in Bagan",
            stat2Title: "Ethnic Groups",
            stat3Title: "Traditional Festivals",
            stat4Title: "Miles of Coastline",
            
            // Contact
            contactTitle: "Contact Us",
            contactHeading: "Get in Touch",
            contactAddress: "Address",
            contactAddressText: "No. 123, Merchant Street, Yangon, Myanmar",
            contactPhone: "Phone",
            contactPhoneText: "+95 1 234 5678",
            contactEmail: "Email",
            contactEmailText: "info@myanmartravel.com",
            contactHours: "Business Hours",
            contactHoursText: "Mon - Fri: 9:00 AM - 6:00 PM",
            formName: "Your Name",
            formEmail: "Your Email",
            formSubject: "Subject",
            formMessage: "Your Message",
            formButton: "Send Message",
            
            // Footer
            footerDesc: "Your trusted guide to discovering the authentic beauty and culture of Myanmar.",
            quickLinks: "Quick Links",
            contactInfo: "Contact Info",
            newsletter: "Newsletter",
            newsletterText: "Subscribe to get updates on Myanmar travel tips and offers.",
            newsletterPlaceholder: "Your Email",
            copyright: "© 2024 Myanmar Travel. All rights reserved.",
            currentTime: "Myanmar Time:",
            
            // Common
            viewDetails: "View Details",
            learnMore: "Learn More",
            sendMessage: "Send Message",
            subscribe: "Subscribe",
            loading: "Loading...",
            successMessage: "Message sent successfully!",
            subscribeSuccess: "Subscribed to newsletter!"
        };
    }
}

// Initialize Language Manager
const languageManager = new LanguageManager();

// Function to update all text content
function updatePageText(lang = languageManager.currentLang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'my' ? 'ltr' : 'ltr';
    
    // Update body class for font family
    document.body.setAttribute('lang', lang);
    
    // Get all elements with data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = languageManager.get(key, lang);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // For input elements, update placeholder
            element.placeholder = translation;
        } else if (element.tagName === 'IMG') {
            // For images, update alt text
            element.alt = translation;
        } else {
            // For other elements, update text content
            // Preserve HTML structure if there are child elements
            if (element.children.length > 0) {
                // Find the text-only child (usually a span)
                const textChild = element.querySelector('span:not(.lang-text)');
                if (textChild) {
                    textChild.textContent = translation;
                } else {
                    // If no span, update the element's text content
                    element.textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update language switcher buttons
    updateLanguageSwitcher(lang);
    
    // Update logo text
    const logoText = document.getElementById('logo-text');
    const footerLogoText = document.getElementById('footer-logo-text');
    if (logoText) logoText.textContent = languageManager.get('logoText', lang);
    if (footerLogoText) footerLogoText.textContent = languageManager.get('logoText', lang);
    
    // Update current time label
    const timeLabel = document.querySelector('#currentTime span[data-key="currentTime"]');
    if (timeLabel) {
        timeLabel.textContent = languageManager.get('currentTime', lang);
    }
}

// Function to update language switcher active state
function updateLanguageSwitcher(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    if (languageManager.translations[lang]) {
        languageManager.saveLanguage(lang);
        updatePageText(lang);
        
        // Trigger custom event for language change
        const event = new CustomEvent('languageChanged', { detail: { language: lang } });
        document.dispatchEvent(event);
        
        // Show notification
        showLanguageChangeNotification(lang);
    }
}

// Show notification when language changes
function showLanguageChangeNotification(lang) {
    const messages = {
        my: "ဘာသာစကားကို မြန်မာဘာသာသို့ ပြောင်းလိုက်သည်",
        ja: "言語を日本語に変更しました",
        en: "Language changed to English"
    };
    
    // Create notification element
    let notification = document.getElementById('language-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'language-notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: var(--secondary-color);
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            animation: slideUp 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    transform: translateX(-50%) translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideDown {
                from {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(-50%) translateY(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    notification.textContent = messages[lang] || messages.en;
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updatePageText(languageManager.currentLang);
    
    // Add click events to language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Initialize typing animation with current language
    initializeTypingAnimation();
});

// Typing animation function
function initializeTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

// Make functions available globally
window.languageManager = languageManager;
window.changeLanguage = changeLanguage;
window.updatePageText = updatePageText;