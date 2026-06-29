import type { SiteLocale } from "./locales";

export const appStoreUrl =
  "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";
export const feedbackUrl = "https://sonahabitsapp.userjot.com/";
export const waitlistFormId =
  process.env.NEXT_PUBLIC_TALLY_WAITLIST_FORM_ID || "Zj82ko";
export const waitlistUrl =
  process.env.NEXT_PUBLIC_TALLY_WAITLIST_URL ||
  `https://tally.so/r/${waitlistFormId}`;

export type RichTextPart =
  | string
  | { em: string }
  | { strong: string }
  | { br: true };

export type Faq = {
  q: string;
  a: string;
};

export type CommonContent = {
  homeAria: string;
  sectionsAria: string;
  languageAria: string;
  download: string;
  downloadShort: string;
  downloadAria: string;
  androidAria: string;
  androidPrefix: string;
  androidEmphasis: string;
  note: string;
  nav: {
    worlds: string;
    features: string;
    progress: string;
    articles: string;
  };
  footer: {
    articles: string;
    privacy: string;
    terms: string;
    support: string;
    feedback: string;
    redditAria: string;
    xAria: string;
    copyright: string;
  };
};

export type HomeContent = {
  metadata: {
    title: string;
    description: string;
  };
  appSchemaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: RichTextPart[][];
    lede: string;
    seeHow: string;
    imageAlt: string;
    waitlist: {
      title: string;
      copy: string;
      button: string;
      note: string;
    };
  };
  trust: {
    aria: string;
    private: string;
    free: string;
    platforms: string;
  };
  gallery: {
    aria: string;
    eyebrow: string;
    title: RichTextPart[];
    lede: RichTextPart[];
    spaces: { name: string; slug: string }[];
    customLabel: string;
  };
  paint: {
    aria: string;
    eyebrow: string;
    title: RichTextPart[];
    lede: string;
    steps: {
      n: string;
      title: string;
      copy: string;
      shot: string;
      ratio: string;
    }[];
  };
  reframe: {
    aria: string;
    eyebrow: string;
    line: RichTextPart[];
    sub: string;
  };
  walk: {
    eyebrow: string;
    title: RichTextPart[];
    steps: {
      id?: string;
      eyebrow: string;
      title: RichTextPart[];
      copy: string;
      shot: string;
      ratio: string;
      shape: "phone" | "card";
      image?: {
        light: string;
        dark: string;
        width: number;
        height: number;
      };
      chip?: string;
    }[];
  };
  midCta: {
    aria: string;
    title: RichTextPart[];
    lede: string;
  };
  becoming: {
    eyebrow: string;
    lines: RichTextPart[][];
  };
  faq: {
    aria: string;
    eyebrow: string;
    title: RichTextPart[];
    items: Faq[];
  };
  final: {
    eyebrow: string;
    title: RichTextPart[];
    lede: string;
    support: string;
  };
};

export type SupportContent = {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  intro: string;
  helper: string;
};

export type ArticleUiContent = {
  indexMetadata: {
    title: string;
    description: string;
  };
  indexEyebrow: string;
  indexTitle: RichTextPart[];
  indexLede: string;
  allArticlesAria: string;
  empty: string;
  readMore: string;
  backToAll: string;
  notFoundTitle: string;
  ctaTitle: RichTextPart[];
  ctaCopy: string;
};

export const commonContent: Record<SiteLocale, CommonContent> = {
  "en-US": {
    homeAria: "Sona home",
    sectionsAria: "Sections",
    languageAria: "Choose language",
    download: "Download on the App Store",
    downloadShort: "Download",
    downloadAria: "Download Sona on the App Store",
    androidAria: "Android version coming soon",
    androidPrefix: "Android",
    androidEmphasis: "coming soon",
    note: "Free to download · iOS now, Android coming soon",
    nav: {
      worlds: "Your worlds",
      features: "How it works",
      progress: "Progress",
      articles: "Articles",
    },
    footer: {
      articles: "Articles",
      privacy: "Privacy",
      terms: "Terms",
      support: "Support",
      feedback: "Feedback",
      redditAria: "Sona on Reddit",
      xAria: "Sona on X",
      copyright: "© 2026 Sona.",
    },
  },
  ja: {
    homeAria: "Sona ホーム",
    sectionsAria: "セクション",
    languageAria: "言語を選択",
    download: "App Storeでダウンロード",
    downloadShort: "ダウンロード",
    downloadAria: "App StoreでSonaをダウンロード",
    androidAria: "Android版は近日公開予定",
    androidPrefix: "Android版",
    androidEmphasis: "近日公開",
    note: "無料でダウンロード · iOSは提供中、Androidは近日公開",
    nav: {
      worlds: "あなたの世界",
      features: "使い方",
      progress: "進捗",
      articles: "記事",
    },
    footer: {
      articles: "記事",
      privacy: "プライバシー",
      terms: "利用規約",
      support: "サポート",
      feedback: "フィードバック",
      redditAria: "RedditのSona",
      xAria: "XのSona",
      copyright: "© 2026 Sona.",
    },
  },
  ko: {
    homeAria: "Sona 홈",
    sectionsAria: "섹션",
    languageAria: "언어 선택",
    download: "App Store에서 다운로드",
    downloadShort: "다운로드",
    downloadAria: "App Store에서 Sona 다운로드",
    androidAria: "Android 버전 출시 예정",
    androidPrefix: "Android",
    androidEmphasis: "출시 예정",
    note: "무료 다운로드 · iOS 제공 중, Android 출시 예정",
    nav: {
      worlds: "나의 세계",
      features: "작동 방식",
      progress: "진행",
      articles: "글",
    },
    footer: {
      articles: "글",
      privacy: "개인정보",
      terms: "이용약관",
      support: "지원",
      feedback: "피드백",
      redditAria: "Reddit의 Sona",
      xAria: "X의 Sona",
      copyright: "© 2026 Sona.",
    },
  },
  "es-MX": {
    homeAria: "Inicio de Sona",
    sectionsAria: "Secciones",
    languageAria: "Elegir idioma",
    download: "Descargar en App Store",
    downloadShort: "Descargar",
    downloadAria: "Descargar Sona en App Store",
    androidAria: "Versión para Android próximamente",
    androidPrefix: "Android",
    androidEmphasis: "próximamente",
    note: "Descarga gratis · iOS ahora, Android próximamente",
    nav: {
      worlds: "Tus mundos",
      features: "Cómo funciona",
      progress: "Progreso",
      articles: "Artículos",
    },
    footer: {
      articles: "Artículos",
      privacy: "Privacidad",
      terms: "Términos",
      support: "Soporte",
      feedback: "Comentarios",
      redditAria: "Sona en Reddit",
      xAria: "Sona en X",
      copyright: "© 2026 Sona.",
    },
  },
  "pt-BR": {
    homeAria: "Início do Sona",
    sectionsAria: "Seções",
    languageAria: "Escolher idioma",
    download: "Baixar na App Store",
    downloadShort: "Baixar",
    downloadAria: "Baixar o Sona na App Store",
    androidAria: "Versão para Android em breve",
    androidPrefix: "Android",
    androidEmphasis: "em breve",
    note: "Grátis para baixar · iOS agora, Android em breve",
    nav: {
      worlds: "Seus mundos",
      features: "Como funciona",
      progress: "Progresso",
      articles: "Artigos",
    },
    footer: {
      articles: "Artigos",
      privacy: "Privacidade",
      terms: "Termos",
      support: "Suporte",
      feedback: "Feedback",
      redditAria: "Sona no Reddit",
      xAria: "Sona no X",
      copyright: "© 2026 Sona.",
    },
  },
};

const englishSpaces = [
  { name: "Morning Routine", slug: "morning-routine" },
  { name: "Better Sleep", slug: "better-sleep" },
  { name: "Get Strong", slug: "get-strong" },
  { name: "Eat Well", slug: "eat-well" },
  { name: "Move More", slug: "move-more" },
  { name: "Quiet Mind", slug: "quiet-mind" },
  { name: "Read More", slug: "read-more" },
  { name: "Save Money", slug: "save-money" },
  { name: "A Tidy Home", slug: "tidy-home" },
  { name: "Time With Family", slug: "time-with-family" },
  { name: "Deep Work", slug: "deep-work" },
  { name: "Time Outside", slug: "time-outside" },
];

export const homeContent: Record<SiteLocale, HomeContent> = {
  "en-US": {
    metadata: {
      title: "Sona: The Only Habit App as Beautiful as Your Goals",
      description:
        "A beautiful, forgiving habit and routine app that won't punish you for being human. Turn each goal into an AI-painted world, track flexible habits, and keep a calm consistency score that survives missed days.",
    },
    appSchemaDescription:
      "A beautiful, forgiving habit app. No streaks to break: a missed day is a dip in your consistency score, not a reset to zero. Turn each goal into a personal AI-painted world that holds the habits building it.",
    hero: {
      eyebrow: "For people tired of starting over",
      titleLines: [
        ["The only habit app"],
        ["as beautiful as ", { em: "your goals." }],
      ],
      lede:
        "You’re not lazy. You’re tired of starting over. Sona gives every goal a beautiful world to live in, and a consistency score that survives the days you miss. So this time, you actually keep going.",
      seeHow: "See how it works",
      imageAlt:
        "Sona Better Sleep space showing habit cards on an iPhone.",
      waitlist: {
        title: "Join the waiting list",
        copy:
          "Get the launch note when Sona opens. One email, then you can try it when it is ready.",
        button: "Join the waiting list",
        note: "",
      },
    },
    trust: {
      aria: "Why Sona is safe to try",
      private: "Private by design. No account, no cloud",
      free: "Free to download",
      platforms: "iPhone now · Android soon",
    },
    gallery: {
      aria: "Spaces people build in Sona",
      eyebrow: "You describe it · Sona paints it",
      title: ["You ", { em: "create" }, " these worlds. ", { br: true }, "Then you ", { em: "steer" }, " them."],
      lede: [
        "Every scene below was ",
        { strong: "made from a few typed words" },
        ". You ",
        { strong: "describe" },
        " the life you’re building, Sona ",
        { strong: "paints" },
        " it, and you ",
        { strong: "regenerate and restyle" },
        " until it’s ",
        { strong: "yours" },
        ". Nothing here is a preset or a stock photo. Your habits then live inside the world you made.",
      ],
      spaces: englishSpaces,
      customLabel: "Describe your own",
    },
    paint: {
      aria: "How Sona paints your space",
      eyebrow: "Here’s exactly how it works",
      title: ["You stay in the chair until ", { em: "it’s yours." }],
      lede:
        "Sona doesn’t hand you one stock image and call it done. You shape the painting, step by step, until it’s a place you’ll want to return to.",
      steps: [
        {
          n: "01",
          title: "Describe it",
          copy:
            "A few words is all it takes. Keep Sona’s signature watercolor look, or switch to “exact words” for anime, oil paint, or neon. Whatever you picture.",
          shot: "Describe input · Watercolor / Exact words toggle",
          ratio: "1170 / 2532",
        },
        {
          n: "02",
          title: "Watch it paint",
          copy:
            "Sona lays in the atmosphere and the final brushstrokes. A few seconds later, your world appears.",
          shot: "Generating state · Adding the final brushstrokes",
          ratio: "1170 / 2532",
        },
        {
          n: "03",
          title: "Pick a direction",
          copy:
            "Not one option, but several. Sona offers a handful of takes and asks the only question that matters: which one speaks to you?",
          shot: "Direction picker · Which speaks to you?",
          ratio: "1170 / 2532",
        },
        {
          n: "04",
          title: "Tweak until you love it",
          copy:
            "Nudge it calmer or warmer, try a whole new scene, repaint the same idea, or describe exactly what you see. When it’s right, save it. It’s yours.",
          shot: "Review controls · Tweak / New scene / Repaint / Save",
          ratio: "1170 / 2532",
        },
      ],
    },
    reframe: {
      aria: "The idea behind Sona",
      eyebrow: "The whole idea",
      line: ["A missed day should be a ", { em: "dip" }, ", not a reset to zero."],
      sub:
        "Every habit app you quit punished you for one bad day. Sona is built the opposite way: your score bends, recovers, and keeps counting, because returning is the only skill that actually builds a life.",
    },
    walk: {
      eyebrow: "Why it works when others didn’t",
      title: ["Every piece is built to help you ", { em: "come back" }, "."],
      steps: [
        {
          id: "spaces",
          eyebrow: "Your routines, your art",
          title: ["Describe it in a few words. ", { em: "Watch a world appear." }],
          copy:
            "Tell Sona what you’re building, like “soft light, slow mornings” or “a stronger body by spring,” and it paints a personal scene for it. Don’t love the first one? Regenerate it, restyle it, or describe exactly what you see, and keep adjusting until it’s a place you can’t wait to open. Then your habits live inside that space, building the life it pictures.",
          shot: "Painting review · Tweak / New scene / Describe controls",
          ratio: "1170 / 2532",
          shape: "phone",
          image: {
            light: "/walk-describe-world-152-light.png",
            dark: "/walk-describe-world-18-dark.png",
            width: 1080,
            height: 1920,
          },
          chip: "painted by Sona",
        },
        {
          eyebrow: "A place, not a checklist",
          title: ["Step into the space you ", { em: "made" }, "."],
          copy:
            "Each space opens onto its own painting, with the habits that belong to it living right beneath. You don’t open a to-do list. You return to a world you want to be in.",
          shot: "Space painted header + habit list (Morning Routine)",
          ratio: "1170 / 2532",
          shape: "phone",
          image: {
            light: "/walk-step-into-space-767-light.png",
            dark: "/walk-step-into-space-847-dark.png",
            width: 1080,
            height: 1920,
          },
          chip: "a world per goal",
        },
        {
          eyebrow: "Rest is part of the practice",
          title: ["A hard week shouldn’t ", { em: "cost" }, " you everything."],
          copy:
            "Sick, traveling, or just spent? Rest a habit and nothing breaks. Its score holds, and Sona resumes with you when you’re ready. Rest isn’t a loophole here. It’s the system working as designed.",
          shot: "Habit resting state + rest sheet",
          ratio: "734 / 560",
          shape: "phone",
          image: {
            light: "/walk-hard-week-rest-320-light.png",
            dark: "/walk-hard-week-rest-504-dark.png",
            width: 1080,
            height: 1920,
          },
          chip: "your score stays steady",
        },
        {
          id: "progress",
          eyebrow: "A score, not a streak",
          title: ["A missed day is a ", { em: "dip" }, ", not a reset."],
          copy:
            "No counter crashes to zero here. A gentle consistency score absorbs the misses and keeps counting with you. Every space gets a progress reveal of its own: one calm trend line, the month’s consistency, every habit at a glance.",
          shot: "Per-space Progress reveal",
          ratio: "1170 / 2532",
          shape: "phone",
          image: {
            light: "/walk-missed-day-dip-531-light.png",
            dark: "/walk-missed-day-dip-89-dark.png",
            width: 1080,
            height: 1920,
          },
          chip: "no resets, ever",
        },
        {
          eyebrow: "Private by design",
          title: ["Yours alone. ", { em: "On your device." }],
          copy:
            "Everything lives on your phone. No account, no cloud, no one watching over your shoulder. Just you, your worlds, and the quiet evidence that you’re becoming someone who follows through.",
          shot: "Settings · local backup",
          ratio: "1170 / 2532",
          shape: "phone",
          image: {
            light: "/walk-yours-alone-device-787-light.png",
            dark: "/walk-yours-alone-device-754-dark.png",
            width: 1080,
            height: 1920,
          },
          chip: "no account · no cloud",
        },
      ],
    },
    midCta: {
      aria: "Download Sona",
      title: ["Your next year is built from ", { em: "small days like today." }],
      lede: "Start one space. Keep one promise. Let Sona hold the rest.",
    },
    becoming: {
      eyebrow: "A year from now",
      lines: [
        ["You stop negotiating with yourself every morning. The walk is just ", { em: "what you do" }, "."],
        ["A bad week arrives, and for the first time, it doesn’t take everything down with it."],
        ["And one ordinary evening you notice the life you kept postponing. ", { em: "You’re living it" }, "."],
      ],
    },
    faq: {
      aria: "Frequently asked questions",
      eyebrow: "Good questions",
      title: ["The things people ", { em: "ask first." }],
      items: [
        {
          q: "What happens when I miss a day in Sona?",
          a: "Nothing breaks. There is no streak counter that resets to zero. A missed day is a small dip in your consistency score, which keeps counting with you. You just return the next day, and your long-run progress stays intact.",
        },
        {
          q: "Is it bad to miss a day of a habit?",
          a: "No. Missing a day is normal and human. What actually breaks habits is the all-or-nothing shame that makes one miss feel like total failure. Sona is built around the idea that returning after a miss is the real skill, so a single missed day costs you almost nothing.",
        },
        {
          q: "How is Sona different from a normal habit tracker?",
          a: "Two ways. First, it has no punishing streaks; your progress is a forgiving consistency score, not a fragile chain. Second, every goal becomes a personal AI-painted world that holds its habits, so opening the app feels like stepping into the life you're building instead of checking a gray list.",
        },
        {
          q: "What are Spaces?",
          a: "A Space is a painted world that groups related habits, like a morning routine, getting stronger, or better sleep. You describe what you're building in a few words and Sona paints a personal scene for it, which you can regenerate and restyle until you love it. Your habits live inside that Space.",
        },
        {
          q: "Can I take a rest day without losing progress?",
          a: "Yes. You can rest an individual habit for sickness, travel, or a hard week. Its progress is protected while you rest and it resumes automatically. Rest is designed into the system, not treated as a failure.",
        },
        {
          q: "Is Sona free, and what platforms does it support?",
          a: "Sona is free to download on iOS, with an Android version coming soon. It's private by design: everything lives on your device, with no account and no cloud.",
        },
      ],
    },
    final: {
      eyebrow: "Start the long run",
      title: ["Make your life ", { em: "extraordinary" }, "."],
      lede:
        "One space. A few small promises. A painting worth returning to. The rest is just days, and the days are what Sona is for.",
      support: "Questions? We’re here",
    },
  },
  ja: {
    metadata: {
      title: "Sona: 目標まで美しく見守る習慣化アプリ",
      description:
        "Sonaは、失敗を責めない美しい習慣化アプリです。目標ごとにAIが描く世界をつくり、日々・週・月の習慣を、途切れてもゼロに戻らない穏やかな一貫性スコアで続けられます。",
    },
    appSchemaDescription:
      "Sonaは、美しくてやさしい習慣化アプリです。途切れるストリークではなく、休んだ日も吸収する一貫性スコアで、目標をAIが描く自分だけの世界に変えます。",
    hero: {
      eyebrow: "何度も始め直すことに疲れた人へ",
      titleLines: [
        ["目標までの道のりも"],
        [{ em: "美しく" }, "感じられる習慣アプリ。"],
      ],
      lede:
        "あなたが怠けているわけではありません。ただ、始め直し続けることに疲れているだけ。Sonaは、目標ごとに美しい世界をつくり、休んだ日があっても続いていく一貫性スコアで、また戻れる場所になります。",
      seeHow: "仕組みを見る",
      imageAlt:
        "iPhoneに表示されたSonaのBetter Sleepスペースと習慣カード。",
      waitlist: {
        title: "ウェイトリストに参加",
        copy:
          "Sonaのリリース時にお知らせします。メールは1通だけ。そのあと、準備ができたら試せます。",
        button: "ウェイトリストに参加",
        note: "短いTallyフォームが新しいタブで開きます。",
      },
    },
    trust: {
      aria: "Sonaを安心して試せる理由",
      private: "プライバシー重視。アカウントなし、クラウドなし",
      free: "無料でダウンロード",
      platforms: "iPhoneは提供中 · Androidは近日公開",
    },
    gallery: {
      aria: "Sonaでつくれるスペース",
      eyebrow: "あなたが言葉にする · Sonaが描く",
      title: ["世界を", { em: "つくり" }, "、", { br: true }, "自分らしく", { em: "整える" }, "。"],
      lede: [
        "下のシーンはすべて、",
        { strong: "数語の説明から生まれたもの" },
        "です。つくりたい生活を",
        { strong: "言葉にし" },
        "、Sonaが",
        { strong: "描き" },
        "、気に入るまで",
        { strong: "再生成やスタイル変更" },
        "ができます。プリセットでも素材写真でもありません。習慣は、あなたがつくった世界の中に入ります。",
      ],
      spaces: [
        { name: "朝のルーティン", slug: "morning-routine" },
        { name: "よく眠る", slug: "better-sleep" },
        { name: "体を強くする", slug: "get-strong" },
        { name: "整った食事", slug: "eat-well" },
        { name: "もっと動く", slug: "move-more" },
        { name: "静かな心", slug: "quiet-mind" },
        { name: "読書の時間", slug: "read-more" },
        { name: "お金を貯める", slug: "save-money" },
        { name: "片づいた部屋", slug: "tidy-home" },
        { name: "家族との時間", slug: "time-with-family" },
        { name: "深い集中", slug: "deep-work" },
        { name: "外で過ごす", slug: "time-outside" },
      ],
      customLabel: "自分の世界を描く",
    },
    paint: {
      aria: "Sonaがスペースを描く流れ",
      eyebrow: "流れはとてもシンプル",
      title: ["納得できるまで、", { em: "あなたが整えられます。" }],
      lede:
        "Sonaは画像を一枚渡して終わりではありません。少しずつ方向を選び、戻りたくなる場所になるまで整えられます。",
      steps: [
        { n: "01", title: "言葉にする", copy: "数語で十分です。Sonaらしい水彩の雰囲気でも、アニメ、油彩、ネオンのような「そのままの言葉」でも指定できます。", shot: "入力 · 水彩 / そのままの言葉 切り替え", ratio: "1170 / 2532" },
        { n: "02", title: "描かれるのを見る", copy: "空気感が入り、最後の筆あとが重なって、数秒後にあなたの世界が現れます。", shot: "生成中 · 最後の筆あとを追加中", ratio: "1170 / 2532" },
        { n: "03", title: "方向を選ぶ", copy: "ひとつだけではありません。いくつかの表現から、いちばん心に響く方向を選べます。", shot: "方向選択 · どれが響きますか？", ratio: "1170 / 2532" },
        { n: "04", title: "好きになるまで調整", copy: "もっと穏やかに、もっと暖かく、新しい場面に、同じ案を描き直すこともできます。しっくりきたら保存します。", shot: "確認操作 · 調整 / 新しい場面 / 再描画 / 保存", ratio: "1170 / 2532" },
      ],
    },
    reframe: {
      aria: "Sonaの考え方",
      eyebrow: "大切な考え方",
      line: ["休んだ日は", { em: "少し下がる" }, "だけ。ゼロには戻らない。"],
      sub:
        "多くの習慣アプリは、たった一日で全部を失ったように感じさせます。Sonaは反対です。スコアは曲がり、回復し、数え続けます。人生をつくる力は、完璧でいることではなく、戻ってくることだからです。",
    },
    walk: {
      eyebrow: "続かなかったアプリと違う理由",
      title: ["すべてが、もう一度", { em: "戻る" }, "ために作られています。"],
      steps: [
        { id: "spaces", eyebrow: "ルーティンとアート", title: ["数語で伝える。", { em: "世界が現れる。" }], copy: "「柔らかな光の朝」や「春までに強い体へ」のように、つくりたいものを伝えるだけ。最初の絵が違うと感じたら、再生成、スタイル変更、詳しい説明で調整できます。", shot: "絵の確認 · 調整 / 新しい場面 / 説明", ratio: "1170 / 2532", shape: "phone", chip: "Sonaが描く" },
        { eyebrow: "チェックリストではなく場所", title: ["自分でつくった場所へ", { em: "戻る" }, "。"], copy: "各スペースには、そのための絵と習慣があります。無機質なリストではなく、入りたくなる世界に戻ります。", shot: "描かれたヘッダー + 習慣リスト", ratio: "1170 / 2532", shape: "phone", chip: "目標ごとの世界" },
        { eyebrow: "一日に何度でも", title: ["一日一回ではない習慣も", { em: "自然に" }, "。"], copy: "水を八回飲む、ストレッチを二回する。必要な回数を決めて、リングが静かに満ちていくのを見られます。", shot: "習慣カード · 複数回の進捗", ratio: "734 / 520", shape: "card", chip: "0 / 3 → 完了" },
        { eyebrow: "毎日 · 毎週 · 毎月", title: ["習慣ごとの", { em: "自然なリズム" }, "で。"], copy: "朝のストレッチは毎日、長いランニングは毎週、予算の見直しは毎月。Sonaはすべてを毎日に押し込めません。", shot: "今日 / 週 / 月の切り替え", ratio: "1170 / 2532", shape: "phone", chip: "今日 · 週 · 月" },
        { eyebrow: "休みも練習の一部", title: ["大変な週で全部を", { em: "失わない" }, "。"], copy: "体調不良、旅行、しんどい週。習慣を休ませてもスコアは守られ、準備ができたら再開できます。", shot: "休止中の習慣 + 休み設定", ratio: "734 / 560", shape: "card", chip: "スコアは保たれる" },
        { id: "progress", eyebrow: "ストリークではなくスコア", title: ["休んだ日は", { em: "少し下がる" }, "だけ。"], copy: "ゼロに落ちるカウンターはありません。一貫性スコアが休んだ日を吸収し、あなたと一緒に数え続けます。", shot: "スペースごとの進捗表示", ratio: "1170 / 2532", shape: "phone", chip: "ゼロ戻りなし" },
        { eyebrow: "プライバシー重視", title: ["あなただけのもの。", { em: "あなたの端末に。" }], copy: "データは端末にあります。アカウントなし、クラウドなし、誰かに見られる場所ではありません。", shot: "設定 · ローカルバックアップ", ratio: "1170 / 2532", shape: "phone", chip: "アカウントなし · クラウドなし" },
      ],
    },
    midCta: {
      aria: "Sonaをダウンロード",
      title: ["来年のあなたは、", { em: "今日みたいな小さな日" }, "から作られます。"],
      lede: "ひとつのスペースから。ひとつの約束から。あとはSonaに預けてください。",
    },
    becoming: {
      eyebrow: "一年後",
      lines: [
        ["朝ごとに自分と交渉しなくなる。散歩はただ、", { em: "自分がすること" }, "になる。"],
        ["大変な週が来ても、初めて、全部が崩れない。"],
        ["そして何気ない夜に気づく。先延ばしにしていた生活を、", { em: "もう生きている" }, "。"],
      ],
    },
    faq: {
      aria: "よくある質問",
      eyebrow: "よくある質問",
      title: ["最初に", { em: "聞きたくなること。" }],
      items: [
        { q: "Sonaで一日休むとどうなりますか？", a: "何も壊れません。ゼロに戻るストリークカウンターはありません。一日休むと一貫性スコアが少し下がるだけで、長期の進捗は残ります。" },
        { q: "習慣を一日休むのは悪いことですか？", a: "いいえ。休む日は人間らしいものです。本当に習慣を壊すのは、一回の休みを完全な失敗に感じさせる仕組みです。Sonaは、戻ってくることこそ大切な力だと考えています。" },
        { q: "普通の習慣管理アプリと何が違いますか？", a: "罰のように途切れるストリークではなく、休みを吸収する一貫性スコアを使います。さらに、目標ごとにAIが描く世界があり、灰色のリストではなく、つくりたい生活に入っていく感覚があります。" },
        { q: "スペースとは何ですか？", a: "スペースは、朝のルーティン、強い体、よい睡眠など、関連する習慣をまとめる描かれた世界です。数語で説明するとSonaが場面を描き、気に入るまで調整できます。" },
        { q: "休息日を入れても進捗は失われませんか？", a: "はい。体調不良、旅行、大変な週などのために個別の習慣を休ませられます。進捗は守られ、準備ができたら自動で戻れます。" },
        { q: "Sonaは無料ですか？対応端末は？", a: "SonaはiOSで無料ダウンロードできます。Android版は近日公開予定です。アカウントもクラウドもなく、データは端末上に残ります。" },
      ],
    },
    final: {
      eyebrow: "長く続く道へ",
      title: ["人生を", { em: "特別なもの" }, "に。"],
      lede: "ひとつのスペース。いくつかの小さな約束。戻りたくなる絵。あとは日々の積み重ねです。",
      support: "質問がありますか？こちらへ",
    },
  },
  ko: {
    metadata: {
      title: "Sona: 목표만큼 아름다운 습관 관리 앱",
      description:
        "Sona는 다시 시작하는 부담을 덜어 주는 아름다운 습관 관리 앱입니다. 목표마다 AI가 그린 세계를 만들고, 놓친 날에도 0으로 돌아가지 않는 일관성 점수로 루틴을 이어 가세요.",
    },
    appSchemaDescription:
      "Sona는 아름답고 부담 없는 습관 앱입니다. 끊어지는 스트릭 대신 놓친 날을 흡수하는 일관성 점수를 쓰고, 각 목표를 습관이 머무는 AI 그림 세계로 바꿉니다.",
    hero: {
      eyebrow: "다시 시작하는 일에 지친 사람들을 위해",
      titleLines: [["목표만큼 아름다운"], ["습관과 루틴의 ", { em: "공간." }]],
      lede:
        "당신이 게으른 것이 아닙니다. 계속 처음부터 다시 시작하는 일에 지친 것뿐입니다. Sona는 목표마다 아름다운 세계를 만들고, 놓친 날에도 이어지는 일관성 점수로 다시 돌아올 수 있게 도와줍니다.",
      seeHow: "어떻게 작동하는지 보기",
      imageAlt:
        "iPhone에 표시된 Sona Better Sleep 스페이스와 습관 카드.",
      waitlist: {
        title: "대기자 명단에 등록",
        copy:
          "Sona가 열리면 출시 안내를 보내드릴게요. 메일은 한 번만 보내고, 준비되면 바로 써볼 수 있습니다.",
        button: "대기자 명단에 등록",
        note: "짧은 Tally 양식이 새 탭에서 열립니다.",
      },
    },
    trust: {
      aria: "Sona를 안심하고 써볼 수 있는 이유",
      private: "개인정보 중심. 계정 없음, 클라우드 없음",
      free: "무료 다운로드",
      platforms: "iPhone 제공 중 · Android 출시 예정",
    },
    gallery: {
      aria: "Sona에서 만드는 스페이스",
      eyebrow: "당신이 설명하면 · Sona가 그립니다",
      title: ["세계를 ", { em: "만들고" }, ", ", { br: true }, "원하는 방향으로 ", { em: "다듬으세요" }, "."],
      lede: [
        "아래 장면은 모두 ",
        { strong: "몇 마디 설명에서 만들어졌습니다" },
        ". 만들고 싶은 삶을 ",
        { strong: "설명하면" },
        " Sona가 ",
        { strong: "그려 주고" },
        ", 마음에 들 때까지 ",
        { strong: "다시 만들고 스타일을 바꿀 수 있습니다" },
        ". 프리셋도 스톡 사진도 아닙니다. 당신의 습관은 직접 만든 세계 안에 머뭅니다.",
      ],
      spaces: [
        { name: "아침 루틴", slug: "morning-routine" },
        { name: "더 나은 수면", slug: "better-sleep" },
        { name: "강해지기", slug: "get-strong" },
        { name: "잘 먹기", slug: "eat-well" },
        { name: "더 움직이기", slug: "move-more" },
        { name: "고요한 마음", slug: "quiet-mind" },
        { name: "더 읽기", slug: "read-more" },
        { name: "돈 모으기", slug: "save-money" },
        { name: "정돈된 집", slug: "tidy-home" },
        { name: "가족과 시간", slug: "time-with-family" },
        { name: "깊은 몰입", slug: "deep-work" },
        { name: "바깥 시간", slug: "time-outside" },
      ],
      customLabel: "나만의 세계 설명하기",
    },
    paint: {
      aria: "Sona가 스페이스를 그리는 방법",
      eyebrow: "작동 방식은 간단합니다",
      title: ["마음에 들 때까지 ", { em: "직접 다듬을 수 있습니다." }],
      lede:
        "Sona는 이미지 하나를 건네고 끝내지 않습니다. 단계마다 방향을 고르며 다시 돌아오고 싶은 장소로 만들어 갑니다.",
      steps: [
        { n: "01", title: "설명하기", copy: "몇 마디면 충분합니다. Sona의 수채화 분위기를 유지하거나, 애니메이션, 유화, 네온처럼 원하는 말을 그대로 반영할 수 있습니다.", shot: "입력 · 수채화 / 정확한 문구 전환", ratio: "1170 / 2532" },
        { n: "02", title: "그려지는 모습 보기", copy: "분위기와 마지막 붓질이 더해지고, 몇 초 뒤 당신의 세계가 나타납니다.", shot: "생성 중 · 마지막 붓질 추가", ratio: "1170 / 2532" },
        { n: "03", title: "방향 고르기", copy: "하나만 주어지지 않습니다. 여러 가지 표현 중에서 가장 마음에 닿는 방향을 고를 수 있습니다.", shot: "방향 선택 · 어떤 것이 와닿나요?", ratio: "1170 / 2532" },
        { n: "04", title: "좋아질 때까지 조정", copy: "더 차분하게, 더 따뜻하게, 새 장면으로, 같은 아이디어를 다시 그리게 할 수 있습니다. 맞다고 느껴지면 저장하세요.", shot: "검토 컨트롤 · 조정 / 새 장면 / 다시 그리기 / 저장", ratio: "1170 / 2532" },
      ],
    },
    reframe: {
      aria: "Sona의 생각",
      eyebrow: "핵심 아이디어",
      line: ["놓친 하루는 ", { em: "작은 하락" }, "일 뿐, 0으로 돌아가는 일이 아닙니다."],
      sub:
        "많은 습관 앱은 하루만 놓쳐도 모든 것이 무너진 것처럼 느끼게 합니다. Sona는 반대로 만들어졌습니다. 점수는 휘고, 회복하고, 계속 세어 갑니다. 삶을 만드는 기술은 완벽함이 아니라 다시 돌아오는 힘이기 때문입니다.",
    },
    walk: {
      eyebrow: "다른 앱이 어려웠던 이유를 바꾸다",
      title: ["모든 요소가 다시 ", { em: "돌아오도록" }, " 돕습니다."],
      steps: [
        { id: "spaces", eyebrow: "루틴과 나만의 그림", title: ["몇 마디로 말하면 ", { em: "세계가 나타납니다." }], copy: "“부드러운 빛의 아침”이나 “봄까지 더 강한 몸”처럼 만들고 싶은 것을 적어 보세요. 첫 그림이 마음에 들지 않으면 다시 만들고, 스타일을 바꾸고, 더 자세히 설명할 수 있습니다.", shot: "그림 검토 · 조정 / 새 장면 / 설명", ratio: "1170 / 2532", shape: "phone", chip: "Sona가 그린 세계" },
        { eyebrow: "체크리스트가 아닌 장소", title: ["내가 만든 공간으로 ", { em: "들어갑니다" }, "."], copy: "각 스페이스는 고유한 그림과 그 안에 속한 습관을 함께 보여 줍니다. 해야 할 일 목록이 아니라 머물고 싶은 세계로 돌아옵니다.", shot: "그려진 헤더 + 습관 목록", ratio: "1170 / 2532", shape: "phone", chip: "목표마다 하나의 세계" },
        { eyebrow: "하루에도 여러 번", title: ["어떤 습관은 하루 ", { em: "한 번" }, "이 아닙니다."], copy: "물 여덟 잔, 스트레칭 두 번. 필요한 횟수를 정하고 하나씩 채우면 링이 조용히 차오릅니다.", shot: "습관 카드 · 여러 번 완료 진행", ratio: "734 / 520", shape: "card", chip: "0 / 3 → 완료" },
        { eyebrow: "매일 · 매주 · 매월", title: ["각 습관의 ", { em: "자연스러운 리듬" }, "대로."], copy: "아침 스트레칭은 매일, 긴 달리기는 매주, 예산 점검은 매월. Sona는 모든 것을 매일 체크박스로 밀어 넣지 않습니다.", shot: "오늘 / 주 / 월 탭", ratio: "1170 / 2532", shape: "phone", chip: "오늘 · 주 · 월" },
        { eyebrow: "쉼도 연습의 일부", title: ["힘든 한 주가 전부를 ", { em: "빼앗지 않게" }, "."], copy: "아프거나, 여행 중이거나, 지친 주라면 습관을 쉬게 할 수 있습니다. 점수는 보호되고 준비되면 다시 이어집니다.", shot: "쉬는 습관 상태 + 휴식 시트", ratio: "734 / 560", shape: "card", chip: "점수는 유지됩니다" },
        { id: "progress", eyebrow: "스트릭이 아닌 점수", title: ["놓친 하루는 ", { em: "작은 하락" }, "입니다."], copy: "0으로 무너지는 카운터는 없습니다. 부드러운 일관성 점수가 놓친 날을 흡수하고 계속 함께 세어 갑니다.", shot: "스페이스별 진행 공개", ratio: "1170 / 2532", shape: "phone", chip: "0으로 리셋 없음" },
        { eyebrow: "개인정보 중심", title: ["오직 당신의 것. ", { em: "당신의 기기에." }], copy: "모든 것은 휴대폰에 남습니다. 계정도, 클라우드도, 누군가 지켜보는 느낌도 없습니다.", shot: "설정 · 로컬 백업", ratio: "1170 / 2532", shape: "phone", chip: "계정 없음 · 클라우드 없음" },
      ],
    },
    midCta: {
      aria: "Sona 다운로드",
      title: ["내년의 삶은 ", { em: "오늘 같은 작은 날들" }, "로 만들어집니다."],
      lede: "스페이스 하나로 시작하세요. 약속 하나를 지키세요. 나머지는 Sona가 조용히 붙잡아 줄게요.",
    },
    becoming: {
      eyebrow: "일 년 뒤",
      lines: [
        ["매일 아침 자신과 협상하지 않게 됩니다. 산책은 그냥 ", { em: "내가 하는 일" }, "이 됩니다."],
        ["힘든 주가 와도, 처음으로 모든 것이 함께 무너지지 않습니다."],
        ["어느 평범한 저녁, 미루던 삶을 알아차립니다. ", { em: "이미 살고 있다는 것" }, "을."],
      ],
    },
    faq: {
      aria: "자주 묻는 질문",
      eyebrow: "좋은 질문들",
      title: ["사람들이 먼저 ", { em: "묻는 것들." }],
      items: [
        { q: "Sona에서 하루를 놓치면 어떻게 되나요?", a: "아무것도 깨지지 않습니다. 0으로 돌아가는 스트릭 카운터가 없습니다. 놓친 하루는 일관성 점수의 작은 하락일 뿐이고, 장기 진행은 그대로 이어집니다." },
        { q: "습관을 하루 쉬면 나쁜 건가요?", a: "아니요. 하루를 쉬는 것은 자연스럽고 인간적인 일입니다. 습관을 정말 망가뜨리는 것은 한 번의 쉼을 완전한 실패처럼 느끼게 하는 방식입니다. Sona는 다시 돌아오는 힘을 중심으로 만들어졌습니다." },
        { q: "일반적인 습관 트래커와 무엇이 다른가요?", a: "벌처럼 끊어지는 스트릭 대신, 놓친 날을 흡수하는 일관성 점수를 사용합니다. 또 목표마다 AI가 그린 세계가 있어 회색 목록을 보는 대신 만들고 싶은 삶 안으로 들어가는 느낌을 줍니다." },
        { q: "스페이스란 무엇인가요?", a: "스페이스는 아침 루틴, 더 강한 몸, 좋은 수면처럼 관련 습관을 묶는 그려진 세계입니다. 몇 마디로 설명하면 Sona가 장면을 만들고, 마음에 들 때까지 조정할 수 있습니다." },
        { q: "쉬는 날을 가져도 진행을 잃지 않나요?", a: "네. 아픔, 여행, 힘든 주를 위해 개별 습관을 쉴 수 있습니다. 진행은 보호되고 준비되면 자동으로 다시 이어집니다." },
        { q: "Sona는 무료인가요? 어떤 플랫폼을 지원하나요?", a: "Sona는 iOS에서 무료로 다운로드할 수 있으며 Android 버전은 출시 예정입니다. 계정과 클라우드 없이, 데이터는 기기에 머뭅니다." },
      ],
    },
    final: {
      eyebrow: "긴 길을 시작하세요",
      title: ["삶을 ", { em: "특별하게" }, "."],
      lede: "하나의 스페이스. 몇 가지 작은 약속. 다시 돌아오고 싶은 그림. 나머지는 하루하루가 만들어 갑니다.",
      support: "질문이 있나요? 도와드릴게요",
    },
  },
  "es-MX": {
    metadata: {
      title: "Sona: una app de hábitos tan bonita como tus metas",
      description:
        "Sona es una app de hábitos y rutinas sin rachas que se rompen. Convierte cada meta en un mundo pintado con IA y sigue tu consistencia sin volver a cero por faltar un día.",
    },
    appSchemaDescription:
      "Una app de hábitos bonita y flexible. Sin rachas que se rompen: faltar un día es una baja en tu consistencia, no volver a cero. Convierte cada meta en un mundo personal pintado con IA.",
    hero: {
      eyebrow: "Para quienes ya se cansaron de volver a empezar",
      titleLines: [["La app de hábitos"], ["tan bonita como ", { em: "tus metas." }]],
      lede:
        "No eres flojo. Estás cansado de empezar desde cero. Sona le da a cada meta un mundo bonito donde vivir, y una puntuación de consistencia que sobrevive los días que faltas. Esta vez, puedes seguir.",
      seeHow: "Ver cómo funciona",
      imageAlt:
        "Espacio Better Sleep de Sona con tarjetas de hábitos en un iPhone.",
      waitlist: {
        title: "Únete a la lista de espera",
        copy:
          "Recibe el aviso cuando Sona abra. Un solo correo, y luego podrás probarlo cuando esté listo.",
        button: "Unirme a la lista",
        note: "Abre un formulario breve de Tally en una pestaña nueva.",
      },
    },
    trust: {
      aria: "Por qué Sona es seguro de probar",
      private: "Privado por diseño. Sin cuenta, sin nube",
      free: "Descarga gratis",
      platforms: "iPhone ahora · Android próximamente",
    },
    gallery: {
      aria: "Espacios que las personas crean en Sona",
      eyebrow: "Tú lo describes · Sona lo pinta",
      title: ["Tú ", { em: "creas" }, " estos mundos. ", { br: true }, "Luego los ", { em: "diriges" }, "."],
      lede: [
        "Cada escena de abajo fue ",
        { strong: "creada con unas palabras" },
        ". Tú ",
        { strong: "describes" },
        " la vida que estás construyendo, Sona la ",
        { strong: "pinta" },
        ", y puedes ",
        { strong: "regenerar y cambiar el estilo" },
        " hasta que sea ",
        { strong: "tuya" },
        ". No son presets ni fotos de stock. Tus hábitos viven dentro del mundo que hiciste.",
      ],
      spaces: [
        { name: "Rutina de mañana", slug: "morning-routine" },
        { name: "Dormir mejor", slug: "better-sleep" },
        { name: "Hacerme fuerte", slug: "get-strong" },
        { name: "Comer bien", slug: "eat-well" },
        { name: "Moverme más", slug: "move-more" },
        { name: "Mente tranquila", slug: "quiet-mind" },
        { name: "Leer más", slug: "read-more" },
        { name: "Ahorrar dinero", slug: "save-money" },
        { name: "Casa ordenada", slug: "tidy-home" },
        { name: "Tiempo en familia", slug: "time-with-family" },
        { name: "Trabajo profundo", slug: "deep-work" },
        { name: "Tiempo afuera", slug: "time-outside" },
      ],
      customLabel: "Describe el tuyo",
    },
    paint: {
      aria: "Cómo Sona pinta tu espacio",
      eyebrow: "Así funciona exactamente",
      title: ["Te quedas al mando hasta que ", { em: "se sienta tuyo." }],
      lede:
        "Sona no te da una sola imagen genérica y ya. Tú vas guiando la pintura paso a paso, hasta que sea un lugar al que quieras regresar.",
      steps: [
        { n: "01", title: "Descríbelo", copy: "Unas palabras bastan. Conserva el estilo acuarela de Sona o usa “palabras exactas” para anime, óleo, neón o lo que imagines.", shot: "Entrada · Acuarela / Palabras exactas", ratio: "1170 / 2532" },
        { n: "02", title: "Mira cómo se pinta", copy: "Sona agrega la atmósfera y las últimas pinceladas. Unos segundos después aparece tu mundo.", shot: "Generando · Agregando las últimas pinceladas", ratio: "1170 / 2532" },
        { n: "03", title: "Elige una dirección", copy: "No recibes una sola opción. Sona te da varias versiones y te pregunta lo importante: cuál te habla más.", shot: "Selector de dirección · ¿Cuál te habla?", ratio: "1170 / 2532" },
        { n: "04", title: "Ajusta hasta amarlo", copy: "Hazlo más tranquilo o más cálido, prueba otra escena, repinta la misma idea o describe exactamente lo que ves. Cuando esté bien, guárdalo.", shot: "Controles · Ajustar / Nueva escena / Repintar / Guardar", ratio: "1170 / 2532" },
      ],
    },
    reframe: {
      aria: "La idea detrás de Sona",
      eyebrow: "La idea completa",
      line: ["Faltar un día debe ser una ", { em: "baja" }, ", no volver a cero."],
      sub:
        "Cada app de hábitos que dejaste te castigó por un mal día. Sona funciona al revés: tu puntuación se dobla, se recupera y sigue contando, porque regresar es la habilidad que realmente construye una vida.",
    },
    walk: {
      eyebrow: "Por qué funciona cuando otras no",
      title: ["Todo está hecho para ayudarte a ", { em: "volver" }, "."],
      steps: [
        { id: "spaces", eyebrow: "Tus rutinas, tu arte", title: ["Descríbelo en unas palabras. ", { em: "Ve aparecer un mundo." }], copy: "Dile a Sona qué estás construyendo, como “mañanas lentas con luz suave” o “un cuerpo más fuerte para primavera”. Si la primera imagen no te encanta, puedes regenerarla, cambiar el estilo o describirla mejor.", shot: "Revisión de pintura · Ajustar / Nueva escena / Describir", ratio: "1170 / 2532", shape: "phone", chip: "pintado por Sona" },
        { eyebrow: "Un lugar, no una lista", title: ["Entra al espacio que ", { em: "hiciste" }, "."], copy: "Cada espacio abre con su propia pintura y los hábitos que pertenecen ahí. No abres una lista de pendientes: regresas a un mundo en el que sí quieres estar.", shot: "Encabezado pintado + lista de hábitos", ratio: "1170 / 2532", shape: "phone", chip: "un mundo por meta" },
        { eyebrow: "Un día, varias veces", title: ["Algunos hábitos no son de ", { em: "una vez" }, " al día."], copy: "Tomar agua ocho veces. Estirarte dos. Define cuántas veces cuenta el día y ve llenando el anillo poco a poco.", shot: "Tarjeta de hábito · avance de varias veces", ratio: "734 / 520", shape: "card", chip: "0 / 3 → listo" },
        { eyebrow: "Diario · semanal · mensual", title: ["Cada hábito a su ", { em: "ritmo" }, "."], copy: "Un estiramiento puede ser diario. Una carrera larga vive en tu semana. Revisar presupuesto vive en tu mes. Sona no fuerza todo a una casilla diaria.", shot: "Pestañas Hoy / Semana / Mes", ratio: "1170 / 2532", shape: "phone", chip: "Hoy · Semana · Mes" },
        { eyebrow: "Descansar también cuenta", title: ["Una semana pesada no debería ", { em: "costarte" }, " todo."], copy: "Si estás enfermo, de viaje o agotado, puedes pausar un hábito. Su progreso queda protegido y Sona vuelve contigo cuando estés listo.", shot: "Hábito en descanso + hoja de descanso", ratio: "734 / 560", shape: "card", chip: "tu puntuación se mantiene" },
        { id: "progress", eyebrow: "Una puntuación, no una racha", title: ["Faltar un día es una ", { em: "baja" }, ", no un reinicio."], copy: "Aquí ningún contador cae a cero. Una puntuación de consistencia absorbe los días perdidos y sigue contando contigo.", shot: "Vista de progreso por espacio", ratio: "1170 / 2532", shape: "phone", chip: "sin reinicios" },
        { eyebrow: "Privado por diseño", title: ["Solo tuyo. ", { em: "En tu dispositivo." }], copy: "Todo vive en tu teléfono. Sin cuenta, sin nube, sin sentir que alguien mira por encima de tu hombro.", shot: "Ajustes · respaldo local", ratio: "1170 / 2532", shape: "phone", chip: "sin cuenta · sin nube" },
      ],
    },
    midCta: {
      aria: "Descargar Sona",
      title: ["Tu próximo año se construye con ", { em: "días pequeños como hoy." }],
      lede: "Empieza con un espacio. Cumple una promesa. Deja que Sona sostenga lo demás.",
    },
    becoming: {
      eyebrow: "De aquí a un año",
      lines: [
        ["Dejas de negociar contigo cada mañana. Caminar simplemente es ", { em: "lo que haces" }, "."],
        ["Llega una semana mala y, por primera vez, no se lleva todo con ella."],
        ["Y una noche cualquiera notas la vida que seguías posponiendo. ", { em: "Ya la estás viviendo" }, "."],
      ],
    },
    faq: {
      aria: "Preguntas frecuentes",
      eyebrow: "Buenas preguntas",
      title: ["Lo que la gente ", { em: "pregunta primero." }],
      items: [
        { q: "¿Qué pasa si falto un día en Sona?", a: "No se rompe nada. No hay una racha que vuelve a cero. Faltar un día es una pequeña baja en tu puntuación de consistencia, que sigue contando contigo. Regresas al día siguiente y tu progreso de largo plazo sigue intacto." },
        { q: "¿Es malo faltar un día de un hábito?", a: "No. Faltar un día es normal y humano. Lo que rompe los hábitos es la vergüenza de todo o nada. Sona está construido alrededor de una idea: regresar después de faltar es la habilidad real." },
        { q: "¿En qué se diferencia Sona de un rastreador de hábitos normal?", a: "Primero, no tiene rachas punitivas: tu progreso es una puntuación flexible de consistencia. Segundo, cada meta se convierte en un mundo personal pintado con IA donde viven sus hábitos." },
        { q: "¿Qué son los Espacios?", a: "Un Espacio es un mundo pintado que agrupa hábitos relacionados, como rutina de mañana, fuerza o dormir mejor. Lo describes con unas palabras y Sona lo pinta para ti." },
        { q: "¿Puedo descansar sin perder progreso?", a: "Sí. Puedes descansar un hábito por enfermedad, viaje o una semana difícil. Su progreso se protege y se reanuda cuando estás listo." },
        { q: "¿Sona es gratis y en qué plataformas está?", a: "Sona se puede descargar gratis en iOS, con Android próximamente. Es privado por diseño: todo vive en tu dispositivo, sin cuenta y sin nube." },
      ],
    },
    final: {
      eyebrow: "Empieza el largo camino",
      title: ["Haz tu vida ", { em: "extraordinaria" }, "."],
      lede: "Un espacio. Unas promesas pequeñas. Una pintura a la que vale la pena volver. Lo demás son días, y para eso existe Sona.",
      support: "¿Preguntas? Estamos aquí",
    },
  },
  "pt-BR": {
    metadata: {
      title: "Sona: um aplicativo de hábitos tão bonito quanto suas metas",
      description:
        "Sona é um aplicativo de hábitos e rotinas sem sequências que zeram. Transforme cada meta em um mundo pintado por IA e acompanhe sua consistência sem voltar ao zero por perder um dia.",
    },
    appSchemaDescription:
      "Um aplicativo de hábitos bonito e acolhedor. Sem sequências que zeram: perder um dia é uma queda na sua consistência, não um reset. Transforme cada meta em um mundo pessoal pintado por IA.",
    hero: {
      eyebrow: "Para quem cansou de recomeçar",
      titleLines: [["O aplicativo de hábitos"], ["tão bonito quanto ", { em: "suas metas." }]],
      lede:
        "Você não é preguiçoso. Você só cansou de começar de novo. O Sona dá a cada meta um mundo bonito para morar e uma pontuação de consistência que sobrevive aos dias que você perde. Desta vez, dá para continuar.",
      seeHow: "Ver como funciona",
      imageAlt:
        "Espaço Better Sleep do Sona com cartões de hábitos em um iPhone.",
      waitlist: {
        title: "Entre na lista de espera",
        copy:
          "Receba o aviso quando o Sona abrir. Um único e-mail, e então você poderá testar quando estiver pronto.",
        button: "Entrar na lista",
        note: "Abre um formulário curto do Tally em uma nova aba.",
      },
    },
    trust: {
      aria: "Por que o Sona é seguro para experimentar",
      private: "Privado por design. Sem conta, sem nuvem",
      free: "Grátis para baixar",
      platforms: "iPhone agora · Android em breve",
    },
    gallery: {
      aria: "Espaços que as pessoas criam no Sona",
      eyebrow: "Você descreve · o Sona pinta",
      title: ["Você ", { em: "cria" }, " estes mundos. ", { br: true }, "Depois você os ", { em: "guia" }, "."],
      lede: [
        "Cada cena abaixo foi ",
        { strong: "feita a partir de algumas palavras" },
        ". Você ",
        { strong: "descreve" },
        " a vida que está construindo, o Sona ",
        { strong: "pinta" },
        ", e você pode ",
        { strong: "gerar de novo e mudar o estilo" },
        " até ficar ",
        { strong: "seu" },
        ". Não é preset nem foto de banco. Seus hábitos passam a morar no mundo que você criou.",
      ],
      spaces: [
        { name: "Rotina da manhã", slug: "morning-routine" },
        { name: "Dormir melhor", slug: "better-sleep" },
        { name: "Ficar mais forte", slug: "get-strong" },
        { name: "Comer bem", slug: "eat-well" },
        { name: "Mover mais", slug: "move-more" },
        { name: "Mente tranquila", slug: "quiet-mind" },
        { name: "Ler mais", slug: "read-more" },
        { name: "Guardar dinheiro", slug: "save-money" },
        { name: "Casa em ordem", slug: "tidy-home" },
        { name: "Tempo em família", slug: "time-with-family" },
        { name: "Trabalho profundo", slug: "deep-work" },
        { name: "Tempo ao ar livre", slug: "time-outside" },
      ],
      customLabel: "Descreva o seu",
    },
    paint: {
      aria: "Como o Sona pinta seu espaço",
      eyebrow: "É assim que funciona",
      title: ["Você ajusta até ", { em: "sentir que é seu." }],
      lede:
        "O Sona não entrega uma imagem genérica e acaba aí. Você guia a pintura passo a passo, até virar um lugar para onde dá vontade de voltar.",
      steps: [
        { n: "01", title: "Descreva", copy: "Algumas palavras bastam. Mantenha a aquarela do Sona ou use “palavras exatas” para anime, óleo, neon ou o que imaginar.", shot: "Entrada · Aquarela / Palavras exatas", ratio: "1170 / 2532" },
        { n: "02", title: "Veja ser pintado", copy: "O Sona coloca a atmosfera e as últimas pinceladas. Alguns segundos depois, seu mundo aparece.", shot: "Gerando · Adicionando as últimas pinceladas", ratio: "1170 / 2532" },
        { n: "03", title: "Escolha uma direção", copy: "Não é uma opção só. O Sona mostra algumas versões e pergunta o que importa: qual delas fala com você?", shot: "Escolha de direção · Qual fala com você?", ratio: "1170 / 2532" },
        { n: "04", title: "Ajuste até amar", copy: "Deixe mais calmo ou mais quente, tente outra cena, repinte a mesma ideia ou descreva exatamente o que vê. Quando estiver certo, salve.", shot: "Controles · Ajustar / Nova cena / Repintar / Salvar", ratio: "1170 / 2532" },
      ],
    },
    reframe: {
      aria: "A ideia por trás do Sona",
      eyebrow: "A ideia inteira",
      line: ["Perder um dia deve ser uma ", { em: "queda" }, ", não voltar ao zero."],
      sub:
        "Todo aplicativo de hábitos que você abandonou punia um dia ruim. O Sona é o contrário: sua pontuação dobra, se recupera e continua contando, porque voltar é a habilidade que realmente constrói uma vida.",
    },
    walk: {
      eyebrow: "Por que funciona quando outros não funcionaram",
      title: ["Tudo foi feito para ajudar você a ", { em: "voltar" }, "."],
      steps: [
        { id: "spaces", eyebrow: "Suas rotinas, sua arte", title: ["Descreva em poucas palavras. ", { em: "Veja um mundo aparecer." }], copy: "Diga ao Sona o que você está construindo, como “manhãs lentas com luz suave” ou “um corpo mais forte até a primavera”. Se a primeira imagem não encaixar, gere de novo, mude o estilo ou explique melhor.", shot: "Revisão da pintura · Ajustar / Nova cena / Descrever", ratio: "1170 / 2532", shape: "phone", chip: "pintado pelo Sona" },
        { eyebrow: "Um lugar, não uma lista", title: ["Entre no espaço que você ", { em: "criou" }, "."], copy: "Cada espaço abre com sua própria pintura e os hábitos que pertencem a ele. Você não abre uma lista de tarefas: você volta para um mundo onde quer estar.", shot: "Cabeçalho pintado + lista de hábitos", ratio: "1170 / 2532", shape: "phone", chip: "um mundo por meta" },
        { eyebrow: "Um dia, várias vezes", title: ["Alguns hábitos não são ", { em: "uma vez" }, " por dia."], copy: "Beber água oito vezes. Alongar duas. Defina quantas conclusões o dia precisa e vá preenchendo o anel aos poucos.", shot: "Cartão de hábito · progresso em múltiplas conclusões", ratio: "734 / 520", shape: "card", chip: "0 / 3 → feito" },
        { eyebrow: "Diário · semanal · mensal", title: ["Cada hábito no seu ", { em: "próprio ritmo" }, "."], copy: "Um alongamento de manhã é diário. Uma corrida longa mora na semana. Revisar o orçamento mora no mês. O Sona não força tudo a virar uma caixa diária.", shot: "Abas Hoje / Semana / Mês", ratio: "1170 / 2532", shape: "phone", chip: "Hoje · Semana · Mês" },
        { eyebrow: "Descanso faz parte", title: ["Uma semana difícil não deveria ", { em: "custar" }, " tudo."], copy: "Doente, viajando ou sem energia? Descanse um hábito e nada quebra. A pontuação fica protegida e o Sona retoma com você quando estiver pronto.", shot: "Hábito em descanso + folha de descanso", ratio: "734 / 560", shape: "card", chip: "sua pontuação fica estável" },
        { id: "progress", eyebrow: "Uma pontuação, não uma sequência", title: ["Perder um dia é uma ", { em: "queda" }, ", não um reset."], copy: "Aqui nenhum contador cai para zero. Uma pontuação gentil de consistência absorve as faltas e continua contando com você.", shot: "Revelação de progresso por espaço", ratio: "1170 / 2532", shape: "phone", chip: "sem voltar ao zero" },
        { eyebrow: "Privado por design", title: ["Só seu. ", { em: "No seu dispositivo." }], copy: "Tudo vive no seu celular. Sem conta, sem nuvem, sem alguém olhando por cima do seu ombro.", shot: "Ajustes · backup local", ratio: "1170 / 2532", shape: "phone", chip: "sem conta · sem nuvem" },
      ],
    },
    midCta: {
      aria: "Baixar o Sona",
      title: ["Seu próximo ano é feito de ", { em: "dias pequenos como hoje." }],
      lede: "Comece um espaço. Cumpra uma promessa. Deixe o Sona segurar o resto.",
    },
    becoming: {
      eyebrow: "Daqui a um ano",
      lines: [
        ["Você para de negociar consigo mesmo toda manhã. A caminhada simplesmente é ", { em: "algo que você faz" }, "."],
        ["Uma semana ruim chega e, pela primeira vez, ela não leva tudo junto."],
        ["E numa noite comum você percebe a vida que estava adiando. ", { em: "Você já está vivendo" }, "."],
      ],
    },
    faq: {
      aria: "Perguntas frequentes",
      eyebrow: "Boas perguntas",
      title: ["O que as pessoas ", { em: "perguntam primeiro." }],
      items: [
        { q: "O que acontece se eu perder um dia no Sona?", a: "Nada quebra. Não existe uma sequência que volta a zero. Perder um dia é uma pequena queda na sua pontuação de consistência, que continua contando com você. Você volta no dia seguinte e seu progresso de longo prazo continua." },
        { q: "É ruim perder um dia de um hábito?", a: "Não. Perder um dia é normal e humano. O que quebra hábitos é a vergonha de tudo ou nada. O Sona foi criado com a ideia de que voltar depois de uma falha é a habilidade real." },
        { q: "Como o Sona é diferente de um rastreador de hábitos comum?", a: "Primeiro, ele não usa sequências punitivas: seu progresso é uma pontuação flexível de consistência. Segundo, cada meta vira um mundo pessoal pintado por IA onde seus hábitos moram." },
        { q: "O que são Espaços?", a: "Um Espaço é um mundo pintado que agrupa hábitos relacionados, como rotina da manhã, ficar mais forte ou dormir melhor. Você descreve em poucas palavras e o Sona pinta para você." },
        { q: "Posso descansar sem perder progresso?", a: "Sim. Você pode descansar um hábito por doença, viagem ou uma semana difícil. O progresso fica protegido e recomeça quando você estiver pronto." },
        { q: "O Sona é grátis e em quais plataformas está?", a: "O Sona é grátis para baixar no iOS, com Android em breve. Ele é privado por design: tudo vive no seu dispositivo, sem conta e sem nuvem." },
      ],
    },
    final: {
      eyebrow: "Comece o longo caminho",
      title: ["Torne sua vida ", { em: "extraordinária" }, "."],
      lede: "Um espaço. Algumas pequenas promessas. Uma pintura que dá vontade de revisitar. O resto são dias, e é para os dias que o Sona existe.",
      support: "Dúvidas? Estamos aqui",
    },
  },
};

export const supportContent: Record<SiteLocale, SupportContent> = {
  "en-US": {
    metadata: {
      title: "Support - Sona",
      description: "Get help with the Sona app.",
    },
    title: "Support",
    intro: "Need help with Sona? Email us and we’ll get back to you.",
    helper:
      "Include your device model, iOS version, and a brief description of the issue for faster help.",
  },
  ja: {
    metadata: {
      title: "サポート - Sona",
      description: "Sonaアプリのサポート窓口です。",
    },
    title: "サポート",
    intro: "Sonaについてお困りですか？メールでご連絡ください。返信いたします。",
    helper:
      "早めに確認できるよう、端末モデル、iOSバージョン、問題の簡単な説明を添えてください。",
  },
  ko: {
    metadata: {
      title: "지원 - Sona",
      description: "Sona 앱 도움말과 지원을 받을 수 있습니다.",
    },
    title: "지원",
    intro: "Sona 사용 중 도움이 필요하신가요? 이메일로 문의해 주세요.",
    helper:
      "빠른 도움을 위해 기기 모델, iOS 버전, 문제에 대한 간단한 설명을 함께 보내 주세요.",
  },
  "es-MX": {
    metadata: {
      title: "Soporte - Sona",
      description: "Obtén ayuda con la app Sona.",
    },
    title: "Soporte",
    intro: "¿Necesitas ayuda con Sona? Escríbenos y te responderemos.",
    helper:
      "Incluye tu modelo de dispositivo, versión de iOS y una breve descripción del problema para ayudarte más rápido.",
  },
  "pt-BR": {
    metadata: {
      title: "Suporte - Sona",
      description: "Receba ajuda com o aplicativo Sona.",
    },
    title: "Suporte",
    intro: "Precisa de ajuda com o Sona? Envie um e-mail e responderemos.",
    helper:
      "Inclua o modelo do dispositivo, a versão do iOS e uma breve descrição do problema para receber ajuda mais rápido.",
  },
};

export const articleUiContent: Record<SiteLocale, ArticleUiContent> = {
  "en-US": {
    indexMetadata: {
      title: "Articles — Sona",
      description:
        "Calm, honest writing on habits, consistency, and building a life you keep coming back to — from the team behind Sona.",
    },
    indexEyebrow: "Field notes",
    indexTitle: ["On habits, gently ", { em: "reconsidered." }],
    indexLede:
      "Honest writing on consistency, rest, and building a life you keep coming back to. No hustle, no shame — just the ideas Sona is built on.",
    allArticlesAria: "All articles",
    empty: "New writing is on the way.",
    readMore: "Read the article →",
    backToAll: "← All articles",
    notFoundTitle: "Article not found — Sona",
    ctaTitle: ["Build a life you ", { em: "keep coming back to." }],
    ctaCopy:
      "Sona is the habit app with no streaks to break. A missed day is a dip in your score, not a reset to zero.",
  },
  ja: {
    indexMetadata: {
      title: "記事 — Sona",
      description:
        "習慣、継続、休息、そして戻ってこられる生活についての、Sonaチームからの穏やかで正直な読みもの。",
    },
    indexEyebrow: "フィールドノート",
    indexTitle: ["習慣を、やさしく", { em: "見直す。" }],
    indexLede:
      "一貫性、休息、また戻れる生活についての正直な文章。根性論でも恥でもなく、Sonaの土台にある考え方です。",
    allArticlesAria: "すべての記事",
    empty: "新しい記事を準備中です。",
    readMore: "記事を読む →",
    backToAll: "← すべての記事",
    notFoundTitle: "記事が見つかりません — Sona",
    ctaTitle: ["また", { em: "戻ってこられる" }, "生活をつくる。"],
    ctaCopy:
      "Sonaは、途切れるストリークに頼らない習慣化アプリです。休んだ日はスコアの少しの下がりで、ゼロ戻りではありません。",
  },
  ko: {
    indexMetadata: {
      title: "글 — Sona",
      description:
        "습관, 일관성, 휴식, 그리고 다시 돌아올 수 있는 삶에 관한 Sona 팀의 차분하고 솔직한 글.",
    },
    indexEyebrow: "필드 노트",
    indexTitle: ["습관을 조용히 ", { em: "다시 생각하기." }],
    indexLede:
      "일관성, 휴식, 다시 돌아올 수 있는 삶에 관한 솔직한 글입니다. 압박도 수치심도 아닌, Sona가 세워진 생각들입니다.",
    allArticlesAria: "모든 글",
    empty: "새 글을 준비 중입니다.",
    readMore: "글 읽기 →",
    backToAll: "← 모든 글",
    notFoundTitle: "글을 찾을 수 없습니다 — Sona",
    ctaTitle: ["다시 ", { em: "돌아올 수 있는" }, " 삶을 만드세요."],
    ctaCopy:
      "Sona는 끊어지는 스트릭이 없는 습관 앱입니다. 놓친 하루는 점수의 작은 하락일 뿐, 0으로 돌아가는 일이 아닙니다.",
  },
  "es-MX": {
    indexMetadata: {
      title: "Artículos — Sona",
      description:
        "Escritura tranquila y honesta sobre hábitos, consistencia y construir una vida a la que vuelves — del equipo de Sona.",
    },
    indexEyebrow: "Notas de campo",
    indexTitle: ["Sobre hábitos, reconsiderados ", { em: "con calma." }],
    indexLede:
      "Ideas honestas sobre consistencia, descanso y construir una vida a la que puedes volver. Sin prisa, sin vergüenza: solo la filosofía detrás de Sona.",
    allArticlesAria: "Todos los artículos",
    empty: "Pronto habrá nuevos textos.",
    readMore: "Leer el artículo →",
    backToAll: "← Todos los artículos",
    notFoundTitle: "Artículo no encontrado — Sona",
    ctaTitle: ["Construye una vida a la que ", { em: "sí vuelves." }],
    ctaCopy:
      "Sona es la app de hábitos sin rachas que se rompen. Faltar un día es una baja en tu puntuación, no volver a cero.",
  },
  "pt-BR": {
    indexMetadata: {
      title: "Artigos — Sona",
      description:
        "Textos calmos e honestos sobre hábitos, consistência e construir uma vida para a qual você volta — da equipe do Sona.",
    },
    indexEyebrow: "Notas de campo",
    indexTitle: ["Sobre hábitos, repensados ", { em: "com calma." }],
    indexLede:
      "Textos honestos sobre consistência, descanso e construir uma vida para a qual você consegue voltar. Sem pressão, sem vergonha: só as ideias por trás do Sona.",
    allArticlesAria: "Todos os artigos",
    empty: "Novos textos estão a caminho.",
    readMore: "Ler o artigo →",
    backToAll: "← Todos os artigos",
    notFoundTitle: "Artigo não encontrado — Sona",
    ctaTitle: ["Construa uma vida para a qual você ", { em: "sempre volta." }],
    ctaCopy:
      "Sona é o aplicativo de hábitos sem sequências que zeram. Perder um dia é uma queda na sua pontuação, não voltar ao zero.",
  },
};
