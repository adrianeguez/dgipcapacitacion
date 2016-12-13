import { MatriculasPage } from './app.po';

describe('matriculas App', function() {
  let page: MatriculasPage;

  beforeEach(() => {
    page = new MatriculasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
