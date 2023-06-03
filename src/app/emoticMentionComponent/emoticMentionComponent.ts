/**
Angular CLI: 16.0.4
Node: 18.16.0
Package Manager: npm 9.5.1
OS: win32 x64
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'emoticMentionComponent',
  templateUrl: './emoticMentionComponent.html',
  styleUrls: ['./emoticMentionComponent.css']
})
export class EmoticMentionComponent {
  @Input() selectEvent: (data : any) => void = (data: any) => {
    console.log('Default select event', data);
  };

  mentionConfig = {
    mentions: [
      {
        items: [
          { icon: '😀', name: 'grining face', description: 'Emoticon of grining face' },
          { icon: '🥰', name: 'heartsmile', description: 'Smiling face with heart' },
          { icon: '😎', name: 'sunglass', description: 'Smiling face with sunglass Smiling face with sunglassSmiling face with sunglassSmiling face with sunglassSmiling face with sunglassSmiling face with sunglassSmiling face with sunglass' },
          { icon: '😁', name: 'grining face', description: 'Emoticon of grining face' },
          { icon: '🤣', name: 'heartsmile', description: 'Smiling face with heart' },
          { icon: '😅', name: 'grining face', description: 'Emoticon of grining face' },
          { icon: '😉', name: 'heartsmile', description: 'Smiling face with heart' },
          { icon: '🤩', name: 'grining face', description: 'Emoticon of grining face' },
          { icon: '😛', name: 'heartsmile', description: 'Smiling face with heart' },
          { icon: '🙄', name: 'grining face', description: 'Emoticon of grining face' },
          { icon: '🤨', name: 'heartsmile', description: 'Smiling face with heart' },
        ],
        labelKey:'name',
        triggerChar: '/',
        mentionSelect: (item: any) => {
          this.selectEvent(item);
          return item.icon;
        }
      },
      {
        items: [
          { icon: '📁', name: 'files', description: 'Search your files' },
          { icon: '📅', name: 'remind', description: 'Set a reminder' },
          { icon: '🔗', name: 'link', description: 'Create a link' }
        ],
        labelKey:'name',
        triggerChar: '#',
        mentionSelect: (item: any) => {
          this.selectEvent(item);
          return item.icon;
        }
      },
    ],
  };
}