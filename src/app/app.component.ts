import { Component } from '@angular/core';
import { GeminiService } from './gemini.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gemini-chat-assistant';

  constructor(private readonly geminiService: GeminiService) {}

  ngOnInit(): void {
    this.geminiService
      .generateText('Test prompt')
      .then((text) => console.log('Success:', text))
      .catch((err) => console.error('Handled rejection:', err)); // ← Prevents uncaught
  }
}
