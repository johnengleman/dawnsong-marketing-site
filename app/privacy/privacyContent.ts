import type { Metadata } from "next";
import type { SiteLocale } from "../lib/locales";

export type PrivacyLocale = SiteLocale;

type PrivacyParagraph = {
  label?: string;
  text: string;
};

type PrivacySection =
  | {
      title: string;
      kind: "paragraphs";
      paragraphs: PrivacyParagraph[];
    }
  | {
      title: string;
      kind: "list";
      items: string[];
    };

export type PrivacyPolicyContent = {
  htmlLang: string;
  metadata: Metadata;
  title: string;
  lastUpdated: string;
  translationNote?: string;
  intro: string;
  summaryTitle: string;
  summary: string[];
  sections: PrivacySection[];
  contactTitle: string;
  contactIntro: string;
  contactEmail: string;
};

const privacyAlternates = {
  languages: {
    "en-US": "/privacy",
    ja: "/ja/privacy",
    ko: "/ko/privacy",
    "es-MX": "/es-MX/privacy",
    "pt-BR": "/pt-BR/privacy",
  },
};

export const privacyPolicyContent: Record<PrivacyLocale, PrivacyPolicyContent> =
  {
    "en-US": {
      htmlLang: "en-US",
      metadata: {
        title: "Privacy Policy - Sona",
        description:
          "Sona privacy policy describing local habit data, subscriptions, analytics, AI painting generation, and user rights.",
        alternates: {
          canonical: "/privacy",
          ...privacyAlternates,
        },
      },
      title: "Privacy Policy",
      lastUpdated: "Last updated: Jun 20, 2026",
      intro:
        'This Privacy Policy explains how Sona ("we," "us," or "our") handles information when you use the Sona mobile application and related services (the "Service").',
      summaryTitle: "Summary",
      summary: [
        "Your habit history is stored locally on your device.",
        "Some services, such as subscriptions, AI painting generation, analytics, crash reporting, purchased painting credits, and optional notifications, require trusted service providers.",
        "Your data is never sold.",
        "You can request access, correction, or deletion at any time.",
      ],
      sections: [
        {
          title: "Information We Collect",
          kind: "paragraphs",
          paragraphs: [
            {
              label: "Local App Data:",
              text: "Habit entries, spaces, schedules, reminders, progress history, settings, and backups you create are stored on your device unless you choose to export or share them.",
            },
            {
              label: "Service Data:",
              text: "When you use AI painting generation, buy painting credits, subscribe, restore purchases, or opt into image-ready notifications, we process the information needed to provide those features. This can include image prompts, space descriptions, reference images, generated images, purchase and credit records, an anonymous app-generated device identifier, and an Expo push token if notifications are enabled.",
            },
            {
              label: "Usage and Diagnostics:",
              text: "We may collect analytics, crash reports, performance data, and feature usage information to improve reliability and understand how the app is working.",
            },
            {
              label: "Support Requests:",
              text: "If you contact support, we may receive your email address and any information you choose to include in your message.",
            },
          ],
        },
        {
          title: "How We Use Data",
          kind: "list",
          items: [
            "Provide and maintain the Service.",
            "Generate and deliver AI paintings for your spaces.",
            "Manage subscriptions, purchase restoration, and painting credit balances.",
            "Send optional notifications when a requested image is ready.",
            "Improve app stability and user experience.",
            "Respond to support requests.",
          ],
        },
        {
          title: "Data Sharing",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "We do not sell your data. We may share limited data with trusted providers who help us operate the Service, including subscription and purchase providers, analytics and crash-reporting providers, AI generation providers, hosting infrastructure, and notification providers.",
            },
          ],
        },
        {
          title: "Data Retention",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "Local app data remains on your device until you delete it or uninstall the app. Service data is retained only as long as needed to provide the relevant feature, maintain purchase and credit records, comply with legal obligations, or resolve support and reliability issues. Temporary AI generation job records are designed to expire automatically.",
            },
          ],
        },
        {
          title: "Your Rights",
          kind: "list",
          items: [
            "Access, update, or delete your personal data.",
            "Withdraw consent where applicable.",
            "Opt out of non-essential analytics where available.",
          ],
        },
        {
          title: "Security",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "We use reasonable technical and organizational measures to protect your information. However, no system is 100% secure.",
            },
          ],
        },
        {
          title: "Children's Privacy",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "The Service is not directed to children under 13, and we do not knowingly collect personal information from children.",
            },
          ],
        },
      ],
      contactTitle: "Contact",
      contactIntro: "If you have any questions or requests, contact us at:",
      contactEmail: "support@sonahabits.com",
    },
    ja: {
      htmlLang: "ja",
      metadata: {
        title: "プライバシーポリシー - Sona",
        description:
          "Sonaのローカル習慣データ、サブスクリプション、分析、AIによる絵の生成、ユーザーの権利について説明するプライバシーポリシー。",
        alternates: {
          canonical: "/ja/privacy",
          ...privacyAlternates,
        },
      },
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日: 2026年6月20日",
      translationNote:
        "この翻訳は利便性のために提供されています。翻訳版と英語版に相違がある場合は、英語版が優先されます。",
      intro:
        "このプライバシーポリシーは、Sona（当社）がSonaモバイルアプリケーションおよび関連サービス（本サービス）をご利用いただく際に、情報をどのように取り扱うかを説明します。",
      summaryTitle: "概要",
      summary: [
        "習慣の履歴は、お客様のデバイス上にローカル保存されます。",
        "サブスクリプション、AIによる絵の生成、分析、クラッシュレポート、購入済み絵画クレジット、任意の通知など、一部のサービスでは信頼できるサービスプロバイダーが必要になります。",
        "お客様のデータを販売することはありません。",
        "お客様はいつでも、アクセス、訂正、削除をリクエストできます。",
      ],
      sections: [
        {
          title: "収集する情報",
          kind: "paragraphs",
          paragraphs: [
            {
              label: "ローカルアプリデータ:",
              text: "習慣の記録、スペース、スケジュール、リマインダー、進捗履歴、設定、および作成したバックアップは、お客様がエクスポートまたは共有することを選択しない限り、お客様のデバイスに保存されます。",
            },
            {
              label: "サービスデータ:",
              text: "AIによる絵の生成、絵画クレジットの購入、サブスクリプション、購入の復元、画像完成時の通知を利用する場合、当社はそれらの機能を提供するために必要な情報を処理します。これには、画像プロンプト、スペースの説明、参照画像、生成画像、購入およびクレジット記録、匿名のアプリ生成デバイス識別子、通知を有効にした場合のExpoプッシュトークンが含まれることがあります。",
            },
            {
              label: "利用状況と診断:",
              text: "当社は、信頼性を向上させ、アプリの動作を把握するために、分析情報、クラッシュレポート、パフォーマンスデータ、機能の利用状況を収集することがあります。",
            },
            {
              label: "サポートリクエスト:",
              text: "サポートにお問い合わせいただいた場合、当社はお客様のメールアドレスおよびメッセージに含めることを選択した情報を受け取ることがあります。",
            },
          ],
        },
        {
          title: "データの利用方法",
          kind: "list",
          items: [
            "本サービスを提供し、維持するため。",
            "スペース用のAI画像を生成し、提供するため。",
            "サブスクリプション、購入の復元、絵画クレジット残高を管理するため。",
            "リクエストした画像が完成したときに任意の通知を送信するため。",
            "アプリの安定性とユーザー体験を改善するため。",
            "サポートリクエストに対応するため。",
          ],
        },
        {
          title: "データの共有",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "当社はお客様のデータを販売しません。当社は、サブスクリプションおよび購入プロバイダー、分析およびクラッシュレポートプロバイダー、AI生成プロバイダー、ホスティング基盤、通知プロバイダーなど、本サービスの運営を支援する信頼できるプロバイダーと限定的なデータを共有することがあります。",
            },
          ],
        },
        {
          title: "データの保持",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "ローカルアプリデータは、お客様が削除するかアプリをアンインストールするまでデバイス上に残ります。サービスデータは、関連機能の提供、購入およびクレジット記録の維持、法的義務の遵守、サポートおよび信頼性に関する問題の解決に必要な期間に限り保持されます。一時的なAI生成ジョブ記録は自動的に期限切れになるよう設計されています。",
            },
          ],
        },
        {
          title: "お客様の権利",
          kind: "list",
          items: [
            "個人データへのアクセス、更新、削除。",
            "該当する場合、同意の撤回。",
            "利用可能な場合、必須ではない分析のオプトアウト。",
          ],
        },
        {
          title: "セキュリティ",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "当社は、お客様の情報を保護するため、合理的な技術的および組織的対策を講じます。ただし、100%安全なシステムはありません。",
            },
          ],
        },
        {
          title: "子どものプライバシー",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "本サービスは13歳未満のお子様を対象としておらず、当社は子どもから個人情報を故意に収集しません。",
            },
          ],
        },
      ],
      contactTitle: "お問い合わせ",
      contactIntro: "ご質問やリクエストがある場合は、以下までご連絡ください:",
      contactEmail: "support@sonahabits.com",
    },
    ko: {
      htmlLang: "ko",
      metadata: {
        title: "개인정보 처리방침 - Sona",
        description:
          "Sona의 로컬 습관 데이터, 구독, 분석, AI 그림 생성 및 사용자 권리에 대해 설명하는 개인정보 처리방침입니다.",
        alternates: {
          canonical: "/ko/privacy",
          ...privacyAlternates,
        },
      },
      title: "개인정보 처리방침",
      lastUpdated: "최종 업데이트: 2026년 6월 20일",
      translationNote:
        "이 번역은 편의를 위해 제공됩니다. 번역본과 영어 원문이 충돌하는 경우 영어 원문이 우선합니다.",
      intro:
        "이 개인정보 처리방침은 Sona(당사)가 Sona 모바일 애플리케이션 및 관련 서비스(서비스)를 이용하실 때 정보를 어떻게 처리하는지 설명합니다.",
      summaryTitle: "요약",
      summary: [
        "습관 기록은 사용자의 기기에 로컬로 저장됩니다.",
        "구독, AI 그림 생성, 분석, 충돌 보고, 구매한 그림 크레딧, 선택적 알림과 같은 일부 서비스에는 신뢰할 수 있는 서비스 제공업체가 필요합니다.",
        "사용자의 데이터는 판매되지 않습니다.",
        "사용자는 언제든지 열람, 정정 또는 삭제를 요청할 수 있습니다.",
      ],
      sections: [
        {
          title: "수집하는 정보",
          kind: "paragraphs",
          paragraphs: [
            {
              label: "로컬 앱 데이터:",
              text: "습관 기록, 공간, 일정, 리마인더, 진행 기록, 설정 및 사용자가 만든 백업은 사용자가 내보내거나 공유하기로 선택하지 않는 한 사용자의 기기에 저장됩니다.",
            },
            {
              label: "서비스 데이터:",
              text: "AI 그림 생성, 그림 크레딧 구매, 구독, 구매 복원 또는 이미지 준비 알림을 사용하는 경우, 당사는 해당 기능을 제공하는 데 필요한 정보를 처리합니다. 여기에는 이미지 프롬프트, 공간 설명, 참조 이미지, 생성된 이미지, 구매 및 크레딧 기록, 익명의 앱 생성 기기 식별자, 알림이 활성화된 경우 Expo 푸시 토큰이 포함될 수 있습니다.",
            },
            {
              label: "사용 및 진단 데이터:",
              text: "당사는 안정성을 개선하고 앱이 어떻게 작동하는지 이해하기 위해 분석, 충돌 보고, 성능 데이터 및 기능 사용 정보를 수집할 수 있습니다.",
            },
            {
              label: "지원 요청:",
              text: "사용자가 지원팀에 문의하는 경우, 당사는 이메일 주소와 사용자가 메시지에 포함하기로 선택한 정보를 받을 수 있습니다.",
            },
          ],
        },
        {
          title: "데이터 이용 방법",
          kind: "list",
          items: [
            "서비스를 제공하고 유지합니다.",
            "사용자의 공간을 위한 AI 그림을 생성하고 전달합니다.",
            "구독, 구매 복원 및 그림 크레딧 잔액을 관리합니다.",
            "요청한 이미지가 준비되었을 때 선택적 알림을 보냅니다.",
            "앱 안정성과 사용자 경험을 개선합니다.",
            "지원 요청에 응답합니다.",
          ],
        },
        {
          title: "데이터 공유",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "당사는 사용자의 데이터를 판매하지 않습니다. 당사는 구독 및 구매 제공업체, 분석 및 충돌 보고 제공업체, AI 생성 제공업체, 호스팅 인프라, 알림 제공업체 등 서비스 운영을 돕는 신뢰할 수 있는 제공업체와 제한된 데이터를 공유할 수 있습니다.",
            },
          ],
        },
        {
          title: "데이터 보관",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "로컬 앱 데이터는 사용자가 삭제하거나 앱을 제거할 때까지 기기에 남아 있습니다. 서비스 데이터는 관련 기능 제공, 구매 및 크레딧 기록 유지, 법적 의무 준수, 지원 및 안정성 문제 해결에 필요한 기간 동안만 보관됩니다. 임시 AI 생성 작업 기록은 자동으로 만료되도록 설계되어 있습니다.",
            },
          ],
        },
        {
          title: "사용자의 권리",
          kind: "list",
          items: [
            "개인 데이터에 접근, 업데이트 또는 삭제를 요청할 수 있습니다.",
            "해당되는 경우 동의를 철회할 수 있습니다.",
            "이용 가능한 경우 필수적이지 않은 분석을 거부할 수 있습니다.",
          ],
        },
        {
          title: "보안",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "당사는 사용자의 정보를 보호하기 위해 합리적인 기술적 및 조직적 조치를 사용합니다. 그러나 어떤 시스템도 100% 안전하지는 않습니다.",
            },
          ],
        },
        {
          title: "아동의 개인정보",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "서비스는 만 13세 미만의 아동을 대상으로 하지 않으며, 당사는 아동으로부터 개인 정보를 고의로 수집하지 않습니다.",
            },
          ],
        },
      ],
      contactTitle: "문의",
      contactIntro: "질문이나 요청이 있는 경우 아래로 문의해 주세요:",
      contactEmail: "support@sonahabits.com",
    },
    "es-MX": {
      htmlLang: "es-MX",
      metadata: {
        title: "Política de privacidad - Sona",
        description:
          "Política de privacidad de Sona que describe datos locales de hábitos, suscripciones, analítica, generación de pinturas con IA y derechos del usuario.",
        alternates: {
          canonical: "/es-MX/privacy",
          ...privacyAlternates,
        },
      },
      title: "Política de privacidad",
      lastUpdated: "Última actualización: 20 de junio de 2026",
      translationNote:
        "Esta traducción se ofrece para su comodidad. Si hay algún conflicto entre esta versión y la versión en inglés, prevalecerá la versión en inglés.",
      intro:
        "Esta Política de privacidad explica cómo Sona (nosotros) maneja la información cuando usted usa la aplicación móvil Sona y los servicios relacionados (el Servicio).",
      summaryTitle: "Resumen",
      summary: [
        "Su historial de hábitos se almacena localmente en su dispositivo.",
        "Algunos servicios, como suscripciones, generación de pinturas con IA, analítica, reportes de fallas, créditos de pintura comprados y notificaciones opcionales, requieren proveedores de servicios de confianza.",
        "Sus datos nunca se venden.",
        "Puede solicitar acceso, corrección o eliminación en cualquier momento.",
      ],
      sections: [
        {
          title: "Información que recopilamos",
          kind: "paragraphs",
          paragraphs: [
            {
              label: "Datos locales de la app:",
              text: "Los registros de hábitos, espacios, horarios, recordatorios, historial de progreso, ajustes y copias de seguridad que usted cree se almacenan en su dispositivo, a menos que elija exportarlos o compartirlos.",
            },
            {
              label: "Datos del servicio:",
              text: "Cuando usa la generación de pinturas con IA, compra créditos de pintura, se suscribe, restaura compras u opta por notificaciones cuando una imagen está lista, procesamos la información necesaria para ofrecer esas funciones. Esto puede incluir prompts de imagen, descripciones de espacios, imágenes de referencia, imágenes generadas, registros de compras y créditos, un identificador anónimo generado por la app y un token push de Expo si las notificaciones están activadas.",
            },
            {
              label: "Uso y diagnóstico:",
              text: "Podemos recopilar analítica, reportes de fallas, datos de rendimiento e información de uso de funciones para mejorar la confiabilidad y entender cómo funciona la app.",
            },
            {
              label: "Solicitudes de soporte:",
              text: "Si contacta a soporte, podemos recibir su dirección de correo electrónico y cualquier información que decida incluir en su mensaje.",
            },
          ],
        },
        {
          title: "Cómo usamos los datos",
          kind: "list",
          items: [
            "Prestar y mantener el Servicio.",
            "Generar y entregar pinturas con IA para sus espacios.",
            "Gestionar suscripciones, restauración de compras y saldos de créditos de pintura.",
            "Enviar notificaciones opcionales cuando una imagen solicitada está lista.",
            "Mejorar la estabilidad de la app y la experiencia del usuario.",
            "Responder a solicitudes de soporte.",
          ],
        },
        {
          title: "Compartir datos",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "No vendemos sus datos. Podemos compartir datos limitados con proveedores de confianza que nos ayudan a operar el Servicio, incluidos proveedores de suscripciones y compras, proveedores de analítica y reportes de fallas, proveedores de generación con IA, infraestructura de alojamiento y proveedores de notificaciones.",
            },
          ],
        },
        {
          title: "Conservación de datos",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "Los datos locales de la app permanecen en su dispositivo hasta que usted los elimine o desinstale la app. Los datos del servicio se conservan solo durante el tiempo necesario para proporcionar la función correspondiente, mantener registros de compras y créditos, cumplir obligaciones legales o resolver problemas de soporte y confiabilidad. Los registros temporales de trabajos de generación con IA están diseñados para caducar automáticamente.",
            },
          ],
        },
        {
          title: "Sus derechos",
          kind: "list",
          items: [
            "Acceder, actualizar o eliminar sus datos personales.",
            "Retirar el consentimiento cuando corresponda.",
            "Excluirse de analítica no esencial cuando esté disponible.",
          ],
        },
        {
          title: "Seguridad",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "Usamos medidas técnicas y organizativas razonables para proteger su información. Sin embargo, ningún sistema es 100% seguro.",
            },
          ],
        },
        {
          title: "Privacidad de menores",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "El Servicio no está dirigido a menores de 13 años y no recopilamos intencionalmente información personal de menores.",
            },
          ],
        },
      ],
      contactTitle: "Contacto",
      contactIntro: "Si tiene preguntas o solicitudes, contáctenos en:",
      contactEmail: "support@sonahabits.com",
    },
    "pt-BR": {
      htmlLang: "pt-BR",
      metadata: {
        title: "Política de Privacidade - Sona",
        description:
          "Política de privacidade do Sona sobre dados locais de hábitos, assinaturas, análises, geração de pinturas por IA e direitos do usuário.",
        alternates: {
          canonical: "/pt-BR/privacy",
          ...privacyAlternates,
        },
      },
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 20 de junho de 2026",
      translationNote:
        "Esta tradução é fornecida para sua conveniência. Se houver conflito entre esta versão e a versão em inglês, a versão em inglês prevalecerá.",
      intro:
        "Esta Política de Privacidade explica como o Sona (nós) trata informações quando você usa o aplicativo móvel Sona e serviços relacionados (o Serviço).",
      summaryTitle: "Resumo",
      summary: [
        "Seu histórico de hábitos é armazenado localmente no seu dispositivo.",
        "Alguns serviços, como assinaturas, geração de pinturas por IA, análises, relatórios de falhas, créditos de pintura comprados e notificações opcionais, exigem provedores de serviço confiáveis.",
        "Seus dados nunca são vendidos.",
        "Você pode solicitar acesso, correção ou exclusão a qualquer momento.",
      ],
      sections: [
        {
          title: "Informações que coletamos",
          kind: "paragraphs",
          paragraphs: [
            {
              label: "Dados locais do app:",
              text: "Registros de hábitos, espaços, horários, lembretes, histórico de progresso, ajustes e backups que você cria ficam armazenados no seu dispositivo, a menos que você escolha exportá-los ou compartilhá-los.",
            },
            {
              label: "Dados do serviço:",
              text: "Quando você usa a geração de pinturas por IA, compra créditos de pintura, assina, restaura compras ou ativa notificações de imagem pronta, processamos as informações necessárias para fornecer esses recursos. Isso pode incluir prompts de imagem, descrições de espaços, imagens de referência, imagens geradas, registros de compra e crédito, um identificador anônimo gerado pelo app e um token push do Expo se as notificações estiverem ativadas.",
            },
            {
              label: "Uso e diagnóstico:",
              text: "Podemos coletar análises, relatórios de falhas, dados de desempenho e informações de uso de recursos para melhorar a confiabilidade e entender como o app está funcionando.",
            },
            {
              label: "Solicitações de suporte:",
              text: "Se você entrar em contato com o suporte, poderemos receber seu endereço de e-mail e qualquer informação que você escolher incluir na mensagem.",
            },
          ],
        },
        {
          title: "Como usamos os dados",
          kind: "list",
          items: [
            "Fornecer e manter o Serviço.",
            "Gerar e entregar pinturas por IA para seus espaços.",
            "Gerenciar assinaturas, restauração de compras e saldos de créditos de pintura.",
            "Enviar notificações opcionais quando uma imagem solicitada estiver pronta.",
            "Melhorar a estabilidade do app e a experiência do usuário.",
            "Responder a solicitações de suporte.",
          ],
        },
        {
          title: "Compartilhamento de dados",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "Não vendemos seus dados. Podemos compartilhar dados limitados com provedores confiáveis que nos ajudam a operar o Serviço, incluindo provedores de assinatura e compra, provedores de análise e relatórios de falha, provedores de geração por IA, infraestrutura de hospedagem e provedores de notificação.",
            },
          ],
        },
        {
          title: "Retenção de dados",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "Os dados locais do app permanecem no seu dispositivo até que você os exclua ou desinstale o app. Os dados do serviço são retidos apenas pelo tempo necessário para fornecer o recurso relevante, manter registros de compra e crédito, cumprir obrigações legais ou resolver problemas de suporte e confiabilidade. Registros temporários de trabalhos de geração por IA são projetados para expirar automaticamente.",
            },
          ],
        },
        {
          title: "Seus direitos",
          kind: "list",
          items: [
            "Acessar, atualizar ou excluir seus dados pessoais.",
            "Retirar consentimento quando aplicável.",
            "Optar por não participar de análises não essenciais quando disponível.",
          ],
        },
        {
          title: "Segurança",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "Usamos medidas técnicas e organizacionais razoáveis para proteger suas informações. No entanto, nenhum sistema é 100% seguro.",
            },
          ],
        },
        {
          title: "Privacidade de crianças",
          kind: "paragraphs",
          paragraphs: [
            {
              text: "O Serviço não é direcionado a crianças menores de 13 anos, e não coletamos intencionalmente informações pessoais de crianças.",
            },
          ],
        },
      ],
      contactTitle: "Contato",
      contactIntro: "Se você tiver dúvidas ou solicitações, fale conosco em:",
      contactEmail: "support@sonahabits.com",
    },
  };
