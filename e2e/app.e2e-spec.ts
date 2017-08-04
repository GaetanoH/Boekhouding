import { BhAppPage } from './app.po';

describe('bh-app App', () => {
  let page: BhAppPage;

  beforeEach(() => {
    page = new BhAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
