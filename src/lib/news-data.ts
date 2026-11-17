export type NewsCategory = "all" | "announcements" | "partnerships" | "events";

export interface NewsAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface NewsImage {
  url: string;
  alt?: string;
  caption?: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  category: NewsCategory;
  imageUrl?: string;
  imageAlt?: string;
  images?: NewsImage[];
  publishedAt: string; // ISO 8601
}

export const AUTHOR: NewsAuthor = {
  name: "Enactus PH",
  avatar: "/enactus.webp",
  role: "Enactus Philippines",
};

export const CATEGORIES: { key: NewsCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "announcements", label: "Announcements" },
  { key: "partnerships", label: "Partnerships" },
  { key: "events", label: "Events" },
];

export const PLACEHOLDER = "placeholder";

const posts: NewsPost[] = [
  {
    slug: "enactus-philippines-officially-relaunches-july-2026",
    title: "Enactus Philippines Is Officially Back",
    body:
      "July 3, 2026 — [Enactus Philippines](https://www.facebook.com/enactusphilippines) is officially back. 🇵🇭\n\nLooking at these photos, it's hard not to feel the weight of what this evening meant. A room full of educators, students, partners, and leaders who all chose to show up for Filipino youth and together, we marked the beginning of something we've been working toward for a long time.\n\nWe signed MOAs with [Khan Academy Philippines Inc.](https://www.facebook.com/khanacademyphilippines), [RG Manabat & Co](https://www.facebook.com/kpmgph), PACSB (Philippine Association of Collegiate Schools of Business), ENEDA (Entrepreneurship Educators Association of the Philippines), and NASEEA ([National Association of Social Enterprise Educators and Administrators](https://www.facebook.com/profile.php?id=100095589697019&__cft__[0]=AZiXOuxTXzUmk9aeD_oi7YhqFPO6Hz9CRnwU5lnawXEBOizhi_oDYchzJewDmejWLzgGP1eo72fo6R17L1z5VKF9WCUhyGJye5vuydBP_yR0vy1FhV4QnA1oCwMnYX_JjZrrclzATe1T)). We inducted our Inaugural Advisory Board.\n\nWe awarded our first cohort of Faculty Fellows. And we laid out the road ahead, regional events across the country, a National Competition and Innovation Festival, and a path to the Enactus World Cup 2026 in Brazil. 🇧🇷\n\nTo everyone who was in that room tonight, thank you. You are part of the foundation of this renewed movement.\n\nThis is only the beginning. 🔥\n\n[View the original announcement on Facebook](https://www.facebook.com/share/p/1FcK77Rv35/)",
    excerpt:
      "Enactus Philippines marked its July 2026 relaunch by signing MOAs with education and entrepreneurship partners, inducting its inaugural advisory board, and welcoming its first Faculty Fellows.",
    category: "announcements",
    imageUrl: "/PACSB%20MOA.jpg",
    imageAlt:
      "Enactus Philippines relaunch and memorandum of agreement signing with partner organizations",
    publishedAt: "2026-07-03T08:00:00Z",
  },
  {
    slug: "enactus-philippines-ja-philippines-partnership",
    title:
      "Enactus Philippines and JA Philippines Formalize Youth Entrepreneurship Partnership",
    body:
      "A partnership built on a shared belief that young Filipinos can change the world when given the right platform.\n\nEnactus Philippines and [JA Philippines, Inc. - A Member of JA Worldwide](https://www.facebook.com/JuniorAchievementPH) have officially signed a Memorandum of Agreement, marking the beginning of a formal collaboration between two of the country's most dedicated organizations in youth entrepreneurship.\n\nThis partnership brings together JA Philippines' decades of experience in equipping young people with the skills to succeed in a global economy, and Enactus Philippines' mission of empowering university students to use entrepreneurial action to create sustainable social, environmental, and economic impact. Together, we are expanding our reach, deepening our programs, and building a stronger ecosystem for the next generation of Filipino student entrepreneurs and leaders.\n\nThis is more than a signed document; it is a shared commitment to the Filipino youth.\n\n## Representing JA Philippines, Inc.\n\n- Dr. Krishna C. Alejandrino, Executive Director\n- Ms. Paula Patrice M. Dela Cruz, Director of Operations\n\n## Representing Enactus Philippines\n\nOn behalf of Mr. Saje Miguel Molato, CEO & Country Lead:\n\n- Mr. [Kristoni Go](https://www.facebook.com/kggo26), Chief Operating Officer & Country Director\n- Ms. [Paula Claire Cuasay](https://www.facebook.com/paula.cuasay06), Programs Associate\n\nHere's to a partnership that creates real, lasting change!\n\n[View the original announcement on Facebook](https://www.facebook.com/share/p/19rF1KqA4r/)",
    excerpt:
      "Enactus Philippines and JA Philippines have signed a Memorandum of Agreement to expand youth entrepreneurship programs and strengthen support for the next generation of Filipino student leaders.",
    category: "partnerships",
    imageUrl: "/JA%20MOA.jpg",
    imageAlt:
      "Representatives of Enactus Philippines and JA Philippines at their Memorandum of Agreement signing",
    publishedAt: "2026-08-10T08:00:00Z",
  },
  {
    slug: "khan-academy-education-impact-challenge-top-4-teams",
    title:
      "Khan Academy Education Impact Challenge Names Top 4 Teams at Enactus Philippines National Competition 2026",
    body:
      "Manila, Philippines — Enactus Philippines has announced the Top 4 winners of the Khan Academy Education Impact Challenge Track at the Enactus Philippines National Competition and Innovation Summit 2026, held on October 9–10 at De La Salle University Manila.\n\nTen teams qualified for the track, and four were named as the top teams. The challenge asked student teams to develop creative, sustainable solutions that advance Khan Academy’s mission of making quality education accessible to everyone.\n\n## Top 4 teams\n\n- University of the Philippines Manila\n- Bicol University – Polangui\n- University of the Philippines Baguio\n- Bulacan State University\n\nThese teams stood out for the creativity and impact of their projects, showing how student-led innovation can widen access to learning and create opportunities in the communities they serve.\n\nThe National Competition and Innovation Summit is Enactus Philippines’ flagship annual event, bringing together university teams from across the country to present entrepreneurial projects that address social, economic, and environmental challenges. The 2026 edition was co-presented by Khan Academy Philippines and co-hosted by the Lasallian Social Enterprise for Economic Development (LSEED) Center at De La Salle University.\n\nFor more information, visit [enactus.ph](https://enactus.ph) or [philippineyouthsummit.org](https://philippineyouthsummit.org).",
    excerpt:
      "Enactus Philippines recognized the Top 4 winners of the Khan Academy Education Impact Challenge, spotlighting student-led educational innovations that expand access to learning across the country.",
    category: "announcements",
    imageUrl: "/summit-photos/11.jpg",
    imageAlt:
      "An award presented during the Enactus Philippines National Competition and Innovation Summit 2026",
    images: [
      {
        url: "/summit-photos/11.jpg",
        alt:
          "An award presented during the Enactus Philippines National Competition and Innovation Summit 2026",
        caption:
          "The 2026 National Competition recognized outstanding student-led projects.",
      },
      {
        url: "/national-2026-hero.png",
        alt: "Enactus Philippines 2026 event hero artwork",
        caption:
          "A collaborative platform designed to strengthen student entrepreneurship and leadership.",
      },
      {
        url: "/summit-photos/1.jpg",
        alt:
          "Delegates gathered in the auditorium at the Enactus Philippines National Competition and Innovation Summit 2026",
        caption:
          "Young innovators gathered to showcase impactful projects and partnerships.",
      },
    ],
    publishedAt: "2026-10-20T08:00:00Z",
  },
  {
    slug: "enactus-philippines-2026-relaunch",
    title:
      "Enactus Philippines to Relaunch in 2026, Ateneo’s Areté Chosen as Launchpad",
    body: "QUEZON CITY, Philippines — Enactus Philippines is set to officially relaunch in 2026, signaling the return of one of the country’s most prominent university-based platforms for entrepreneurship, innovation, leadership, and social impact.\n\nThe official relaunch event is scheduled on July 3, 2026 at Areté, the creativity and innovation hub of Ateneo de Manila University, and is expected to gather distinguished representatives from the government, private sector, academe, development organizations, alumni networks, and student communities from across the country.\n\nOperating in 36 countries worldwide, Enactus is a global organization that empowers university students to use entrepreneurship and innovation to create sustainable solutions to pressing social, economic, and environmental challenges. For more than two decades, Enactus Philippines served as a premier national platform for student-led innovation and community impact, engaging thousands of Filipino students and hundreds of universities across the country.\n\nThe 2026 relaunch marks the beginning of a renewed national movement aimed at rebuilding and expanding the Enactus ecosystem throughout the Philippines. Beyond the return of the national competition, the organization is positioning itself as a long-term platform for youth leadership development, startup incubation, social innovation, and cross-sector collaboration.\n\nAccording to Enactus Philippines, the choice of Areté as the official venue carries strong symbolic and strategic significance. Widely recognized as Ateneo de Manila University’s premier center for creativity, interdisciplinary collaboration, innovation, and cultural exchange, Areté embodies many of the same principles that define the Enactus movement globally.\n\n“Enactus has always stood at the intersection of innovation, entrepreneurship, and purposeful leadership,” said Kristoni G. Go, Country Director and Chief Operating Officer of Enactus Philippines. “We believe that Areté represents the kind of environment where creativity, excellence, collaboration, and transformative ideas thrive — values that strongly resonate with what Enactus seeks to cultivate among Filipino students and future leaders.”\n\nThe relaunch event will feature:\n- Keynote addresses\n- Institutional partnership presentations\n- Networking engagements\n- Discussions focused on innovation, entrepreneurship, sustainability, education, and youth empowerment\n\nThe event is expected to serve as the formal launchpad for the organization’s nationwide operational roadmap for 2026, which includes:\n- Regional events\n- University onboarding initiatives\n- Mentoring and capacity-building activities\n- The National Competition and Innovation Festival later in the year\n\nDignitaries and representatives from various sectors are expected to attend, including government officials, corporate executives, university presidents and administrators, faculty advisers, alumni leaders, development partners, and student innovators from across the Philippines.\n\nThe organization is likewise strengthening partnerships with universities, academic associations, private corporations, and institutional partners in line with its long-term vision of establishing one of the country’s largest university innovation and entrepreneurship ecosystems. Enactus Philippines hopes to significantly expand its reach in the coming years and position the country as one of the leading Enactus centers in Asia.\n\nAs the country prepares for the relaunch, Enactus Philippines expressed optimism that the initiative will help inspire a new generation of Filipino changemakers who will use innovation, business, and collaboration to create meaningful and sustainable impact in their communities.",
    excerpt:
      "Enactus Philippines is set to officially relaunch in 2026 at Ateneo de Manila University’s Areté, signaling the return of one of the country’s most prominent platforms for student entrepreneurship and social impact.",
    category: "announcements",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-06-01T08:00:00Z",
  },
  {
    slug: "enactus-philippines-names-top-12-semi-finalists-early-stage-track",
    title:
      "Enactus Philippines Names Top 12 Semi-Finalists of the Early-Stage Track at the National Competition 2026",
    body:
      "Manila, Philippines — Enactus Philippines has announced the Top 12 Semi-Finalists of the Early-Stage Project Competition Track at the Enactus Philippines National Competition and Innovation Summit 2026, held on October 9–10 at De La Salle University Manila.\n\nThe 12 teams were selected from the Top 30 Finalists. Their projects tackle challenges in agriculture, aquaculture, health, disaster resilience, the environment, and local enterprise, showing the potential of student-led entrepreneurship to create innovative, sustainable, and impactful solutions.\n\n## Top 12 semi-finalists\n\n- Ateneo de Davao University — FermaLink\n- Camarines Sur Polytechnic Colleges – Main Campus — OMEFI\n- Capiz State University – Dayao Campus — BantAI\n- Holy Trinity College of General Santos City — Coco Biochar Project\n- Iloilo Science and Technology University – Iloilo City Campus — LocaLee\n- Iloilo State University of Fisheries Science and Technology – Dingle Campus — RiceConnect\n- Mapúa University – Intramuros Campus — Pili Seal®\n- Mariano Marcos State University – Batac Campus — FarmKonek\n- Quezon City University – San Bartolome Campus — Project TerraShine\n- State University of Northern Negros – Main Campus — GUARD Eco-Vest\n- University of San Carlos – Downtown Campus — Lamok Ligtas\n- West Visayas State University – Main Campus — Team NaeLimango\n\nAmong the semi-finalists, Mapúa University – Intramuros’s Pili Seal® will represent the Philippines at the Enactus World Cup 2026 in São Paulo, Brazil, from November 16 to 19. Enactus Philippines congratulates all 12 semi-finalist teams on this milestone and commends every team that contributed to the success of this year’s competition.\n\nThe National Competition and Innovation Summit is Enactus Philippines’ flagship annual event, bringing together university teams from across the country to present entrepreneurial projects that address social, economic, and environmental challenges.\n\nFor more information, visit [enactus.ph](https://enactus.ph).",
    excerpt:
      "Enactus Philippines selected 12 early-stage teams for the national semi-finals, highlighting student-led solutions in agriculture, health, climate resilience, and community enterprise.",
    category: "announcements",
    imageUrl: "/summit-photos/14.jpg",
    imageAlt:
      "Student teams celebrating their competition awards at the Enactus Philippines National Competition",
    images: [
      {
        url: "/summit-photos/9.jpg",
        alt:
          "Student teams celebrating their competition awards at the Enactus Philippines National Competition",
        caption:
          "Early-stage teams advanced through the competition with community-focused project ideas.",
      },
      {
        url: "/national-2026-hero.png",
        alt: "Enactus 2026 campaign artwork",
        caption: "The 2026 competition brought together teams across Luzon, Visayas, and Mindanao.",
      },
    ],
    publishedAt: "2026-10-13T08:00:00Z",
  },
  {
    slug: "enactus-philippines-announces-top-30-qualifiers-early-stage-track",
    title:
      "Enactus Philippines Announces Top 30 Qualifiers of the Early-Stage Track at the National Competition 2026",
    body:
      "Manila, Philippines — Enactus Philippines has announced the Top 30 Qualifiers of the Early-Stage Project Competition Track at the Enactus Philippines National Competition and Innovation Summit 2026, held on October 9–10 at De La Salle University Manila.\n\nThe teams were recognized for the promise of their early-stage project concepts and their commitment to tackling real-world challenges through innovation, entrepreneurship, and social impact. Coming from universities across Luzon, the Visayas, and Mindanao, the qualifiers presented projects spanning agriculture and fisheries, health and nutrition, disaster resilience, maritime safety, education, the environment, and local enterprise.\n\n## Top 30 qualifiers\n\nThe qualifying universities and projects represented a wide range of community-focused innovations, from AQONE and KAIN to FermaLink, LocaLee, FarmKonek, and Team NaeLimango.\n\nFrom these 30 qualifiers, 12 teams advanced to the semi-final stage of the competition. Enactus Philippines congratulates all 30 qualifier teams. Their participation reflects the creativity, initiative, and entrepreneurial spirit of young innovators working toward a better future.\n\nThe National Competition and Innovation Summit is Enactus Philippines’ flagship annual event, bringing together university teams from across the country to present entrepreneurial projects that address social, economic, and environmental challenges.\n\nFor more information, visit [enactus.ph](https://enactus.ph).",
    excerpt:
      "Enactus Philippines recognized 30 early-stage teams across the country, showing the diversity and promise of student entrepreneurship in solving urgent community challenges.",
    category: "announcements",
    imageUrl: "/national-2026-hero.png",
    imageAlt: "Enactus Philippines national innovation summit artwork",
    publishedAt: "2026-10-11T08:00:00Z",
  },
  {
    slug: "enactus-philippines-launches-national-capacity-building-program",
    title:
      "Enactus Philippines Launches National Capacity-Building Program with Khan Academy Philippines",
    body:
      "Manila, Philippines — Enactus Philippines launched its National Capacity-Building Program on September 25, 2026, with a Kick-off Session held via Zoom from 5:00 to 7:00 PM in partnership with Khan Academy Philippines.\n\nThe program was designed to strengthen the projects of the Top 60 Early-Stage Project Competition teams and the Top 30 Khan Academy Philippines Education Impact Challenge teams, and to prepare them for the Enactus Philippines National Competition and Innovation Summit 2026, held on October 9–10 at De La Salle University Manila. The sessions were also open to the public.\n\n## Speakers\n\n- Mr. Saje Molato, CEO, Siklab Pilipinas and Enactus Philippines\n- Ms. Ryza Martinez-Solaña, Director of Program Implementation, Khan Academy Philippines\n\nThe Kick-off Session opened a nationwide series covering key areas of social enterprise development: needs assessment, business models and financials, innovation, scalability and positive impact, and pitching, storytelling, and Q&A essentials. Sessions were led by partner organizations and regional innovation consortia from Luzon, the Visayas, and Mindanao.\n\nThe program schedule included:\n1. Kick-off Session with Khan Academy Philippines (September 25)\n2. Needs Assessment Session with IDEAS Davao and SCALE NCR (September 28)\n3. Scalability and Positive Impact Session with UMWAD Western Visayas and the Visayas Cluster (September 29)\n4. Business Model, Financials, and Innovation Session with SILLAG Region 1 and the Luzon Cluster (September 30)\n5. Pitching, Storytelling, and Q&A Essentials Session with SICAD-SOX and the Mindanao Cluster (October 1)\n\nKhan Academy Education Impact Challenge submissions closed on September 23, 2026, and finalists then joined the capacity-building sessions to strengthen their projects ahead of the national stage.\n\nEnactus Philippines thanks everyone who took part in the Khan Academy Education Impact Challenge 2026.",
    excerpt:
      "Enactus Philippines launched a nationwide capacity-building program with Khan Academy Philippines to prepare student teams for the 2026 National Competition and Innovation Summit.",
    category: "announcements",
    imageUrl: "/national-2026-hero.png",
    imageAlt: "Enactus Philippines capacity-building kickoff with Khan Academy",
    publishedAt: "2026-09-25T17:00:00Z",
  },
  {
    slug: "enactus-philippines-brings-ideas-davao-and-scale-ncr-for-needs-assessment-session",
    title:
      "Enactus Philippines Brings Together IDEAS Davao and SCALE NCR for Needs Assessment Session",
    body:
      "Manila, Philippines — Enactus Philippines held the second session of its National Capacity-Building Program, “Needs Assessment,” on September 28, 2026, from 5:00 to 7:00 PM via Zoom. The session was delivered in partnership with the Innovation and Development Accelerators Consortium for Startups in Davao Region (IDEAS Davao) and the Strategic and Collaborative Alliance for Leveraging Ecosystem (SCALE NCR).\n\nThe session helped Enactus teams better understand the communities they serve and identify the needs their projects aim to address. This is a key first step in building social enterprises that are truly responsive to community realities.\n\nLinking the innovation ecosystem of the National Capital Region with Mindanao’s entrepreneurial landscape, the partnership showed the power of collaboration across regions. By bringing together diverse perspectives, experiences, and expertise, the session strengthened student entrepreneurs’ capacity to develop solutions that respond to community needs and create meaningful, sustainable impact.\n\n## Speakers\n\n- Ms. Maria Cristina Ibañez, President, SCALE NCR\n- Mr. Rob Gumba, Startup Growth and Development Professional, IDEAS Davao\n\nThe session was part of a five-part program held ahead of the Enactus Philippines National Competition and Innovation Summit 2026. Each session was delivered with partners from different regions of the country, enabling Enactus teams across Luzon, the Visayas, and Mindanao to strengthen their projects through shared learning.",
    excerpt:
      "Enactus Philippines partnered with IDEAS Davao and SCALE NCR to help student entrepreneurs identify the real needs behind their community-based projects.",
    category: "announcements",
    imageUrl: "/Capacity%20Building/Session%202.jpg",
    imageAlt: "Regional partnership session for Enactus teams",
    publishedAt: "2026-09-28T17:00:00Z",
  },
  {
    slug: "enactus-philippines-partners-with-umwad-western-visayas-for-scalability-and-positive-impact-session",
    title:
      "Enactus Philippines Partners with UMWAD Western Visayas for Capacity-Building Session on Scalability and Positive Impact",
    body:
      "Manila, Philippines — Enactus Philippines held the third session of its National Capacity-Building Program, “Scalability and Positive Impact,” on September 29, 2026, from 5:00 to 7:00 PM via Zoom, in partnership with UMWAD Western Visayas and the Visayas Cluster.\n\nThe session focused on how social enterprise initiatives can grow, reach more communities, and create lasting change. It encouraged student entrepreneurs to think beyond their immediate communities and to build solutions that are scalable, sustainable, and impactful.\n\nRepresenting the Visayas innovation ecosystem, the partnership showed the value of connecting regional expertise with entrepreneurial experience to empower the next generation of social entrepreneurs across the country.\n\n## Speakers\n\n- Dr. Carmelo V. Ambut, Executive Director, UMWAD\n- Mr. Daryl Z. Lasafin, Operations Director, FyrLab\n\nThe session was part of a five-part program held ahead of the Enactus Philippines National Competition and Innovation Summit 2026. By connecting regional ecosystems, Enactus Philippines and its partners continue to strengthen social enterprises and empower young changemakers to create solutions that make a difference.",
    excerpt:
      "Enactus Philippines connected student teams with UMWAD Western Visayas to strengthen their understanding of scale, sustainability, and community impact.",
    category: "announcements",
    imageUrl: "/Capacity%20Building/Session%203.jpg",
    imageAlt: "Enactus Philippines capacity-building session on scalability",
    publishedAt: "2026-09-29T17:00:00Z",
  },
  {
    slug: "enactus-philippines-brings-luzon-expertise-to-teams-nationwide-with-sillag-region-1",
    title:
      "Enactus Philippines Brings Luzon Expertise to Teams Nationwide in Capacity-Building Session with SILLAG Region 1",
    body:
      "Manila, Philippines — Enactus Philippines held the fourth session of its National Capacity-Building Program, “Business Model, Financials, and Innovation,” on September 30, 2026, from 5:00 to 7:00 PM via Zoom, in partnership with SILLAG (Sustainability, Innovation, Leadership, Linkages, Access and Growth) Region 1 and the Luzon Cluster.\n\nThe session brought expertise from Luzon’s innovation ecosystem to Enactus teams across the country, all the way to Mindanao. It showed how regional partnerships can go beyond geographic boundaries and create opportunities for shared learning, innovation, and growth.\n\n## Speakers\n\n- Prof. Armie C. Sabugo, Director, MMSU Innovation and Technology Directorate\n- Engr. Roy R. Flores, Core Member, DOST-PSU Aligwas Technology Business Incubator\n- Mr. Nestor Feland B. Panopio, SILLAG Region 1 Management Team and COO, IAM Contact Solutions\n\nDrawing on their experience in business development, financial sustainability, and innovation, the speakers equipped student entrepreneurs with the knowledge and tools to turn promising ideas into viable, sustainable ventures that address real community needs.\n\nThe session was part of a five-part program held ahead of the Enactus Philippines National Competition and Innovation Summit 2026, showing how partnership and cross-regional sharing can strengthen the entire Philippine innovation ecosystem.",
    excerpt:
      "Enactus Philippines brought together Luzon-based innovation leaders and student teams from across the country to sharpen business models, financial planning, and sustainable growth strategies.",
    category: "announcements",
    imageUrl: "/Capacity%20Building/Session%204.jpg",
    imageAlt:
      "Business model, financials, and innovation capacity-building session with SILLAG Region 1",
    publishedAt: "2026-09-30T17:00:00Z",
  },
  {
    slug: "enactus-philippines-concludes-national-capacity-building-program-and-signs-mou-with-dlsu-lseed",
    title:
      "Enactus Philippines Concludes National Capacity-Building Program and Signs MOU with DLSU LSEED",
    body:
      "Manila, Philippines — On October 1, 2026, Enactus Philippines marked two milestones in its work to empower student innovators and strengthen the Philippine social entrepreneurship ecosystem: the conclusion of its National Capacity-Building Program, and the ceremonial signing of a Memorandum of Understanding (MOU) with the Lasallian Social Enterprise for Economic Development (LSEED) Center of De La Salle University.\n\nThe event featured the fifth and final session of the National Capacity-Building Program, “Pitching, Storytelling, and Q&A Essentials,” delivered with the support of the Startup Innovation Consortium to Accelerate Development in SOCCSKSARGEN (SICAD-SOX) and the Mindanao Cluster. The session prepared Enactus teams to present their projects clearly and confidently ahead of the Enactus Philippines National Competition and Innovation Summit 2026.\n\n## Speakers\n\n- Mr. Romeo Jr. E. Tejada, startup enabler and faculty member at Mindanao State University – General Santos\n- Ms. Giselle Eve O. Siladan, Director of SICAD-SOX\n\nThe event also featured the ceremonial MOU signing between Enactus Philippines and DLSU LSEED, the co-host of the National Competition and Innovation Summit 2026. The agreement was signed by Mr. Kristoni G. Go, COO and Country Director of Enactus Philippines, and Dr. Norby R. Salonga, Founding Director of LSEED.\n\nTogether, the two milestones show what is possible when collaboration reaches beyond geographic boundaries and brings institutions, innovation enablers, and communities together under one shared vision. From Luzon to the Visayas and Mindanao, Enactus Philippines continues to build a nationwide ecosystem where student innovation thrives and collaboration creates lasting impact.",
    excerpt:
      "Enactus Philippines concluded its national capacity-building program and formalized a partnership with DLSU LSEED to deepen support for student innovation and entrepreneurship.",
    category: "announcements",
    imageUrl: "/Capacity%20Building/Session%206.jpg",
    imageAlt: "Enactus Philippines MOU signing with DLSU LSEED",
    publishedAt: "2026-10-01T17:00:00Z",
  },
  {
    slug: "pyis-2026-enactus-philippines-national-competition",
    title:
      "PYIS 2026 and the Enactus Philippines National Competition to Be Held Together This October",
    body: "MANILA, Philippines — Siklab Pilipinas and Enactus Philippines are proud to announce that the Philippine Youth Innovation Summit (PYIS) 2026 and the Enactus Philippines National Competition will be held together for the first time, on October 9–10, 2026, at De La Salle University, Manila.\n\nThe two-day event brings together over 200 delegates from more than 10 countries for PYIS, alongside student teams from Enactus Philippines’ network of over 700 universities nationwide competing in the National Competition — making it one of the largest gatherings of youth innovators and student entrepreneurs in the country.\n\n## About PYIS 2026\n\nPYIS is Siklab Pilipinas’ flagship youth innovation summit, convening student delegates, educators, university leaders, innovators, startups, government agencies, and international delegates around three central themes: Artificial Intelligence, International Cooperation, and Sustainable Development. The Summit features expert-led sessions, hands-on workshops, and innovation and pitch development activities for participants from the Philippines, across ASEAN, and beyond.\n\n## About the Enactus Philippines National Competition\n\nThe National Competition brings together Enactus teams from universities across the Philippines to present entrepreneurial projects that address real social, environmental, and economic challenges in their communities. The winning team will go on to represent the Philippines at the Enactus World Cup in São Paulo, competing against teams from over 40 countries.\n\n## Who Will Be There\n\nThe event will convene student delegates, educators, university leaders, innovators, and international delegates, alongside institutional partners including the Department of Education, KPMG Philippines, Khan Academy Philippines, UNESCO-ICHEI, and the National Youth Council Singapore.\n\n## Event Details\n\n- **Date:** October 9–10, 2026\n- **Venue:** De La Salle University, Taft Avenue, Manila\n\nThe event will conclude with a Closing and Awarding Ceremony recognizing the National Competition’s winning team before they advance to represent the Philippines internationally.\n\nFor more information on registration, program details, and partnership opportunities, visit [philippineyouthsummit.org](https://philippineyouthsummit.org) or [enactus.ph](https://enactus.ph).",
    excerpt:
      "Siklab Pilipinas and Enactus Philippines announce that PYIS 2026 and the Enactus Philippines National Competition will be held together on October 9–10, 2026 at De La Salle University, Manila.",
    category: "events",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-09-25T08:00:00Z",
  },
];

export function getNewsPosts(category?: NewsCategory): NewsPost[] {
  const filtered =
    !category || category === "all"
      ? posts
      : posts.filter((p) => p.category === category);
  return [...filtered].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return posts.find((p) => p.slug === slug);
}
