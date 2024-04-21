import {ChatRepository} from '../domain/ChatInterface';
import Config from 'react-native-config';

export class OpenAiChatRepository implements ChatRepository {
  private readonly assistantApi: string;

  constructor() {
    this.assistantApi = Config.API_URL ?? '';
  }

  async fetchApi(message: string): Promise<string> {
    const endpointChat = `${this.assistantApi}/chat`;

    try {
      const response = await fetch(endpointChat, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
        }),
      });
      const answer = await response.json();
      // const newMessages = [
      //   ...messages,
      //   {role: Roles.ASSISTANT, content: answer.trim()},
      // ];
      return Promise.resolve(answer.response);
    } catch (error) {
      console.error('Error calling Chat API:', error);
      return Promise.reject(error);
    }
  }
}
