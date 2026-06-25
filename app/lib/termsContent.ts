import type { SiteLocale } from "./locales";

type TermsSection =
  | {
      title: string;
      kind: "paragraph";
      text: string;
    }
  | {
      title: string;
      kind: "list";
      items: string[];
    };

export type TermsContent = {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  lastUpdated: string;
  translationNote?: string;
  intro: string;
  sections: TermsSection[];
  contactTitle: string;
  contactIntro: string;
  contactEmail: string;
};

export const termsContent: Record<SiteLocale, TermsContent> = {
  "en-US": {
    metadata: {
      title: "Terms of Use - Sona",
      description: "Terms of Use for the Sona mobile application and services.",
    },
    title: "Terms of Use",
    lastUpdated: "Last updated: Feb 1, 2026",
    intro:
      "These Terms of Use govern your use of the Sona mobile application and related services (the Service). By using the Service, you agree to these terms.",
    sections: [
      {
        title: "Use of Service",
        kind: "list",
        items: [
          "You must be at least 13 years old to use the Service.",
          "You are responsible for your account and any activity under it.",
          "Do not misuse the Service or attempt to disrupt it.",
        ],
      },
      {
        title: "Subscriptions",
        kind: "paragraph",
        text: "If you purchase a subscription, it will renew automatically unless canceled. You can manage or cancel subscriptions in your App Store account settings.",
      },
      {
        title: "Content and Data",
        kind: "paragraph",
        text: "You retain ownership of your data. You grant us a limited license to host and process your data to provide the Service.",
      },
      {
        title: "Acceptable Use",
        kind: "list",
        items: [
          "Do not violate any laws or third-party rights.",
          "Do not attempt to access other users’ data.",
          "Do not reverse engineer or copy the Service.",
        ],
      },
      {
        title: "Disclaimers",
        kind: "paragraph",
        text: "The Service is provided “as is” without warranties of any kind. We do not guarantee uninterrupted or error-free operation.",
      },
      {
        title: "Limitation of Liability",
        kind: "paragraph",
        text: "To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.",
      },
      {
        title: "Termination",
        kind: "paragraph",
        text: "We may suspend or terminate access to the Service if you violate these Terms.",
      },
      {
        title: "Changes",
        kind: "paragraph",
        text: "We may update these Terms from time to time. Continued use of the Service after changes means you accept the updated Terms.",
      },
    ],
    contactTitle: "Contact",
    contactIntro: "Questions? Contact us at:",
    contactEmail: "support@sonahabits.com",
  },
  ja: {
    metadata: {
      title: "利用規約 - Sona",
      description: "Sonaモバイルアプリケーションおよび関連サービスの利用規約。",
    },
    title: "利用規約",
    lastUpdated: "最終更新日: 2026年2月1日",
    translationNote:
      "この翻訳は利便性のために提供されています。翻訳版と英語版に相違がある場合は、英語版が優先されます。",
    intro:
      "本利用規約は、Sonaモバイルアプリケーションおよび関連サービス（本サービス）の利用に適用されます。本サービスを利用することで、本規約に同意したものとみなされます。",
    sections: [
      {
        title: "サービスの利用",
        kind: "list",
        items: [
          "本サービスを利用するには13歳以上である必要があります。",
          "ご自身のアカウントおよびその下で行われる活動について責任を負います。",
          "本サービスを不正利用したり、妨害を試みたりしないでください。",
        ],
      },
      {
        title: "サブスクリプション",
        kind: "paragraph",
        text: "サブスクリプションを購入した場合、キャンセルされない限り自動更新されます。App Storeアカウント設定で管理またはキャンセルできます。",
      },
      {
        title: "コンテンツとデータ",
        kind: "paragraph",
        text: "お客様はご自身のデータの所有権を保持します。当社は、本サービスを提供するために必要な範囲で、お客様のデータをホストおよび処理する限定的なライセンスを得ます。",
      },
      {
        title: "許容される利用",
        kind: "list",
        items: [
          "法律または第三者の権利を侵害しないでください。",
          "他のユーザーのデータにアクセスしようとしないでください。",
          "本サービスをリバースエンジニアリングまたは複製しないでください。",
        ],
      },
      {
        title: "免責事項",
        kind: "paragraph",
        text: "本サービスは現状有姿で提供され、いかなる種類の保証もありません。中断やエラーがないことを保証するものではありません。",
      },
      {
        title: "責任の制限",
        kind: "paragraph",
        text: "法律で認められる最大限の範囲で、当社は本サービスの利用に起因する間接的、付随的、または結果的損害について責任を負いません。",
      },
      {
        title: "終了",
        kind: "paragraph",
        text: "お客様が本規約に違反した場合、当社は本サービスへのアクセスを停止または終了することがあります。",
      },
      {
        title: "変更",
        kind: "paragraph",
        text: "当社は本規約を随時更新することがあります。変更後も本サービスを利用し続ける場合、更新後の規約に同意したものとみなされます。",
      },
    ],
    contactTitle: "お問い合わせ",
    contactIntro: "ご質問は以下までご連絡ください:",
    contactEmail: "support@sonahabits.com",
  },
  ko: {
    metadata: {
      title: "이용약관 - Sona",
      description: "Sona 모바일 애플리케이션 및 관련 서비스의 이용약관입니다.",
    },
    title: "이용약관",
    lastUpdated: "최종 업데이트: 2026년 2월 1일",
    translationNote:
      "이 번역은 편의를 위해 제공됩니다. 번역본과 영어 원문이 충돌하는 경우 영어 원문이 우선합니다.",
    intro:
      "본 이용약관은 Sona 모바일 애플리케이션 및 관련 서비스(서비스)의 사용에 적용됩니다. 서비스를 사용하면 본 약관에 동의하는 것으로 간주됩니다.",
    sections: [
      {
        title: "서비스 이용",
        kind: "list",
        items: [
          "서비스를 이용하려면 만 13세 이상이어야 합니다.",
          "사용자는 자신의 계정 및 그 계정에서 발생하는 활동에 책임이 있습니다.",
          "서비스를 오용하거나 방해하려고 시도하지 마세요.",
        ],
      },
      {
        title: "구독",
        kind: "paragraph",
        text: "구독을 구매하면 취소하지 않는 한 자동으로 갱신됩니다. App Store 계정 설정에서 구독을 관리하거나 취소할 수 있습니다.",
      },
      {
        title: "콘텐츠와 데이터",
        kind: "paragraph",
        text: "사용자는 자신의 데이터에 대한 소유권을 유지합니다. 당사는 서비스를 제공하기 위해 필요한 범위에서 사용자의 데이터를 호스팅하고 처리할 제한적 라이선스를 받습니다.",
      },
      {
        title: "허용되는 사용",
        kind: "list",
        items: [
          "법률 또는 제3자의 권리를 침해하지 마세요.",
          "다른 사용자의 데이터에 접근하려고 시도하지 마세요.",
          "서비스를 리버스 엔지니어링하거나 복사하지 마세요.",
        ],
      },
      {
        title: "면책 조항",
        kind: "paragraph",
        text: "서비스는 어떠한 보증 없이 있는 그대로 제공됩니다. 중단이나 오류가 없는 운영을 보장하지 않습니다.",
      },
      {
        title: "책임의 제한",
        kind: "paragraph",
        text: "법률이 허용하는 최대 범위에서, 당사는 서비스 사용으로 인해 발생하는 간접적, 부수적 또는 결과적 손해에 대해 책임을 지지 않습니다.",
      },
      {
        title: "종료",
        kind: "paragraph",
        text: "사용자가 본 약관을 위반하는 경우 당사는 서비스 접근을 일시 중지하거나 종료할 수 있습니다.",
      },
      {
        title: "변경",
        kind: "paragraph",
        text: "당사는 본 약관을 수시로 업데이트할 수 있습니다. 변경 후 서비스를 계속 사용하면 업데이트된 약관에 동의하는 것으로 간주됩니다.",
      },
    ],
    contactTitle: "문의",
    contactIntro: "질문이 있으시면 아래로 문의해 주세요:",
    contactEmail: "support@sonahabits.com",
  },
  "es-MX": {
    metadata: {
      title: "Términos de uso - Sona",
      description: "Términos de uso de la aplicación móvil Sona y sus servicios.",
    },
    title: "Términos de uso",
    lastUpdated: "Última actualización: 1 de febrero de 2026",
    translationNote:
      "Esta traducción se ofrece para su comodidad. Si hay algún conflicto entre esta versión y la versión en inglés, prevalecerá la versión en inglés.",
    intro:
      "Estos Términos de uso rigen el uso de la aplicación móvil Sona y los servicios relacionados (el Servicio). Al usar el Servicio, aceptas estos términos.",
    sections: [
      {
        title: "Uso del Servicio",
        kind: "list",
        items: [
          "Debes tener al menos 13 años para usar el Servicio.",
          "Eres responsable de tu cuenta y de cualquier actividad realizada con ella.",
          "No hagas mal uso del Servicio ni intentes interrumpirlo.",
        ],
      },
      {
        title: "Suscripciones",
        kind: "paragraph",
        text: "Si compras una suscripción, se renovará automáticamente a menos que la canceles. Puedes administrar o cancelar suscripciones en la configuración de tu cuenta de App Store.",
      },
      {
        title: "Contenido y datos",
        kind: "paragraph",
        text: "Conservas la propiedad de tus datos. Nos otorgas una licencia limitada para alojar y procesar tus datos con el fin de proporcionar el Servicio.",
      },
      {
        title: "Uso aceptable",
        kind: "list",
        items: [
          "No infrinjas leyes ni derechos de terceros.",
          "No intentes acceder a los datos de otros usuarios.",
          "No hagas ingeniería inversa ni copies el Servicio.",
        ],
      },
      {
        title: "Descargos de responsabilidad",
        kind: "paragraph",
        text: "El Servicio se proporciona “tal cual”, sin garantías de ningún tipo. No garantizamos que funcione sin interrupciones o errores.",
      },
      {
        title: "Limitación de responsabilidad",
        kind: "paragraph",
        text: "En la máxima medida permitida por la ley, no somos responsables por daños indirectos, incidentales o consecuentes derivados del uso del Servicio.",
      },
      {
        title: "Terminación",
        kind: "paragraph",
        text: "Podemos suspender o terminar el acceso al Servicio si incumples estos Términos.",
      },
      {
        title: "Cambios",
        kind: "paragraph",
        text: "Podemos actualizar estos Términos ocasionalmente. El uso continuo del Servicio después de los cambios significa que aceptas los Términos actualizados.",
      },
    ],
    contactTitle: "Contacto",
    contactIntro: "¿Preguntas? Contáctanos en:",
    contactEmail: "support@sonahabits.com",
  },
  "pt-BR": {
    metadata: {
      title: "Termos de Uso - Sona",
      description: "Termos de Uso do aplicativo móvel Sona e seus serviços.",
    },
    title: "Termos de Uso",
    lastUpdated: "Última atualização: 1 de fevereiro de 2026",
    translationNote:
      "Esta tradução é fornecida para sua conveniência. Se houver conflito entre esta versão e a versão em inglês, a versão em inglês prevalecerá.",
    intro:
      "Estes Termos de Uso regem o uso do aplicativo móvel Sona e serviços relacionados (o Serviço). Ao usar o Serviço, você concorda com estes termos.",
    sections: [
      {
        title: "Uso do Serviço",
        kind: "list",
        items: [
          "Você deve ter pelo menos 13 anos para usar o Serviço.",
          "Você é responsável pela sua conta e por qualquer atividade realizada nela.",
          "Não faça uso indevido do Serviço nem tente interrompê-lo.",
        ],
      },
      {
        title: "Assinaturas",
        kind: "paragraph",
        text: "Se você comprar uma assinatura, ela será renovada automaticamente, a menos que seja cancelada. Você pode gerenciar ou cancelar assinaturas nas configurações da sua conta da App Store.",
      },
      {
        title: "Conteúdo e dados",
        kind: "paragraph",
        text: "Você mantém a propriedade dos seus dados. Você nos concede uma licença limitada para hospedar e processar seus dados a fim de fornecer o Serviço.",
      },
      {
        title: "Uso aceitável",
        kind: "list",
        items: [
          "Não viole leis nem direitos de terceiros.",
          "Não tente acessar dados de outros usuários.",
          "Não faça engenharia reversa nem copie o Serviço.",
        ],
      },
      {
        title: "Isenções de responsabilidade",
        kind: "paragraph",
        text: "O Serviço é fornecido “como está”, sem garantias de qualquer tipo. Não garantimos operação ininterrupta ou livre de erros.",
      },
      {
        title: "Limitação de responsabilidade",
        kind: "paragraph",
        text: "Na máxima extensão permitida por lei, não somos responsáveis por danos indiretos, incidentais ou consequenciais decorrentes do uso do Serviço.",
      },
      {
        title: "Encerramento",
        kind: "paragraph",
        text: "Podemos suspender ou encerrar o acesso ao Serviço se você violar estes Termos.",
      },
      {
        title: "Alterações",
        kind: "paragraph",
        text: "Podemos atualizar estes Termos de tempos em tempos. O uso contínuo do Serviço após alterações significa que você aceita os Termos atualizados.",
      },
    ],
    contactTitle: "Contato",
    contactIntro: "Dúvidas? Fale conosco em:",
    contactEmail: "support@sonahabits.com",
  },
};
