export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  status: string;
  data: T;
  message: string;
  timestamp: string;
}
