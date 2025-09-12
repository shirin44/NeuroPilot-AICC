import { Narrator, NarratorRole, Language, Story, StoryEntry , PlaceholderKey, AboutSchema } from '@/types';



export const OUR_STORY_CONTENT: {
    ui: {
      heroTitle: Record<Language, string>;
      diary: Record<Language, string>;
      reflections: Record<Language, string>;
      appreciation: Record<Language, string>;
      media: Record<Language, string>;
      placeholders: Record<PlaceholderKey, Record<Language, string>>;
    };
    intro: Record<Language, string>;
    entries: StoryEntry[];
    reflections: Record<Language, string>;
    appreciation: Record<Language, string[]>;
    gallery: Record<Language, string[]>;
  } = {
    ui: {
      heroTitle: {
        [Language.EN]: "🌍 Our Story – NeuroPilot AICC Journey",
        [Language.VN]: "🌍 Câu chuyện của chúng tôi – Hành trình NeuroPilot AICC",
      },
      diary: { [Language.EN]: "Diary Timeline", [Language.VN]: "Nhật ký hành trình" },
      reflections: { [Language.EN]: "Reflections", [Language.VN]: "Suy ngẫm" },
      appreciation: { [Language.EN]: "Appreciation", [Language.VN]: "Tri ân" },
      media: { [Language.EN]: "Media Gallery", [Language.VN]: "Thư viện hình ảnh" },
      placeholders: {
        TEAM_PHOTO: { [Language.EN]: "TEAM PHOTO", [Language.VN]: "ẢNH ĐỘI NGŨ" },
        BRAINSTORM: { [Language.EN]: "BRAINSTORM IMAGE", [Language.VN]: "ẢNH Ý TƯỞNG" },
        TEAM_CALL: { [Language.EN]: "TEAM CALL IMAGE", [Language.VN]: "ẢNH CUỘC GỌI" },
        BOOTCAMP: { [Language.EN]: "BOOTCAMP IMAGE", [Language.VN]: "ẢNH BOOTCAMP" },
        MEETING_THUY: { [Language.EN]: "MEETING THUY IMAGE", [Language.VN]: "ẢNH GẶP CÔ THUÝ" },
        IDEA_REFINEMENT: { [Language.EN]: "IDEA REFINEMENT IMAGE", [Language.VN]: "ẢNH TINH CHỈNH Ý TƯỞNG" },
        TEAM_LAUGH: { [Language.EN]: "TEAM LAUGH IMAGE", [Language.VN]: "ẢNH CƯỜI ĐÊM KHUYA" },
        SANDY_WORKSHOP: { [Language.EN]: "SANDY WORKSHOP IMAGE", [Language.VN]: "ẢNH WORKSHOP SANDY" },
        DRAFT: { [Language.EN]: "DRAFT IMAGE", [Language.VN]: "ẢNH BẢN NHÁP" },
        TRUNG_MEETING: { [Language.EN]: "TRUNG MEETING IMAGE", [Language.VN]: "ẢNH GẶP ANH TRUNG" },
        SURVEY: { [Language.EN]: "SURVEY IMAGE", [Language.VN]: "ẢNH KHẢO SÁT" },
        FEEDBACK: { [Language.EN]: "FEEDBACK IMAGE", [Language.VN]: "ẢNH PHẢN HỒI" },
        PROPOSAL: { [Language.EN]: "PROPOSAL WORK IMAGE", [Language.VN]: "ẢNH SOẠN ĐỀ XUẤT" },
        KRISTEN: { [Language.EN]: "KRISTEN IMAGE", [Language.VN]: "ẢNH KRISTEN" },
        BUG: { [Language.EN]: "BUG IMAGE", [Language.VN]: "ẢNH LỖI CODE" },
        CODING: { [Language.EN]: "CODING IMAGE", [Language.VN]: "ẢNH CODE" },
        SIMONA: { [Language.EN]: "SIMONA IMAGE", [Language.VN]: "ẢNH SIMONA" },
        TROY: { [Language.EN]: "TROY IMAGE", [Language.VN]: "ẢNH TROY" },
        FINAL_SPRINT: { [Language.EN]: "FINAL SPRINT IMAGE", [Language.VN]: "ẢNH NƯỚC RÚT" },
        REFLECTION: { [Language.EN]: "REFLECTION IMAGE", [Language.VN]: "ẢNH SUY NGẪM" },
        GALLERY: { [Language.EN]: "MEDIA GALLERY", [Language.VN]: "THƯ VIỆN" },
      },
    },
  
    intro: {
      [Language.EN]:
        "When we signed up for the Accessibility Design Competition (ADC) 2025, we didn’t just join a contest. We started a journey — one full of late-night brainstorming, inspiring mentors, real-world insights, and a lot of resilience.\nADC is more than a competition; it’s a national platform for students to tackle barriers in employment for people with disabilities. For us, it became a space to learn, fail, refine, and grow into a team determined to turn interviews from barriers into bridges for autistic adults.",
      [Language.VN]:
        "Khi đăng ký tham gia Cuộc thi Thiết kế Tiếp cận (ADC) 2025, chúng tôi không chỉ bước vào một cuộc thi — chúng tôi bắt đầu một hành trình, đầy những đêm động não muộn, những người cố vấn truyền cảm hứng, những góc nhìn thực tế và rất nhiều kiên trì.\nADC không chỉ là một cuộc thi; đó là nền tảng quốc gia để sinh viên giải quyết rào cản việc làm cho người khuyết tật. Với chúng tôi, đó là không gian để học hỏi, thử và sai, tinh chỉnh và trưởng thành thành một đội ngũ quyết tâm biến các buổi phỏng vấn từ rào cản thành nhịp cầu cho người tự kỷ trưởng thành.",
    },
  
    entries: [
      {
        id: "0801-0808",
        date: {
          [Language.EN]: "1–8 August – Insight Scouting & Early Confusion",
          [Language.VN]: "1–8/8 – Tìm hiểu & Những bối rối ban đầu",
        },
        body: {
          [Language.EN]:
            "Our first week was a whirlwind of ideas that seemed to fly in every direction. We read through ADC resources, explored topics on physical disabilities, and filled our brainstorming boards with more questions than answers. At times it felt chaotic, but that chaos was necessary. Those messy days reminded us that before proposing any solution, we had to slow down and ask the deeper question: why? We created our first personas, sketched rough user flows, and mapped possible problem areas. It wasn’t perfect, but it gave us a starting point.",
          [Language.VN]:
            "Tuần đầu là một cơn lốc ý tưởng. Chúng tôi đọc tài liệu ADC, tìm hiểu về khuyết tật thể chất và lấp đầy bảng ý tưởng bằng nhiều câu hỏi hơn câu trả lời. Cảm giác hỗn loạn — nhưng cần thiết. Những ngày bừa bộn nhắc chúng tôi phải chậm lại và hỏi: “Tại sao?”. Chúng tôi tạo persona đầu tiên, phác luồng người dùng và bản đồ vấn đề. Chưa hoàn hảo, nhưng đủ để bắt đầu.",
        },
        placeholderKey: "BRAINSTORM",
      },
      {
        id: "0809-0812",
        date: {
          [Language.EN]: "9–12 August – Small Steps, Big Questions",
          [Language.VN]: "9–12/8 – Bước nhỏ, câu hỏi lớn",
        },
        body: {
          [Language.EN]:
            "In the days leading up to the Bootcamp, we spent long evenings on calls, jumping between ideas and second-guessing ourselves. Every time we thought we had a clear focus, someone would ask a tough question and send us back to the whiteboard. It was frustrating, but it also showed us how much we cared. We weren’t just looking for an idea — we were searching for the right idea.",
          [Language.VN]:
            "Những ngày trước Bootcamp, chúng tôi dành nhiều tối họp online. Mỗi khi tưởng như đã rõ, một câu hỏi khó lại đưa chúng tôi về bảng trắng. Khó chịu — nhưng cũng cho thấy chúng tôi thật sự quan tâm. Không chỉ cần một ý tưởng, mà là ý tưởng đúng.",
        },
        placeholderKey: "TEAM_CALL",
      },
      {
        id: "0813",
        date: {
          [Language.EN]: "13 August – Bootcamp Kickoff: “Nothing About Us Without Us”",
          [Language.VN]: "13/8 – Khai mạc Bootcamp: “Không có chúng tôi mà lại bàn về chúng tôi”",
        },
        body: {
          [Language.EN]:
            "The Bootcamp transformed us. Sessions on Accessibility & Universal Design and AI & Innovation expanded our thinking beyond features. “Nothing about us, without us” hit home. We pivoted to focus on supporting autistic adults (Level 1) — an underserved space where interviews often become barriers.",
          [Language.VN]:
            "Bootcamp đã thay đổi chúng tôi. Các phiên về “Tiếp cận & Thiết kế toàn diện”, “AI & Đổi mới” mở rộng góc nhìn vượt ngoài tính năng. Câu nói “Không có chúng tôi mà lại bàn về chúng tôi” chạm vào tim. Chúng tôi xoay trục — tập trung hỗ trợ người tự kỷ mức độ 1, nơi phỏng vấn thường thành rào cản.",
        },
        placeholderKey: "BOOTCAMP",
      },
      {
        id: "0814-0815",
        date: {
          [Language.EN]: "14–15 August – Meeting with Ms. Thanh Thuý",
          [Language.VN]: "14–15/8 – Gặp cô Thanh Thuý",
        },
        body: {
          [Language.EN]:
            "We spoke with Ms. Thanh Thuý, an autistic social worker from Da Nang. Her lived realities — communication hurdles, workplace anxiety — turned our abstract ideas into a deeply human mission. We felt urgency and responsibility to design with care.",
          [Language.VN]:
            "Chúng tôi nói chuyện với cô Thanh Thuý, một nhân viên CTXH tự kỷ ở Đà Nẵng. Câu chuyện về giao tiếp, lo âu nơi làm việc… biến ý tưởng trừu tượng thành một sứ mệnh nhân văn. Chúng tôi thấy cấp bách và trách nhiệm phải thiết kế bằng sự thấu cảm.",
        },
        placeholderKey: "MEETING_THUY",
      },
      {
        id: "0816-0819",
        date: {
          [Language.EN]: "16–19 August – Brainstorming & Refinement Days",
          [Language.VN]: "16–19/8 – Ngày động não & tinh chỉnh",
        },
        body: {
          [Language.EN]:
            "Sticky notes, late-night calls, heated debates. We discarded ideas, reshaped others, and kept returning to one theme: the trust gap in interviews. Innovation wasn’t linear — but each refinement brought us closer.",
          [Language.VN]:
            "Giấy note, cuộc gọi đêm, tranh luận. Nhiều ý tưởng bị bỏ, nhiều ý tưởng được tái sinh — nhưng chủ đề luôn trở lại: khoảng cách niềm tin trong phỏng vấn. Đổi mới hiếm khi thẳng tắp — mỗi lần chỉnh sửa đưa ta gần mục tiêu hơn.",
        },
        placeholderKey: "IDEA_REFINEMENT",
      },
      {
        id: "0817",
        date: {
          [Language.EN]: "17 August – A Night of Laughter and Fatigue",
          [Language.VN]: "17/8 – Một đêm mệt nhưng đầy tiếng cười",
        },
        body: {
          [Language.EN]:
            "After failing to agree on a user flow, someone joked our whiteboard looked like spaghetti. We laughed until we cried — and the tension lifted. Joy kept us moving.",
          [Language.VN]:
            "Sau khi bất đồng về user flow, có người đùa bảng trắng như… mỳ Ý. Cả nhóm cười đến rơi nước mắt — rồi nhẹ nhõm. Niềm vui tiếp sức chúng tôi.",
        },
        placeholderKey: "TEAM_LAUGH",
      },
      {
        id: "0820",
        date: {
          [Language.EN]: "20 August – Workshop with Ms. Sandy",
          [Language.VN]: "20/8 – Workshop với cô Sandy",
        },
        body: {
          [Language.EN]:
            "An evening of accessibility with Ms. Sandy ran past midnight. Accessibility isn’t a checkbox — it’s a mindset. We left inspired to bake it into everything.",
          [Language.VN]:
            "Một buổi tối về tiếp cận cùng cô Sandy kéo dài qua nửa đêm. Tiếp cận không phải ô để tích — đó là tư duy. Chúng tôi ra về với cảm hứng đưa nó vào mọi chi tiết.",
        },
        placeholderKey: "SANDY_WORKSHOP",
      },
      {
        id: "0821-0822",
        date: {
          [Language.EN]: "21–22 August – Quiet Work, Endless Drafts",
          [Language.VN]: "21–22/8 – Yên ắng nhưng miệt mài",
        },
        body: {
          [Language.EN]:
            "The quiet days: slides, rewrites, fixes. Not glamorous — but the backbone of progress. Each draft sharpened our direction.",
          [Language.VN]:
            "Những ngày tĩnh lặng: làm slide, viết lại, sửa lỗi. Không hào nhoáng — nhưng là xương sống của tiến bộ. Mỗi bản nháp giúp định hướng rõ hơn.",
        },
        placeholderKey: "DRAFT",
      },
      {
        id: "0823",
        date: {
          [Language.EN]: "23 August – Meeting with Mr. Trung (Vietnam Autism Project)",
          [Language.VN]: "23/8 – Gặp anh Trung (Dự án Tự kỷ Việt Nam)",
        },
        body: {
          [Language.EN]:
            "A decade of experience distilled into one truth: trust is the core barrier — for parents, employers, and autistic adults themselves. Our solution must rebuild trust across all sides.",
          [Language.VN]:
            "Một thập kỷ kinh nghiệm gói trong một sự thật: Niềm tin là rào cản cốt lõi — với phụ huynh, nhà tuyển dụng và chính người tự kỷ. Giải pháp của chúng tôi phải bắc lại nhịp cầu niềm tin ấy.",
        },
        placeholderKey: "TRUNG_MEETING",
      },
      {
        id: "0825",
        date: {
          [Language.EN]: "25 August – Launching Our Survey & Meeting with Thuý Again",
          [Language.VN]: "25/8 – Ra mắt khảo sát & gặp lại cô Thuý",
        },
        body: {
          [Language.EN]:
            "We launched a survey; responses confirmed interviews are the hardest step. Thuý shared more field insights — keeping our feet on the ground.",
          [Language.VN]:
            "Khảo sát xác nhận phỏng vấn là bước khó nhất. Cô Thuý góp thêm góc nhìn thực tế — giúp chúng tôi bám sát đời sống.",
        },
        placeholderKey: "SURVEY",
      },
      {
        id: "0826",
        date: {
          [Language.EN]: "26 August – Feedback with Troy & Sandy",
          [Language.VN]: "26/8 – Phản hồi cùng Troy & Sandy",
        },
        body: {
          [Language.EN]:
            "Direct, challenging feedback exposed weak spots — and gave clarity. We left tighter and more confident.",
          [Language.VN]:
            "Phản hồi thẳng và khó làm lộ điểm yếu — rồi giúp sáng tỏ. Đội ngũ rời buổi gặp với sự gắn kết và tự tin hơn.",
        },
        placeholderKey: "FEEDBACK",
      },
      {
        id: "0827-0831",
        date: {
          [Language.EN]: "27–31 August – Proposal Refinement Week",
          [Language.VN]: "27–31/8 – Tuần tinh chỉnh đề xuất",
        },
        body: {
          [Language.EN]:
            "Endless edits taught us something: writing is also a form of designing. Words shape how others see our work.",
          [Language.VN]:
            "Những chỉnh sửa bất tận dạy chúng tôi: viết cũng là thiết kế. Từng câu chữ định hình cách người khác nhìn dự án.",
        },
        placeholderKey: "PROPOSAL",
      },
      {
        id: "0904",
        date: {
          [Language.EN]: "4 September – Meeting with Ms. Kristen (Imago Work, Hanoi)",
          [Language.VN]: "4/9 – Gặp cô Kristen (Imago Work, Hà Nội)",
        },
        body: {
          [Language.EN]:
            "She asked: Are employers ready? Inclusive hiring is also preparing recruiters — our “Question Cleaner” idea was born.",
          [Language.VN]:
            "Cô hỏi: Liệu nhà tuyển dụng đã sẵn sàng? Hòa nhập còn là chuẩn bị cho người tuyển dụng — “Bộ lọc Câu hỏi” ra đời.",
        },
        placeholderKey: "KRISTEN",
      },
      {
        id: "0906-0907",
        date: {
          [Language.EN]: "6–7 September – When Code Refuses to Cooperate",
          [Language.VN]: "6–7/9 – Khi code không nghe lời",
        },
        body: {
          [Language.EN]:
            "Buttons broke, narrator froze, calm-mode glitched. Frustrating, and funny in hindsight. Each bug taught us to work smarter.",
          [Language.VN]:
            "Nút không chạy, narrator đơ, calm-mode lỗi. Khó chịu — nhưng nghĩ lại thì cũng vui. Mỗi lỗi dạy ta làm tốt hơn.",
        },
        placeholderKey: "BUG",
      },
      {
        id: "0905-0910",
        date: {
          [Language.EN]: "5–10 September – Coding, Refinement & Long Nights",
          [Language.VN]: "5–10/9 – Code, tinh chỉnh & những đêm dài",
        },
        body: {
          [Language.EN]:
            "Narration, STAR modules, calm-mode — small wins fueled us. Inclusion takes skill and emotional patience.",
          [Language.VN]:
            "Narration, mô-đun STAR, calm-mode — mỗi bước nhỏ tiếp sức. Hòa nhập cần kỹ năng lẫn kiên nhẫn cảm xúc.",
        },
        placeholderKey: "CODING",
      },
      {
        id: "0911",
        date: {
          [Language.EN]: "11 September – Meeting with Ms. Simona Bossoni",
          [Language.VN]: "11/9 – Gặp cô Simona Bossoni",
        },
        body: {
          [Language.EN]:
            "Validation from the Head of Child Development (HCMC). She asked to use our app in her clinic — our project felt real.",
          [Language.VN]:
            "Sự công nhận từ Trưởng khoa Phát triển Trẻ em (TP.HCM). Cô muốn dùng ứng dụng trong phòng khám — dự án chạm vào đời sống.",
        },
        placeholderKey: "SIMONA",
      },
      {
        id: "0912-troy",
        date: {
          [Language.EN]: "12 September – Meeting with Troy",
          [Language.VN]: "12/9 – Gặp Troy",
        },
        body: {
          [Language.EN]:
            "Build for scale and resilience. Inclusion must be practical to last.",
          [Language.VN]:
            "Xây để mở rộng và bền vững. Hòa nhập phải thực tế để trường tồn.",
        },
        placeholderKey: "TROY",
      },
      {
        id: "0912-0914",
        date: {
          [Language.EN]: "12–14 September – Final Sprint Before Round 2 Submission",
          [Language.VN]: "12–14/9 – Nước rút trước vòng 2",
        },
        body: {
          [Language.EN]:
            "Coffee cups, late edits, accessible materials. By submission time, it wasn’t just an entry — it was our story of growth.",
          [Language.VN]:
            "Ly cà phê, sửa bài xuyên đêm, tài liệu thân thiện tiếp cận. Đến lúc gửi, đó không chỉ là bài dự thi — mà là câu chuyện trưởng thành.",
        },
        placeholderKey: "FINAL_SPRINT",
      },
    ],
  
    reflections: {
      [Language.EN]:
        "We started scattered, confused, and overwhelmed.\nAlong the way, mentors, parents, and autistic adults shaped our vision.\nWe learned resilience, empathy, and how to design with people, not just for them.\nThe hardest challenges became our most meaningful lessons.",
      [Language.VN]:
        "Chúng tôi khởi đầu tản mát, bối rối và quá tải.\nTrên đường đi, mentor, phụ huynh và người tự kỷ đã định hình tầm nhìn.\nChúng tôi học được sự bền bỉ, thấu cảm và cách thiết kế cùng cộng đồng, không chỉ cho cộng đồng.\nNhững thử thách khó nhất trở thành bài học ý nghĩa nhất.",
    },
  
    appreciation: {
      [Language.EN]: [
        "Sandy Sinn – Founder of CPPWB and Suicide Prevention Educator, whose passion for accessibility reminded us that inclusion is not a checkbox but a mindset. Her late-night workshops lit the spark that kept us moving forward.",
        "Troy Yeo – Founder & COO driving AI-powered automation for SMB and Enterprises, who pushed us to think about scale, sustainability, and long-term impact. His direct feedback sharpened our strategy and strengthened our resolve.",
        "Hieu Phung – for his valuable guidance and insights during our mentor sessions, helping us refine our direction with clarity and purpose.",
        "Ngoc Quach – assistant to Ms. Simona, who works closely with autistic teenagers, and who provided thoughtful perspectives that helped us better understand the day-to-day realities of our target community.",
        "Kristen Lewis – Accessibility Mentor and Employment Inclusion Specialist at Imago Work in Hanoi, with six years of experience in vocational training for young adults with intellectual disabilities. Her expertise shaped our employer-focused features and reminded us to design for readiness on both sides of the hiring process.",
        "Thanh Thuý – an autistic social worker from Đà Nẵng, who shared her lived experiences with openness and generosity. Her stories grounded our project in reality and gave us the courage to tackle invisible barriers.",
        "Mr. Trung – Founder of the Vietnam Autism Project, whose decade of experience confirmed the “trust gap” as the heart of the problem. His insights became the backbone of our proposal.",
        "Ms. Simona Bossoni – Head of the Child Development Department in Ho Chi Minh City, lecturer at the National College of Education, and consultant for many special schools and kindergartens. Her validation of our prototype and interest in using it in her clinic gave us the confidence that our idea could live beyond paper.",
      ],
      [Language.VN]: [
        "Sandy Sinn – Nhà sáng lập CPPWB và nhà giáo dục phòng ngừa tự tử, người đã nhắc chúng tôi rằng hòa nhập không phải ô để tích, mà là tư duy. Những buổi workshop khuya thắp lửa cho hành trình của chúng tôi.",
        "Troy Yeo – Nhà sáng lập & COO về tự động hoá AI cho SME và doanh nghiệp, người thúc đẩy chúng tôi nghĩ về mở rộng, bền vững và tác động dài hạn. Phản hồi thẳng thắn giúp chiến lược sắc nét hơn.",
        "Hiếu Phùng – với những định hướng quý giá trong các buổi mentoring, giúp chúng tôi rõ ràng và đúng hướng.",
        "Ngọc Quách – trợ lý của cô Simona, làm việc gần gũi với thanh thiếu niên tự kỷ, mang đến góc nhìn thực tế giúp hiểu đời sống thường ngày của cộng đồng mục tiêu.",
        "Kristen Lewis – Cố vấn Tiếp cận và Chuyên gia Hoà nhập Việc làm tại Imago Work, Hà Nội; 6 năm kinh nghiệm đào tạo nghề cho thanh niên khuyết tật trí tuệ. Chuyên môn của cô định hình tính năng hướng nhà tuyển dụng và nhấn mạnh việc chuẩn bị từ cả hai phía.",
        "Thanh Thuý – nhân viên công tác xã hội tự kỷ ở Đà Nẵng, người chia sẻ trải nghiệm sống với sự cởi mở và rộng lượng. Câu chuyện của cô tiếp đất cho dự án và tiếp thêm can đảm để chạm vào rào cản vô hình.",
        "Anh Trung – Sáng lập Dự án Tự kỷ Việt Nam, với kinh nghiệm hơn 10 năm, xác nhận “khoảng cách niềm tin” là cốt lõi vấn đề. Nhận định này trở thành xương sống cho đề xuất của chúng tôi.",
        "Cô Simona Bossoni – Trưởng khoa Phát triển Trẻ em TP.HCM, giảng viên Trường Cao đẳng Sư phạm TW, cố vấn cho nhiều trường mầm non và chuyên biệt. Sự công nhận và mong muốn sử dụng ứng dụng tại phòng khám giúp chúng tôi tin dự án có thể đi xa hơn giấy tờ.",
      ],
    },
  
    gallery: {
      [Language.EN]: [
        "Bootcamp Highlights",
        "Mentor Workshops",
        "Proposal Refinement Nights",
        "Prototype Screenshots",
        "Final Team Video",
      ],
      [Language.VN]: [
        "Khoảnh khắc Bootcamp",
        "Workshop cùng Mentor",
        "Những đêm chỉnh sửa đề xuất",
        "Ảnh chụp nguyên mẫu",
        "Video đội ngũ cuối",
      ],
    },
  };
  