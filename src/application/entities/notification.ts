import { Replace } from '../helpers/Replace';
import { Content } from './content';

interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  reatAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId() {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content() {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category() {
    return this.props.category;
  }

  public set reatAt(reatAt: Date | null | undefined) {
    this.props.reatAt = reatAt;
  }

  public get reatAt(): Date | null | undefined {
    return this.props.reatAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
