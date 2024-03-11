export interface SearchListItem {
  thumbnail: string | null;
  name: string;
  username: string;
  status: 'pending-them' | 'pending-me' | 'connected' | 'not-connected';
}
