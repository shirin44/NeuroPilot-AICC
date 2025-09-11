import { Narrator, NarratorRole, Language, Story } from './types';

// Note: Ensure your character images are placed in a public-facing 'characters' directory.
// The required paths are, for example:
// - /characters/candidates/candidate_neutral.png
// - /characters/employer/employer_happy.png
// - /characters/parents/parent_sad.png

export const NARRATORS: Record<NarratorRole, Narrator> = {
  [NarratorRole.Jobseeker]: {
    role: NarratorRole.Jobseeker,
    name: { [Language.EN]: 'Friendly Buddy', [Language.VN]: 'Người Bạn Thân Thiện' },
    intro: { 
      [Language.EN]: 'Hi, I’m your Friendly Buddy. Let’s practice interviews step by step. If you ever feel stressed, you can press the Calm button and I’ll guide you through breathing exercises.',
      [Language.VN]: 'Chào bạn, mình là Người Bạn Thân Thiện. Chúng ta hãy cùng nhau luyện tập phỏng vấn. Nếu bạn cảm thấy căng thẳng, hãy nhấn nút "Bình Tĩnh" và mình sẽ hướng dẫn bạn các bài tập hít thở.'
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
    name: { [Language.EN]: 'Inclusion Coach', [Language.VN]: 'Huấn Luyện Viên Hòa Nhập' },
    intro: { 
      [Language.EN]: 'Hi, I’m your Inclusion Coach. I’ll help you create an inclusive interview process and workplace.',
      [Language.VN]: 'Xin chào, tôi là Huấn Luyện Viên Hòa Nhập. Tôi sẽ giúp bạn tạo ra một quy trình phỏng vấn và môi trường làm việc hòa nhập.'
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
    name: { [Language.EN]: 'Reassuring Counselor', [Language.VN]: 'Tư Vấn Viên An Tâm' },
    intro: { 
      [Language.EN]: 'Hello, I’m your Counselor. I’ll share practical strategies to support your child’s independence.',
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
    name: { [Language.EN]: 'Helpful Peer', [Language.VN]: 'Người Bạn Hữu Ích' },
    intro: { 
      [Language.EN]: 'Hi, I’m your Helpful Peer. Let’s practice empathy and learn how to support autistic friends.',
      [Language.VN]: 'Chào bạn, mình là Người Bạn Hữu Ích. Hãy cùng thực hành sự đồng cảm và học cách hỗ trợ những người bạn tự kỷ nhé.'
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
  parentIntro: { [Language.EN]: 'I’m your Reassuring Counselor. I’ll share simple steps to support your child’s interview practice. You’re not alone; small steps build great confidence.', [Language.VN]: 'Tôi là Tư Vấn Viên An Tâm của bạn. Tôi sẽ chia sẻ những bước đơn giản để hỗ trợ con bạn luyện tập phỏng vấn. Bạn không đơn độc; những bước nhỏ sẽ xây dựng sự tự tin lớn.' },
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
  storyMode: { [Language.EN]: 'Story Mode', [Language.VN]: 'Chế độ Câu chuyện' },
  practiceModeDescription: { [Language.EN]: 'Engage in hands-on exercises, skill-building modules, and AI-powered practice sessions.', [Language.VN]: 'Tham gia vào các bài tập thực hành, các học phần xây dựng kỹ năng và các buổi luyện tập do AI hỗ trợ.' },
  storyModeDescription: { [Language.EN]: 'Experience an interactive narrative to build empathy and understand different perspectives.', [Language.VN]: 'Trải nghiệm một câu chuyện tương tác để xây dựng sự đồng cảm và thấu hiểu các góc nhìn khác nhau.' },
  chooseYourMode: { [Language.EN]: 'Choose Your Mode', [Language.VN]: 'Chọn Chế Độ Của Bạn' },
  startPractice: { [Language.EN]: 'Start Practice', [Language.VN]: 'Bắt đầu Luyện tập' },
  startStory: { [Language.EN]: 'Start Story', [Language.VN]: 'Bắt đầu Câu chuyện' },
  recommended: { [Language.EN]: 'Recommended First', [Language.VN]: 'Nên Bắt Đầu' },

  // Story Player
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
      q: { [Language.EN]: 'How to handle "stimming" (self-stimulatory behavior)?', [Language.VN]: 'Làm thế nào để xử lý "stimming" (hành vi tự kích thích)?' },
      a: { [Language.EN]: 'Stimming is a natural way to regulate anxiety. As long as it\'s not harmful, it\'s best to allow it. A small, quiet fidget tool can be helpful.', [Language.VN]: 'Stimming là một cách tự nhiên để điều chỉnh sự lo lắng. Miễn là nó không gây hại, tốt nhất là cho phép nó. Một công cụ nhỏ, yên tĩnh có thể hữu ích.' }
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
  [NarratorRole.Jobseeker]: {
    title: { [Language.EN]: "Lan's Journey", [Language.VN]: "Hành trình của Lan" },
    description: { [Language.EN]: "Follow Lan's story of self-discovery and finding her place in the professional world.", [Language.VN]: "Theo dõi câu chuyện của Lan về việc khám phá bản thân và tìm vị trí trong thế giới chuyên nghiệp." },
    scenes: [
      {
        title: { [Language.EN]: "Scene 1: Masking", [Language.VN]: "Cảnh 1: Đeo mặt nạ" },
        text: { [Language.EN]: "Every morning before stepping into the office, you wonder: Should I act like everyone else today?", [Language.VN]: "Mỗi buổi sáng trước khi bước vào văn phòng, bạn tự hỏi: Hôm nay mình có nên hành động giống như mọi người không?" },
        choices: [
          { text: { [Language.EN]: "How do you respond?", [Language.VN]: "Bạn phản ứng thế nào?" }, isMultiSelect: true },
          { text: { [Language.EN]: "Force eye contact, smile, and copy how others talk — even though it drains you.", [Language.VN]: "Ép mình giao tiếp bằng mắt, mỉm cười và bắt chước cách người khác nói chuyện - dù điều đó làm bạn kiệt sức." }, affirmation: { [Language.EN]: "🌟 You’ve carried the heavy weight of pretending. That takes strength — but you deserve to rest in your truth.", [Language.VN]: "[VN] 🌟 You’ve carried the heavy weight of pretending. That takes strength — but you deserve to rest in your truth." } },
          { text: { [Language.EN]: "Stay quiet, letting people think you’re distant.", [Language.VN]: "Giữ im lặng, để mọi người nghĩ rằng bạn xa cách." }, affirmation: { [Language.EN]: "🌟 Silence does not mean absence. Your quietness is a strength too.", [Language.VN]: "[VN] 🌟 Silence does not mean absence. Your quietness is a strength too." } },
          { text: { [Language.EN]: "Switch depending on who’s around.", [Language.VN]: "Thay đổi tùy thuộc vào những người xung quanh." }, affirmation: { [Language.EN]: "🌟 Your adaptability shows awareness — but you shouldn’t have to split yourself to belong.", [Language.VN]: "[VN] 🌟 Your adaptability shows awareness — but you shouldn’t have to split yourself to belong." } },
          { text: { [Language.EN]: "Have stopped masking much at all.", [Language.VN]: "Đã gần như không còn phải che giấu nữa." }, affirmation: { [Language.EN]: "🌟 Letting your real self show is brave. That honesty is a gift.", [Language.VN]: "[VN] 🌟 Letting your real self show is brave. That honesty is a gift." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 2: Sensory Overload", [Language.VN]: "Cảnh 2: Quá tải giác quan" },
        text: { [Language.EN]: "The office is crowded, computers buzzing, phones ringing, lunch smells floating in. Your body tenses.", [Language.VN]: "Văn phòng đông đúc, tiếng máy tính ù ù, chuông điện thoại reo, mùi thức ăn trưa lan tỏa. Cơ thể bạn căng cứng." },
        choices: [
          { text: { [Language.EN]: "What affects you most?", [Language.VN]: "Điều gì ảnh hưởng đến bạn nhất?" }, isMultiSelect: true },
          { text: { [Language.EN]: "The bright lights that give you headaches.", [Language.VN]: "Ánh sáng chói lóa làm bạn đau đầu." }, affirmation: { [Language.EN]: "🌟 Your sensitivity to light is real. Listening to your body is wisdom, not weakness.", [Language.VN]: "[VN] 🌟 Your sensitivity to light is real. Listening to your body is wisdom, not weakness." } },
          { text: { [Language.EN]: "The endless noise that overwhelms you.", [Language.VN]: "Tiếng ồn không ngớt làm bạn choáng ngợp." }, affirmation: { [Language.EN]: "🌟 Noise can overwhelm, and that’s valid. You deserve calm spaces.", [Language.VN]: "[VN] 🌟 Noise can overwhelm, and that’s valid. You deserve calm spaces." } },
          { text: { [Language.EN]: "The strong smells that make it hard to focus.", [Language.VN]: "Những mùi hương nồng nặc khiến bạn khó tập trung." }, affirmation: { [Language.EN]: "🌟 Strong smells affect you deeply — it’s part of how your senses work uniquely.", [Language.VN]: "[VN] 🌟 Strong smells affect you deeply — it’s part of how your senses work uniquely." } },
          { text: { [Language.EN]: "The closeness of too many people that makes you shut down.", [Language.VN]: "Sự gần gũi của quá nhiều người khiến bạn thu mình lại." }, affirmation: { [Language.EN]: "🌟 Feeling tense in crowded spaces is natural — you are not alone in this.", [Language.VN]: "[VN] 🌟 Feeling tense in crowded spaces is natural — you are not alone in this." } },
          { text: { [Language.EN]: "I don’t feel overloaded that often.", [Language.VN]: "Tôi không thường xuyên cảm thấy quá tải." }, affirmation: { [Language.EN]: "🌟 Your comfort with sensory input is just as valid. Every journey is unique.", [Language.VN]: "[VN] 🌟 Your comfort with sensory input is just as valid. Every journey is unique." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 3: Family Pressure", [Language.VN]: "Cảnh 3: Áp lực gia đình" },
        text: { [Language.EN]: "When you return home, your parents talk about your future. Their words sting, even if they mean well.", [Language.VN]: "Khi bạn về nhà, bố mẹ nói về tương lai của bạn. Lời nói của họ làm bạn tổn thương, dù họ có ý tốt." },
        choices: [
          { text: { [Language.EN]: "What do you hear?", [Language.VN]: "Bạn nghe thấy gì?" }, isMultiSelect: true },
          { text: { [Language.EN]: "They say you’re smart but “not social,” so you won’t succeed.", [Language.VN]: "Họ nói rằng bạn thông minh nhưng 'không hòa đồng', nên sẽ không thành công." }, affirmation: { [Language.EN]: "🌟 Hearing that hurts — but your worth is not tied to being ‘social’.", [Language.VN]: "[VN] 🌟 Hearing that hurts — but your worth is not tied to being ‘social’." } },
          { text: { [Language.EN]: "They insist you marry before focusing on your career.", [Language.VN]: "Họ khăng khăng rằng bạn phải kết hôn trước khi tập trung vào sự nghiệp." }, affirmation: { [Language.EN]: "🌟 You have the right to build your own path before anyone else’s expectations.", [Language.VN]: "[VN] 🌟 You have the right to build your own path before anyone else’s expectations." } },
          { text: { [Language.EN]: "They compare you to cousins or friends.", [Language.VN]: "Họ so sánh bạn với anh chị em họ hoặc bạn bè." }, affirmation: { [Language.EN]: "🌟 Comparison is unfair. Your journey has its own pace and value.", [Language.VN]: "[VN] 🌟 Comparison is unfair. Your journey has its own pace and value." } },
          { text: { [Language.EN]: "They are supportive, without judgment.", [Language.VN]: "Họ ủng hộ bạn mà không phán xét." }, affirmation: { [Language.EN]: "🌟 Having support without judgment is rare and precious — treasure it.", [Language.VN]: "[VN] 🌟 Having support without judgment is rare and precious — treasure it." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 4: Interviews", [Language.VN]: "Cảnh 4: Các cuộc phỏng vấn" },
        text: { [Language.EN]: "A week later, you go to a job interview. The panel smiles politely, then throws questions at you.", [Language.VN]: "Một tuần sau, bạn đi phỏng vấn xin việc. Hội đồng mỉm cười lịch sự, rồi dồn dập hỏi bạn." },
        choices: [
          { text: { [Language.EN]: "What is your experience?", [Language.VN]: "Trải nghiệm của bạn là gì?" }, isMultiSelect: true },
          { text: { [Language.EN]: "Confused by vague, open-ended questions.", [Language.VN]: "Bối rối trước những câu hỏi mở, mơ hồ." }, affirmation: { [Language.EN]: "🌟 Abstract questions can be unfair. Your clarity lies in real skills, not riddles.", [Language.VN]: "[VN] 🌟 Abstract questions can be unfair. Your clarity lies in real skills, not riddles." } },
          { text: { [Language.EN]: "Freeze when they ask about strengths and weaknesses.", [Language.VN]: "'Đứng hình' khi họ hỏi về điểm mạnh và điểm yếu." }, affirmation: { [Language.EN]: "🌟 Freezing doesn’t erase your strengths — they’re still there.", [Language.VN]: "[VN] 🌟 Freezing doesn’t erase your strengths — they’re still there." } },
          { text: { [Language.EN]: "Know the answers but struggle to explain fast enough.", [Language.VN]: "Biết câu trả lời nhưng khó diễn đạt đủ nhanh." }, affirmation: { [Language.EN]: "🌟 Thinking deeply takes time. Your value isn’t measured by speed.", [Language.VN]: "[VN] 🌟 Thinking deeply takes time. Your value isn’t measured by speed." } },
          { text: { [Language.EN]: "Shine more when given practical tasks instead of talking.", [Language.VN]: "Tỏa sáng hơn khi được giao nhiệm vụ thực tế thay vì nói chuyện." }, affirmation: { [Language.EN]: "🌟 Hands-on skills reveal your brilliance — your ability speaks louder than words.", [Language.VN]: "[VN] 🌟 Hands-on skills reveal your brilliance — your ability speaks louder than words." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 5: Burnout", [Language.VN]: "Cảnh 5: Kiệt sức" },
        text: { [Language.EN]: "After weeks of working and trying to “fit in,” your body feels heavy. Anxiety grows.", [Language.VN]: "Sau nhiều tuần làm việc và cố gắng 'hòa nhập', cơ thể bạn cảm thấy nặng nề. Sự lo lắng ngày càng lớn." },
        choices: [
          { text: { [Language.EN]: "How does it show up for you?", [Language.VN]: "Nó biểu hiện với bạn như thế nào?" }, isMultiSelect: true },
          { text: { [Language.EN]: "Feeling exhausted after masking all day.", [Language.VN]: "Cảm thấy kiệt sức sau một ngày dài đeo mặt nạ." }, affirmation: { [Language.EN]: "🌟 Masking all day drains anyone. Your tiredness is proof of effort, not failure.", [Language.VN]: "[VN] 🌟 Masking all day drains anyone. Your tiredness is proof of effort, not failure." } },
          { text: { [Language.EN]: "Panicking before deadlines or meetings.", [Language.VN]: "Hoảng sợ trước các hạn chót hoặc cuộc họp." }, affirmation: { [Language.EN]: "🌟 Your anxiety shows how much you care about doing well.", [Language.VN]: "[VN] 🌟 Your anxiety shows how much you care about doing well." } },
          { text: { [Language.EN]: "Avoiding social events just to recharge.", [Language.VN]: "Tránh các sự kiện xã hội chỉ để nạp lại năng lượng." }, affirmation: { [Language.EN]: "🌟 Choosing rest over draining events is self-respect.", [Language.VN]: "[VN] 🌟 Choosing rest over draining events is self-respect." } },
          { text: { [Language.EN]: "I rarely feel burnout at all.", [Language.VN]: "Tôi hiếm khi cảm thấy kiệt sức." }, affirmation: { [Language.EN]: "🌟 Your balance protects you — it’s a strength too.", [Language.VN]: "[VN] 🌟 Your balance protects you — it’s a strength too." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 6: Late Diagnosis", [Language.VN]: "Cảnh 6: Chẩn đoán muộn" },
        text: { [Language.EN]: "One night, scrolling on your phone, you read an article about autism in adults. The stories sound like yours.", [Language.VN]: "Một buổi tối, khi lướt điện thoại, bạn đọc được một bài báo về chứng tự kỷ ở người lớn. Những câu chuyện nghe giống như của bạn." },
        choices: [
          { text: { [Language.EN]: "Does any of this sound familiar?", [Language.VN]: "Điều nào trong số này nghe quen thuộc?" }, isMultiSelect: true },
          { text: { [Language.EN]: "Always called “lazy” or “different” as a child.", [Language.VN]: "Khi còn nhỏ luôn bị gọi là 'lười biếng' hay 'khác biệt'." }, affirmation: { [Language.EN]: "🌟 Those labels were unfair. Your true self was never laziness.", [Language.VN]: "[VN] 🌟 Those labels were unfair. Your true self was never laziness." } },
          { text: { [Language.EN]: "Teachers and colleagues thought you were rude or shy.", [Language.VN]: "Giáo viên và đồng nghiệp nghĩ bạn thô lỗ hay nhút nhát." }, affirmation: { [Language.EN]: "🌟 Misunderstanding does not define you. Your intentions were always real.", [Language.VN]: "[VN] 🌟 Misunderstanding does not define you. Your intentions were always real." } },
          { text: { [Language.EN]: "Only discovered autism after 20.", [Language.VN]: "Chỉ phát hiện ra chứng tự kỷ sau tuổi 20." }, affirmation: { [Language.EN]: "🌟 Finding answers later still gives power — your story continues with clarity.", [Language.VN]: "[VN] 🌟 Finding answers later still gives power — your story continues with clarity." } },
          { text: { [Language.EN]: "Still suspect but don’t have a diagnosis.", [Language.VN]: "Vẫn nghi ngờ nhưng chưa có chẩn đoán." }, affirmation: { [Language.EN]: "🌟 Even without a paper, your lived experience is valid.", [Language.VN]: "[VN] 🌟 Even without a paper, your lived experience is valid." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 7: Being Seen", [Language.VN]: "Cảnh 7: Được thấu hiểu" },
        text: { [Language.EN]: "One day, at work, something changes. A difficult project confuses everyone else, but you quietly organize it step by step. You see patterns no one else can. When you present your solution, your manager looks at you with surprise and respect: “Lan, you see what others cannot.” In that moment, you finally feel seen — not for pretending to fit in, but for your true abilities.", [Language.VN]: "Một ngày nọ, tại nơi làm việc, có điều gì đó thay đổi. Một dự án khó khiến mọi người bối rối, nhưng bạn lặng lẽ sắp xếp nó từng bước một. Bạn nhìn thấy những quy luật mà không ai khác có thể. Khi bạn trình bày giải pháp của mình, người quản lý nhìn bạn với sự ngạc nhiên và tôn trọng: 'Lan, em thấy được những gì người khác không thể.' Ngay lúc đó, bạn cuối cùng cũng cảm thấy được nhìn nhận - không phải vì giả vờ hòa nhập, mà vì khả năng thực sự của bạn." },
        choices: [
          { text: { [Language.EN]: "Have you had this moment?", [Language.VN]: "Bạn đã có khoảnh khắc này chưa?" }, isMultiSelect: true },
          { text: { [Language.EN]: "Yes, a moment when my talent was recognized.", [Language.VN]: "Rồi, một khoảnh khắc khi tài năng của tôi được công nhận." }, affirmation: { [Language.EN]: "🌟 That moment of recognition shows what’s always been true — your mind holds strengths the world needs.", [Language.VN]: "[VN] 🌟 That moment of recognition shows what’s always been true — your mind holds strengths the world needs." } },
          { text: { [Language.EN]: "Someone noticed my special skill, creativity, or focus.", [Language.VN]: "Ai đó đã nhận ra kỹ năng đặc biệt, sự sáng tạo hoặc sự tập trung của tôi." }, affirmation: { [Language.EN]: "🌟 That moment of recognition shows what’s always been true — your mind holds strengths the world needs.", [Language.VN]: "[VN] 🌟 That moment of recognition shows what’s always been true — your mind holds strengths the world needs." } },
          { text: { [Language.EN]: "I am still waiting for that moment to come.", [Language.VN]: "Tôi vẫn đang chờ đợi khoảnh khắc đó đến." }, affirmation: { [Language.EN]: "🌟 Even if no one has seen it yet, your gifts are real. Recognition will come.", [Language.VN]: "[VN] 🌟 Even if no one has seen it yet, your gifts are real. Recognition will come." } },
        ]
      },
    ],
    closingAffirmation: { [Language.EN]: "💡 You deserve to be seen not for how well you pretend, but for the brilliance that is naturally yours.", [Language.VN]: "[VN] 💡 You deserve to be seen not for how well you pretend, but for the brilliance that is naturally yours." }
  },
  [NarratorRole.Parent]: {
    title: { [Language.EN]: "Climbing Together", [Language.VN]: "Cùng nhau Vượt khó" },
    description: { [Language.EN]: "Navigate the hopes and challenges of supporting a neurodivergent child entering the workforce.", [Language.VN]: "Điều hướng những hy vọng và thách thức khi hỗ trợ một đứa trẻ có hệ thần kinh khác biệt bước vào thế giới lao động." },
    scenes: [
      { 
        title: { [Language.EN]: "Scene 1: Morning Routine – A Hidden Battle", [Language.VN]: "Cảnh 1: Lịch trình buổi sáng - Một trận chiến thầm lặng" }, 
        text: { [Language.EN]: "Minh struggles to get dressed, covering his ears at the noisy motorbikes outside. You’ve reminded him the same instruction again and again.", [Language.VN]: "Minh khó khăn mặc quần áo, bịt tai trước tiếng xe máy ồn ào bên ngoài. Bạn đã nhắc đi nhắc lại cùng một hướng dẫn." }, 
        choices: [
            { text: { [Language.EN]: "You take a deep breath, repeat calmly, and help him put on the shirt.", [Language.VN]: "Bạn hít một hơi thật sâu, bình tĩnh lặp lại và giúp con mặc áo." }, affirmation: { [Language.EN]: "🌟 Your patience teaches your child safety.", [Language.VN]: "[VN] 🌟 Your patience teaches your child safety." } },
            { text: { [Language.EN]: "You feel frustration building — you wonder why this simple step is so hard.", [Language.VN]: "Bạn cảm thấy thất vọng - tự hỏi tại sao bước đơn giản này lại khó đến vậy." }, affirmation: { [Language.EN]: "🌟 Your frustration shows how heavy this role is. You’re still trying, and that matters.", [Language.VN]: "[VN] 🌟 Your frustration shows how heavy this role is. You’re still trying, and that matters." } },
            { text: { [Language.EN]: "You break down inside but smile at him, hiding your own tears.", [Language.VN]: "Bạn suy sụp bên trong nhưng vẫn mỉm cười với con, che giấu nước mắt." }, affirmation: { [Language.EN]: "🌟 Even in private pain, you show love. That quiet strength is profound.", [Language.VN]: "[VN] 🌟 Even in private pain, you show love. That quiet strength is profound." } },
        ] 
      },
      { 
        title: { [Language.EN]: "Scene 2: Financial Strain", [Language.VN]: "Cảnh 2: Gánh nặng tài chính" }, 
        text: { [Language.EN]: "You sit at the kitchen table, counting money. Therapy, rent, food… it’s never enough.", [Language.VN]: "Bạn ngồi ở bàn bếp, đếm tiền. Tiền trị liệu, tiền thuê nhà, tiền ăn... không bao giờ là đủ." }, 
        choices: [
            { text: { [Language.EN]: "You sacrifice your own needs — put the fish back at the market and prioritize Minh’s bus fare.", [Language.VN]: "Bạn hy sinh nhu cầu của mình - trả lại cá ở chợ và ưu tiên tiền xe buýt cho Minh." }, affirmation: { [Language.EN]: "🌟 Every sacrifice is an act of love. You are giving more than most ever see.", [Language.VN]: "[VN] 🌟 Every sacrifice is an act of love. You are giving more than most ever see." } },
            { text: { [Language.EN]: "You feel guilty, wishing you could give your other family members more comfort.", [Language.VN]: "Bạn cảm thấy tội lỗi, ước gì có thể cho các thành viên khác trong gia đình sự thoải mái hơn." }, affirmation: { [Language.EN]: "🌟 Your guilt only shows your care for the whole family. That love is wide.", [Language.VN]: "[VN] 🌟 Your guilt only shows your care for the whole family. That love is wide." } },
            { text: { [Language.EN]: "You pray silently that tomorrow something will change.", [Language.VN]: "Bạn thầm cầu nguyện rằng ngày mai sẽ có điều gì đó thay đổi." }, affirmation: { [Language.EN]: "🌟 Your hope is strength. Faith itself carries you.", [Language.VN]: "[VN] 🌟 Your hope is strength. Faith itself carries you." } },
        ] 
      },
      { 
        title: { [Language.EN]: "Scene 3: Facing Stigma", [Language.VN]: "Cảnh 3: Đối mặt với định kiến" }, 
        text: { [Language.EN]: "At a family gathering, relatives whisper: ‘Why can’t Minh be like others?’ One smiles pitifully, saying he’s better off staying home.", [Language.VN]: "Trong một buổi họp mặt gia đình, họ hàng thì thầm: 'Tại sao Minh không thể giống như những người khác?' Một người cười thương hại, nói rằng cậu bé nên ở nhà thì hơn." }, 
        choices: [
            { text: { [Language.EN]: "You stay silent, holding Minh’s hand tighter.", [Language.VN]: "Bạn im lặng, nắm chặt tay Minh hơn." }, affirmation: { [Language.EN]: "🌟 Holding your child’s hand is powerful — love speaks louder than words.", [Language.VN]: "[VN] 🌟 Holding your child’s hand is powerful — love speaks louder than words." } },
            { text: { [Language.EN]: "You speak up, explaining that he has strengths — even if they don’t see them.", [Language.VN]: "Bạn lên tiếng, giải thích rằng con có những điểm mạnh - ngay cả khi họ không nhìn thấy." }, affirmation: { [Language.EN]: "🌟 Your voice challenges stigma. That courage creates change.", [Language.VN]: "[VN] 🌟 Your voice challenges stigma. That courage creates change." } },
            { text: { [Language.EN]: "You excuse yourself from the gathering, unable to bear the words anymore.", [Language.VN]: "Bạn xin phép rời khỏi buổi họp mặt, không thể chịu đựng những lời nói đó nữa." }, affirmation: { [Language.EN]: "🌟 Protecting your heart also protects your child. That is care.", [Language.VN]: "[VN] 🌟 Protecting your heart also protects your child. That is care." } },
        ] 
      },
       { 
        title: { [Language.EN]: "Scene 4: Endless Rejections", [Language.VN]: "Cảnh 4: Những lời từ chối không dứt" }, 
        text: { [Language.EN]: "You and Minh visit several workplaces. Managers shake their heads. One even laughs, ‘Autistic? How can he work here?’", [Language.VN]: "Bạn và Minh đến thăm một vài nơi làm việc. Các nhà quản lý lắc đầu. Một người thậm chí còn cười, 'Tự kỷ à? Làm sao cậu ta có thể làm việc ở đây?'" }, 
        choices: [
            { text: { [Language.EN]: "You thank them politely, even though your heart is breaking.", [Language.VN]: "Bạn cảm ơn họ một cách lịch sự, mặc dù trái tim bạn đang tan nát." }, affirmation: { [Language.EN]: "🌟 Your dignity in rejection is stronger than their ignorance.", [Language.VN]: "[VN] 🌟 Your dignity in rejection is stronger than their ignorance." } },
            { text: { [Language.EN]: "You feel anger boiling — why can’t they give him a chance?", [Language.VN]: "Bạn cảm thấy tức giận sôi sục - tại sao họ không thể cho con một cơ hội?" }, affirmation: { [Language.EN]: "🌟 Your anger is love in motion — justice rising.", [Language.VN]: "[VN] 🌟 Your anger is love in motion — justice rising." } },
            { text: { [Language.EN]: "You wonder if all your efforts will ever pay off, but keep trying anyway.", [Language.VN]: "Bạn tự hỏi liệu mọi nỗ lực của mình có bao giờ được đền đáp, nhưng vẫn tiếp tục cố gắng." }, affirmation: { [Language.EN]: "🌟 Persistence through heartbreak is warrior strength.", [Language.VN]: "[VN] 🌟 Persistence through heartbreak is warrior strength." } },
        ] 
      },
      { 
        title: { [Language.EN]: "Scene 5: Exhaustion and Breaking Point", [Language.VN]: "Cảnh 5: Kiệt sức và đến giới hạn" }, 
        text: { [Language.EN]: "Late at night, after washing dishes, your body aches. Minh hums in his room. Alone in the kitchen, you feel the weight of everything.", [Language.VN]: "Đêm khuya, sau khi rửa bát, cơ thể bạn đau nhức. Minh ngân nga trong phòng. Một mình trong bếp, bạn cảm thấy sức nặng của mọi thứ." }, 
        choices: [
            { text: { [Language.EN]: "You cry silently, letting out the pain where no one can see.", [Language.VN]: "Bạn khóc thầm, trút bỏ nỗi đau ở nơi không ai có thể nhìn thấy." }, affirmation: { [Language.EN]: "🌟 Tears release the weight you carry. They don’t weaken you.", [Language.VN]: "[VN] 🌟 Tears release the weight you carry. They don’t weaken you." } },
            { text: { [Language.EN]: "You push yourself to keep working — tomorrow will come too soon.", [Language.VN]: "Bạn thúc ép bản thân tiếp tục làm việc - ngày mai sẽ đến quá nhanh." }, affirmation: { [Language.EN]: "🌟 Even in exhaustion, you rise again. That resilience is unmatched.", [Language.VN]: "[VN] 🌟 Even in exhaustion, you rise again. That resilience is unmatched." } },
            { text: { [Language.EN]: "You write in your journal, trying to remind yourself why you keep fighting.", [Language.VN]: "Bạn viết vào nhật ký, cố gắng nhắc nhở bản thân tại sao bạn tiếp tục chiến đấu." }, affirmation: { [Language.EN]: "🌟 Writing your truth is an act of courage and healing.", [Language.VN]: "[VN] 🌟 Writing your truth is an act of courage and healing." } },
        ] 
      },
      { 
        title: { [Language.EN]: "Scene 6: Small Light of Opportunity", [Language.VN]: "Cảnh 6: Tia sáng nhỏ của cơ hội" }, 
        text: { [Language.EN]: "Minh finally attends a bakery training class. At first clumsy, then slowly improving. You watch through the glass door.", [Language.VN]: "Cuối cùng Minh cũng tham gia một lớp học làm bánh. Lúc đầu còn vụng về, sau đó dần dần tiến bộ. Bạn quan sát qua cánh cửa kính." }, 
        choices: [
            { text: { [Language.EN]: "You smile faintly — a fragile hope begins to grow.", [Language.VN]: "Bạn mỉm cười nhẹ - một hy vọng mong manh bắt đầu nhen nhóm." }, affirmation: { [Language.EN]: "🌟 Even fragile hope is real. It is the start of change.", [Language.VN]: "[VN] 🌟 Even fragile hope is real. It is the start of change." } },
            { text: { [Language.EN]: "You worry: will this be enough to secure a real job?", [Language.VN]: "Bạn lo lắng: liệu điều này có đủ để đảm bảo một công việc thực sự?" }, affirmation: { [Language.EN]: "🌟 Worry shows how much you want security for your child. That care matters.", [Language.VN]: "[VN] 🌟 Worry shows how much you want security for your child. That care matters." } },
            { text: { [Language.EN]: "You feel gratitude for the teacher, wishing more people were like this.", [Language.VN]: "Bạn cảm thấy biết ơn cô giáo, ước gì có nhiều người như vậy." }, affirmation: { [Language.EN]: "🌟 Gratitude keeps your heart open, even in hardship.", [Language.VN]: "[VN] 🌟 Gratitude keeps your heart open, even in hardship." } },
        ] 
      },
      { 
        title: { [Language.EN]: "Scene 7: First Job – Fragile but Real", [Language.VN]: "Cảnh 7: Công việc đầu tiên - Mong manh nhưng có thật" }, 
        text: { [Language.EN]: "On his first day at the café, Minh spills juice and forgets steps. The manager frowns. He looks ready to give up.", [Language.VN]: "Vào ngày đầu tiên làm việc tại quán cà phê, Minh làm đổ nước trái cây và quên các bước. Người quản lý cau mày. Cậu bé có vẻ sẵn sàng bỏ cuộc." }, 
        choices: [
            { text: { [Language.EN]: "You rush in quietly, encouraging him before stepping back again.", [Language.VN]: "Bạn lặng lẽ bước vào, động viên con trước khi lùi lại." }, affirmation: { [Language.EN]: "🌟 Your encouragement is the safety net your child needs.", [Language.VN]: "[VN] 🌟 Your encouragement is the safety net your child needs." } },
            { text: { [Language.EN]: "You feel panic rising, afraid they’ll fire him immediately.", [Language.VN]: "Bạn cảm thấy hoảng sợ, sợ rằng họ sẽ sa thải con ngay lập tức." }, affirmation: { [Language.EN]: "🌟 Fear means you care deeply. It proves your love.", [Language.VN]: "[VN] 🌟 Fear means you care deeply. It proves your love." } },
            { text: { [Language.EN]: "You remind yourself: every beginning is hard — you must be patient too.", [Language.VN]: "Bạn tự nhủ: mọi khởi đầu đều khó khăn - bạn cũng phải kiên nhẫn." }, affirmation: { [Language.EN]: "🌟 Your patience plants the seeds of your child’s growth.", [Language.VN]: "[VN] 🌟 Your patience plants the seeds of your child’s growth." } },
        ] 
      },
      { 
        title: { [Language.EN]: "Scene 8: Closing – Hope and Pain Intertwined", [Language.VN]: "Cảnh 8: Kết thúc - Hy vọng và nỗi đau xen lẫn" }, 
        text: { [Language.EN]: "Minh hands coffee to a customer. The customer smiles: ‘Thank you.’ Minh beams. You watch, eyes filled with pride and fear for tomorrow.", [Language.VN]: "Minh đưa cà phê cho khách hàng. Khách hàng mỉm cười: 'Cảm ơn.' Minh rạng rỡ. Bạn quan sát, đôi mắt đầy tự hào và lo sợ cho ngày mai." }, 
        choices: [
            { text: { [Language.EN]: "You feel proud — today, he belongs here.", [Language.VN]: "Bạn cảm thấy tự hào - hôm nay, con thuộc về nơi này." }, affirmation: { [Language.EN]: "🌟 Your pride is deserved — today your child belongs.", [Language.VN]: "[VN] 🌟 Your pride is deserved — today your child belongs." } },
            { text: { [Language.EN]: "You worry about whether he can keep this job long-term.", [Language.VN]: "Bạn lo lắng liệu con có thể giữ công việc này lâu dài không." }, affirmation: { [Language.EN]: "🌟 Your worry is love — but trust that growth takes time.", [Language.VN]: "[VN] 🌟 Your worry is love — but trust that growth takes time." } },
            { text: { [Language.EN]: "You wish more people could see what this moment really means.", [Language.VN]: "Bạn ước gì có nhiều người có thể thấy được ý nghĩa thực sự của khoảnh khắc này." }, affirmation: { [Language.EN]: "🌟 Your wish is a vision of a fairer world — keep holding it.", [Language.VN]: "[VN] 🌟 Your wish is a vision of a fairer world — keep holding it." } },
        ] 
      },
    ],
    closingAffirmation: { [Language.EN]: "💡 You are climbing this mountain with your child. Every small victory is proof that your love is building a future.", [Language.VN]: "[VN] 💡 You are climbing this mountain with your child. Every small victory is proof that your love is building a future." }
  },
  [NarratorRole.Employer]: {
    title: { [Language.EN]: "Interview Reflection", [Language.VN]: "Suy ngẫm về Phỏng vấn" },
    description: { [Language.EN]: "Step into the shoes of a hiring manager and see how small changes can make a big impact.", [Language.VN]: "Đặt mình vào vị trí của một nhà quản lý tuyển dụng và xem những thay đổi nhỏ có thể tạo ra tác động lớn như thế nào." },
    scenes: [
      {
        title: { [Language.EN]: "Scene 1: The Small Talk", [Language.VN]: "Cảnh 1: Trò Chuyện Xã Giao" },
        text: { [Language.EN]: "Mr. Nam, an HR manager in Ho Chi Minh City, greets Linh, a 24-year-old candidate. He asks: “Tell me a bit about yourself.” Linh looks down, pauses for a long time, and replies briefly: “I studied accounting. I like organizing files.” She doesn’t smile or make eye contact.", [Language.VN]: "Ông Nam, một quản lý nhân sự tại TP.HCM, chào Linh, một ứng viên 24 tuổi. Ông hỏi: 'Hãy giới thiệu một chút về bản thân em.' Linh nhìn xuống, dừng lại một lúc lâu, và trả lời ngắn gọn: 'Em học kế toán. Em thích sắp xếp hồ sơ.' Cô không cười hay giao tiếp bằng mắt." },
        choices: [
          { text: { [Language.EN]: "As the employer, what might you feel or think here?", [Language.VN]: "Là nhà tuyển dụng, bạn có thể cảm thấy hoặc nghĩ gì ở đây?" }, isMultiSelect: true },
          { text: { [Language.EN]: "She seems very quiet. Maybe she’s not interested.", [Language.VN]: "Cô ấy có vẻ rất trầm tính. Có lẽ cô ấy không hứng thú." }, affirmation: { [Language.EN]: "🌟 Doubt is natural — but pausing to reflect shows growth.", [Language.VN]: "[VN] 🌟 Doubt is natural — but pausing to reflect shows growth." } },
          { text: { [Language.EN]: "She might be nervous — I’ll keep going and see if she warms up.", [Language.VN]: "Có lẽ cô ấy đang lo lắng - tôi sẽ tiếp tục xem cô ấy có cởi mở hơn không." }, affirmation: { [Language.EN]: "🌟 Seeing nerves instead of weakness shows empathy.", [Language.VN]: "[VN] 🌟 Seeing nerves instead of weakness shows empathy." } },
          { text: { [Language.EN]: "She’s not giving me much to work with, so it’s hard to judge her.", [Language.VN]: "Cô ấy không cung cấp nhiều thông tin, nên khó để đánh giá." }, affirmation: { [Language.EN]: "🌟 Your openness to not assume is powerful.", [Language.VN]: "[VN] 🌟 Your openness to not assume is powerful." } },
          { text: { [Language.EN]: "Hmm, she seems direct. Maybe she just prefers to get to the point.", [Language.VN]: "Hmm, cô ấy có vẻ thẳng thắn. Có lẽ cô ấy chỉ muốn đi thẳng vào vấn đề." }, affirmation: { [Language.EN]: "🌟 Respecting directness makes you an inclusive leader.", [Language.VN]: "[VN] 🌟 Respecting directness makes you an inclusive leader." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 2: The Hypothetical Question", [Language.VN]: "Cảnh 2: Câu Hỏi Giả Định" },
        text: { [Language.EN]: "Mr. Nam asks: “What would you do if your manager suddenly asked you to lead a team project?” Linh hesitates, then says quietly: “I’ve never done that before, so I’m not sure.”", [Language.VN]: "Ông Nam hỏi: 'Em sẽ làm gì nếu quản lý đột ngột yêu cầu em dẫn dắt một dự án nhóm?' Linh ngập ngừng, rồi nói nhỏ: 'Em chưa từng làm việc đó trước đây, nên em không chắc.'" },
        choices: [
          { text: { [Language.EN]: "How could you react internally in this moment?", [Language.VN]: "Bạn có thể phản ứng nội tâm như thế nào trong khoảnh khắc này?" }, isMultiSelect: true },
          { text: { [Language.EN]: "She doesn’t seem prepared — maybe she lacks flexibility.", [Language.VN]: "Cô ấy có vẻ không chuẩn bị - có lẽ cô ấy thiếu sự linh hoạt." }, affirmation: { [Language.EN]: "🌟 Doubt is part of learning — but reflection expands hiring.", [Language.VN]: "[VN] 🌟 Doubt is part of learning — but reflection expands hiring." } },
          { text: { [Language.EN]: "She’s being honest. Some candidates would make something up.", [Language.VN]: "Cô ấy đang thành thật. Một số ứng viên sẽ bịa ra câu trả lời." }, affirmation: { [Language.EN]: "🌟 Honesty is rare. You valued it — that shows fairness.", [Language.VN]: "[VN] 🌟 Honesty is rare. You valued it — that shows fairness." } },
          { text: { [Language.EN]: "This role doesn’t really need leadership skills anyway.", [Language.VN]: "Dù sao thì vai trò này cũng không thực sự cần kỹ năng lãnh đạo." }, affirmation: { [Language.EN]: "🌟 You recognized relevance — that’s clarity.", [Language.VN]: "[VN] 🌟 You recognized relevance — that’s clarity." } },
          { text: { [Language.EN]: "She seems stuck. Maybe I need to rephrase the question.", [Language.VN]: "Cô ấy có vẻ đang bế tắc. Có lẽ tôi cần diễn đạt lại câu hỏi." }, affirmation: { [Language.EN]: "🌟 Your flexibility made space for her strengths.", [Language.VN]: "[VN] 🌟 Your flexibility made space for her strengths." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 3: The Task Demonstration", [Language.VN]: "Cảnh 3: Bài Tập Thực Tế" },
        text: { [Language.EN]: "Mr. Nam gives Linh a short exercise: sorting a set of sample invoices. Linh immediately focuses, works quickly, and completes the task with near-perfect accuracy. She even suggests a clearer way to label the files.", [Language.VN]: "Ông Nam giao cho Linh một bài tập ngắn: sắp xếp một bộ hóa đơn mẫu. Linh ngay lập tức tập trung, làm việc nhanh chóng và hoàn thành nhiệm vụ với độ chính xác gần như tuyệt đối. Cô ấy thậm chí còn đề xuất một cách dán nhãn hồ sơ rõ ràng hơn." },
        choices: [
          { text: { [Language.EN]: "What might cross your mind now?", [Language.VN]: "Điều gì có thể thoáng qua trong đầu bạn lúc này?" }, isMultiSelect: true },
          { text: { [Language.EN]: "Wow, she’s clearly more comfortable with hands-on tasks than talking.", [Language.VN]: "Wow, cô ấy rõ ràng thoải mái hơn với các nhiệm vụ thực hành hơn là nói chuyện." }, affirmation: { [Language.EN]: "🌟 You saw her brilliance shine in real work.", [Language.VN]: "[VN] 🌟 You saw her brilliance shine in real work." } },
          { text: { [Language.EN]: "She surprised me — I wasn’t expecting that level of accuracy.", [Language.VN]: "Cô ấy làm tôi ngạc nhiên - tôi không mong đợi mức độ chính xác đó." }, affirmation: { [Language.EN]: "🌟 Her ability surpassed expectations — and you noticed.", [Language.VN]: "[VN] 🌟 Her ability surpassed expectations — and you noticed." } },
          { text: { [Language.EN]: "Interesting, she found a better system than the one I gave her.", [Language.VN]: "Thú vị thật, cô ấy đã tìm ra một hệ thống tốt hơn hệ thống tôi đã đưa." }, affirmation: { [Language.EN]: "🌟 Innovation appeared before you — a gift you acknowledged.", [Language.VN]: "[VN] 🌟 Innovation appeared before you — a gift you acknowledged." } },
          { text: { [Language.EN]: "Her performance here doesn’t erase the awkwardness I noticed earlier.", [Language.VN]: "Phần thể hiện ở đây không xóa đi sự ngượng ngùng tôi đã nhận thấy trước đó." }, affirmation: { [Language.EN]: "🌟 Your doubt reminds you why change is needed.", [Language.VN]: "[VN] 🌟 Your doubt reminds you why change is needed." } },
        ]
      },
      {
        title: { [Language.EN]: "Scene 4: The Reflection", [Language.VN]: "Cảnh 4: Suy Ngẫm" },
        text: { [Language.EN]: "After the interview, Mr. Nam reviews his notes. He realizes Linh struggled with small talk and abstract questions, but excelled when given something concrete to do.", [Language.VN]: "Sau cuộc phỏng vấn, ông Nam xem lại ghi chú của mình. Ông nhận ra Linh gặp khó khăn với các câu hỏi xã giao và trừu tượng, nhưng lại xuất sắc khi được giao một việc cụ thể để làm." },
        choices: [
          { text: { [Language.EN]: "As you look back on this interview, what kind of thoughts might you have?", [Language.VN]: "Khi nhìn lại cuộc phỏng vấn này, bạn có thể có những suy nghĩ gì?" }, isMultiSelect: true },
          { text: { [Language.EN]: "I should trust my first impression — communication style is still important in the workplace.", [Language.VN]: "Tôi nên tin vào ấn tượng ban đầu - phong cách giao tiếp vẫn quan trọng ở nơi làm việc." }, affirmation: { [Language.EN]: "🌟 You value communication — but growth means questioning that measure.", [Language.VN]: "[VN] 🌟 You value communication — but growth means questioning that measure." } },
          { text: { [Language.EN]: "Maybe my interview style didn’t give her the best chance to shine.", [Language.VN]: "Có lẽ phong cách phỏng vấn của tôi đã không cho cô ấy cơ hội tốt nhất để tỏa sáng." }, affirmation: { [Language.EN]: "🌟 Awareness that the process itself is unfair is true leadership.", [Language.VN]: "[VN] 🌟 Awareness that the process itself is unfair is true leadership." } },
          { text: { [Language.EN]: "I’m torn — she has clear strengths but also some areas of concern.", [Language.VN]: "Tôi phân vân - cô ấy có những điểm mạnh rõ ràng nhưng cũng có một số lĩnh vực đáng lo ngại." }, affirmation: { [Language.EN]: "🌟 Uncertainty is a step toward learning. It means you care enough to reflect.", [Language.VN]: "[VN] 🌟 Uncertainty is a step toward learning. It means you care enough to reflect." } },
          { text: { [Language.EN]: "This experience makes me curious about adjusting interviews for different candidates.", [Language.VN]: "Trải nghiệm này khiến tôi tò mò về việc điều chỉnh các cuộc phỏng vấn cho các ứng viên khác nhau." }, affirmation: { [Language.EN]: "🌟 Curiosity is the root of inclusion. You are already changing.", [Language.VN]: "[VN] 🌟 Curiosity is the root of inclusion. You are already changing." } },
        ]
      }
    ],
    closingAffirmation: { [Language.EN]: "💡 Your openness has the power to redefine hiring. By seeing beyond stereotypes, you unlock potential for both people and business.", [Language.VN]: "[VN] 💡 Your openness has the power to redefine hiring. By seeing beyond stereotypes, you unlock potential for both people and business." }
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