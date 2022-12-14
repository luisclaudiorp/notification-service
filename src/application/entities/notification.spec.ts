import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Voce Recebeu uma solicitação de amizade.'),
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
