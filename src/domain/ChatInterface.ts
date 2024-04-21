export interface Message {
  role: string;
  content: string;
}

export interface ChatRepository {
  fetchApi(message: string): Promise<string>;
}
