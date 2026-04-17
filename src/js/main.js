import '../css/style.css'

const translations = {
  en: {
    nav_home: "Home",
    nav_courses: "Phonics Courses",
    nav_beginner: "Beginner Level",
    nav_learner: "Learner Level",
    nav_explorer: "Explorer Level",
    nav_workshops: "Workshops",
    nav_contact: "Contact",
    nav_lang: "Ar",
    hero_title_1: "See how phonics",
    hero_title_2: "can transform reading confidence!",
    hero_desc: "Special tailor-made for Arabic mother tongue children to learn English perfect pronunciation from Phonics to Reading 🔤✨",
    hero_start: "🚀 Start Learning",
    hero_workshop: "🎯 Try a Workshop",
    hero_students: "Students",
    hero_success: "Success",
    hero_rating: "Rating",
    why_title_1: "Why",
    why_title_2: "Phonics Matters?",
    why_desc: "Phonics helps learners understand the relationship between sounds and letters — making reading easier, faster, and more enjoyable. It builds confidence and opens the door to stronger language skills! 🌟",
    why_powerful_title: "Why is it so powerful?",
    why_powerful_1: "✔ ⁠Clarifies sound–letter relationships",
    why_powerful_2: "✔ Strengthens decoding and word recognition",
    why_powerful_3: "✔ Develops fluent, confident reading",
    why_powerful_4: "✔ Supports both beginners and advanced readers",
    why_powerful_5: "✔ Makes reading fun through structured practice",
    who_we_are_badge: "Who We Are",
    who_we_are_title: "Meet Our Expert Instructors",
    tap_badge: "Why TAP ABC!",
    tap_title_1: "What Makes Our",
    tap_title_2: "Phonics Courses ",
    tap_title_3: "Different?",
    card_1_title: "Global Phonics System",
    card_1_desc: "Our globally tested phonics framework adapts to different learning styles and cultures so every child can master reading skills with confidence.",
    card_2_title: "Points for Reward System",
    card_2_desc: "A gamified learning system where students earn points for goals and good effort, turning phonics practice into a motivating daily challenge.",
    card_3_title: "Structured Homework Plans",
    card_3_desc: "Step‑by‑step homework that reinforces each lesson without overload, with clear guidance so parents know exactly how to support at home.",
    card_4_title: "Vacation Story Club",
    card_4_desc: "Holiday reading sessions that protect progress and keep children engaged through lively, interactive storytelling and follow‑up activities.",
    card_5_title: "International Culture Exchange",
    card_5_desc: "International Culture Exchange Live, virtual exchanges with learners from other countries that grow vocabulary, cultural awareness, and real‑world communication skills.",
    card_6_title: "Assistant Teacher —> 1:4 ratio",
    card_6_desc: "Extra support and attention with dedicated assistant teachers ensuring no student is left behind and everyone receives personalized guidance.",
    trust_badge: "Why Parents Trust Us",
    trust_card_1: "Trusted Reading Guides 🎯",
    trust_card_1_desc: "Our certified instructors are like personal reading mentors. They make phonics fun and ensure learning sticks in your brain.",
    trust_card_2: "Small, Focused Groups",
    trust_card_2_desc: "Maximum of 8 students per class ensures attention, interaction, and real friendships while learning effectively.",
    trust_card_3: "Real Results You Can See 🚀",
    trust_card_3_desc: "95% of students see major improvements! Our proven phonics method works, helping teens level up their reading skills.",
    plan_badge: "💎 Choose Your Learning Plan",
    plan_title: "Start Your Kids Journey Today",
    plan_desc: "Select the perfect plan for your learning goals. All plans include our proven phonics methodology and expert support.",
    plan_beginner: "Beginner",
    plan_beginner_sub: "Perfect for getting started",
    plan_learner: "Learner",
    plan_learner_sub: "Best for serious learners",
    plan_explorer: "Explorer",
    plan_explorer_sub: "For advanced learners",
    price_suffix: "/per lesson",
    buy_now: "Buy Now",
    testimonials_badge: "💬 What Parents Say!",
    testimonials_title: "Voices from our parents!",
    testimonials_desc: "Discover how our phonics program has transformed reading skills for children and brought confidence to families worldwide.",
    join_families: "Join These Happy Families",
    join_desc: "Start your child's reading journey today!",
    about_badge: "About Us",
    about_title: "Building Strong Readers Through Phonics",
    about_p1: "We believe phonics is the bridge between letters and sounds. By teaching children how to match sounds to written symbols, we help them decode words accurately and fluently.",
    about_p2: "Our method combines structured learning with interactive activities, helping to develop essential skills like blending, segmenting, and recognizing common patterns.",
    about_p3: "We believe in the importance of motivation and confidence, so we provide parents with a reliable system to track their child's progress and support them every step of the way.",
    about_start: "START NOW →",
    footer_desc: "Arabic speaking children's best choice learning perfect English.",
    footer_quick: "Quick Links",
    footer_contact: "Contact Info",
    footer_follow: "Follow Us",
    plan_popular: "Most Popular",
    plan_beginner_feat1: "Pay for 10 lessons at once, no payment stress",
    plan_beginner_feat2: "Flexible schedule with 1.5month",
    plan_beginner_feat3: "Easiy to start the English learning journey",
    plan_beginner_feat4: "10-lesson package",
    plan_learner_feat1: "Develop appetite of English learning",
    plan_learner_feat2: "Optional 2-3 times/week",
    plan_learner_feat3: "Speed up on learning progress",
    plan_learner_feat4: "Ready to talk ability",
    plan_learner_feat5: "20-lesson package",
    plan_explorer_feat1: "Serious commitment in English",
    plan_explorer_feat2: "Long term purpose for advancing level",
    plan_explorer_feat3: "Speaking ability enhancing rapidly",
    plan_explorer_feat4: "Beautiful pronunciation",
    plan_explorer_feat5: "Focus group for after class praticing",
    plan_explorer_feat6: "30-lesson package",
    courses_title: "Phonics Courses",
    courses_desc: "Our phonics program is designed to guide children step by step, from learning basic sounds to building words and achieving fluent reading. Explore our courses tailored for all levels of learners. 🌸",
    course_card_title: "Phonics Course",
    age_5_7: "5-7 Age",
    age_8_9: "8-9 Age",
    age_10_12: "10-12 Age",
    contact_title: "Contact Us",
    contact_desc: "Get in touch with us to learn more about our phonics courses and workshops",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Quick answers to common questions about our programs",
    faq_q1: "What age groups do we cater to?",
    faq_a1: "We focus on students aged 5 to 12, offering programs to suit all levels.",
    faq_q2: "How many students are in each class?",
    faq_a2: "Each class consists of 6 to 8 students, ensuring a personalized and effective learning experience.",
    faq_q3: "Is a placement test conducted before the course begins?",
    faq_a3: "Yes, we conduct a placement test for each student before the course begins to ensure the content is appropriate for their level.",
    faq_q4: "What types of workshops do you offer?",
    faq_a4: "We have special workshops that include storytelling, educational games, educational songs, and more.",
    faq_q5: "Do you offer sibling discounts?",
    faq_a5: "Yes, we offer special discounts if students are from the same family.",
    faq_q6: "Is the content available in Arabic?",
    faq_a6: "Yes, we offer some materials in Arabic to facilitate understanding for all students.",
    faq_q7: "What is the duration of each course?",
    faq_a7: "Each term consists of 10 or 20 or 30 lessons 50 min. to make sure children are focus and concentrated.",
    faq_q8: "How can I contact you?",
    faq_a8: "You can contact us via email, and we will be happy to answer any questions.",
    workshops_badge: "✨ Interactive Learning",
    workshops_title_1: "Phonics Learning",
    workshops_title_2: "Workshops",
    workshops_desc: "Join our interactive workshops designed to make English phonics fun and engaging. From reading clubs to musical sessions, we have something for every learner.",
    workshop_reading_badge: "📚 Reading",
    workshop_reading_title: "Reading Club Workshop",
    workshop_reading_desc: "Interactive reading sessions focusing on phonics fundamentals and comprehension skills. Perfect for building confidence in reading aloud.",
    workshop_time_45: "45 minutes",
    workshop_time_30: "30 minutes",
    workshop_size_6_8: "6-8 students",
    workshop_size_8_12: "8-12 students",
    workshop_size_8_12_p: "8–12 participants",
    workshop_reading_schedule: "Monday, 2:00 PM",
    workshop_reading_learn_title: "What you'll learn:",
    workshop_reading_learn_1: "📖 Guided reading to enhance reading skills",
    workshop_reading_learn_2: "🔤 Practicing phonics and understanding phonetics.",
    workshop_reading_learn_3: "📚 Building vocabulary through engaging texts.",
    workshop_reading_learn_4: "🗣️ Read aloud to build confidence.",
    join_workshop: "Join Workshop →",
    workshop_music_badge: "🎵 Music",
    workshop_songs_title: "Songs & Rhymes Workshop",
    workshop_songs_desc: "Learn English through catchy songs and nursery rhymes. Music makes phonics memorable and fun for all ages.",
    workshop_songs_schedule: "Tuesday, 10:00 AM",
    workshop_songs_learn_1: "🎤 Educational songs to learn phonics in a fun way.",
    workshop_songs_learn_2: "🧠 Memory techniques to enhance comprehension and retention.",
    workshop_songs_learn_3: "👥 Group interaction in a fun environment",
    workshop_smart_badge: "🎮 Smart Games",
    workshop_smart_title: "Smart Activities Club",
    workshop_smart_desc: "Engage in fun and energetic recreational activities that boost teamwork, creativity, and fitness! Enjoy every moment while learning through play and exploration.",
    workshop_smart_schedule: "Friday, 5:00 PM",
    workshop_smart_learn_title: "What you'll experience:",
    workshop_smart_learn_1: "Educational games to enhance thinking skills",
    workshop_smart_learn_2: "⁠A space for conversation and expressing opinions",
    workshop_smart_learn_3: "Group challenges to foster collaboration among students",
    join_activity: "Join Activity Club →",
    all_levels: "🌟 All Levels",
    all_ages: "🌈 All Ages Welcome",
    explorer_group_badge: "10-12 Age Group",
    explorer_course_title: "Explorer Phonics Course",
    explorer_course_desc: "Strengthen your language skills through simple reading texts, common daily expressions, and basic English grammar. This level helps learners develop better comprehension, improve communication, and reinforce their acquired language skills",
    learn_explorer_item1: "Understand complex vowel patterns and silent letters",
    learn_explorer_item2: "Decode multi-syllabic words with accuracy and confidence",
    learn_explorer_item3: "Discover word origins and meanings",
    learn_explorer_item4: "Strengthen comprehension and critical thinking skills",
    learn_explorer_item5: "Read advanced texts with confidence and fluency",
    included_explorer_item1: "Advanced, high-quality lessons",
    included_explorer_item2: "Full storybooks and chapter reading",
    included_explorer_item3: "Deep comprehension exercises",
    included_explorer_item4: "Detailed progress reports for parents",
    included_explorer_item5: "Mastery certification",
    explorer_review1_quote: "I love learning the alphabet sounds! The games make it so fun and I read bigger words now!",
    explorer_review1_name: "jana, Age 10",
    explorer_review2_quote: "My teacher says I'm reading so much better! The course is really cool and easy to understand.",
    explorer_review2_name: "omer, Age 11",
    explorer_review3_quote: "I like how fun it is! I can read books now that I couldn't read before. Yay!",
    explorer_review3_name: "hesham, Age 11",
    explorer_review4_quote: "⁠I highly recommend this program to other parents, as it provides real value and creates a positive impact on children’s learning journey.",
    explorer_review4_name: "asel, Age 12",
    learner_group_badge: "8-9 Age Group",
    learner_course_title: "Learner Phonics Course",
    learner_course_desc: "Strengthen your language skills through simple reading texts, common daily expressions, and basic English grammar. This level helps learners develop better comprehension, improve communication, and reinforce their acquired language skills",
    learn_learner_item1: "Understand vowel combinations and long vowel sounds",
    learn_learner_item2: "Read words with blends and clusters with ease",
    learn_learner_item3: "Build simple sentences confidently",
    learn_learner_item4: "Improve reading fluency and speed",
    learn_learner_item5: "Best for developing skills",
    included_learner_item1: "Structured and engaging lessons",
    included_learner_item2: "Interactive word games",
    included_learner_item3: "Interactive word games to boost engagement",
    included_learner_item4: "Beginner-friendly stories & readers",
    included_learner_item5: "Personalized learning journey",
    included_learner_item6: "Achievement badges & rewards",
    learner_review1_quote: "⁠My child now talks positively about the class activities and always looks forward to attending the sessions with excitement and enthusiasm",
    learner_review1_name: "sirin, Age 8",
    learner_review2_quote: "Communication with the team was clear and efficient, and they were always responsive and supportive whenever we had any questions or concerns.",
    learner_review2_name: "Liam, Age 8",
    learner_review3_quote: "⁠I really appreciated the teacher’s engaging and friendly approach, which helped all students feel comfortable and encouraged them to actively participate during the lessons.",
    learner_review3_name: "Juri, Age 9",
    learner_review4_quote: "The program was truly excellent, and I noticed a significant improvement in my child’s reading and speaking skills, as well as a growing interest in learning English at home.",
    learner_review4_name: "sadel, Age 9",
    process_badge: "🌟How our process Works",
    process_title: "A simple, proven process that builds practical skills step by step.",
    process_desc: "Minimal, friendly, and focused on progress. Each step builds confidence and real-world skills.",
    process_step1_badge: "hand‑drawn",
    process_step1_title: "Cultural assessment",
    process_step1_desc: "We learn about each learner’s background, interests, and goals to tailor the phonics journey in a culturally aware, welcoming way.",
    process_step2_badge: "minimal",
    process_step2_title: "Directive phonics lessons",
    process_step2_desc: "Short, focused lessons that explicitly connect sounds to letters, then to decoding and fluent reading with clear, simple steps.",
    process_step3_badge: "playful",
    process_step3_title: "Practice rewards",
    process_step3_desc: "Daily practice with points and badges keeps motivation high. Kids see progress; parents see steady growth.",
    process_step4_badge: "support",
    process_step4_title: "Continuous support",
    process_step4_desc: "Ongoing guidance, feedback, and parent updates ensure momentum and celebrate wins—big and small.",
    process_success: "Success unlocked!",
    age_5_7_group: "5-7 Age Group",
    beginner_course_title: "Beginner Phonics Course",
    beginner_course_desc: "Lay the foundation for learning English by getting familiar with basic letter sounds and the alphabet. Learners will build essential vocabulary through interactive activities and gain a clear understanding of fundamental reading and writing concepts.",
    what_child_will_learn: "What Your Child Will Learn",
    learn_item1: "Master basic letters and their sounds with ease and enjoyment",
    learn_item2: "Build a strong vocabulary through fun, interactive activities",
    learn_item3: "Understand the fundamentals of reading and writing with confidence",
    whats_included: "What's Included",
    included_item1: "Engaging and interactive lessons",
    included_item2: "Fun games & hands-on activities",
    included_item3: "Printable worksheets for practice at home",
    included_item4: "Smart progress tracking tools",
    included_item5: "Certificates of completion",
    register_now: "Register Now",
    what_children_say: "What Children Say",
    review1_quote: "I highly recommend this program to other parents, as it provides real value and creates a positive impact on children’s learning journey",
    review1_name: "sirin ,Age 7",
    review2_quote: "My teacher says I'm reading so much better! The course is really cool and easy to understand.",
    review2_name: "mohammad,Age 7",
    review3_quote: "Communication with the team was clear and sefficient, and they were always responsive and supportive whenever we had any questions or concerns",
    review3_name: "Alma,Age 6",
    review4_quote: "The curriculum is modern and different from traditional methods, which made learning easier and more enjoyable for the children.",
    review4_name: "jana, Age 5",
    testimonials: [
      {
        name: 'Sham',
        role: 'Mother of Sham, Age 8',
        image: 'https://cdn-icons-png.freepik.com/512/11696/11696257.png',
        quote: 'The program was truly excellent, and I noticed a significant improvement in my child’s reading and speaking skills, as well as a growing interest in learning English at home.'
      },
      {
        name: 'Juri',
        role: 'Father of Juri, Age 9',
        image: 'https://cdn-icons-png.freepik.com/512/8193/8193914.png',
        quote: 'I really appreciated the teacher’s engaging and friendly approach, which helped all students feel comfortable and encouraged them to actively participate during the lessons.'
      },
      {
        name: 'Mohammad Saad',
        role: 'Mother of Sofia, Age 11',
        image: 'https://img.freepik.com/free-vector/cute-boy-traditional-attire_1308-175715.jpg?semt=ais_incoming&w=740&q=80',
        quote: 'The organization of the classes was very professional, and the regular schedule helped my child stay committed and build a consistent learning routine.'
      },
      {
        name: 'Sirin',
        role: 'Father of Sirin, Age 9',
        image: 'https://img.freepik.com/premium-vector/little-kid-avatar-profile_18591-50928.jpg',
        quote: 'My child now talks positively about the class activities and always looks forward to attending the sessions with excitement and enthusiasm.'
      },
      {
        name: 'Hesham',
        role: 'Mother of Hesham, Age 10',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/053/537/859/small/cartoon-boy-with-green-shirt-on-transparent-background-free-png.png',
        quote: 'I highly recommend this program to other parents, as it provides real value and creates a positive impact on children’s learning journey.'
      }
    ]
  },
  ar: {
    nav_home: "الرئيسية",
    nav_courses: "دورات الصوتيات",
    nav_beginner: "مستوى المبتدئين",
    nav_learner: "مستوى المتعلم",
    nav_explorer: "مستوى المستكشف",
    nav_workshops: "ورش العمل",
    nav_contact: "اتصل بنا",
    nav_lang: "En",
    hero_title_1: "شاهد كيف يمكن للصوتيات",
    hero_title_2: "أن تحول الثقة في القراءة!",
    hero_desc: "مصمم خصيصًا للأطفال الناطقين باللغة العربية لتعلم النطق الإنجليزي المثالي من الصوتيات إلى القراءة 🔤✨",
    hero_start: "🚀 ابدأ التعلم",
    hero_workshop: "🎯 جرب ورشة عمل",
    hero_students: "طالب",
    hero_success: "نجاح",
    hero_rating: "تقييم",
    why_title_1: "لماذا",
    why_title_2: "تعتبر الصوتيات مهمة؟",
    why_desc: "تساعد الصوتيات المتعلمين على فهم العلاقة بين الأصوات والحروف — مما يجعل القراءة أسهل وأسرع وأكثر متعة. إنها تبني الثقة وتفتح الباب لمهارات لغوية أقوى! 🌟",
    why_powerful_title: "لماذا هي قوية جدًا؟",
    why_powerful_1: "✔ توضح العلاقة بين الصوت والحرف",
    why_powerful_2: "✔ تقوي فك الرموز والتعرف على الكلمات",
    why_powerful_3: "✔ تطور قراءة طليقة وواثقة",
    why_powerful_4: "✔ تدعم القراء المبتدئين والمتقدمين",
    why_powerful_5: "✔ تجعل القراءة ممتعة من خلال التدريب المنظم",
    who_we_are_badge: "من نحن",
    who_we_are_title: "تعرف على معلمينا الخبراء",
    tap_badge: "لماذا TAP ABC!",
    tap_title_1: "ما الذي يجعل",
    tap_title_2: "دورات الصوتيات لدينا ",
    tap_title_3: "مختلفة؟",
    card_1_title: "نظام الصوتيات العالمي",
    card_1_desc: "إطار عمل الصوتيات المختبر عالميًا يتكيف مع أنماط التعلم والثقافات المختلفة حتى يتمكن كل طفل من إتقان مهارات القراءة بثقة.",
    card_2_title: "نظام النقاط للمكافآت",
    card_2_desc: "نظام تعلم يعتمد على الألعاب حيث يكسب الطلاب نقاطًا للأهداف والجهد الجيد، مما يحول ممارسة الصوتيات إلى تحدٍ يومي محفز.",
    card_3_title: "خطط واجبات منزلية منظمة",
    card_3_desc: "واجبات منزلية خطوة بخطوة تعزز كل درس دون إرهاق، مع توجيه واضح حتى يعرف الآباء بالضبط كيفية تقديم الدعم في المنزل.",
    card_4_title: "نادي قصص الإجازة",
    card_4_desc: "جلسات قراءة في الإجازة تحافظ على التقدم وتبقي الأطفال متفاعلين من خلال سرد قصص حيوي وتفاعلي وأنشطة متابعة.",
    card_5_title: "تبادل ثقافي دولي",
    card_5_desc: "تبادل ثقافي دولي مباشر وافتراضي مع متعلمين من بلدان أخرى ينمي المفردات والوعي الثقافي ومهارات التواصل في العالم الحقيقي.",
    card_6_title: "معلم مساعد —> نسبة 1:4",
    card_6_desc: "دعم واهتمام إضافي مع معلمين مساعدين مخصصين لضمان عدم تخلف أي طالب وحصول الجميع على توجيه شخصي.",
    trust_badge: "لماذا يثق بنا الآباء",
    trust_card_1: "أدلة قراءة موثوقة 🎯",
    trust_card_1_desc: "مدربونا المعتمدون هم بمثابة مرشدين شخصيين للقراءة. يجعلون الصوتيات ممتعة ويضمنون ترسيخ التعلم في ذهنك.",
    trust_card_2: "مجموعات صغيرة ومركزة",
    trust_card_2_desc: "بحد أقصى 8 طلاب لكل فصل يضمن الاهتمام والتفاعل وصداقات حقيقية أثناء التعلم بشكل فعال.",
    trust_card_3: "نتائج حقيقية يمكنك رؤيتها 🚀",
    trust_card_3_desc: "95٪ من الطلاب يرون تحسنًا كبيرًا! طريقتنا المجربة في الصوتيات تعمل، وتساعد المراهقين على رفع مستوى مهاراتهم في القراءة.",
    plan_badge: "💎 اختر خطة التعلم الخاصة بك",
    plan_title: "ابدأ رحلة أطفالك اليوم",
    plan_desc: "اختر الخطة المثالية لأهدافك التعليمية. تشمل جميع الخطط منهجية الصوتيات المجربة ودعم الخبراء.",
    plan_beginner: "مبتدئ",
    plan_beginner_sub: "مثالي للبدء",
    plan_learner: "متعلم",
    plan_learner_sub: "الأفضل للمتعلمين الجادين",
    plan_explorer: "مستكشف",
    plan_explorer_sub: "للمتعلمين المتقدمين",
    price_suffix: "/لكل درس",
    buy_now: "اشترِ الآن",
    testimonials_badge: "💬 ماذا يقول الآباء!",
    testimonials_title: "أصوات من أولياء أمورنا!",
    testimonials_desc: "اكتشف كيف حول برنامج الصوتيات لدينا مهارات القراءة للأطفال وجلب الثقة للعائلات في جميع أنحاء العالم.",
    join_families: "انضم إلى هذه العائلات السعيدة",
    join_desc: "ابدأ رحلة القراءة لطفلك اليوم!",
    about_badge: "عننا",
    about_title: "بناء قراء أقوياء من خلال الصوتيات",
    about_p1: "نحن نؤمن بأن الصوتيات هي الجسر بين الحروف والأصوات. من خلال تعليم الأطفال كيفية مطابقة الأصوات بالرموز المكتوبة، نساعدهم على فك رموز الكلمات بدقة وطلاقة.",
    about_p2: "تجمع طريقتنا بين التعلم المنظم والأنشطة التفاعلية، مما يساعد على تطوير المهارات الأساسية مثل المزج والتقسيم والتعرف على الأنماط الشائعة.",
    about_p3: "نحن نؤمن بأهمية التحفيز والثقة، لذلك نوفر للآباء نظامًا موثوقًا لتتبع تقدم أطفالهم ودعمهم في كل خطوة على الطريق.",
    about_start: "ابدأ الآن ←",
    footer_desc: "الخيار الأفضل للأطفال الناطقين بالعربية لتعلم اللغة الإنجليزية المثالية.",
    footer_quick: "روابط سريعة",
    footer_contact: "معلومات الاتصال",
    footer_follow: "تابعنا",
    plan_popular: "الأكثر شيوعاً",
    plan_beginner_feat1: "ادفع مقابل 10 دروس دفعة واحدة، لا ضغوط دفع",
    plan_beginner_feat2: "جدول مرن لمدة شهر ونصف",
    plan_beginner_feat3: "من السهل بدء رحلة تعلم اللغة الإنجليزية",
    plan_beginner_feat4: "حزمة 10 دروس",
    plan_learner_feat1: "تطوير الرغبة في تعلم اللغة الإنجليزية",
    plan_learner_feat2: "اختياري 2-3 مرات في الأسبوع",
    plan_learner_feat3: "تسريع التقدم في التعلم",
    plan_learner_feat4: "القدرة على التحدث",
    plan_learner_feat5: "حزمة 20 درسًا",
    plan_explorer_feat1: "التزام جاد باللغة الإنجليزية",
    plan_explorer_feat2: "هدف طويل المدى لرفع المستوى",
    plan_explorer_feat3: "تحسن القدرة على التحدث بسرعة",
    plan_explorer_feat4: "نطق جميل",
    plan_explorer_feat5: "مجموعة تركيز للممارسة بعد الفصل",
    plan_explorer_feat6: "حزمة 30 درسًا",
    courses_title: "دورات الصوتيات",
    courses_desc: "تم تصميم برنامج الصوتيات لدينا لتوجيه الأطفال خطوة بخطوة، من تعلم الأصوات الأساسية إلى بناء الكلمات وتحقيق القراءة الطليقة. استكشف دوراتنا المصممة لجميع مستويات المتعلمين. 🌸",
    course_card_title: "دورة الصوتيات",
    age_5_7: "عمر 5-7",
    age_8_9: "عمر 8-9",
    age_10_12: "عمر 10-12",
    contact_title: "اتصل بنا",
    contact_desc: "تواصل معنا لمعرفة المزيد عن دورات الصوتيات وورش العمل الخاصة بنا",
    faq_title: "الأسئلة الشائعة",
    faq_desc: "إجابات سريعة على الأسئلة الشائعة حول برامجنا",
    faq_q1: "ما هي الفئات العمرية التي نستهدفها؟",
    faq_a1: "نحن نركز على الطلاب الذين تتراوح أعمارهم بين 5 و12 عاماً، ونقدم برامج تناسب جميع المستويات.",
    faq_q2: "كم عدد الطلاب في كل فصل؟",
    faq_a2: "يتكون كل فصل من 6 إلى 8 طلاب، مما يضمن تجربة تعليمية مخصصة وفعالة.",
    faq_q3: "هل يتم إجراء اختبار تحديد مستوى قبل بدء الدورة؟",
    faq_a3: "نعم، نجري اختبار تحديد مستوى لكل طالب قبل بدء الدورة للتأكد من أن المحتوى مناسب لمستواه.",
    faq_q4: "ما هي أنواع ورش العمل التي تقدمونها؟",
    faq_a4: "لدينا ورش عمل خاصة تشمل رواية القصص، والألعاب التعليمية، والأغاني التعليمية، والمزيد.",
    faq_q5: "هل تقدمون خصومات للأخوة؟",
    faq_a5: "نعم، نقدم خصومات خاصة إذا كان الطلاب من نفس العائلة.",
    faq_q6: "هل المحتوى متاح باللغة العربية؟",
    faq_a6: "نعم، نقدم بعض المواد باللغة العربية لتسهيل الفهم لجميع الطلاب.",
    faq_q7: "ما هي مدة كل دورة؟",
    faq_a7: "تتكون كل دورة من 10 أو 20 أو 30 درساً مدة كل منها 50 دقيقة للتأكد من تركيز الأطفال.",
    faq_q8: "كيف يمكنني الاتصال بكم؟",
    faq_a8: "يمكنكم الاتصال بنا عبر البريد الإلكتروني، وسنكون سعداء بالإجابة على أي أسئلة.",
    workshops_badge: "✨ تعلم تفاعلي",
    workshops_title_1: "تعلم الصوتيات",
    workshops_title_2: "ورش العمل",
    workshops_desc: "انضم إلى ورش العمل التفاعلية لدينا المصممة لجعل صوتيات اللغة الإنجليزية ممتعة وجذابة. من نوادي القراءة إلى الجلسات الموسيقية، لدينا شيء لكل متعلم.",
    workshop_reading_badge: "📚 القراءة",
    workshop_reading_title: "ورشة عمل نادي القراءة",
    workshop_reading_desc: "جلسات قراءة تفاعلية تركز على أساسيات الصوتيات ومهارات الفهم. مثالية لبناء الثقة في القراءة بصوت عالٍ.",
    workshop_time_45: "45 دقيقة",
    workshop_time_30: "30 دقيقة",
    workshop_size_6_8: "6-8 طلاب",
    workshop_size_8_12: "8-12 طالباً",
    workshop_size_8_12_p: "8-12 مشاركاً",
    workshop_reading_schedule: "الاثنين، 2:00 ظهراً",
    workshop_reading_learn_title: "ماذا ستتعلم:",
    workshop_reading_learn_1: "📖 قراءة موجهة لتعزيز مهارات القراءة",
    workshop_reading_learn_2: "🔤 ممارسة الصوتيات وفهم علم الأصوات.",
    workshop_reading_learn_3: "📚 بناء المفردات من خلال نصوص جذابة.",
    workshop_reading_learn_4: "🗣️ القراءة بصوت عالٍ لبناء الثقة.",
    join_workshop: "انضم إلى ورشة العمل ←",
    workshop_music_badge: "🎵 موسيقى",
    workshop_songs_title: "ورشة عمل الأغاني والقوافي",
    workshop_songs_desc: "تعلم اللغة الإنجليزية من خلال الأغاني الجذابة وأناشيد الأطفال. الموسيقى تجعل الصوتيات لا تُنسى وممتعة لجميع الأعمار.",
    workshop_songs_schedule: "الثلاثاء، 10:00 صباحاً",
    workshop_songs_learn_1: "🎤 أغاني تعليمية لتعلم الصوتيات بطريقة ممتعة.",
    workshop_songs_learn_2: "🧠 تقنيات الذاكرة لتعزيز الفهم والاستيعاب.",
    workshop_songs_learn_3: "👥 تفاعل جماعي في بيئة ممتعة",
    workshop_smart_badge: "🎮 ألعاب ذكية",
    workshop_smart_title: "نادي الأنشطة الذكية",
    workshop_smart_desc: "شارك في أنشطة ترفيهية ممتعة ونشيطة تعزز العمل الجماعي والإبداع واللياقة البدنية! استمتع بكل لحظة أثناء التعلم من خلال اللعب والاستكشاف.",
    workshop_smart_schedule: "الجمعة، 5:00 مساءً",
    workshop_smart_learn_title: "ماذا ستختبر:",
    workshop_smart_learn_1: "ألعاب تعليمية لتعزيز مهارات التفكير",
    workshop_smart_learn_2: "مساحة للمحادثة والتعبير عن الآراء",
    workshop_smart_learn_3: "تحديات جماعية لتعزيز التعاون بين الطلاب",
    join_activity: "انضم إلى نادي الأنشطة ←",
    all_levels: "🌟 جميع المستويات",
    all_ages: "🌈 جميع الأعمار مرحب بها",
    explorer_group_badge: "الفئة العمرية 10-12 سنة",
    explorer_course_title: "دورة الصوتيات للمستكشف",
    explorer_course_desc: "عزز مهاراتك اللغوية من خلال نصوص قراءة بسيطة، وتعبيرات يومية شائعة، وقواعد اللغة الإنجليزية الأساسية. يساعد هذا المستوى المتعلمين على تطوير فهم أفضل، وتحسين التواصل، وتعزيز مهاراتهم اللغوية المكتسبة",
    learn_explorer_item1: "فهم أنماط الحروف المتحركة المعقدة والحروف الصامتة",
    learn_explorer_item2: "فك تشفير الكلمات متعددة المقاطع بدقة وثقة",
    learn_explorer_item3: "اكتشاف أصول الكلمات ومعانيها",
    learn_explorer_item4: "تعزيز مهارات الفهم والتفكير النقدي",
    learn_explorer_item5: "قراءة نصوص متقدمة بثقة وطلاقة",
    included_explorer_item1: "دروس متقدمة وعالية الجودة",
    included_explorer_item2: "قصص كاملة وقراءة فصول",
    included_explorer_item3: "تمارين فهم عميقة",
    included_explorer_item4: "تقارير تقدم مفصلة لأولياء الأمور",
    included_explorer_item5: "شهادة إتقان",
    explorer_review1_quote: "أنا أحب تعلم أصوات الأبجدية! الألعاب تجعل الأمر ممتعًا للغاية وأنا أقرأ كلمات أكبر الآن!",
    explorer_review1_name: "جنى، 10 سنوات",
    explorer_review2_quote: "يقول معلمي إن قراءتي تتحسن كثيرًا! الدورة رائعة حقًا وسهلة الفهم.",
    explorer_review2_name: "عمر، 11 سنة",
    explorer_review3_quote: "أحب كم هي ممتعة! يمكنني الآن قراءة كتب لم أستطع قراءتها من قبل. يا للروعة!",
    explorer_review3_name: "هشام، 11 سنة",
    explorer_review4_quote: "أوصي بشدة بهذا البرنامج لأولياء الأمور الآخرين، حيث يوفر قيمة حقيقية ويخلق تأثيرًا إيجابيًا على رحلة تعلم الأطفال.",
    explorer_review4_name: "أسيل، 12 سنة",
    learner_group_badge: "الفئة العمرية 8-9 سنوات",
    learner_course_title: "دورة الصوتيات للمتعلم",
    learner_course_desc: "عزز مهاراتك اللغوية من خلال نصوص قراءة بسيطة، وتعبيرات يومية شائعة، وقواعد اللغة الإنجليزية الأساسية. يساعد هذا المستوى المتعلمين على تطوير فهم أفضل، وتحسين التواصل، وتعزيز مهاراتهم اللغوية المكتسبة",
    learn_learner_item1: "فهم تركيبات الحروف المتحركة وأصوات الحروف المتحركة الطويلة",
    learn_learner_item2: "قراءة الكلمات مع المزج والمجموعات بسهولة",
    learn_learner_item3: "بناء جمل بسيطة بثقة",
    learn_learner_item4: "تحسين طلاقة وسرعة القراءة",
    learn_learner_item5: "الأفضل لتطوير المهارات",
    included_learner_item1: "دروس منظمة وجذابة",
    included_learner_item2: "ألعاب كلمات تفاعلية",
    included_learner_item3: "ألعاب كلمات تفاعلية لتعزيز التفاعل",
    included_learner_item4: "قصص وقراءات صديقة للمبتدئين",
    included_learner_item5: "رحلة تعليمية مخصصة",
    included_learner_item6: "أوسمة إنجاز ومكافآت",
    learner_review1_quote: "يتحدث طفلي الآن بشكل إيجابي عن أنشطة الفصل ويتطلع دائمًا لحضور الجلسات بإثارة وحماس",
    learner_review1_name: "سيرين، 8 سنوات",
    learner_review2_quote: "كان التواصل مع الفريق واضحاً وفعالاً، وكانوا دائماً مستجيبين وداعمين كلما كان لدينا أي أسئلة أو استفسارات.",
    learner_review2_name: "ليام، 8 سنوات",
    learner_review3_quote: "لقد قدرت حقًا أسلوب المعلم الجذاب والودود، مما ساعد جميع الطلاب على الشعور بالراحة وشجعهم على المشاركة بنشاط خلال الدروس.",
    learner_review3_name: "جوري، 9 سنوات",
    learner_review4_quote: "كان البرنامج ممتازًا حقًا، ولاحظت تحسنًا كبيرًا في مهارات القراءة والتحدث لدى طفلي، فضلاً عن الاهتمام المتزايد بتعلم اللغة الإنجليزية في المنزل.",
    learner_review4_name: "سديل، 9 سنوات",
    process_badge: "🌟 كيف تسير عمليتنا",
    process_title: "عملية بسيطة ومثبتة تبني مهارات عملية خطوة بخطوة.",
    process_desc: "بسيطة، ودودة، ومركزة على التقدم. كل خطوة تبني الثقة ومهارات العالم الحقيقي.",
    process_step1_badge: "مرسوم يدوياً",
    process_step1_title: "التقييم الثقافي",
    process_step1_desc: "نتعرف على خلفية كل متعلم واهتماماته وأهدافه لتخصيص رحلة الصوتيات بطريقة تراعي الثقافة وترحب بالجميع.",
    process_step2_badge: "بسيط",
    process_step2_title: "دروس الصوتيات التوجيهية",
    process_step2_desc: "دروس قصيرة ومركزة تربط الأصوات بالحروف بشكل صريح، ثم بفك الرموز والقراءة الطليقة بخطوات واضحة وبسيطة.",
    process_step3_badge: "مرح",
    process_step3_title: "مكافآت التدريب",
    process_step3_desc: "التدريب اليومي مع النقاط والأوسمة يحافظ على الحماس عالياً. يرى الأطفال التقدم؛ ويرى الآباء نمواً مستمراً.",
    process_step4_badge: "دعم",
    process_step4_title: "الدعم المستمر",
    process_step4_desc: "التوجيه المستمر والملاحظات وتحديثات أولياء الأمور تضمن الزخم وتدفعنا للاحتفال بالإنجازات — الكبيرة والصغيرة.",
    process_success: "تم فتح النجاح!",
    age_5_7_group: "الفئة العمرية 5-7 سنوات",
    beginner_course_title: "دورة الصوتيات للمبتدئين",
    beginner_course_desc: "ضع الأساس لتعلم اللغة الإنجليزية من خلال التعرف على أصوات الحروف الأساسية والأبجدية. سيبني المتعلمون مفردات أساسية من خلال أنشطة تفاعلية ويكتسبون فهماً واضحاً لمفاهيم القراءة والكتابة الأساسية.",
    what_child_will_learn: "ماذا سيتعلم طفلك",
    learn_item1: "إتقان الحروف الأساسية وأصواتها بسهولة ومتعة",
    learn_item2: "بناء مفردات قوية من خلال أنشطة ممتعة وتفاعلية",
    learn_item3: "فهم أساسيات القراءة والكتابة بثقة",
    whats_included: "ماذا تشمل الدورة",
    included_item1: "دروس جذابة وتفاعلية",
    included_item2: "ألعاب ممتعة وأنشطة عملية",
    included_item3: "أوراق عمل قابلة للطباعة للممارسة في المنزل",
    included_item4: "أدوات ذكية لتتبع التقدم",
    included_item5: "شهادات إتمام الدورة",
    register_now: "سجل الآن",
    what_children_say: "ماذا يقول الأطفال",
    review1_quote: "أوصي بشدة بهذا البرنامج لأولياء الأمور الآخرين، لأنه يقدم قيمة حقيقية ويخلق تأثيرًا إيجابيًا على رحلة تعلم الأطفال.",
    review1_name: "سيرين، 7 سنوات",
    review2_quote: "يقول معلمي إنني أقرأ بشكل أفضل بكثير! الدورة رائعة حقًا وسهلة الفهم.",
    review2_name: "محمد، 7 سنوات",
    review3_quote: "كان التواصل مع الفريق واضحاً وفعالاً، وكانوا دائماً مستجيبين وداعمين كلما كان لدينا أي أسئلة أو استفسارات.",
    review3_name: "ألما، 6 سنوات",
    review4_quote: "المنهج حديث ومختلف عن الطرق التقليدية، مما جعل التعلم أسهل وأكثر متعة للأطفال.",
    review4_name: "جنى، 5 سنوات",
    testimonials: [
      {
        name: 'شام',
        role: 'والدة شام، 8 سنوات',
        image: 'https://cdn-icons-png.freepik.com/512/11696/11696257.png',
        quote: 'كان البرنامج ممتازًا حقًا، ولاحظت تحسنًا كبيرًا في مهارات القراءة والتحدث لدى طفلي، فضلاً عن الاهتمام المتزايد بتعلم اللغة الإنجليزية في المنزل.'
      },
      {
        name: 'جوري',
        role: 'والد جوري، 9 سنوات',
        image: 'https://cdn-icons-png.freepik.com/512/8193/8193914.png',
        quote: 'لقد قدرت حقًا أسلوب المعلم الجذاب والودود، مما ساعد جميع الطلاب على الشعور بالراحة وشجعهم على المشاركة بنشاط خلال الدروس.'
      },
      {
        name: 'محمد سعد',
        role: 'والدة صوفيا، 11 سنة',
        image: 'https://img.freepik.com/free-vector/cute-boy-traditional-attire_1308-175715.jpg?semt=ais_incoming&w=740&q=80',
        quote: 'كان تنظيم الفصول احترافيًا للغاية، وساعد الجدول المنتظم طفلي على الالتزام وبناء روتين تعليمي ثابت.'
      },
      {
        name: 'سيرين',
        role: 'والد سيرين، 9 سنوات',
        image: 'https://img.freepik.com/premium-vector/little-kid-avatar-profile_18591-50928.jpg',
        quote: 'طفلي يتحدث الآن بإيجابية عن أنشطة الفصل ويتطلع دائمًا لحضور الجلسات بإثارة وحماس.'
      },
      {
        name: 'هشام',
        role: 'والدة هشام، 10 سنوات',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/053/537/859/small/cartoon-boy-with-green-shirt-on-transparent-background-free-png.png',
        quote: 'أوصي بشدة بهذا البرنامج لأولياء الأمور الآخرين، لأنه يقدم قيمة حقيقية ويخلق تأثيرًا إيجابيًا على رحلة تعلم الأطفال.'
      }
    ]
  }
};

function updateContent(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('lang', lang);

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Handle Alpine.js testimonials if they exist on the page
  const testimonialsEl = document.querySelector('[x-data*="testimonials"]');
  if (testimonialsEl && window.Alpine) {
    const data = Alpine.$data(testimonialsEl);
    if (data) {
      data.testimonials = translations[lang].testimonials;
      if (data.currentSlide !== undefined) data.currentSlide = 0;
    }
  }

  // Handle specific text parts like spans in titles
  // Update Hero Title (index.html)
  const heroTitle = document.querySelector('.hero-title-main');
  if (heroTitle && heroTitle.childNodes.length > 0) {
    heroTitle.childNodes[0].textContent = translations[lang].hero_title_1 + ' ';
    const heroSpan = heroTitle.querySelector('span');
    if (heroSpan) heroSpan.textContent = translations[lang].hero_title_2;
  }

  // Update URL query
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.pushState({}, '', url);
}

window.toggleLanguage = function() {
  const currentLang = document.documentElement.lang || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  updateContent(newLang);
};

// Initialize Alpine.js components and global functionality
document.addEventListener('DOMContentLoaded', function() {
  // Detect language: URL param > localStorage > default 'en'
  const urlParams = new URLSearchParams(window.location.search);
  const savedLang = localStorage.getItem('lang');
  const lang = urlParams.get('lang') || savedLang || 'en';
  
  // Wait for Alpine to initialize if needed
  if (document.querySelector('[x-data*="testimonials"]')) {
     document.addEventListener('alpine:init', () => {
        updateContent(lang);
     });
     if (window.Alpine) {
        updateContent(lang);
     }
  } else {
     updateContent(lang);
  }

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading states to buttons
  const buttons = document.querySelectorAll('button[type="submit"]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (!this.disabled) {
        this.classList.add('loading');
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.bg-white, .grid > div');
  animatedElements.forEach(el => observer.observe(el));

  // Form validation enhancement
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name') || field.id;

    // Remove existing error messages
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    field.classList.remove('border-red-500');

    if (field.hasAttribute('required') && !value) {
      showFieldError(field, `${capitalizeFirst(fieldName)} is required`);
      return false;
    }

    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
      }
    }

    return true;
  }

  function showFieldError(field, message) {
    field.classList.add('border-red-500');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Course filtering functionality
  if (document.querySelector('[x-data*="selectedAge"]')) {
    // Course filter is handled by Alpine.js in the HTML
    console.log('Course filtering initialized with Alpine.js');
  }

  // Add keyboard navigation for dropdowns and modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close any open mobile menus
      const mobileMenus = document.querySelectorAll('[x-data*="mobileOpen"]');
      mobileMenus.forEach(menu => {
        if (menu._x_dataStack && menu._x_dataStack[0].mobileOpen) {
          menu._x_dataStack[0].mobileOpen = false;
        }
      });
    }
  });

  // Performance optimization: Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  console.log('Organization X website initialized successfully!');
});
