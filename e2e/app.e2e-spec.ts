import { JustDoItPage } from './app.po';

describe('just-do-it App', function() {
  let page: JustDoItPage;

  beforeEach(() => {
    page = new JustDoItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
