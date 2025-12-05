import { Question, Option, TestResult } from './types';

export const OPTIONS: Option[] = [
  { label: "完全不符合", score: 1 },
  { label: "不太符合", score: 2 },
  { label: "比较符合", score: 3 },
  { label: "完全符合", score: 4 },
];

export const QUESTIONS: Question[] = [
  { id: 1, text: "在这段关系中，我能够完全做真实的自己，不需要刻意伪装。", category: "Self-Expression" },
  { id: 2, text: "当我们发生冲突时，能够理性沟通并找到解决办法，而不是冷战或互相攻击。", category: "Communication" },
  { id: 3, text: "我完全信任对方，不担心通过查岗或猜忌来获得安全感。", category: "Trust" },
  { id: 4, text: "对方尊重我的个人空间、兴趣爱好以及社交圈子。", category: "Respect" },
  { id: 5, text: "我们在未来规划（如婚姻、事业、居住地）上有共同的愿景。", category: "Values" },
  { id: 6, text: "和对方在一起时，我感到精力充沛，而不是身心俱疲。", category: "Energy" },
  { id: 7, text: "对方能在我低谷或困难时给予情感上的支持和鼓励。", category: "Support" },
  { id: 8, text: "我们不仅是恋人，也是可以说心里话的好朋友。", category: "Friendship" },
  { id: 9, text: "我能够坦然地表达我的不满或需求，而不必担心对方会大发雷霆。", category: "Safety" },
  { id: 10, text: "我们在这段关系中的付出（情感、金钱、时间）总体上是平衡的。", category: "Balance" },
  { id: 11, text: "对方愿意为了我们的关系做出合理的妥协或改变。", category: "Commitment" },
  { id: 12, text: "我欣赏对方的人品和性格，并且为拥有这样的伴侣感到自豪。", category: "Admiration" },
  { id: 13, text: "在这段关系中，我感觉自己变成了一个更好的人。", category: "Growth" },
  { id: 14, text: "我们在金钱观和消费习惯上基本一致，或者能达成共识。", category: "Finance" },
  { id: 15, text: "想到要和这个人共度余生，我更多感到的是期待而不是恐惧。", category: "Future" },
];

export const RESULTS: TestResult[] = [
  {
    minScore: 0,
    maxScore: 35,
    title: "警惕信号",
    description: "这段关系目前可能存在较多核心问题，你在这段感情中可能感到压抑或不安。",
    colorClass: "text-red-600",
    advice: [
      "重新审视你们的沟通方式，是否存在不可调和的矛盾。",
      "关注自己的情绪健康，不要为了维持关系而过度牺牲。",
      "如果感到不安全或不被尊重，请寻求专业咨询或考虑及时止损。"
    ]
  },
  {
    minScore: 36,
    maxScore: 49,
    title: "需要磨合",
    description: "你们有一定的感情基础，但在某些关键领域（如沟通、价值观）仍需努力。",
    colorClass: "text-yellow-600",
    advice: [
      "尝试进行深度对话，坦诚表达彼此未被满足的需求。",
      "建立共同的解决冲突机制，避免问题积压。",
      "多关注对方的优点，同时在这个磨合期保持耐心。"
    ]
  },
  {
    minScore: 50,
    maxScore: 60,
    title: "天作之合",
    description: "恭喜！你们的关系非常健康且稳固，彼此信任、支持，拥有高度的默契。",
    colorClass: "text-green-600",
    advice: [
      "保持现在的沟通频率和情感互动。",
      "共同规划未来，为生活增添更多仪式感。",
      "继续支持彼此的个人成长，让关系成为彼此的滋养。"
    ]
  },
];
