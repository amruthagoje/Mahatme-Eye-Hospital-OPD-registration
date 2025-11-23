
export type Language = 'en' | 'hi' | 'mr';

const en = {
  header: {
    nav: {
      services: 'Services',
      about: 'About Us',
      testimonials: 'Testimonials',
      faq: 'FAQ',
    },
    register: 'Register',
    bookAppointment: 'Book Appointment',
    mobileMenu: {
      open: 'Open menu',
      register: 'Patient Registration',
      bookAppointment: 'Book Appointment',
    },
  },
  footer: {
    tagline: 'Providing comprehensive and compassionate eye care for a clearer tomorrow.',
    quickLinks: {
      title: 'Quick Links',
      services: 'Services',
      about: 'About Us',
      bookAppointment: 'Book Appointment',
      faq: 'FAQ',
      patientData: 'Patient Data',
    },
    contact: {
      title: 'Contact',
    },
    copyright: 'Mahatme Eye Hospital. All rights reserved.',
  },
  hero: {
    title: 'Clarity in Sight, Compassion in Care',
    subtitle: 'Welcome to Mahatme Eye Hospital, where advanced technology meets expert care. We are dedicated to protecting and restoring your vision.',
    cta: {
      bookAppointment: 'Book an Appointment',
      exploreServices: 'Explore Services',
    },
  },
  services: {
    title: 'Our Expert Services',
    subtitle: 'Comprehensive eye care solutions tailored to your individual needs.',
    list: {
      lasik: {
        title: 'LASIK & Refractive Surgery',
        description: 'Experience life without glasses. Our advanced laser vision correction procedures are safe, quick, and effective.',
      },
      retina: {
        title: 'Retina & Vitreous Surgery',
        description: 'Expert care for complex retinal conditions, including diabetic retinopathy, macular degeneration, and retinal detachments.',
      },
      pediatric: {
        title: 'Pediatric Ophthalmology',
        description: 'Gentle and specialized eye care for our youngest patients, from routine exams to complex surgical procedures.',
      },
      cosmetic: {
        title: 'Cosmetic Ophthalmology',
        description: 'Enhance your natural beauty with our range of cosmetic eye procedures, performed by skilled surgeons.',
      },
      community: {
        title: 'Community Ophthalmology',
        description: 'We are committed to serving the community through outreach programs, eye camps, and affordable care for all.',
      },
    },
    andMore: {
      title: 'And Many More...',
      description: 'We offer a full spectrum of eye care services. Contact us to learn more about how we can help you.',
    },
  },
  popularServices: {
    title: 'Popular Services',
    subtitle: 'Specialized treatments for a wide range of eye conditions.',
    list: {
        glaucoma: {
            title: 'Glaucoma'
        },
        cornea: {
            title: 'Cornea'
        },
        'retina-surgery': {
            title: 'Retina Eye Surgery'
        },
        'diabetic-retinopathy': {
            title: 'Diabetic Retinopathy'
        },
        'cataract-surgery': {
            title: 'Cataract Surgery'
        },
        lasik: {
            title: 'Lasik Eye Surgery'
        },
        'squint-eyes': {
            title: 'Squint Eyes'
        }
    }
  },
  about: {
    title: 'About Mahatme Eye Hospital',
    p1: 'Founded on the principles of integrity, innovation, and compassion, Mahatme Eye Hospital has been a beacon of hope for patients for over two decades. Our journey began with a simple mission: to provide world-class eye care that is both accessible and affordable.',
    p2: 'From a humble beginning, we have grown into a leading institution, equipped with state-of-the-art technology and a team of dedicated professionals who are leaders in their respective fields.',
    doctorName: 'Dr. Vikas Mahatme',
    doctorTitle: 'Founder & Chief Surgeon',
    doctorDescription: 'A visionary leader and a renowned ophthalmologist, Dr. Mahatme\'s work has been instrumental in shaping the landscape of eye care in the region. His dedication to patient welfare and community service is the cornerstone of our institution.',
  },
  testimonials: {
    title: 'What Our Patients Say',
    subtitle: 'Real stories from people whose lives we\'ve changed.',
    patientAltText: 'Patient',
    list: {
      t1: {
        name: 'Anjali Sharma',
        comment: "The care I received at Mahatme Eye Hospital was exceptional. The doctors are not only skilled but also incredibly compassionate. My LASIK surgery was a breeze!",
      },
      t2: {
        name: 'Rohan Verma',
        comment: "I was nervous about my son\'s eye surgery, but the pediatric team was amazing. They made us feel comfortable and confident. Highly recommended.",
      },
      t3: {
        name: 'Priya Singh',
        comment: "A truly world-class hospital. From the front desk to the surgical team, everyone was professional and caring. My vision has never been better.",
      },
    },
  },
  community: {
    title: 'Awards & Community Work',
    subtitle: 'Recognized for excellence and committed to serving society.',
    accoladesTitle: 'Our Accolades',
    accoladesDescription: 'Mahatme Eye Hospital is proud to be recognized with the National Award for Excellence in Healthcare for our pioneering work in ophthalmology and our unwavering commitment to quality patient care.',
    socialContributionsTitle: 'Social Contributions',
    socialContributionsDescription: 'Through our \'Vision for All\' initiative, we conduct free eye-checkup camps in rural areas, providing free surgeries and glasses to thousands in need every year.',
  },
  faq: {
    title: 'Intelligent FAQ',
    subtitle: 'Have a question? Ask our AI assistant or browse common queries.',
    inputPlaceholder: 'Ask about our services, appointments, etc.',
    inputAriaLabel: 'Ask a question',
    askButton: 'Ask AI',
    predefinedHint: 'Or try one of these:',
    predefinedQuestions: {
      q1: 'What services do you offer?',
      q2: 'How can I book an appointment?',
      q3: 'Who is the founder of the hospital?',
    },
    error: 'Sorry, I could not find an answer. Please try rephrasing your question.',
    loading: 'Finding an answer...',
    noQuestions: 'Your answered questions will appear here.',
  },
  registrationPage: {
    title: 'Patient Registration Form',
    description: 'Please fill out the form below to register for OPD services.',
  },
  registrationForm: {
    patientDetails: 'Patient Details',
    fullName: 'Full Name',
    fullNamePlaceholder: 'John Doe',
    age: 'Age',
    gender: 'Gender',
    genderPlaceholder: 'Select gender',
    genders: {
      male: 'Male',
      female: 'Female',
      other: 'Other',
    },
    contactInfo: 'Contact Information',
    contactNumber: 'Contact Number',
    emailOptional: 'Email Address (Optional)',
    fullAddress: 'Full Address',
    addressPlaceholder: '123 Main Street, City, State, ZIP Code',
    emergencyContact: 'Emergency Contact',
    emergencyContactName: 'Contact Person Name',
    emergencyContactNamePlaceholder: 'Jane Doe',
    emergencyContactNumber: 'Contact Person Number',
    submitButton: 'Submit Registration',
    toastSuccessTitle: 'Registration Successful',
    toastSuccessMessage: 'Thank you, {name}. Your registration has been submitted successfully.',
    toastErrorTitle: 'Registration Failed',
  },
  patientDataPage: {
    title: 'Patient Registrations',
    description: 'A list of all submitted patient registrations.',
    table: {
      tokenNumber: 'Token No.',
      fullName: 'Full Name',
      age: 'Age',
      gender: 'Gender',
      contactNumber: 'Contact Number',
      registrationDate: 'Registration Date',
      registrationTime: 'Registration Time',
    },
    noPatients: {
        title: 'No Patients Found',
        description: 'No patient registrations have been submitted yet.'
    },
    error: {
        title: 'Error Loading Patients',
        description: 'There was a problem fetching the patient data. It might be a network issue or a permission error.'
    }
  },
};

const hi: typeof en = {
  header: {
    nav: {
      services: 'सेवाएं',
      about: 'हमारे बारे में',
      testimonials: 'प्रशंसापत्र',
      faq: 'पूछे जाने वाले प्रश्न',
    },
    register: 'पंजीकरण करें',
    bookAppointment: 'अपॉइंटमेंट बुक करें',
    mobileMenu: {
      open: 'मेन्यू खोलें',
      register: 'रोगी पंजीकरण',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
    },
  },
  footer: {
    tagline: 'एक उज्जवल कल के लिए व्यापक और दयालु नेत्र देखभाल प्रदान करना।',
    quickLinks: {
      title: 'त्वरित लिंक्स',
      services: 'सेवाएं',
      about: 'हमारे बारे में',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
      faq: 'पूछे जाने वाले प्रश्न',
      patientData: 'रोगी डेटा',
    },
    contact: {
      title: 'संपर्क करें',
    },
    copyright: 'महात्मे नेत्र अस्पताल। सर्वाधिकार सुरक्षित।',
  },
  hero: {
    title: 'दृष्टि में स्पष्टता, देखभाल में करुणा',
    subtitle: 'महात्मे नेत्र अस्पताल में आपका स्वागत है, जहाँ उन्नत तकनीक विशेषज्ञ देखभाल से मिलती है। हम आपकी दृष्टि की रक्षा और उसे बहाल करने के लिए समर्पित हैं।',
    cta: {
      bookAppointment: 'अपॉइंटमेंट बुक करें',
      exploreServices: 'सेवाएं देखें',
    },
  },
  services: {
    title: 'हमारी विशेषज्ञ सेवाएं',
    subtitle: 'आपकी व्यक्तिगत जरूरतों के अनुरूप व्यापक नेत्र देखभाल समाधान।',
    list: {
      lasik: {
        title: 'लेसिक और अपवर्तक सर्जरी',
        description: 'चश्मे के बिना जीवन का अनुभव करें। हमारी उन्नत लेजर दृष्टि सुधार प्रक्रियाएं सुरक्षित, त्वरित और प्रभावी हैं।',
      },
      retina: {
        title: 'रेटिना और विट्रियस सर्जरी',
        description: 'मधुमेह संबंधी रेटिनोपैथी, धब्बेदार अध: पतन और रेटिना डिटेचमेंट सहित जटिल रेटिना स्थितियों के लिए विशेषज्ञ देखभाल।',
      },
      pediatric: {
        title: 'बाल नेत्र विज्ञान',
        description: 'हमारे सबसे छोटे रोगियों के लिए कोमल और विशेष नेत्र देखभाल, नियमित जांच से लेकर जटिल शल्य चिकित्सा प्रक्रियाओं तक।',
      },
      cosmetic: {
        title: 'कॉस्मेटिक नेत्र विज्ञान',
        description: 'कुशल सर्जनों द्वारा की जाने वाली हमारी कॉस्मेटिक नेत्र प्रक्रियाओं की श्रृंखला के साथ अपनी प्राकृतिक सुंदरता को बढ़ाएं।',
      },
      community: {
        title: 'सामुदायिक नेत्र विज्ञान',
        description: 'हम आउटरीच कार्यक्रमों, नेत्र शिविरों और सभी के लिए सस्ती देखभाल के माध्यम से समुदाय की सेवा करने के लिए प्रतिबद्ध हैं।',
      },
    },
    andMore: {
      title: 'और भी बहुत कुछ...',
      description: 'हम नेत्र देखभाल सेवाओं की एक पूरी श्रृंखला प्रदान करते हैं। हम आपकी कैसे मदद कर सकते हैं, यह जानने के लिए हमसे संपर्क करें।',
    },
 },
 popularServices: {
    title: 'लोकप्रिय सेवाएं',
    subtitle: 'आंखों की कई तरह की स्थितियों के लिए विशेष उपचार।',
    list: {
        glaucoma: {
            title: 'ग्लूकोमा'
        },
        cornea: {
            title: 'कॉर्निया'
        },
        'retina-surgery': {
            title: 'रेटिना नेत्र शल्य चिकित्सा'
        },
        'diabetic-retinopathy': {
            title: 'मधुमेह संबंधी रेटिनोपैथी'
        },
        'cataract-surgery': {
            title: 'मोतियाबिंद सर्जरी'
        },
        lasik: {
            title: 'लेसिक नेत्र शल्य चिकित्सा'
        },
        'squint-eyes': {
            title: 'तिरछी आँखें'
        }
    }
  },
  about: {
    title: 'महात्मे नेत्र अस्पताल के बारे में',
    p1: 'ईमानदारी, नवीनता और करुणा के सिद्धांतों पर स्थापित, महात्मे नेत्र अस्पताल दो दशकों से अधिक समय से रोगियों के لیے आशा की किरण रहा है। हमारी यात्रा एक सरल मिशन के साथ शुरू हुई: विश्व स्तरीय नेत्र देखभाल प्रदान करना जो सुलभ और सस्ती दोनों हो।',
    p2: 'एक विनम्र शुरुआत से, हम एक अग्रणी संस्थान के रूप में विकसित हुए हैं, जो अत्याधुनिक तकनीक और समर्पित पेशेवरों की एक टीम से सुसज्जित है जो अपने संबंधित क्षेत्रों में अग्रणी हैं।',
    doctorName: 'डॉ. विकास महात्मे',
    doctorTitle: 'संस्थापक और मुख्य सर्जन',
    doctorDescription: 'एक दूरदर्शी नेता और एक प्रसिद्ध नेत्र रोग विशेषज्ञ, डॉ. महात्मे के काम ने इस क्षेत्र में नेत्र देखभाल के परिदृश्य को आकार देने में महत्वपूर्ण भूमिका निभाई है। रोगी कल्याण और सामुदायिक सेवा के प्रति उनका समर्पण हमारे संस्थान की आधारशिला है।',
  },
  testimonials: {
    title: 'हमारे रोगी क्या कहते हैं',
    subtitle: 'उन लोगों की वास्तविक कहानियाँ जिनके जीवन को हमने बदल दिया है।',
    patientAltText: 'रोगी',
    list: {
      t1: {
        name: 'अंजलि शर्मा',
        comment: "महात्मे नेत्र अस्पताल में मुझे जो देखभाल मिली वह असाधारण थी। डॉक्टर न केवल कुशल हैं बल्कि अविश्वसनीय रूप से दयालु भी हैं। मेरी लेसिक सर्जरी बहुत आसान थी!",
      },
      t2: {
        name: 'रोहन वर्मा',
        comment: "मैं अपने बेटे की आंखों की सर्जरी को लेकर घबराया हुआ था, लेकिन बाल चिकित्सा टीम अद्भुत थी। उन्होंने हमें सहज और आत्मविश्वासी महसूस कराया। अत्यधिक अनुशंसित।",
      },
      t3: {
        name: 'प्रिया सिंह',
        comment: "वास्तव में एक विश्व स्तरीय अस्पताल। फ्रंट डेस्क से लेकर सर्जिकल टीम तक, हर कोई पेशेवर और देखभाल करने वाला था। मेरी दृष्टि कभी बेहतर नहीं रही।",
      },
    },
  },
  community: {
    title: 'पुरस्कार और सामुदायिक कार्य',
    subtitle: 'उत्कृष्टता के लिए मान्यता प्राप्त और समाज की सेवा के लिए प्रतिबद्ध।',
    accoladesTitle: 'हमारी प्रशंसा',
    accoladesDescription: 'महात्मे नेत्र अस्पताल को नेत्र विज्ञान में हमारे अग्रणी काम और गुणवत्ता रोगी देखभाल के प्रति हमारी अटूट प्रतिबद्धता के लिए स्वास्थ्य सेवा में उत्कृष्टता के लिए राष्ट्रीय पुरस्कार से सम्मानित होने पर गर्व है।',
    socialContributionsTitle: 'सामाजिक योगदान',
    socialContributionsDescription: 'हमारी \'सभी के लिए दृष्टि\' पहल के माध्यम से, हम ग्रामीण क्षेत्रों में मुफ्त नेत्र जांच शिविर आयोजित करते हैं, हर साल हजारों जरूरतमंदों को मुफ्त सर्जरी और चश्मा प्रदान करते हैं।',
  },
  faq: {
    title: 'बुद्धिमान FAQ',
    subtitle: 'कोई सवाल है? हमारे AI सहायक से पूछें या सामान्य प्रश्नों को ब्राउज़ करें।',
    inputPlaceholder: 'हमारी सेवाओं, नियुक्तियों आदि के बारे में पूछें।',
    inputAriaLabel: 'एक प्रश्न पूछें',
    askButton: 'AI से पूछें',
    predefinedHint: 'या इनमें से किसी एक को आजमाएं:',
    predefinedQuestions: {
      q1: 'आप कौन सी सेवाएं प्रदान करते हैं?',
      q2: 'मैं अपॉइंटमेंट कैसे बुक कर सकता हूं?',
      q3: 'अस्पताल के संस्थापक कौन हैं?',
    },
    error: 'क्षमा करें, मुझे कोई उत्तर नहीं मिला। कृपया अपने प्रश्न को फिर से लिखने का प्रयास करें।',
    loading: 'उत्तर खोजा जा रहा है...',
    noQuestions: 'आपके उत्तर दिए गए प्रश्न यहां दिखाई देंगे।',
  },
  registrationPage: {
    title: 'रोगी पंजीकरण फॉर्म',
    description: 'ओपीडी सेवाओं के लिए पंजीकरण करने के लिए कृपया नीचे दिया गया फॉर्म भरें।',
  },
  registrationForm: {
    patientDetails: 'रोगी का विवरण',
    fullName: 'पूरा नाम',
    fullNamePlaceholder: 'जॉन डो',
    age: 'आयु',
    gender: 'लिंग',
    genderPlaceholder: 'लिंग चुनें',
    genders: {
      male: 'पुरुष',
      female: 'महिला',
      other: 'अन्य',
    },
    contactInfo: 'संपर्क जानकारी',
    contactNumber: 'संपर्क नंबर',
    emailOptional: 'ईमेल पता (वैकल्पिक)',
    fullAddress: 'पूरा पता',
    addressPlaceholder: '123 मेन स्ट्रीट, शहर, राज्य, ज़िप कोड',
    emergencyContact: 'आपातकालीन संपर्क',
    emergencyContactName: 'संपर्क व्यक्ति का नाम',
    emergencyContactNamePlaceholder: 'जेन डो',
    emergencyContactNumber: 'संपर्क व्यक्ति का नंबर',
    submitButton: 'पंजीकरण जमा करें',
    toastSuccessTitle: 'पंजीकरण सफल',
    toastSuccessMessage: 'धन्यवाद, {name}। आपका पंजीकरण सफलतापूर्वक जमा हो गया है।',
    toastErrorTitle: 'पंजीकरण विफल',
  },
  patientDataPage: {
    title: 'रोगी पंजीकरण',
    description: 'सभी प्रस्तुत रोगी पंजीकरणों की एक सूची।',
    table: {
      tokenNumber: 'टोकन नंबर',
      fullName: 'पूरा नाम',
      age: 'आयु',
      gender: 'लिंग',
      contactNumber: 'संपर्क नंबर',
      registrationDate: 'पंजीकरण दिनांक',
      registrationTime: 'पंजीकरण समय',
    },
    noPatients: {
        title: 'कोई रोगी नहीं मिला',
        description: 'अभी तक कोई रोगी पंजीकरण जमा नहीं किया गया है।'
    },
    error: {
        title: 'रोगियों को लोड करने में त्रुटि',
        description: 'रोगी डेटा लाने में कोई समस्या थी। यह एक नेटवर्क समस्या या अनुमति त्रुटि हो सकती है।'
    }
  },
};

const mr: typeof en = {
  header: {
    nav: {
      services: 'सेवा',
      about: 'आमच्याबद्दल',
      testimonials: 'अभिप्राय',
      faq: 'सामान्य प्रश्न',
    },
    register: 'नोंदणी करा',
    bookAppointment: 'अपॉइंटमेंट बुक करा',
    mobileMenu: {
      open: 'मेनू उघडा',
      register: 'रुग्ण नोंदणी',
      bookAppointment: 'अपॉइंटमेंट बुक करा',
    },
  },
  footer: {
    tagline: 'उज्ज्वल उद्यासाठी व्यापक आणि दयाळू नेत्रसेवा प्रदान करणे.',
    quickLinks: {
      title: 'द्रुत दुवे',
      services: 'सेवा',
      about: 'आमच्याबद्दल',
      bookAppointment: 'अपॉइंटमेंट बुक करा',
      faq: 'सामान्य प्रश्न',
      patientData: 'रुग्ण डेटा',
    },
    contact: {
      title: 'संपर्क',
    },
    copyright: 'महात्मे नेत्र रुग्णालय. सर्व हक्क राखीव.',
  },
  hero: {
    title: 'दृष्टीमध्ये स्पष्टता, सेवेमध्ये करुणा',
    subtitle: 'महात्मे नेत्र रुग्णालयात आपले स्वागत आहे, जिथे प्रगत तंत्रज्ञान आणि तज्ञ सेवा एकत्र येतात. आम्ही तुमच्या दृष्टीचे रक्षण आणि पुनर्संचयित करण्यासाठी समर्पित आहोत.',
    cta: {
      bookAppointment: 'अपॉइंटमेंट बुक करा',
      exploreServices: 'सेवा एक्सप्लोर करा',
    },
  },
  services: {
    title: 'आमच्या तज्ञ सेवा',
    subtitle: 'तुमच्या वैयक्तिक गरजांनुसार सर्वसमावेशक नेत्रसेवा उपाय.',
    list: {
      lasik: {
        title: 'लॅसिक आणि रिफ्रॅक्टिव्ह सर्जरी',
        description: 'चष्म्याशिवाय जीवनाचा अनुभव घ्या. आमच्या प्रगत लेझर दृष्टी सुधारणा प्रक्रिया सुरक्षित, जलद आणि प्रभावी आहेत.',
      },
      retina: {
        title: 'रेटिना आणि विट्रियस सर्जरी',
        description: 'डायबेटिक रेटिनोपॅथी, मॅक्युलर डिजेनेरेशन आणि रेटिनल डिटेचमेंटसह जटिल रेटिनल स्थितींसाठी तज्ञ सेवा.',
      },
      pediatric: {
        title: 'बालरोग नेत्रविज्ञान',
        description: 'आमच्या सर्वात लहान रुग्णांसाठी नियमित तपासणीपासून ते जटिल शस्त्रक्रिया प्रक्रियेपर्यंत सौम्य आणि विशेष नेत्रसेवा.',
      },
      cosmetic: {
        title: 'कॉस्मेटिक नेत्रविज्ञान',
        description: 'कुशल शल्यचिकित्सकांद्वारे केल्या जाणाऱ्या आमच्या कॉस्मेटिक नेत्र प्रक्रियेच्या श्रेणीसह तुमचे नैसर्गिक सौंदर्य वाढवा.',
      },
      community: {
        title: 'सामाजिक नेत्रविज्ञान',
        description: 'आम्ही पोहोच कार्यक्रम, नेत्र शिबिरे आणि सर्वांसाठी परवडणाऱ्या सेवेद्वारे समाजाची सेवा करण्यासाठी वचनबद्ध आहोत.',
      },
    },
    andMore: {
      title: 'आणि बरेच काही...',
      description: 'आम्ही नेत्रसेवा सेवांची संपूर्ण श्रेणी ऑफर करतो. आम्ही तुम्हाला कशी मदत करू शकतो याबद्दल अधिक जाणून घेण्यासाठी आमच्याशी संपर्क साधा.',
    },
  },
  popularServices: {
    title: 'लोकप्रिय सेवा',
    subtitle: 'डोळ्यांच्या विविध परिस्थितींसाठी विशेष उपचार.',
    list: {
        glaucoma: {
            title: 'काचबिंदू'
        },
        cornea: {
            title: 'पारपटल'
        },
        'retina-surgery': {
            title: 'रेटिना नेत्र शस्त्रक्रिया'
        },
        'diabetic-retinopathy': {
            title: 'मधुमेही रेटिनोपॅथी'
        },
        'cataract-surgery': {
            title: 'मोतीबिंदू शस्त्रक्रिया'
        },
        lasik: {
            title: 'लॅसिक नेत्र शस्त्रक्रिया'
        },
        'squint-eyes': {
            title: 'तिरळे डोळे'
        }
    }
  },
  about: {
    title: 'महात्मे नेत्र रुग्णालयाबद्दल',
    p1: 'अखंडता, नावीन्य आणि करुणा या तत्त्वांवर स्थापित, महात्मे नेत्र रुग्णालय दोन दशकांहून अधिक काळापासून रुग्णांसाठी आशेचा किरण आहे. आमचा प्रवास एका साध्या ध्येयाने सुरू झाला: जागतिक दर्जाची नेत्रसेवा प्रदान करणे जी सुलभ आणि परवडणारी दोन्ही आहे.',
    p2: 'एका विनम्र सुरुवातीपासून, आम्ही एका अग्रगण्य संस्थेमध्ये वाढलो आहोत, ज्यात अत्याधुनिक तंत्रज्ञान आणि समर्पित व्यावसायिकांची एक टीम आहे जी आपापल्या क्षेत्रात अग्रणी आहेत.',
    doctorName: 'डॉ. विकास महात्मे',
    doctorTitle: 'संस्थापक आणि मुख्य शल्यचिकित्सक',
    doctorDescription: 'एक दूरदर्शी नेते आणि एक प्रख्यात नेत्ररोग तज्ञ, डॉ. महात्मे यांच्या कार्यामुळे या प्रदेशातील नेत्रसेवा क्षेत्राला आकार देण्यात महत्त्वपूर्ण भूमिका बजावली आहे. रुग्ण कल्याण आणि समाजसेवेसाठी त्यांचे समर्पण आमच्या संस्थेचा आधारस्तंभ आहे.',
  },
  testimonials: {
    title: 'आमचे रुग्ण काय म्हणतात',
    subtitle: 'ज्या लोकांचे जीवन आम्ही बदलले आहे त्यांच्या वास्तविक कथा.',
    patientAltText: 'रुग्ण',
    list: {
      t1: {
        name: 'अंजली शर्मा',
        comment: 'महात्मे नेत्र रुग्णालयात मला मिळालेली सेवा अपवादात्मक होती. डॉक्टर केवळ कुशल नाहीत तर अविश्वसनीयपणे दयाळू देखील आहेत. माझी लॅसिक शस्त्रक्रिया अगदी सोपी होती!',
      },
      t2: {
        name: 'रोहन वर्मा',
        comment: 'मी माझ्या मुलाच्या डोळ्याच्या शस्त्रक्रियेबद्दल चिंताग्रस्त होतो, परंतु बालरोग टीमने अप्रतिम काम केले. त्यांनी आम्हाला आरामदायक आणि आत्मविश्वासू वाटले. अत्यंत शिफारसीय.',
      },
      t3: {
        name: 'प्रिया सिंग',
        comment: 'खरोखरच एक जागतिक दर्जाचे रुग्णालय. फ्रंट डेस्कपासून ते शस्त्रक्रिया टीमपर्यंत, प्रत्येकजण व्यावसायिक आणि काळजी घेणारा होता. माझी दृष्टी कधीही इतकी चांगली नव्हती.',
      },
    },
  },
  community: {
    title: 'पुरस्कार आणि सामाजिक कार्य',
    subtitle: 'उत्कृष्टतेसाठी ओळखले जाणारे आणि समाजाची सेवा करण्यासाठी वचनबद्ध.',
    accoladesTitle: 'आमचे पुरस्कार',
    accoladesDescription: 'महात्मे नेत्र रुग्णालयाला नेत्रविज्ञानातील आमच्या अग्रगण्य कार्यासाठी आणि गुणवत्ता रुग्णसेवेसाठी आमच्या अतूट वचनबद्धतेसाठी आरोग्यसेवेतील उत्कृष्टतेसाठी राष्ट्रीय पुरस्काराने सन्मानित केल्याचा अभिमान आहे.',
    socialContributionsTitle: 'सामाजिक योगदान',
    socialContributionsDescription: 'आमच्या \'सर्वांसाठी दृष्टी\' उपक्रमाद्वारे, आम्ही ग्रामीण भागात मोफत नेत्र तपासणी शिबिरे आयोजित करतो, दरवर्षी हजारो गरजूंना मोफत शस्त्रक्रिया आणि चष्मे प्रदान करतो.',
  },
  faq: {
    title: 'बुद्धिमान सामान्य प्रश्न',
    subtitle: 'प्रश्न आहे? आमच्या AI सहाय्यकाला विचारा किंवा सामान्य शंका ब्राउझ करा.',
    inputPlaceholder: 'आमच्या सेवा, अपॉइंटमेंट्स इत्यादींबद्दल विचारा.',
    inputAriaLabel: 'एक प्रश्न विचारा',
    askButton: 'AI ला विचारा',
    predefinedHint: 'किंवा यापैकी एक प्रयत्न करा:',
    predefinedQuestions: {
      q1: 'तुम्ही कोणत्या सेवा ऑफर करता?',
      q2: 'मी अपॉइंटमेंट कशी बुक करू शकेन?',
      q3: 'रुग्णालयाचे संस्थापक कोण आहेत?',
    },
    error: 'क्षमस्व, मला उत्तर सापडले नाही. कृपया आपला प्रश्न पुन्हा मांडण्याचा प्रयत्न करा.',
    loading: 'उत्तर शोधत आहे...',
    noQuestions: 'तुमचे उत्तर दिलेले प्रश्न येथे दिसतील.',
  },
  registrationPage: {
    title: 'रुग्ण नोंदणी फॉर्म',
    description: 'OPD सेवांसाठी नोंदणी करण्यासाठी कृपया खालील फॉर्म भरा.',
  },
  registrationForm: {
    patientDetails: 'रुग्णाची माहिती',
    fullName: 'पूर्ण नाव',
    fullNamePlaceholder: 'जॉन डो',
    age: 'वय',
    gender: 'लिंग',
    genderPlaceholder: 'लिंग निवडा',
    genders: {
      male: 'पुरुष',
      female: 'स्त्री',
      other: 'इतर',
    },
    contactInfo: 'संपर्क माहिती',
    contactNumber: 'संपर्क क्रमांक',
    emailOptional: 'ईमेल पत्ता (ऐच्छिक)',
    fullAddress: 'पूर्ण पत्ता',
    addressPlaceholder: '१२३ मेन स्ट्रीट, शहर, राज्य, पिन कोड',
    emergencyContact: 'आपत्कालीन संपर्क',
    emergencyContactName: 'संपर्क व्यक्तीचे नाव',
    emergencyContactNamePlaceholder: 'जेन डो',
    emergencyContactNumber: 'संपर्क व्यक्तीचा क्रमांक',
    submitButton: 'नोंदणी सादर करा',
    toastSuccessTitle: 'नोंदणी यशस्वी',
    toastSuccessMessage: 'धन्यवाद, {name}. तुमची नोंदणी यशस्वीरित्या सादर झाली आहे.',
    toastErrorTitle: 'नोंदणी अयशस्वी',
  },
  patientDataPage: {
    title: 'रुग्ण नोंदणी',
    description: 'सर्व सादर केलेल्या रुग्ण नोंदणींची सूची.',
    table: {
      tokenNumber: 'टोकन क्र.',
      fullName: 'पूर्ण नाव',
      age: 'वय',
      gender: 'लिंग',
      contactNumber: 'संपर्क क्रमांक',
      registrationDate: 'नोंदणीची तारीख',
      registrationTime: 'नोंदणीची वेळ',
    },
    noPatients: {
        title: 'एकही रुग्ण आढळला नाही',
        description: 'अद्याप एकही रुग्ण नोंदणी सादर केलेली नाही.'
    },
    error: {
        title: 'रुग्ण लोड करताना त्रुटी',
        description: 'रुग्ण डेटा आणण्यात समस्या होती. ही नेटवर्क समस्या किंवा परवानगी त्रुटी असू शकते.'
    }
  },
};


export const translations = { en, hi, mr };

// This generates a union of all possible translation keys
type NestedKeyOf<ObjectType extends object> = 
  {[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object 
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
  }[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<typeof en>;
