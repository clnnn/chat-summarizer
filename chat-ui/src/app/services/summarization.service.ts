import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable()
export class SummarizationService {
  constructor(private http: HttpClient) {}

  public summarize(messages: Message[]): Observable<{ summaryText: string }> {
    let chatLog = '';
    for (const message of messages) {
      const log = `${message.sender}: ${message.message}\n`;
      chatLog += log;
    }
    return this.http.post<{ summaryText: string }>('http://localhost:9000', {
      chatLog: chatLog,
    });
  }
}
