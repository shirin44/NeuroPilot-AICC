import { Narrator, NarratorRole, Language, Story, StoryEntry , PlaceholderKey, AboutSchema } from './types';




////


export const NARRATORS: Record<NarratorRole, Narrator> = {
  [NarratorRole.Jobseeker]: {
    role: NarratorRole.Jobseeker,
    name: { [Language.EN]: 'Fellow pathfinder', [Language.VN]: 'Ứng viên tiềm năng' },
    intro: {
      [Language.EN]: 'Hi, I’m your Pathfinders. Let’s practice interviews step by step. If you ever feel stressed, you can press the Calm button and I’ll guide you through breathing exercises.',
      [Language.VN]: 'Chào bạn, mình là Người bạn đồng hành. Chúng ta hãy cùng nhau luyện tập phỏng vấn. Nếu bạn cảm thấy căng thẳng, hãy nhấn nút "Bình Tĩnh" và mình sẽ hướng dẫn bạn các bài tập hít thở.'
    },
    hover: { [Language.EN]: "Let's practice interviews!", [Language.VN]: "Hãy luyện tập phỏng vấn!" },
    avatars: {
      neutral: '/characters/candidates/candidates_neutral.png',
      happy: '/characters/candidates/candidates_happy.png',
      sad: '/characters/candidates/candidates_sad.png',
    },
    theme: 'blue'
  },
  [NarratorRole.Employer]: {
    role: NarratorRole.Employer,
    name: { [Language.EN]: 'Career ally', [Language.VN]: 'Người đồng hành tương lai' },
    intro: {
      [Language.EN]: 'Hi, I’m your Career ally. I’ll help you create an inclusive interview process and workplace.',
      [Language.VN]: 'Xin chào, tôi là Người đồng hành tương lai. Tôi sẽ giúp bạn tạo ra một quy trình phỏng vấn và môi trường làm việc hòa nhập.'
    },
    hover: { [Language.EN]: "Learn inclusive hiring.", [Language.VN]: "Học cách tuyển dụng hòa nhập." },
    avatars: {
      neutral: '/characters/employers/employers_neutral.png',
      happy: '/characters/employers/employers_happy.png',
      sad: '/characters/employers/employers_sad.png',
    },
    theme: 'purple'
  },
  [NarratorRole.Parent]: {
    role: NarratorRole.Parent,
    name: { [Language.EN]: 'Care partner', [Language.VN]: 'Người đồng hành che chở' },
    intro: {
      [Language.EN]: 'Hello, I’m your Care partner. I’ll share practical strategies to support your child’s independence.',
      [Language.VN]: 'Xin chào, tôi là Tư Vấn Viên. Tôi sẽ chia sẻ những chiến lược thực tế để hỗ trợ sự độc lập của con bạn.'
    },
    hover: { [Language.EN]: "Support your child's growth.", [Language.VN]: "Hỗ trợ sự phát triển của con bạn." },
    avatars: {
      neutral: '/characters/parents/parents_neutral.png',
      happy: '/characters/parents/parents_happy.png',
      sad: '/characters/parents/parents_sad.png',
    },
    theme: 'red'
  },
  [NarratorRole.Volunteer]: {
    role: NarratorRole.Volunteer,
    name: { [Language.EN]: 'Helpful peer', [Language.VN]: 'Bạn hỗ trợ' },
    intro: {
      [Language.EN]: 'Hi, I’m your Helpful peer. Let’s practice empathy and learn how to support autistic friends.',
      [Language.VN]: 'Chào bạn, mình là Bạn hỗ trợ. Hãy cùng thực hành sự đồng cảm và học cách hỗ trợ những người bạn tự kỷ nhé.'
    },
    hover: { [Language.EN]: "Be an empathetic peer.", [Language.VN]: "Trở thành một người bạn đồng cảm." },
    avatars: {
      neutral: '/characters/volunteers/volunteers_neutral.png',
      happy: '/characters/volunteers/volunteers_happy.png',
      sad: '/characters/volunteers/volunteers_sad.png',
    },
    theme: 'green'
  },
};

export const DIALOGUE: Record<string, any> = {
  // Jobseeker
  jobseekerSetup: { [Language.EN]: 'Which practice do you want today? STAR answers, common questions, or small talk? We’ll go at your pace.', [Language.VN]: 'Hôm nay bạn muốn luyện tập phần nào? Trả lời theo phương pháp STAR, câu hỏi thông thường, hay trò chuyện? Chúng ta sẽ đi theo nhịp độ của bạn.' },
  jobseekerPractice: { [Language.EN]: "Okay, let's start with this question. Take your time to think, and then tell me your answer.", [Language.VN]: 'Được rồi, hãy bắt đầu với câu hỏi này. Cứ từ từ suy nghĩ, rồi cho mình biết câu trả lời của bạn nhé.' },
  jobseekerFeedback: { [Language.EN]: 'Good job! You explained the Situation clearly. Next time, try to add what you actually did — that’s the Action part.', [Language.VN]: 'Làm tốt lắm! Bạn đã giải thích Tình huống rất rõ ràng. Lần tới, hãy thử thêm vào những gì bạn đã thực sự làm - đó là phần Hành động.' },
  jobseekerSummary: { [Language.EN]: "You've improved your STAR answers! Practice makes progress. Let's try another one whenever you're ready.", [Language.VN]: 'Bạn đã cải thiện câu trả lời STAR của mình! Luyện tập tạo nên sự tiến bộ. Hãy thử một câu khác khi bạn sẵn sàng nhé.' },
  jobseekerHistory: { [Language.EN]: 'Look at you! Three sessions this week — that’s real consistency. Keep it up!', [Language.VN]: 'Nhìn bạn này! Ba buổi luyện tập trong tuần này - đó là sự kiên trì thực sự. Cố lên nhé!' },
  jobseekerCalm: { [Language.EN]: 'Choose a practice that feels right for you. I am here to guide you.', [Language.VN]: 'Chọn một bài tập bạn cảm thấy phù hợp. Mình ở đây để hướng dẫn bạn.' },

  // Employer
  employerIntro: { [Language.EN]: 'Welcome. Use this tool to rewrite interview questions to be more inclusive and clear. Let\'s start.', [Language.VN]: 'Chào mừng bạn. Hãy sử dụng công cụ này để viết lại các câu hỏi phỏng vấn sao cho hòa nhập và rõ ràng hơn. Bắt đầu nào.' },

  // Parent
  parentIntro: { [Language.EN]: 'I’m your Care partner. I’ll share simple steps to support your child’s interview practice. You’re not alone; small steps build great confidence.', [Language.VN]: 'Tôi là Người đồng hành che chở của bạn. Tôi sẽ chia sẻ những bước đơn giản để hỗ trợ con bạn luyện tập phỏng vấn. Bạn không đơn độc; những bước nhỏ sẽ xây dựng sự tự tin lớn.' },
  parentOverview: { [Language.EN]: 'Here are a few short lessons to guide you. Each one takes just a few minutes. Pick one to start!', [Language.VN]: 'Dưới đây là một vài bài học ngắn để hướng dẫn bạn. Mỗi bài chỉ mất vài phút. Hãy chọn một bài để bắt đầu!' },
  parentModule1: { [Language.EN]: 'Let\'s start with the basics. Understanding these key points can make a world of difference in an interview setting.', [Language.VN]: 'Hãy bắt đầu với những điều cơ bản. Hiểu được những điểm chính này có thể tạo ra sự khác biệt lớn trong môi trường phỏng vấn.' },
  parentModule2: { [Language.EN]: 'The STAR method is a great tool. Let\'s practice how you can coach your child to use it with this simple script.', [Language.VN]: 'Phương pháp STAR là một công cụ tuyệt vời. Hãy thực hành cách bạn có thể hướng dẫn con mình sử dụng nó với kịch bản đơn giản này.' },
  parentModule3: { [Language.EN]: 'A calm environment is key. Here are some tools to manage sensory needs and anxiety before an interview.', [Language.VN]: 'Một môi trường yên tĩnh là chì khóa. Dưới đây là một số công cụ để quản lý nhu cầu cảm giác và lo lắng trước một cuộc phỏng vấn.' },
  parentModule4: { [Language.EN]: 'How we give feedback matters. Let\'s learn how to offer positive, specific praise that builds independence.', [Language.VN]: 'Cách chúng ta đưa ra phản hồi rất quan trọng. Hãy học cách đưa ra lời khen ngợi tích cực, cụ thể để xây dựng sự độc lập.' },
  parentFAQ: { [Language.EN]: 'Many parents have similar questions. Here are some quick, evidence-informed answers.', [Language.VN]: 'Nhiều phụ huynh có những câu hỏi tương tự. Dưới đây là một số câu trả lời nhanh, có cơ sở khoa học.' },
  parentResources: { [Language.EN]: 'You are part of a larger community. Here are some trusted local organizations in Vietnam for more support.', [Language.VN]: 'Bạn là một phần của một cộng đồng lớn hơn. Dưới đây là một số tổ chức địa phương đáng tin cậy tại Việt Nam để được hỗ trợ thêm.' },


  // Volunteer
  volunteerIntro: { [Language.EN]: 'Ready to practice being a great peer supporter? Let\'s begin!', [Language.VN]: 'Sẵn sàng để thực hành trở thành một người hỗ trợ tuyệt vời chưa? Bắt đầu nào!' },

  // Mode Selection Prompts
  modeSelectionPrompt: {
    [NarratorRole.Jobseeker]: {
      [Language.EN]: 'Before we practice, I invite you to walk through my story. It helps to understand the "why" behind our work together.',
      [Language.VN]: 'Trước khi luyện tập, mình mời bạn đi qua câu chuyện của mình. Điều đó giúp hiểu rõ hơn về lý do tại sao chúng ta lại làm việc cùng nhau.'
    },
    [NarratorRole.Employer]: {
      [Language.EN]: 'To build a truly inclusive process, I recommend experiencing this short story first. It highlights perspectives you might not have considered.',
      [Language.VN]: 'Để xây dựng một quy trình thực sự hòa nhập, tôi khuyên bạn nên trải nghiệm câu chuyện ngắn này trước. Nó làm nổi bật những góc nhìn mà bạn có thể chưa xem xét.'
    },
    [NarratorRole.Parent]: {
      [Language.EN]: 'To best support your child, I suggest starting with our shared story. It provides context for all the practical steps we\'ll take.',
      [Language.VN]: 'Để hỗ trợ con bạn tốt nhất, tôi đề nghị bắt đầu với câu chuyện chung của chúng ta. Nó cung cấp bối cảnh cho tất cả các bước thực tế mà chúng ta sẽ thực hiện.'
    },
    [NarratorRole.Volunteer]: {
      [Language.EN]: 'The best way to learn empathy is through stories. Please start here to understand the journey of those we support.',
      [Language.VN]: 'Cách tốt nhất để học sự đồng cảm là qua những câu chuyện. Vui lòng bắt đầu ở đây để hiểu hành trình của những người chúng ta hỗ trợ.'
    }
  },
  modeSelectionReturn: {
    [Language.EN]: 'Welcome back! It\'s great to see you again. Where would you like to go now?',
    [Language.VN]: 'Chào mừng bạn quay trở lại! Rất vui được gặp lại bạn. Bây giờ bạn muốn đi đâu?'
  },
}

export const LOCALIZED_CONTENT: Record<string, { [key in Language]: string }> = {
  // General
  startYourJourney: { [Language.EN]: 'Start Your Journey', [Language.VN]: 'Bắt Đầu Hành Trình Của Bạn' },
  tagline: { [Language.EN]: 'Building trust, one conversation at a time.', [Language.VN]: 'Xây dựng niềm tin, qua từng cuộc trò chuyện.' },
  calm: { [Language.EN]: 'Calm', [Language.VN]: 'Bình Tĩnh' },

  // Breathing Guide
  breatheIn: { [Language.EN]: 'Breathe in...', [Language.VN]: 'Hít vào...' },
  hold: { [Language.EN]: 'Hold...', [Language.VN]: 'Giữ...' },
  breatheOut: { [Language.EN]: 'Breathe out...', [Language.VN]: 'Thở ra...' },
  returnToPractice: { [Language.EN]: 'Return to Practice', [Language.VN]: 'Quay Lại Luyện Tập' },

  // Nav
  home: { [Language.EN]: 'Home', [Language.VN]: 'Trang Chủ' },
  about: { [Language.EN]: 'About', [Language.VN]: 'Về Chúng Tôi' },
  contact: { [Language.EN]: 'Contact', [Language.VN]: 'Liên Hệ' },
  dashboard: { [Language.EN]: 'Dashboard', [Language.VN]: 'Bảng Điều Khiển' },
  practice: { [Language.EN]: 'Practice', [Language.VN]: 'Luyện Tập' },
  history: { [Language.EN]: 'History', [Language.VN]: 'Lịch Sử' },
  OurStory :{ [Language.EN]: 'Our Story', [Language.VN]: 'nhật ký' },

  // Parent Module
  start: { [Language.EN]: 'Start', [Language.VN]: 'Bắt đầu' },
  whatYouWillLearn: { [Language.EN]: "What You'll Learn", [Language.VN]: 'Bạn sẽ học được gì' },
  backToOverview: { [Language.EN]: 'Back to Overview', [Language.VN]: 'Quay lại tổng quan' },
  nextModule: { [Language.EN]: 'Next Module', [Language.VN]: 'Bài học tiếp theo' },
  completeAndNext: { [Language.EN]: 'Complete & Continue', [Language.VN]: 'Hoàn thành & Tiếp tục' },
  finishAndReturn: { [Language.EN]: 'Finish & Return to Overview', [Language.VN]: 'Hoàn thành & Quay lại tổng quan' },
  faq: { [Language.EN]: 'FAQ', [Language.VN]: 'Câu hỏi thường gặp' },
  resources: { [Language.EN]: 'Resources', [Language.VN]: 'Tài nguyên' },
  module1Title: { [Language.EN]: 'Understanding Autism in Interviews', [Language.VN]: 'Hiểu về Tự kỷ trong Phỏng vấn' },
  module2Title: { [Language.EN]: 'Coaching with Scripts (STAR)', [Language.VN]: 'Hướng dẫn bằng Kịch bản (STAR)' },
  module3Title: { [Language.EN]: 'Managing Sensory & Anxiety', [Language.VN]: 'Quản lý Cảm giác & Lo âu' },
  module4Title: { [Language.EN]: 'Positive Feedback & Independence', [Language.VN]: 'Phản hồi Tích cực & Sự độc lập' },

  // Mode Selection
  practiceMode: { [Language.EN]: 'Practice Mode', [Language.VN]: 'Chế độ Luyện tập' },
  storyMode: { [Language.EN]: 'Interactive Situational Story', [Language.VN]: 'Câu chuyện Tình huống' },
  practiceModeDescription: { [Language.EN]: 'Engage in hands-on exercises, skill-building modules, and AI-powered practice sessions.', [Language.VN]: 'Tham gia vào các bài tập thực hành, các học phần xây dựng kỹ năng và các buổi luyện tập do AI hỗ trợ.' },
  storyModeDescription: { [Language.EN]: 'Experience an interactive narrative to build empathy and understand autistic adult\'s experience better.', [Language.VN]: 'Trải nghiệm một câu chuyện tương tác để xây dựng sự đồng cảm và thấu hiểu người tự kỷ trưởng thành hơn.' },
  chooseYourMode: { [Language.EN]: 'Choose Your Mode', [Language.VN]: 'Chọn Chế Độ Của Bạn' },
  startPractice: { [Language.EN]: 'Start Practice', [Language.VN]: 'Bắt đầu Luyện tập' },
  startStory: { [Language.EN]: 'Start Story', [Language.VN]: 'Bắt đầu Câu chuyện' },
  recommended: { [Language.EN]: 'Recommended First', [Language.VN]: 'Nên Bắt Đầu' },

  // Story Player
  viewChoices: { en: 'View Your Choices', vi: 'Xem lựa chọn của bạn' },
  hideChoices: { en: 'Hide Your Choices', vi: 'Ẩn lựa chọn của bạn' },
  yourChoice: { en: 'Your choice:', vi: 'Lựa chọn của bạn:' },
  generatingFeedback: { en: 'Generating feedback…', vi: 'Đang tạo phản hồi…' },
  aiFeedback: { en: 'AI Feedback', vi: 'Phản hồi từ AI' },
  completeAllScenes: { en: 'Please make a selection in every scene to finish the story.', vi: 'Hãy chọn ở tất cả các cảnh để hoàn thành.' },
  nextScene: { [Language.EN]: 'Next Scene', [Language.VN]: 'Cảnh tiếp theo' },
  finishStory: { [Language.EN]: 'Finish Story', [Language.VN]: 'Kết thúc câu chuyện' },
  yourReflection: { [Language.EN]: 'Your Reflection (select one)', [Language.VN]: 'Suy ngẫm của bạn (chọn một)' },
  yourReflectionMulti: { [Language.EN]: 'Your Reflection (select all that apply)', [Language.VN]: 'Suy ngẫm của bạn (chọn tất cả các mục phù hợp)' },
};


export const PARENT_CONTENT = {
  modules: [
    { id: 'module1', title: LOCALIZED_CONTENT.module1Title, time: { [Language.EN]: '2 min read', [Language.VN]: '2 phút đọc' } },
    { id: 'module2', title: LOCALIZED_CONTENT.module2Title, time: { [Language.EN]: '3 min practice', [Language.VN]: '3 phút thực hành' } },
    { id: 'module3', title: LOCALIZED_CONTENT.module3Title, time: { [Language.EN]: '3 min toolkit', [Language.VN]: '3 phút công cụ' } },
    { id: 'module4', title: LOCALIZED_CONTENT.module4Title, time: { [Language.EN]: '2 min read', [Language.VN]: '2 phút đọc' } },
  ],
  faqs: [
    {
      q: { [Language.EN]: 'What if my child avoids eye contact?', [Language.VN]: 'Nếu con tôi tránh giao tiếp bằng mắt thì sao?' },
      a: { [Language.EN]: 'It\'s often a way to focus better on listening. Encourage alternatives like nodding or brief glances. It is not a sign of dishonesty.', [Language.VN]: 'Đó thường là cách để tập trung lắng nghe tốt hơn. Hãy khuyến khích các cách thay thế như gật đầu hoặc liếc nhìn nhanh. Đó không phải là dấu hiệu của sự không trung thực.' }
    },
    {
      q: { [Language.EN]: 'How to handle "stimming" (self-stimulatory behavior)?', [Language.VN]: 'Làm thế nào để xử lý hành vi tự kích thích?' },
      a: { [Language.EN]: 'Stimming is a natural way to regulate anxiety. As long as it\'s not harmful, it\'s best to allow it. A small, quiet fidget tool can be helpful.', [Language.VN]: 'Hành vi tự kích thích là một cách tự nhiên để điều chỉnh sự lo lắng. Miễn là nó không gây hại, tốt nhất là cho phép nó. Một công cụ nhỏ, yên tĩnh có thể hữu ích.' }
    },
    {
      q: { [Language.EN]: 'Should they disclose their autism?', [Language.VN]: 'Con có nên tiết lộ về chứng tự kỷ của mình không?' },
      a: { [Language.EN]: 'This is a personal choice. Practice helps them describe their strengths and needs, whether they choose to disclose or not. Focus on their comfort and context.', [Language.VN]: 'Đây là một lựa chọn cá nhân. Luyện tập giúp họ mô tả điểm mạnh và nhu cầu của mình, cho dù họ chọn tiết lộ hay không. Hãy tập trung vào sự thoải mái và bối cảnh của họ.' }
    },
  ],
  resources: [
    {
      name: 'Vietnam Autism Network (VAN)',
      desc: { [Language.EN]: 'A leading network connecting families, professionals, and resources across Vietnam.', [Language.VN]: 'Một mạng lưới hàng đầu kết nối các gia đình, chuyên gia và tài nguyên trên khắp Việt Nam.' },
      url: '#'
    },
    {
      name: 'Saigon Children\'s Charity',
      desc: { [Language.EN]: 'Offers programs that support disadvantaged children, including those with disabilities.', [Language.VN]: 'Cung cấp các chương trình hỗ trợ trẻ em có hoàn cảnh khó khăn, bao gồm cả trẻ khuyết tật.' },
      url: '#'
    },
    {
      name: 'Action to the Community Development Institute (ACDC)',
      desc: { [Language.EN]: 'Works to ensure high quality of life for persons with disabilities in Vietnam.', [Language.VN]: 'Hoạt động để đảm bảo chất lượng cuộc sống cao cho người khuyết tật tại Việt Nam.' },
      url: '#'
    },
    {
      name: 'Vietnam\'s Autism Project (VAP)',
      desc: { [Language.EN]: 'Economic model project for Autistic People in Vietnam', [Language.VN]: 'Dự Án Mô Hình Kinh Tế cho người Tự Kỷ Việt Nam.' },
      url: '#'
    }
  ]
};

export const CALM_PRACTICES = {
  bloom: {
    title: { [Language.EN]: 'Breathing Bloom', [Language.VN]: 'Hơi thở Nở hoa' },
    description: { [Language.EN]: 'Watch a calm, animated flower slowly bloom and then fade in a gentle, repeating cycle. Try to sync your breath with its movement.', [Language.VN]: 'Quan sát một bông hoa hoạt hình nhẹ nhàng nở ra rồi tàn đi trong một chu kỳ lặp lại. Cố gắng đồng bộ hơi thở của bạn với chuyển động của nó.' },
  },
  tracing: {
    title: { [Language.EN]: 'Tracing Breaths', [Language.VN]: 'Theo dấu Hơi thở' },
    description: { [Language.EN]: 'Follow a simple shape as it slowly traces itself on the screen. This gentle exercise helps sync your breath with a calm, predictable visual rhythm.', [Language.VN]: 'Theo dõi một hình dạng đơn giản khi nó từ từ tự vẽ trên màn hình. Bài tập nhẹ nhàng này giúp đồng bộ hơi thở của bạn với một nhịp điệu hình ảnh bình tĩnh, có thể đoán trước.' },
  },
  flow: {
    title: { [Language.EN]: 'Gentle Color Flow', [Language.VN]: 'Dòng chảy Màu sắc' },
    description: { [Language.EN]: 'Watch as soft clouds of color drift and blend across your screen in a slow, constant loop. There\'s no goal here, just a calm, quiet space.', [Language.VN]: 'Quan sát những đám mây màu sắc mềm mại trôi và hòa quyện trên màn hình của bạn trong một vòng lặp chậm, liên tục. Không có mục tiêu, chỉ là một không gian yên tĩnh.' },
  },
  tap: {
    title: { [Language.EN]: 'Steady Rhythm Tap', [Language.VN]: 'Nhịp điệu Ổn định' },
    description: { [Language.EN]: 'Listen to a simple, steady beat and gently tap your fingers or foot along with the sound. This exercise helps ground you in the present moment.', [Language.VN]: 'Lắng nghe một nhịp điệu đơn giản, ổn định và nhẹ nhàng gõ ngón tay hoặc chân của bạn theo âm thanh. Bài tập này giúp bạn tập trung vào khoảnh khắc hiện tại.' },
  },
};
export const STORY_CONTENT: Record<NarratorRole, Story> = {
  [NarratorRole.Employer]: {
    title: {
      [Language.EN]: "Seeing Beyond First Impressions",
      [Language.VN]: "Nhìn xa hơn ấn tượng ban đầu"
    },
    description: {
      [Language.EN]: "Step into the perspective of an employer interviewing a neurodivergent candidate — notice how perceptions shift when you focus on skills instead of stereotypes.",
      [Language.VN]: "Đặt mình vào góc nhìn của một nhà tuyển dụng khi phỏng vấn ứng viên khác biệt thần kinh — nhận ra sự thay đổi khi bạn tập trung vào kỹ năng thay vì định kiến."
    },
    scenes: [
      {
        title: { [Language.EN]: "Scene 1: The Small Talk", [Language.VN]: "Cảnh 1: Chào hỏi ban đầu" },
        text: {
          [Language.EN]: "You greet Linh and ask: 'Tell me a bit about yourself.' She looks down, pauses, and replies briefly: 'I studied accounting. I like organizing files.' She doesn’t smile or make eye contact.",
          [Language.VN]: "Bạn chào Linh và hỏi: 'Hãy giới thiệu một chút về bản thân.' Cô ấy cúi xuống, ngập ngừng và trả lời ngắn gọn: 'Tôi học kế toán. Tôi thích sắp xếp hồ sơ.' Cô không cười hay giao tiếp bằng mắt."
        },
        choices: [
          {
            text: { [Language.EN]: "She seems very quiet. Maybe she’s not interested.", [Language.VN]: "Cô ấy có vẻ rất im lặng. Có lẽ cô ấy không hứng thú." },
            affirmation: { [Language.EN]: "🌟 It’s easy to mistake quietness for disinterest — but many autistic candidates are simply processing.", [Language.VN]: "🌟 Rất dễ nhầm sự im lặng thành thiếu hứng thú — nhưng nhiều ứng viên tự kỷ chỉ đang xử lý thông tin." }
          },
          {
            text: { [Language.EN]: "She might be nervous — I’ll keep going and see if she warms up.", [Language.VN]: "Có thể cô ấy đang lo lắng — tôi sẽ tiếp tục và xem cô ấy có thoải mái hơn không." },
            affirmation: { [Language.EN]: "🌟 Seeing nerves as natural instead of weakness shows empathy.", [Language.VN]: "🌟 Nhìn nhận sự lo lắng như điều tự nhiên thay vì yếu kém thể hiện sự thấu cảm." }
          },
          {
            text: { [Language.EN]: "She’s not giving me much to work with, so it’s hard to judge her.", [Language.VN]: "Cô ấy không cho tôi nhiều thông tin, thật khó để đánh giá." },
            affirmation: { [Language.EN]: "🌟 ‘Hard to judge’ often favors extroverts — structured tasks reveal true skills.", [Language.VN]: "🌟 'Khó đánh giá' thường thiên về người hướng ngoại — các nhiệm vụ có cấu trúc mới bộc lộ kỹ năng thực sự." }
          },
          {
            text: { [Language.EN]: "Hmm, she seems direct. Maybe she just prefers to get to the point.", [Language.VN]: "Ừm, cô ấy có vẻ thẳng thắn. Có lẽ cô ấy chỉ thích đi thẳng vào vấn đề." },
            affirmation: { [Language.EN]: "🌟 Respecting directness as clarity, not rudeness, makes you inclusive.", [Language.VN]: "🌟 Tôn trọng sự thẳng thắn như sự rõ ràng chứ không phải thô lỗ giúp bạn trở nên bao dung hơn." }
          }
        ]
      },
      {
        title: { [Language.EN]: "Scene 2: The Hypothetical Question", [Language.VN]: "Cảnh 2: Câu hỏi giả định" },
        text: {
          [Language.EN]: "You ask: 'What would you do if your manager suddenly asked you to lead a team project?' Linh hesitates, then says quietly: 'I’ve never done that before, so I’m not sure.'",
          [Language.VN]: "Bạn hỏi: 'Nếu quản lý yêu cầu bạn bất ngờ lãnh đạo một dự án nhóm thì bạn sẽ làm gì?' Linh ngập ngừng rồi nói nhỏ: 'Tôi chưa từng làm điều đó, nên tôi không chắc.'"
        },
        choices: [
          {
            text: { [Language.EN]: "She doesn’t seem prepared — maybe she lacks flexibility.", [Language.VN]: "Cô ấy có vẻ không chuẩn bị — có lẽ thiếu linh hoạt." },
            affirmation: { [Language.EN]: "🌟 Abstract questions can be harder — reframing helps candidates show strengths.", [Language.VN]: "🌟 Những câu hỏi trừu tượng có thể khó hơn — đặt lại câu hỏi giúp ứng viên thể hiện thế mạnh." }
          },
          {
            text: { [Language.EN]: "She’s being honest. Some candidates would make something up.", [Language.VN]: "Cô ấy đang thành thật. Một số ứng viên khác có thể bịa ra câu trả lời." },
            affirmation: { [Language.EN]: "🌟 Valuing honesty builds trust and fairness.", [Language.VN]: "🌟 Trân trọng sự thành thật xây dựng niềm tin và công bằng." }
          },
          {
            text: { [Language.EN]: "This role doesn’t really need leadership skills anyway.", [Language.VN]: "Thực ra vai trò này cũng không cần kỹ năng lãnh đạo." },
            affirmation: { [Language.EN]: "🌟 Not every role needs leadership — valuing relevant skills prevents unfair bias.", [Language.VN]: "🌟 Không phải vai trò nào cũng cần lãnh đạo — trân trọng kỹ năng liên quan giúp tránh thiên vị." }
          },
          {
            text: { [Language.EN]: "She seems stuck. Maybe I need to rephrase the question.", [Language.VN]: "Cô ấy có vẻ bối rối. Có lẽ tôi nên đặt lại câu hỏi." },
            affirmation: { [Language.EN]: "🌟 Flexibility in questioning lets hidden strengths emerge.", [Language.VN]: "🌟 Linh hoạt trong cách đặt câu hỏi cho phép thế mạnh tiềm ẩn được bộc lộ." }
          }
        ]
      },
      {
        title: { [Language.EN]: "Scene 3: The Task Demonstration", [Language.VN]: "Cảnh 3: Bài tập thực hành" },
        text: {
          [Language.EN]: "You give Linh a short exercise: sorting invoices. She focuses, works quickly, and finishes with near-perfect accuracy. She even suggests a clearer labeling system.",
          [Language.VN]: "Bạn đưa Linh một bài tập ngắn: sắp xếp hóa đơn. Cô tập trung, làm nhanh và gần như hoàn hảo. Cô thậm chí đề xuất một cách dán nhãn rõ ràng hơn."
        },
        choices: [
          {
            text: { [Language.EN]: "Wow, she’s clearly more comfortable with hands-on tasks than talking.", [Language.VN]: "Wow, cô ấy rõ ràng thoải mái hơn với việc thực hành so với nói chuyện." },
            affirmation: { [Language.EN]: "🌟 Real work reveals true talent — skills speak louder than small talk.", [Language.VN]: "🌟 Công việc thực tế phơi bày tài năng thật — kỹ năng quan trọng hơn lời xã giao." }
          },
          {
            text: { [Language.EN]: "She surprised me — I wasn’t expecting that level of accuracy.", [Language.VN]: "Cô ấy khiến tôi bất ngờ — tôi không nghĩ độ chính xác cao đến vậy." },
            affirmation: { [Language.EN]: "🌟 Precision beyond expectations deserves recognition.", [Language.VN]: "🌟 Sự chính xác vượt mong đợi xứng đáng được công nhận." }
          },
          {
            text: { [Language.EN]: "Interesting, she found a better system than the one I gave her.", [Language.VN]: "Thật thú vị, cô ấy tìm ra hệ thống tốt hơn cả tôi đưa." },
            affirmation: { [Language.EN]: "🌟 Innovation in real time is a gift for any team.", [Language.VN]: "🌟 Sự sáng tạo ngay tại chỗ là món quà cho bất kỳ đội ngũ nào." }
          },
          {
            text: { [Language.EN]: "Her performance here doesn’t erase the awkwardness I noticed earlier.", [Language.VN]: "Hiệu suất này không xóa đi sự vụng về tôi nhận thấy trước đó." },
            affirmation: { [Language.EN]: "🌟 Dwelling on awkwardness risks missing real skills — fairness means weighing results.", [Language.VN]: "🌟 Chỉ tập trung vào sự vụng về sẽ bỏ lỡ kỹ năng thực — công bằng nghĩa là đánh giá kết quả." }
          }
        ]
      },
      {
        title: { [Language.EN]: "Scene 4: The Reflection", [Language.VN]: "Cảnh 4: Suy ngẫm" },
        text: {
          [Language.EN]: "After the interview, you review your notes. Linh struggled with small talk and abstract questions, but excelled in concrete tasks.",
          [Language.VN]: "Sau buổi phỏng vấn, bạn xem lại ghi chú. Linh gặp khó với trò chuyện xã giao và câu hỏi trừu tượng, nhưng xuất sắc trong các nhiệm vụ cụ thể."
        },
        choices: [
          {
            text: { [Language.EN]: "I should trust my first impression — communication style is still important.", [Language.VN]: "Tôi nên tin vào ấn tượng đầu tiên — phong cách giao tiếp vẫn quan trọng." },
            affirmation: { [Language.EN]: "🌟 First impressions often favor extroverts — fairness means questioning instinct.", [Language.VN]: "🌟 Ấn tượng đầu tiên thường thiên về người hướng ngoại — công bằng nghĩa là biết nghi ngờ trực giác." }
          },
          {
            text: { [Language.EN]: "Maybe my interview style didn’t give her the best chance to shine.", [Language.VN]: "Có lẽ cách phỏng vấn của tôi không cho cô ấy cơ hội tốt nhất để tỏa sáng." },
            affirmation: { [Language.EN]: "🌟 Recognizing limits in your process is leadership in action.", [Language.VN]: "🌟 Nhận ra giới hạn trong quy trình của mình chính là hành động lãnh đạo." }
          },
          {
            text: { [Language.EN]: "I’m torn — she has clear strengths but also some areas of concern.", [Language.VN]: "Tôi phân vân — cô ấy có thế mạnh rõ ràng nhưng cũng có điểm đáng lo." },
            affirmation: { [Language.EN]: "🌟 Uncertainty shows care — reflecting before deciding is progress.", [Language.VN]: "🌟 Sự phân vân thể hiện sự quan tâm — suy nghĩ kỹ trước khi quyết định là một bước tiến." }
          },
          {
            text: { [Language.EN]: "This experience makes me curious about adjusting interviews for different candidates.", [Language.VN]: "Trải nghiệm này khiến tôi tò mò về việc điều chỉnh phỏng vấn cho các ứng viên khác nhau." },
            affirmation: { [Language.EN]: "🌟 Curiosity drives inclusion — openness is already change in motion.", [Language.VN]: "🌟 Sự tò mò thúc đẩy hòa nhập — cởi mở chính là sự thay đổi đang diễn ra." }
          }
        ]
      }
    ],
    closingAffirmation: {
      [Language.EN]: "💡 Your openness has the power to redefine hiring. By seeing beyond stereotypes, you unlock potential for both people and business.",
      [Language.VN]: "💡 Sự cởi mở của bạn có thể tái định nghĩa tuyển dụng. Khi vượt ra khỏi định kiến, bạn khai mở tiềm năng cho cả con người và doanh nghiệp."
    }
  },

    [NarratorRole.Jobseeker]: {
      title: { [Language.EN]: "Interactive Situational Story", [Language.VN]: "Câu chuyện Tình huống" },
      description: { [Language.EN]: "You will be Lan, a high-functioning autistic adult finding her way in the professional world. Let's follow Lan's story of self-discovery and finding her place in the professional world.", [Language.VN]: "Bạn sẽ hóa thân thành Lan, một người tự kỷ chức năng cao đang làm quen với con đường sự nghiệp của mình.Theo dõi câu chuyện của Lan về việc khám phá bản thân và tìm vị trí trong thế giới chuyên nghiệp." },
      scenes: [
        {
          title: { [Language.EN]: "Scene 1: Masking", [Language.VN]: "Cảnh 1: Cố gắng hoà nhập" },
          text: { [Language.EN]: "Every morning before stepping into the office, you wonder: Should I act like everyone else today?", [Language.VN]: "Mỗi buổi sáng trước khi bước vào văn phòng, bạn tự hỏi: Hôm nay mình có nên hành động giống như mọi người không?" },
          choices: [
            { text: { [Language.EN]: "How do you respond?", [Language.VN]: "Bạn thường phản ứng thế nào?" }, isMultiSelect: true },
            { text: { [Language.EN]: "Force eye contact, smile, and copy how others talk — even though it drains you.", [Language.VN]: "Ép mình giao tiếp bằng mắt, mỉm cười và bắt chước cách người khác nói chuyện — dù điều đó khiến bạn kiệt sức." }, affirmation: { [Language.EN]: "🌟 Trying to fit into an environment that is not designed for you takes lots of strength - but your worth isn’t measured by imitation. You deserve the peace of being fully yourself.", [Language.VN]: "🌟 Việc cố gắng hòa nhập trong một môi trường khác với bạn đòi hỏi rất nhiều năng lượng — nhưng giá trị của bạn không nằm ở việc cố gắng trở thành người khác. Bạn xứng đáng được bình yên khi là chính mình." } },
            { text: { [Language.EN]: "Stay quiet, letting people think you’re distant.", [Language.VN]: "Giữ im lặng, để người khác nghĩ rằng bạn xa cách." }, affirmation: { [Language.EN]: "🌟 People are usually uncomfortable with silence. Little do they know, it is you trying to be mindful of social interactions.", [Language.VN]: "🌟 Mọi người thường thấy im lặng là khó chịu, nhưng ít ai biết rằng đó là cách bạn đang cân nhắc và quan tâm đến sự tương tác với người khác." } },
            { text: { [Language.EN]: "Switch depending on who’s around.", [Language.VN]: "Thay đổi bản thân tùy vào những người xung quanh." }, affirmation: { [Language.EN]: "🌟 Your adaptability shows awareness — but you shouldn’t have to split yourself to belong.", [Language.VN]: "🌟 Sự linh hoạt của bạn cho thấy bạn rất tinh tế — nhưng bạn không cần phải chia nhỏ bản thân chỉ để được chấp nhận." } },
            { text: { [Language.EN]: "Have stopped masking much at all.", [Language.VN]: "Hầu như không còn phải che giấu nữa." }, affirmation: { [Language.EN]: "🌟 Letting your real self show is brave. That honesty is a gift.", [Language.VN]: "🌟 Can đảm để bộc lộ con người thật của mình là một điều quý giá. Sự chân thành ấy chính là món quà bạn mang đến." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 2: Sensory Overload", [Language.VN]: "Cảnh 2: Quá tải giác quan" },
          text: { [Language.EN]: "The office is crowded, computers buzzing, phones ringing, lunch smells floating in. Your body tenses.", [Language.VN]: "Văn phòng đông đúc, tiếng máy tính ù ù, chuông điện thoại reo, mùi thức ăn trưa lan tỏa. Cơ thể bạn căng cứng." },
          choices: [
            { text: { [Language.EN]: "What affects you most?", [Language.VN]: "Điều gì ảnh hưởng đến bạn nhất?" }, isMultiSelect: true },
            { text: { [Language.EN]: "The bright lights that give you headaches.", [Language.VN]: "Ánh sáng chói lóa khiến bạn đau đầu." }, affirmation: { [Language.EN]: "🌟 Your sensitivity to light is real. Listening to your body is wisdom, not weakness.", [Language.VN]: "🌟 Sự nhạy cảm với ánh sáng của bạn là thật. Lắng nghe cơ thể mình là sự khôn ngoan, không phải yếu đuối." } },
            { text: { [Language.EN]: "The endless noise that overwhelms you.", [Language.VN]: "Tiếng ồn không ngớt khiến bạn choáng ngợp." }, affirmation: { [Language.EN]: "🌟 Noise can overwhelm, and that’s valid. You deserve calm spaces.", [Language.VN]: "🌟 Tiếng ồn có thể khiến bạn choáng ngợp, và điều đó là hoàn toàn có thật. Bạn xứng đáng có những không gian yên tĩnh." } },
            { text: { [Language.EN]: "The strong smells that make it hard to focus.", [Language.VN]: "Những mùi hương nồng nặc khiến bạn khó tập trung." }, affirmation: { [Language.EN]: "🌟 Strong smells affect you deeply — it’s part of how your senses work uniquely.", [Language.VN]: "🌟 Những mùi hương nồng nặc ảnh hưởng mạnh mẽ đến bạn — đó là một phần sự độc đáo trong cách giác quan của bạn hoạt động." } },
            { text: { [Language.EN]: "The closeness of too many people that makes you shut down.", [Language.VN]: "Sự chen chúc của quá nhiều người khiến bạn thu mình lại." }, affirmation: { [Language.EN]: "🌟 Feeling tense in crowded spaces is natural — you are not alone in this.", [Language.VN]: "🌟 Cảm thấy căng thẳng trong những nơi đông đúc là điều tự nhiên — bạn không hề đơn độc trong điều này." } },
            { text: { [Language.EN]: "I don’t feel overloaded that often.", [Language.VN]: "Tôi không thường xuyên cảm thấy quá tải." }, affirmation: { [Language.EN]: "🌟 Your comfort with sensory input is just as valid. Every journey is unique.", [Language.VN]: "🌟 Sự thoải mái của bạn với các không gian xung quanh là một điều tốt. Mỗi người sẽ có một cảm nhận khác nhau." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 3: Family Pressure", [Language.VN]: "Cảnh 3: Áp lực gia đình" },
          text: { [Language.EN]: "When you return home, your parents talk about your future. Their words sting, even if they mean well.", [Language.VN]: "Khi bạn về nhà, bố mẹ nói về tương lai của bạn. Lời nói của họ làm bạn tổn thương, dù họ có ý tốt." },
          choices: [
            { text: { [Language.EN]: "What do you hear?", [Language.VN]: "Bạn nghe thấy gì?" }, isMultiSelect: true },
            { text: { [Language.EN]: "They say you’re smart but “not social,” so you won’t succeed.", [Language.VN]: "Họ nói rằng bạn thông minh nhưng 'không hòa đồng', nên sẽ không thành công." }, affirmation: { [Language.EN]: "🌟 Hearing that hurts — but your worth is not tied to being ‘social’.", [Language.VN]: "🌟 Bạn không xứng đáng bị nghe những điều đó — giá trị của bạn không phụ thuộc vào việc 'hòa đồng'." } },
            { text: { [Language.EN]: "They insist you marry before focusing on your career.", [Language.VN]: "Họ khăng khăng rằng bạn phải kết hôn trước khi tập trung vào sự nghiệp." }, affirmation: { [Language.EN]: "🌟 You have the right to build your own path before anyone else’s expectations.", [Language.VN]: "🌟 Bạn có quyền xây dựng con đường của riêng mình mà không dựa vào kỳ vọng của người khác." } },
            { text: { [Language.EN]: "They compare you to cousins or friends.", [Language.VN]: "Họ so sánh bạn với anh chị em họ hoặc bạn bè." }, affirmation: { [Language.EN]: "🌟 Comparison is unfair. Your journey has its own pace and value.", [Language.VN]: "🌟 Việc bị so sánh thật không công bằng. Hành trình của bạn có nhịp điệu và giá trị rất riêng." } },
            { text: { [Language.EN]: "They are supportive, without judgment.", [Language.VN]: "Họ ủng hộ bạn mà không phán xét." }, affirmation: { [Language.EN]: "🌟 Having support without judgment is rare and precious — treasure it.", [Language.VN]: "🌟 Có được sự ủng hộ không kèm phán xét là điều hiếm có và quý giá — hãy trân trọng điều đó." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 4: Interviews", [Language.VN]: "Cảnh 4: Các cuộc phỏng vấn" },
          text: { [Language.EN]: "A week later, you go to a job interview. The panel smiles politely, then throws questions at you.", [Language.VN]: "Một tuần sau, bạn đi phỏng vấn xin việc. Nhà tuyển dụng hỏi bạn một cách khá dồn dập" },
          choices: [
            { text: { [Language.EN]: "What is your experience?", [Language.VN]: "Trải nghiệm của bạn là gì?" }, isMultiSelect: true },
            { text: { [Language.EN]: "Confused by vague, open-ended questions.", [Language.VN]: "Bối rối trước những câu hỏi mở, mơ hồ." }, affirmation: { [Language.EN]: "🌟 Abstract questions can be unfair. Your clarity lies in real skills, not riddles.", [Language.VN]: "🌟 Những câu hỏi trừu tượng có thể thật bất công. Sự rõ ràng của bạn nằm ở kỹ năng thực tế, không phải những câu đố." } },
            { text: { [Language.EN]: "Freeze when they ask about strengths and weaknesses.", [Language.VN]: "'Đứng hình', bối rối khi họ hỏi về điểm mạnh và điểm yếu." }, affirmation: { [Language.EN]: "🌟 Freezing doesn’t erase your strengths — they’re still there.", [Language.VN]: "🌟 Việc bối rối không làm điểm mạnh của bạn giảm đi." } },
            { text: { [Language.EN]: "Know the answers but struggle to explain fast enough.", [Language.VN]: "Biết câu trả lời nhưng khó diễn đạt đủ nhanh." }, affirmation: { [Language.EN]: "🌟 Thinking deeply takes time. Your value isn’t measured by speed.", [Language.VN]: "🌟 Suy nghĩ sâu cần thời gian. Giá trị của bạn không đo bằng tốc độ." } },
            { text: { [Language.EN]: "Shine more when given practical tasks instead of talking.", [Language.VN]: "Tỏa sáng hơn khi được giao nhiệm vụ thực tế thay vì nói chuyện." }, affirmation: { [Language.EN]: "🌟 Hands-on skills reveal your brilliance — your ability speaks louder than words.", [Language.VN]: "🌟 Kỹ năng thực hành cho thấy sự xuất sắc của bạn — khả năng của bạn còn làm bạn toả sáng hơn lời nói thông thường." } },

          ]
        },
        {
          title: { [Language.EN]: "Scene 5: Anxiety", [Language.VN]: "Cảnh 5: Lo âu" },
          text: { [Language.EN]: "After weeks of working and trying to “fit in,” your body feels heavy. Anxiety grows.", [Language.VN]: "Sau nhiều tuần làm việc và cố gắng 'hòa nhập', cơ thể bạn cảm thấy nặng nề. Sự lo lắng ngày càng lớn." },
          choices: [
            { text: { [Language.EN]: "How does it show up for you?", [Language.VN]: "Nó biểu hiện với bạn như thế nào?" }, isMultiSelect: true },
            { text: { [Language.EN]: "Feeling exhausted after masking all day.", [Language.VN]: "Cảm thấy kiệt sức sau một ngày dài phải 'đeo mặt nạ'." }, affirmation: { [Language.EN]: "🌟 Masking all day drains anyone. Your tiredness is proof of effort, not failure.", [Language.VN]: "🌟 Cả ngày phải 'đeo mặt nạ' sẽ khiến bất kỳ ai kiệt sức. Sự mệt mỏi của bạn là minh chứng cho nỗ lực, không phải thất bại." } },
            { text: { [Language.EN]: "Panicking before deadlines or meetings.", [Language.VN]: "Lo lắng hoảng sợ trước các hạn chót hoặc cuộc họp." }, affirmation: { [Language.EN]: "🌟 Your anxiety shows how much you care about doing well.", [Language.VN]: "🌟 Sự lo lắng của bạn cho thấy bạn thật sự quan tâm đến việc làm tốt." } },
            { text: { [Language.EN]: "Avoiding social events just to recharge.", [Language.VN]: "Tránh các sự kiện xã hội chỉ để nạp lại năng lượng." }, affirmation: { [Language.EN]: "🌟 Choosing rest over draining events is self-respect.", [Language.VN]: "🌟 Chọn nghỉ ngơi thay vì ép mình vào những sự kiện mệt mỏi chính là sự tôn trọng bản thân." } },
            { text: { [Language.EN]: "I rarely feel burnout at all.", [Language.VN]: "Tôi hiếm khi cảm thấy kiệt sức." }, affirmation: { [Language.EN]: "🌟 Your balance protects you — it’s a strength too.", [Language.VN]: "🌟 Sự cân bằng của bạn đang bảo vệ chính bạn — đó cũng là một điểm mạnh." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 6: Late Diagnosis", [Language.VN]: "Cảnh 6: Chẩn đoán muộn" },
          text: { [Language.EN]: "One night, scrolling on your phone, you read an article about autism in adults. The stories sound like yours.", [Language.VN]: "Một buổi tối, khi lướt điện thoại, bạn đọc được một bài báo về chứng tự kỷ ở người lớn. Những câu chuyện nghe giống như của bạn." },
          choices: [
            { text: { [Language.EN]: "Does any of this sound familiar?", [Language.VN]: "Điều nào trong số này nghe quen thuộc với bạn?" }, isMultiSelect: true },
            { text: { [Language.EN]: "Always called “lazy” or “different” as a child.", [Language.VN]: "Khi còn nhỏ, bạn luôn bị gọi là 'lười biếng' hay 'khác biệt'." }, affirmation: { [Language.EN]: "🌟 Being called ‘lazy’ or ‘different’ said more about their lack of understanding than about you. Your pace, your way of being, has always had value.", [Language.VN]: "🌟 Những gì họ nói phản ánh sự thiếu hiểu biết của họ. Nhịp điệu và cách sống của bạn luôn có giá trị riêng." } },
            { text: { [Language.EN]: "Teachers and colleagues thought you were rude or shy.", [Language.VN]: "Giáo viên và đồng nghiệp từng nghĩ bạn thô lỗ hoặc nhút nhát." }, affirmation: { [Language.EN]: "🌟 People will always have different opinions about you. If it’s not coming from a person with your best interest in mind, it’s not worth caring about.", [Language.VN]: "🌟 Người khác sẽ luôn có những ý kiến khác nhau về bạn. Nếu điều đó không xuất phát từ sự quan tâm chân thành cho bạn, thì bạn không cần phải bận tâm." } },
            { text: { [Language.EN]: "Only discovered autism after 20.", [Language.VN]: "Chỉ phát hiện ra mình là người tự kỷ sau tuổi 20." }, affirmation: { [Language.EN]: "🌟 Finding answers later still gives power — your story continues with clarity.", [Language.VN]: "🌟 Việc biết được chẩn đoán của mình muộn vẫn không phải là điều tệ - câu chuyện của bạn vẫn sẽ tiếp tục với nhiều sự rõ ràng hơn." } },
            { text: { [Language.EN]: "Still suspect but don’t have a diagnosis.", [Language.VN]: "Vẫn nghi ngờ nhưng chưa có chẩn đoán chính thức." }, affirmation: { [Language.EN]: "🌟 Even without a paper, your lived experience is valid.", [Language.VN]: "🌟 Dù chưa có chẩn đoán rõ ràng, trải nghiệm của bạn vẫn hoàn toàn có giá trị." } },

          ]
        },
        {
          title: { [Language.EN]: "Scene 7: Being Seen", [Language.VN]: "Cảnh 7: Được thấu hiểu" },
          text: { [Language.EN]: "One day, at work, something changes. A difficult project confuses everyone else, but you quietly organize it step by step. You see patterns no one else can. When you present your solution, your manager looks at you with surprise and respect: “Lan, you see what others cannot.” In that moment, you finally feel seen — not for pretending to fit in, but for your true abilities.", [Language.VN]: "Một ngày nọ, tại nơi làm việc, có điều gì đó thay đổi. Một dự án khó khiến mọi người bối rối, nhưng bạn lặng lẽ sắp xếp nó từng bước một. Bạn nhìn thấy những quy luật mà không ai khác có thể. Khi bạn trình bày giải pháp của mình, người quản lý nhìn bạn với sự ngạc nhiên và tôn trọng: 'Lan, em thấy được những gì người khác không thể.' Ngay lúc đó, bạn cuối cùng cũng cảm thấy được nhìn nhận - không phải vì giả vờ hòa nhập, mà vì khả năng thực sự của bạn." },
          choices: [
            { text: { [Language.EN]: "Have you had this moment?", [Language.VN]: "Bạn đã từng có khoảnh khắc này chưa?" }, isMultiSelect: true },
            { text: { [Language.EN]: "Yes, a moment when my talent was recognized.", [Language.VN]: "Rồi, đó là khi tài năng của tôi được công nhận." }, affirmation: { [Language.EN]: "🌟 That moment of recognition shows what’s always been true — your mind holds strengths the world needs.", [Language.VN]: "🌟 Khoảnh khắc ấy chứng minh một điều vốn luôn đúng — trong bạn có những kỹ năng mà thế giới cần." } },
            { text: { [Language.EN]: "Someone noticed my special skill, creativity, or focus.", [Language.VN]: "Ai đó đã nhận ra kỹ năng đặc biệt, sự sáng tạo hoặc khả năng tập trung của tôi." }, affirmation: { [Language.EN]: "🌟 That moment of recognition shows what’s always been true — your mind holds strengths the world needs.", [Language.VN]: "🌟 Khoảnh khắc được nhìn nhận ấy cho thấy một sự thật vốn luôn tồn tại — kỹ năng của bạn chứa đựng những giá trị mà thế giới cần." } },
            { text: { [Language.EN]: "I am still waiting for that moment to come.", [Language.VN]: "Tôi vẫn đang chờ khoảnh khắc ấy đến." }, affirmation: { [Language.EN]: "🌟 Even if no one has seen it yet, your gifts are real. Recognition will come.", [Language.VN]: "🌟 Dù chưa ai nhìn thấy, tài năng vẫn luôn ở đó. Rồi sự công nhận cũng sẽ đến." } },
          ]
        },
      ],
      closingAffirmation: {
        [Language.EN]: "💡 You deserve to be seen not for how well you pretend, but for the brilliance that is naturally yours.", [Language.VN]: "💡 Bạn xứng đáng được nhìn nhận không phải vì bạn che giấu giỏi đến đâu, mà vì ánh sáng vốn có trong chính con người bạn."
    }
    },
    [NarratorRole.Parent]: {
      title: { [Language.EN]: "Climbing Together", [Language.VN]: "Cùng nhau Vượt khó" },
      description: { [Language.EN]: "Navigate the hopes and challenges of supporting a neurodivergent child entering the workforce.", [Language.VN]: "Điều hướng những hy vọng và thách thức khi hỗ trợ một con bước vào thị trường lao động." },
      scenes:
      [
        {
          title: { [Language.EN]: "Scene 1: Morning Routine – Finding Rhythm", [Language.VN]: "Cảnh 1: Buổi sáng – Tìm nhịp điệu" },
          text: { [Language.EN]: "Minh hesitates at the noise outside and struggles with his shirt. It’s one of many small battles you face together each morning.", [Language.VN]: "Minh ngập ngừng trước tiếng ồn bên ngoài và loay hoay với chiếc áo. Đó là một trong nhiều thử thách nhỏ mà bạn cùng con đối diện mỗi sáng." },
          choices: [
            { text: { [Language.EN]: "You take a deep breath, guide him step by step, and celebrate when he succeeds.", [Language.VN]: "Bạn hít một hơi thật sâu, hướng dẫn từng bước và ăn mừng khi con làm được." }, affirmation: { [Language.EN]: "🌟 Celebrating small successes helps your child feel proud and capable.", [Language.VN]: "🌟 Ăn mừng những thành công nhỏ giúp con cảm thấy tự hào và có khả năng." } },
            { text: { [Language.EN]: "You pause, reminding yourself that progress often comes slowly but surely.", [Language.VN]: "Bạn dừng lại, nhắc nhở bản thân rằng tiến bộ thường đến chậm mà chắc." }, affirmation: { [Language.EN]: "🌟 Patience with progress shows your deep understanding and steady love.", [Language.VN]: "🌟 Kiên nhẫn với sự tiến bộ thể hiện sự thấu hiểu và tình yêu bền bỉ của bạn." } },
            { text: { [Language.EN]: "You turn the moment into play — making him laugh while finishing the task.", [Language.VN]: "Bạn biến khoảnh khắc thành trò chơi — khiến con bật cười trong khi hoàn thành việc." }, affirmation: { [Language.EN]: "🌟 Bringing joy into challenges turns struggle into connection.", [Language.VN]: "🌟 Mang niềm vui vào thử thách biến khó khăn thành sự gắn kết." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 2: Balancing Finances", [Language.VN]: "Cảnh 2: Cân bằng tài chính" },
          text: { [Language.EN]: "At the kitchen table, you plan the week’s expenses — therapy, rent, food. It feels like solving a puzzle.", [Language.VN]: "Tại bàn bếp, bạn lên kế hoạch chi tiêu trong tuần — trị liệu, tiền thuê nhà, tiền ăn. Mọi thứ giống như một bài toán ghép hình." },
          choices: [
            { text: { [Language.EN]: "You prioritize Minh’s bus fare to class, knowing it supports his growth.", [Language.VN]: "Bạn ưu tiên tiền xe buýt để Minh đến lớp, vì biết rằng điều đó giúp con phát triển." }, affirmation: { [Language.EN]: "🌟 Investing in growth is a gift that builds your child’s independence.", [Language.VN]: "🌟 Đầu tư cho sự phát triển là món quà xây dựng sự tự lập cho con." } },
            { text: { [Language.EN]: "You look for creative ways to save while keeping the family cared for.", [Language.VN]: "Bạn tìm những cách sáng tạo để tiết kiệm trong khi vẫn chăm lo cho cả gia đình." }, affirmation: { [Language.EN]: "🌟 Finding solutions shows your resourcefulness and care for the whole family.", [Language.VN]: "🌟 Tìm giải pháp cho thấy sự khéo léo và tình yêu thương dành cho cả gia đình." } },
            { text: { [Language.EN]: "You remind yourself that asking for community support is a strength, not a weakness.", [Language.VN]: "Bạn tự nhắc mình rằng việc nhờ sự giúp đỡ từ cộng đồng là sức mạnh, không phải yếu đuối." }, affirmation: { [Language.EN]: "🌟 Reaching out is strength — community grows when you let it in.", [Language.VN]: "🌟 Chủ động tìm sự hỗ trợ là sức mạnh — cộng đồng lớn mạnh khi bạn mở lòng." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 3: Facing Comments from Others", [Language.VN]: "Cảnh 3: Đối mặt với lời bàn tán" },
          text: { [Language.EN]: "At a family gathering, someone whispers: ‘Why can’t Minh be like others?’ Another smiles awkwardly.", [Language.VN]: "Trong một buổi họp mặt gia đình, ai đó thì thầm: ‘Tại sao Minh không thể giống như những đứa trẻ khác?’ Một người khác cười gượng gạo." },
          choices: [
            { text: { [Language.EN]: "You gently share how Minh has been learning new skills.", [Language.VN]: "Bạn nhẹ nhàng chia sẻ rằng Minh đang học được những kỹ năng mới." }, affirmation: { [Language.EN]: "🌟 Highlighting his progress shifts the story from stigma to strength.", [Language.VN]: "🌟 Việc nhấn mạnh sự tiến bộ biến câu chuyện từ định kiến thành sức mạnh." } },
            { text: { [Language.EN]: "You choose to ignore, focusing instead on Minh’s joy in the moment.", [Language.VN]: "Bạn chọn bỏ qua, tập trung vào niềm vui của Minh trong khoảnh khắc đó." }, affirmation: { [Language.EN]: "🌟 Protecting joy shows that love matters more than judgment.", [Language.VN]: "🌟 Bảo vệ niềm vui cho thấy tình yêu quan trọng hơn sự phán xét." } },
            { text: { [Language.EN]: "You calmly say, ‘He’s on his own path — and we’re proud of it.’", [Language.VN]: "Bạn bình tĩnh nói: ‘Con đang đi trên con đường của riêng mình — và chúng tôi tự hào về điều đó.’" }, affirmation: { [Language.EN]: "🌟 Claiming pride in his journey teaches others what acceptance looks like.", [Language.VN]: "🌟 Khẳng định niềm tự hào về hành trình của con dạy người khác hiểu thế nào là sự chấp nhận." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 4: Searching for Opportunities", [Language.VN]: "Cảnh 4: Tìm kiếm cơ hội" },
          text: { [Language.EN]: "You and Minh visit several workplaces. Some hesitate, unsure of how he’ll fit in.", [Language.VN]: "Bạn và Minh ghé qua nhiều nơi làm việc. Một số người tỏ ra do dự, không chắc con sẽ phù hợp." },
          choices: [
            { text: { [Language.EN]: "You thank them, reminding yourself that the right chance will come.", [Language.VN]: "Bạn cảm ơn họ, tự nhủ rằng cơ hội đúng đắn rồi sẽ đến." }, affirmation: { [Language.EN]: "🌟 Trusting that the right door will open keeps hope alive.", [Language.VN]: "🌟 Tin rằng cánh cửa phù hợp sẽ mở giúp giữ vững hy vọng." } },
            { text: { [Language.EN]: "You advocate, explaining what Minh can do, not just what he struggles with.", [Language.VN]: "Bạn lên tiếng, giải thích những gì Minh có thể làm được, không chỉ những khó khăn của con." }, affirmation: { [Language.EN]: "🌟 Showing others what he can do helps rewrite old assumptions.", [Language.VN]: "🌟 Cho người khác thấy con có thể làm gì giúp xóa bỏ những định kiến cũ." } },
            { text: { [Language.EN]: "You encourage Minh afterward: ‘This wasn’t the place — but the next might be.’", [Language.VN]: "Bạn khích lệ Minh sau đó: ‘Đây chưa phải là nơi phù hợp — nhưng lần tới có thể sẽ là.’" }, affirmation: { [Language.EN]: "🌟 Your encouragement teaches resilience — setbacks don’t define the journey.", [Language.VN]: "🌟 Lời động viên của bạn nuôi dưỡng sự kiên cường — thất bại không quyết định cả hành trình." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 5: Caregiver Fatigue", [Language.VN]: "Cảnh 5: Kiệt sức" },
          text: { [Language.EN]: "After a long day, you sit in the quiet kitchen. Your body is tired, but your heart keeps going.", [Language.VN]: "Sau một ngày dài, bạn ngồi trong căn bếp yên tĩnh. Cơ thể mệt mỏi, nhưng trái tim vẫn tiếp tục." },
          choices: [
            { text: { [Language.EN]: "You write down one small victory from today.", [Language.VN]: "Bạn viết lại một thành tựu nhỏ trong ngày hôm nay." }, affirmation: { [Language.EN]: "🌟 Honoring small wins gives you fuel for tomorrow.", [Language.VN]: "🌟 Trân trọng những thành công nhỏ tiếp thêm năng lượng cho ngày mai." } },
            { text: { [Language.EN]: "You practice a short breathing exercise to recharge.", [Language.VN]: "Bạn tập một bài thở ngắn để hồi phục." }, affirmation: { [Language.EN]: "🌟 Even a pause for yourself is an act of strength and care.", [Language.VN]: "🌟 Dành một khoảng dừng cho bản thân cũng là một hành động mạnh mẽ và đầy yêu thương." } },
            { text: { [Language.EN]: "You allow yourself to rest, knowing self-care is part of caring for Minh too.", [Language.VN]: "Bạn cho phép mình nghỉ ngơi, biết rằng chăm sóc bản thân cũng là một phần của việc chăm sóc Minh." }, affirmation: { [Language.EN]: "🌟 Rest is not selfish — it’s how you sustain the love you give.", [Language.VN]: "🌟 Nghỉ ngơi không phải ích kỷ — đó là cách bạn duy trì tình yêu bạn trao đi." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 6: A New Beginning", [Language.VN]: "Cảnh 6: Khởi đầu mới" },
          text: { [Language.EN]: "Minh attends a bakery training class. At first clumsy, then slowly improving. You watch, hopeful.", [Language.VN]: "Minh tham gia lớp học làm bánh. Ban đầu vụng về, rồi dần tiến bộ. Bạn dõi theo với hy vọng." },
          choices: [
            { text: { [Language.EN]: "You smile, proud of each small step.", [Language.VN]: "Bạn mỉm cười, tự hào về từng bước nhỏ." }, affirmation: { [Language.EN]: "🌟 Pride in each step builds momentum for more growth.", [Language.VN]: "🌟 Niềm tự hào trong từng bước nhỏ tạo đà cho sự phát triển tiếp theo." } },
            { text: { [Language.EN]: "You talk to the teacher about ways Minh learns best.", [Language.VN]: "Bạn trao đổi với giáo viên về cách học phù hợp nhất với Minh." }, affirmation: { [Language.EN]: "🌟 Partnering with allies creates a stronger path for your child.", [Language.VN]: "🌟 Đồng hành cùng những người hỗ trợ tạo nên con đường vững chắc hơn cho con." } },
            { text: { [Language.EN]: "You imagine the doors this could open for his future.", [Language.VN]: "Bạn tưởng tượng những cánh cửa mà điều này có thể mở ra cho tương lai của Minh." }, affirmation: { [Language.EN]: "🌟 Hope for the future is powerful — it shapes the opportunities ahead.", [Language.VN]: "🌟 Hy vọng về tương lai thật mạnh mẽ — nó định hình những cơ hội phía trước." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 7: First Job – Step by Step", [Language.VN]: "Cảnh 7: Công việc đầu tiên – Từng bước" },
          text: { [Language.EN]: "On his first day at the café, Minh makes small mistakes but also remembers key steps.", [Language.VN]: "Trong ngày làm việc đầu tiên ở quán cà phê, Minh mắc vài lỗi nhỏ nhưng cũng nhớ được những bước quan trọng." },
          choices: [
            { text: { [Language.EN]: "You encourage him from the sidelines, letting him stand on his own.", [Language.VN]: "Bạn động viên con từ bên ngoài, để con tự đứng vững." }, affirmation: { [Language.EN]: "🌟 Your quiet support gives him confidence to stand on his own.", [Language.VN]: "🌟 Sự ủng hộ lặng lẽ của bạn tiếp thêm tự tin để con tự lập." } },
            { text: { [Language.EN]: "You remind yourself that learning takes time — mistakes are part of growth.", [Language.VN]: "Bạn tự nhủ rằng học hỏi cần thời gian — sai lầm là một phần của sự trưởng thành." }, affirmation: { [Language.EN]: "🌟 Seeing mistakes as learning moments makes growth possible.", [Language.VN]: "🌟 Nhìn nhận sai lầm như cơ hội học hỏi giúp sự trưởng thành trở nên khả thi." } },
            { text: { [Language.EN]: "You feel grateful for a manager willing to give him space to improve.", [Language.VN]: "Bạn biết ơn người quản lý đã sẵn lòng cho con không gian để tiến bộ." }, affirmation: { [Language.EN]: "🌟 Gratitude for allies strengthens the circle of support.", [Language.VN]: "🌟 Lòng biết ơn với những người đồng hành củng cố vòng tròn hỗ trợ." } }
          ]
        },
        {
          title: { [Language.EN]: "Scene 8: Closing – Pride and Possibility", [Language.VN]: "Cảnh 8: Kết thúc – Niềm tự hào và hy vọng" },
          text: { [Language.EN]: "Minh hands coffee to a customer. The customer smiles: ‘Thank you.’ Minh beams. You watch, filled with pride for today and hope for tomorrow.", [Language.VN]: "Minh đưa cà phê cho một khách hàng. Người khách mỉm cười: ‘Cảm ơn.’ Minh rạng rỡ. Bạn dõi theo, tràn đầy tự hào hôm nay và hy vọng cho ngày mai." },
          choices: [
            { text: { [Language.EN]: "You celebrate this victory — it shows what’s possible.", [Language.VN]: "Bạn ăn mừng chiến thắng này — nó cho thấy điều gì là khả thi." }, affirmation: { [Language.EN]: "🌟 Celebrating today’s win shows your belief in what’s possible.", [Language.VN]: "🌟 Ăn mừng thành công hôm nay thể hiện niềm tin của bạn vào những điều có thể đạt được." } },
            { text: { [Language.EN]: "You reflect on how far Minh has come since those first mornings.", [Language.VN]: "Bạn ngẫm lại con đã đi được bao xa kể từ những buổi sáng đầu tiên." }, affirmation: { [Language.EN]: "🌟 Looking back reminds you how far love and persistence have carried you.", [Language.VN]: "🌟 Nhìn lại giúp bạn nhận ra tình yêu và sự kiên trì đã đưa bạn đi xa đến thế nào." } },
            { text: { [Language.EN]: "You wish more people could witness moments like this and believe.", [Language.VN]: "Bạn ước nhiều người có thể chứng kiến những khoảnh khắc như thế này và tin tưởng." }, affirmation: { [Language.EN]: "🌟 Wishing others could witness this is how change begins — with vision.", [Language.VN]: "🌟 Mong người khác chứng kiến những khoảnh khắc này chính là cách sự thay đổi bắt đầu — từ tầm nhìn." } }
          ]
        }
      ],
      closingAffirmation: {
        [Language.EN]: "💡 Your openness has the power to redefine hiring. By seeing beyond stereotypes, you unlock potential for both people and business.", [Language.VN]: "💡 Sự cởi mở của bạn có sức mạnh thay đổi quy trình tuyển dụng tại Việt Nam. Khi nhìn ngoài định kiến, bạn mở ra tiềm năng cho cả con người và doanh nghiệp."
    }
    },

    [NarratorRole.Volunteer]: {
      title: { [Language.EN]: "A Volunteer's Reflection", [Language.VN]: "Suy ngẫm của Tình nguyện viên" },
      description: { [Language.EN]: "Discover the impact of empathy and support through the eyes of a peer volunteer.", [Language.VN]: "Khám phá tác động của sự đồng cảm và hỗ trợ qua con mắt của một tình nguyện viên đồng trang lứa." },
      scenes: [
        {
          title: { [Language.EN]: "Scene 1: First Days", [Language.VN]: "Cảnh 1: Những ngày đầu" },
          text: { [Language.EN]: "When you first arrived at the center, you looked around at the classrooms and the resources available.", [Language.VN]: "Khi mới đến trung tâm, bạn nhìn quanh các phòng học và nguồn lực sẵn có." },
          choices: [
            { text: { [Language.EN]: "What was your impression? (Select all that apply)", [Language.VN]: "Ấn tượng của bạn là gì? (Chọn tất cả các mục phù hợp)" }, isMultiSelect: true },
            { text: { [Language.EN]: "Everything felt organized and structured; I had clear instructions from the start.", [Language.VN]: "Mọi thứ có vẻ ngăn nắp và có cấu trúc; tôi đã có hướng dẫn rõ ràng ngay từ đầu." }, affirmation: { [Language.EN]: "🌟 Good structure gave you confidence — you used it well.", [Language.VN]: "[VN] 🌟 Good structure gave you confidence — you used it well." } },
            { text: { [Language.EN]: "I felt underprepared and had to figure out a lot on my own.", [Language.VN]: "Tôi cảm thấy chưa được chuẩn bị kỹ và phải tự tìm hiểu rất nhiều." }, affirmation: { [Language.EN]: "🌟 Even without guidance, you kept going. That persistence matters.", [Language.VN]: "[VN] 🌟 Even without guidance, you kept going. That persistence matters." } },
            { text: { [Language.EN]: "I was surprised that there were so few staff and resources.", [Language.VN]: "Tôi ngạc nhiên vì có quá ít nhân viên và nguồn lực." }, affirmation: { [Language.EN]: "🌟 You saw the gaps — and still chose to help.", [Language.VN]: "[VN] 🌟 You saw the gaps — and still chose to help." } },
            { text: { [Language.EN]: "I quickly realized my expectations didn’t match reality.", [Language.VN]: "Tôi nhanh chóng nhận ra kỳ vọng của mình không khớp với thực tế." }, affirmation: { [Language.EN]: "🌟 Your surprise shows you care enough to notice reality.", [Language.VN]: "[VN] 🌟 Your surprise shows you care enough to notice reality." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 2: Meeting Participants", [Language.VN]: "Cảnh 2: Gặp gỡ người tham gia" },
          text: { [Language.EN]: "In your first mock interview, the autistic adult sitting across from you avoided eye contact and struggled to answer open-ended questions.", [Language.VN]: "Trong buổi phỏng vấn thử đầu tiên, người lớn tự kỷ ngồi đối diện bạn tránh giao tiếp bằng mắt và gặp khó khăn khi trả lời các câu hỏi mở." },
          choices: [
            { text: { [Language.EN]: "How did you respond? (Select all that apply)", [Language.VN]: "Bạn đã phản ứng thế nào? (Chọn tất cả các mục phù hợp)" }, isMultiSelect: true },
            { text: { [Language.EN]: "I knew what to do because of training and guidance.", [Language.VN]: "Tôi biết phải làm gì nhờ được đào tạo và hướng dẫn." }, affirmation: { [Language.EN]: "🌟 Preparation gave you tools to support with care.", [Language.VN]: "[VN] 🌟 Preparation gave you tools to support with care." } },
            { text: { [Language.EN]: "I had to improvise with my own methods (visual aids, roleplay, breaking down questions).", [Language.VN]: "Tôi phải ứng biến bằng các phương pháp của riêng mình (dụng cụ trực quan, đóng vai, chia nhỏ câu hỏi)." }, affirmation: { [Language.EN]: "🌟 Your creativity filled the gaps that training left.", [Language.VN]: "[VN] 🌟 Your creativity filled the gaps that training left." } },
            { text: { [Language.EN]: "I felt stuck and unsure how to support them effectively.", [Language.VN]: "Tôi cảm thấy bế tắc và không chắc chắn làm thế nào để hỗ trợ họ hiệu quả." }, affirmation: { [Language.EN]: "🌟 Your struggle shows your deep desire to do better.", [Language.VN]: "[VN] 🌟 Your struggle shows your deep desire to do better." } },
            { text: { [Language.EN]: "The family’s presence made it harder for the participant to feel independent.", [Language.VN]: "Sự hiện diện của gia đình khiến người tham gia khó cảm thấy độc lập hơn." }, affirmation: { [Language.EN]: "🌟 You noticed barriers others might miss. That awareness is powerful.", [Language.VN]: "[VN] 🌟 You noticed barriers others might miss. That awareness is powerful." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 3: The Wider Barriers", [Language.VN]: "Cảnh 3: Những rào cản rộng lớn hơn" },
          text: { [Language.EN]: "When the NGO tried to connect participants with employers, only a few showed interest. Some framed it as charity work.", [Language.VN]: "Khi NGO cố gắng kết nối người tham gia với nhà tuyển dụng, chỉ có một vài người tỏ ra quan tâm. Một số coi đó là công việc từ thiện." },
          choices: [
            { text: { [Language.EN]: "What did you observe? (Select all that apply)", [Language.VN]: "Bạn đã quan sát được gì? (Chọn tất cả các mục phù hợp)" }, isMultiSelect: true },
            { text: { [Language.EN]: "I was encouraged by the employers’ openness.", [Language.VN]: "Tôi được khuyến khích bởi sự cởi mở của các nhà tuyển dụng." }, affirmation: { [Language.EN]: "🌟 You saw hope in employers — proof that change is possible.", [Language.VN]: "[VN] 🌟 You saw hope in employers — proof that change is possible." } },
            { text: { [Language.EN]: "I felt frustrated that so few companies were willing to give a chance.", [Language.VN]: "Tôi cảm thấy thất vọng vì có quá ít công ty sẵn lòng cho một cơ hội." }, affirmation: { [Language.EN]: "🌟 Your frustration comes from justice — it shows you want more fairness.", [Language.VN]: "[VN] 🌟 Your frustration comes from justice — it shows you want more fairness." } },
            { text: { [Language.EN]: "I saw employers change their perspective after interacting with participants.", [Language.VN]: "Tôi thấy các nhà tuyển dụng thay đổi quan điểm sau khi tương tác với người tham gia." }, affirmation: { [Language.EN]: "🌟 You witnessed transformation — that matters.", [Language.VN]: "[VN] 🌟 You witnessed transformation — that matters." } },
            { text: { [Language.EN]: "I felt systemic barriers — stigma, lack of policies — were stronger than our efforts.", [Language.VN]: "Tôi cảm thấy các rào cản hệ thống - định kiến, thiếu chính sách - mạnh hơn nỗ lực của chúng tôi." }, affirmation: { [Language.EN]: "🌟 You named the truth: systems must shift, not just individuals.", [Language.VN]: "[VN] 🌟 You named the truth: systems must shift, not just individuals." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 4: Personal Struggles", [Language.VN]: "Cảnh 4: Những khó khăn cá nhân" },
          text: { [Language.EN]: "As weeks passed, you noticed how volunteering affected you personally.", [Language.VN]: "Khi nhiều tuần trôi qua, bạn nhận thấy việc tình nguyện ảnh hưởng đến cá nhân bạn như thế nào." },
          choices: [
            { text: { [Language.EN]: "How did you feel? (Select all that apply)", [Language.VN]: "Bạn cảm thấy thế nào? (Chọn tất cả các mục phù hợp)" }, isMultiSelect: true },
            { text: { [Language.EN]: "I felt energized and motivated by every small success.", [Language.VN]: "Tôi cảm thấy tràn đầy năng lượng và động lực bởi mỗi thành công nhỏ." }, affirmation: { [Language.EN]: "🌟 Your joy shows that giving also nourishes you.", [Language.VN]: "[VN] 🌟 Your joy shows that giving also nourishes you." } },
            { text: { [Language.EN]: "I sometimes felt exhausted and close to burnout.", [Language.VN]: "Đôi khi tôi cảm thấy kiệt sức và gần như kiệt quệ." }, affirmation: { [Language.EN]: "🌟 Exhaustion means you gave your all. Rest is part of service.", [Language.VN]: "[VN] 🌟 Exhaustion means you gave your all. Rest is part of service." } },
            { text: { [Language.EN]: "I doubted whether my contribution would last beyond my placement.", [Language.VN]: "Tôi nghi ngờ liệu sự đóng góp của mình có kéo dài sau khi tôi rời đi không." }, affirmation: { [Language.EN]: "🌟 Doubt is natural, but seeds of change were planted.", [Language.VN]: "[VN] 🌟 Doubt is natural, but seeds of change were planted." } },
            { text: { [Language.EN]: "I felt isolated when other volunteers left early.", [Language.VN]: "Tôi cảm thấy bị cô lập khi các tình nguyện viên khác rời đi sớm." }, affirmation: { [Language.EN]: "🌟 Even in loneliness, your presence made a difference.", [Language.VN]: "[VN] 🌟 Even in loneliness, your presence made a difference." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 5: A Breakthrough Moment", [Language.VN]: "Cảnh 5: Một khoảnh khắc đột phá" },
          text: { [Language.EN]: "One day, a participant finally answered an interview question with clarity and confidence. Even if they weren’t hired, the employer began to see their potential differently.", [Language.VN]: "Một ngày nọ, một người tham gia cuối cùng đã trả lời một câu hỏi phỏng vấn một cách rõ ràng và tự tin. Ngay cả khi không được tuyển dụng, nhà tuyển dụng đã bắt đầu nhìn nhận tiềm năng của họ một cách khác." },
          choices: [
            { text: { [Language.EN]: "Did you witness this? (Select all that apply)", [Language.VN]: "Bạn có chứng kiến điều này không? (Chọn tất cả các mục phù hợp)" }, isMultiSelect: true },
            { text: { [Language.EN]: "I experienced a moment like this and felt proud of the progress.", [Language.VN]: "Tôi đã trải qua một khoảnh khắc như thế này và cảm thấy tự hào về sự tiến bộ." }, affirmation: { [Language.EN]: "🌟 You witnessed transformation — and it will stay with you.", [Language.VN]: "[VN] 🌟 You witnessed transformation — and it will stay with you." } },
            { text: { [Language.EN]: "I never saw such a breakthrough, and it left me feeling frustrated.", [Language.VN]: "Tôi chưa bao giờ thấy một bước đột phá như vậy, và điều đó khiến tôi cảm thấy thất vọng." }, affirmation: { [Language.EN]: "🌟 Even without big moments, your effort mattered.", [Language.VN]: "[VN] 🌟 Even without big moments, your effort mattered." } },
            { text: { [Language.EN]: "I saw small improvements but not enough to change employers’ minds.", [Language.VN]: "Tôi thấy những cải thiện nhỏ nhưng không đủ để thay đổi suy nghĩ của nhà tuyển dụng." }, affirmation: { [Language.EN]: "🌟 Small progress is real progress — don’t underestimate it.", [Language.VN]: "[VN] 🌟 Small progress is real progress — don’t underestimate it." } },
            { text: { [Language.EN]: "I believe these small wins matter, even if they don’t lead to jobs right away.", [Language.VN]: "Tôi tin rằng những chiến thắng nhỏ này quan trọng, ngay cả khi chúng không dẫn đến công việc ngay lập tức." }, affirmation: { [Language.EN]: "🌟 Your belief gives hope staying power.", [Language.VN]: "[VN] 🌟 Your belief gives hope staying power." } },
          ]
        },
        {
          title: { [Language.EN]: "Scene 6: Reflection After Leaving", [Language.VN]: "Cảnh 6: Suy ngẫm sau khi rời đi" },
          text: { [Language.EN]: "At the end of your placement, you looked back on your time.", [Language.VN]: "Vào cuối thời gian làm việc, bạn nhìn lại khoảng thời gian đã qua." },
          choices: [
            { text: { [Language.EN]: "How do you feel? (Select all that apply)", [Language.VN]: "Bạn cảm thấy thế nào? (Chọn tất cả các mục phù hợp)" }, isMultiSelect: true },
            { text: { [Language.EN]: "I felt fulfilled and left with a stronger commitment to disability inclusion.", [Language.VN]: "Tôi cảm thấy mãn nguyện và ra đi với một cam kết mạnh mẽ hơn đối với việc hòa nhập người khuyết tật." }, affirmation: { [Language.EN]: "🌟 Fulfillment proves you grew as much as they did.", [Language.VN]: "[VN] 🌟 Fulfillment proves you grew as much as they did." } },
            { text: { [Language.EN]: "I left frustrated, feeling the system needs deeper change.", [Language.VN]: "Tôi rời đi trong sự thất vọng, cảm thấy hệ thống cần thay đổi sâu sắc hơn." }, affirmation: { [Language.EN]: "🌟 Frustration shows your vision for deeper change — don’t lose it.", [Language.VN]: "[VN] 🌟 Frustration shows your vision for deeper change — don’t lose it." } },
            { text: { [Language.EN]: "My experience was mixed: rewarding in parts, but also draining.", [Language.VN]: "Trải nghiệm của tôi lẫn lộn: có phần bổ ích, nhưng cũng có phần mệt mỏi." }, affirmation: { [Language.EN]: "🌟 Both joy and struggle are valid — you gave what you could.", [Language.VN]: "[VN] 🌟 Both joy and struggle are valid — you gave what you could." } },
            { text: { [Language.EN]: "I gained ideas for how future volunteers or programs could do better.", [Language.VN]: "Tôi đã có ý tưởng về cách các tình nguyện viên hoặc chương trình trong tương lai có thể làm tốt hơn." }, affirmation: { [Language.EN]: "🌟 Your ideas light the way for future volunteers.", [Language.VN]: "[VN] 🌟 Your ideas light the way for future volunteers." } },
          ]
        },
      ],
      closingAffirmation: { [Language.EN]: "💡 Your time as a volunteer left seeds of change. Some will bloom tomorrow, some years later — but all were planted by you.", [Language.VN]: "[VN] 💡 Your time as a volunteer left seeds of change. Some will bloom tomorrow, some years later — but all were planted by you." }
    },
  };
// FIX: Added VOLUNTEER_SCENARIOS to resolve import error in VolunteerPractice.tsx.
export const VOLUNTEER_SCENARIOS = [
  {
    scenario: {
      [Language.EN]: "You're at a crowded cafe with your autistic friend, An. Suddenly, An covers their ears and looks distressed. What's the most supportive way to respond?",
      [Language.VN]: "Bạn đang ở một quán cà phê đông đúc với người bạn tự kỷ của mình, An. Đột nhiên, An bịt tai lại và trông rất khó chịu. Cách phản ứng hỗ trợ nhất là gì?"
    },
    options: [
      {
        text: { [Language.EN]: "Tell them to 'just ignore the noise' and try to continue the conversation.", [Language.VN]: "Bảo họ 'cứ mặc kệ tiếng ồn' và cố gắng tiếp tục cuộc trò chuyện." },
        feedback: { [Language.EN]: "This can feel dismissive. For someone experiencing sensory overload, 'ignoring it' isn't possible and can increase their stress.", [Language.VN]: "Điều này có thể bị coi là coi thường. Đối với người đang bị quá tải giác quan, 'mặc kệ' là không thể và có thể làm tăng căng thẳng của họ." },
        isCorrect: false
      },
      {
        text: { [Language.EN]: "Quietly ask, 'Is it too loud? Do you want to go outside for a bit?'", [Language.VN]: "Lặng lẽ hỏi, 'Có ồn quá không? Bạn có muốn ra ngoài một lát không?'" },
        feedback: { [Language.EN]: "Excellent. This offers a specific, actionable solution without drawing attention or making assumptions. It empowers them to choose what they need.", [Language.VN]: "Tuyệt vời. Điều này đưa ra một giải pháp cụ thể, có thể hành động mà không gây chú ý hay phỏng đoán. Nó trao quyền cho họ lựa chọn những gì họ cần." },
        isCorrect: true
      },
      {
        text: { [Language.EN]: "Immediately grab their arm and pull them outside.", [Language.VN]: "Ngay lập tức nắm lấy tay họ và kéo họ ra ngoài." },
        feedback: { [Language.EN]: "While well-intentioned, sudden physical contact can be startling and add to the sensory overload. Always try to ask before acting.", [Language.VN]: "Dù có ý tốt, tiếp xúc vật lý đột ngột có thể gây giật mình và làm tăng thêm quá tải giác quan. Luôn cố gắng hỏi trước khi hành động." },
        isCorrect: false
      }
    ]
  },
  {
    scenario: {
      [Language.EN]: "Your autistic friend, Bao, tells you, 'I don't like your new haircut.' How do you interpret this?",
      [Language.VN]: "Người bạn tự kỷ của bạn, Bảo, nói với bạn, 'Mình không thích kiểu tóc mới của bạn.' Bạn diễn giải điều này như thế nào?"
    },
    options: [
      {
        text: { [Language.EN]: "Assume they are being intentionally rude and get upset.", [Language.VN]: "Cho rằng họ cố ý thô lỗ và cảm thấy bực bội." },
        feedback: { [Language.EN]: "This assumes negative intent. Many autistic people communicate very directly and honestly, without the social 'filters' others might use. It's likely an observation, not an insult.", [Language.VN]: "Điều này giả định ý định tiêu cực. Nhiều người tự kỷ giao tiếp rất thẳng thắn và trung thực, không có 'bộ lọc' xã hội mà người khác có thể sử dụng. Đó có thể là một lời nhận xét, không phải là một lời xúc phạm." },
        isCorrect: false
      },
      {
        text: { [Language.EN]: "Say 'That's a mean thing to say!' to teach them a lesson.", [Language.VN]: "Nói 'Nói vậy là ác ý lắm!' để dạy cho họ một bài học." },
        feedback: { [Language.EN]: "This can be confusing and hurtful if they were just being honest. A better approach is to explain how their words made you feel without blaming them.", [Language.VN]: "Điều này có thể gây bối rối và tổn thương nếu họ chỉ đang thành thật. Một cách tiếp cận tốt hơn là giải thích cảm xúc của bạn về lời nói của họ mà không đổ lỗi cho họ." },
        isCorrect: false
      },
      {
        text: { [Language.EN]: "Recognize it as direct communication, and respond calmly, 'Oh, okay. Thanks for being honest.'", [Language.VN]: "Nhận ra đó là một cách giao tiếp thẳng thắn, và trả lời một cách bình tĩnh, 'Ồ, được rồi. Cảm ơn vì đã thành thật.'" },
        feedback: { [Language.EN]: "This is a great response. It acknowledges their directness without taking it personally, preserving the friendship and respecting different communication styles.", [Language.VN]: "Đây là một phản ứng tuyệt vời. Nó công nhận sự thẳng thắn của họ mà không coi đó là chuyện cá nhân, giúp giữ gìn tình bạn và tôn trọng các phong cách giao tiếp khác nhau." },
        isCorrect: true
      }
    ]
  },
  {
    scenario: {
      [Language.EN]: "While waiting for a bus, your friend starts rocking back and forth. A few people nearby are staring. What should you do?",
      [Language.VN]: "Trong khi chờ xe buýt, bạn của bạn bắt đầu đung đưa qua lại. Một vài người gần đó đang nhìn chằm chằm. Bạn nên làm gì?"
    },
    options: [
      {
        text: { [Language.EN]: "Tell your friend to stop because people are looking.", [Language.VN]: "Bảo bạn của bạn dừng lại vì mọi người đang nhìn." },
        feedback: { [Language.EN]: "This can make your friend feel ashamed of a self-regulating behavior that is natural and helpful for them. Stimming helps manage anxiety or sensory input.", [Language.VN]: "Điều này có thể khiến bạn của bạn cảm thấy xấu hổ về một hành vi tự điều chỉnh tự nhiên và hữu ích cho họ. Stimming giúp quản lý sự lo lắng hoặc đầu vào cảm giác." },
        isCorrect: false
      },
      {
        text: { [Language.EN]: "Ignore your friend and pretend you don't know them.", [Language.VN]: "Lờ bạn của bạn đi và giả vờ như không quen biết họ." },
        feedback: { [Language.EN]: "This would be hurtful and abandon your friend when they might be feeling anxious. A true friend offers support, regardless of what others think.", [Language.VN]: "Điều này sẽ gây tổn thương và bỏ rơi bạn của bạn khi họ có thể đang cảm thấy lo lắng. Một người bạn thực sự sẽ cung cấp hỗ trợ, bất kể người khác nghĩ gì." },
        isCorrect: false
      },
      {
        text: { [Language.EN]: "Continue your conversation calmly, or stand with them quietly, offering a subtle sign of support.", [Language.VN]: "Tiếp tục cuộc trò chuyện của bạn một cách bình tĩnh, hoặc đứng cùng họ một cách lặng lẽ, đưa ra một dấu hiệu hỗ trợ tinh tế." },
        feedback: { [Language.EN]: "Perfect. This normalizes their behavior and shows that you are comfortable and supportive. Your calm presence is more powerful than the stares of strangers.", [Language.VN]: "Hoàn hảo. Điều này bình thường hóa hành vi của họ và cho thấy rằng bạn cảm thấy thoải mái và ủng hộ. Sự hiện diện bình tĩnh của bạn mạnh mẽ hơn những ánh nhìn của người lạ." },
        isCorrect: true
      }
    ]
  }
];