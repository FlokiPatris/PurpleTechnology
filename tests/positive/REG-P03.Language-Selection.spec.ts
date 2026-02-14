import { test } from 'fixtures/registrationFixtures';

type LanguageCase = {
  name: string;
  optionLabel?: string;
  optionIndex?: number;
  expectedParagraph: string;
};

const cases: LanguageCase[] = [
  {
    name: 'English',
    optionIndex: 1,
    expectedParagraph:
      'Start trading on a live account in under a minute and get ready for an exciting trading experience.',
  },
  {
    name: 'Russian',
    optionIndex: 2,
    expectedParagraph:
      'Начните торговать на реальном счете менее чем за минуту и приготовьтесь к захватывающему торговому опыту.',
  },
  {
    name: 'Spanish',
    optionIndex: 3,
    expectedParagraph:
      'Comienza a operar con una cuenta real en menos de un minuto y prepárate para una experiencia emocionante.',
  },
  {
    name: 'Thai',
    optionIndex: 4,
    expectedParagraph:
      'เริ่มการเทรดด้วยบัญชีจริง ภายในเวลาไม่ถึง 1 นาที และเตรียมพร้อมสำหรับประสบการณ์การเทรดที่น่าตื่นเต้น',
  },
  {
    name: 'Arabic',
    optionIndex: 5,
    expectedParagraph:
      'ابدأ التداول على حسابك الحقيقي خلال أقل من دقيقة واستعد لخوض تجربة تداول مثيرة.',
  },
  // {
  //   name: 'Unknown',
  //   optionIndex: 6,
  //   expectedParagraph:
  //     'Unknown text.',
  // },
];

test.fixme('REG-P04 — Language Selection Works Correctly', async ({ languageIndividualRegistration: registration }) => {
  // Blocked: Language label 'English' appears in the in every dropdown menu item and 6th english option breaks the session.
  // Tracking bug (placeholder): https://jira.example.com/browse/REG-1109

  for (const c of cases) {
    // Act
    // await languageIndividualRegistration.selectLanguageByIndex(c.optionIndex!);
  
    // Assert
    // await languageIndividualRegistration.expectMarketingParagraphText(c.expectedParagraph);
  }
});
