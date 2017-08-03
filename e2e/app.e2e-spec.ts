import { CellarOfWinePage } from './app.po';

describe('cellar-of-wine App', () => {
  let page: CellarOfWinePage;

  beforeEach(() => {
    page = new CellarOfWinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
