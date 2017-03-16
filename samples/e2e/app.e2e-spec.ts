import { TypescriptCognitiveServicesSamplesPage } from './app.po';

describe('typescript-cognitive-services-samples App', function() {
  let page: TypescriptCognitiveServicesSamplesPage;

  beforeEach(() => {
    page = new TypescriptCognitiveServicesSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
