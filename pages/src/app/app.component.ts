import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1695069081587-8eab96a7a5aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1695007439803-043bf646f197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Cat',
      url: 'https://images.unsplash.com/photo-1693933499775-e7a52ddee7d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the sheep',
      url: 'https://plus.unsplash.com/premium_photo-1693160054879-4a822f244336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Half Moon',
      url: 'https://images.unsplash.com/photo-1695256294687-5df561945542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    },
    {
      title: 'colorful bird',
      url: 'https://images.unsplash.com/photo-1694435833920-5578d935bc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'bird with a fish',
      url: 'https://images.unsplash.com/photo-1694852883365-a9379ac25a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1695069081587-8eab96a7a5aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1695007439803-043bf646f197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Cat',
      url: 'https://images.unsplash.com/photo-1693933499775-e7a52ddee7d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the sheep',
      url: 'https://plus.unsplash.com/premium_photo-1693160054879-4a822f244336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Half Moon',
      url: 'https://images.unsplash.com/photo-1695256294687-5df561945542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    },
    {
      title: 'colorful bird',
      url: 'https://images.unsplash.com/photo-1694435833920-5578d935bc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'bird with a fish',
      url: 'https://images.unsplash.com/photo-1694852883365-a9379ac25a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1695069081587-8eab96a7a5aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1695007439803-043bf646f197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Cat',
      url: 'https://images.unsplash.com/photo-1693933499775-e7a52ddee7d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the sheep',
      url: 'https://plus.unsplash.com/premium_photo-1693160054879-4a822f244336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Half Moon',
      url: 'https://images.unsplash.com/photo-1695256294687-5df561945542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    },
    {
      title: 'colorful bird',
      url: 'https://images.unsplash.com/photo-1694435833920-5578d935bc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'bird with a fish',
      url: 'https://images.unsplash.com/photo-1694852883365-a9379ac25a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
