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
      neutral: 'assets/characters/candidates/candidates_neutral.png',
      happy: 'assets/characters/candidates/candidates_happy.png',
      sad: 'assets/characters/candidates/candidates_sad.png',
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
      neutral: 'assets/characters/employers/employers_neutral.png',
      happy: 'assets/characters/employers/employers_happy.png',
      sad: 'assets/characters/employers/employers_sad.png',
    },
    theme: 'purple'
  },
  [NarratorRole.CareGiver]: {
    role: NarratorRole.CareGiver,
    name: { [Language.EN]: 'Care partner', [Language.VN]: 'Người đồng hành che chở' },
    intro: {
      [Language.EN]: 'Hello, I’m your Care partner. I’ll share practical strategies to support your child’s independence.',
      [Language.VN]: 'Xin chào, tôi là Tư Vấn Viên. Tôi sẽ chia sẻ những chiến lược thực tế để hỗ trợ sự độc lập của con bạn.'
    },
    hover: { [Language.EN]: "Support your child's growth.", [Language.VN]: "Hỗ trợ sự phát triển của con bạn." },
    avatars: {
      neutral: 'assets/characters/parents/parents_neutral.png',
      happy: 'assets/characters/parents/parents_happy.png',
      sad: 'assets/characters/parents/parents_sad.png',
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
      neutral: 'assets/characters/volunteers/volunteers_neutral.png',
      happy: 'assets/characters/volunteers/volunteers_happy.png',
      sad: 'assets/characters/volunteers/volunteers_sad.png',
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

  // CareGiver
  CareGiverIntro: { [Language.EN]: 'I’m your Care partner. I’ll share simple steps to support your child’s interview practice. You’re not alone; small steps build great confidence.', [Language.VN]: 'Tôi là Người đồng hành che chở của bạn. Tôi sẽ chia sẻ những bước đơn giản để hỗ trợ con bạn luyện tập phỏng vấn. Bạn không đơn độc; những bước nhỏ sẽ xây dựng sự tự tin lớn.' },
  CareGiverOverview: { [Language.EN]: 'Here are a few short lessons to guide you. Each one takes just a few minutes. Pick one to start!', [Language.VN]: 'Dưới đây là một vài bài học ngắn để hướng dẫn bạn. Mỗi bài chỉ mất vài phút. Hãy chọn một bài để bắt đầu!' },
  CareGiverModule1: { [Language.EN]: 'Let\'s start with the basics. Understanding these key points can make a world of difference in an interview setting.', [Language.VN]: 'Hãy bắt đầu với những điều cơ bản. Hiểu được những điểm chính này có thể tạo ra sự khác biệt lớn trong môi trường phỏng vấn.' },
  CareGiverModule2: { [Language.EN]: 'The STAR method is a great tool. Let\'s practice how you can coach your child to use it with this simple script.', [Language.VN]: 'Phương pháp STAR là một công cụ tuyệt vời. Hãy thực hành cách bạn có thể hướng dẫn con mình sử dụng nó với kịch bản đơn giản này.' },
  CareGiverModule3: { [Language.EN]: 'A calm environment is key. Here are some tools to manage sensory needs and anxiety before an interview.', [Language.VN]: 'Một môi trường yên tĩnh là chì khóa. Dưới đây là một số công cụ để quản lý nhu cầu cảm giác và lo lắng trước một cuộc phỏng vấn.' },
  CareGiverModule4: { [Language.EN]: 'How we give feedback matters. Let\'s learn how to offer positive, specific praise that builds independence.', [Language.VN]: 'Cách chúng ta đưa ra phản hồi rất quan trọng. Hãy học cách đưa ra lời khen ngợi tích cực, cụ thể để xây dựng sự độc lập.' },
  CareGiverFAQ: { [Language.EN]: 'Many parents have similar questions. Here are some quick, evidence-informed answers.', [Language.VN]: 'Nhiều phụ huynh có những câu hỏi tương tự. Dưới đây là một số câu trả lời nhanh, có cơ sở khoa học.' },
  CareGiverResources: { [Language.EN]: 'You are part of a larger community. Here are some trusted local organizations in Vietnam for more support.', [Language.VN]: 'Bạn là một phần của một cộng đồng lớn hơn. Dưới đây là một số tổ chức địa phương đáng tin cậy tại Việt Nam để được hỗ trợ thêm.' },


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
    [NarratorRole.CareGiver]: {
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







export const VOLUNTEER_SCENARIOS = [
  {
    scenario: {
      [Language.EN]:
        "I’m at a busy café with my autistic friend, An. Suddenly, An covers their ears and looks upset. What should I do?",
      [Language.VN]:
        "Tôi đang ở một quán cà phê đông đúc với người bạn tự kỷ của mình, An. Đột nhiên, An bịt tai lại và trông khó chịu. Tôi nên làm gì?",
    },
    options: [
      {
        text: {
          [Language.EN]: "Tell An, 'Just ignore the noise,' and keep talking.",
          [Language.VN]: "Nói với An, 'Cứ mặc kệ tiếng ồn,' và tiếp tục nói chuyện.",
        },
        feedback: {
          [Language.EN]:
            "Not good. This feels dismissive. When someone has sensory overload, they cannot just ignore it. It may make them feel worse.",
          [Language.VN]:
            "Không tốt. Điều này có thể bị coi là coi thường. Khi ai đó bị quá tải giác quan, họ không thể 'mặc kệ'. Nó có thể khiến họ thấy tệ hơn.",
        },
        isCorrect: false,
      },
      {
        text: {
          [Language.EN]: "Ask quietly, 'Too loud? Want to go outside for a bit?'",
          [Language.VN]:
            "Hỏi khẽ, 'Có ồn quá không? Muốn ra ngoài một lát không?'",
        },
        feedback: {
          [Language.EN]:
            "Great. This is calm, clear, and kind. You give them a choice and let them decide what helps.",
          [Language.VN]:
            "Tuyệt vời. Điều này bình tĩnh, rõ ràng và tử tế. Bạn cho họ một lựa chọn và để họ quyết định điều gì giúp ích.",
        },
        isCorrect: true,
      },
      {
        text: {
          [Language.EN]: "Grab An’s arm and pull them outside right away.",
          [Language.VN]: "Nắm tay An và kéo họ ra ngoài ngay lập tức.",
        },
        feedback: {
          [Language.EN]:
            "Not safe. Touching suddenly can scare them and add stress. Always ask before you act.",
          [Language.VN]:
            "Không an toàn. Chạm bất ngờ có thể làm họ giật mình và thêm căng thẳng. Luôn hỏi trước khi hành động.",
        },
        isCorrect: false,
      },
    ],
  },
  {
    scenario: {
      [Language.EN]:
        "My autistic friend, Bao, says, 'I don’t like your new haircut.' How should I take it?",
      [Language.VN]:
        "Người bạn tự kỷ của tôi, Bảo, nói, 'Tôi không thích kiểu tóc mới của bạn.' Tôi nên hiểu thế nào?",
    },
    options: [
      {
        text: {
          [Language.EN]: "Think Bao is rude and get upset.",
          [Language.VN]: "Cho rằng Bảo thô lỗ và thấy bực bội.",
        },
        feedback: {
          [Language.EN]:
            "Not fair. Many autistic people speak directly and honestly. It’s usually not meant as rude, just truthful.",
          [Language.VN]:
            "Không công bằng. Nhiều người tự kỷ nói chuyện thẳng thắn và trung thực. Thường không phải là thô lỗ, chỉ là thật lòng.",
        },
        isCorrect: false,
      },
      {
        text: {
          [Language.EN]: "Say, 'That’s mean!' to teach Bao a lesson.",
          [Language.VN]: "Nói, 'Nói vậy là ác ý!' để dạy Bảo một bài học.",
        },
        feedback: {
          [Language.EN]:
            "Not helpful. They may just be honest. Better: share how their words made you feel, without blaming.",
          [Language.VN]:
            "Không hữu ích. Họ có thể chỉ đang thành thật. Tốt hơn: chia sẻ cảm xúc của bạn về lời nói đó mà không đổ lỗi.",
        },
        isCorrect: false,
      },
      {
        text: {
          [Language.EN]:
            "See it as direct talk. Reply calmly: 'Okay. Thanks for being honest.'",
          [Language.VN]:
            "Xem đó là cách nói thẳng. Trả lời bình tĩnh: 'Ừ. Cảm ơn vì đã thành thật.'",
        },
        feedback: {
          [Language.EN]:
            "Good. You respect their style and don’t take it personally. This keeps the friendship strong.",
          [Language.VN]:
            "Tốt. Bạn tôn trọng cách giao tiếp của họ và không coi đó là chuyện cá nhân. Điều này giữ cho tình bạn bền chặt.",
        },
        isCorrect: true,
      },
    ],
  },
  {
    scenario: {
      [Language.EN]:
        "I’m waiting for a bus with my friend. They start rocking back and forth. People stare. What should I do?",
      [Language.VN]:
        "Tôi đang chờ xe buýt với bạn mình. Họ bắt đầu đung đưa qua lại. Mọi người nhìn chằm chằm. Tôi nên làm gì?",
    },
    options: [
      {
        text: {
          [Language.EN]: "Tell them to stop because people are looking.",
          [Language.VN]: "Bảo họ dừng lại vì mọi người đang nhìn.",
        },
        feedback: {
          [Language.EN]:
            "Not kind. Rocking (stimming) helps them stay calm. Stopping may make them feel worse.",
          [Language.VN]:
            "Không tốt. Đung đưa (stimming) giúp họ giữ bình tĩnh. Dừng lại có thể làm họ thấy tệ hơn.",
        },
        isCorrect: false,
      },
      {
        text: {
          [Language.EN]: "Ignore them and act like you don’t know them.",
          [Language.VN]: "Lờ họ đi và giả vờ như không quen biết.",
        },
        feedback: {
          [Language.EN]:
            "Not supportive. They may feel alone or anxious. A true friend stays by their side.",
          [Language.VN]:
            "Không ủng hộ. Họ có thể cảm thấy cô đơn hoặc lo lắng. Một người bạn thật sự sẽ ở bên cạnh.",
        },
        isCorrect: false,
      },
      {
        text: {
          [Language.EN]:
            "Stay calm. Keep talking, or just stand with them to show quiet support.",
          [Language.VN]:
            "Giữ bình tĩnh. Tiếp tục nói chuyện, hoặc đứng cùng họ để cho thấy sự ủng hộ nhẹ nhàng.",
        },
        feedback: {
          [Language.EN]:
            "Perfect. You show comfort and care. Your calm presence matters more than strangers’ stares.",
          [Language.VN]:
            "Hoàn hảo. Bạn cho thấy sự thoải mái và quan tâm. Sự hiện diện bình tĩnh của bạn quan trọng hơn ánh nhìn của người lạ.",
        },
        isCorrect: true,
      },
    ],
  },
];













export const STORY_CONTENT: Record<NarratorRole, Story> = {
  [NarratorRole.Employer]: {
    title: {
      [Language.EN]: "Look Past First Impressions",
      [Language.VN]: "Nhìn vượt qua ấn tượng ban đầu",
    },
    description: {
      [Language.EN]:
        "I’m an employer interviewing a neurodivergent candidate. I try to see skills, not stereotypes.",
      [Language.VN]:
        "Tôi là nhà tuyển dụng đang phỏng vấn ứng viên khác biệt thần kinh. Tôi nhìn vào kỹ năng, không phải định kiến.",
    },
    scenes: [
      {
        title: {
          [Language.EN]: "Scene 1: Small Talk",
          [Language.VN]: "Cảnh 1: Chào hỏi",
        },
        text: {
          [Language.EN]:
            "• I greet Linh.\n• I ask: “Tell me about yourself.”\n• She looks down. Short answer: “I studied accounting. I like organizing files.”\n• No smile. Little eye contact.",
          [Language.VN]:
            "• Tôi chào Linh.\n• Tôi hỏi: “Giới thiệu về bạn.”\n• Cô ấy nhìn xuống. Trả lời ngắn: “Tôi học kế toán. Tôi thích sắp xếp hồ sơ.”\n• Ít cười. Ít nhìn mắt.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "She’s quiet. Maybe not interested.",
              [Language.VN]: "Cô ấy ít nói. Có lẽ không hứng thú.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Quiet can mean processing. Not disinterest.",
              [Language.VN]:
                "🌟 Im lặng có thể là đang xử lý. Không phải thiếu hứng thú.",
            },
          },
          {
            text: {
              [Language.EN]:
                "She may be nervous. I’ll continue and see if she warms up.",
              [Language.VN]:
                "Có thể cô ấy lo. Tôi tiếp tục và xem cô ấy thoải mái hơn không.",
            },
            affirmation: {
              [Language.EN]: "🌟 Seeing nerves as normal shows empathy.",
              [Language.VN]: "🌟 Xem lo lắng là bình thường cho thấy thấu cảm.",
            },
          },
          {
            text: {
              [Language.EN]:
                "I don’t have much to judge yet. I need a task.",
              [Language.VN]:
                "Chưa đủ để đánh giá. Tôi cần một bài tập.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Tasks show real skill more than small talk.",
              [Language.VN]:
                "🌟 Bài tập thể hiện kỹ năng thật hơn lời xã giao.",
            },
          },
          {
            text: {
              [Language.EN]:
                "She seems direct. Maybe she likes to get to the point.",
              [Language.VN]:
                "Cô ấy thẳng. Có lẽ thích đi thẳng vấn đề.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Directness = clarity. Not rudeness.",
              [Language.VN]:
                "🌟 Thẳng = rõ. Không phải thô lỗ.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 2: Hypothetical",
          [Language.VN]: "Cảnh 2: Câu hỏi giả định",
        },
        text: {
          [Language.EN]:
            "• I ask: “If your manager asks you to lead a team, what do you do?”\n• Linh pauses: “I’ve never done that. I’m not sure.”",
          [Language.VN]:
            "• Tôi hỏi: “Nếu quản lý bảo bạn dẫn dắt nhóm, bạn làm gì?”\n• Linh dừng lại: “Tôi chưa làm. Tôi chưa chắc.”",
        },
        choices: [
          {
            text: {
              [Language.EN]: "She’s not prepared. Maybe not flexible.",
              [Language.VN]: "Chưa chuẩn bị. Có thể thiếu linh hoạt.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Abstract questions are hard. Reframing helps.",
              [Language.VN]:
                "🌟 Câu hỏi trừu tượng khó. Đặt lại câu hỏi sẽ giúp hơn.",
            },
          },
          {
            text: {
              [Language.EN]: "She’s honest. Many would make it up.",
              [Language.VN]: "Cô ấy thành thật. Nhiều người sẽ bịa.",
            },
            affirmation: {
              [Language.EN]: "🌟 Honesty builds trust.",
              [Language.VN]: "🌟 Thành thật tạo niềm tin.",
            },
          },
          {
            text: {
              [Language.EN]:
                "This role doesn’t need leadership anyway.",
              [Language.VN]: "Vai trò này đâu cần lãnh đạo.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Match questions to the job’s real needs.",
              [Language.VN]:
                "🌟 Hỏi đúng điều công việc cần.",
            },
          },
          {
            text: {
              [Language.EN]: "She seems stuck. I’ll rephrase.",
              [Language.VN]: "Cô ấy kẹt. Tôi sẽ hỏi lại cho dễ.",
            },
            affirmation: {
              [Language.EN]: "🌟 Flexible questions reveal strengths.",
              [Language.VN]: "🌟 Linh hoạt khi hỏi sẽ lộ thế mạnh.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 3: Task",
          [Language.VN]: "Cảnh 3: Bài tập",
        },
        text: {
          [Language.EN]:
            "• I give a quick exercise: sort invoices.\n• Linh focuses. Fast, accurate.\n• She suggests a clearer label system.",
          [Language.VN]:
            "• Tôi giao bài nhanh: sắp xếp hóa đơn.\n• Linh tập trung. Nhanh, chính xác.\n• Cô ấy đề xuất cách dán nhãn rõ hơn.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "She’s better with tasks than small talk.",
              [Language.VN]: "Cô ấy làm bài tốt hơn nói chuyện.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Real work shows real talent.",
              [Language.VN]:
                "🌟 Việc thật cho thấy tài thật.",
            },
          },
          {
            text: {
              [Language.EN]: "I didn’t expect this accuracy.",
              [Language.VN]: "Tôi không ngờ độ chính xác này.",
            },
            affirmation: {
              [Language.EN]: "🌟 Precision deserves credit.",
              [Language.VN]: "🌟 Chính xác xứng đáng ghi nhận.",
            },
          },
          {
            text: {
              [Language.EN]: "She found a better system than mine.",
              [Language.VN]: "Cô ấy tìm cách hay hơn của tôi.",
            },
            affirmation: {
              [Language.EN]: "🌟 Real-time improvement is gold.",
              [Language.VN]: "🌟 Cải tiến ngay lúc làm là vàng.",
            },
          },
          {
            text: {
              [Language.EN]: "Awkward earlier still matters to me.",
              [Language.VN]: "Tôi vẫn nghĩ về sự gượng gạo lúc đầu.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Don’t let awkward moments hide results.",
              [Language.VN]:
                "🌟 Đừng để vài phút gượng gạo che kết quả.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 4: Reflection",
          [Language.VN]: "Cảnh 4: Suy ngẫm",
        },
        text: {
          [Language.EN]:
            "• I review notes.\n• Small talk: hard. Abstract: hard.\n• Concrete tasks: strong.",
          [Language.VN]:
            "• Tôi xem lại ghi chú.\n• Xã giao: khó. Trừu tượng: khó.\n• Nhiệm vụ cụ thể: mạnh.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "Trust my first impression. Style matters.",
              [Language.VN]: "Tin ấn tượng ban đầu. Cách nói vẫn quan trọng.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 First impressions often favor extroverts. Be fair.",
              [Language.VN]:
                "🌟 Ấn tượng đầu thường thiên về người hướng ngoại. Hãy công bằng.",
            },
          },
          {
            text: {
              [Language.EN]:
                "My interview style might limit her. I can adjust.",
              [Language.VN]:
                "Cách phỏng vấn của tôi có thể hạn chế cô ấy. Tôi có thể chỉnh.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Noticing limits is leadership.",
              [Language.VN]:
                "🌟 Nhận ra hạn chế là lãnh đạo.",
            },
          },
          {
            text: {
              [Language.EN]:
                "I’m unsure. Strengths and concerns both exist.",
              [Language.VN]: "Tôi còn phân vân. Có cả điểm mạnh lẫn lo.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Pausing to reflect shows care.",
              [Language.VN]:
                "🌟 Dừng lại suy nghĩ cho thấy bạn quan tâm.",
            },
          },
          {
            text: {
              [Language.EN]:
                "I’m curious about adjusting interviews.",
              [Language.VN]: "Tôi muốn thử cách phỏng vấn linh hoạt hơn.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Curiosity drives inclusion.",
              [Language.VN]:
                "🌟 Sự tò mò thúc đẩy hòa nhập.",
            },
          },
        ],
      },
    ],
    closingAffirmation: {
      [Language.EN]:
        "💡 Openness changes hiring. Look past labels. Unlock real potential.",
      [Language.VN]:
        "💡 Cởi mở sẽ đổi cách tuyển dụng. Vượt qua nhãn dán. Mở ra tiềm năng thật.",
    },
  },

  [NarratorRole.Jobseeker]: {
    title: {
      [Language.EN]: "Interactive Story",
      [Language.VN]: "Câu chuyện tương tác",
    },
    description: {
      [Language.EN]:
        "I’m Lan, an autistic adult building my career. I’m learning who I am and where I fit.",
      [Language.VN]:
        "Tôi là Lan, người tự kỷ đang xây dựng sự nghiệp. Tôi học về chính mình và nơi mình thuộc về.",
    },
    scenes: [
      {
        title: {
          [Language.EN]: "Scene 1: Masking",
          [Language.VN]: "Cảnh 1: Giả vờ hoà nhập",
        },
        text: {
          [Language.EN]:
            "• Each morning, before work, I ask: “Should I act like everyone else today?”",
          [Language.VN]:
            "• Mỗi sáng trước giờ làm, tôi tự hỏi: “Hôm nay có nên giống mọi người không?”",
        },
        choices: [
          {
            text: {
              [Language.EN]: "How do I respond?",
              [Language.VN]: "Tôi phản ứng thế nào?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• I force eye contact and copy others. It drains me.",
              [Language.VN]:
                "• Tôi cố nhìn mắt và bắt chước người khác. Rất mệt.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Fitting in takes energy. Your worth isn’t imitation.",
              [Language.VN]:
                "🌟 Cố hòa nhập tốn sức. Giá trị của bạn không nằm ở bắt chước.",
            },
          },
          {
            text: {
              [Language.EN]: "• I stay quiet. People think I’m distant.",
              [Language.VN]: "• Tôi im lặng. Người khác nghĩ tôi xa cách.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Silence can be care and caution, not coldness.",
              [Language.VN]:
                "🌟 Im lặng có thể là cẩn trọng, không phải lạnh lùng.",
            },
          },
          {
            text: {
              [Language.EN]: "• I switch styles based on who’s around.",
              [Language.VN]: "• Tôi đổi cách nói tùy người xung quanh.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Adaptable, yes. But you don’t need to split yourself.",
              [Language.VN]:
                "🌟 Linh hoạt là tốt. Nhưng không cần chia nhỏ bản thân.",
            },
          },
          {
            text: {
              [Language.EN]: "• I mask less now.",
              [Language.VN]: "• Tôi ít phải che giấu hơn.",
            },
            affirmation: {
              [Language.EN]: "🌟 Showing your real self is brave.",
              [Language.VN]: "🌟 Là chính mình là dũng cảm.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 2: Sensory Overload",
          [Language.VN]: "Cảnh 2: Quá tải giác quan",
        },
        text: {
          [Language.EN]:
            "• Office is loud and bright. Many smells. My body tenses.",
          [Language.VN]:
            "• Văn phòng ồn, sáng chói, nhiều mùi. Cơ thể tôi căng.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "What hits me most?",
              [Language.VN]: "Điều gì làm tôi khó nhất?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]: "• Bright lights → headache.",
              [Language.VN]: "• Đèn chói → đau đầu.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your body’s signals are valid. Listen to them.",
              [Language.VN]:
                "🌟 Tín hiệu cơ thể là thật. Hãy lắng nghe.",
            },
          },
          {
            text: {
              [Language.EN]: "• Constant noise → overwhelm.",
              [Language.VN]: "• Ồn liên tục → quá tải.",
            },
            affirmation: {
              [Language.EN]: "🌟 You deserve calm spaces.",
              [Language.VN]: "🌟 Bạn xứng đáng có không gian yên.",
            },
          },
          {
            text: {
              [Language.EN]: "• Strong smells → can’t focus.",
              [Language.VN]: "• Mùi nồng → khó tập trung.",
            },
            affirmation: {
              [Language.EN]: "🌟 Your senses work uniquely.",
              [Language.VN]: "🌟 Giác quan của bạn là riêng biệt.",
            },
          },
          {
            text: {
              [Language.EN]: "• Crowds → I shut down.",
              [Language.VN]: "• Đông người → tôi thu mình.",
            },
            affirmation: {
              [Language.EN]: "🌟 Many feel this. You’re not alone.",
              [Language.VN]: "🌟 Nhiều người cũng vậy. Bạn không cô đơn.",
            },
          },
          {
            text: {
              [Language.EN]: "• I’m okay. Not overloaded often.",
              [Language.VN]: "• Tôi ổn. Không quá tải thường xuyên.",
            },
            affirmation: {
              [Language.EN]: "🌟 That balance is a strength.",
              [Language.VN]: "🌟 Sự cân bằng đó là điểm mạnh.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 3: Family Pressure",
          [Language.VN]: "Cảnh 3: Áp lực gia đình",
        },
        text: {
          [Language.EN]:
            "• At home, my parents talk about my future. It stings, even if they mean well.",
          [Language.VN]:
            "• Ở nhà, bố mẹ nói về tương lai của tôi. Lời nói làm tôi nhói, dù họ có ý tốt.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "What do I hear?",
              [Language.VN]: "Tôi nghe gì?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• “You’re smart but not social. You won’t succeed.”",
              [Language.VN]:
                "• “Con thông minh nhưng không hòa đồng. Sẽ khó thành công.”",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your worth is not “being social.”",
              [Language.VN]:
                "🌟 Giá trị của bạn không nằm ở “hòa đồng”.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• “Marry first, career later.”",
              [Language.VN]:
                "• “Cưới trước, rồi tính sự nghiệp.”",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your path is yours to build.",
              [Language.VN]:
                "🌟 Con đường là của bạn.",
            },
          },
          {
            text: {
              [Language.EN]: "• They compare me to cousins.",
              [Language.VN]: "• Họ so tôi với họ hàng.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Comparison is unfair. Your pace is valid.",
              [Language.VN]:
                "🌟 So sánh là không công bằng. Nhịp của bạn là đúng.",
            },
          },
          {
            text: {
              [Language.EN]: "• They support me without judgment.",
              [Language.VN]: "• Họ ủng hộ tôi, không phán xét.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 That support is rare. Treasure it.",
              [Language.VN]:
                "🌟 Sự ủng hộ đó hiếm. Hãy trân trọng.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 4: Interviews",
          [Language.VN]: "Cảnh 4: Phỏng vấn",
        },
        text: {
          [Language.EN]:
            "• One week later, I go to an interview.\n• Smiles at first. Then many questions.",
          [Language.VN]:
            "• Một tuần sau, tôi đi phỏng vấn.\n• Ban đầu mỉm cười. Rồi nhiều câu hỏi dồn dập.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "What happens to me?",
              [Language.VN]: "Điều gì xảy ra với tôi?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]: "• Vague questions confuse me.",
              [Language.VN]: "• Câu hỏi mơ hồ làm tôi rối.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Abstract isn’t fair for everyone. Real tasks show value.",
              [Language.VN]:
                "🌟 Trừu tượng không công bằng với mọi người. Bài tập thực tế thể hiện giá trị.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I freeze on “strengths and weaknesses.”",
              [Language.VN]:
                "• Tôi “đứng hình” khi hỏi điểm mạnh/ yếu.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Freezing doesn’t erase your strengths.",
              [Language.VN]:
                "🌟 Bối rối không làm mất điểm mạnh.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I know answers but can’t speak fast.",
              [Language.VN]:
                "• Tôi biết câu trả lời nhưng nói chậm.",
            },
            affirmation: {
              [Language.EN]: "🌟 Deep thinking takes time.",
              [Language.VN]: "🌟 Suy nghĩ sâu cần thời gian.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I shine more with practical tasks.",
              [Language.VN]:
                "• Tôi tỏa sáng hơn với bài thực hành.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Hands-on skills speak louder than words.",
              [Language.VN]:
                "🌟 Kỹ năng thực hành nói lên tất cả.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 5: Anxiety",
          [Language.VN]: "Cảnh 5: Lo âu",
        },
        text: {
          [Language.EN]:
            "• Weeks of trying to fit in. My body feels heavy. Anxiety grows.",
          [Language.VN]:
            "• Nhiều tuần cố hòa nhập. Cơ thể nặng nề. Lo âu tăng.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "How does it show up?",
              [Language.VN]: "Biểu hiện thế nào?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]: "• I’m exhausted after masking all day.",
              [Language.VN]: "• Tôi kiệt sức vì “đeo mặt nạ” cả ngày.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Tired = effort given. Not failure.",
              [Language.VN]:
                "🌟 Mệt = bạn đã nỗ lực. Không phải thất bại.",
            },
          },
          {
            text: {
              [Language.EN]: "• I panic before deadlines.",
              [Language.VN]: "• Tôi hoảng trước hạn chót.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Anxiety shows you care to do well.",
              [Language.VN]:
                "🌟 Lo âu cho thấy bạn muốn làm tốt.",
            },
          },
          {
            text: {
              [Language.EN]: "• I skip social events to recharge.",
              [Language.VN]: "• Tôi tránh sự kiện để nạp năng lượng.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Rest is self-respect.",
              [Language.VN]:
                "🌟 Nghỉ ngơi là tôn trọng bản thân.",
            },
          },
          {
            text: {
              [Language.EN]: "• I rarely burn out.",
              [Language.VN]: "• Tôi hiếm khi kiệt sức.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Balance protects you.",
              [Language.VN]:
                "🌟 Cân bằng đang bảo vệ bạn.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 6: Late Diagnosis",
          [Language.VN]: "Cảnh 6: Chẩn đoán muộn",
        },
        text: {
          [Language.EN]:
            "• At night, I read about autism in adults. The stories sound like mine.",
          [Language.VN]:
            "• Buổi tối, tôi đọc về tự kỷ ở người lớn. Câu chuyện giống tôi.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "What feels familiar?",
              [Language.VN]: "Điều gì quen thuộc?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]: "• Called “lazy” or “different” as a kid.",
              [Language.VN]: "• Từng bị gọi “lười” hay “khác biệt”.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 That was their misunderstanding, not you.",
              [Language.VN]:
                "🌟 Đó là họ hiểu sai, không phải bạn.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• People saw me as rude or too shy.",
              [Language.VN]:
                "• Người khác nghĩ tôi thô lỗ hoặc quá nhút nhát.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Opinions vary. Keep what cares for you.",
              [Language.VN]:
                "🌟 Ý kiến khác nhau. Giữ điều tốt cho bạn.",
            },
          },
          {
            text: {
              [Language.EN]: "• I learned about autism after 20.",
              [Language.VN]: "• Tôi biết mình là tự kỷ sau 20 tuổi.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Late answers still bring power.",
              [Language.VN]:
                "🌟 Biết muộn vẫn mang lại sức mạnh.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I still suspect. No diagnosis yet.",
              [Language.VN]:
                "• Tôi nghi ngờ. Chưa có chẩn đoán.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your lived experience is valid.",
              [Language.VN]:
                "🌟 Trải nghiệm của bạn là có giá trị.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 7: Being Seen",
          [Language.VN]: "Cảnh 7: Được nhìn nhận",
        },
        text: {
          [Language.EN]:
            "• A hard project. Others get stuck.\n• I quietly organize steps. I see patterns.\n• My manager says: “Lan, you see what others can’t.”\n• I feel seen for my true ability.",
          [Language.VN]:
            "• Dự án khó. Người khác bối rối.\n• Tôi sắp xếp từng bước. Tôi thấy quy luật.\n• Quản lý nói: “Lan, em thấy điều người khác không thấy.”\n• Tôi được nhìn nhận đúng khả năng.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "Have I felt this?",
              [Language.VN]: "Tôi đã có khoảnh khắc này chưa?",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• Yes. My talent was recognized.",
              [Language.VN]: "• Rồi. Tài năng của tôi được công nhận.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your mind holds real strengths.",
              [Language.VN]:
                "🌟 Bạn có những điểm mạnh thật sự.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Someone noticed my focus or creativity.",
              [Language.VN]:
                "• Có người thấy khả năng tập trung hay sáng tạo của tôi.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Recognition confirms what’s there.",
              [Language.VN]:
                "🌟 Sự công nhận xác nhận điều vốn có.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I’m still waiting for that moment.",
              [Language.VN]:
                "• Tôi vẫn chờ khoảnh khắc ấy.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your gifts are real. The moment will come.",
              [Language.VN]:
                "🌟 Tài năng của bạn là thật. Khoảnh khắc sẽ đến.",
            },
          },
        ],
      },
    ],
    closingAffirmation: {
      [Language.EN]:
        "💡 You deserve to be seen for who you are — not how well you pretend.",
      [Language.VN]:
        "💡 Bạn xứng đáng được nhìn nhận vì chính mình — không phải vì bạn “giả vờ” giỏi.",
    },
  },

  [NarratorRole.CareGiver]: {
    title: {
      [Language.EN]: "Climbing Together",
      [Language.VN]: "Cùng nhau vượt khó",
    },
    description: {
      [Language.EN]:
        "I’m a CareGiver supporting my neurodivergent child into work. Hopes and challenges. Step by step.",
      [Language.VN]:
        "Tôi là phụ huynh hỗ trợ con khác biệt thần kinh vào làm việc. Hy vọng và thử thách. Từng bước.",
    },
    scenes: [
      {
        title: {
          [Language.EN]: "Scene 1: Morning Rhythm",
          [Language.VN]: "Cảnh 1: Nhịp sáng",
        },
        text: {
          [Language.EN]:
            "• Noise outside. Shirt is tricky.\n• Many small battles each morning.",
          [Language.VN]:
            "• Ồn ào bên ngoài. Áo khó mặc.\n• Nhiều thử thách nhỏ mỗi sáng.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "• I breathe. Guide step by step. Celebrate small wins.",
              [Language.VN]:
                "• Tôi hít sâu. Hướng dẫn từng bước. Ăn mừng điều nhỏ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Small wins build pride and skill.",
              [Language.VN]:
                "🌟 Thắng nhỏ tạo tự hào và kỹ năng.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I pause. Progress is slow but steady.",
              [Language.VN]:
                "• Tôi dừng lại. Tiến bộ chậm mà chắc.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Patience shows deep love.",
              [Language.VN]:
                "🌟 Kiên nhẫn thể hiện tình yêu sâu sắc.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I make it a game. We laugh and finish.",
              [Language.VN]:
                "• Tôi biến thành trò chơi. Vừa cười vừa xong.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Joy turns struggle into connection.",
              [Language.VN]:
                "🌟 Niềm vui biến khó thành gắn kết.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 2: Finances",
          [Language.VN]: "Cảnh 2: Tài chính",
        },
        text: {
          [Language.EN]:
            "• At the table, I plan the week: therapy, rent, food.\n• It feels like a puzzle.",
          [Language.VN]:
            "• Tôi lên kế hoạch tuần: trị liệu, tiền nhà, ăn uống.\n• Giống như ghép hình.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "• I prioritize bus fare to class. It helps him grow.",
              [Language.VN]:
                "• Tôi ưu tiên tiền xe đến lớp. Giúp con phát triển.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Investing in growth builds independence.",
              [Language.VN]:
                "🌟 Đầu tư cho phát triển giúp con tự lập.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I find creative ways to save and care.",
              [Language.VN]:
                "• Tôi tìm cách tiết kiệm mà vẫn chăm lo.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Creative solutions show care for all.",
              [Language.VN]:
                "🌟 Giải pháp khéo léo cho thấy bạn yêu thương cả nhà.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I ask community for support when needed.",
              [Language.VN]:
                "• Cần thì tôi nhờ cộng đồng giúp.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Reaching out is strength.",
              [Language.VN]:
                "🌟 Chủ động nhờ giúp là sức mạnh.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 3: Comments from Others",
          [Language.VN]: "Cảnh 3: Lời bàn tán",
        },
        text: {
          [Language.EN]:
            "• Family event. Someone whispers: “Why can’t Minh be like others?”",
          [Language.VN]:
            "• Gặp gỡ gia đình. Có người thì thầm: “Sao Minh không như người khác?”",
        },
        choices: [
          {
            text: {
              [Language.EN]: "• I share his new skills gently.",
              [Language.VN]: "• Tôi nhẹ nhàng kể về kỹ năng mới của con.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Show progress. Shift stigma to strength.",
              [Language.VN]:
                "🌟 Nêu tiến bộ. Biến định kiến thành điểm mạnh.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I ignore and focus on his joy now.",
              [Language.VN]:
                "• Tôi bỏ qua và tập trung vào niềm vui của con.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Joy matters more than judgment.",
              [Language.VN]:
                "🌟 Niềm vui quan trọng hơn phán xét.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I say calmly: “He’s on his path. We’re proud.”",
              [Language.VN]:
                "• Tôi nói bình tĩnh: “Con đi con đường riêng. Chúng tôi tự hào.”",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Pride teaches others about acceptance.",
              [Language.VN]:
                "🌟 Tự hào giúp người khác hiểu sự chấp nhận.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 4: Opportunities",
          [Language.VN]: "Cảnh 4: Cơ hội",
        },
        text: {
          [Language.EN]:
            "• We visit workplaces. Some hesitate.",
          [Language.VN]:
            "• Tôi và con đi nhiều nơi làm việc. Có nơi do dự.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "• I thank them. The right chance will come.",
              [Language.VN]:
                "• Tôi cảm ơn. Cơ hội đúng rồi sẽ đến.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Hope keeps us moving.",
              [Language.VN]:
                "🌟 Hy vọng giúp ta đi tiếp.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I advocate: what he can do, not just struggles.",
              [Language.VN]:
                "• Tôi lên tiếng: con làm được gì, không chỉ khó khăn.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Show abilities. Change old views.",
              [Language.VN]:
                "🌟 Cho thấy năng lực. Đổi định kiến cũ.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I tell him: “Not here yet. Next time might be.”",
              [Language.VN]:
                "• Tôi nói: “Chưa phải nơi này. Lần tới có thể hợp.”",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Encouragement grows resilience.",
              [Language.VN]:
                "🌟 Động viên nuôi dưỡng kiên cường.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 5: Caregiver Fatigue",
          [Language.VN]: "Cảnh 5: Kiệt sức",
        },
        text: {
          [Language.EN]:
            "• Long day. Quiet kitchen. I’m tired, but I keep going.",
          [Language.VN]:
            "• Ngày dài. Bếp yên. Tôi mệt, nhưng vẫn cố gắng.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "• I write one small win.",
              [Language.VN]: "• Tôi viết một điều tốt nhỏ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Small wins fuel tomorrow.",
              [Language.VN]:
                "🌟 Điều nhỏ tốt đẹp nuôi ngày mai.",
            },
          },
          {
            text: {
              [Language.EN]: "• I do a short breathing exercise.",
              [Language.VN]: "• Tôi thở ngắn để hồi sức.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 A pause is strength.",
              [Language.VN]:
                "🌟 Dừng lại là sức mạnh.",
            },
          },
          {
            text: {
              [Language.EN]: "• I rest. Self-care helps me care for him.",
              [Language.VN]: "• Tôi nghỉ. Chăm mình để chăm con.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Rest sustains your love.",
              [Language.VN]:
                "🌟 Nghỉ ngơi giữ vững tình yêu.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 6: New Beginning",
          [Language.VN]: "Cảnh 6: Khởi đầu mới",
        },
        text: {
          [Language.EN]:
            "• Minh joins a bakery class.\n• Clumsy at first. Slowly better. I watch with hope.",
          [Language.VN]:
            "• Minh học làm bánh.\n• Lúc đầu vụng. Dần khá hơn. Tôi hy vọng.",
        },
        choices: [
          {
            text: {
              [Language.EN]: "• I’m proud of each small step.",
              [Language.VN]: "• Tôi tự hào về từng bước nhỏ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Pride builds momentum.",
              [Language.VN]:
                "🌟 Tự hào tạo đà tiến bộ.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I talk with the teacher about how he learns best.",
              [Language.VN]:
                "• Tôi trao đổi với cô giáo về cách con học tốt nhất.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Teamwork makes a stronger path.",
              [Language.VN]:
                "🌟 Đồng hành tạo con đường vững hơn.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I imagine new doors for his future.",
              [Language.VN]:
                "• Tôi nghĩ về cánh cửa tương lai của con.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Hope shapes chances.",
              [Language.VN]:
                "🌟 Hy vọng tạo cơ hội.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 7: First Job",
          [Language.VN]: "Cảnh 7: Việc làm đầu tiên",
        },
        text: {
          [Language.EN]:
            "• First day at a café. Small mistakes. Remembers key steps.",
          [Language.VN]:
            "• Ngày đầu ở quán. Lỗi nhỏ. Vẫn nhớ bước chính.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "• I cheer from the side. He stands on his own.",
              [Language.VN]:
                "• Tôi động viên bên ngoài. Con tự lập.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Quiet support = more confidence.",
              [Language.VN]:
                "🌟 Ủng hộ lặng lẽ = tự tin hơn.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Learning takes time. Mistakes teach.",
              [Language.VN]:
                "• Học cần thời gian. Sai để học.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 See errors as lessons.",
              [Language.VN]:
                "🌟 Xem lỗi như bài học.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I’m grateful for a patient manager.",
              [Language.VN]:
                "• Tôi biết ơn quản lý kiên nhẫn.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Allies strengthen support.",
              [Language.VN]:
                "🌟 Đồng minh giúp hệ hỗ trợ mạnh hơn.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 8: Pride & Possibility",
          [Language.VN]: "Cảnh 8: Tự hào & hy vọng",
        },
        text: {
          [Language.EN]:
            "• Minh serves coffee. Customer smiles: “Thank you.”\n• Minh beams. I feel proud today. Hopeful for tomorrow.",
          [Language.VN]:
            "• Minh đưa cà phê. Khách mỉm cười: “Cảm ơn.”\n• Minh rạng rỡ. Tôi tự hào hôm nay. Hy vọng cho ngày mai.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "• I celebrate. This shows what’s possible.",
              [Language.VN]:
                "• Tôi ăn mừng. Điều này cho thấy điều có thể.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Today’s win grows belief.",
              [Language.VN]:
                "🌟 Thành công hôm nay nuôi niềm tin.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I reflect on how far he’s come.",
              [Language.VN]:
                "• Tôi nhìn lại con đã đi xa thế nào.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Love + patience took you here.",
              [Language.VN]:
                "🌟 Tình yêu + kiên nhẫn đưa bạn đến đây.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I wish more people saw this and believed.",
              [Language.VN]:
                "• Tôi ước nhiều người thấy và tin.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 That wish is where change starts.",
              [Language.VN]:
                "🌟 Ước muốn đó bắt đầu thay đổi.",
            },
          },
        ],
      },
    ],
    closingAffirmation: {
      [Language.EN]:
        "💡 Openness can change hiring in Vietnam. Look beyond bias. Unlock potential.",
      [Language.VN]:
        "💡 Cởi mở có thể đổi cách tuyển dụng. Vượt qua định kiến. Mở tiềm năng.",
    },
  },

  [NarratorRole.Volunteer]: {
    title: {
      [Language.EN]: "A Volunteer’s Reflection",
      [Language.VN]: "Suy ngẫm của tình nguyện viên",
    },
    description: {
      [Language.EN]:
        "I’m a peer volunteer. Empathy and support can change lives.",
      [Language.VN]:
        "Tôi là tình nguyện viên đồng trang lứa. Đồng cảm và hỗ trợ có thể đổi cuộc đời.",
    },
    scenes: [
      {
        title: {
          [Language.EN]: "Scene 1: First Days",
          [Language.VN]: "Cảnh 1: Ngày đầu",
        },
        text: {
          [Language.EN]:
            "• I arrive at the center. I look around the rooms and tools.",
          [Language.VN]:
            "• Tôi đến trung tâm. Nhìn quanh phòng học và dụng cụ.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "What was my impression? (Select all that apply)",
              [Language.VN]:
                "Ấn tượng của tôi là gì? (Chọn tất cả phù hợp)",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• It felt organized. I had clear instructions.",
              [Language.VN]:
                "• Mọi thứ gọn gàng. Tôi có hướng dẫn rõ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Structure gave you confidence.",
              [Language.VN]:
                "🌟 Cấu trúc rõ ràng giúp bạn tự tin.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I felt underprepared. I figured out a lot myself.",
              [Language.VN]:
                "• Tôi chưa chuẩn bị kỹ. Phải tự mò nhiều.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 You kept going. That matters.",
              [Language.VN]:
                "🌟 Bạn vẫn tiếp tục. Điều đó rất quý.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• So few staff and resources. I was surprised.",
              [Language.VN]:
                "• Ít nhân sự và nguồn lực. Tôi bất ngờ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 You saw the gaps and still helped.",
              [Language.VN]:
                "🌟 Thấy thiếu thốn mà vẫn giúp.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• My expectations didn’t match reality.",
              [Language.VN]:
                "• Kỳ vọng không khớp thực tế.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Seeing reality is caring.",
              [Language.VN]:
                "🌟 Thấy thực tế là quan tâm.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 2: Meeting Participants",
          [Language.VN]: "Cảnh 2: Gặp người tham gia",
        },
        text: {
          [Language.EN]:
            "• First mock interview. The autistic adult avoids eye contact. Open questions are hard.",
          [Language.VN]:
            "• Phỏng vấn thử đầu tiên. Người tham gia tránh nhìn mắt. Câu hỏi mở khó.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "How did I respond? (Select all that apply)",
              [Language.VN]:
                "Tôi phản ứng thế nào? (Chọn tất cả phù hợp)",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• I knew what to do from training.",
              [Language.VN]:
                "• Tôi biết làm gì nhờ đào tạo.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Preparation gave you tools.",
              [Language.VN]:
                "🌟 Chuẩn bị cho bạn công cụ.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I improvised: visuals, roleplay, smaller steps.",
              [Language.VN]:
                "• Tôi ứng biến: hình ảnh, đóng vai, chia nhỏ bước.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Creativity filled the gaps.",
              [Language.VN]:
                "🌟 Sự sáng tạo bù lỗ hổng.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I felt stuck. Didn’t know how to help.",
              [Language.VN]:
                "• Tôi bế tắc. Chưa biết hỗ trợ sao.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 The struggle shows you care.",
              [Language.VN]:
                "🌟 Bối rối cho thấy bạn rất quan tâm.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Family presence made independence harder.",
              [Language.VN]:
                "• Có gia đình nên khó tự lập hơn.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 You noticed hidden barriers.",
              [Language.VN]:
                "🌟 Bạn thấy rào cản khó thấy.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 3: Wider Barriers",
          [Language.VN]: "Cảnh 3: Rào cản rộng hơn",
        },
        text: {
          [Language.EN]:
            "• NGO links to employers. Few are interested. Some call it charity.",
          [Language.VN]:
            "• Tổ chức kết nối với doanh nghiệp. Ít nơi quan tâm. Có nơi xem như từ thiện.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "What did I observe? (Select all that apply)",
              [Language.VN]:
                "Tôi thấy gì? (Chọn tất cả phù hợp)",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• Some employers were open. Hope!",
              [Language.VN]:
                "• Có nhà tuyển dụng cởi mở. Có hy vọng!",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Openness means change is possible.",
              [Language.VN]:
                "🌟 Cởi mở nghĩa là có thể thay đổi.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Too few chances. I felt frustrated.",
              [Language.VN]:
                "• Cơ hội quá ít. Tôi nản.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Frustration comes from wanting fairness.",
              [Language.VN]:
                "🌟 Nản vì bạn muốn công bằng.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Minds changed after real contact.",
              [Language.VN]:
                "• Giao tiếp thật làm họ đổi ý.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 You witnessed change. It matters.",
              [Language.VN]:
                "🌟 Bạn thấy sự đổi thay. Quan trọng lắm.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Systems (stigma, policy) felt stronger than us.",
              [Language.VN]:
                "• Hệ thống (định kiến, thiếu chính sách) mạnh hơn chúng tôi.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Systems must shift, not just people.",
              [Language.VN]:
                "🌟 Cần đổi hệ thống, không chỉ cá nhân.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 4: Personal Struggles",
          [Language.VN]: "Cảnh 4: Khó khăn cá nhân",
        },
        text: {
          [Language.EN]:
            "• Weeks pass. I notice how this work affects me.",
          [Language.VN]:
            "• Nhiều tuần trôi. Tôi thấy công việc ảnh hưởng đến mình.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "How did I feel? (Select all that apply)",
              [Language.VN]:
                "Tôi thấy thế nào? (Chọn tất cả phù hợp)",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• Energized by small wins.",
              [Language.VN]:
                "• Được tiếp năng lượng bởi thắng nhỏ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Giving also nourishes you.",
              [Language.VN]:
                "🌟 Cho đi cũng nuôi dưỡng bạn.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Exhausted. Near burnout sometimes.",
              [Language.VN]:
                "• Kiệt sức. Đôi lúc gần kiệt quệ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Rest is part of service.",
              [Language.VN]:
                "🌟 Nghỉ ngơi là một phần phục vụ.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Will my impact last after I leave?",
              [Language.VN]:
                "• Ảnh hưởng của tôi có còn sau khi rời đi?",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Seeds of change were planted.",
              [Language.VN]:
                "🌟 Hạt giống thay đổi đã gieo.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I felt alone when others left early.",
              [Language.VN]:
                "• Tôi thấy cô đơn khi người khác rời sớm.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Even alone, you made a difference.",
              [Language.VN]:
                "🌟 Dù một mình, bạn vẫn tạo khác biệt.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 5: Breakthrough",
          [Language.VN]: "Cảnh 5: Bước tiến",
        },
        text: {
          [Language.EN]:
            "• One day, a participant answers clearly and confidently.\n• The employer starts to see potential.",
          [Language.VN]:
            "• Một ngày, người tham gia trả lời rõ và tự tin.\n• Nhà tuyển dụng bắt đầu thấy tiềm năng.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "Did I witness this? (Select all that apply)",
              [Language.VN]:
                "Tôi có thấy điều này không? (Chọn tất cả phù hợp)",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• Yes. I felt proud of the progress.",
              [Language.VN]:
                "• Có. Tôi tự hào về tiến bộ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Transformation stays with you.",
              [Language.VN]:
                "🌟 Khoảnh khắc đổi thay sẽ theo bạn.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I never saw a big breakthrough. I felt frustrated.",
              [Language.VN]:
                "• Tôi chưa thấy bước đột phá. Tôi nản.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your effort still mattered.",
              [Language.VN]:
                "🌟 Nỗ lực của bạn vẫn có ý nghĩa.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Small gains, but not enough to change minds.",
              [Language.VN]:
                "• Có tiến bộ nhỏ, nhưng chưa đổi được suy nghĩ.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Small progress is real progress.",
              [Language.VN]:
                "🌟 Tiến bộ nhỏ vẫn là tiến bộ.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I believe small wins matter.",
              [Language.VN]:
                "• Tôi tin thắng nhỏ là quan trọng.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Belief keeps hope alive.",
              [Language.VN]:
                "🌟 Niềm tin giữ hy vọng.",
            },
          },
        ],
      },
      {
        title: {
          [Language.EN]: "Scene 6: After Leaving",
          [Language.VN]: "Cảnh 6: Sau khi rời đi",
        },
        text: {
          [Language.EN]:
            "• End of my placement. I look back.",
          [Language.VN]:
            "• Kết thúc đợt tình nguyện. Tôi nhìn lại.",
        },
        choices: [
          {
            text: {
              [Language.EN]:
                "How do I feel? (Select all that apply)",
              [Language.VN]:
                "Tôi cảm thấy thế nào? (Chọn tất cả phù hợp)",
            },
            isMultiSelect: true,
          },
          {
            text: {
              [Language.EN]:
                "• Fulfilled. Stronger commitment to inclusion.",
              [Language.VN]:
                "• Mãn nguyện. Cam kết hòa nhập mạnh hơn.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 You grew as much as they did.",
              [Language.VN]:
                "🌟 Bạn cũng trưởng thành như họ.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Frustrated. The system needs deeper change.",
              [Language.VN]:
                "• Nản. Hệ thống cần đổi sâu hơn.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your vision for change matters. Keep it.",
              [Language.VN]:
                "🌟 Tầm nhìn đổi thay của bạn rất quý. Giữ lấy.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• Mixed: rewarding and draining.",
              [Language.VN]:
                "• Lẫn lộn: vui mà cũng mệt.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Both joy and struggle are valid.",
              [Language.VN]:
                "🌟 Niềm vui và khó khăn đều xứng đáng được ghi nhận.",
            },
          },
          {
            text: {
              [Language.EN]:
                "• I have ideas to help future volunteers.",
              [Language.VN]:
                "• Tôi có ý tưởng cho tình nguyện viên sau.",
            },
            affirmation: {
              [Language.EN]:
                "🌟 Your ideas light the path.",
              [Language.VN]:
                "🌟 Ý tưởng của bạn soi đường.",
            },
          },
        ],
      },
    ],
    closingAffirmation: {
      [Language.EN]:
        "💡 Your time planted seeds of change. Some bloom soon, some later — all thanks to you.",
      [Language.VN]:
        "💡 Thời gian của bạn đã gieo hạt thay đổi. Có hạt nảy sớm, có hạt muộn — đều nhờ bạn.",
    },
  },
};
