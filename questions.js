const questions = [
{ 
  id:1, 
  question:"“月”“我”“云”三字的拼音中没有（ ）", 
  translation:"Which of the following is NOT present in the pinyin of the characters '月', '我', and '云'?",
  options:["声母","韵母","声调","音节"], 
  answer:0,
  explanations:[
    { en:"initial consonant", note:"These syllables begin with vowels or semi-vowels (y/w), so there is no true consonant initial here.", link:"" },
    { en:"final (vowel part)", note:"All three have finals: yuè, wǒ, yún.", link:"" },
    { en:"tone", note:"All three characters have tones.", link:"" },
    { en:"syllable", note:"Each one is a complete Mandarin syllable.", link:"" }
  ]
},

{ 
  id:2, 
  question:"请选择“心安理得”的正确拼音（ ）", 
  translation:"Choose the correct pinyin for '心安理得'.",
  options:["xīnānlǐdé","xīn’ān lǐdé","xīnān lǐdé","xīn’ānlǐdé"], 
  answer:1,
  explanations:[
    { en:"no apostrophe", note:"Incorrect. A vowel-initial syllable after another syllable needs separation here.", link:"" },
    { en:"correct pinyin", note:"Correct. xīn + ān is written as xīn’ān lǐdé.", link:"" },
    { en:"missing separation", note:"Incorrect. xīnān is not the standard written form here.", link:"" },
    { en:"wrong segmentation", note:"Incorrect syllable grouping.", link:"" }
  ]
},

{ 
  id:3, 
  question:"以下词语注音拼写错误的是（ ）", 
  translation:"Which of the following words has an incorrect pinyin spelling?",
  options:["绿色 lǜsè","破坏 puòhuài","后悔 hòuhuǐ","解释 jiěshì"], 
  answer:1,
  explanations:[
    { en:"lǜsè (green)", note:"This spelling is correct.", link:"" },
    { en:"puòhuài (damage)", note:"Incorrect. It should be pòhuài, not puòhuài.", link:"" },
    { en:"hòuhuǐ (regret)", note:"This spelling is correct.", link:"" },
    { en:"jiěshì (explain)", note:"This spelling is correct.", link:"" }
  ]
},

{ 
  id:4, 
  question:"“宣(传)”“疲(倦)”“圈(套)”三个词中的加点字韵母相同，其韵母是（ ）", 
  translation:"The highlighted characters in '宣传', '疲倦', and '圈套' share the same final. What is that final?",
  options:["uan","ian","üan","an"], 
  answer:2,
  explanations:[
    { en:"uan", note:"Incorrect. It does not match all three highlighted characters.", link:"" },
    { en:"ian", note:"Incorrect. The vowel pattern is different.", link:"" },
    { en:"üan", note:"Correct. 传, 倦, and 圈 all use this final here.", link:"" },
    { en:"an", note:"Incorrect. This leaves out the ü sound.", link:"" }
  ]
},

{ 
  id:5, 
  question:"下列选项中,两个“一”为不同声调的是（ ）", 
  translation:"In which option are the two occurrences of '一' pronounced with different tones?",
  options:["百里挑(一) 举(一)反三","(一)见钟情 (一)箭双雕","以(一)当十 (一)针见血","(一)马当先 (一)言为定"], 
  answer:2,
  explanations:[
    { en:"same tone", note:"These two occurrences are not the target pair with different tones.", link:"" },
    { en:"same tone", note:"These two occurrences do not show the tone difference being tested.", link:"" },
    { en:"same tone", note:"These two occurrences do not show the tone difference being tested.", link:"" },
    { en:"different tones", note:"Correct. This option shows the tone change of '一' in context.", link:"" }
  ]
},
{ 
  id:6, 
  question:"下面选项中,加点字发音相同的是（ ）", 
  translation:"Which option has the same pronunciation for the highlighted characters?",
  options:["作为 为了","长度 长大","首都 都市","空气 填空"], 
  answer:2,
  explanations:[
    { en:"wéi vs wèi", note:"Different pronunciations → incorrect.", link:"" },
    { en:"cháng vs zhǎng", note:"Different pronunciations → incorrect.", link:"" },
    { en:"dū vs dū", note:"Same pronunciation → correct.", link:"" },
    { en:"kōng vs kòng", note:"Different pronunciations → incorrect.", link:"" }
  ]
},

{ 
  id:7, 
  question:"请问以下哪个词语的语法结构与“凤凰涅槃”相同？()", 
  translation:"Which word has the same grammatical structure as '凤凰涅槃'?",
  options:["枯木逢春","龙飞凤舞","守株待兔","锦上添花"], 
  answer:0,
  explanations:[
    { en:"revival/change", note:"Subject undergoes transformation → same structure ✔", link:"" },
    { en:"parallel verbs", note:"Two actions side by side → different structure.", link:"" },
    { en:"verb-object", note:"Action directed to object → different.", link:"" },
    { en:"modifier phrase", note:"Descriptive addition → different.", link:"" }
  ]
},

{ 
  id:8, 
  question:"“中国日新月异的创新科技产业，正加速走出国门、走向世界。在这段话中，“日新月异”中的“日”表示（ ）。", 
  translation:"In the idiom '日新月异', what does '日' mean?",
  options:["每天","太阳","日子","某一天"], 
  answer:0,
  explanations:[
    { en:"every day", note:"Correct. Means change happens daily → frequency.", link:"" },
    { en:"sun", note:"Literal meaning, not used in idiom.", link:"" },
    { en:"day (general)", note:"Too vague; idiom implies continuous change.", link:"" },
    { en:"a certain day", note:"Incorrect meaning.", link:"" }
  ]
},

{ 
  id:9, 
  question:"下列哪个成语形容“心情忐忑不安”？（ ）", 
  translation:"Which idiom describes feeling anxious and uneasy?",
  options:["七上八下","三心二意","一心一意","三头六臂"], 
  answer:0,
  explanations:[
    { en:"very anxious", note:"Correct. Means restless and uneasy ✔", link:"" },
    { en:"indecisive", note:"Means distracted → not anxiety.", link:"" },
    { en:"focused", note:"Means single-minded → opposite meaning.", link:"" },
    { en:"many abilities", note:"Means very capable → unrelated.", link:"" }
  ]
},

{ 
  id:10, 
  question:"表示“由于喜欢某人或某物，连带与他有关的人或物也喜欢”的是哪个成语？()", 
  translation:"Which idiom means loving everything associated with someone you like?",
  options:["情有独钟","爱屋及乌","如获至宝","流连忘返"], 
  answer:1,
  explanations:[
    { en:"special preference", note:"Means strong liking for one thing → not the same idea.", link:"" },
    { en:"love extends outward", note:"Correct. Love someone → love all related things ✔", link:"" },
    { en:"treasure-like joy", note:"Means extremely happy → different meaning.", link:"" },
    { en:"cannot leave", note:"Means reluctant to leave → unrelated.", link:"" }
  ]
},
{ 
  id:11, 
  question:"请选出以下词语中，加括号字的韵母与其他三项不同的是（ ）。", 
  translation:"Choose the word in which the character in brackets has a different final from the other three.",
  options:["请君入（瓮）","无（孔）不入","灯（红）酒绿","（功）不可没"], 
  answer:0,
  explanations:[
    { en:"wèng", note:"Final is different from the other three → correct.", link:"" },
    { en:"kǒng", note:"Shares the same final group as 红 and 功 here → not correct.", link:"" },
    { en:"hóng", note:"Same final pattern as 孔 and 功 here → not correct.", link:"" },
    { en:"gōng", note:"Same final pattern as 孔 and 红 here → not correct.", link:"" }
  ]
},

{ 
  id:12, 
  question:"以下词语中的“子”字，需要读作轻声的为（ ）。", 
  translation:"In which word should the character '子' be pronounced in the neutral tone?",
  options:["瓜子","子弟","孩子","原子"], 
  answer:2,
  explanations:[
    { en:"guāzǐ", note:"Usually pronounced with its full tone here → not correct.", link:"" },
    { en:"zǐdì", note:"'子' keeps its full tone → not correct.", link:"" },
    { en:"háizi", note:"'子' is read as a neutral tone here → correct.", link:"" },
    { en:"yuánzǐ", note:"'子' keeps its full tone in this scientific term → not correct.", link:"" }
  ]
},

{ 
  id:13, 
  question:"(1) 请问，这里有便利店___？ (2) 你说的就是这本杂志__？我还以为是那本呢。(3) 看把你高兴的，今天的考试考得不错__？哪一组语气词对应以上三个句子是正确的？（ ）", 
  translation:"(1) Excuse me, is there a convenience store here ___? (2) So this is the magazine you meant __? I thought it was that one. (3) Look how happy you are — did you do well on today's exam __? Which set of sentence particles is correct?",
  options:["啊 吗 吧","吗 吧 吗","吗 啊 吧","吧 吗 啊"], 
  answer:2,
  explanations:[
    { en:"a / ma / ba", note:"Does not fit all three sentence moods correctly.", link:"" },
    { en:"ma / ba / ma", note:"Second and third particles do not match the tone of the sentences.", link:"" },
    { en:"ma / a / ba", note:"Correct sequence for question, confirmation, and softened inference ✔", link:"" },
    { en:"ba / ma / a", note:"First particle is wrong for a direct question.", link:"" }
  ]
},

{ 
  id:14, 
  question:"中国高铁，是当代中国重要的一类交通基础设施，正是__中国高铁技术领先世界，__许多国家主动寻求合作。下划线处应填入的关联词是（ ）。", 
  translation:"China's high-speed rail is an important part of modern infrastructure. It is precisely because China's high-speed rail technology leads the world, __ many countries actively seek cooperation. Which pair of connectors fits the blanks?",
  options:["因为…所以…","不但…而且…","虽然…但是…","如果…就…"], 
  answer:0,
  explanations:[
    { en:"because... therefore...", note:"Correct. The sentence expresses cause and result.", link:"" },
    { en:"not only... but also...", note:"This expresses addition, not cause and result.", link:"" },
    { en:"although... but...", note:"This expresses contrast, which does not fit here.", link:"" },
    { en:"if... then...", note:"This expresses condition, not an established reason.", link:"" }
  ]
},

{ 
  id:15, 
  question:"茶青中的“青”字代表什么含义？（ ）", 
  translation:"In the term '茶青', what does the character '青' refer to?",
  options:["青色的水彩颜料","新鲜的茶叶原料","茶叶的发酵程度","冲泡的茶汤颜色"], 
  answer:1,
  explanations:[
    { en:"green pigment", note:"This is unrelated to tea processing here.", link:"" },
    { en:"fresh tea leaves", note:"Correct. It refers to fresh tea leaf material before processing.", link:"" },
    { en:"fermentation level", note:"This is not what '青' means in this term.", link:"" },
    { en:"tea liquor colour", note:"This refers to brewed tea colour, not the raw material.", link:"" }
  ]
},
{ 
  id:16, 
  question:"“莲”和“蓬”的造字法是（ ）", 
  translation:"What type of character formation do '莲' and '蓬' belong to?",
  options:["象形","指事","会意","形声"], 
  answer:3,
  explanations:[
    { en:"pictograph", note:"These characters are not direct drawings of objects.", link:"" },
    { en:"indicative", note:"They do not indicate abstract concepts.", link:"" },
    { en:"compound meaning", note:"Not formed by combining meanings alone.", link:"" },
    { en:"phonetic-semantic", note:"Correct. Both contain a semantic radical (艹) and a phonetic component.", link:"" }
  ]
},

{ 
  id:17, 
  question:"“时间还早，我们现在出门去面试，不会来不及的。”一句中“我们”现在出门能不能准时参加面试？（ ）", 
  translation:"In the sentence 'It's still early, if we leave now for the interview, we won't be late', can 'we' arrive on time?",
  options:["可以准时参加","不能准时参加","不打算参加","已经迟到了"], 
  answer:0,
  explanations:[
    { en:"can arrive on time", note:"Correct. The sentence clearly indicates there is still enough time.", link:"" },
    { en:"cannot arrive on time", note:"Contradicts '不会来不及'.", link:"" },
    { en:"not planning to attend", note:"No such meaning in the sentence.", link:"" },
    { en:"already late", note:"Contradicts '时间还早'.", link:"" }
  ]
},

{ 
  id:18, 
  question:"苏绣以（ ）的针法闻名，人物花鸟栩栩如生。", 
  translation:"Suzhou embroidery is famous for its ___ stitching techniques, making figures and flowers vivid.",
  options:["精密","精致","精细","精妙"], 
  answer:2,
  explanations:[
    { en:"precise/accurate", note:"Used more for systems or measurements → not best fit.", link:"" },
    { en:"delicate/exquisite", note:"Describes appearance, not specifically technique.", link:"" },
    { en:"fine/detailed", note:"Correct. Refers to very detailed stitching technique.", link:"" },
    { en:"ingenious", note:"More about cleverness than technique detail.", link:"" }
  ]
},

{ 
  id:19, 
  question:"“用毒毒毒蛇，毒蛇会不会被毒毒死。”一句中，“毒”有几种词性？（ ）", 
  translation:"In the sentence 'Using poison to poison a poisonous snake, will the snake be poisoned to death?', how many parts of speech does '毒' have?",
  options:["一种","三种","四种","六种"], 
  answer:1,
  explanations:[
    { en:"one", note:"Incorrect. '毒' is used in multiple ways here.", link:"" },
    { en:"three", note:"Correct. Used as noun (poison), verb (to poison), and adjective (poisonous).", link:"" },
    { en:"four", note:"Too many; not all distinct roles exist.", link:"" },
    { en:"six", note:"Far too many; incorrect.", link:"" }
  ]
},

{ 
  id:20, 
  question:"在中国人北方的习俗里，除夕夜合家团圆吃“饺子”，是任何山珍海味都无法（ ）的重头大宴。", 
  translation:"In northern China, eating dumplings on New Year's Eve is a grand meal that no delicacy can ___.",
  options:["代替","代理","代表","代办"], 
  answer:0,
  explanations:[
    { en:"replace", note:"Correct. Means nothing can take its place.", link:"" },
    { en:"act on behalf", note:"Used for people or roles, not food.", link:"" },
    { en:"represent", note:"Does not fit meaning of substitution here.", link:"" },
    { en:"handle/arrange", note:"Administrative meaning, not suitable.", link:"" }
  ]
},
{ 
  id:21, 
  question:"“今天的这杯奶茶有点儿甜，昨天的那杯刚刚好。”请根据语境判断，“我”是否喜欢这杯奶茶？（ ）", 
  translation:"'Today's milk tea is a bit too sweet; yesterday's one was just right.' Based on the context, does the speaker like today's milk tea?",
  options:["不喜欢","喜欢","不在乎","很喜欢"], 
  answer:0,
  explanations:[
    { en:"does not like it", note:"Correct. '有点儿甜' implies it is too sweet compared to preference.", link:"" },
    { en:"likes it", note:"Contradicted by comparison with '刚刚好'.", link:"" },
    { en:"does not care", note:"No indication of indifference.", link:"" },
    { en:"likes it very much", note:"Clearly inconsistent with the complaint about sweetness.", link:"" }
  ]
},

{ 
  id:22, 
  question:"“鹅，鹅，鹅，曲项向天歌。白毛浮绿水，红掌拨清波。”诗中没有描写鹅的（ ）", 
  translation:"In the poem, which aspect of the goose is NOT described?",
  options:["羽毛","脚掌","声音","尾巴"], 
  answer:3,
  explanations:[
    { en:"feathers", note:"'白毛浮绿水' describes feathers.", link:"" },
    { en:"feet", note:"'红掌拨清波' describes feet.", link:"" },
    { en:"sound", note:"'向天歌' describes the sound.", link:"" },
    { en:"tail", note:"Correct. The tail is not mentioned.", link:"" }
  ]
},

{ 
  id:23, 
  question:"港珠澳大桥工程具有规模大、工期短、技术新、工序多、专业广、要求高、难点多的特点，是全球已建成的最长跨海大桥。根据这段话，港珠澳大桥工程具有几个特点？（ ）", 
  translation:"The Hong Kong–Zhuhai–Macau Bridge project has characteristics such as large scale, short construction time, new technology, many processes, broad specialisations, high requirements, and many difficulties. How many characteristics are mentioned?",
  options:["6 个","7 个","8 个","9 个"], 
  answer:1,
  explanations:[
    { en:"6", note:"One characteristic is missing.", link:"" },
    { en:"7", note:"Correct. There are seven listed characteristics.", link:"" },
    { en:"8", note:"Too many counted.", link:"" },
    { en:"9", note:"Too many counted.", link:"" }
  ]
},

{ 
  id:24, 
  question:"电影《哪吒》不仅以先进的动画制作技术接轨全球产业标准，也将东方审美基因植入每一个创作细节。在下面的关联词语中，与“不仅……也……”表达的关系一样的是（ ）", 
  translation:"The film 'Nezha' not only uses advanced animation technology but also incorporates Eastern aesthetics into every detail. Which connector pair expresses the same relationship as '不仅……也……'?",
  options:["既然……就……","不但……而且……","虽然……但是……","因为……所以……"], 
  answer:1,
  explanations:[
    { en:"since... then...", note:"Expresses cause → not the same.", link:"" },
    { en:"not only... but also...", note:"Correct. Same additive relationship.", link:"" },
    { en:"although... but...", note:"Expresses contrast.", link:"" },
    { en:"because... therefore...", note:"Expresses cause and effect.", link:"" }
  ]
},

{ 
  id:25, 
  question:"北京冬奥会于2022年2月4日开幕，当天恰逢二十四节气中的“立春”，寓意着各国运动员带着希望与力量，共同开启奥运盛会。“立春”中的“立”，下面哪项解释正确？（ ）", 
  translation:"The Beijing Winter Olympics opened on Feb 4, 2022, coinciding with 'Lichun' (Start of Spring). What does '立' mean in this context?",
  options:["开始","站立","直立","树立"], 
  answer:0,
  explanations:[
    { en:"begin/start", note:"Correct. '立春' means the beginning of spring.", link:"" },
    { en:"stand", note:"Literal meaning, not used here.", link:"" },
    { en:"upright", note:"Not relevant in this context.", link:"" },
    { en:"establish", note:"Different meaning; not used here.", link:"" }
  ]
},
{ 
  id:26, 
  question:"从汉字的结构来看，“苜蓿”含有“艹”，它的意思与什么有关？（ ）", 
  translation:"From the structure of Chinese characters, '苜蓿' contains the '艹' radical. What is its meaning related to?",
  options:["水果","动物","地形","植物"], 
  answer:3,
  explanations:[
    { en:"fruit", note:"'艹' does not specifically indicate fruit.", link:"" },
    { en:"animal", note:"'艹' is not related to animals.", link:"" },
    { en:"terrain", note:"No connection to landforms.", link:"" },
    { en:"plants", note:"Correct. '艹' is the grass/plant radical.", link:"" }
  ]
},

{ 
  id:27, 
  question:"城市里的共享单车 ___ 解决了人们“最后一公里”的出行难题， ___ 减少了交通拥堵，它还倡导了绿色出行的环保理念。（ ）", 
  translation:"Shared bicycles in cities ___ solve the 'last mile' travel problem, ___ reduce traffic congestion, and also promote green travel. Which connectors are correct?",
  options:["不但 而且 此外","因为 所以 因此","虽然 但是 然而","即使 也 况且"], 
  answer:0,
  explanations:[
    { en:"not only... but also... moreover", note:"Correct. Expresses addition of multiple benefits.", link:"" },
    { en:"because... therefore... thus", note:"Causal chain does not fit sentence structure.", link:"" },
    { en:"although... but... however", note:"Contrast is incorrect here.", link:"" },
    { en:"even if... also... moreover", note:"Conditional meaning does not fit.", link:"" }
  ]
},

{ 
  id:28, 
  question:"“这次中国之行预算五千左右”中“左右”的意思是（ ）", 
  translation:"In 'The budget for this trip to China is about 5000', what does '左右' mean?",
  options:["大约五千元","必须五千元","最多五千元","五千元以内"], 
  answer:0,
  explanations:[
    { en:"about 5000", note:"Correct. '左右' expresses approximation.", link:"" },
    { en:"exactly 5000", note:"Incorrect; not exact.", link:"" },
    { en:"at most 5000", note:"Implies a limit, not approximation.", link:"" },
    { en:"within 5000", note:"Range meaning, not exact nuance of '左右'.", link:"" }
  ]
},

{ 
  id:29, 
  question:"成语“亡羊补牢”中的“牢”字是指（ ）", 
  translation:"In the idiom '亡羊补牢', what does '牢' refer to?",
  options:["监狱","羊圈","牢房","房屋"], 
  answer:1,
  explanations:[
    { en:"prison", note:"Incorrect meaning in this context.", link:"" },
    { en:"sheep pen", note:"Correct. Refers to where sheep are kept.", link:"" },
    { en:"cell", note:"Not the intended meaning here.", link:"" },
    { en:"house", note:"Too general and incorrect.", link:"" }
  ]
},

{ 
  id:30, 
  question:"他穿得 ___ ，吸引了大家的目光。（ ）", 
  translation:"He dressed ___ and attracted everyone's attention.",
  options:["红红火火","花花绿绿","白白净净","白白胖胖"], 
  answer:1,
  explanations:[
    { en:"prosperous/lively", note:"Not used to describe clothing.", link:"" },
    { en:"bright and colourful", note:"Correct. Eye-catching clothing.", link:"" },
    { en:"clean and fair", note:"Describes appearance, not clothing style.", link:"" },
    { en:"fair and plump", note:"Describes body, not clothing.", link:"" }
  ]
},
{ 
  id:31, 
  question:"他虽然家境贫寒，但很有骨气，最怕被人 ___ 。（ ）", 
  translation:"Although he comes from a poor family, he has strong integrity and fears being ___ by others.",
  options:["看不见","看不起","看不出","看不懂"], 
  answer:1,
  explanations:[
    { en:"not seen", note:"Does not match the meaning of dignity or respect.", link:"" },
    { en:"looked down upon", note:"Correct. Matches '有骨气' (has dignity).", link:"" },
    { en:"cannot tell", note:"Refers to inability to perceive, not relevant.", link:"" },
    { en:"cannot understand", note:"Refers to comprehension, not respect.", link:"" }
  ]
},

{ 
  id:32, 
  question:"遇到生命危险时，可以高喊“___”紧急呼救。（ ）", 
  translation:"In a life-threatening situation, you can shout '___' to call for help urgently.",
  options:["救援","救助","救护","救命"], 
  answer:3,
  explanations:[
    { en:"rescue", note:"Noun form; not typically shouted directly.", link:"" },
    { en:"assistance", note:"Too formal for emergency shouting.", link:"" },
    { en:"first aid", note:"Refers to medical help, not a shout.", link:"" },
    { en:"help! (save me!)", note:"Correct. Standard emergency cry.", link:"" }
  ]
},

{ 
  id:33, 
  question:"王阿姨是个 ___ ，经常帮助街坊邻居。（ ）", 
  translation:"Aunt Wang is a ___ and often helps her neighbours.",
  options:["直肠子","热心肠","顶梁柱","及时雨"], 
  answer:1,
  explanations:[
    { en:"straightforward person", note:"Refers to personality, not kindness.", link:"" },
    { en:"warm-hearted person", note:"Correct. Matches helping others.", link:"" },
    { en:"main pillar", note:"Refers to someone important, not specifically helpful.", link:"" },
    { en:"timely help", note:"Describes an action/event, not a person.", link:"" }
  ]
},

{ 
  id:34, 
  question:"能给我们介绍介绍经验，说一说你是 ___ 学的？（ ）", 
  translation:"Can you share your experience and tell us how you learned?",
  options:["怎么","什么","那么","这么"], 
  answer:0,
  explanations:[
    { en:"how", note:"Correct. Asks about method or process.", link:"" },
    { en:"what", note:"Asks about content, not method.", link:"" },
    { en:"so/that", note:"Does not fit question structure.", link:"" },
    { en:"this way", note:"Refers to manner but not used in this question form.", link:"" }
  ]
},

{ 
  id:35, 
  question:"如果一张试卷满分是100分，60分是及格，考了以下哪个分数时，可以用“差点儿没及格”表达（ ）", 
  translation:"If the passing mark is 60 out of 100, which score can be described as 'almost failed'?",
  options:["100分","62分","58分","20分"], 
  answer:1,
  explanations:[
    { en:"100", note:"Far above passing; not close to failing.", link:"" },
    { en:"62", note:"Correct. Just above passing, implying 'almost failed'.", link:"" },
    { en:"58", note:"Actually failed, not 'almost failed'.", link:"" },
    { en:"20", note:"Clearly failed by a large margin.", link:"" }
  ]
},
{ 
  id:36, 
  question:"假如你想要拜太极拳世界冠军为师，按照中国传统武术礼仪，该如何表达？（ ）", 
  translation:"If you want to take a world champion of Tai Chi as your master, how should you express it according to traditional martial arts etiquette?",
  options:["与老师握手说：“老师，我今后会努力练拳！”","握手鞠躬道：“您的功夫是世界第一！”","行抱拳礼说：“能拜您为师，学生三生有幸！”","鼓掌欢呼喊：“老师最棒！做您的学生我很自豪！”"], 
  answer:2,
  explanations:[
    { en:"handshake and promise effort", note:"Too casual; does not follow traditional etiquette.", link:"" },
    { en:"bow and praise", note:"Respectful but not a formal request for apprenticeship.", link:"" },
    { en:"fist-and-palm salute with formal wording", note:"Correct. Matches traditional martial arts etiquette.", link:"" },
    { en:"applauding and shouting", note:"Too informal and inappropriate.", link:"" }
  ]
},

{ 
  id:37, 
  question:"被称为“万国建筑博物馆”的是（ ）", 
  translation:"Which place is known as the 'Museum of International Architecture'?",
  options:["泉州","漳州","福州","鼓浪屿"], 
  answer:3,
  explanations:[
    { en:"Quanzhou", note:"Known for maritime history, not this title.", link:"" },
    { en:"Zhangzhou", note:"Not associated with this description.", link:"" },
    { en:"Fuzhou", note:"Not known by this title.", link:"" },
    { en:"Gulangyu", note:"Correct. Famous for diverse international architectural styles.", link:"" }
  ]
},

{ 
  id:38, 
  question:"福建土楼是中国传统民居建筑的杰出代表，以独特的圆形、方形等夯土结构闻名于世。请问土楼（如承启楼、振成楼）的主要功能是（ ）？", 
  translation:"Fujian Tulou are traditional residential buildings known for their unique earthen structures. What is their main function?",
  options:["防御外敌与家族聚居","商业贸易与货物存储","宗教祭祀与文化传承","旅游观光与休闲度假"], 
  answer:0,
  explanations:[
    { en:"defence and clan living", note:"Correct. Designed for protection and communal living.", link:"" },
    { en:"trade and storage", note:"Not the primary purpose.", link:"" },
    { en:"religious use", note:"Not their main function.", link:"" },
    { en:"tourism", note:"Modern use, not original purpose.", link:"" }
  ]
},

{ 
  id:39, 
  question:"泉州作为宋元时期“东方第一大港”，输出到海外的商品主要有（ ）", 
  translation:"As the 'largest port in the East' during the Song and Yuan dynasties, what goods did Quanzhou mainly export overseas?",
  options:["珍珠、玉器","瓷器、宝石","丝绸、香料","陶瓷、茶叶"], 
  answer:3,
  explanations:[
    { en:"pearls and jade", note:"Not the main export category.", link:"" },
    { en:"porcelain and gemstones", note:"Partially relevant but not the best answer.", link:"" },
    { en:"silk and spices", note:"Important in trade but not the primary pair here.", link:"" },
    { en:"ceramics and tea", note:"Correct. Major export goods from China.", link:"" }
  ]
},

{ 
  id:40, 
  question:"农历五月初五是端午节，节日期间有着丰富多彩的民俗活动。下列各项活动中不属于传统端午节活动的一项是（ ）", 
  translation:"The Dragon Boat Festival falls on the 5th day of the 5th lunar month. Which of the following is NOT a traditional activity?",
  options:["吃粽子","赛龙舟","挂菖蒲","猜灯谜"], 
  answer:3,
  explanations:[
    { en:"eat zongzi", note:"Traditional Dragon Boat Festival activity.", link:"" },
    { en:"dragon boat racing", note:"Core traditional activity.", link:"" },
    { en:"hang calamus", note:"Traditional practice for warding off evil.", link:"" },
    { en:"riddle guessing", note:"Correct. Associated with the Lantern Festival, not Dragon Boat Festival.", link:"" }
  ]
},
{ 
  id:41, 
  question:"中国北方民间有“一九二九不出手，三九四九冰上走”的歌谣，描绘的是有关“数九”的节令习俗，请问“数九”是从哪个节气开始的？（ ）", 
  translation:"In northern China, the saying describes the 'Counting Nine' winter tradition. From which solar term does it begin?",
  options:["立冬","大雪","冬至","大寒"], 
  answer:2,
  explanations:[
    { en:"Beginning of Winter", note:"Not the starting point of '数九'.", link:"" },
    { en:"Major Snow", note:"Occurs before the counting begins.", link:"" },
    { en:"Winter Solstice", note:"Correct. '数九' starts from the Winter Solstice.", link:"" },
    { en:"Major Cold", note:"Occurs much later in the cycle.", link:"" }
  ]
},

{ 
  id:42, 
  question:"“五行学说”是中国古代哲学中一种重要的宇宙观和系统论，“五行”代表的五种元素相生相克。请问，下面不属于五行元素的是？（ ）", 
  translation:"The Five Elements theory includes five elements that interact with each other. Which of the following is NOT one of them?",
  options:["金","木","银","水"], 
  answer:2,
  explanations:[
    { en:"metal", note:"One of the Five Elements.", link:"" },
    { en:"wood", note:"One of the Five Elements.", link:"" },
    { en:"silver", note:"Correct. Not part of the Five Elements system.", link:"" },
    { en:"water", note:"One of the Five Elements.", link:"" }
  ]
},

{ 
  id:43, 
  question:"下列哪一项民间传统工艺是主要用于戏剧表演的？（ ）", 
  translation:"Which traditional folk craft is mainly used for theatrical performance?",
  options:["剪纸","皮影雕刻技艺","木雕技艺","紫砂壶制作技艺"], 
  answer:1,
  explanations:[
    { en:"paper cutting", note:"Decorative art, not used for performance.", link:"" },
    { en:"shadow puppet carving", note:"Correct. Used in shadow puppet theatre.", link:"" },
    { en:"wood carving", note:"General craft, not specifically theatrical.", link:"" },
    { en:"Yixing teapot making", note:"Used for tea culture, not theatre.", link:"" }
  ]
},

{ 
  id:44, 
  question:"中国有许多地名有“阴”“阳”二字，下列说法正确的是？（ ）", 
  translation:"Many Chinese place names include 'yin' and 'yang'. Which statement is correct?",
  options:["山南水北为阴","山北水南为阳","山东水西为阳","山北水南为阴"], 
  answer:3,
  explanations:[
    { en:"south of mountain / north of river = yin", note:"Incorrect.", link:"" },
    { en:"north of mountain / south of river = yang", note:"Incorrect pairing.", link:"" },
    { en:"east of mountain / west of river = yang", note:"Not a standard rule.", link:"" },
    { en:"north of mountain / south of river = yin", note:"Correct. Yin = shaded side: north of mountain, south of river.", link:"" }
  ]
},

{ 
  id:45, 
  question:"下列哪一项不是中秋节的传统习俗？（ ）", 
  translation:"Which of the following is NOT a traditional Mid-Autumn Festival activity?",
  options:["拜月","悬挂菖蒲艾叶","吃月饼","阖家团聚"], 
  answer:1,
  explanations:[
    { en:"moon worship", note:"Traditional Mid-Autumn activity.", link:"" },
    { en:"hanging calamus and mugwort", note:"Correct. This is a Dragon Boat Festival custom.", link:"" },
    { en:"eating mooncakes", note:"Core Mid-Autumn tradition.", link:"" },
    { en:"family reunion", note:"Key Mid-Autumn theme.", link:"" }
  ]
},
{ 
  id:46, 
  question:"放风筝是一种传统游艺，民间有许多关于风筝的别称，下列哪个不是风筝的别称？（ ）", 
  translation:"Flying kites is a traditional activity. Which of the following is NOT another name for a kite?",
  options:["纸鸢","纸鹞","鹞子","鸢尾"], 
  answer:3,
  explanations:[
    { en:"paper kite", note:"Traditional name for kite.", link:"" },
    { en:"paper hawk", note:"Another historical name for kite.", link:"" },
    { en:"kite (hawk-like)", note:"Common folk term for kite.", link:"" },
    { en:"iris (plant)", note:"Correct. Refers to a flower, not a kite.", link:"" }
  ]
},

{ 
  id:47, 
  question:"“绿水青山就是金山银山”的理念最能反映中国重视以下哪类建设？（ ）", 
  translation:"The idea 'lucid waters and lush mountains are invaluable assets' reflects China's emphasis on which type of development?",
  options:["经济建设","文化建设","生态文明建设","社会建设"], 
  answer:2,
  explanations:[
    { en:"economic development", note:"Partially related but not the core idea.", link:"" },
    { en:"cultural development", note:"Not the focus here.", link:"" },
    { en:"ecological civilisation", note:"Correct. Emphasises environmental protection.", link:"" },
    { en:"social development", note:"Too broad; not specific to the idea.", link:"" }
  ]
},

{ 
  id:48, 
  question:"有这样一句话，“咬定青山大地，立根黄沙破岩”，其中“咬定青山大地”是化用清代诗人郑板桥的诗句：“咬定青山不放松”，请问这句诗描写的是下列哪个物种呢？（ ）", 
  translation:"The line 'gripping firmly onto the green mountain' comes from Zheng Banqiao's poem. Which plant does it describe?",
  options:["榕树","竹子","花生","松树"], 
  answer:1,
  explanations:[
    { en:"banyan tree", note:"Not the subject of the poem.", link:"" },
    { en:"bamboo", note:"Correct. Symbolises resilience and integrity.", link:"" },
    { en:"peanut", note:"Unrelated.", link:"" },
    { en:"pine tree", note:"Also symbolic, but not this poem.", link:"" }
  ]
},

{ 
  id:49, 
  question:"看图，与图中所示情景有关的诗句是（ ）", 
  translation:"Based on the image, which poem line matches the scene?",
  image:"/images/q49.png", // ← ADD THIS
  options:[
    "宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。",
    "阿爷无大儿，木兰无长兄。愿为市鞍马，从此替爷征。",
    "生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。",
    "日出东南隅，照我秦氏楼。秦氏有好女，自名为罗敷。"
  ], 
  answer:1,
  explanations:[
    { en:"festival night scene", note:"Describes Lantern Festival.", link:"" },
    { en:"Mulan joins the army", note:"Correct. Matches the image context.", link:"" },
    { en:"heroic reflection", note:"Not related to the image.", link:"" },
    { en:"beauty description", note:"Unrelated to the scene.", link:"" }
  ]
},

{ 
  id:50, 
  question:"下列人物与情节，搭配不当的是（ ）", 
  translation:"Which character and event pairing is incorrect?",
  options:["鲁智深——倒拔垂杨柳","孙悟空——大闹天宫","曹操——三顾茅庐","刘姥姥——进大观园"], 
  answer:2,
  explanations:[
    { en:"Lu Zhishen — uproots willow tree", note:"Correct pairing.", link:"" },
    { en:"Sun Wukong — wreaks havoc in Heaven", note:"Correct pairing.", link:"" },
    { en:"Cao Cao — visits Zhuge Liang three times", note:"Correct answer. This act belongs to Liu Bei, not Cao Cao.", link:"" },
    { en:"Granny Liu — enters Grand View Garden", note:"Correct pairing.", link:"" }
  ]
},
{ 
  id:51, 
  question:"“山不在高，有仙则名。水不在深，有龙则灵。”出自以下哪部作品？（ ）", 
  translation:"'A mountain need not be high; with immortals it becomes famous. Water need not be deep; with dragons it becomes spiritual.' Which work is this from?",
  options:["《爱莲说》","《石钟山记》","《陋室铭》","《小石潭记》"], 
  answer:2,
  explanations:[
    { en:"On the Love of the Lotus", note:"Different essay by Zhou Dunyi.", link:"" },
    { en:"Record of Stone Bell Mountain", note:"Not the correct source.", link:"" },
    { en:"Inscription of the Humble Room", note:"Correct. Written by Liu Yuxi.", link:"" },
    { en:"Record of the Little Stone Pond", note:"Different prose work.", link:"" }
  ]
},

{ 
  id:52, 
  question:"元曲是元代最具代表性的文学样式，下列不属于“元曲四大家”的是（ ）", 
  translation:"Yuan drama is a representative literary form of the Yuan dynasty. Which of the following is NOT one of the 'Four Great Yuan Playwrights'?",
  options:["关汉卿","白朴","马致远","张养浩"], 
  answer:3,
  explanations:[
    { en:"Guan Hanqing", note:"One of the Four Great Yuan playwrights.", link:"" },
    { en:"Bai Pu", note:"One of the Four Great Yuan playwrights.", link:"" },
    { en:"Ma Zhiyuan", note:"One of the Four Great Yuan playwrights.", link:"" },
    { en:"Zhang Yanghao", note:"Correct. Not part of the Four.", link:"" }
  ]
},

{ 
  id:53, 
  question:"“少小离家老大回，乡音未改鬓毛衰。儿童相见不相识，笑问客从何处来”这首古诗中的“客”是指（ ）", 
  translation:"In the poem 'Returning Home', who does 'guest' refer to?",
  options:["贺知章","李白","王维","王昌龄"], 
  answer:0,
  explanations:[
    { en:"He Zhizhang", note:"Correct. The poet refers to himself as the 'guest'.", link:"" },
    { en:"Li Bai", note:"Not the author of this poem.", link:"" },
    { en:"Wang Wei", note:"Not the author.", link:"" },
    { en:"Wang Changling", note:"Not the author.", link:"" }
  ]
},

{ 
  id:54, 
  question:"初唐诗《春江花月夜》被誉为“孤篇盖全唐”，这首诗的作者是（ ）", 
  translation:"The early Tang poem 'Spring River Flower Moon Night' is praised as 'a single poem surpassing all of Tang poetry'. Who is the author?",
  options:["王维","宋之问","陈子昂","张若虚"], 
  answer:3,
  explanations:[
    { en:"Wang Wei", note:"Famous poet, but not the author.", link:"" },
    { en:"Song Zhiwen", note:"Not the author.", link:"" },
    { en:"Chen Zi'ang", note:"Not the author.", link:"" },
    { en:"Zhang Ruoxu", note:"Correct. Author of this poem.", link:"" }
  ]
},

{ 
  id:55, 
  question:"“四大名著”指四部中国古典长篇小说，以下哪部作品不属于四大名著？（ ）", 
  translation:"The 'Four Great Classical Novels' refer to four major Chinese literary works. Which one is NOT included?",
  options:["《聊斋志异》","《西游记》","《红楼梦》","《水浒传》"], 
  answer:0,
  explanations:[
    { en:"Strange Tales from a Chinese Studio", note:"Correct. Not one of the Four Great Novels.", link:"" },
    { en:"Journey to the West", note:"One of the Four Great Novels.", link:"" },
    { en:"Dream of the Red Chamber", note:"One of the Four Great Novels.", link:"" },
    { en:"Water Margin", note:"One of the Four Great Novels.", link:"" }
  ]
},
{ 
  id:56, 
  question:"一位诗人因其诗歌想象瑰丽、豪放飘逸、极具浪漫主义色彩而被后世尊称为“诗仙”。请问，以下哪位诗人享有这一美誉？（ ）", 
  translation:"Which poet is known as the 'Immortal of Poetry' for his imaginative, bold, and romantic style?",
  options:["谢灵运","谢脁","王维","李白"], 
  answer:3,
  explanations:[
    { en:"Xie Lingyun", note:"Famous for landscape poetry, not called 'Poetry Immortal'.", link:"" },
    { en:"Xie Tiao", note:"Not associated with this title.", link:"" },
    { en:"Wang Wei", note:"Known for 'poetry and painting', not this title.", link:"" },
    { en:"Li Bai", note:"Correct. Known as '诗仙' for his romantic style.", link:"" }
  ]
},

{ 
  id:57, 
  question:"名句“人生自古谁无死，留取丹心照汗青”出自谁的笔下？（ ）", 
  translation:"Who wrote the famous line 'Since ancient times, who has not died? Let me leave a loyal heart shining in history'?",
  options:["范仲淹","苏轼","文天祥","辛弃疾"], 
  answer:2,
  explanations:[
    { en:"Fan Zhongyan", note:"Not the author of this line.", link:"" },
    { en:"Su Shi", note:"Not the author.", link:"" },
    { en:"Wen Tianxiang", note:"Correct. From 'Crossing Lingding Ocean'.", link:"" },
    { en:"Xin Qiji", note:"Not the author.", link:"" }
  ]
},

{ 
  id:58, 
  question:"诗与画是两种紧密联系而又各有所长的艺术形式，下列诗人中，被苏轼评为“诗中有画，画中有诗”的诗人是（ ）", 
  translation:"Which poet was described by Su Shi as 'there is painting in his poetry and poetry in his painting'?",
  options:["杜甫","李白","李商隐","王维"], 
  answer:3,
  explanations:[
    { en:"Du Fu", note:"Great realist poet, but not described this way.", link:"" },
    { en:"Li Bai", note:"Romantic poet, not known for this trait.", link:"" },
    { en:"Li Shangyin", note:"Known for obscure poetry, not this description.", link:"" },
    { en:"Wang Wei", note:"Correct. Famous for blending poetry and painting.", link:"" }
  ]
},

{ 
  id:59, 
  question:"《诗经》是中国古代第一部诗歌总集，原称“诗”或“诗三百”，那么《诗经》中有标题有内容的诗一共有多少首呢？（ ）", 
  translation:"The Book of Songs is the earliest collection of Chinese poetry. How many poems does it contain?",
  options:["295","300","302","305"], 
  answer:3,
  explanations:[
    { en:"295", note:"Incorrect count.", link:"" },
    { en:"300", note:"Approximate name '诗三百', not exact.", link:"" },
    { en:"302", note:"Incorrect count.", link:"" },
    { en:"305", note:"Correct. The Book of Songs contains 305 poems.", link:"" }
  ]
},

{ 
  id:60, 
  question:"以下哪个县级市制造业发达，是全球最大的小商品集散中心，被誉为“世界超市”？（ ）", 
  translation:"Which county-level city is known as the world's largest small commodity distribution center, often called the 'world supermarket'?",
  options:["福安","义乌","晋江","昆山"], 
  answer:1,
  explanations:[
    { en:"Fu'an", note:"Not known for this distinction.", link:"" },
    { en:"Yiwu", note:"Correct. Famous global small commodity hub.", link:"" },
    { en:"Jinjiang", note:"Known for manufacturing, but not this title.", link:"" },
    { en:"Kunshan", note:"Industrial city, but not 'world supermarket'.", link:"" }
  ]
},



{ 
  id:61,
  type:"fill",
  question:"桃园三结义中的三弟是（ ）。",
  translation:"The third brother in the Peach Garden Oath is ( ).",
  answer:"张飞",
  explanation:{
    en:"Zhang Fei",
    note:"In 桃园三结义, the three brothers are 刘备, 关羽, and 张飞. 张飞 is the third brother."
  }
},

{ 
  id:62,
  type:"fill",
  question:"这种水果很好吃，可惜没（ ）人知道。",
  translation:"This fruit is very delicious, but unfortunately not many people know about it.",
  answer:"什么",
  explanation:{
    en:"什么",
    note:"This is the fixed expression ‘没什么人知道’, meaning ‘hardly anyone knows’."
  }
},

{ 
  id:63,
  type:"fill",
  question:"端午节是中国传统节日，是为了纪念（ ）而产生的。",
  translation:"The Dragon Boat Festival is a traditional Chinese festival that arose to commemorate ( ).",
  answer:"屈原",
  explanation:{
    en:"Qu Yuan",
    note:"The Dragon Boat Festival is traditionally associated with commemorating the poet 屈原."
  }
},

{ 
  id:64,
  type:"fill",
  question:"流行于欧洲的西班牙吉他，与一种中国民族乐器有共同的祖先。这种中国乐器是（ ）。",
  translation:"The Spanish guitar, popular in Europe, shares a common ancestor with a Chinese musical instrument. That Chinese instrument is ( ).",
  answer:"琵琶",
  explanation:{
    en:"pipa",
    note:"琵琶 is a traditional Chinese plucked string instrument."
  }
},

{ 
  id:65,
  type:"fill",
  question:"中国文化中的“岁寒三友”指的是（ ）。",
  translation:"In Chinese culture, the 'Three Friends of Winter' are ( ).",
  answer:"松竹梅",
  explanation:{
    en:"pine, bamboo, and plum",
    note:"岁寒三友 refers to 松、竹、梅, symbols of perseverance and integrity."
  }
},

{ 
  id:66,
  type:"fill",
  question:"中国古代一部长篇章回体小说是（ ）。",
  translation:"One ancient Chinese chaptered novel is ( ).",
  answer:"《三国演义》",
  explanation:{
    en:"Romance of the Three Kingdoms",
    note:"《三国演义》 is a classic Chinese long chaptered historical novel."
  }
},

{ 
  id:67,
  type:"fill",
  question:"中国当代作家刘慈欣的（ ）曾获得第73届世界科幻大会最佳长篇小说奖“雨果奖”。",
  translation:"( ) by the contemporary Chinese writer Liu Cixin won the Hugo Award for Best Novel at the 73rd World Science Fiction Convention.",
  answer:"《三体》",
  explanation:{
    en:"The Three-Body Problem",
    note:"《三体》 is Liu Cixin’s famous science fiction novel."
  }
},

{ 
  id:68,
  type:"fill",
  question:"“三朵节”是（ ）族的节日。",
  translation:"The 'Sanduo Festival' is a festival of the ( ) ethnic group.",
  answer:"纳西族",
  explanation:{
    en:"Naxi ethnic group",
    note:"三朵节 is a traditional festival of the 纳西族."
  }
},

{ 
  id:69,
  type:"fill",
  question:"中国古代负责外国来使事务的机构是（ ）。",
  translation:"In ancient China, the government office responsible for foreign envoys was ( ).",
  answer:"礼部",
  explanation:{
    en:"Ministry of Rites",
    note:"礼部 handled rites, ceremonies, and matters involving foreign envoys."
  }
},

{ 
  id:70,
  type:"fill",
  question:"喝饮料对身体不好，（ ）你想保持健康，就少喝一点。",
  translation:"Drinking beverages is not good for your health. ( ) you want to stay healthy, drink less.",
  answer:"如果",
  explanation:{
    en:"if",
    note:"如果 introduces a condition: 'if you want to stay healthy...'"
  }
},
{ 
  id:71,
  type:"fill",
  question:"二十四节气中，与天气由寒转暖、万物复苏有关的是（ ）。",
  translation:"Among the 24 solar terms, the one associated with warming weather and the revival of all things is ( ).",
  answer:"惊蛰",
  explanation:{
    en:"Jingzhe (Awakening of Insects)",
    note:"惊蛰 marks the time when insects awaken and spring begins to fully emerge."
  }
},

{ 
  id:72,
  type:"fill",
  question:"汉代雕塑中的杰作“马踏飞燕”出土自（ ）省。",
  translation:"The Han dynasty sculpture masterpiece 'Galloping Horse Treading on a Flying Swallow' was unearthed in ( ) Province.",
  answer:"甘肃",
  explanation:{
    en:"Gansu Province",
    note:"This famous bronze sculpture was discovered in Gansu."
  }
},

{ 
  id:73,
  type:"fill",
  question:"在古时，用以礼仪的玉器有“六器”，其中被称为六器之首的是（ ）。",
  translation:"In ancient times, there were six ritual jade objects. The most important among them is ( ).",
  answer:"璧",
  explanation:{
    en:"Bi (jade disc)",
    note:"璧 is considered the most important of the six ritual jade objects."
  }
},

{ 
  id:74,
  type:"fill",
  question:"中医典籍《伤寒杂病论》的作者是（ ）。",
  translation:"The author of the traditional Chinese medicine text 'Shanghan Zabing Lun' is ( ).",
  answer:"张仲景",
  explanation:{
    en:"Zhang Zhongjing",
    note:"A famous ancient Chinese physician, known as a key figure in TCM."
  }
},

{ 
  id:75,
  type:"fill",
  question:"既举办过夏季运动会又举办过冬季奥运会的城市是（ ）。",
  translation:"The city that has hosted both the Summer and Winter Olympics is ( ).",
  answer:"北京",
  explanation:{
    en:"Beijing",
    note:"Beijing hosted the 2008 Summer Olympics and 2022 Winter Olympics."
  }
},

{ 
  id:76,
  type:"fill",
  question:"野生象群“短鼻家族”在云南开启了一场北移南归的组团旅行，这是（ ）象群。",
  translation:"The wild elephant herd known as the 'Short-Nose Family' in Yunnan is a group of ( ) elephants.",
  answer:"亚洲",
  explanation:{
    en:"Asian elephants",
    note:"These elephants belong to the Asian elephant species."
  }
},

{ 
  id:77,
  type:"fill",
  question:"中华民族有56个民族，其中人口最少的是（ ）族。",
  translation:"China has 56 ethnic groups; the one with the smallest population is the ( ) ethnic group.",
  answer:"塔塔尔族",
  explanation:{
    en:"Tatar ethnic group",
    note:"塔塔尔族 is one of the smallest ethnic minorities in China."
  }
},

{ 
  id:78,
  type:"fill",
  question:"世界上最大的也是最灵敏的单口径射电望远镜是（ ）。",
  translation:"The world's largest and most sensitive single-dish radio telescope is ( ).",
  answer:"中国天眼",
  explanation:{
    en:"FAST (Five-hundred-meter Aperture Spherical Telescope)",
    note:"Known as 'China Sky Eye', located in Guizhou."
  }
},

{ 
  id:79,
  type:"fill",
  question:"嫦娥六号是中国嫦娥探月计划第六个探测器，其着陆区在（ ）。",
  translation:"Chang’e-6 is the sixth probe in China's lunar exploration program. It landed on the ( ).",
  answer:"月球背面",
  explanation:{
    en:"the far side of the Moon",
    note:"This is a major milestone in lunar exploration."
  }
},

{ 
  id:80,
  type:"fill",
  question:"下面这张图片中的科学家是（ ）。",
  translation:"The scientist in the image below is ( ).",
  answer:"袁隆平",
  image:"images/q80.png", // ← adjust path if needed
  explanation:{
    en:"Yuan Longping",
    note:"Known as the 'Father of Hybrid Rice', he made major contributions to global food security."
  }
}
];