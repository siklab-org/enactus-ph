import type { Metadata } from "next";
import Image from "next/image";
import { Building2, GraduationCap, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "2026 Faculty Fellows | Enactus Philippines",
  description:
    "Meet the 2026 Faculty Fellows — educators from across the Philippines empowering student-led social entrepreneurship.",
};

interface Fellow {
  name: string;
  position: string;
  institution: string;
  photo: string;
  bio: string;
}

const fellows: Fellow[] = [
  {
    name: "Dr. Felix Concepcion Veroya",
    position: "Founder & CEO",
    institution: "Ask Lex PH Academy",
    photo: "/fellows-2026/Veroya.webp",
    bio: "Dr. Felix Concepcion Veroya is an Industrial Engineer, lifelong learning educator, consultant, and social entrepreneur dedicated to making professional education more accessible, practical, and impact-driven. He is the Founder and CEO of Ask Lex PH Academy, a social enterprise that democratizes access to quality training and certification in Industrial Engineering, Lean Six Sigma, Project Management, Data Analytics, Innovation, Sustainability, and Continuous Improvement which has helped more than 100,000 lifelong learners. He is also an ASEAN Sustainable Business Coach, supporting enterprises and communities in building more sustainable and future-ready practices. As a lead designer and co-implementer of hackathons with Technology Business Incubators (TBIs) in the Philippines, he helps transform ideas into actionable solutions that address real-world challenges. He is also the Co-Founder and Managing Director of BAYANI Labs, an accelerator program for community-based solutions that empowers changemakers to design, test, and scale impactful initiatives. Through his work, Dr. Veroya has helped thousands of students, young professionals, MSMEs, and organizations build future-ready skills through affordable learning programs, free courses, mentoring initiatives, and community-based capacity-building projects. His expertise spans operations excellence, process improvement, systems thinking, data analytics, supply chain management, innovation, sustainability, social entrepreneurship, and lifelong learning strategy.",
  },
  {
    name: "Zeus Bryan V. Nicolas",
    position: "Instructor I",
    institution: "Aklan State University",
    photo: "/fellows-2026/Nicholas.webp",
    bio: "Zeus Bryan V. Nicolas teaches at Aklan State University and founded MOVERS Ph, a youth-led organization working on social entrepreneurship, community resilience, and youth empowerment. Over the years, he has led and supported a wide range of development initiatives, some of which have earned recognition from Youth Co:Lab, Young Public Servants, and various international partners. As both an educator and mentor, he has guided students through leadership, research, entrepreneurship, and community engagement work. He has also been part of several local and international leadership and innovation programs, including YSEALI, the Next Generation Foresight Practitioners, and the Asian Institute of Management's Future Bridging Leaders Program. More than anything, his work is rooted in developing young leaders and changemakers capable of building lasting, real solutions for their communities.",
  },
  {
    name: "Francis Arence D. Datu",
    position: "Senior Teacher III",
    institution: "Brightwoods School",
    photo: "/fellows-2026/Datu.webp",
    bio: "Teacher Francis is an educator and social enterprise advocate with 20 years of experience in shaping young leaders through purpose-driven education. Since 2019, he has been at the forefront of empowering senior high school students to conceptualize, develop, and launch student-led social enterprises that address real community needs. Under his mentorship, several student enterprises have achieved both sustainability and impact. These include Pamana, which produces handcrafted bags made by local seamstresses and inspired by Kapampangan artistry, and Renata, which promotes mindful consumption through timeless selvedge denim pieces. More recently, student ventures such as A'telaier, Inspirit, and Lineage have gained international recognition at the School Enterprise Challenge by Teach a Man to Fish (UK), winning awards for Best School Business, Country Winner for the Philippines, Top Business Plan, and Best Business Logo and Pitch. He is a founding director and current Treasurer of the National Association of Social Enterprise Educators and Administrators (NASEEA), where he has contributed to advancing social enterprise education in the Philippines. During his tenure, Brightwoods School (the school where he teaches) was recognized as the regional hub for social enterprise education. He also serves as the North Luzon Area Representative for the Academe Subsector in the National Social Enterprise Roadmap led by Bayan Family of Foundations. Driven by a deep commitment to social entrepreneurship education and nation-building, Teacher Francis continues to inspire the next generation to pursue entrepreneurship not just for profit, but for purpose.",
  },
  {
    name: "Meeczelle Reyn A. Salvador",
    position: "Entrepreneurship Instructor",
    institution: "Brookfield College Cavite",
    photo: "/fellows-2026/Salvador.webp",
    bio: "Meeczelle Reyn A. Salvador is a magna cum laude graduate of BS Entrepreneurship from Cavite State University and a Registered Marketing Teacher under JA Philippines. Embracing the classroom right after graduation, she is driven by a lifelong mission to share impactful knowledge and grow alongside her students.",
  },
  {
    name: "Arman Vicencio Cruz",
    position: "Founding President",
    institution: "Finance Educators Association (Fin.Ed)",
    photo: "/fellows-2026/Cruz.webp",
    bio: "Arman Vicencio Cruz is an Emerging Guru of Financial Education in the Philippines. He is the Founding President of Finance Educators Association (Fin.Ed), the official organization of Finance Professors and Practitioners in Asia. He is also a multi-awarded educator both in the academe and the industry, in public and private practice. He has conducted Teaching and Research in various Academic Institutions and Industries where he served as a Mentor, esteemed Consultant, and a sought-after speaker including USAID and ASEAN. He achieved work-life balance, and actively involved in various Religious, Community activities, Non-Government Organization (NGO) affiliations, and intergovernmental functions both in National and International arena.",
  },
  {
    name: "Almira Joy L. Lavitoria, CHRA, COAP, CMMS, LPT, MBA",
    position: "Faculty",
    institution: "Far Eastern University Alabang",
    photo: "/fellows-2026/Lavitoria.webp",
    bio: "Ms. Almira Joy L. Lavitoria is a BSBA faculty at the College of Accounts and Business in FEU Alabang. She is a graduate of bachelor of science in business administration major in marketing management at Tarlac State University. In the same institution, she finished her masteral degree in business administration. Currently, she's in the last trimester to complete her academic units in the doctorate program. Ms. Lavitoria is a civil service professional level passer, a licensed professional teacher (LPT), a certified marketing management specialist (CMMS), a certified human resource associate (CHRA) and a certified organization adviser of the Philippines (COAP). For almost 4 years, she is the organization adviser of the Junior Business Executives (JUBEX) student council organization in FEU Alabang. She aspires to create an impact in the academic sector by continuously learning and improving herself to be able to share her knowledge and expertise to her students.",
  },
  {
    name: "Loida M. Tongco, MBA",
    position: "Assistant Professor I",
    institution: "Far Eastern University Alabang",
    photo: "/fellows-2026/Tongco.webp",
    bio: "Loida M. Tongco is an Assistant Professor I with over 20 years of teaching experience in higher education. She holds an MBA from Pamantasan ng Lungsod ng Maynila and has completed 36 units toward a Doctor of Business Administration at St. Paul University Manila. She also brings over six years of experience as a school administrator. Beyond the classroom, she runs a home-based printing services business, reflecting her strong commitment to entrepreneurship and practical learning. Deeply passionate about mentoring and student growth, she finds fulfillment in guiding her Business Plan 1 (Feasibility Study) students at FEU Alabang to turn their ideas into meaningful, socially impactful ventures. She is dedicated to nurturing future leaders who can create sustainable solutions and make a difference in their communities.",
  },
  {
    name: "Ethelmay R. Romero",
    position: "Program Coordinator",
    institution: "Laguna State Polytechnic University",
    photo: "/fellows-2026/Romero.webp",
    bio: "Dr. Ethelmay Ramos Romero is an accomplished educator, researcher, and administrator with expertise in business and office administration. She earned a Post Doctoral degree in Strategic Management and Leadership from Philippine Christian University, a Doctor of Business Administration and a Master in Business Administration from Southern Luzon State University, and a Bachelor of Science in Secretarial Administration from Union College of Laguna. She is also a Licensed Professional Teacher (LPT). With over 21 years of teaching experience, Dr. Romero currently serves as Associate Professor and Program Coordinator for the Bachelor of Science in Office Administration at Laguna State Polytechnic University-Santa Cruz Campus, where she also coordinates the OJT program. She has held key leadership roles in research and curriculum development and previously worked as a Content Writer for the Provincial Government of Laguna. An active international journal reviewer and published author, she has written several instructional books and research publications, reflecting her commitment to academic excellence, research, and professional development.",
  },
  {
    name: "Karl Roland C. Blasco",
    position: "College Instructor",
    institution: "Laguna State Polytechnic University",
    photo: "/fellows-2026/Blasco.webp",
    bio: "Karl Roland C. Blasco is a graduate of Bachelor of Science in Banking and Finance and holds a Master's Degree in Business Management. He is currently pursuing his Doctorate in Business Administration. He is a Licensed Professional Teacher and a Certified Financial Management Specialist. Before joining the academe, he gained valuable industry experience in the fields of finance, accounting, and human resources. His professional background has contributed to his expertise in business and financial management, which he now integrates into his teaching and academic engagements. At present, he is actively involved in higher education, contributing to the development of students in the field of business and management while continuously advancing his research and professional growth.",
  },
  {
    name: "Dr. Marissa L. Dimarucot, DBA",
    position: "Associate Professor III",
    institution: "Laguna State Polytechnic University",
    photo: "/fellows-2026/Dimarucot.webp",
    bio: "Dr. Marissa L. Dimarucot is an Associate Professor III and Program Coordinator of the Bachelor of Science in Entrepreneurship at Laguna State Polytechnic University (LSPU), Santa Cruz Campus, Laguna Philippines. She holds a Doctor of Business Administration, a Master of Business Administration, and a Bachelor of Science in Accountancy. She previously served as Dean of the College of Business Administration and Accountancy providing strategic leadership in academic program development, curriculum enhancement, faculty development and institutional accreditation. Her research interests include entrepreneurship, social entrepreneurship, innovation, sustainable community development, intellectual property, business education, and technology commercialization. She has published scholarly articles in national and international journals, led research and extension initiatives, and presented her work at academic conferences. She has also registered Utility Model (product innovation) with the Intellectual Property Office of the Philippines. Her work focuses on advancing entrepreneurship education, innovation, and sustainable community development through research, extension, and collaborative partnerships.",
  },
  {
    name: "Marlo C. Novino",
    position: "Associate Professor",
    institution: "Mindanao State University – Iligan Institute of Technology",
    photo: "/fellows-2026/Novino.webp",
    bio: "Marlo Novino is an Associate Professor and Chair of the Department of Business and Innovation at the College of Economics, Business, and Accountancy, Mindanao State University-Iligan Institute of Technology (MSU-IIT), Iligan City, Philippines. He previously served as the Community Engagement Lead for iDEYA, MSU-IIT's technology business incubator, where he facilitated regional innovation programs. Additionally, he was a Global Connections Visiting Fellow at The Pennsylvania State University under the YSEALI Professional Fellowship program. Recognized as a 2025 National Finalist for ENEDA's Most Outstanding Entrepreneurship Faculty, he currently serves as a CHED Region 10 Regional Quality Assessor for Business Education. His research interests span academic entrepreneurship, startups, business incubation, Filipino cultural entrepreneurship, and consumer behavior. His current research engagements include halal-related projects, women entrepreneurship and resilience, and corporate entrepreneurship. He is currently pursuing his PhD in Business at De La Salle University Manila, with a primary focus on incubatee startup readiness and the innovation ecosystem.",
  },
  {
    name: "Karl Alvin E. Aglibot",
    position: "Assistant Professor IV",
    institution: "Mindanao State University – General Santos",
    photo: "/fellows-2026/Aglibot.webp",
    bio: "Karl Alvin E. Aglibot is an Instructor in the Bachelor of Elementary Education Department of the College of Education, Mindanao State University-General Santos. His work focuses on educational technology, innovation, and community-engaged learning, and he is currently pursuing doctoral studies in Information Technology Integration. He has participated in national and international professional development programs on educational technology, digital literacy, artificial intelligence, cybersecurity and peace education. His research explores the effective integration of digital technologies to enhance teaching, learning, and student engagement. Beyond the classroom, Karl leads and supports extension initiatives that promote educational innovation and social impact. He serves as Project Leader of Social Impact Innovation and Mentorship for Bachelor of Elementary Education Students and Project TAMBLER, a school-based reading intervention program. He is also a co-founder of CTRL+A, a non-profit organization committed to bridging the digital divide through training, resources, and advocacy that empower communities with essential digital skills. Through his work as an educator, researcher, and community advocate, he promotes innovative, inclusive, and technology-enabled learning opportunities for diverse communities.",
  },
  {
    name: "Dr. Monsour A. Pelmin",
    position: "Professor",
    institution: "Mindanao State University – General Santos City",
    photo: "/fellows-2026/Pelmin.webp",
    bio: "Dr. Monsour A. Pelmin is a Full University Professor VI at Mindanao State University-General Santos (MSU-Gensan), where he also serves as the Quality Assurance and Management Officer and Director of MSU-Gensan. He earned his Doctor of Philosophy in Management from the University of Mindanao in 2020. Demonstrating his commitment to lifelong learning and public service, he also holds a diploma in Women, Peace, and Security and is currently pursuing a Bachelor of Laws at the Mindanao State University College of Law. Dr. Pelmin's professional credentials include certifications as a Certified Human Resource Associate, Certified Hospitality Professional, and Licensed Professional Teacher. His international academic engagements include serving as a Professional Fellow at the Mike Ilitch School of Business, Wayne State University in Detroit, Michigan, USA, and as a Research Fellow at INTI International University, Malaysia. He is likewise an Associate Member of the National Research Council of the Philippines. His areas of expertise and research interest span quality management, entrepreneurship, organizational development and leadership, and hospitality and tourism management. As an educator, researcher, and academic leader, Dr. Pelmin actively contributes to scholarly advancement, institutional excellence, and the promotion of quality education, fostering innovation and continuous improvement in higher education and community development.",
  },
  {
    name: "Esmeraldo D. Sarad, LPT",
    position: "Faculty Member",
    institution: "Mindanao State University – General Santos City",
    photo: "/fellows-2026/Sarad.webp",
    bio: "Esmeraldo D. Sarad, LPT is a faculty member in Mindanao State University - General Santos City, BEED Department. He was a scholar of the Paaral Para sa Sarangani (PPSS) Scholarship Program for four years. He learned his Bachelor of Elementary Education major in General Education from MSU-Gensan, graduating Cum Laude in 2022. He also received the College Service Award during the College of Education Pre-Commencement Exercises in 2022. After graduation, he gained three years of teaching experience (2022-2025) as a private elementary school teacher at Stockbridge American International School - General Santos City Campus. He is currently pursuing his Master of Arts in Education major in Early Childhood Education at Cebu Technological University through its online program. He lives by his teaching mantra: \"Laugh and Learn with Sir Aldo,\" believing that when learning is filled with joy, it becomes a powerful force that shapes lives and transforms futures.",
  },
  {
    name: "Ma. Rica Emilia R. Hermoso, MBA, CMITAP",
    position: "Senior Lecturer II",
    institution: "Miriam College Foundation Inc.",
    photo: "/fellows-2026/Hermoso.webp",
    bio: "Ma. Rica Emilia is currently the Assistant Vice President of Liberty Bank (A Rural Bank) Inc, which is her family-owned bank. Her work in her new position involves thinking of the business plan, strategies and methods for the bank to earn and thrive in the midst of heavy competition and technological developments. She is also a consultant/academic mentor to start-up ventures of entrepreneurship college students in Quezon City. She had her stint in higher education in Miriam College under the Department of Entrepreneurship and Business Administration as part-time faculty and a mentor for special projects on entrepreneurship and finance among the youth. She is also a faculty of Meycauayan College and serves as Business Administration Area Dean. She is a business management student-turned entrepreneur and educator. She finds working on fresh academic and development programs highly stimulating. She is passionate to instill entrepreneurial mindset to young students and for them to be entrepreneurs in the future. Rica took her graduate studies in the field of Business Administration at the Asian Institute of Management at Paseo de Roxas, Legazpi Village, Makati City, Philippines. Her elective term for her MBA was spent in University of St. Gallen, Switzerland. She is a BS Management Minor in International Business and Hispanic Studies graduate in 2011 at Ateneo de Manila University. She also has the post nominal title of CMITAP (Capital Market Investment Teaching Accredited Professional).",
  },
  {
    name: "Francis Louie Mangubat",
    position: "Instructor",
    institution: "Negros Oriental State University",
    photo: "/fellows-2026/Mangubat.webp",
    bio: "Francis Louie C. Mangubat holds an MBA and is currently pursuing a PhD in Management. He teaches business and management-related courses at higher education institutions in the Philippines and online for a U.S.-based higher education institution. He has extensive industry experience in bakery and restaurant consulting in both the Philippines and Indonesia. His academic and professional interests include strategic management, entrepreneurship, and workforce development. As an educator, he is committed to developing socially responsible, globally minded, and entrepreneurial students.",
  },
  {
    name: "Dr. Aileen J. Rioja",
    position: "Professor I",
    institution: "Notre Dame of Marbel University",
    photo: "/fellows-2026/Rioja.webp",
    bio: "Dr. Aileen J. Rioja is a Professor in the College of Business Administration at Notre Dame of Marbel University (NDMU) in South Cotabato, where she has dedicated 12 years to academia. She teaches core courses across Finance, Marketing, and Human Resources, alongside general business subjects including Entrepreneurship, Business Ethics, and Business Statistics. Beyond the classroom, she serves as the club moderator for the Junior People Management Association of the Philippines (JPMAP). Dr. Rioja holds a comprehensive academic background from Ateneo de Davao University, where she earned her Bachelor's Degree in Business Administration (majoring in both Business Management and Marketing Management), a Master's in Business Administration (MBA), and a Doctor of Management in Human Resource Management. Prior to her tenure at NDMU, she gained valuable industry experience as a Manager and Executive Assistant at Skin Doctors Dermatology Clinic, a Consumer Sales Representative for Kimberly-Clark Philippines, and an Administrative Assistant and Corporate Sales Representative for Mosaic Communications Inc. An active researcher, Dr. Rioja has presented her work at various research conferences. Her dissertation, titled \"Work Environment-Job Related Factors and Individual Factors as Drivers of Employee Engagement in DOT Accredited Hotels and Resorts in Region 12,\" was published in an international journal. Blending academic theory with entrepreneurial practice, she previously owned and managed La Rioja Driving School and Marj Laundry Shop in Davao City.",
  },
  {
    name: "Dr. Jeannilyn P. Orating, CMP",
    position: "Assistant Professor IV",
    institution: "One Cainta College",
    photo: "/fellows-2026/Orating.webp",
    bio: "Dr. Jeannilyn P. Orating is a dedicated educator, researcher, and academic professional currently affiliated with One Cainta College. She earned her doctorate degree from the University of Perpetual Help-Dalta System, where she further deepened her expertise in business and educational research. She is also a Certified Marketing Professional and a Certified Lean Six Sigma Yellow Belt, reflecting her commitment to continuous professional development and excellence in her field. Her academic interests focus on sustainability, innovation, and the challenges faced by micro and small enterprises (MSEs), particularly in the context of business continuity and resilience. Her research, titled \"Sustainability Challenges and Business Discontinuity Among Micro and Small Enterprises in Cainta, Rizal,\" highlights her dedication to producing relevant and impactful studies that contribute to both academic knowledge and real-world business practices. As a professor, Dr. Orating is passionate about fostering critical thinking and practical learning among her students. She actively integrates research, technology, and case-based approaches into her teaching, particularly in areas such as e-commerce, financial management, and business strategy. Beyond the classroom, she is actively engaged in academic collaborations, research development, and continuous professional growth. She is committed to mentoring students and fellow researchers, promoting a culture of inquiry, and advancing the role of education in sustainable development.",
  },
  {
    name: "Lurleen M. Lacuna, CPA",
    position: "Budget Officer / Faculty, College of Accounting",
    institution: "Pamantasan ng Lungsod ng Muntinlupa",
    photo: "/fellows-2026/Lacuna.webp",
    bio: "Lurleen T. Mercado-Lacuna, CPA, is an accomplished academic and finance professional with over 20 years of experience in accounting, auditing, and higher education leadership. She has served Pamantasan ng Lungsod ng Muntinlupa as Budget Officer, Program Head of Accountancy, and Dean of the College of Business Administration, where she continues to shape institutional planning and financial management. A Certified Public Accountant with an MBA from De La Salle University, she combines expertise in audit and compliance with a strong commitment to teaching and mentoring. Her research on accounting information systems and socio-economic issues in education highlights her dedication to scholarship and institutional growth. Accredited by the BOA and BIR, and certified in bookkeeping, Ms. Lacuna exemplifies excellence in academic and financial leadership.",
  },
  {
    name: "Dr. Analiza J. Gabayeron, PhD",
    position: "Assistant Professor II",
    institution: "Palawan State University",
    photo: "/fellows-2026/Gabayeron.webp",
    bio: "Dr. Analiza Jalandoni-Gabayeron is a professor at Palawan State University, Narra Campus. She earned her Doctor of Philosophy in Education, major in Educational Management, from New Era University in May 2024. She also earned PhD units at Palawan State University's main campus. She obtained her Master of Arts in Education, major in Leadership and Instruction, as well as her Diploma in Teaching Program and Bachelor of Business Administration, major in Banking and Finance, from Palawan State University Main Campus. Currently, she serves as the Research Coordinator for the BSBA Major in Marketing Management program. She has previously held various positions, including Program Extension Coordinator for BS Entrepreneurship; Faculty Club President at PSU Narra Campus; Campus Quality Assurance Coordinator; Alumni Coordinator; Curriculum and Instructional Materials Coordinator; Disbursing Officer; and Librarian. Additionally, she has served as an adviser and program head for various business-related courses (BSBA, BSHM, and Tourism), as well as for the Choir and Dance Troupe (a titleholder in the Palay Festival). She has also been a coordinator of the Provincial Educational Scholarship Program. Throughout her two decades of service at PSU Narra Campus, she has received several awards, including the Excellent Educator of ACLADEB Award from the Asian + Council of Leaders, Administrators, Deans, and Educators in Business (ACLADEB) and the Gawad Parangal 2021 Loyalty Award from Palawan State University. She has published numerous research papers both nationally and internationally and was a research presenter at the 2019 ENEDA National Conference, organized by the Entrepreneurship Educators' Association of the Philippines, Inc. She has also attended numerous national and international conferences and has organized several seminars at the local and provincial levels. She is a natural negotiator and planner. Her teaching philosophy emphasizes experiential learning, believing that high retention occurs when students are encouraged to discover, analyze, and explore lessons through real-life experiences and application.",
  },
  {
    name: "Erolyn Sumangki-Dilan",
    position: "Instructor",
    institution: "Palawan State University",
    photo: "/fellows-2026/Sumangki.webp",
    bio: "Erolyn Sumangki-Dilan is a graduate of Palawan State University with a Bachelor of Entrepreneurship and the University of Makati with a Master of Development Management and Governance. For the last 20 years, she has been focusing on educating young people, encouraging and helping them to become the best versions of themselves. Her dedication to high-quality teaching has been widely acknowledged, including the most notably 2021 Excellence Educator Award from the Asian+ Council of Leaders, Administrators, Deans, and Educators in Business (ACLADEB), and, in 2025, as a Fully Certified Entrepreneurship Educator from the Wadhwani Entrepreneurship Network (WEN) of the Wadhwani Foundation. These accolades highlight her dedication to professional growth and her effectiveness in the classroom and administrative offices alike. Dilan's professional contributions to the university are multifaceted, spanning administrative and community-focused leadership. She, with the Entrepreneurship faculty, was behind the Project ENTREP activities, which contributed to the BS Entrepreneurship Program passing the PSV, Level 1, and Level 2 accreditation. Because of her dedication to community development, she was designated as the Campus Extension Coordinator from 2018 to 2024 and as the PSU Occidental Cluster Extension Coordinator from 2022 to present. With the cooperation of the administration, faculty, staff, and students, the campus was awarded Rank 1 in extension services among all external campuses, a rank that they have kept till now. Her evaluation task included supervising extension projects, conducting extension activities, and community service as a way to demonstrate her commitment to maintaining the triple bottom line. Along with the business faculty, she oversaw the BS Entrepreneurship Program as its program head, helping it achieve PSV and Level 1 accreditation. Being the biggest population on the campus, it is not easy to handle the students, but with dedication and commitment, together with other faculty members, numerous programs for students' growth and development, despite funding limits, were executed successfully. Aside from being an educator, her versatile skill set is further evidenced by her work as an Administrative Assistant in 2009, where she handled communications and minutes, and as a Special Collecting and Disbursing Officer in 2010, tasked with managing payments, payrolls, and financial liquidations, a role that requires integrity and honesty. To maintain her edge in the evolving field of business education, Dilan is an active member of several professional organizations, including the Royal Institution, the ASEAN Council of Leaders, Administrators, Deans, and Educators in Business, and the Entrepreneurship Educators Association. She is also deeply involved with the PSU-Narra Faculty Association. Her commitment to continuous improvement is reflected in her frequent participation in high-level training programs covering diverse topics such as social enterprise management and design thinking, among others.",
  },
  {
    name: "Annaleah Gallaza Acosta",
    position: "Instructor",
    institution: "Palawan State University – Narra Campus",
    photo: "/fellows-2026/Acosta.webp",
    bio: "Annaleah Gallaza Acosta is a College Instructor at Palawan State University - Narra Campus, where she teaches business and entrepreneurial subjects. She is currently pursuing her Master's in Business Administration at the University of Perpetual Help System DALTA - Las Piñas Campus. Her research interests include product and service innovation, market research, and business sustainability. Beyond academia, she actively serves as a continuously re-elected Sunday School Superintendent, reflecting her commitment to both education and community leadership.",
  },
  {
    name: "Prof. Julrey L. Juarez",
    position: "BS Entrepreneurship Program Head",
    institution: "Palawan State University – Narra Campus",
    photo: "/fellows-2026/Juarez.webp",
    bio: "Julrey L. Juarez, 33, is a dedicated educator and academic administrator with nearly thirteen years of experience in higher education. Currently serving as the Campus ISO Head at Palawan State University (PSU) Narra Campus, he has been instrumental in the institution's recent achievement of ISO Certification following a successful external audit in 2025. His academic career includes 11 years as the Program Head of the BS Entrepreneurship Department at PSU Narra, where he led the department to achieve Level 3 Accreditation in February 2026. Mr. Juarez holds a Master in Business Administration from the Philippine Women's University (2021) and a Bachelor of Science in Entrepreneurship from Palawan State University (2014). He has further professionalized his expertise through specialized programs, including the Master in Entrepreneurship class at The Institute for Enterprise Growth (2020), Social Enterprise Management at Bayan Academy (2023), and certification as a Certified Entrepreneurship Educator (CEE) by WEN Ignite, INC (2025). He is also an Associate Fellow in International Management (AFIM), conferred by the Asian Academy for Excellence Foundation, INC in 2021. Recognized for his contributions to the field, he has received numerous accolades, including Asia's Outstanding Individual in the Field of Business Management (2025), Outstanding and Best Presenter / Best WEN Ignite Educator (2025), Outstanding Individual in the Field of Business Development (2025), Asia's Outstanding Educator of the Year (2024), Young Entrepreneur of the Year (2024), Outstanding Individual in the Field of Entrepreneurship (2023), Distinctive Leadership Excellence in Education Asia Award (2022), and Top 10 Outstanding Educators Asia Award (2019). Beyond his administrative and teaching roles, Mr. Juarez actively engages in research aimed at community development, specifically focusing on marketing strategies for \"Project Ani\" in the Municipality of Narra, Palawan — an initiative dedicated to assisting local farmers with post-harvest crop services. In his personal time, he is an instrumentalist who enjoys playing the guitar and piano, and he is passionate about watching anime and films based on true-to-life stories.",
  },
  {
    name: "Alice A. Morales",
    position: "Lecturer",
    institution: "Quezon City University",
    photo: "/fellows-2026/Morales.webp",
    bio: "Alice Morales is a faculty member in the College of Business who is passionate about empowering students to turn ideas into solutions that create positive change. Through teaching, mentoring, and community engagement, she encourages learners to develop an entrepreneurial mindset, lead with purpose, and make meaningful contributions to society. Alice actively supports academic and extension initiatives that promote innovation, sustainability, and inclusive development. Her work focuses on helping students connect classroom learning with real-world challenges while fostering creativity, collaboration, and social responsibility. As an Enactus Philippines Faculty Fellow 2026, she is honored to support student-led projects that drive social innovation and create lasting impact. She looks forward to collaborating with fellow educators in building stronger and more sustainable communities.",
  },
  {
    name: "Dario C. Malazo",
    position: "Instructor",
    institution: "Quezon City University",
    photo: "/fellows-2026/Malazo.webp",
    bio: "By profession I am an Engineer, but I finished my masters MBA and planning to finish my DBA at EARIST Manila. I started teaching way back 2001 until now. Currently, I am connected at Quezon City University as one of the faculty members under Entrepreneurial Department. My experiences for more than two decades in the academic that does not define me as really a seasoned or a very good teacher, I am also learning and willing to learn more. With this I am hoping that ENACTUS will give me more knowledge and idea that possibly I can apply it since academic is evolving for changes, innovation and improvement.",
  },
  {
    name: "Dr. Jona C. Marquez",
    position: "Instructor II",
    institution: "Quezon City University",
    photo: "/fellows-2026/Marquez.webp",
    bio: "Dr. Jona C. Marquez is a Fulltime Instructor in Quezon City University. She graduated Doctor in Business Administration in Polytechnic University of the Philippines as State scholar. She is a former accountant in Australia and an a former Accounting Officer in Los Angeles, California. She is a member of Ascendens Asia International Researchers Club, Asia-Pacific Consortium of Researchers and Educators, Inc., Philippine Higher Education Research Consortium-Manila, Inc and Philippine Council of Deans and Educators in Business. Her recent publication includes Factors Affecting Online Classes among Entrepreneurship Student of Quezon City University during Pandemic Era (Co-author 2022), Service Quality Strategies of Quick Service Food Industry (2018), Co Author of Graphic Health Warning and Its Impact to Smokers (2017) and Problem and Prospect of Food Franchising in Manila University Belt (2014).",
  },
  {
    name: "Dr. Pierangelo A. Dominguez",
    position: "Professorial Lecturer II",
    institution: "Quezon City University",
    photo: "/fellows-2026/Dominguez.webp",
    bio: "Dr. Pierangelo Arceo Dominguez serves as an Enactus Philippines Faculty Fellow, bringing extensive academic rigor and corporate leadership to youth-led social entrepreneurship. He holds a Doctor of Business Administration from San Beda University (Magna Cum Laude) and a Doctor of Public Safety and Governance from the Philippine Public Safety College. A seasoned educator, Dr. Dominguez teaches at institutions including Quezon City University, San Beda University, and Pamantasan ng Lungsod ng Maynila. His corporate background includes executive leadership roles at Petron Corporation, Ginebra San Miguel, and San Miguel Corporation, alongside public service roles in local economic investment and administration. Dr. Dominguez is a Diplomate in Supply Management, a Lifetime Certified Purchasing Manager, and an active leader in civic organizations such as Rotary International. Through Enactus, he leverages his expertise in strategy, supply chain, and governance to mentor students in creating high-impact social ventures.",
  },
  {
    name: "Dr. Richard Oliver F. Cortez, PhD, DBA, LPT",
    position: "Faculty",
    institution: "Quezon City University",
    photo: "/fellows-2026/Cortez.webp",
    bio: "Dr. Richard Oliver Cortez is a seasoned academician, researcher, and educator with expertise in business and management. With a career in the academe spanning over 26 years, Dr. Cortez has made contributions to the field of marketing and education through research, innovative teaching, and scholarly publications. He earned a Doctor of Business Administration degree from AMA University as well as Doctor in Philosophy from University of Caloocan City in the Philippines. He has been actively involved in academia, holding professorial positions at esteemed institutions. Currently he is affiliated with Quezon City University, AMA University Online Education, Villagers Montessori College, and Quezon Colleges of the North as part-time faculty member. Beyond research and writing, Dr. Cortez is deeply committed to education and mentorship. He has supervised numerous graduate and undergraduate students and are actively involved in curriculum development, ensuring that academic programs remain relevant and impactful. He is an active member of various professional organizations such as the Philippine Council of Deans and Educators in Business (PCDEB), Institute of Certified Management Consultants (ICMC), Philippine Academy of Professionals in Business Education (PAPBE), and Philippine Association for Teachers and Educators (PAFTE). Dr. Cortez has also been invited as resource speaker and participated as member of panel of evaluators in various research exercises.",
  },
  {
    name: "Dr. Ronilo B. Ramilo",
    position: "Faculty",
    institution: "Quezon City University",
    photo: "/fellows-2026/Ramilo.webp",
    bio: "Dr. Ronilo B. Ramilo has been serving as a full-time college professor at the Quezon City University, College of Business Administration, since 2015, specializing in entrepreneurship. Prior to joining the academe, he spent 15 years in the corporate sector, holding various managerial positions. He earned his Doctor in Business Administration degree from the Polytechnic University of the Philippines (PUP) Graduate School. As an active researcher, he has presented research papers at both local and international higher education research conferences. Dr. Ramilo is a member of the Asian Pacific Consortium of Researchers and Educators, Inc. (APCoRE), the Philippine Council of Deans and Educators in Business (PCDEB), the Entrepreneurship Educators Association of the Philippines, Inc. (ENEDA), and the Philippine Association of Collegiate Schools of Business (PACSB). He is also a lifetime associate member of the Ascendens Asia International Researchers Club (AAIRC) and a lifetime member of the Educators Research and Innovation Organization Inc. (ERIO). He has served as the interim alumni officer since 2021 for the College of Business Administration Graduate School Alumni Association of the Polytechnic University of the Philippines.",
  },
  {
    name: "Federico B. Ramos Jr., DBA",
    position: "Program Chair",
    institution: "Quezon City University",
    photo: "/fellows-2026/Ramos.webp",
    bio: "Dr. Federico B. Ramos Jr. is an accomplished academic leader, researcher, and business educator with extensive experience in higher education, administration, and entrepreneurship. He currently serves as Program Chair and Assistant Professor IV at Quezon City University and is also an Associate Professor at De La Salle-College of Saint Benilde. Holding a Doctor in Business Administration, MBA, and a Computer Science degree, he combines expertise in business management and information technology. His professional background includes leadership in human resources, procurement, health and safety, and academic program management. A dedicated researcher and mentor, he has published studies on entrepreneurship, online learning, and organizational performance while advising business research and graduate theses. Prof. Ramos actively participates in national and international conferences, professional organizations, and faculty development programs. His numerous awards and recognitions reflect his commitment to academic excellence, research, innovation, community engagement, and advancing entrepreneurship education in the Philippines.",
  },
  {
    name: "Jessica S. Pagulayan",
    position: "Assistant Professor",
    institution: "Quezon City University",
    photo: "/fellows-2026/Pagulayan.webp",
    bio: "Jessica Sintos-Pagulayan is an Assistant Professor of the Entrepreneurship Department under the College of Business at Quezon City University, where she has served since 2018. She mentors students in Opportunity Seeking, Business Plan Preparation, and Business Plan Implementation, courses designed to shape innovative and sustainable business ventures. She is the former adviser of the QCU Young Entrepreneurs' Society (AY2023-2025) and currently serves as Officer-in-Charge of the Center for Culture and the Arts, Adviser of Tanghalang Quezon City University, and College Coordinator of the QCU Innovation and Technology Support Office (ITSO). Prior to her academic career, she gained three years of industry experience. She is a civil service passer both professional and sub-professional, a licensed professional teacher in secondary education major in Social Science, and holds certifications in Lean Six Sigma both White and Yellow Belt. Jessica earned her BS in Business Administration major in Marketing Management, completed her Master's in Business Administration at the National College of Business and Arts, and is currently pursuing her Doctor in Business Administration dissertation at San Beda University. She also completed the Professional Teaching Certification at the University of the Philippines and an International Diploma in Education and Leadership at Saint James University in partnership with Leadership in Education Academy and Development Philippines, Inc. She is an advocate of sustainability, innovation, creativity, and social responsibility, with a strong commitment to mentoring students and advancing social impact through education and the arts.",
  },
  {
    name: "Melissa Y. Caballes",
    position: "Assistant Professor II",
    institution: "Quezon City University",
    photo: "/fellows-2026/Caballes.webp",
    bio: "Dr. Melissa Y Caballes is a graduate of Doctor of Philosophy in Business Management and a Licensed Professional Teacher and has been in the institution of Quezon City University for 12 years as a Faculty. She has completed numerous training courses and seminars both locally and internationally. She was awarded a Career and Self Development Award by Quezon City Mayor Joy Belmonte and received a Gawad Award as Natatanging Pilipina sa Larangan ng Edukasyon held at Armed Forces of the Philippines on June 12, 2026.",
  },
  {
    name: "Prof. Emmanuel Santos Garcia",
    position: "Faculty",
    institution: "Quezon City University",
    photo: "/fellows-2026/Garcia.webp",
    bio: "Driven by dedication and commitment, showing a profound and wide-ranging knowledge, Prof. Emmanuel Santos Garcia — better known to his colleagues and fondly called by his nickname Ydg or Ymman — has now expanded his expertise through advanced studies. Ydg's journey in education began with a bachelor's degree in A.B. Political Science at FEU and took up another degree course Bachelor of Science in Entrepreneurial Management. He earned his 36 units of master's in business administration and pursued another Master's in Government Management graduated at Pamantasan Lungsod Maynila. He developed a strong foundation in business education subjects aimed to contribute a valuable insight to the field of research. He has actively and continuously participated in several research programs of Quezon City University under the College of Business. He holds a doctoral degree in education and his unwavering dedication and commitment to academic excellence graduated with honor as Magna Cum Laude from the Graduate School of The University of Manila.",
  },
  {
    name: "JRden Fadallan",
    position: "TBI Manager",
    institution: "Romblon State University",
    photo: "/fellows-2026/Fadallan.webp",
    bio: "JRden \"Jake\" Fadallan is the Technology Business Incubator (TBI) Manager of Romblon State University (RombloX), where he leads programs that help student entrepreneurs, faculty researchers, and community-based businesses transform ideas into viable, technology-driven ventures. Through the TBI, he provides hands-on mentoring in innovation, business fundamentals, and digital tools, while building partnerships that expand opportunities for emerging startups in the province. His guidance is grounded in more than 15 years of IT experience with international organizations, including international nonprofit organizations, where he managed enterprise systems across five ASEAN countries, as well as public service in the Philippine government's social services. A Microsoft certified professional, he is passionate about championing innovation and entrepreneurship among young Filipinos, and is currently exploring how emerging AI technologies can empower the next generation of technopreneurs.",
  },
  {
    name: "Prof. Angelo A. Defensor",
    position: "Faculty Professor",
    institution: "San Beda College Alabang",
    photo: "/fellows-2026/Defensor.webp",
    bio: "Prof. Angelo A. Defensor is a seasoned Business Management Professor at San Beda College Alabang with over a decade of classroom experience. He holds a Master's in Business Administration and Economics and Doctor of Philosophy major in Commerce, and is known for making Business exciting and relevant. His interactive and project-based approach encourages students to connect with the industry and explore its impact on the present.",
  },
  {
    name: "Dr. Roman M. Richard",
    position: "CpE Program Chair",
    institution: "Technological Institute of the Philippines – Quezon City",
    photo: "/fellows-2026/Richard.webp",
    bio: "Dr. Roman M. Richard is a computer engineering educator, researcher, and program chair at the Technological Institute of the Philippines - Quezon City. He is a Senior Member of Institute of Electrical and Electronics Engineering (IEEE), and a Professional Computer Engineer, whose work focuses on artificial intelligence, data science, high-performance computing, retrieval-augmented generation, and cyber-physical systems. He has served in academic leadership, industry-linked research, and government-funded innovation projects, while mentoring student teams in national and international technology competitions. As an educator and researcher, he is committed to advancing computer engineering education through emerging technologies, applied research, and industry-responsive academic programs.",
  },
  {
    name: "Engr. Menchie M. Rosales",
    position: "Assistant Professor",
    institution: "Technological Institute of the Philippines – Quezon City",
    photo: "/fellows-2026/Rosales.webp",
    bio: "Engr. Menchie M. Rosales is an assistant professor/faculty member at the Technological Institute of the Philippines (T.I.P.) Quezon City, where she has dedicated 12 years to mentoring the next generation of engineers. A credentialed professional, she holds a Professional Computer Engineer (PCpE) certification from the Computer Engineering Certification Board (CpECB). She earned a Master of Science in Engineering Education major in Computer Engineering and is currently advancing her academic training by pursuing a Doctor in Engineering degree at T.I.P.Q.C. Beyond the classroom, Engr. Rosales is an active researcher and contributor to the local scientific community, having published more than five Scopus-indexed journal articles and engaged as a project researcher/collaborator in a Department of Science and Technology (DOST) funded initiative. For over a decade, she has also served as a dedicated technical adviser for 4th-year college capstone and design projects, bridging academic concepts with practical, industry-ready engineering solutions.",
  },
];

const institutionCount = new Set(fellows.map((f) => f.institution)).size;

export default function FacultyFellows2026() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Faculty Development"
        title={
          <>
            2026 Faculty
            <br />
            <span className="text-foreground/40">Fellows</span>
          </>
        }
        subtitle="Meet the inaugural cohort of the Enactus Philippines Faculty Fellows Program"
      />

      {/* ─── OVERVIEW ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · The 2026 Cohort
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Educators shaping the next generation of{" "}
                <span className="text-foreground/50">changemakers.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                The 2026 Faculty Fellows are educators from universities,
                colleges, and schools across the Philippines who are committed
                to advancing student-led social entrepreneurship through
                mentorship, innovation, and community engagement.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4">
              <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-background p-6">
                <Users className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-3xl font-bold tracking-tight">{fellows.length}</p>
                  <p className="text-sm text-muted-foreground">Faculty Fellows</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-background p-6">
                <Building2 className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-3xl font-bold tracking-tight">{institutionCount}</p>
                  <p className="text-sm text-muted-foreground">Institutions</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── FELLOWS GRID ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mb-12 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                The Fellows
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {fellows.map((f) => (
                <article
                  key={f.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug tracking-tight">
                      {f.name}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      {f.position}
                    </p>
                    <p className="mt-1 text-xs font-medium text-foreground/60">
                      {f.institution}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {f.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
