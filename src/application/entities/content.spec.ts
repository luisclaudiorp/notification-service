import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Voce Recebeu uma solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 content', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it should not be able to create a notification content with more than 240 content', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
