// 准备翻译的语言环境信息
const messages = {
  en: {
    message: {
      navigation: {
        blog: 'Blog',
        resume: 'Resume',
        gitlab: 'Repository',
        experience: 'Experience',
        introduction: 'Self Introduction',
        study: 'Study Experience',
        career: 'Career Experience',
        honor: 'Awards',
        exam: 'Exam Scores',
        contact: 'Contact',
        milestone: 'Milestone',
        skill: 'Skill',
        certification: 'Certification',
        oj: 'Online Judge',
        course: 'Online Course',
        book: 'Book',
        project: 'Project',
        paper: 'Paper',
        entertainment: 'Entertainment',
        fiction: 'Fiction',
        game: 'Game',
        movie: 'Video',
        footprint: 'Footprint',
      },
      study: {
        ecnu: 'East China Normal University',
        ecnu_time: 'From September, 2016 Till Now',
        ecnu_ad: 'Admitted by 104 East China Normal University 80 Computer Science and Technology',
        ecnu_ad_time: 'July 25th, 2016',
        shibei: 'Shanghai Shibei Senior High School',
        shibei_time: 'From September, 2013, To June, 2016',
        shibei_ad: 'Addmitted by Shanghai Shibei Senior High School',
        shibei_ad_time: 'January, 2013',
        tianjiabing: 'Shanghai Tianjiabing Middle School',
        tianjiabing_time: 'From September, 2011, To June, 2013',
      },
      reserved: {
        title: 'This page is not ready for showing.',
        desc: 'This page is not ready for showing, please visit it later.',
      },
      career: {
        microsoft2019: 'Microsoft',
        microsoft2019_title: 'DevDiv, C+AI, VS-China SWE Summer Intern, in Shanghai Zizhu High-tech Development Zone',
        microsoft2019_time: 'From July 1st, 2019, To September 30th, 2019',
      },
      project: {
        knowledge_graph: {
          title: 'Knowledge Graph Front End Demonstration',
          desc: 'Develop a front-end visualization page for teachers in charge of the Knowledge Graph project,'
            + ' with the goal of providing a visual interface that translates the triangulated data in the graph relationships into nodal relationships (points) and dependencies (sides)'
            + ' presented in a graphical manner, with an easy-to-use interface.'
            + ' Support for adding and removing nodes or relationships, support for new inference rules, and support for importing and exporting',
        },
        eoj_app: {
          title: 'Development of Adaptive Learning Path Recommendation System for OJ training and subsidiary APP development',
          desc: 'Systematically updated the older version of Online Judge (OJ) in ECNU. Labeled the knowledge points (like the main algorithms and data structures), and the corresponding difficulty coefficient for all the 3668 programming questions.\n'
            + 'Added typical questions to the course problem bank so that teachers can choose topics freely from the bank, and then combine them into course assignments or programming test questions.\n'
            + 'Trained 1 million code submission data (including time, user ID and attached tags of the related problem). Applied Spotlight and PyTorch to build an intelligent practice recommendation model with a competent MRR score of 0.1983.\n'
            + 'Developed an APP that effectively interacts with the OJ system for students to learn in their spare time.\n'
            + 'Planned the project requirements, assigned tasks suitable for team members, coordinated the cooperation among team members, arranged appropriate but efficient meetings, and ensured that the project progress was always in line with expectations, as the project leader.\n',
        },
        hackathon: {
          title: 'Hackathon 2019: Intelligent Garbage Classification',
          desc: 'Participated in the Microsoft Hackathon 2019 to offer an IoT Edge Solution for Intelligent Garbage Classification.'
            + ' Implemented a display circuit witha Raspberry Pie 3, a breadboard, some LED lamps and a web-camera, and its integration with IoT Edge.'
            + ' Obtained the Most Impactful Award in the Hackathon.'
            + ' This is the IoT Edge Solution, and this project has another part which is WeChat mini APP solution.',
        },
        azure_iot_d2c: {
          title: 'Send D2C Message In Azure IoT Tools',
          desc: 'Independently responsible for developing an Azure IoT Hub Toolkit Extension Pack called Send Device-to-Cloud Message.'
            + ' It is a powerful middleware for users to connect their Microsoft Azure IoT applications to Azure.'
            + ' They can debug Certified Azure IoT Devices and customize specific functions on Azure IoT Edge Devices.\n'
            + 'Improved the previous message generation logic with Dummy JSON as a new efficient message format.'
            + ' Collected the sending status and displayed it in WebView in a visualized form.'
            + ' Created a user-friendly frontend UI for users.',
        },
      },
      oj: {
        status: 'Status',
        todo: 'TODO',
        accepted: 'Accepted',
        attempted: 'Attempted',
        oj: 'OJ Name',
        problem: 'Problem ID',
        title: 'Problem Title',
        ds: 'Data Struct',
        ds_pop: 'Used {num} main data struct(s)',
        algs: 'Algorithm',
        algs_pop: 'Used {num} main algorithm(s)',
        code_pop: 'Click below to load the code for "{name}":',
      },
    },
  },
  cn: {
    message: {
      navigation: {
        blog: '个人博客',
        resume: '简介主页',
        gitlab: '代码仓库',
        experience: '个人经历',
        introduction: '个人简介',
        study: '学习经历',
        career: '工作经历',
        honor: '获奖证书',
        exam: '考试成绩',
        contact: '联系方式',
        milestone: '里程碑',
        skill: '专业技能',
        certification: '资质证书',
        oj: 'OJ做题记录',
        course: '网络课程',
        book: '专业书籍',
        project: '项目',
        paper: '论文',
        entertainment: '兴趣娱乐',
        fiction: '小说',
        game: '游戏',
        movie: '影视',
        footprint: '足迹',
      },
      study: {
        ecnu: '华东师范大学',
        ecnu_time: '自 2016 年 09 月至今',
        ecnu_ad: '被 104华东师范大学 80计算机科学与技术 录取',
        ecnu_ad_time: '2016 年 07 月 25 日',
        shibei: '上海市市北中学',
        shibei_time: '自 2013 年 09 月至 2016 年 06 月',
        shibei_ad: '零志愿被上海市市北中学录取',
        shibei_ad_time: '2013 年 01 月',
        tianjiabing: '上海田家炳中学',
        tianjiabing_time: '自 2011 年 09 月至 2013 年 06 月',
      },
      reserved: {
        title: '这个页面还在施工中',
        desc: '这个页面还在施工中，过段时间再来访问吧',
      },
      career: {
        microsoft2019: '微软',
        microsoft2019_title: '上海紫竹高新技术开发区 C+AI VS-China 软件开发工程师暑期实习',
        microsoft2019_time: '自 2019 年 07 月 01 日至 2019 年 09 月 30 日',
      },
      project: {
        knowledge_graph: {
          title: '知识图谱前端可视化',
          desc: '为知识图谱项目的负责教师开发一个前端可视化页面，目的是提供一个可视化界面，'
            + '将图关系中的三元组数据转化为结点关系（点）和从属关系（边）以图的方式显示出来，'
            + '并提供易于用户操作的界面。支持增加和删除结点或关系、支持新建推理规则、支持导入和导出。',
        },
        eoj_app: {
          title: '面向 OJ 训练的适应性学习路径推荐系统的开发及附属APP开发',
          desc: '系统地更新了 ECNU 老版本的 Online Judge（OJ）。对所有 3668 编程题的知识点（如主要算法、数据结构等）进行了标注，并标注了相应的难度系数。\n'
            + '在课程题库中增加了典型题，方便教师从题库中自由选择题目，然后结合课程作业或编程题进行组合。\n'
            + '训练了 100 万条代码提交数据（包括时间、用户 ID 和相关问题的附加标签）。应用 Spotlight 和 PyTorch 构建了一个智能练习推荐模型，MRR 评分为 0.1983 分。\n'
            + '开发了一个与 OJ 系统有效互动的 APP，供学生在课余时间学习。\n'
            + '作为项目负责人，规划项目需求，分配适合团队成员的任务，协调团队成员之间的合作，安排适当而高效的会议，确保项目进度始终符合预期。\n',
        },
        hackathon: {
          title: 'Hackathon 2019: Intelligent Garbage Classification',
          desc: '参加了微软 2019 年的 Hackathon，提供了一个 IoT Edge 智能垃圾分类解决方案。'
            + '用 Raspberry Pie 3、一块面包板、一些 LED 灯和一个网络摄像头实现了一个显示电路，并与 IoT Edge 集成。获得最具影响力奖。\n'
            + '这是 IoT Edge 解决方案，这个项目还有一个部分是微信小程序解决方案。',
        },
        azure_iot_d2c: {
          title: 'Send D2C Message In Azure IoT Tools',
          desc: '独立负责开发 Azure IoT Hub Toolkit Extension 中的 Send Device-to-Cloud Message 功能，'
            + '这是一个强大的中间件，可以让用户将 Microsoft Azure IoT 应用连接到 Azure 上。'
            + '用户可以调试认证的 Azure IoT 设备，并在 Azure IoT Edge 设备上定制特定功能。\n'
            + '该项目改进了以前的消息生成逻辑，使用 Dummy JSON 作为新的高效消息格式。'
            + '收集发送状态并以可视化的形式显示在 WebView 中，为用户创建了一个用户友好的前端 UI。',
        },
      },
      oj: {
        status: '状态',
        todo: '等待完成',
        accepted: '已经通过',
        attempted: '尝试失败',
        oj: 'OJ 名称',
        problem: '题目编号',
        title: '题目名称',
        ds: '数据结构',
        ds_pop: '用到了 {num} 个典型的数据结构',
        algs: '算法',
        algs_pop: '用到了 {num} 个典型的算法',
        code_pop: '点击下方以加载 “{name}” 的代码：',
      },
    },
  },
};

module.exports = { messages };